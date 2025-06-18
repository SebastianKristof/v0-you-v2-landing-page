import { Metadata } from 'next';
import { HomeClient } from '@/components/home-client';

export const metadata: Metadata = {
  title: 'You.v2 - Rapid Subconscious Realignment Program',
  description: 'You.v2 is a structured, personalized subconscious realignment program for global leaders and professionals who feel stuck despite external success.',
  openGraph: {
    title: 'You.v2 - Rapid Subconscious Realignment Program',
    description: 'You.v2 is a structured, personalized subconscious realignment program for global leaders and professionals who feel stuck despite external success.',
    url: 'https://you-v2.com',
    type: 'website',
    images: [
      {
        url: '/images/Mind_Engineering.png',
        width: 1200,
        height: 630,
        alt: 'Mind Engineering - You.v2 Program Open Graph Image',
      },
    ],
  },
};

export default function Home() {
  return <HomeClient />;
}
