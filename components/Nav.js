import Link from 'next/link'
import {NavData} from '../data/navData.js'
import React, {useState, useEffect} from "react"

// sun
let sun = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.077 7.92037L7.93054 7.06683L3.68794 2.82423L2.8344 3.67777L7.077 7.92037Z" fill="#E4E4E4"/>
<path d="M12.6036 0H11.3965V6H12.6036V0Z" fill="#E4E4E4"/>
<path d="M23.9645 11.3964H17.9645V12.6035H23.9645V11.3964Z" fill="#E4E4E4"/>
<path d="M16.0979 7.12687L16.9514 7.98041L21.194 3.73781L20.3405 2.88427L16.0979 7.12687Z" fill="#E4E4E4"/>
<path d="M6 11.3964H0V12.6035H6V11.3964Z" fill="#E4E4E4"/>
<path d="M12.6036 18H11.3965V24H12.6036V18Z" fill="#E4E4E4"/>
<path d="M7.89895 16.9002L7.04541 16.0466L2.80281 20.2892L3.65635 21.1428L7.89895 16.9002Z" fill="#E4E4E4"/>
<path d="M16.9389 16.058L16.0853 16.9116L20.3279 21.1542L21.1815 20.3006L16.9389 16.058Z" fill="#E4E4E4"/>
<path d="M11.9644 16.5088C14.4546 16.5088 16.4733 14.4901 16.4733 12C16.4733 9.50978 14.4546 7.49109 11.9644 7.49109C9.47426 7.49109 7.45557 9.50978 7.45557 12C7.45557 14.4901 9.47426 16.5088 11.9644 16.5088Z" fill="#E4E4E4"/>
</svg>

let moon = <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.0798 19.9848C18.8897 22.4487 15.6958 24 12.0456 24C5.38403 24 0 18.5247 0 11.8631C0 5.93156 4.10646 1.09506 9.673 0C7.75665 2.09886 6.57034 4.92776 6.57034 8.03042C6.57034 14.7833 11.9544 20.1673 18.7072 20.1673C19.5285 20.1673 20.2586 20.076 21.0798 19.9848Z" fill="black"/>
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

      <button onClick={toggleTheme_val}> {theme_val === '' ? sun : moon } </button>

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