'use client';

import { Card, CardContent } from '@/components/ui/card';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// Type definitions
interface Subcategory {
  id: string;
  title: string;
  description: string;
  image: string;
  subSubcategories: string[];
}

interface IndustrialCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  gradient: string;
  icon: string;
  stats: {
    products: string;
    applications: string;
    capacity: string;
  };
  subcategories: Subcategory[];
}

// Enhanced data structure for hierarchical categories
const industrialCategories: IndustrialCategory[] = [
  {
    id: 'cooling-towers',
    title: 'Cooling Towers',
    subtitle: 'Industry-Leading Quality & Performance',
    description:
      'Manufactured in accordance with industry standards, Paltech Cooling Towers are widely appreciated for exceptional quality, high performance, and prompt after-sales service. Under the experienced guidance of the promoters, the company has achieved specialization in the art of serving customers with the best quality products and services. Paltech well-developed infrastructure facilities, skilled and professionally managed workforce, and other allied strengths enable it to offer world-class cooling towers. Paltech has earned a reputation as one of the best cooling tower and equipment manufacturers in India. Our after-market services for cooling towers are well-known within the industry. We are the only provider with the widest range of cooling towers and spare parts in India.',
    image: '/images/products/prd-1.jpg',
    gradient: 'from-blue-600 via-blue-700 to-blue-900',
    icon: '🏭',
    stats: {
      products: '4 Types',
      applications: '200+',
      capacity: 'Custom Range',
    },
    subcategories: [
      {
        id: 'rcc-concrete',
        title: 'RCC Cooling Towers',
        description:
          'Robust concrete cooling towers designed to meet specific requirements, ensuring efficiency, durability, and reliability for our customers.',
        image: '/images/products/prd-1.jpg',
        subSubcategories: [],
      },
      {
        id: 'pultruded-frp',
        title: 'Pultruded FRP Cooling Towers',
        description:
          'Lightweight, corrosion-resistant FRP cooling solutions designed to meet specific requirements, ensuring efficiency, durability, and reliability for our customers.',
        image: '/images/products/prd-2.jpg',
        subSubcategories: [],
      },
      {
        id: 'wooden-timber',
        title: 'Wooden Cooling Towers',
        description:
          'Traditional wooden cooling towers designed to meet specific requirements, ensuring efficiency, durability, and reliability for our customers.',
        image: '/images/products/prd-3.png',
        subSubcategories: [
          'Wooden/Timber Single & Double Flow Induced Draft Crossflow with Direct Drive Systems',
          'Wooden/Timber Single & Double Flow Induced Draft Crossflow with Reduction Reducer Drive System',
          'Packaged WoodenTimber Double Flow Induced Draft Crossflow Cooling Towers',
        ],
      },
      {
        id: 'frp-cooling',
        title: 'FRP Cooling Towers',
        description:
          'High-performance FRP cooling tower systems designed to meet specific requirements, ensuring efficiency, durability, and reliability for our customers.',
        image: '/images/products/prd-4.jpeg',
        subSubcategories: [
          'Counter Flow Bottle Shape',
          'Counter Flow Rectangular/Square Shape',
          'Fan less Induced Draft – Jet Type FRP',
        ],
      },
    ],
  },
  {
    id: 'chilling-plants',
    title: 'Chilling Plants',
    subtitle: 'Complete Cooling Systems',
    description:
      'Comprehensive chilling plant solutions for industrial and commercial cooling applications with advanced technology.',
    image: '/images/products/prd-6.jpeg',
    gradient: 'from-indigo-600 via-indigo-700 to-indigo-900',
    icon: '❄️',
    stats: { products: '30+', applications: '150+', capacity: '10-5,000 TR' },
    subcategories: [
      {
        id: 'water-air-scroll',
        title: 'Water/Air Cooled Scroll Chilling Plants',
        description: 'Efficient scroll compressor based chilling systems',
        image: '/images/products/prd-5.jpeg',
        subSubcategories: [],
      },
      {
        id: 'cfc-free',
        title: 'CFC Free Water/Air Cooled Chilling Plant',
        description: 'Environmentally friendly refrigerant-based systems',
        image: '/images/products/prd-6.jpeg',
        subSubcategories: [],
      },
      {
        id: 'glycol-based',
        title: 'Glycol Based Water/Air Cooled Chilling Plants',
        description: 'Specialized glycol-based cooling solutions',
        image: '/images/products/prd-7.jpeg',
        subSubcategories: [],
      },
      {
        id: 'micro-processor',
        title: 'Micro Processor based Water/Air Cooled Chilling Plants',
        description: 'Smart, microprocessor-controlled chilling systems',
        image: '/images/products/prd-1.jpg',
        subSubcategories: [],
      },
    ],
  },
  {
    id: 'frp-structural',
    title: 'FRP/GRP Structural Products',
    subtitle: 'Structural Solutions',
    description:
      'High-quality FRP and GRP structural products for industrial applications with excellent durability and performance.',
    image: '/images/products/prd-3.png',
    gradient: 'from-orange-600 via-orange-700 to-orange-900',
    icon: '🏗️',
    stats: { products: '15+', applications: '100+', capacity: 'Custom' },
    subcategories: [
      {
        id: 'frp-deck-panels',
        title: 'FRP Deck Panels',
        description: 'Lightweight, high-strength deck panel solutions',
        image: '/images/products/prd-4.jpeg',
        subSubcategories: [],
      },
      {
        id: 'frp-corrugated',
        title: 'FRP Corrugated Sheets',
        description: 'Durable corrugated FRP sheets for roofing and cladding',
        image: '/images/products/prd-5.jpeg',
        subSubcategories: [],
      },
      {
        id: 'frp-gratings',
        title: 'FRP Gratings',
        description: 'Industrial-grade FRP gratings for walkways and platforms',
        image: '/images/products/prd-6.jpeg',
        subSubcategories: [],
      },
      {
        id: 'frp-ladders',
        title: 'FRP Ladders',
        description: 'Corrosion-resistant FRP ladder systems',
        image: '/images/products/prd-7.jpeg',
        subSubcategories: [],
      },
    ],
  },
];

