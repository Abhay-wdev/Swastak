"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cartStorage } from "@/lib/localStorage";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      setCartCount(cartStorage.getCartCount());
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return (
    <nav className="bg-orange-500 text-white shadow-lg">
      <div className="container mx-auto px-0 md:px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-16 md:py-2 py-0 sm:py-0">
          {/* Logo */}
          <Link href="/" className="hidden sm:block text-2xl font-bold mb-2 sm:mb-0">
           Your Spice Store
          </Link>

          {/* Marquee Offer Text (hidden on small screens) */}
          <div className=" w-[100%] md:w-[75%] border border-white/40 overflow-hidden rounded-md bg-orange-400/40 py-1">
            <div className="animate-marquee whitespace-nowrap text-sm sm:text-base font-semibold text-white">
              🎉 Now bumper offer is going on —Upto 30% OFF on products! 🎉
            </div>
          </div>

          {/* Navigation Links */}
          <div className=" hidden sm:block gap-6 mt-2 sm:mt-0">
            
            
            <Link href="/products" className="hover:text-orange-200 transition">
              Products
            </Link>
           
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </nav>
  );
}
