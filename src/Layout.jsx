import React from 'react'
import { Outlet } from 'react-router'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'


const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout


