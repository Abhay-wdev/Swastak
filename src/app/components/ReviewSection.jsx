"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      text: "Pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.",
      name: "Jane D",
      title: "CEO",
      rating: 4.9,
      img: "https://pagedone.io/asset/uploads/1696229969.png",
    },
    {
      id: 2,
      text: "Thanks to Pagedone, I feel more informed and confident about my investment decisions than ever before.",
      name: "Harsh P.",
      title: "Product Designer",
      rating: 4.9,
      img: "https://pagedone.io/asset/uploads/1696229994.png",
    },
    {
      id: 3,
      text: "The customer service team at Pagedone went above and beyond to help me resolve a billing issue.",
      name: "Alex K.",
      title: "Design Lead",
      rating: 4.9,
      img: "https://pagedone.io/asset/uploads/1696230027.png",
    },
    {
      id: 4,
      text: "Pagedone has simplified my daily tracking and reporting process — I can't imagine my workflow without it.",
      name: "Sam R.",
      title: "Marketing Head",
      rating: 5.0,
      img: "https://pagedone.io/asset/uploads/1696229994.png",
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
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 floating-decoration"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 floating-decoration" style={{ animationDelay: '3s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Enhanced Heading */}
          <div className="mb-16 text-center">
            <div className="inline-block mb-4">
              <span className="text-sm tracking-wider text-amber-600 font-bold uppercase bg-amber-100 px-4 py-2 rounded-full">
                ⭐ Testimonials ⭐
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 mb-4">
              What Our Happy Customers Say!
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                4.9
              </div>
              <div className="text-sm text-gray-600 mt-1">Average Rating</div>
            </div>
            <div className="text-center border-x-2 border-amber-200">
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                1000+
              </div>
              <div className="text-sm text-gray-600 mt-1">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                98%
              </div>
              <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
            </div>
          </div>

          {/* Enhanced Swiper */}
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
                  {/* Quote decoration */}
                  <div className="quote-bg">
                    <QuoteIcon />
                  </div>

                  {/* Star Rating */}
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

                  {/* Quote Icon */}
                  <div className="mb-4">
                    <QuoteIcon />
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 leading-relaxed mb-8 text-base min-h-[100px]">
                    "{r.text}"
                  </p>

                  {/* User Info */}
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

                  {/* Verified Badge */}
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

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Join thousands of satisfied customers today!</p>
            <button className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:via-amber-600 hover:to-yellow-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Get Started Now →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewSection;