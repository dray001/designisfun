import Nav from './Nav'
import Footer from './Footer'
import Meta from './Meta'
// import Header from './Header'
import styles from '../styles/Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          {/* <Header /> */}
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout