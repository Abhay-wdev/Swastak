"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

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
      text: "Pagedone has simplified my daily tracking and reporting process — I can’t imagine my workflow without it.",
      name: "Sam R.",
      title: "Marketing Head",
      rating: 5.0,
      img: "https://pagedone.io/asset/uploads/1696229994.png",
    },
  ];

  const StarIcon = () => (
    <svg
      className="w-5 h-5 text-amber-500"
      viewBox="0 0 18 17"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" />
    </svg>
  );

  return (
    <>
      <style>{`
        .swiper-pagination-bullet {
          width: 16px !important;
          height: 4px !important;
          border-radius: 4px !important;
          margin: 0 6px !important;
          background: #d1d5db !important;
        }
        .swiper-pagination-bullet-active {
          background: #4f46e5 !important;
        }
      `}</style>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-sm text-green-600 font-semibold block mb-1">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              What Our Happy Users Say!
            </h2>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviews.map((r) => (
              <SwiperSlide key={r.id}>
                <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>
                    <span className="ml-2 text-indigo-600 font-semibold">
                      {r.rating}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-6 mb-6">{r.text}</p>
                  <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                    <img
                      src={r.img}
                      alt={r.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h5 className="font-semibold text-gray-900">{r.name}</h5>
                      <p className="text-sm text-gray-500">{r.title}</p>
                    </div>
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
