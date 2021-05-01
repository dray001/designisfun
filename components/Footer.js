import navStyles from '../styles/Footer.module.scss'
import {NavData} from '../data/navData.js'

// footer assets
const socialLinks = NavData.socialLinks;
const footerLogo = 'https://res.cloudinary.com/dramages/image/upload/v1619842434/portfolioImages/designisfun/homepage/footerLogo.svg'


const Footer = () => {
  return (
    <footer className={navStyles.footer}>
      <div className={navStyles.logo}>
        <img src={footerLogo} alt="logo"/>
      </div>
      <p>Inspired by the universe © 2020</p>

      <ul className={navStyles.socialLinksWrapper}>
        {
          socialLinks.map((link) => 
            <li>
              <a href={link.path}>{link.iconFooter}</a>
            </li>
          )
        }
      </ul>

    </footer>
  )
}

export default Footer