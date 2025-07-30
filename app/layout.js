// app/layout.jsx
import '@/styles/globals.scss';  // Global CSS
import Layout from '@/components/Layout'; // Contains <Nav>, <Footer>, etc.
import { ThemeProvider } from '../components/ThemeContext'
import '../styles/globals.scss'
import '../styles/Nav.scss'
import '../styles/Layout.scss'
import '../styles/banner.scss'
import '../styles/pubPages/diology.scss'
import '../styles/illustrationsStyles/LandingIllustration.scss'

export const metadata = {
  metadataBase: new URL('https://designisfun.vercel.app/'),
  title: 'Designisfun',
  description: 'Digital Education made Easy',
  openGraph: {
    title: 'Designisfun',
    description: 'Digital Education made Easy',
    url: 'https://designisfun.vercel.app/',
    images: [
      {
        url: 'https://res.cloudinary.com/dramages/image/upload/v1753891637/portfolioImages/designisfun/DIFThumbnail.png', // 👈 high quality image URL
        width: 1200,
        height: 630,
        alt: 'Diology by Dray',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Designisfun',
    description: 'Digital Education made Easy',
    images: ['https://res.cloudinary.com/dramages/image/upload/v1753891637/portfolioImages/designisfun/DIFThumbnail.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
            <Layout>{children}</Layout> {/* Your actual site wrapper */}
        </ThemeProvider>
      </body>
    </html>
  );
}
