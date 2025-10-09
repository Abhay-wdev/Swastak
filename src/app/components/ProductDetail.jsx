"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";

const ProductDetail = ({ products = [] }) => {
  const fallbackImage = 'https://via.placeholder.com/300x300?text=No+Image';

   

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
              OUR PRODUCTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Premium Quality Spices
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
            {products.map((product) => {
             
              return (
                <SwiperSlide key={product.id}>
                  <div className="relative max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    
                    
                    {/* Product Image */}
                    <Link href={`/products/${product.name}`}>
                      <div className="relative w-full h-64 z-10">
                        <img
                          src={product.imageUrls?.[0] || fallbackImage}
                          alt={product.name}
                          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </Link>

                    {/* Product Info */}
                    <div className="p-5 space-y-3">
                      <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                        <span className="text-sm text-gray-500 bg-amber-100 px-3 py-1 rounded-full capitalize">
                          {product.category}
                        </span>
                      </div>

                      <p className="text-sm text-gray-600">{product.shortdisc}</p>

                      <div className="flex flex-wrap justify-between items-center gap-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-bold text-amber-600">
                            ₹{product.disprice}
                            
                          </span>
                          {product.realprice > product.disprice && (
                            <span className="text-gray-500 line-through">₹{product.realprice}</span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">Weight: {product.weight}</p>
                      </div>

                      {/* Product Highlights (first 2 points) */}
                      <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 pt-3">
                        {product.points4?.map((p, i) =>
                          i < 2 ? (
                            <span
                              key={i}
                              className="bg-gray-100 text-gray-700 text-xs text-center px-2 py-1 rounded-lg"
                            >
                              {p}
                            </span>
                          ) : null
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
