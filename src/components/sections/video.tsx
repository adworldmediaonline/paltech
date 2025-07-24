'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: 'Customer Centric Approach',
    description:
      'We believe in going above and beyond to ensure that your industrial cooling needs are met with precision and reliability.',
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: '24/7 Emergency Service',
    description:
      'Round-the-clock support for critical cooling systems with rapid response times to minimize downtime.',
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    title: 'Expert Technicians',
    description:
      'Certified engineers and technicians with decades of experience in industrial cooling system design and maintenance.',
  },
];

export default function About() {
  return (
    <section className="py-12 lg:py-16 bg-steel-50 border-t border-steel-100 shadow-sm relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Features Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-4 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                  index === 0
                    ? 'bg-primary/5 border-primary/20'
                    : 'bg-white border-gray-200 hover:border-primary/20'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                      index === 0
                        ? 'bg-primary text-white'
                        : 'bg-primary text-white'
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Center Image - Added to reduce empty space */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative mt-6"
            >
              <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/products/prd-2.jpg"
                  alt="Paltech Cooling Tower Installation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />

                {/* Floating Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-gray-900 text-xs font-medium border border-white/20 shadow-md">
                  <div className="flex items-center space-x-1">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <span>Quality</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - About Content with Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2"
            >
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 text-sm font-medium"
              >
                ABOUT US
              </Badge>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
            >
              Creating Efficient Cooling Solutions, One Industry at a Time
            </motion.h2>

            {/* Body Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base text-gray-600 leading-relaxed"
            >
              At Paltech, we don't just provide cooling tower solutions - we
              create industrial efficiency that lasts. With over 36 years of
              experience, top-tier engineering expertise, and a passion for
              excellence, we are committed to delivering high-quality cooling
              solutions that keep your operations running smoothly.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-6 py-3 text-base font-semibold rounded-lg"
              >
                Call Us: +91-7926-306-244
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
                    d="M7 11l5-5m0 0l5 5m-5-5v12"
                  />
                </svg>
              </Button>
            </motion.div>

            {/* Professional Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative mt-4"
            >
              <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/products/prd-1.jpg"
                  alt="Paltech Cooling Tower Expert"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />

                {/* Floating Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-gray-900 text-sm font-medium border border-white/20 shadow-lg">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Expert Team</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-primary/10 rounded-full opacity-60"></div>
              <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-primary/20 rounded-full opacity-40"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
