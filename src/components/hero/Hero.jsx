import React from 'react'
import "./hero.scss"

const Hero = () => {
  return (
    <div className='hero'>
      <div className='heroTextContainer'>
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand.</p>
        <div className='heroBtnDiv'>
          <button>Start for free</button>
          <button>Learn more</button>
        </div>
      </div>
    </div>
  )
}

export default Hero;
