'use client';

import { Badge } from '@/components/ui/badge';
import homeContent from '@/data/home-content.json';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Features() {
  const featureImages = [
    {
      image: '/images/products/prd-1.jpg',
      gradient: 'from-blue-600 via-blue-700 to-blue-900',
      accentColor: 'blue',
      bgPattern: 'bg-blue-500/5',
    },
    {
      image: '/images/products/prd-2.jpg',
      gradient: 'from-emerald-600 via-emerald-700 to-emerald-900',
      accentColor: 'emerald',
      bgPattern: 'bg-emerald-500/5',
    },
    {
      image: '/images/products/prd-3.png',
      gradient: 'from-purple-600 via-purple-700 to-purple-900',
      accentColor: 'purple',
      bgPattern: 'bg-purple-500/5',
    },
    {
      image: '/images/products/prd-4.jpeg',
      gradient: 'from-orange-600 via-orange-700 to-orange-900',
      accentColor: 'orange',
      bgPattern: 'bg-orange-500/5',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-steel-50/30 to-white dark:from-steel-950 dark:to-steel-900 relative overflow-hidden">
      {/* Compact Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/3 to-blue-500/3 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/3 to-orange-500/3 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12"
        >
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary border border-primary/20 dark:border-primary/30 font-[family-name:var(--font-plus-jakarta-sans)] px-4 py-2 text-sm"
          >
            Why Choose Us
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold">
            <span className="bg-gradient-to-r from-steel-900 via-primary to-primary/80 dark:from-white dark:via-primary/80 dark:to-primary bg-clip-text text-transparent">
              {homeContent.features.title}
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-steel-600 dark:text-steel-300 max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-plus-jakarta-sans)]">
            {homeContent.features.subtitle}
          </p>
        </motion.div>

        {/* Compact Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {homeContent.features.items.map((feature, index) => {
            const imageData = featureImages[index];

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white/80 dark:bg-steel-900/80 backdrop-blur-xl border border-white/20 dark:border-steel-700/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 flex flex-col"
              >
                {/* Compact Image */}
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <Image
                    src={imageData.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${imageData.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}
                  />

                  {/* Feature Number */}
                  <div className="absolute top-4 left-4 z-10">
                    <motion.div
                      className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                      whileHover={{ scale: 1.1, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-white font-bold text-sm">
                        {index + 1}
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Compact Content */}
                <div className="p-6 space-y-4 flex-grow flex flex-col">
                  <div className="space-y-3 flex-grow">
                    <h3 className="text-xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold text-steel-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary/80 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-sm text-steel-600 dark:text-steel-300 leading-relaxed font-[family-name:var(--font-plus-jakarta-sans)]">
                      {feature.description}
                    </p>
                  </div>

                  {/* Interactive Element */}
                  <div className="flex items-center justify-between pt-2 mt-auto">
                    <motion.div
                      className={`h-1 bg-gradient-to-r ${imageData.gradient} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: '60px' }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                    <motion.div
                      className={`w-3 h-3 bg-gradient-to-r ${imageData.gradient} rounded-full`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                  </div>
                </div>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${imageData.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
