'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs';
import { useMemo } from 'react';

// Product data structure
const products = [
  // Cooling Towers (4 products)
  {
    id: 'ct-001',
    name: 'Crossflow Cooling Tower',
    category: 'cooling-towers',
    price: 85000,
    image: '/images/products/crossflow-cooling-tower.jpg',
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
  },
  {
    id: 'ct-002',
    name: 'Counterflow Cooling Tower',
    category: 'cooling-towers',
    price: 95000,
    image: '/images/products/counterflow-cooling-tower.jpg',
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
    image: '/images/products/natural-draft-cooling-tower.jpg',
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
    image: '/images/products/hybrid-cooling-tower.jpg',
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
    image: '/images/products/industrial-ahu.jpg',
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
    image: '/images/products/chilled-water-system.jpg',
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
  },
  {
    id: 'hvac-003',
    name: 'VRV Multi-Split System',
    category: 'hvac-systems',
    price: 45000,
    image: '/images/products/vrv-system.jpg',
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
    image: '/images/products/shell-tube-heat-exchanger.jpg',
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
    image: '/images/products/plate-heat-exchanger.jpg',
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
    image: '/images/products/air-cooled-heat-exchanger.jpg',
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
    image: '/images/products/centrifugal-pump.jpg',
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
    image: '/images/products/variable-speed-drive.jpg',
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
    image: '/images/products/submersible-pump.jpg',
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
    image: '/images/products/ie4-motor.jpg',
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
  },

  // Water Treatment (3 products)
  {
    id: 'wt-001',
    name: 'RO Water Treatment Plant',
    category: 'water-treatment',
    price: 75000,
    image: '/images/products/ro-treatment-plant.jpg',
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
    image: '/images/products/monitoring-system.jpg',
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
  },
];

const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'cooling-towers', label: 'Cooling Towers' },
  { value: 'hvac-systems', label: 'HVAC Systems' },
  { value: 'heat-exchangers', label: 'Heat Exchangers' },
  { value: 'pumps-motors', label: 'Pumps & Motors' },
  { value: 'water-treatment', label: 'Water Treatment' },
  { value: 'maintenance-service', label: 'Maintenance & Service' },
];

const sortOptions = [
  { value: 'name', label: 'Name A-Z' },
  { value: 'name-desc', label: 'Name Z-A' },
  { value: 'price', label: 'Price Low to High' },
  { value: 'price-desc', label: 'Price High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'category', label: 'Category' },
];

export function ProductsContent() {
  // Use nuqs for URL-based state management
  const [filters, setFilters] = useQueryStates({
    search: parseAsString.withDefault(''),
    category: parseAsString.withDefault('all'),
    sort: parseAsString.withDefault('name'),
    view: parseAsStringEnum(['grid', 'list']).withDefault('grid'),
  });

  // Filter and sort products based on URL parameters
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Apply search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(
        product =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm) ||
          product.features.some(feature =>
            feature.toLowerCase().includes(searchTerm)
          )
      );
    }

    // Apply category filter
    if (filters.category !== 'all') {
      result = result.filter(product => product.category === filters.category);
    }

    // Apply sorting
    result.sort((a, b) => {
      switch (filters.sort) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'price':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    return result;
  }, [filters]);

  const getCategoryColor = (category: string) => {
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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      {/* Filters and Controls */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="w-full lg:w-80">
            <Input
              placeholder="Search products..."
              value={filters.search}
              onChange={e => setFilters({ search: e.target.value })}
              className="w-full"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            {/* Category Filter */}
            <Select
              value={filters.category}
              onValueChange={value => setFilters({ category: value })}
            >
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map(cat => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select
              value={filters.sort}
              onValueChange={value => setFilters({ sort: value })}
            >
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* View Toggle */}
            <div className="flex rounded-lg border border-gray-200 overflow-hidden">
              <Button
                variant={filters.view === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setFilters({ view: 'grid' })}
                className="rounded-none border-r"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </Button>
              <Button
                variant={filters.view === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setFilters({ view: 'list' })}
                className="rounded-none"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredProducts.length} of {products.length} products
        </div>
      </div>

      {/* Products Grid/List */}
      <div
        className={
          filters.view === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            : 'space-y-4'
        }
      >
        {filteredProducts.map(product => (
          <Card
            key={product.id}
            className={`group transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 hover:border-primary/20 ${
              filters.view === 'list' ? 'flex flex-row' : ''
            }`}
          >
            {/* Product Image */}
            <div
              className={`relative overflow-hidden ${
                filters.view === 'list'
                  ? 'w-48 h-32 flex-shrink-0'
                  : 'aspect-square w-full'
              } bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg ${
                filters.view === 'list' ? 'rounded-l-lg rounded-t-none' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-4xl text-primary/30">📦</div>
              </div>

              {/* Availability Badge */}
              <Badge
                className={`absolute top-2 right-2 text-xs ${
                  product.availability === 'In Stock'
                    ? 'bg-green-100 text-green-800 border-green-200'
                    : 'bg-orange-100 text-orange-800 border-orange-200'
                }`}
              >
                {product.availability}
              </Badge>
            </div>

            <div className={filters.view === 'list' ? 'flex-1' : ''}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                      {product.name}
                    </CardTitle>

                    {/* Category Badge */}
                    <Badge
                      className={`mt-2 text-xs border ${getCategoryColor(
                        product.category
                      )}`}
                      variant="outline"
                    >
                      {
                        categories.find(cat => cat.value === product.category)
                          ?.label
                      }
                    </Badge>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 text-sm">
                    <span className="text-yellow-500">⭐</span>
                    <span className="font-medium">{product.rating}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {product.description}
                </CardDescription>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs bg-gray-100 text-gray-700"
                    >
                      {feature}
                    </Badge>
                  ))}
                  {product.features.length > 3 && (
                    <Badge
                      variant="secondary"
                      className="text-xs bg-gray-100 text-gray-700"
                    >
                      +{product.features.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-primary">
                      {formatPrice(product.price)}
                    </div>
                    <div className="text-xs text-gray-500">Starting from</div>
                  </div>

                  <Button
                    size="sm"
                    className="group bg-primary hover:bg-primary/90 text-white"
                  >
                    View Details
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
              </CardContent>
            </div>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No products found
          </h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search criteria or browse all categories
          </p>
          <Button
            onClick={() => setFilters({ search: '', category: 'all' })}
            variant="outline"
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-16 text-center p-12 rounded-3xl bg-primary text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%)] bg-[length:20px_20px]"></div>

        <div className="relative z-10 space-y-6">
          <h3 className="text-3xl sm:text-4xl font-bold">
            Need a Custom Solution?
          </h3>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Our engineering team specializes in creating tailored solutions for
            your specific industrial cooling requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group bg-white text-primary hover:bg-white/90 hover:text-primary/90 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Request Quote
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
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold"
            >
              Contact Engineering
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
