"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";

const ReviewSection = () => {
const reviews = [
  {
    id: 1,
    text: "I have been using Swastik Spices for a few months now, and I must say, the flavors are really fresh and authentic. My family loves the aroma and taste in every dish.",
    name: "Ravi K.",
    title: "Chef",
    rating: 5.0,
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 2,
    text: "Swastik Spices are simply amazing! Every time I cook, the spices bring out the true taste of my dishes. They are fresh, aromatic, and make cooking so much more enjoyable.",
    name: "Priya S.",
    title: "Home Cook",
    rating: 4.9,
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 3,
    text: "I run a small restaurant, and Swastik Spices have made a big difference. The quality is consistent, and my customers keep asking what I use. Highly recommend to anyone who loves good flavors.",
    name: "Amit T.",
    title: "Restaurant Owner",
    rating: 5.0,
    img: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    id: 4,
    text: "I love cooking and always try different spices. Swastik Spices are fresh and natural, and they really enhance the taste of every dish. My friends and family always ask where I get them from.",
    name: "Sunita R.",
    title: "Food Blogger",
    rating: 4.8,
    img: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    id: 5,
    text: "The aroma of Swastik Spices is something else! I tried their masala for my daily cooking, and it tastes so much better than other brands. I feel like a professional chef now.",
    name: "Vikram P.",
    title: "Chef",
    rating: 4.9,
    img: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: 6,
    text: "I use Swastik Spices every day for cooking at home. They are fresh, flavorful, and really make a difference in taste. I have recommended them to all my friends and family.",
    name: "Anjali M.",
    title: "Home Cook",
    rating: 5.0,
    img: "https://randomuser.me/api/portraits/women/16.jpg",
  },
  {
    id: 7,
    text: "Being a restaurant owner, I need quality spices for my customers. Swastik Spices never disappoints. The aroma and flavor are excellent, and they last long without losing freshness. Really happy with the product.",
    name: "Rohan S.",
    title: "Restaurant Owner",
    rating: 4.9,
    img: "https://randomuser.me/api/portraits/men/17.jpg",
  },
  {
    id: 8,
    text: "I recently started using Swastik Spices in my food blog recipes, and it has improved the taste significantly. Fresh, natural, and aromatic spices always make cooking more fun and enjoyable.",
    name: "Meera D.",
    title: "Food Blogger",
    rating: 5.0,
    img: "https://randomuser.me/api/portraits/women/18.jpg",
  },
  {
    id: 9,
    text: "I was looking for good quality spices, and Swastik Spices really impressed me. Every dish I cook tastes better, and the aroma is so inviting. My family is happy and keeps asking for more.",
    name: "Suresh K.",
    title: "Chef",
    rating: 4.8,
    img: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    id: 10,
    text: "Swastik Spices are now my go-to brand for cooking at home. The flavors are strong and fresh, and even simple dishes taste amazing. Totally satisfied and will continue buying.",
    name: "Neha R.",
    title: "Home Cook",
    rating: 5.0,
    img: "https://randomuser.me/api/portraits/women/20.jpg",
  },
  {
    id: 11,
    text: "The first time I tried Swastik Spices, I noticed the freshness immediately. Every recipe I make tastes richer and more authentic. Packaging is neat too, which makes storage easy and convenient.",
    name: "Arjun T.",
    title: "Restaurant Owner",
    rating: 4.9,
    img: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    id: 12,
    text: "I cook daily for my family, and Swastik Spices are a big help. Fresh, aromatic, and long-lasting, these spices have made cooking much more enjoyable. Highly recommended for everyone who loves Indian food.",
    name: "Pooja S.",
    title: "Home Cook",
    rating: 5.0,
    img: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: 13,
    text: "Swastik Spices give an authentic taste to all my dishes. I use them in everyday cooking as well as special recipes. Freshness and aroma are excellent. It really feels like home-cooked food every time.",
    name: "Karan V.",
    title: "Chef",
    rating: 4.9,
    img: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    id: 14,
    text: "I always trust Swastik Spices when cooking for family and friends. They are fresh, flavorful, and make every dish taste amazing. It's really hard to find this quality in other brands.",
    name: "Radhika M.",
    title: "Food Blogger",
    rating: 5.0,
    img: "https://randomuser.me/api/portraits/women/24.jpg",
  },
  {
    id: 15,
    text: "Cooking with Swastik Spices is a delight. The freshness, aroma, and taste are all perfect. I can easily make flavorful meals without worrying about the spices losing their quality.",
    name: "Dev P.",
    title: "Restaurant Owner",
    rating: 5.0,
    img: "https://randomuser.me/api/portraits/men/25.jpg",
  },
];




  const StarIcon = ({ filled = true }) => (
    <svg
      className={`w-5 h-5 ${filled ? 'text-amber-400' : 'text-gray-300'}`}
      viewBox="0 0 18 17"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" />
    </svg>
  );

  const QuoteIcon = () => (
    <svg className="w-10 h-10 text-amber-400 opacity-50" fill="currentColor" viewBox="0 0 32 32">
      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
    </svg>
  );

  return (
    <>
      <style>{`
        .swiper-pagination-bullet {
          width: 20px !important;
          height: 4px !important;
          border-radius: 8px !important;
          margin: 0 8px !important;
          background: #cbd5e1 !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active {
          width: 32px !important;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%) !important;
        }

        .review-card {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .review-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #f59e0b, #ef4444, #ec4899, #8b5cf6, #3b82f6);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }

        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .review-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .star-wrapper {
          display: inline-flex;
          gap: 4px;
          padding: 8px 16px;
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          border-radius: 50px;
          box-shadow: 0 4px 12px rgba(245, 158, 11, 0.2);
        }

        .avatar-ring {
          position: relative;
        }

        .avatar-ring::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f59e0b, #ef4444, #ec4899);
          z-index: -1;
          animation: rotate 3s linear infinite;
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .quote-bg {
          position: absolute;
          top: 20px;
          right: 20px;
          opacity: 0.1;
          transform: rotate(180deg);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .floating-decoration {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 floating-decoration"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 floating-decoration" style={{ animationDelay: '3s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 text-center">
            <div className="inline-block mb-4">
              <span className="text-sm tracking-wider text-amber-600 font-bold uppercase bg-amber-100 px-4 py-2 rounded-full">
                ⭐ Swastik Spices Reviews ⭐
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl pb-1 lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 mb-4">
              Hear From Our Happy Customers!
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real feedback from people who love Swastik Spices
            </p>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            speed={800}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="pb-16"
          >
            {reviews.map((r) => (
              <SwiperSlide key={r.id}>
                <div className="review-card p-8 h-full">
                  <div className="quote-bg">
                    <QuoteIcon />
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="star-wrapper">
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <StarIcon key={i} filled={i < Math.floor(r.rating)} />
                        ))}
                      </div>
                      <span className="ml-2 text-amber-700 font-bold text-sm">
                        {r.rating}
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <QuoteIcon />
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-8 text-base min-h-[100px]">
                    "{r.text}"
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t-2 border-amber-100">
                    <div className="avatar-ring">
                      <img
                        src={r.img}
                        alt={r.name}
                        className="w-14 h-14 rounded-full object-cover relative z-10"
                      />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-gray-900 text-lg">{r.name}</h5>
                      <p className="text-sm text-amber-600 font-medium">{r.title}</p>
                    </div>
                    <div className="text-3xl">💬</div>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified Customer
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default ReviewSection;