// Enhanced Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const slideVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.3,
    },
  },
};

type NavigationLevel = 'main' | 'sub' | 'subsub';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSubcategory, setActiveSubcategory] = useState(0);
  const [currentLevel, setCurrentLevel] = useState<NavigationLevel>('main');
  const [selectedSubcategory, setSelectedSubcategory] =
    useState<Subcategory | null>(null);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const handleCategoryClick = (index: number) => {
    setActiveCategory(index);
    setCurrentLevel('main');
    setSelectedSubcategory(null);
    setIsDescriptionExpanded(false);
  };

  const handleSubcategoryClick = (subcategory: Subcategory, index: number) => {
    setSelectedSubcategory(subcategory);
    setActiveSubcategory(index);
    setIsDescriptionExpanded(false);
    if (
      subcategory.subSubcategories &&
      subcategory.subSubcategories.length > 0
    ) {
      setCurrentLevel('subsub');
    } else {
      setCurrentLevel('sub');
    }
  };

  const handleBackToMain = () => {
    setCurrentLevel('main');
    setSelectedSubcategory(null);
  };

  const handleBackToSub = () => {
    setCurrentLevel('sub');
  };

  const getCurrentCategory = () => industrialCategories[activeCategory];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-steel-50 via-white to-steel-100 dark:from-steel-950 dark:via-steel-900 dark:to-steel-950 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(120,119,198,0.02)_50%,transparent_75%)] bg-[length:40px_40px]"></div>
      </div>

      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-6 bg-gradient-to-r from-primary/10 to-primary/15 text-primary dark:bg-gradient-to-r dark:from-primary/20 dark:to-primary/25 dark:text-primary border border-primary/30 dark:border-primary/40 font-[family-name:var(--font-plus-jakarta-sans)] text-sm px-6 py-3 shadow-lg"
          >
            Industrial Solutions
          </Badge>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold mb-6">
            <span className="bg-gradient-to-r from-steel-900 via-primary to-steel-800 dark:from-white dark:via-primary/90 dark:to-steel-100 bg-clip-text text-transparent">
              Our Products
            </span>
          </h2>

          <p className="text-xl text-steel-600 dark:text-steel-300 max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-plus-jakarta-sans)]">
            Comprehensive industrial solutions with detailed product categories
            and specifications
          </p>
        </motion.div> */}

        {/* Enhanced Breadcrumb Navigation */}
        {(currentLevel === 'sub' || currentLevel === 'subsub') && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 mb-8 p-4 bg-white/60 dark:bg-steel-900/60 backdrop-blur-sm rounded-xl border border-steel-200/50 dark:border-steel-800/50 shadow-sm"
          >
            <button
              onClick={handleBackToMain}
              className="flex items-center space-x-2 text-steel-600 dark:text-steel-400 hover:text-primary transition-colors duration-200 font-[family-name:var(--font-plus-jakarta-sans)] text-sm px-3 py-1.5 rounded-lg hover:bg-primary/10"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{getCurrentCategory().title}</span>
            </button>
            <ChevronRight className="w-4 h-4 text-steel-400" />
            {currentLevel === 'subsub' && selectedSubcategory && (
              <>
                <button
                  onClick={handleBackToSub}
                  className="hover:text-primary transition-colors duration-200 font-[family-name:var(--font-plus-jakarta-sans)] text-sm px-3 py-1.5 rounded-lg hover:bg-primary/10"
                >
                  {selectedSubcategory.title}
                </button>
                <ChevronRight className="w-4 h-4 text-steel-400" />
                <span className="text-primary font-[family-name:var(--font-plus-jakarta-sans)] text-sm px-3 py-1.5 rounded-lg bg-primary/10">
                  Sub-categories
                </span>
              </>
            )}
            {currentLevel === 'sub' && selectedSubcategory && (
              <span className="text-primary font-[family-name:var(--font-plus-jakarta-sans)] text-sm px-3 py-1.5 rounded-lg bg-primary/10">
                {selectedSubcategory.title}
              </span>
            )}
          </motion.div>
        )}

        {/* Enhanced Main Content Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Enhanced Sidebar Navigation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-4"
          >
            <div className="bg-white/80 dark:bg-steel-900/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-steel-200/50 dark:border-steel-800/50 sticky top-6">
              {/* Enhanced Back Button */}
              {currentLevel !== 'main' && (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={
                    currentLevel === 'subsub'
                      ? handleBackToSub
                      : handleBackToMain
                  }
                  className="flex items-center space-x-2 text-steel-600 dark:text-steel-400 hover:text-primary transition-all duration-200 mb-6 font-[family-name:var(--font-plus-jakarta-sans)] text-sm px-4 py-2 rounded-lg hover:bg-primary/10 group"
                >
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                  <span>Back</span>
                </motion.button>
              )}

              <div className="space-y-2">
                <AnimatePresence mode="wait">
                  {currentLevel === 'main' && (
                    <motion.div
                      key="main-categories"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="space-y-2"
                    >
                      {industrialCategories.map((category, index) => (
                        <motion.div
                          key={category.id}
                          variants={itemVariants}
                          className={`relative cursor-pointer transition-all duration-300 ${
                            activeCategory === index
                              ? 'transform translate-x-2'
                              : 'hover:translate-x-1'
                          }`}
                          onClick={() => handleCategoryClick(index)}
                        >
                          <div
                            className={`p-4 rounded-xl transition-all duration-300 group ${
                              activeCategory === index
                                ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg shadow-primary/20`
                                : 'bg-steel-50 dark:bg-steel-800 text-steel-700 dark:text-steel-300 hover:bg-steel-100 dark:hover:bg-steel-700 hover:shadow-md'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div
                                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                                    activeCategory === index
                                      ? 'bg-white/20'
                                      : 'bg-primary/10'
                                  }`}
                                >
                                  <span className="text-lg">
                                    {category.icon}
                                  </span>
                                </div>
                                <div>
                                  <h3 className="font-[family-name:var(--font-plus-jakarta-sans)] font-bold text-base">
                                    {category.title}
                                  </h3>
                                  <p
                                    className={`text-sm font-[family-name:var(--font-plus-jakarta-sans)] ${
                                      activeCategory === index
                                        ? 'text-white/80'
                                        : 'text-steel-500 dark:text-steel-400'
                                    }`}
                                  >
                                    {category.stats.products} Products
                                  </p>
                                </div>
                              </div>
                              <ChevronRight
                                className={`w-5 h-5 transition-all duration-300 ${
                                  activeCategory === index
                                    ? 'rotate-90 text-white'
                                    : 'group-hover:translate-x-1'
                                }`}
                              />
                            </div>
                          </div>

                          {/* Enhanced Active indicator */}
                          {activeCategory === index && (
                            <motion.div
                              layoutId="activeIndicator"
                              className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full shadow-lg"
                              transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 30,
                              }}
                            />
                          )}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {currentLevel === 'sub' &&
                    getCurrentCategory().subcategories && (
                      <motion.div
                        key="subcategories"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="space-y-2"
                      >
                        {getCurrentCategory().subcategories.map(
                          (subcategory, index) => (
                            <motion.div
                              key={subcategory.id}
                              variants={itemVariants}
                              className={`relative cursor-pointer transition-all duration-300 ${
                                activeSubcategory === index
                                  ? 'transform translate-x-2'
                                  : 'hover:translate-x-1'
                              }`}
                              onClick={() =>
                                handleSubcategoryClick(subcategory, index)
                              }
                            >
                              <div
                                className={`p-4 rounded-xl transition-all duration-300 group ${
                                  activeSubcategory === index
                                    ? `bg-gradient-to-r ${
                                        getCurrentCategory().gradient
                                      } text-white shadow-lg shadow-primary/20`
                                    : 'bg-steel-50 dark:bg-steel-800 text-steel-700 dark:text-steel-300 hover:bg-steel-100 dark:hover:bg-steel-700 hover:shadow-md'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex-1">
                                    <h3 className="font-[family-name:var(--font-plus-jakarta-sans)] font-bold text-sm">
                                      {subcategory.title}
                                    </h3>
                                    <p
                                      className={`text-xs font-[family-name:var(--font-plus-jakarta-sans)] mt-1 ${
                                        activeSubcategory === index
                                          ? 'text-white/80'
                                          : 'text-steel-500 dark:text-steel-400'
                                      }`}
                                    >
                                      {subcategory.subSubcategories?.length > 0
                                        ? `${subcategory.subSubcategories.length} variants`
                                        : 'Available'}
                                    </p>
                                  </div>
                                  {subcategory.subSubcategories &&
                                    subcategory.subSubcategories.length > 0 && (
                                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                                    )}
                                </div>
                              </div>
                            </motion.div>
                          )
                        )}
                      </motion.div>
                    )}

                  {currentLevel === 'subsub' &&
                    selectedSubcategory?.subSubcategories && (
                      <motion.div
                        key="subsubcategories"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="space-y-2"
                      >
                        {selectedSubcategory.subSubcategories.map(
                          (subSubcategory: string, index: number) => (
                            <motion.div
                              key={index}
                              variants={itemVariants}
                              className="p-4 rounded-xl bg-steel-50 dark:bg-steel-800 text-steel-700 dark:text-steel-300 hover:bg-steel-100 dark:hover:bg-steel-700 transition-all duration-200 hover:shadow-md border border-steel-200/50 dark:border-steel-700/50"
                            >
                              <div className="flex items-start space-x-3">
                                <div
                                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${
                                    getCurrentCategory().gradient
                                  } mt-2 flex-shrink-0`}
                                ></div>
                                <p className="text-sm font-[family-name:var(--font-plus-jakarta-sans)] leading-relaxed">
                                  {subSubcategory}
                                </p>
                              </div>
                            </motion.div>
                          )
                        )}
                      </motion.div>
                    )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Main Content Area */}
          <motion.div
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentLevel}-${activeCategory}-${activeSubcategory}`}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Card className="overflow-hidden border-0 shadow-xl bg-white/80 dark:bg-steel-900/80 backdrop-blur-xl border border-steel-200/50 dark:border-steel-800/50 p-0">
                  <div className="relative">
                    {/* Enhanced Hero Image */}
                    <div className="relative h-72 lg:h-96 overflow-hidden bg-steel-100 dark:bg-steel-800">
                      <Image
                        src={
                          currentLevel === 'sub'
                            ? selectedSubcategory?.image ||
                              getCurrentCategory().image
                            : getCurrentCategory().image
                        }
                        alt={
                          currentLevel === 'sub'
                            ? selectedSubcategory?.title ||
                              getCurrentCategory().title
                            : getCurrentCategory().title
                        }
                        fill
                        className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${
                          getCurrentCategory().gradient
                        } opacity-30`}
                      ></div>

                      {/* Enhanced Floating Elements */}
                      <div className="absolute top-6 right-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <span className="text-2xl">
                              {getCurrentCategory().icon}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Overlay Content */}
                      <div className="absolute inset-0 flex items-center p-6 lg:p-8">
                        <div className="text-white w-full">
                          <div className="grid lg:grid-cols-2 gap-6 items-start">
                            {/* Main Content */}
                            <div className="lg:col-span-1 space-y-4">
                              <h3 className="text-2xl lg:text-3xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold leading-tight break-words">
                                {currentLevel === 'sub'
                                  ? selectedSubcategory?.title
                                  : getCurrentCategory().title}
                              </h3>
                              <p className="text-white/90 text-base lg:text-lg font-[family-name:var(--font-plus-jakarta-sans)] leading-relaxed break-words">
                                {currentLevel === 'sub'
                                  ? selectedSubcategory?.description
                                  : getCurrentCategory().subtitle}
                              </p>

                              {/* Description Content on Image */}
                              <div className="space-y-3 bg-black/20 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/10">
                                <motion.p
                                  className={`text-white/95 text-sm lg:text-base leading-relaxed font-[family-name:var(--font-plus-jakarta-sans)] break-words ${
                                    !isDescriptionExpanded ? 'line-clamp-2' : ''
                                  }`}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  {currentLevel === 'sub'
                                    ? selectedSubcategory?.description
                                    : getCurrentCategory().description}
                                </motion.p>

                                {/* Read More Button */}
                                <motion.button
                                  onClick={() =>
                                    setIsDescriptionExpanded(
                                      !isDescriptionExpanded
                                    )
                                  }
                                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition-colors duration-200 group bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20"
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <span>
                                    {isDescriptionExpanded
                                      ? 'Read Less'
                                      : 'Read More'}
                                  </span>
                                  <motion.div
                                    animate={{
                                      rotate: isDescriptionExpanded ? 180 : 0,
                                    }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                                  </motion.div>
                                </motion.button>
                              </div>
                            </div>

                            {/* Categories Overlay - Always visible */}
                            <div className="lg:col-span-1 flex justify-end">
                              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-white/10 min-w-[280px] w-full max-w-[380px]">
                                <div className="flex items-start justify-between mb-3 gap-2">
                                  <h4 className="text-white font-[family-name:var(--font-plus-jakarta-sans)] font-semibold text-xs lg:text-sm leading-tight flex-1 break-words">
                                    {currentLevel === 'main' &&
                                      'Available Categories'}
                                    {currentLevel === 'sub' &&
                                      'Product Variants'}
                                    {currentLevel === 'subsub' &&
                                      'All Variants'}
                                  </h4>
                                  <span className="text-white/70 text-xs font-bold bg-white/10 px-2 py-1 rounded-full flex-shrink-0">
                                    {currentLevel === 'main' &&
                                      getCurrentCategory().subcategories
                                        ?.length}
                                    {currentLevel === 'sub' &&
                                      selectedSubcategory?.subSubcategories
                                        ?.length}
                                    {currentLevel === 'subsub' &&
                                      selectedSubcategory?.subSubcategories
                                        ?.length}
                                  </span>
                                </div>
                                <div className="space-y-2">
                                  {/* Main level - Show subcategories */}
                                  {currentLevel === 'main' &&
                                    getCurrentCategory()
                                      .subcategories?.slice(0, 4)
                                      .map((subcategory, index) => (
                                        <motion.div
                                          key={subcategory.id}
                                          initial={{ opacity: 0, x: 20 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                          }}
                                          className="flex items-start justify-between p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200 cursor-pointer group gap-3"
                                          onClick={() =>
                                            handleSubcategoryClick(
                                              subcategory,
                                              index
                                            )
                                          }
                                        >
                                          <div className="flex items-start space-x-2 flex-1 min-w-0 pr-1">
                                            <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                                            <span className="text-white text-xs lg:text-sm font-[family-name:var(--font-plus-jakarta-sans)] font-medium leading-tight break-words whitespace-normal overflow-wrap-anywhere">
                                              {subcategory.title}
                                            </span>
                                          </div>
                                          <div className="flex items-center space-x-1 flex-shrink-0">
                                            <span className="text-white/70 text-xs">
                                              {subcategory.subSubcategories
                                                ?.length > 0
                                                ? `${subcategory.subSubcategories.length}x`
                                                : '✓'}
                                            </span>
                                            <ArrowRight className="w-2.5 h-2.5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
                                          </div>
                                        </motion.div>
                                      ))}

                                  {/* Sub level - Show sub-subcategories */}
                                  {currentLevel === 'sub' &&
                                    selectedSubcategory?.subSubcategories?.map(
                                      (variant: string, index: number) => (
                                        <motion.div
                                          key={index}
                                          initial={{ opacity: 0, x: 20 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                          }}
                                          className="flex items-start space-x-2 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200"
                                        >
                                          <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                                          <span className="text-white text-xs font-[family-name:var(--font-plus-jakarta-sans)] font-medium leading-relaxed break-words whitespace-normal overflow-wrap-anywhere">
                                            {variant}
                                          </span>
                                        </motion.div>
                                      )
                                    )}

                                  {/* Subsub level - Show variants in compact form */}
                                  {currentLevel === 'subsub' &&
                                    selectedSubcategory?.subSubcategories
                                      ?.slice(0, 4)
                                      .map((variant: string, index: number) => (
                                        <motion.div
                                          key={index}
                                          initial={{ opacity: 0, x: 20 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                          }}
                                          className="flex items-start space-x-2 p-3 rounded-lg bg-white/10"
                                        >
                                          <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                                          <span className="text-white text-xs font-[family-name:var(--font-plus-jakarta-sans)] font-medium leading-relaxed break-words whitespace-normal overflow-wrap-anywhere">
                                            {variant}
                                          </span>
                                        </motion.div>
                                      ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Content - Only for subsub level */}
                    {currentLevel === 'subsub' &&
                      selectedSubcategory?.subSubcategories && (
                        <CardContent className="p-8">
                          <div className="pt-6 border-t border-steel-200/50 dark:border-steel-700/50">
                            <h4 className="text-xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold text-steel-900 dark:text-white mb-6">
                              Product Variants
                            </h4>
                            <div className="grid gap-4">
                              {selectedSubcategory.subSubcategories.map(
                                (variant: string, index: number) => (
                                  <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      duration: 0.4,
                                      delay: index * 0.1,
                                    }}
                                    className="p-4 rounded-xl bg-gradient-to-r from-steel-50 to-steel-100 dark:from-steel-800 dark:to-steel-700 border border-steel-200/50 dark:border-steel-700/50 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md"
                                  >
                                    <div className="flex items-start space-x-3">
                                      <div
                                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${
                                          getCurrentCategory().gradient
                                        } mt-1 flex-shrink-0`}
                                      ></div>
                                      <p className="text-steel-700 dark:text-steel-300 font-[family-name:var(--font-plus-jakarta-sans)] leading-relaxed">
                                        {variant}
                                      </p>
                                    </div>
                                  </motion.div>
                                )
                              )}
                            </div>
                          </div>
                        </CardContent>
                      )}
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
