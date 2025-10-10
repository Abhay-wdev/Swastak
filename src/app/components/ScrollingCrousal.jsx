'use client';
import { useState, useEffect } from 'react';
import ProductDetail from "../components/ProductDetail";
import { products as defaultProducts } from '@/lib/productsData';

export default function Page() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // Fetch products from localStorage
    const storedProducts = localStorage.getItem('products');
    const rawProducts = storedProducts ? JSON.parse(storedProducts) : defaultProducts;

    // Normalize fields
    const allProducts = rawProducts.map(p => ({
      ...p,
      points4: p.points4
        ? p.points4.split(',').map(pt => pt.trim())
        : [],
      imageUrls: p.imageUrls
        ? p.imageUrls.split(',').map(url => url.trim())
        : [],
    }));

    setProductData(allProducts);
  }, []);

  return (
    
      <ProductDetail products={productData} />
    
  );
}
