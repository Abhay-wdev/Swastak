'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroSection({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const slideInterval = 5000;
  const timerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Update container width on resize
  const updateWidth = useCallback(() => {
    if (containerRef.current) setContainerWidth(containerRef.current.clientWidth);
  }, []);

  // Check if mobile view
  const checkScreenSize = useCallback(() => {
    setIsMobile(window.innerWidth < 640);
  }, []);

  useEffect(() => {
    updateWidth();
    checkScreenSize();
    window.addEventListener('resize', updateWidth);
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', updateWidth);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [updateWidth, checkScreenSize]);

  // Auto-slide
  useEffect(() => {
    stopAutoSlide();
    if (containerWidth > 0 && !isHovered) startAutoSlide();
    return () => stopAutoSlide();
  }, [containerWidth, slides.length, isHovered]);

  const startAutoSlide = () => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideInterval);
  };

  const stopAutoSlide = () => {
    clearInterval(timerRef.current);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => {
      const newSlide = (prev - 1 + slides.length) % slides.length;
      setTimeout(() => setIsTransitioning(false), 800);
      return newSlide;
    });
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => {
      const newSlide = (prev + 1) % slides.length;
      setTimeout(() => setIsTransitioning(false), 800);
      return newSlide;
    });
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    stopAutoSlide();
  };
  const handleTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (!isHovered) startAutoSlide();
    const touchDiff = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;
    if (touchDiff > swipeThreshold && !isTransitioning) handleNext();
    else if (touchDiff < -swipeThreshold && !isTransitioning) handlePrev();
  };

  const sliderStyle = {
    transform: `translateX(-${currentSlide * containerWidth}px)`,
    transition: 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)',
    display: 'flex',
    width: `${slides.length * containerWidth}px`,
    height: '100%',
  };

  const slideStyle = {
    flexShrink: 0,
    width: containerWidth ? `${containerWidth}px` : '100%',
    height: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className="flex justify-center bg-[#F1D3C0] w-full py-0 md:py-8">
      <section
        ref={containerRef}
        className="relative md:w-[95%] w-[100%] rounded-[0%] overflow-hidden h-[70vh] max-h-[700px]"
        aria-label="Hero Section"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slider Container */}
        <div className="absolute inset-0 rounded-xl md:rounded-[20px] overflow-hidden">
          {containerWidth > 0 && (
            <div style={sliderStyle}>
              {slides.map((slide, index) => {
                const bigImg = slide?.[0] || '';
                const smallImg = slide?.[1] || '';
                return (
                  <div key={index} style={slideStyle}>
                    {(bigImg || smallImg) && (
                      <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url(${isMobile ? smallImg : bigImg})`,
                        }}
                      />
                    )}
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 z-10" />
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="hidden sm:flex absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 z-20 focus:outline-none focus:ring-2 focus:ring-teal-400 group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        </button>
        <button
          onClick={handleNext}
          className="hidden sm:flex absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 z-20 focus:outline-none focus:ring-2 focus:ring-teal-400 group"
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        </button>

        {/* Mobile Navigation */}
        <div className="flex sm:hidden absolute inset-x-0 bottom-16 justify-between px-6 z-20">
          <button
            onClick={handlePrev}
            className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
          </button>
          <button
            onClick={handleNext}
            className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 group"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
          <div
            className="h-full bg-gradient-to-r from-teal-400 to-blue-500 transition-all duration-800 ease-out"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
