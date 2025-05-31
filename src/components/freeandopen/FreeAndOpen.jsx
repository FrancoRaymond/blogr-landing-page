import React from 'react'
import "./freeandopen.scss"
import laptopDesktop from '../../assets/images/illustration-laptop-desktop.svg'
import laptopMobile from '../../assets/images/illustration-laptop-mobile.svg'

const FreeAndOpen = () => {
  return (
    <div className='freeAndOpen'>
      <div className='imageDiv'>
        <img src={laptopMobile} alt="" />
      </div>
      <div className='textDiv'>
        <h2>Free, open, simple</h2>
        <p>Blogr iss a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media intergration, third-party commenting tools, and works seamlesly with google analytics. The architecture is clean and is relatively easy to learn.</p>
        <h2>Poweful tooling</h2>
        <p>Batteries including. We built a simple and straightfoward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
      </div>
    </div>
  )
}

export default FreeAndOpen
