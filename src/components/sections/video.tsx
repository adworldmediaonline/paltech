'use client';

import { Badge } from '@/components/ui/badge';
import homeContent from '@/data/home-content.json';
import { useState } from 'react';

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const principleIcons = [
    'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z',
    'M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z',
  ];

  const gradients = [
    'from-primary to-primary/80',
    'from-primary/80 to-primary',
    'from-primary to-primary/90',
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-steel-50 to-primary/10 dark:from-steel-900 dark:to-steel-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary border border-primary/20 dark:border-primary/30 font-[family-name:var(--font-plus-jakarta-sans)]"
          >
            About PALTECH
          </Badge>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold">
            <span className="bg-gradient-to-r from-steel-900 via-primary to-primary/80 dark:from-white dark:via-primary/80 dark:to-primary bg-clip-text text-transparent">
              {homeContent.about.title}
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-steel-600 dark:text-steel-300 max-w-4xl mx-auto leading-relaxed font-[family-name:var(--font-plus-jakarta-sans)]">
            <span className="text-primary font-bold">PALTECH</span>{' '}
            {homeContent.about.content.replace('PALTECH ', '')}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Principle */}
          <div className="lg:order-1 space-y-6">
            <div className="group bg-white/60 dark:bg-steel-900/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-steel-700/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div
                className={`w-16 h-16 bg-gradient-to-br ${gradients[0]} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={principleIcons[0]} />
                </svg>
              </div>
              <h3 className="text-xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold text-steel-900 dark:text-white mb-3">
                {homeContent.principles.items[0].title}
              </h3>
              <p className="text-steel-600 dark:text-steel-300 font-[family-name:var(--font-plus-jakarta-sans)] text-sm leading-relaxed">
                Best quality products and genuine accessories at reasonable
                prices.
              </p>
            </div>

            {/* Stats Card */}
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-white">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">36+</div>
                  <div className="text-white/80 text-xs">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">ISO</div>
                  <div className="text-white/80 text-xs">Certified</div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Video */}
          <div className="lg:order-2">
            <div className="relative aspect-video bg-steel-900 rounded-2xl overflow-hidden shadow-2xl group">
              {!isPlaying ? (
                <div
                  className="relative w-full h-full cursor-pointer"
                  onClick={handlePlay}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-steel-900/50 to-steel-900/80 flex items-center justify-center z-10">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-steel-900 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7.5v6l5.5-3-5.5-3z" />
                        </svg>
                      </div>
                      <h3 className="font-[family-name:var(--font-plus-jakarta-sans)] font-semibold text-lg mb-2">
                        {homeContent.video.title}
                      </h3>
                      <p className="text-sm text-white/80">Watch our story</p>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                  title="Paltech Company Introduction"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            {/* Video Description */}
            <div className="mt-6 text-center">
              <p className="text-steel-600 dark:text-steel-400 font-[family-name:var(--font-plus-jakarta-sans)]">
                {homeContent.video.description}
              </p>
            </div>
          </div>

          {/* Right Principles */}
          <div className="lg:order-3 space-y-6">
            <div className="group bg-white/60 dark:bg-steel-900/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-steel-700/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div
                className={`w-16 h-16 bg-gradient-to-br ${gradients[1]} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={principleIcons[1]} />
                </svg>
              </div>
              <h3 className="text-xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold text-steel-900 dark:text-white mb-3">
                {homeContent.principles.items[1].title}
              </h3>
              <p className="text-steel-600 dark:text-steel-300 font-[family-name:var(--font-plus-jakarta-sans)] text-sm leading-relaxed">
                Maintaining highest levels of precision in manufacturing
                processes.
              </p>
            </div>

            <div className="group bg-white/60 dark:bg-steel-900/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-steel-700/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div
                className={`w-16 h-16 bg-gradient-to-br ${gradients[2]} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={principleIcons[2]} />
                </svg>
              </div>
              <h3 className="text-xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold text-steel-900 dark:text-white mb-3">
                {homeContent.principles.items[2].title}
              </h3>
              <p className="text-steel-600 dark:text-steel-300 font-[family-name:var(--font-plus-jakarta-sans)] text-sm leading-relaxed">
                Maximum energy efficiency helping reduce operational costs.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white font-[family-name:var(--font-plus-jakarta-sans)] font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              Contact Us Today
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
