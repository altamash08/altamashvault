import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

const ContinueLearning = () => {
  const { userData, enrolledCourses, backendUrl, getToken, calculateNoOfLectures } = useContext(AppContext)
  const [progress, setProgress] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let active = true
    const load = async () => {
      if (!userData || enrolledCourses.length === 0) { setProgress([]); return }
      setLoading(true)
      try {
        const token = await getToken()
        const results = await Promise.all(enrolledCourses.map(async course => {
          const { data } = await axios.post(`${backendUrl}/api/user/get-course-progress`, { courseId: course._id }, { headers: { Authorization: `Bearer ${token}` } })
          const total = calculateNoOfLectures(course)
          const completed = data.progressData?.lectureCompleted?.length || 0
          const key = `altamashvault:lastLecture:${userData._id}:${course._id}`
          let saved = null
          try { saved = JSON.parse(localStorage.getItem(key) || 'null') } catch { saved = null }
          return { course, total, completed, percent: total ? Math.min(100, Math.round(completed * 100 / total)) : 0, saved }
        }))
        if (active) setProgress(results)
      } catch (error) {
        console.warn('Unable to load learning progress', error)
      } finally { if (active) setLoading(false) }
    }
    load()
    return () => { active = false }
  }, [userData, enrolledCourses, backendUrl, getToken, calculateNoOfLectures])

  if (!userData || enrolledCourses.length === 0) return null
  const latest = [...progress].sort((a, b) => (b.saved?.updatedAt || 0) - (a.saved?.updatedAt || 0))[0]
  const target = latest || progress[0]
  if (!target) return null
  const course = target.course
  const lastLesson = target.saved?.lectureTitle

  return (
    <section className="vault-continue-section" aria-label="Continue learning">
      <div className="vault-continue-heading">
        <div><span className="vault-section-kicker">YOUR LEARNING JOURNEY</span><h2>Pick up where you left off.</h2><p>Your courses and progress, all in one place.</p></div>
        <Link to="/my-enrollments" className="vault-continue-all">View all courses <span>↗</span></Link>
      </div>
      {loading ? <div className="vault-continue-loading">Loading your progress…</div> : (
        <div className="vault-continue-card">
          <img className="vault-continue-thumb" src={course.courseThumbnail} alt={course.courseTitle} />
          <div className="vault-continue-info">
            <div className="vault-continue-meta"><span className="vault-continue-chip">CONTINUE LEARNING</span><span>{target.percent}% complete</span></div>
            <h3>{course.courseTitle}</h3>
            <p>{lastLesson ? `Last lesson: ${lastLesson}` : 'Start learning from your next lesson'}</p>
            <div className="vault-progress-track"><span style={{ width: `${target.percent}%` }} /></div>
            <div className="vault-progress-foot"><span>{target.completed} of {target.total} lectures completed</span><strong>{target.percent}%</strong></div>
            <Link className="vault-continue-button" to={`/player/${course._id}`}>Resume course <span>→</span></Link>
          </div>
        </div>
      )}
    </section>
  )
}

export default ContinueLearning
