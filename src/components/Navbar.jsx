import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../images/logo.png"
import {HiOutlineMenuAlt3} from "react-icons/hi";
import '../styles/BookStyle.css';

const Navbar = () => {

  const [ toggleMenu, setToggleMenu ] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='navbar' id='navbar'>
       <div className="container navbar-content flex">
         <div className="brand-and-toggler flex flex-sb">

            <Link to="/" className="navbar-brand flex">
              <img src={Logo} alt="logo"/>
              <span className='text-uppercase fw-7 fs-24 ls-1'>BookQuest</span>
            </Link>

            <button type="button" className='navbar-toggler-btn' onClick={handleNavbar}>
               <HiOutlineMenuAlt3 size={35}  style={{ color: toggleMenu ? '#fff' : '#010101' }} />
            </button>

         </div>

         <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
            <ul class="navbar-nav">
               <li class="nav-item"><Link to="home" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link></li>
               <li class="nav-item"><Link to="about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>About</Link></li>
            </ul>
         </div>

       </div>
    </nav>
  )
}

export default Navbar
