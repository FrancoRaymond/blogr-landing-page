import React,{ useEffect, useState} from 'react'
import logo from '../assets/images/logo.svg'
import iconLight from '../assets/images/icon-arrow-light.svg'
import iconRed from '../assets/images/icon-arrow-dark.svg'
import hamburger from '../assets/images/icon-hamburger.svg'
import close from '../assets/images/icon-close.svg'

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const [size, setSize] = useState(window.innerWidth)

    const expandOptions = (e) => {
        e.currentTarget.classList.toggle("active");
    }

    const handleMenuClick = () => {
        setMenu(menu ? false : true)
    }

    useEffect(() => {
        const nav = document.querySelector(".navDiv")
        if(menu){
            nav.classList.add("active")
        }else{
            nav.classList.remove("active")
        } 
    },[menu])

    useEffect(() => {
        const handleResize = () => {
          setSize(window.innerWidth)
          if(size > 640){
            setMenuOpen(false)
          }
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
      },[])

  return (
    <div className='navbar'>
        <a href="#"><img src={logo} alt="blogr logo" className='logo'/></a>
        <nav className='navDiv'>
            <div className='linkDivMain' onClick={(e) => expandOptions(e)}>
                <div className='linkDiv'>
                    <p>Product</p>
                    <img src={size < 640 ? iconRed : iconLight} alt="" className='linkIcon'/>
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
                    <img src={size < 640 ? iconRed : iconLight} alt="" className='linkIcon'/>
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
                    <img src={size < 640 ? iconRed : iconLight} alt="" className='linkIcon'/>
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
                menu ? (<button onClick={() => handleMenuClick()}><img src={close} alt="" /></button>) : (<button onClick={() => handleMenuClick()}><img src={hamburger} alt="" /></button>)
            }    
        </div>
    </div>
  )
}

export default Navbar;
