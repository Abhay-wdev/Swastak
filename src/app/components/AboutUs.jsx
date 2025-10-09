"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ReviewSection from "./ReviewSection";

const AboutUs = () => {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-amber-50 py-20">
        <div className="absolute inset-0">
          <Image
            src="/about-hero.jpg" // replace with your own image
            alt="About Hero"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative text-center max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-gray-900 mb-6"
          >
            About <span className="text-green-600">Suswastik</span>
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Bringing the authentic taste of India to your kitchen — one spice at
            a time. Pure, natural, and crafted with love.
          </motion.p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Founded with a dream to preserve India’s culinary heritage,
            <span className="font-semibold"> Suswastik </span> began as a small
            family business passionate about quality and tradition. What started
            in local spice markets has grown into a trusted brand across the
            country, delivering purity and taste to every kitchen.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Every Suswastik product carries the essence of authenticity —
            handpicked ingredients, traditional grinding methods, and a promise
            of uncompromised quality.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/about-story.jpg" // replace with your own
            alt="Our Story"
            width={600}
            height={400}
            className="rounded-2xl shadow-xl object-cover"
          />
        </motion.div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="p-8 bg-amber-50 rounded-2xl shadow-md"
          >
            <h3 className="text-2xl font-semibold text-green-600 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To make every Indian household experience the magic of authentic
              spices. We are dedicated to preserving traditional flavors while
              embracing modern processes for purity, safety, and sustainability.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="p-8 bg-amber-50 rounded-2xl shadow-md"
          >
            <h3 className="text-2xl font-semibold text-green-600 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To become India’s most trusted spice brand, known for quality,
              integrity, and innovation — inspiring a healthier, tastier, and
              more sustainable world.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">
          Our Core Values
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h4 className="text-xl font-semibold text-green-600 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-green-600 to-amber-500 text-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 text-center gap-6">
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
              <h3 className="text-4xl font-bold">{stat.number}</h3>
              <p className="text-sm opacity-90 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        <ReviewSection/>
      </div>

      {/* Meet Our Team */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">
          Meet Our Team
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              name: "Abhay Chorsiya",
              role: "Founder & CEO",
              img: "/images/demo.jpg",
            },
            {
              name: "Nikita Sharma",
              role: "Marketing Head",
              img: "/images/demo.jpg",
            },
            {
              name: "Aman Verma",
              role: "Operations Manager",
              img: "/images/demo.jpg",
            },
            {
              name: "Priya Singh",
              role: "Product Designer",
              img: "/images/demo.jpg",
            },
          ].map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={400}
                height={300}
                className="w-full h-70 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
