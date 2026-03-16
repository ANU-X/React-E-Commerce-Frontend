import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import { Toaster } from 'react-hot-toast'

const Roots = () => {
  return (
    <div>
      <Toaster/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Roots
