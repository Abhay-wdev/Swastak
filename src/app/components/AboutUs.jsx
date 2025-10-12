"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ReviewSection from "./ReviewSection";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-amber-50 py-16 sm:py-20 overflow-hidden">
       
        <div className="relative text-center max-w-3xl mx-auto px-4 sm:px-6">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6"
          >
            About <span className="text-green-600">Suswastik</span>
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-base sm:text-lg text-gray-700 leading-relaxed px-2 sm:px-0"
          >
            Bringing the authentic taste of India to your kitchen — one spice at
            a time. Pure, natural, and crafted with love.
          </motion.p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20 grid grid-cols-1   gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-5 text-center md:text-left"
        >
        <img
  src="https://lh3.google.com/u/0/d/1iH1M83J_4a2A2XP8AJnDNT6ImlFDnE3Z=w798-h269"
  alt="Our Story"
  className="rounded-lg shadow-md"
/>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Founded with a dream to preserve India’s culinary heritage,
            <span className="font-semibold"> Suswastik </span> began as a small
            family business passionate about quality and tradition. What started
            in local spice markets has grown into a trusted brand across the
            country, delivering purity and taste to every kitchen.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Every Suswastik product carries the essence of authenticity —
            handpicked ingredients, traditional grinding methods, and a promise
            of uncompromised quality.
          </p>
        </motion.div>
 
      </div>

      {/* Mission & Vision */}
      <div className="bg-white py-12 sm:py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Our Mission",
              text: "To make every Indian household experience the magic of authentic spices. We are dedicated to preserving traditional flavors while embracing modern processes for purity, safety, and sustainability.",
            },
            {
              title: "Our Vision",
              text: "To become India’s most trusted spice brand, known for quality, integrity, and innovation — inspiring a healthier, tastier, and more sustainable world.",
            },
          ].map((section, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 + i * 0.2 }}
              className="p-6 sm:p-8 bg-amber-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-green-600 mb-3 text-center md:text-left">
                {section.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-center md:text-left">
                {section.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-10 sm:mb-12">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              title: "Purity First",
              desc: "We ensure every product is free from artificial colors or preservatives.",
            },
            {
              title: "Customer Trust",
              desc: "Building long-term relationships through honesty and excellence.",
            },
            {
              title: "Sustainability",
              desc: "We follow ethical sourcing and eco-friendly packaging practices.",
            },
            {
              title: "Innovation",
              desc: "Constantly evolving our processes to bring the best to your table.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              <h4 className="text-lg sm:text-xl font-semibold text-green-600 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-green-600 to-amber-500 text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 text-center gap-6 sm:gap-8 px-4 sm:px-8">
          {[
            { number: "10+", label: "Years of Experience" },
            { number: "500+", label: "Products Delivered" },
            { number: "100K+", label: "Happy Customers" },
            { number: "25+", label: "Distribution Cities" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h3 className="text-3xl sm:text-4xl font-bold">{stat.number}</h3>
              <p className="text-xs sm:text-sm opacity-90 mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 sm:mt-16 px-4 sm:px-8">
          <ReviewSection />
        </div>
      </div>

      
    </section>
  );
};

export default AboutUs;
