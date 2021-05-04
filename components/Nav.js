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
    setOpenstate(!openState);
    let cw = document.querySelector('.container');

    if(openState === false) {
      cw.classList.add('modalOn');
    }

    else {
     cw.classList.remove('modalOn');
    }
  }

  // const closeMenu =()=> {
  //  setOpenstate(false);
  // }


  return (
    <nav className="nav">
      <div className="logo">
        <Link href='/'><a>{logo}</a></Link>
      </div>
      <ul className="navLinksDeskWrapper">
        {
          navLinks.map((link) => 
            <li>
              <Link href={link.path}><a>{link.label}</a></Link>
            </li>
          )
        }
      </ul>

      <ul className="socialLinksDeskWrapper">
        {
          socialLinks.map((link) => 
            <li>
              <a href={link.path}>{link.icon}</a>
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

      <div className={openState ? 'hambugerModal' : 'hambugerModal off' }>
      </div>

    </nav>
  )
}

// onClick={toggleMenu}

export default Nav