'use client';

import { useEffect, useState } from 'react';
import ProductCards from './components/ProductCards';
import HeroSection from './components/HeroSection';
import ReviewSection from './components/ReviewSection';
import { fetchAndStoreProducts, getProductsFromLocalStorage } from '@/lib/productsData';
import { fetchAndStoreSlides, getSlidesFromLocalStorage } from '@/lib/slidesData'; // new slides functions
import ScrollingCrousal from './components/ScrollingCrousal';
import UspRibbonSection from './components/UspRibbonSection';
import FaqSection from './components/FaqSection';
import WhyChooseSuswastik from './components/WhyChooseSuswastik';
import Iframe from './components/Iframe';

export default function Home() {
  const [slides, setSlides] = useState([]);
  const [products, setProducts] = useState([]);

  // Fetch slides once
  useEffect(() => {
    // Try to get slides from localStorage first
    const storedSlides = getSlidesFromLocalStorage();
    console.log('Stored slides:', storedSlides); // ✅ check console
    if (storedSlides.length > 0) {
      setSlides(storedSlides);
    } else {
      // Fetch from backend if not in localStorage
      fetchAndStoreSlides().then(() => {
        const data = getSlidesFromLocalStorage();
        setSlides(data);
        console.log('Slides loaded:', data); // ✅ check console
      });
    }
  }, []);

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
      <UspRibbonSection />
      <ProductCards products={products} />
      <ScrollingCrousal />
      <ReviewSection />
      <WhyChooseSuswastik />
 
      <FaqSection />
      
    </>
  );
}
