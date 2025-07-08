export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  rating: number;
  availability: 'In Stock' | 'Custom Order' | 'Out of Stock';
  featured?: boolean;
}

export interface ProductCategory {
  value: string;
  label: string;
  icon: string;
  count: number;
}

export interface SortOption {
  value: string;
  label: string;
}

export const products = [
  {
    id: 1,
    name: 'Industrial Crossflow Cooling Tower',
    category: 'Cooling Towers',
    price: 45000,
    originalPrice: 48000,
    image: '/images/products/prd-1.jpg',
    description:
      'High-efficiency crossflow cooling tower designed for industrial applications with optimized heat rejection capabilities.',
    features: [
      'Crossflow Design',
      'Corrosion Resistant',
      'Energy Efficient',
      'Low Maintenance',
    ],
    specifications: {},
    rating: 4.8,
    availability: 'In Stock' as const,
    featured: true,
  },
  {
    id: 2,
    name: 'Counterflow Cooling Tower',
    category: 'Cooling Towers',
    price: 52000,
    originalPrice: 55000,
    image: '/images/products/prd-2.jpg',
    description:
      'Advanced counterflow cooling tower with superior thermal performance and compact footprint.',
    features: [
      'Counterflow Technology',
      'High Efficiency',
      'Compact Design',
      'Durable Construction',
    ],
    specifications: {},
    rating: 4.6,
    availability: 'In Stock' as const,
    featured: false,
  },
  {
    id: 3,
    name: 'Shell and Tube Heat Exchanger',
    category: 'Heat Exchangers',
    price: 15000,
    originalPrice: 16500,
    image: '/images/products/prd-3.png',
    description:
      'Robust shell and tube heat exchanger for efficient heat transfer in industrial processes.',
    features: [
      'High Heat Transfer',
      'Removable Bundle',
      'ASME Certified',
      'Multiple Pass Options',
    ],
    specifications: {},
    rating: 4.7,
    availability: 'In Stock' as const,
    featured: true,
  },
  {
    id: 4,
    name: 'Plate Heat Exchanger',
    category: 'Heat Exchangers',
    price: 8500,
    originalPrice: 9200,
    image: '/images/products/prd-4.jpeg',
    description:
      'Compact plate heat exchanger offering excellent thermal efficiency and easy maintenance.',
    features: [
      'Compact Design',
      'Easy Cleaning',
      'High Efficiency',
      'Gasket Design',
    ],
    specifications: {},
    rating: 4.5,
    availability: 'In Stock' as const,
    featured: false,
  },
  {
    id: 5,
    name: 'Brazed Plate Heat Exchanger',
    category: 'Heat Exchangers',
    price: 6500,
    originalPrice: 7000,
    image: '/images/products/prd-5.jpeg',
    description:
      'Maintenance-free brazed plate heat exchanger ideal for HVAC and refrigeration applications.',
    features: [
      'Maintenance Free',
      'Leak Proof',
      'Compact Size',
      'High Pressure Rating',
    ],
    specifications: {},
    rating: 4.4,
    availability: 'Out of Stock' as const,
    featured: false,
  },
  {
    id: 6,
    name: 'Industrial Chilled Water System',
    category: 'HVAC Systems',
    price: 75000,
    originalPrice: 80000,
    image: '/images/products/prd-6.jpeg',
    description:
      'Complete chilled water system for large-scale industrial cooling applications.',
    features: [
      'Complete System',
      'Energy Efficient',
      'Remote Monitoring',
      'Variable Speed Control',
    ],
    specifications: {},
    rating: 4.9,
    availability: 'In Stock' as const,
    featured: true,
  },
  {
    id: 7,
    name: 'Air Handling Unit',
    category: 'HVAC Systems',
    price: 25000,
    originalPrice: 27000,
    image: '/images/products/prd-7.jpeg',
    description:
      'Custom air handling unit with advanced filtration and temperature control systems.',
    features: [
      'Custom Configuration',
      'Advanced Filtration',
      'Variable Air Volume',
      'Energy Recovery',
    ],
    specifications: {},
    rating: 4.6,
    availability: 'Custom Order' as const,
    featured: false,
  },
  {
    id: 8,
    name: 'Industrial Centrifugal Pump',
    category: 'Pumps & Motors',
    price: 12000,
    originalPrice: 13000,
    image: '/images/products/prd-1.jpg',
    description:
      'Heavy-duty centrifugal pump designed for continuous industrial operation.',
    features: [
      'Heavy Duty',
      'Self-Priming',
      'Corrosion Resistant',
      'High Flow Rate',
    ],
    specifications: {},
    rating: 4.5,
    availability: 'In Stock' as const,
    featured: false,
  },
  {
    id: 9,
    name: 'Variable Frequency Drive Motor',
    category: 'Pumps & Motors',
    price: 8000,
    originalPrice: 8500,
    image: '/images/products/prd-2.jpg',
    description:
      'Energy-efficient VFD motor with precise speed control and monitoring capabilities.',
    features: [
      'Variable Speed',
      'Energy Efficient',
      'Digital Control',
      'Remote Monitoring',
    ],
    specifications: {},
    rating: 4.7,
    availability: 'In Stock' as const,
    featured: false,
  },
  {
    id: 10,
    name: 'Water Treatment Chemical Dosing System',
    category: 'Water Treatment',
    price: 18000,
    originalPrice: 19500,
    image: '/images/products/prd-3.png',
    description:
      'Automated chemical dosing system for optimal water treatment and system protection.',
    features: [
      'Automated Dosing',
      'pH Control',
      'Corrosion Inhibition',
      'Remote Monitoring',
    ],
    specifications: {},
    rating: 4.3,
    availability: 'Out of Stock' as const,
    featured: false,
  },
  {
    id: 11,
    name: 'UV Water Sterilization Unit',
    category: 'Water Treatment',
    price: 9500,
    originalPrice: 10200,
    image: '/images/products/prd-4.jpeg',
    description:
      'UV sterilization system for effective water disinfection without chemicals.',
    features: [
      'Chemical Free',
      '99.9% Kill Rate',
      'Low Maintenance',
      'Automatic Cleaning',
    ],
    specifications: {},
    rating: 4.6,
    availability: 'In Stock' as const,
    featured: false,
  },
  {
    id: 12,
    name: 'Preventive Maintenance Service',
    category: 'Maintenance & Service',
    price: 5000,
    originalPrice: 5500,
    image: '/images/products/prd-5.jpeg',
    description:
      'Comprehensive preventive maintenance program to ensure optimal equipment performance.',
    features: [
      'Scheduled Inspections',
      'Performance Testing',
      'Component Replacement',
      'Documentation',
    ],
    specifications: {},
    rating: 4.8,
    availability: 'In Stock' as const,
    featured: true,
  },
];

