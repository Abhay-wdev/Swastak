'use client';

import { useEffect, useState } from 'react';
import ProductCards from './components/ProductCards';
import HeroSection from './components/HeroSection';
import ReviewSection from './components/ReviewSection';
import { fetchAndStoreProducts, getProductsFromLocalStorage } from '@/lib/productsData';

export default function Home() {
  const slides = [
    { id: 1, image: '/images/slide1.jpg' },
    { id: 2, image: '/images/slide2.jpg' },
    { id: 3, image: '/images/slide3.jpg' },
  ];

  const [products, setProducts] = useState([]);

  // Fetch products once
  useEffect(() => {
    fetchAndStoreProducts().then(() => {
      const data = getProductsFromLocalStorage();
      setProducts(data);
      console.log('Products loaded:', data); // ✅ check console
    });
  }, []);

  return (
    <>
      <HeroSection slides={slides} />

      {/* Only pass products to ProductCards, don't render objects directly */}
      <ProductCards products={products} />

      <ReviewSection />
    </>
  );
}
