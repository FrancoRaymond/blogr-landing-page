import React,{ useState} from 'react'
import logo from '../assets/images/logo.svg'
import iconLight from '../assets/images/icon-arrow-light.svg'
import hamburger from '../assets/images/icon-hamburger.svg'
import close from '../assets/images/icon-close.svg'

const Navbar = () => {
    const [menu, setMenu] = useState('closed')
    const expandOptions = (e) => {
        e.currentTarget.classList.toggle("active");
    }

    const handleMenuClick = () => {
        setMenu(menu === 'closed' ? 'open' : 'closed')
    }
  return (
    <div className='navbar'>
        <a href="#"><img src={logo} alt="blogr logo" className='logo'/></a>
        <nav>
            <div className='linkDivMain' onClick={(e) => expandOptions(e)}>
                <div className='linkDiv'>
                    <p>Product</p>
                    <img src={iconLight} alt="" className='linkIcon'/>
                </div>
                <ul className='list'>
                    <li><a href="">Overview</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Marketplace</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Intergrations</a></li>
                </ul>
            </div>
            <div className='linkDivMain' onClick={(e) => expandOptions(e)}>
                <div className='linkDiv'>
                    <p>Company</p>
                    <img src={iconLight} alt="" className='linkIcon'/>
                </div>
                <ul className='list'>
                    <li><a href="">Team</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Careers</a></li>
                </ul>
            </div>
            <div className='linkDivMain' onClick={(e) => expandOptions(e)}>
                <div className='linkDiv'>
                    <p>Contact</p>
                    <img src={iconLight} alt="" className='linkIcon'/>
                </div>
                <ul className='list'>
                    <li><a href="">Connect</a></li>
                    <li><a href="">Newsletter</a></li>
                    <li><a href="">Linkedin</a></li>
                </ul>
            </div>
        </nav>
        <div className='buttonDiv'>
            <button>Login</button>
            <button>Sign Up</button>
        </div>
        <div className='iconDiv'>
            {
                menu === "closed" ? (<button onClick={() => handleMenuClick()}><img src={hamburger} alt="" /></button>) : (<button onClick={() => handleMenuClick()}><img src={close} alt="" /></button>)
            }    
        </div>
    </div>
  )
}

export default Navbar;
