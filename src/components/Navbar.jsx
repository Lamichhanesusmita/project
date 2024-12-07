import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <h1>Navbar</h1>
        <div className='nav.links'>
         <Link to={"/home"}>Home</Link>
         <Link to={"/about"}>About</Link>
         <Link to={"/what-news"}>Whats' news</Link>
         <Link to={"/contact-us"}>Contact Us</Link>
         <Link to={"/assignment"}>Assignment</Link>
         <Link to={"/profile"}>Profile</Link>
         <Link to={"/setting"}>setting</Link>

      
        </div>
    </nav>
    </div>
  )
}

export default Navbar
