export interface Product {
  id: string;
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

export const products: Product[] = [
  // Cooling Towers (4 products)
  {
    id: 'ct-001',
    name: 'Crossflow Cooling Tower',
    category: 'cooling-towers',
    price: 85000,
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&crop=center',
    description:
      'High-efficiency crossflow cooling tower with advanced PVC fill for optimal thermal performance and energy savings.',
    features: [
      'PVC Fill',
      'Corrosion Resistant',
      'Energy Efficient',
      'Low Maintenance',
    ],
    specifications: {
      capacity: '100-1000 TR',
      material: 'FRP/Concrete',
      warranty: '2 Years',
    },
    rating: 4.8,
    availability: 'In Stock',
    featured: true,
  },
  {
    id: 'ct-002',
    name: 'Counterflow Cooling Tower',
    category: 'cooling-towers',
    price: 95000,
    image:
      'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&h=600&fit=crop&crop=center',
    description:
      'Premium counterflow design with superior heat transfer efficiency and compact footprint for space-constrained installations.',
    features: [
      'Compact Design',
      'Superior Heat Transfer',
      'Drift Eliminators',
      'Weather Resistant',
    ],
    specifications: {
      capacity: '50-800 TR',
      material: 'FRP',
      warranty: '3 Years',
    },
    rating: 4.9,
    availability: 'In Stock',
  },
  {
    id: 'ct-003',
    name: 'Natural Draft Cooling Tower',
    category: 'cooling-towers',
    price: 150000,
    image:
      'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=800&h=600&fit=crop&crop=center',
    description:
      'Large-scale natural draft cooling tower for industrial power plants with minimal energy consumption.',
    features: [
      'Zero Energy Consumption',
      'Hyperbolic Shape',
      'High Capacity',
      'Environmentally Friendly',
    ],
    specifications: {
      capacity: '1000+ TR',
      material: 'Concrete',
      warranty: '5 Years',
    },
    rating: 4.7,
    availability: 'Custom Order',
  },
  {
    id: 'ct-004',
    name: 'Hybrid Cooling Tower',
    category: 'cooling-towers',
    price: 120000,
    image:
      'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop&crop=center',
    description:
      'Advanced hybrid technology combining wet and dry cooling for optimal performance in all weather conditions.',
    features: [
      'Hybrid Technology',
      'Weather Adaptive',
      'Water Saving',
      'Advanced Controls',
    ],
    specifications: {
      capacity: '200-1200 TR',
      material: 'FRP/Steel',
      warranty: '3 Years',
    },
    rating: 4.6,
    availability: 'In Stock',
  },

  // HVAC Systems (3 products)
  {
    id: 'hvac-001',
    name: 'Industrial AHU System',
    category: 'hvac-systems',
    price: 65000,
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop&crop=center',
    description:
      'Complete air handling unit with precise temperature and humidity control for industrial applications.',
    features: [
      'Precise Control',
      'Energy Recovery',
      'HEPA Filtration',
      'Smart Controls',
    ],
    specifications: {
      capacity: '5000-50000 CFM',
      efficiency: '85%+',
      warranty: '2 Years',
    },
    rating: 4.5,
    availability: 'In Stock',
  },
  {
    id: 'hvac-002',
    name: 'Chilled Water System',
    category: 'hvac-systems',
    price: 180000,
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center',
    description:
      'High-capacity chilled water system with variable speed drives and advanced refrigeration technology.',
    features: [
      'Variable Speed',
      'High COP',
      'R134a Refrigerant',
      'Remote Monitoring',
    ],
    specifications: {
      capacity: '100-2000 TR',
      efficiency: '6.5+ COP',
      warranty: '3 Years',
    },
    rating: 4.8,
    availability: 'In Stock',
    featured: true,
  },
  {
    id: 'hvac-003',
    name: 'VRV Multi-Split System',
    category: 'hvac-systems',
    price: 45000,
    image:
      'https://images.unsplash.com/photo-1631545806606-b58817a8cce7?w=800&h=600&fit=crop&crop=center',
    description:
      'Variable refrigerant volume system for precise zone control and energy efficiency in commercial buildings.',
    features: [
      'Zone Control',
      'Heat Recovery',
      'Inverter Technology',
      'Quiet Operation',
    ],
    specifications: {
      capacity: '8-130 HP',
      zones: 'Up to 64',
      warranty: '3 Years',
    },
    rating: 4.7,
    availability: 'In Stock',
  },

  // Heat Exchangers (3 products)
  {
    id: 'hex-001',
    name: 'Shell & Tube Heat Exchanger',
    category: 'heat-exchangers',
    price: 35000,
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop&crop=center',
    description:
      'Robust shell and tube design for high-pressure applications with excellent thermal efficiency.',
    features: [
      'High Pressure Rating',
      'Thermal Efficiency',
      'Corrosion Resistant',
      'Easy Maintenance',
    ],
    specifications: {
      pressure: 'Up to 300 PSI',
      material: 'SS316L',
      warranty: '2 Years',
    },
    rating: 4.6,
    availability: 'In Stock',
  },
  {
    id: 'hex-002',
    name: 'Plate Heat Exchanger',
    category: 'heat-exchangers',
    price: 25000,
    image:
      'https://images.unsplash.com/photo-1565813254282-6ce1ab8e4c39?w=800&h=600&fit=crop&crop=center',
    description:
      'Compact plate design with gaskets for easy maintenance and high heat transfer coefficient.',
    features: [
      'Compact Design',
      'High Efficiency',
      'Gasket Sealing',
      'Modular Construction',
    ],
    specifications: {
      flow: '0.5-1500 m³/h',
      material: 'Titanium Plates',
      warranty: '2 Years',
    },
    rating: 4.4,
    availability: 'In Stock',
  },
  {
    id: 'hex-003',
    name: 'Air-Cooled Heat Exchanger',
    category: 'heat-exchangers',
    price: 55000,
    image:
      'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&h=600&fit=crop&crop=center',
    description:
      'Industrial air-cooled heat exchanger with variable speed fans for optimal performance.',
    features: [
      'Air Cooling',
      'Variable Speed Fans',
      'Fin-Tube Design',
      'Weather Protection',
    ],
    specifications: {
      capacity: '500-5000 kW',
      fans: '2-8 Units',
      warranty: '3 Years',
    },
    rating: 4.5,
    availability: 'Custom Order',
  },

  // Pumps & Motors (4 products)
  {
    id: 'pm-001',
    name: 'Centrifugal Pump',
    category: 'pumps-motors',
    price: 15000,
    image:
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&h=600&fit=crop&crop=center',
    description:
      'Heavy-duty centrifugal pump with cast iron construction for reliable water circulation.',
    features: [
      'Cast Iron Construction',
      'Self-Priming',
      'High Efficiency',
      'Balanced Impeller',
    ],
    specifications: {
      flow: '50-2000 GPM',
      head: '50-300 ft',
      warranty: '1 Year',
    },
    rating: 4.3,
    availability: 'In Stock',
  },
  {
    id: 'pm-002',
    name: 'Variable Speed Drive',
    category: 'pumps-motors',
    price: 8500,
    image:
      'https://images.unsplash.com/photo-1621905252472-91b5f1f3297c?w=800&h=600&fit=crop&crop=center',
    description:
      'Advanced VFD for precise motor control and energy savings with built-in protection features.',
    features: [
      'Energy Saving',
      'Precise Control',
      'Built-in Protection',
      'LCD Display',
    ],
    specifications: {
      power: '1-500 HP',
      voltage: '208-480V',
      warranty: '2 Years',
    },
    rating: 4.7,
    availability: 'In Stock',
  },
  {
    id: 'pm-003',
    name: 'Submersible Pump',
    category: 'pumps-motors',
    price: 12000,
    image:
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&h=600&fit=crop&crop=center',
    description:
      'Stainless steel submersible pump for deep well applications with corrosion-resistant design.',
    features: [
      'Stainless Steel',
      'Deep Well Capable',
      'Corrosion Resistant',
      'High Efficiency Motor',
    ],
    specifications: {
      depth: 'Up to 500 ft',
      flow: '25-500 GPM',
      warranty: '2 Years',
    },
    rating: 4.4,
    availability: 'In Stock',
  },
  {
    id: 'pm-004',
    name: 'IE4 Premium Motor',
    category: 'pumps-motors',
    price: 6500,
    image:
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&h=600&fit=crop&crop=center',
    description:
      'Super premium efficiency IE4 motor with advanced magnetic design for maximum energy savings.',
    features: [
      'IE4 Efficiency',
      'Magnetic Design',
      'Low Vibration',
      'Extended Life',
    ],
    specifications: {
      power: '1-200 HP',
      efficiency: '95%+',
      warranty: '3 Years',
    },
    rating: 4.8,
    availability: 'In Stock',
    featured: true,
  },

  // Water Treatment (3 products)
  {
    id: 'wt-001',
    name: 'RO Water Treatment Plant',
    category: 'water-treatment',
    price: 75000,
    image:
      'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=600&fit=crop&crop=center',
    description:
      'Complete reverse osmosis system for industrial water purification with automated controls.',
    features: [
      'Automated Controls',
      'Multi-Stage Filtration',
      'High Recovery Rate',
      'Low Maintenance',
    ],
    specifications: {
      capacity: '1000-50000 LPH',
      recovery: '75%+',
      warranty: '2 Years',
    },
    rating: 4.6,
    availability: 'Custom Order',
  },
  {
    id: 'wt-002',
    name: 'Chemical Dosing System',
    category: 'water-treatment',
    price: 18000,
    image: '/images/products/chemical-dosing-system.jpg',
    description:
      'Precise chemical dosing system for water treatment with programmable controllers and safety features.',
    features: [
      'Programmable Control',
      'Safety Features',
      'Multiple Chemicals',
      'Alarm System',
    ],
    specifications: {
      tanks: '2-6 Units',
      capacity: '50-1000L',
      warranty: '2 Years',
    },
    rating: 4.5,
    availability: 'In Stock',
  },
  {
    id: 'wt-003',
    name: 'UV Sterilization System',
    category: 'water-treatment',
    price: 22000,
    image: '/images/products/uv-sterilization.jpg',
    description:
      'UV sterilization system for microbial control with high-intensity UV lamps and monitoring.',
    features: [
      'UV-C Technology',
      'High Intensity Lamps',
      'Monitoring System',
      'No Chemicals',
    ],
    specifications: {
      flow: '500-10000 LPH',
      lamps: '2-12 Units',
      warranty: '1 Year',
    },
    rating: 4.4,
    availability: 'In Stock',
  },

  // Maintenance & Service (2 products)
  {
    id: 'ms-001',
    name: 'Preventive Maintenance Kit',
    category: 'maintenance-service',
    price: 3500,
    image: '/images/products/maintenance-kit.jpg',
    description:
      'Comprehensive maintenance kit with genuine parts and consumables for cooling tower upkeep.',
    features: [
      'Genuine Parts',
      'Complete Kit',
      'Installation Guide',
      'Quality Assured',
    ],
    specifications: {
      coverage: 'Annual Service',
      parts: '50+ Items',
      warranty: '6 Months',
    },
    rating: 4.7,
    availability: 'In Stock',
  },
  {
    id: 'ms-002',
    name: 'Performance Monitoring System',
    category: 'maintenance-service',
    price: 28000,
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center',
    description:
      'Advanced IoT-based monitoring system for real-time performance tracking and predictive maintenance.',
    features: [
      'IoT Sensors',
      'Real-time Monitoring',
      'Predictive Analytics',
      'Mobile App',
    ],
    specifications: {
      sensors: '10-50 Points',
      connectivity: '4G/WiFi',
      warranty: '2 Years',
    },
    rating: 4.9,
    availability: 'Custom Order',
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
    value: 'cooling-towers',
    label: 'Cooling Towers',
    icon: '🏭',
    count: products.filter(p => p.category === 'cooling-towers').length,
  },
  {
    value: 'hvac-systems',
    label: 'HVAC Systems',
    icon: '❄️',
    count: products.filter(p => p.category === 'hvac-systems').length,
  },
  {
    value: 'heat-exchangers',
    label: 'Heat Exchangers',
    icon: '🔥',
    count: products.filter(p => p.category === 'heat-exchangers').length,
  },
  {
    value: 'pumps-motors',
    label: 'Pumps & Motors',
    icon: '⚙️',
    count: products.filter(p => p.category === 'pumps-motors').length,
  },
  {
    value: 'water-treatment',
    label: 'Water Treatment',
    icon: '💧',
    count: products.filter(p => p.category === 'water-treatment').length,
  },
  {
    value: 'maintenance-service',
    label: 'Maintenance & Service',
    icon: '🔧',
    count: products.filter(p => p.category === 'maintenance-service').length,
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
    'cooling-towers': 'bg-blue-100 text-blue-800 border-blue-200',
    'hvac-systems': 'bg-indigo-100 text-indigo-800 border-indigo-200',
    'heat-exchangers': 'bg-orange-100 text-orange-800 border-orange-200',
    'pumps-motors': 'bg-green-100 text-green-800 border-green-200',
    'water-treatment': 'bg-cyan-100 text-cyan-800 border-cyan-200',
    'maintenance-service': 'bg-purple-100 text-purple-800 border-purple-200',
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
