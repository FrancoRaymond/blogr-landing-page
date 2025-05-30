import React from 'react'
import "./footer.scss"
import logo from '../../assets/images/logo.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <img src={logo} alt="" />
        <div>
            <h3>Product</h3>
            <ul>
                <li><a href="#">Overview</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Marketplace</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Intergrations</a></li>
            </ul>
        </div>
        <div>
            <h3>Company</h3>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
            </ul>
        </div>
        <div>
            <h3>Connect</h3>
            <ul>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Newsletter</a></li>
                <li><a href="#">Linkedin</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer

