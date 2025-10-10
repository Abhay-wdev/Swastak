'use client';
import { useState, useEffect } from 'react';
import ProductDetail from "../components/ProductDetail";
import { products as defaultProducts } from '@/lib/productsData';

export default function Page() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    let intervalId;

    const fetchProducts = () => {
      const storedProducts = localStorage.getItem('products');
      const rawProducts = storedProducts ? JSON.parse(storedProducts) : null;

      if (rawProducts && rawProducts.length > 0) {
        // Normalize fields
        const allProducts = rawProducts.map(p => ({
          ...p,
          points4: p.points4 ? p.points4.split(',').map(pt => pt.trim()) : [],
          imageUrls: p.imageUrls ? p.imageUrls.split(',').map(url => url.trim()) : [],
        }));

        setProductData(allProducts);

        // Stop checking once data is available
        clearInterval(intervalId);
      }
    };

    // Initial fetch
    fetchProducts();

    // Keep checking every 500ms until data is available
    intervalId = setInterval(fetchProducts, 500);

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <ProductDetail products={productData.length ? productData : defaultProducts} />
  );
}
