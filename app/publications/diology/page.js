export const metadata = {
  title: 'Diology',
  description: 'Learn more about the magic behind Design Is Fun ✨',
  openGraph: {
    title: 'Diology',
    description: 'Learn more about the magic behind Design Is Fun ✨',
    images: [
      {
        url: 'https://res.cloudinary.com/dramages/image/upload/v1753891849/portfolioImages/designisfun/DiologyThumbnail.png', // 👈 high quality image URL
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
    title: 'Diology',
    description: 'Learn more about the magic behind Design Is Fun ✨',
    images: ['https://res.cloudinary.com/dramages/image/upload/v1753891849/portfolioImages/designisfun/DiologyThumbnail.png'],
  },
};

import Diology from './DiologyClient'

export default function DiologyPage() {
  return <Diology />; // Render the client-side part
}

