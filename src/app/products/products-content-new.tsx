'use client';

import FilterSidebar from '@/components/products/filter-sidebar';
import ProductGrid from '@/components/products/product-grid';
import ProductToolbar from '@/components/products/product-toolbar';
import { products, type Product } from '@/data/products';
import {
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  useQueryStates,
} from 'nuqs';
import { useMemo } from 'react';

export default function ProductsContentNew() {
  // URL-based filter state using nuqs
  const [filters, setFilters] = useQueryStates({
    search: parseAsString.withDefault(''),
    categories: parseAsArrayOf(parseAsString).withDefault([]),
    minPrice: parseAsInteger.withDefault(3500),
    maxPrice: parseAsInteger.withDefault(180000),
    availability: parseAsArrayOf(parseAsString).withDefault([]),
    minRating: parseAsInteger.withDefault(0),
    featured: parseAsString.withDefault(''),
    sort: parseAsString.withDefault('name'),
  });

  // Filter and sort products
  const { sortedProducts } = useMemo(() => {
    let filtered = products;

    // Apply filters
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        product =>
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower) ||
          product.features.some(feature =>
            feature.toLowerCase().includes(searchLower)
          )
      );
    }

    if (filters.categories.length > 0) {
      filtered = filtered.filter(product =>
        filters.categories.includes(product.category)
      );
    }

    if (filters.minPrice || filters.maxPrice) {
      filtered = filtered.filter(
        product =>
          product.price >= filters.minPrice && product.price <= filters.maxPrice
      );
    }

    if (filters.availability.length > 0) {
      filtered = filtered.filter(product =>
        filters.availability.includes(product.availability)
      );
    }

    if (filters.minRating > 0) {
      filtered = filtered.filter(
        product => product.rating >= filters.minRating
      );
    }

    if (filters.featured === 'true') {
      filtered = filtered.filter(product => product.featured);
    }

    // Apply sorting
    const sorted = [...filtered];
    switch (filters.sort) {
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'price':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
        sorted.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return a.name.localeCompare(b.name);
        });
        break;
      case 'category':
        sorted.sort((a, b) => {
          const categoryCompare = a.category.localeCompare(b.category);
          return categoryCompare !== 0
            ? categoryCompare
            : a.name.localeCompare(b.name);
        });
        break;
      default:
        break;
    }

    return { sortedProducts: sorted };
  }, [filters]);

  // Calculate active filters count
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (filters.search) count++;
    if (filters.categories.length > 0) count++;
    if (filters.minPrice !== 3500 || filters.maxPrice !== 180000) count++;
    if (filters.availability.length > 0) count++;
    if (filters.minRating > 0) count++;
    if (filters.featured === 'true') count++;
    return count;
  }, [filters]);

  // Handler functions
  const handleClearFilters = () => {
    setFilters({
      search: '',
      categories: [],
      minPrice: 3500,
      maxPrice: 180000,
      availability: [],
      minRating: 0,
      featured: '',
    });
  };

  const handleSortChange = (value: string) => {
    setFilters({ sort: value });
  };

  const handleProductQuickView = (product: Product) => {
    // TODO: Implement quick view modal
    console.log('Quick view:', product);
  };

  const handleProductAddToCart = (product: Product) => {
    // TODO: Implement add to cart functionality
    console.log('Add to cart:', product);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container max-w-7xl mx-auto px-4 py-4">
        {/* Main Content Area */}
        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <FilterSidebar products={products} />

          {/* Products Area */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <ProductToolbar
              totalProducts={products.length}
              filteredProducts={sortedProducts.length}
              sortBy={filters.sort}
              onSortChange={handleSortChange}
              activeFiltersCount={activeFiltersCount}
              onClearFilters={handleClearFilters}
            />

            {/* Product Grid */}
            <ProductGrid
              products={sortedProducts}
              onProductQuickView={handleProductQuickView}
              onProductAddToCart={handleProductAddToCart}
              onClearFilters={handleClearFilters}
            />
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our engineering team can design and manufacture custom cooling
            solutions tailored to your specific requirements. Contact us to
            discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Request Custom Quote
            </button>
            <button className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors">
              Download Catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
