import React, { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContext'
import SideBar from '../../components/educator/SideBar'
import Navbar from '../../components/educator/Navbar'
import Footer from '../../components/educator/Footer'

const Educator = () => {
  const { isEducator } = useContext(AppContext)
  const { isLoaded, user } = useUser()
  const role = user?.publicMetadata?.role


  if (!isLoaded) return <div className="min-h-screen grid place-items-center bg-[#080d1b] text-white"><p>Checking educator access…</p></div>

  if (!user) return <div className="min-h-screen grid place-items-center bg-[#080d1b] text-white p-6"><div className="max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 text-center"><h1 className="text-2xl font-semibold">Sign in required</h1><p className="mt-3 text-white/70">Please sign in to access the educator dashboard.</p><Link to="/" className="mt-6 inline-block rounded-full bg-violet-600 px-5 py-3 text-white">Go to Home</Link></div></div>

  if (!isEducator && role !== 'educator') return <div className="min-h-screen grid place-items-center bg-[#080d1b] text-white p-6"><div className="max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 text-center"><h1 className="text-2xl font-semibold">Educator access not enabled</h1><p className="mt-3 text-white/70">Your account hasn't been enabled as an educator yet. Go back to the homepage and choose “Become Educator”.</p><Link to="/" className="mt-6 inline-block rounded-full bg-violet-600 px-5 py-3 text-white">Go to Home</Link></div></div>

  return (
    <div className="text-default min-h-screen bg-[#080d1b] text-white">
      <Navbar />
      <div className='flex min-h-[calc(100vh-64px)]'>
        <SideBar />
        <div className='flex-1 min-w-0'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Educator
