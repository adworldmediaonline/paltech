'use client';

import { Button } from '@/components/ui/button';
import homeContent from '@/data/home-content.json';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const heroSlides = [
  {
    id: 1,
    image: '/images/products/prd-1.jpg',
    title: 'Expert Cooling Solutions You Can Trust',
    subtitle:
      'Reliable cooling towers and HVAC systems, expertly installed and maintained for efficient, year-round industrial performance.',
  },
  {
    id: 2,
    image: '/images/products/prd-2.jpg',
    title: 'Paltech Cooling Towers Industry Leader',
    subtitle:
      'Trusted brand in Cooling Tower Industry for more than three decades with proven expertise in industrial cooling solutions.',
  },
  {
    id: 3,
    image: '/images/products/prd-3.png',
    title: 'Industrial HVAC Systems Excellence',
    subtitle:
      'Comprehensive HVAC solutions designed for maximum efficiency and reliability in demanding industrial environments worldwide.',
  },
  {
    id: 4,
    image: '/images/products/prd-4.jpeg',
    title: 'Custom Cooling Solutions Precision',
    subtitle:
      'Tailored cooling systems designed to meet your specific industrial requirements with precision engineering and expert care.',
  },
  {
    id: 5,
    image: '/images/products/prd-5.jpeg',
    title: 'Global Service Network Worldwide',
    subtitle:
      'Worldwide support and maintenance services ensuring your cooling systems operate at peak performance throughout the year.',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Panel - Content */}
          <div className="flex items-center py-12 sm:py-16 lg:py-20">
            <div className="w-full max-w-2xl">
              <div className="space-y-4 sm:space-y-6">
                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-steel-900">
                  {heroSlides[currentSlide].title}
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-steel-600 leading-relaxed">
                  {heroSlides[currentSlide].subtitle}
                </p>

                {/* Single Focused CTA Button */}
                <div className="pt-4 sm:pt-6">
                  <Button
                    size="lg"
                    className="group bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg"
                  >
                    {homeContent.hero.cta.primary}
                    <svg
                      className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Image Slider with Full Color Background */}
          <div className="relative bg-primary flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
            {/* Enhanced Color Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90"></div>

            {/* Main Image */}
            <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6 lg:p-8 z-10">
              <div className="relative w-full max-w-lg sm:max-w-xl lg:max-w-2xl aspect-[4/3]">
                <Image
                  src={heroSlides[currentSlide].image}
                  alt={heroSlides[currentSlide].title}
                  fill
                  className="object-cover rounded-xl sm:rounded-2xl shadow-2xl transition-all duration-700 ease-in-out"
                  priority={currentSlide === 0}
                />
                {/* Image Overlay for Better Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl sm:rounded-2xl"></div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 group"
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 group"
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Pagination Indicator */}
            <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 sm:space-x-4 text-white/80 z-20">
              <span className="text-xs sm:text-sm font-medium">
                {String(currentSlide + 1).padStart(2, '0')}
              </span>
              <div className="w-12 sm:w-16 h-0.5 bg-white/40 rounded-full">
                <div
                  className="h-full bg-white rounded-full transition-all duration-500 ease-in-out"
                  style={{
                    width: `${((currentSlide + 1) / heroSlides.length) * 100}%`,
                  }}
                ></div>
              </div>
              <span className="text-xs sm:text-sm font-medium">
                {String(heroSlides.length).padStart(2, '0')}
              </span>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-20">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white scale-125'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
