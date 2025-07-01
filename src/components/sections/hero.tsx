'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import homeContent from '@/data/home-content.json';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const heroSlides = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    title: 'PALTECH Cooling Solutions',
    subtitle: 'Excellence in Industrial Cooling Technology',
    description:
      'PALTECH is synonymous with the highest standards of quality and integrity in the business of cooling solutions.',
    badge: 'ISO 9001:2015 Certified',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    title: 'Advanced Cooling Towers',
    subtitle: 'RCC, FRP, Wooden & Packaged Solutions',
    description:
      'Specializing in cutting-edge cooling tower technology with energy-efficient designs for industrial applications.',
    badge: '36+ Years Experience',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    title: 'Industrial Chilling Plants',
    subtitle: 'Water & Air Cooled Systems',
    description:
      'Excellence in chilling plant production, catering to both air and water-cooled systems worldwide.',
    badge: '5000+ Projects Delivered',
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
            return `<span class="${className} w-2.5 h-2.5 bg-white/50 rounded-full transition-all duration-300 hover:bg-white/80 cursor-pointer"></span>`;
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={800}
        className="hero-swiper h-[70vh] sm:h-[75vh] lg:h-[80vh]"
      >
        {heroSlides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full flex items-center">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  loading={slide.id === 1 ? 'eager' : 'lazy'}
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-steel-900/75 via-paltech-blue-900/70 to-steel-950/80"></div>

                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b06_1px,transparent_1px),linear-gradient(to_bottom,#1e293b06_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30"></div>
              </div>

              {/* Content */}
              <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6 text-center lg:text-left">
                    <div className="space-y-4">
                      <Badge
                        variant="secondary"
                        className="inline-flex items-center px-3 py-1.5 bg-paltech-blue-500/20 text-paltech-blue-200 border border-paltech-blue-500/30 backdrop-blur-sm hover:bg-paltech-blue-500/30 transition-all duration-300 text-sm"
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

                      <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                        <span className="bg-gradient-to-r from-white via-paltech-blue-200 to-tech-teal-300 bg-clip-text text-transparent">
                          {slide.title}
                        </span>
                      </h1>

                      <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-paltech-blue-200">
                        {slide.subtitle}
                      </h2>

                      <p className="text-base sm:text-lg text-steel-300 max-w-xl leading-relaxed">
                        {slide.description}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-4">
                      <Button
                        size="lg"
                        className="group bg-gradient-to-r from-paltech-blue-500 to-paltech-blue-600 hover:from-paltech-blue-600 hover:to-paltech-blue-700 text-white shadow-xl shadow-paltech-blue-500/25 hover:shadow-paltech-blue-500/40 transform hover:scale-105 transition-all duration-300 px-6 py-3"
                      >
                        {homeContent.hero.cta.primary}
                        <svg
                          className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
                        className="group bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-sm transition-all duration-300 px-6 py-3"
                      >
                        {homeContent.hero.cta.secondary}
                        <svg
                          className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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

                  {/* Trust Indicators - Compact version on all slides */}
                  <div className="grid grid-cols-2 gap-4 lg:gap-6">
                    {homeContent.hero.stats.map((stat, index) => (
                      <div
                        key={index}
                        className="text-center group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-paltech-blue-300 to-tech-teal-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm text-steel-300 mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
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

      {/* Custom Pagination */}
      <div className="swiper-pagination-custom absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2"></div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
        <div className="h-full bg-gradient-to-r from-paltech-blue-500 to-tech-teal-500 swiper-progress-bar"></div>
      </div>
    </section>
  );
}
