import Link from 'next/link'
import navStyles from '../styles/Footer.module.scss'
import {NavData} from '../data/navData.js'

// footer assets
const socialLinks = NavData.socialLinks;
const footerLogo = 'https://res.cloudinary.com/dramages/image/upload/v1619842434/portfolioImages/designisfun/homepage/footerLogo.svg'


const Footer = () => {
  return (
    <footer className={navStyles.footer}>
      <div className={navStyles.copyRightInfo}>
        <p> DesignIsFun ©{new Date().getFullYear()}. Inspired by the Universe </p>
      </div>

      <div className={navStyles.socialLinksWrapper}>
        <p>Kindly follow and subscribe for educative design topics</p>
        <ul>
          {
            socialLinks.map((link) => 
              <li>
                <div></div>
                <Link target='_blank' href={link.path}> {link.iconFooter} </Link>
              </li>
            )
          }
        </ul>
      </div>
    </footer>
  )
}

export default Footer