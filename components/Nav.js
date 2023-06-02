import Link from 'next/link'
import {NavData} from '../data/navData.js'
import React, {useState, useEffect} from "react"

// header assets
const logo = NavData.navLogo;
const navLinks = NavData.navLinks;
const socialLinks = NavData.socialLinks;


const Nav = () => {

  const [openState, setOpenstate] = useState(false);

   useEffect(()=> {
      setOpenstate(false);
   },[])

   const toggleMenu =()=> {
     let layoutContainer = document.querySelector('.container');
    setOpenstate(!openState);

    if(openState === false) {
      layoutContainer.classList.add('modalOn');
    }

    else {
     layoutContainer.classList.remove('modalOn');
    }

  }

  return (
    <nav className="nav">
      <div className="logo">
        <Link href='/'>{logo}</Link>
      </div>
      <ul className="navLinksDeskWrapper">
        {
          navLinks.map((link) => 
            <li>
              <Link href={link.path}>{link.label}</Link>
            </li>
          )
        }
      </ul>

      <ul className="socialLinksDeskWrapper">
        {
          socialLinks.map((link) => 
            <li>
              <Link target='_blank' href={link.path}>{link.icon}</Link>
              
            </li>
          )
        }
      </ul>

      <div onClick={toggleMenu} className= 'hambugerHolder'>
        <div className={openState ? 'hambuger open' : 'hambuger' }>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* mobileNavWrapper */}

      <div onClick={toggleMenu} className={openState ? 'hambugerModal' : 'hambugerModal off' }>
        <div className={openState ? 'mobileNavWrapper on' : 'mobileNavWrapper' }>
          <ul className="navLinksMobileWrapper">
            {
              navLinks.map((link) => 
                <li>
                  <Link onClick={toggleMenu} href={link.path}> {link.label} </Link>
                </li>
              )
            }
          </ul>

          <div className="socialLinksMobileWrapper">
            <p>Kindly follow and subscribe <br/> for educative design topics</p>
            <ul >
              {
                socialLinks.map((link) => 
                  <li>
                    <Link target='_blank' href={link.path}> {link.icon} </Link>
                  </li>
                )
              }
            </ul>
          </div>
          
        </div>
      </div>

    </nav>
  )
}

// onClick={toggleMenu}

export default Nav