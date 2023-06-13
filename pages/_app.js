import { ThemeProvider } from '../components/ThemeContext'
import '../styles/globals.scss'
import '../styles/Nav.scss'
import '../styles/Layout.scss'
import '../styles/illustrationsStyles/LandingIllustration.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
