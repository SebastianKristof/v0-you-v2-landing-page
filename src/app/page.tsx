import { Metadata } from 'next';
import { HomeClient } from '@/components/home-client';

export const metadata: Metadata = {
  title: 'You.v2 - Upgrade Your Subconscious',
  description: 'You.v2 is a structured, personalized subconscious reprogramming method for leaders and professionals who feel stuck despite external success.',
  openGraph: {
    title: 'You.v2 - Upgrade Your Subconscious',
    description: 'Structured reprogramming for professionals ready to evolve.',
    url: 'https://yourdomain.com',
    type: 'website',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'You.v2 Cover Image',
      },
    ],
  },
};

export default function Home() {
  return <HomeClient />;
}
