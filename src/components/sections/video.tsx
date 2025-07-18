'use client';

import { Badge } from '@/components/ui/badge';
import homeContent from '@/data/home-content.json';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Video() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-steel-50/50 dark:from-steel-900 dark:to-steel-800/50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary border border-primary/20 dark:border-primary/30 font-[family-name:var(--font-plus-jakarta-sans)] px-4 py-2"
          >
            About PALTECH
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold">
            <span className="bg-gradient-to-r from-steel-900 via-primary to-primary/80 dark:from-white dark:via-primary/80 dark:to-primary bg-clip-text text-transparent">
              {homeContent.about.title}
            </span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-steel-600 dark:text-steel-300 leading-relaxed font-[family-name:var(--font-plus-jakarta-sans)]">
                <span className="text-primary font-bold">PALTECH</span>{' '}
                {homeContent.about.content.replace('PALTECH ', '')}
              </p>

              <p className="text-steel-600 dark:text-steel-400 font-[family-name:var(--font-plus-jakarta-sans)] leading-relaxed">
                {homeContent.video.description}
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 p-6 bg-white/60 dark:bg-steel-900/60 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-steel-700/20">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                  36+
                </div>
                <div className="text-steel-600 dark:text-steel-400 text-sm font-[family-name:var(--font-plus-jakarta-sans)]">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                  ISO
                </div>
                <div className="text-steel-600 dark:text-steel-400 text-sm font-[family-name:var(--font-plus-jakarta-sans)]">
                  Certified
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                  1K+
                </div>
                <div className="text-steel-600 dark:text-steel-400 text-sm font-[family-name:var(--font-plus-jakarta-sans)]">
                  Projects
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          </motion.div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/products/prd-1.jpg"
                alt="PALTECH Manufacturing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-steel-900/50 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium border border-white/20">
                Since 1987
              </div>
            </div>

            {/* Small Images */}
            <div className="absolute -bottom-6 -right-6 grid grid-cols-2 gap-3">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/products/prd-2.jpg"
                  alt="Quality Products"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div className="relative w-20 h-20 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/products/prd-3.png"
                  alt="Innovation"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-12 h-12 bg-primary/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute -bottom-2 -left-8 w-8 h-8 bg-primary/30 rounded-full blur-lg"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
