import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'


function Header() {
  return (

   <div className="header">
      <div className="headerLeft">
        <Link style={{textDecoration:'none',color:'aliceblue'}} to="/">
        <h2> Artisan Wonders</h2>
        </Link>
      </div>
   </div>

  )
}

export default Header