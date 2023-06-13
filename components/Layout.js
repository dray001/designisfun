import React, {useEffect, useState, useContext} from "react"
import { ThemeContext } from './ThemeContext'
import Nav from './Nav'
import Footer from './Footer'
import Meta from './Meta'

const Layout = ({ children }) => {

  const [prevScrollPos, setPrevScrollPos] = useState(0); 
  const [visible, setVisible] = useState(true);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible(prevScrollPos > currentScrollPos);

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll])

  return (
    <>
      <Meta />
      <div className={`container ${theme}`}>
        <div className = {visible ? 'navHolder' : 'navHolder hide'}><Nav /></div>
        
          <main className='main'>
            <button onClick={toggleTheme}>
              {theme === '' ? 'Dark Mode' : 'Light Mode'}
            </button>
            {children}
          </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout