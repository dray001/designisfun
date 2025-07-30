export const metadata = {
  title: 'Diology',
  description: 'Learn more about the magic behind Design Is Fun ✨',
  openGraph: {
    title: 'Diology',
    description: 'Learn more about the magic behind Design Is Fun ✨',
    images: ['/meta/OOD.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diology',
    description: 'Learn more about the magic behind Design Is Fun ✨',
    images: ['/meta/OOD.png'],
  },
};

import Diology from './DiologyClient'

export default function DiologyPage() {
  return <Diology />; // Render the client-side part
}

