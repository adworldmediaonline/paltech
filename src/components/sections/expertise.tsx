'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Expertise() {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-0 items-stretch min-h-[500px] lg:min-h-[600px]">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black text-white p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden"
          >
            {/* Background Arc Lines */}
            <div className="absolute bottom-0 right-0 w-full h-full opacity-10">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M400 400 Q300 300 200 350 Q100 400 0 350"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M400 400 Q350 250 200 300 Q50 350 0 300"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M400 400 Q375 200 200 250 Q25 300 0 250"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              >
                Why we're the best for{' '}
                <span className="text-primary">cooling solutions</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-lg"
              >
                Our commitment to quality of services & customer satisfaction
                sets us apart every time.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button
                  size="lg"
                  className="group bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  Read More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-gray-100"
          >
            <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px]">
              <Image
                src="/images/products/prd-1.jpg"
                alt="Paltech Cooling Tower Expert Technician"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-900">
                    Expert Team
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
