'use client';
import { useState, useEffect } from 'react';
 import ProductCard from '../components/ProductCard';
 import { products } from '@/lib/productsData';
 import { cartStorage } from '@/lib/localStorage';

export default function ProductsPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(cartStorage.getCart());
  }, []);

  const handleAddToCart = (product) => {
    const updatedCart = cartStorage.addToCart(product, 1);
    setCart(updatedCart);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}