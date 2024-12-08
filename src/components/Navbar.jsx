import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (

      <nav>
        
        <h1><img src="photo.png" alt="" />Shree Brahmarupa Secondary School</h1>
        <div className='nav-links'> 
         <Link to={"/"}>Home</Link>
         <Link to={"/about"}>About</Link>
         <Link to={"/team"}>Team </Link>
         <Link to={"/login"}>Login</Link>
         <Link to={"/events"}>Events</Link>
          
         
        </div>

        
    </nav>
  )
}

export default Navbar