// Generate categories with product counts
export const categories: ProductCategory[] = [
  {
    value: 'all',
    label: 'All Categories',
    icon: '🔧',
    count: products.length,
  },
  {
    value: 'Cooling Towers',
    label: 'Cooling Towers',
    icon: '🏭',
    count: products.filter(p => p.category === 'Cooling Towers').length,
  },
  {
    value: 'HVAC Systems',
    label: 'HVAC Systems',
    icon: '❄️',
    count: products.filter(p => p.category === 'HVAC Systems').length,
  },
  {
    value: 'Heat Exchangers',
    label: 'Heat Exchangers',
    icon: '🔥',
    count: products.filter(p => p.category === 'Heat Exchangers').length,
  },
  {
    value: 'Pumps & Motors',
    label: 'Pumps & Motors',
    icon: '⚙️',
    count: products.filter(p => p.category === 'Pumps & Motors').length,
  },
  {
    value: 'Water Treatment',
    label: 'Water Treatment',
    icon: '💧',
    count: products.filter(p => p.category === 'Water Treatment').length,
  },
  {
    value: 'Maintenance & Service',
    label: 'Maintenance & Service',
    icon: '🔧',
    count: products.filter(p => p.category === 'Maintenance & Service').length,
  },
];

export const sortOptions: SortOption[] = [
  { value: 'name', label: 'Name A-Z' },
  { value: 'name-desc', label: 'Name Z-A' },
  { value: 'price', label: 'Price Low to High' },
  { value: 'price-desc', label: 'Price High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'featured', label: 'Featured First' },
  { value: 'category', label: 'Category' },
];

// Utility functions
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  }).format(price);
};

export const getCategoryColor = (category: string): string => {
  const colors = {
    'Cooling Towers': 'bg-blue-100 text-blue-800 border-blue-200',
    'HVAC Systems': 'bg-indigo-100 text-indigo-800 border-indigo-200',
    'Heat Exchangers': 'bg-orange-100 text-orange-800 border-orange-200',
    'Pumps & Motors': 'bg-green-100 text-green-800 border-green-200',
    'Water Treatment': 'bg-cyan-100 text-cyan-800 border-cyan-200',
    'Maintenance & Service': 'bg-purple-100 text-purple-800 border-purple-200',
  };
  return (
    colors[category as keyof typeof colors] ||
    'bg-gray-100 text-gray-800 border-gray-200'
  );
};

export const getPriceRange = (): { min: number; max: number } => {
  const prices = products.map(p => p.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  };
};
