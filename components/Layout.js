import Nav from './Nav'
import Footer from './Footer'
import Meta from './Meta'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className='container'>
        <Nav />
          <main className='main'>
            {children}
          </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout