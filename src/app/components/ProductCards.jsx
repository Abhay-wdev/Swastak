"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const frontendIcons = [
  { id: 1, icon: "/images/Category-three.webp", label: "Whole Spices", href: "/products" },
  { id: 2, icon: "/images/Category-three.webp", label: "Masala Mix", href: "/products" },
  { id: 3, icon: "/images/Category-three.webp", label: "Herbs", href: "/products" },
  { id: 4, icon: "/images/Category-three.webp", label: "Dry Fruits", href: "/products" },
];

// Slide-in animation
const motionProps = (index) => ({
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: {
    duration: 0.6,
    delay: index * 0.15,
    ease: "easeOut",
  },
  viewport: { once: true, amount: 0.3 },
});

// Floating animation
const floatingProps = (index) => ({
  animate: { y: [0, -20, 0] },
  transition: {
    duration: 3.5,
    repeat: Infinity,
    ease: "easeInOut",
    delay: index * 0.3,
  },
});

export default function ProductCards() {
  return (
    <div className="w-full bg-[#FFF3F3]   py-14 space-y-12">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-700 relative inline-block">
          Most Popular Categories
          <span className="block w-16 h-1 bg-green-500 mx-auto mt-2 rounded-full"></span>
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mt-2">
          Explore our handpicked categories of fresh and premium products
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2   sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 justify-items-center px-4 sm:px-8">
        {frontendIcons.map(({ id, icon, label, href }, index) => (
          <motion.div
            key={id}
            {...motionProps(index)}
            className="flex flex-col   items-center text-center group"
          >
            <Link href={href}>
              <motion.div
                {...floatingProps(index)}
                className="relative flex items-center justify-center w-40 h-30 sm:w-50 sm:h-35 md:w-80 md:h-60 rounded-2xl      hover:scale-105 transition-all duration-300  "
              >
                <Image
                  src={icon}
                  alt={label}
                  width={140}
                  height={140}
                  className="rounded-xl object-cover w-40 h-40 sm:w-40 sm:h-40 md:w-70 md:h-60"
                />
                
              </motion.div>
            </Link>
            <span className="text-sm sm:text-base md:text-lg mt-3 font-semibold text-gray-700 group-hover:text-green-600 transition-colors">
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
