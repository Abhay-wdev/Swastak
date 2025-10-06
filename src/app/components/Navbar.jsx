'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { cartStorage } from '@/lib/localStorage';

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      setCartCount(cartStorage.getCartCount());
    };

    updateCartCount();
    window.addEventListener('storage', updateCartCount);

    // Custom event for cart updates
    window.addEventListener('cartUpdated', updateCartCount);

    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  return (
    <nav className="bg-orange-500 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold">
            Spice Store
          </Link>
          <div className="flex gap-6">
            <Link href="/products" className="hover:text-orange-200 transition">
              Products
            </Link>
            <Link href="/cart" className="hover:text-orange-200 transition relative">
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}