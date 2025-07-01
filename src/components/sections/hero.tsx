'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import homeContent from '@/data/home-content.json';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const heroSlides = [
  {
    id: 1,
    image: '/images/hero-slider/slide-1.jpg',
    title: 'Paltech Cooling Towers',
    subtitle: 'Trusted brand in Cooling Tower Industry for more than 3 decades',
    badge: 'ISO 9001:2015 Certified',
  },
  {
    id: 2,
    image: '/images/hero-slider/slide-2.jpg',
    title: 'PALTECH',
    subtitle:
      'A name Industries all over the world rely on, for reliable products, solutions and aftermarket services',
    badge: '36+ Years Experience',
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          el: '.swiper-pagination-custom',
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-3 h-3 bg-white/40 rounded-full transition-all duration-500 hover:bg-white hover:scale-125 cursor-pointer border border-white/30 shadow-lg"></span>`;
          },
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={1000}
        className="hero-swiper h-[65vh] sm:h-[70vh] lg:h-[75vh]"
      >
        {heroSlides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full flex items-center">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  loading={slide.id === 1 ? 'eager' : 'lazy'}
                  width={1920}
                  height={1080}
                />
                {/* Enhanced Dark Overlay for Better Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60"></div>

                {/* Additional Left Overlay for Text Area */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent lg:via-black/20"></div>
              </div>

              {/* Content */}
              <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 h-full flex items-center">
                <div className="w-full max-w-4xl">
                  <div className="space-y-8 text-center lg:text-left">
                    <div className="space-y-6">
                      <Badge
                        variant="secondary"
                        className="inline-flex items-center px-4 py-2 bg-primary/20 text-white border border-primary/30 backdrop-blur-md hover:bg-primary/30 transition-all duration-500 text-sm font-medium shadow-lg"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {slide.badge}
                      </Badge>

                      <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight text-white drop-shadow-2xl">
                        {slide.title}
                      </h1>

                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white leading-relaxed drop-shadow-lg">
                        {slide.subtitle}
                      </h2>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
                      <Button
                        size="lg"
                        className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white shadow-xl shadow-primary/25 hover:shadow-primary/40 transform hover:scale-105 transition-all duration-500 px-8 py-4 text-lg font-semibold"
                      >
                        {homeContent.hero.cta.primary}
                        <svg
                          className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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

                      <Button
                        size="lg"
                        variant="outline"
                        className="group bg-white/15 border-white/40 text-white hover:bg-white/25 hover:border-white/60 backdrop-blur-md transition-all duration-500 px-8 py-4 text-lg font-semibold shadow-lg"
                      >
                        {homeContent.hero.cta.secondary}
                        <svg
                          className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 group">
        <svg
          className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300"
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
      </div>

      <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 group">
        <svg
          className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300"
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
      </div>

      {/* Enhanced Custom Pagination */}
      <div className="swiper-pagination-custom absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3 bg-black/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/20"></div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
        <div className="h-full bg-gradient-to-r from-paltech-blue-500 to-tech-teal-500 swiper-progress-bar"></div>
      </div>
    </section>
  );
}
