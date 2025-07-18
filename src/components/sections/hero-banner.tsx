'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-slider/slide-1.jpg"
          alt="PALTECH Industrial Solutions"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-steel-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/95 dark:bg-steel-900/95 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20 dark:border-steel-700/20"
          >
            {/* Side Label */}
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 -rotate-90 origin-center">
              <div className="text-primary font-[family-name:var(--font-plus-jakarta-sans)] font-medium text-sm tracking-wider">
                Our Solutions
              </div>
            </div>

            <div className="space-y-6">
              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold text-steel-900 dark:text-white leading-tight"
              >
                We understand your needs and we deliver{' '}
                <span className="text-primary">innovative solutions</span>{' '}
                accordingly
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl text-steel-600 dark:text-steel-300 leading-relaxed font-[family-name:var(--font-plus-jakarta-sans)] max-w-3xl"
              >
                PALTECH is dedicated to providing the most effective engineering
                solutions that meet our client's needs with teams of expertise,
                state-of-the-art R&D development and intelligent manufacturing.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="pt-4"
              >
                <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white font-[family-name:var(--font-plus-jakarta-sans)] font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300">
                  Discover More
                  <svg
                    className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 right-8 opacity-20">
        <motion.div
          className="w-32 h-32 border-2 border-primary rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="absolute top-20 right-20 opacity-30">
        <motion.div
          className="w-4 h-4 bg-primary rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
      </div>
    </section>
  );
}
