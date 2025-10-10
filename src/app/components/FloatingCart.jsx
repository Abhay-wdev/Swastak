"use client";

import React, { useState, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { cartStorage } from "@/lib/localStorage";

const FloatingCart = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const newCount = cartStorage.getCartCount();
      setCartCount(prev => (prev !== newCount ? newCount : prev));
    };

    // Initial fetch
    updateCartCount();

    // Listen for cart updates via custom event
    window.addEventListener("cartUpdated", updateCartCount);

    // Listen for localStorage changes in other tabs
    const handleStorageChange = (event) => {
      if (event.key === "ecommerce_cart") updateCartCount();
    };
    window.addEventListener("storage", handleStorageChange);

    // Auto-update every 2 seconds
    const interval = setInterval(updateCartCount, 2000);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  // Only render the floating cart if cartCount is positive
  if (cartCount <= 0) return null;

  return (
    <div className="fixed left-4 md:left-8 bottom-4 md:bottom-8 z-50">
      <Link href="/cart" className="relative">
        <button className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-orange-500 shadow-xl hover:bg-orange-600 transition-colors duration-300">
          <FiShoppingCart className="text-white text-2xl" />
          <span className="absolute top-[8px] right-[1px] bg-white text-orange-500 text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
            {cartCount}
          </span>
        </button>
      </Link>
    </div>
  );
};

export default FloatingCart;
