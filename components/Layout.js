import Nav from './Nav'
import Footer from './Footer'
import Meta from './Meta'
// import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className='container'>
        <Nav />
        <main className='main'>
          {/* <Header /> */}
          {children}
        </main>
      {/* <Footer /> */}
      </div>
    </>
  )
}

export default Layout