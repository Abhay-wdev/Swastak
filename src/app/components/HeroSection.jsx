'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Phone, Calendar, MapPin, Award } from 'lucide-react';
 

export default function HeroSection({ slides })
{
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const slideInterval = 5000;
  const timerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Update container width on resize
  const updateWidth = useCallback(() =>
  {
    if (containerRef.current)
    {
      setContainerWidth(containerRef.current.clientWidth);
    }
  }, []);

  // Check if mobile view
  const checkScreenSize = useCallback(() =>
  {
    setIsMobile(window.innerWidth < 640);
  }, []);

  useEffect(() =>
  {
    updateWidth();
    checkScreenSize();

    window.addEventListener('resize', updateWidth);
    window.addEventListener('resize', checkScreenSize);

    return () =>
    {
      window.removeEventListener('resize', updateWidth);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [updateWidth, checkScreenSize]);

  // Handle auto-slide
  useEffect(() =>
  {
    stopAutoSlide();
    if (containerWidth > 0 && !isHovered)
    {
      startAutoSlide();
    }
    return () => stopAutoSlide();
  }, [containerWidth, slides.length, isHovered]);

  const startAutoSlide = () =>
  {
    timerRef.current = setInterval(() =>
    {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideInterval);
  };

  const stopAutoSlide = () =>
  {
    clearInterval(timerRef.current);
  };

  const handlePrev = () =>
  {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () =>
  {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index) =>
  {
    setCurrentSlide(index);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) =>
  {
    touchStartX.current = e.touches[0].clientX;
    stopAutoSlide();
  };

  const handleTouchMove = (e) =>
  {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () =>
  {
    if (!isHovered)
    {
      startAutoSlide();
    }

    const touchDiff = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50; // Minimum distance for swipe

    if (touchDiff > swipeThreshold)
    {
      // Swipe left, go to next slide
      handleNext();
    } else if (touchDiff < -swipeThreshold)
    {
      // Swipe right, go to previous slide
      handlePrev();
    }
  };

  const sliderStyle = {
    transform: `translateX(-${currentSlide * containerWidth}px)`,
    transition: 'transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)',
    display: 'flex',
    width: `${slides.length * containerWidth}px`,
    height: '100%',
  };

  const slideStyle = {
    flexShrink: 0,
    width: containerWidth ? `${containerWidth}px` : '100%',
    height: '100%',
    position: 'relative',
  };

  return (
    <>
      <div className="flex justify-center bg-[#F1D3C0] w-full py-0 md:py-8">
      <section
        ref={containerRef}
        className="relative md:w-[95%] w-[100%]  rounded-[0%] overflow-hidden h-[80vh] max-h-[800px]"
        aria-label="Hero Section"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Wrapper to maintain rounded corners during transition */}
        <div className="absolute inset-0 rounded-xl  md:rounded-[20px] overflow-hidden">
          {containerWidth > 0 && (
            <div style={sliderStyle}>
              {slides.map((slide) => (
                <div key={slide.id} style={slideStyle}>
                  <div className="relative w-full h-full">
                    {/* Background Image - Removed hover zoom effect */}
                    <div
                      className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(${slide.image})`,
                        zIndex: 0,
                      }}
                    />
                    {/* Optional: Add a subtle overlay for better text readability */}
                    <div className="absolute inset-0   z-10" />

                    {/* Slide content */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 z-20 text-center">
                      <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">{slide.title}</h1>
                      <p className="text-xl md:text-2xl max-w-2xl animate-fadeIn">{slide.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        {/* Large screens: center vertically */}
        <button
          onClick={handlePrev}
          className="hidden sm:flex absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-teal-400 group"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        </button>
        <button
          onClick={handleNext}
          className="hidden sm:flex absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-teal-400 group"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        </button>

        {/* Small screens: buttons at bottom */}
        <div className="flex sm:hidden absolute inset-x-0 bottom-16 justify-between px-6 z-20">
          <button
            onClick={handlePrev}
            className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 group"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
          </button>
          <button
            onClick={handleNext}
            className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 group"
            aria-label="Next Slide"
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out;
          }
        `}</style>
      </section>
     
    </div>
     
     </>
  );
}