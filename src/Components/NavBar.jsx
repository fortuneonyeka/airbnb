import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../assets/images/airbnb-logo.jpeg"
import group from "../assets/images/Group 77.png"
import  "./style.css"


const NavBar = () => {
  return (
    <div>
      <nav className="nav">
      {/* <NavLink to="/" > </NavLink> */}
       <NavLink to="/"><img className="logo" src={logo} alt="airbnb-logo" /></NavLink>
      </nav>
      <div><img className="group-img" src={group} alt="" /></div>

      <div className="experience">
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by Fortune, one- of- a kind host, all without leaving your home</p>
      </div>
    </div>
  )
}



export default NavBar