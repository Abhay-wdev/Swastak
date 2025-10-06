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
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-16 py-2 sm:py-0">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold mb-2 sm:mb-0">
           Your Spice Store
          </Link>

          {/* Marquee Offer Text (hidden on small screens) */}
          <div className="hidden sm:block w-[70%] border border-white/40 overflow-hidden rounded-md bg-orange-400/40 py-1">
            <div className="animate-marquee whitespace-nowrap text-sm sm:text-base font-semibold text-white">
              🎉 Now bumper offer is going on — 50% OFF on all products! 🎉
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 mt-2 sm:mt-0">
            <Link href="/products" className="hover:text-orange-200 transition">
              Products
            </Link>
            <Link
              href="/cart"
              className="hover:text-orange-200 transition relative"
            >
              Help

             {/* {cartCount > 0 && (;
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">;
                  {cartCount};
                </span>;
              )} */}
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
