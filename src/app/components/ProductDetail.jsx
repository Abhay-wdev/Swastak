"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Link from "next/link";

const ProductDetail = ({ products = [] }) => {
  const fallbackImage = "https://via.placeholder.com/300x300?text=No+Image";

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
          width: 2px !important;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%) !important;
        }

        .swiper-button-next,
        .swiper-button-prev {
          width: 30px !important;
          height: 30px !important;
          
          background: white !important;
          border-radius: 10% !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
          transition: all 0.3s ease !important;
        }
        
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 10px !important;
          font-weight: bold !important;
          color: green !important;
        }
        
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: #f59e0b !important;
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(245, 158, 11, 0.3) !important;
        }
        
        .swiper-button-next:hover:after,
        .swiper-button-prev:hover:after {
          color: white !important;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .product-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }

        .image-wrapper {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
        }

        .image-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.5s;
        }

        .product-card:hover .image-wrapper::before {
          left: 100%;
        }

        .discount-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
          z-index: 10;
        }

        .category-badge {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          color: white;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(245, 158, 11, 0.2);
        }

        .price-tag {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          padding: 8px 16px;
          border-radius: 12px;
          display: inline-block;
        }

        .highlight-tag {
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          border: 1px solid #d1d5db;
          transition: all 0.3s ease;
        }

        .highlight-tag:hover {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          border-color: #fbbf24;
          transform: translateY(-2px);
        }
      `}</style>

      <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Enhanced Heading */}
          <div className="mb-16 text-center">
            <div className="inline-block mb-4">
              <span className="text-sm tracking-wider text-amber-600 font-bold uppercase bg-amber-100 px-4 py-2 rounded-full">
                ✦ Our Products ✦
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 mb-4">
              Premium Quality Spices
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our authentic collection of handpicked spices from around the world
            </p>
          </div>

          {/* Enhanced Swiper Section */}
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            navigation
            centeredSlides={false}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            speed={800}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 16 },
              480: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 1.2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
              1280: { slidesPerView: 3.5, spaceBetween: 32 },
            }}
            className="pb-16"
          >
            {products.map((product) => {
              const discount = product.realprice > product.disprice 
                ? Math.round(((product.realprice - product.disprice) / product.realprice) * 100)
                : 0;

              return (
                <SwiperSlide key={product.id}>
                   <Link href={`/products/${product.name}`}>
                  <div className="product-card max-w-md mx-auto">
                    {/* Discount Badge */}
                    {discount > 0 && (
                      <div className="discount-badge">
                        {discount}% OFF
                      </div>
                    )}

                    {/* Product Image */}
                   
                      <div className="image-wrapper relative w-full h-64 sm:h-72 md:h-80">
                        <img
                          src={product.imageUrls?.[0] || fallbackImage}
                          alt={product.name}
                          className="w-full h-full object-contain transition-transform duration-500 hover:scale-110 p-4"
                        />
                      </div>
                   

                    {/* Product Info */}
                    <div className="p-6 space-y-4">
                      {/* Title and Category */}
                      <div className="flex justify-between items-start gap-3">
                        <h3 className="text-xl font-bold text-gray-900 leading-tight hover:text-amber-600 transition-colors">
                          {product.name}
                        </h3>
                        <span className="category-badge text-xs px-3 py-1.5 rounded-full capitalize whitespace-nowrap">
                          {product.category}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                        {product.shortdisc}
                      </p>

                      {/* Price Section */}
                      <div className="flex flex-wrap justify-between items-center gap-3 pt-2">
                        <div className="price-tag">
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-extrabold text-green-700">
                              ₹{product.disprice}
                            </span>
                            {product.realprice < product.disprice && (
                              <span className="text-gray-500 line-through text-base font-medium">
                                ₹{product.realprice} 
                              </span>
                               
                            )}
                            <span className="text-sm line-through font-medium text-gray-600">
                            {product.realprise} 
                            </span>
                             
                            
                             
                            
                          </div>
                        </div>
                        <div className="bg-white border-2 border-amber-200 px-3 py-1.5 rounded-lg">
                          <p className="text-xs font-semibold text-gray-700">
                            📦 {product.weight}
                           
                          </p>
                        </div>
                      </div>

                      {/* Product Highlights */}
                      {product.points4 && product.points4.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 pt-4">
                          {product.points4.slice(0, 2).map((p, i) => (
                            <span
                              key={i}
                              className="highlight-tag text-gray-700 text-xs font-medium text-center px-3 py-2 rounded-lg truncate"
                            >
                              ✓ {p}
                            </span>
                          ))}
                        </div>
                      )}

                      
                    </div>
                  </div>
                  </Link>
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