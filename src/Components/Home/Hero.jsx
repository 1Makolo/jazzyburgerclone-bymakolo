import React from 'react'
import heroImg from "../../assets/Hero Section.jpg"
import "../../Styles/Hero.css"

const Hero = () => {
  return (
    <div className='my-3 hero-section'>
        <img src={heroImg} className='img-fluid w-100 hero-img' alt="hero-image" />
    </div>
  )
}

export default Hero