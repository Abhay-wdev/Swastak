'use client';
import { useRouter } from 'next/navigation';
import ProductCards from './components/ProductCards';
import HeroSection from './components/HeroSection';
import ReviewSection from './components/ReviewSection';

export default function Home() {
  const router = useRouter();
      const slides = [
    {
      id: 1,
      image: '/images/slide1.jpg',
    },
    {
      id: 2,
      image: '/images/slide2.jpg',
    },
    {
      id: 3,
      image: '/images/slide3.jpg',
    }
    
  ];

  return (
     <>
      <HeroSection slides={slides}/>
      <ProductCards />
     <ReviewSection/>
      </>
    
  );
}