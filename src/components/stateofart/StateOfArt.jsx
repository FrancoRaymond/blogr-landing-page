import React from 'react'
import "./stateofart.scss"
import phones from '../../assets/images/illustration-phones.svg'
import circles from '../../assets/images/bg-pattern-circles.svg'


const StateOfArt = () => {
  return (
    <div className='stateOfArt'>
        <div className='imageDiv'>
            <img src={phones} alt="" className='phones'/>
            <img src={circles} alt="" className='circles'/>
        </div>
        <h2>State of the Art Infrastructure</h2>
        <p>With reliability and speen in mind, worldwide data centers provide the backbone for ultra-fast connectivity. Thi8s ensures your site will load instantly, no matter where your raders are, keeping your site competitive.</p>
    </div>
  )
}

export default StateOfArt
