'use client';

import Link from 'next/link'
import Image from 'next/image'
import {NavData} from '../data/navData.js'
import React, {useState, useEffect} from "react"

// sun
let sun = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="4" fill="white" stroke="white" stroke-width="2"/>
<path d="M15 8L15 5" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M20.3027 9.69727L22.0705 7.9295" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M22 15L25 15" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M20.3018 20.3037L22.0695 22.0715" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M15 24L15 22" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M7.92871 22.0713L9.69648 20.3035" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M5 15L8 15" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M7.92773 7.93066L9.6955 9.69843" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>

let moon = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.6617 24.9647C21.4426 24.9766 21.222 24.9826 21 24.9826C14.3726 24.9826 9 19.61 9 12.9826C9 8.8199 11.1196 5.15224 14.3383 3C8.01866 3.34343 3 8.57666 3 14.9821C3 21.6095 8.37258 26.9821 15 26.9821C17.4647 26.9821 19.7559 26.239 21.6617 24.9647Z" fill="white"/>
</svg>

// header assets
const logo = NavData.navLogo;
const navLinks = NavData.navLinks;
const socialLinks = NavData.socialLinks;


const Nav = ({theme_val, toggleTheme_val}) => {

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
        <Link href='/'><Image src={logo} alt="coverImg" /></Link>
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

      <div className="actionPanelWrapper">
        <ul className="socialLister">
          {
            socialLinks.map((link) => 
            <li>
                <Link target='_blank' href={link.path}>{link.icon}</Link>     
              </li>
            )
          }
        </ul>
        
        <div className = 'actionPanel'>
          <div onClick={toggleMenu} className={openState ? 'hambuger open' : 'hambuger' }>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <div className = 'themeSwitcher'>
            <button onClick={toggleTheme_val}> {theme_val === '' ? sun : moon } </button>
          </div>
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