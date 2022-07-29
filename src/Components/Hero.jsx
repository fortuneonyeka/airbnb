import React from 'react'
import group from "../assets/images/Group 77.png"

const Hero = () => {
  return (
    <section className="hero">
      <div><img className="group-img" src={group} alt="" /></div>

<div className="experience">
  <h1>Online Experiences</h1>
  <p>Join unique interactive activities led by Fortune, one- of- a kind host, all without leaving your home</p>
</div>
    </section>
  )
}

export default Hero