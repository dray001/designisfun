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
  title: 'Designisfun',
  description: 'Digital Education made Easy',
  openGraph: {
    title: 'Designisfun',
    description: 'Digital Education made Easy',
    images: ['/meta/OOD.png'], // Public image path
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Designisfun',
    description: 'Digital Education made Easy',
    images: ['/meta/OOD.png'],
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
