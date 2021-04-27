import Link from 'next/link'
import navStyles from '../styles/Nav.module.scss'
import Logo from '../public/logo.js'
import {NavData} from '../data/navData.js'

// header assets
const navLinks = NavData.navLinks;
const socialLinks = NavData.socialLinks;


const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.logo}>
        <Logo/>
      </div>
      <ul className={navStyles.navLinksWrapper}>
        {
          navLinks.map((link) => 
            <li>
              <Link href={link.path}>{link.label}</Link>
            </li>
          )
        }
      </ul>

      <ul className={navStyles.socialLinksWrapper}>
        {
          socialLinks.map((link) => 
            <li>
              <a href={link.path}>{link.icon}</a>
            </li>
          )
        }
        <li className={navStyles.actionButtonWrapper}><Link href=''>Learn Design</Link></li>
      </ul>

    </nav>
  )
}

export default Nav