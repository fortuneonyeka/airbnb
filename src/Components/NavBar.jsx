import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../assets/images/airbnb-logo.jpeg"
import Hero from "./Hero";
import  "./style.css"


const NavBar = () => {
  return (
    <div>
      <nav className="nav">
      {/* <NavLink to="/" > </NavLink> */}
       <NavLink to="/"><img className="logo" src={logo} alt="airbnb-logo" /></NavLink>
       {/* <NavLink to="/card">Products</NavLink> */}
      </nav>
      <Hero/>
    </div>
  )
}



export default NavBar