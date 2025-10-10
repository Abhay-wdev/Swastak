"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const frontendIcons = [
  { id: 1, icon: "/images/Category-three.webp", label: "Whole Spices", href: "/products", color: "from-amber-400 to-orange-500" },
  { id: 2, icon: "/images/Category-three.webp", label: "Masala Mix", href: "/products", color: "from-red-400 to-pink-500" },
  { id: 3, icon: "/images/Category-three.webp", label: "Herbs", href: "/products", color: "from-green-400 to-emerald-500" },
  { id: 4, icon: "/images/Category-three.webp", label: "Dry Fruits", href: "/products", color: "from-yellow-400 to-amber-500" },
];

// Slide-in animation
const motionProps = (index) => ({
  initial: { y: 60, opacity: 0, scale: 0.8 },
  whileInView: { y: 0, opacity: 1, scale: 1 },
  transition: {
    duration: 0.7,
    delay: index * 0.15,
    ease: [0.4, 0, 0.2, 1],
  },
  viewport: { once: true, amount: 0.2 },
});

// Floating animation
const floatingProps = (index) => ({
  animate: { y: [0, -15, 0] },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
    delay: index * 0.4,
  },
});

export default function ProductCards() {
  return (
    <div className="w-full bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4">
            <span className="text-sm tracking-wider text-amber-600 font-bold uppercase bg-amber-100 px-4 py-2 rounded-full">
              ✦ Explore Categories ✦
            </span>
          </div>
          <h2 className="text-4xl pb-2 sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 mb-4">
            Most Popular Categories
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our handpicked categories of fresh and premium products
          </p>
          <motion.div 
            className="w-24 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        {/* Enhanced Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {frontendIcons.map(({ id, icon, label, href, color }, index) => (
            <motion.div
              key={id}
              {...motionProps(index)}
              className="flex flex-col items-center group"
            >
              <Link href={href} className="w-full">
                <motion.div
                  {...floatingProps(index)}
                  whileHover={{ scale: 1.05, rotateZ: 2 }}
                  className="relative"
                >
                  {/* Card Container */}
                  <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 group-hover:shadow-2xl">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10`}></div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                      <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white to-transparent transform skew-x-12 group-hover:animate-[shine_1s_ease-in-out]"></div>
                    </div>

                    {/* Image Container */}
                    <div className="relative aspect-square p-6">
                      <div className="relative w-full h-full">
                        <Image
                          src={icon}
                          alt={label}
                          fill
                          className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* Label Section */}
                    <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#FF6900]/70 via-[#FF6900]/50 to-transparent p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300`}>
                      <h3 className="text-white font-bold text-base sm:text-lg text-center drop-shadow-lg">
                        {label}
                      </h3>
                    </div>

                    {/* Decorative corner accent */}
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${color} opacity-20 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500`}></div>
                  </div>

                  {/* Floating badge */}
                  <motion.div
                    className={`absolute -top-3 -right-3 bg-gradient-to-br ${color} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    NEW
                  </motion.div>
                </motion.div>

                {/* Enhanced Label Below Card */}
                <motion.div 
                  className="mt-5 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                
                  <div className={`w-0 h-0.5 bg-gradient-to-r ${color} mx-auto mt-2 rounded-full group-hover:w-full transition-all duration-500`}></div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:via-amber-600 hover:to-yellow-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 text-lg"
            >
              View All Categories →
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
      `}</style>
    </div>
  );
}