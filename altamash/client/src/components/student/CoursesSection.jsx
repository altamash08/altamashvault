import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';

const CoursesSection = () => {

  const { allCourses, calculateRating } = useContext(AppContext)
  const featuredCourses = [...allCourses].sort((a, b) => {
    const scoreA = (a.courseRatings?.length || 0) * 2 + calculateRating(a)
    const scoreB = (b.courseRatings?.length || 0) * 2 + calculateRating(b)
    return scoreB - scoreA
  }).slice(0, 4)

  return (
    <section className="vault-section vault-courses-section py-16 md:px-40 px-8">
      <div className="vault-section-heading"><span className="vault-section-kicker">CURATED FOR YOUR GROWTH</span><h2>Learn from the best</h2></div>
      <p className="vault-section-copy md:text-base text-sm text-gray-500 mt-3">
        Dive into expertly crafted courses across diverse fields. Each program is designed to provide clarity, confidence, and real-world impact.
      </p>
      <div className="vault-course-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-0 md:my-16 my-10 gap-4">
        {featuredCourses.map((course, index) => <CourseCard key={course._id || index} course={course} isTrending={index < 2 && (course.courseRatings?.length || 0) > 0} />)}
      </div>
      <Link to={'/course-list'} onClick={() => scrollTo(0, 0)} className="vault-outline-button text-gray-500 border border-gray-500/30 px-10 py-3 rounded">Show all courses</Link>
    </section>
  );
};

export default CoursesSection;
