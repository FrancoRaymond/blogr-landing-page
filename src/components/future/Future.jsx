import React from 'react'
import "./future.scss"
import mockImgDesktop from '../../assets/images/illustration-editor-desktop.svg'
import mockImgMobile from '../../assets/images/illustration-editor-mobile.svg'

const Future = () => {
  return (
    <div className='future'>
      <h2>Designed for the future</h2>
      <div className='futureInfo'>
        <div className='imageDiv'>
          <img src={mockImgMobile} alt="" />
        </div>
        <div className='textDiv'>
          <h2>Introducing an extensible editor</h2>
          <p>Blogr features an exeedingly intuitive interface which lets you focus on one thing:creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
          <h2>Robust content management</h2>
          <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.</p>
        </div>
      </div> 
    </div>
  )
}

export default Future
