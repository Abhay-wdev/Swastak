"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const frontendIcons = [
  { id: 1, icon: "/images/Category-three.webp", label: "Whole Spices", href: "/home" },
  { id: 2, icon: "/images/Category-three.webp", label: "Masala Mix", href: "/home" },
  { id: 3, icon: "/images/Category-three.webp", label: "Herbs", href: "/home" },
  { id: 4, icon: "/images/Category-three.webp", label: "Dry Fruits", href: "/home" },
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
  animate: { y: [0, -8, 0] },
  transition: {
    duration: 3.5,
    repeat: Infinity,
    ease: "easeInOut",
    delay: index * 0.3,
  },
});

export default function ProductCards() {
  return (
    <div className="w-full bg-gradient-to-b from-green-50 to-white py-14 space-y-12">
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 justify-items-center px-4 sm:px-8">
        {frontendIcons.map(({ id, icon, label, href }, index) => (
          <motion.div
            key={id}
            {...motionProps(index)}
            className="flex flex-col items-center text-center group"
          >
            <Link href={href}>
              <motion.div
                {...floatingProps(index)}
                className="relative flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-2xl bg-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-green-100"
              >
                <Image
                  src={icon}
                  alt={label}
                  width={140}
                  height={140}
                  className="rounded-xl object-cover w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
