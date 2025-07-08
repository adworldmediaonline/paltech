'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Slider } from '@/components/ui/slider';
import { categories, getPriceRange, type Product } from '@/data/products';
import {
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  useQueryStates,
} from 'nuqs';
import { useMemo } from 'react';
import { Checkbox } from '../ui/checkbox';

interface FilterSidebarProps {
  products: Product[];
}

const availabilityOptions = [
  {
    value: 'In Stock',
    label: 'In Stock',
    color: 'bg-green-100 text-green-800',
  },
  {
    value: 'Custom Order',
    label: 'Custom Order',
    color: 'bg-orange-100 text-orange-800',
  },
  {
    value: 'Out of Stock',
    label: 'Out of Stock',
    color: 'bg-red-100 text-red-800',
  },
];

const ratingOptions = [
  { value: 4.5, label: '4.5+ Stars' },
  { value: 4.0, label: '4.0+ Stars' },
  { value: 3.5, label: '3.5+ Stars' },
  { value: 3.0, label: '3.0+ Stars' },
];

export default function FilterSidebar({ products }: FilterSidebarProps) {
  const priceRange = getPriceRange();

  // Use nuqs for URL-based filter state
  const [filters, setFilters] = useQueryStates({
    search: parseAsString.withDefault(''),
    categories: parseAsArrayOf(parseAsString).withDefault([]),
    minPrice: parseAsInteger.withDefault(priceRange.min),
    maxPrice: parseAsInteger.withDefault(priceRange.max),
    availability: parseAsArrayOf(parseAsString).withDefault([]),
    minRating: parseAsInteger.withDefault(0),
    featured: parseAsString.withDefault(''),
  });

  // Calculate filter counts
  const filterCounts = useMemo(() => {
    const counts: Record<string, number> = {};

    // Category counts
    categories.forEach(category => {
      if (category.value === 'all') return;
      counts[category.value] = products.filter(
        p => p.category === category.value
      ).length;
    });

    // Availability counts
    availabilityOptions.forEach(option => {
      counts[`availability_${option.value}`] = products.filter(
        p => p.availability === option.value
      ).length;
    });

    return counts;
  }, [products]);

  const handleCategoryChange = (categoryValue: string, checked: boolean) => {
    const newCategories = checked
      ? [...filters.categories, categoryValue]
      : filters.categories.filter(c => c !== categoryValue);
    setFilters({ categories: newCategories });
  };

  const handleAvailabilityChange = (
    availabilityValue: string,
    checked: boolean
  ) => {
    const newAvailability = checked
      ? [...filters.availability, availabilityValue]
      : filters.availability.filter(a => a !== availabilityValue);
    setFilters({ availability: newAvailability });
  };

  const handlePriceRangeChange = (newRange: [number, number]) => {
    setFilters({ minPrice: newRange[0], maxPrice: newRange[1] });
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      categories: [],
      minPrice: priceRange.min,
      maxPrice: priceRange.max,
      availability: [],
      minRating: 0,
      featured: '',
    });
  };

  const getActiveFilterCount = () => {
    let count = 0;
    if (filters.search) count++;
    if (filters.categories.length > 0) count++;
    if (
      filters.minPrice !== priceRange.min ||
      filters.maxPrice !== priceRange.max
    )
      count++;
    if (filters.availability.length > 0) count++;
    if (filters.minRating > 0) count++;
    if (filters.featured) count++;
    return count;
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        {getActiveFilterCount() > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-primary hover:text-primary/80"
          >
            Clear All ({getActiveFilterCount()})
          </Button>
        )}
      </div>

      {/* Search */}
      <div>
        <Label
          htmlFor="search"
          className="text-sm font-medium text-gray-700 mb-2 block"
        >
          Search Products
        </Label>
        <Input
          id="search"
          placeholder="Search by name, description..."
          value={filters.search}
          onChange={e => setFilters({ search: e.target.value })}
          className="w-full"
        />
      </div>

      <Separator />

      {/* Categories */}
      <div>
        <Label className="text-sm font-medium text-gray-700 mb-3 block">
          Categories
        </Label>
        <div className="space-y-3">
          {categories
            .filter(cat => cat.value !== 'all')
            .map(category => (
              <div
                key={category.value}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id={category.value}
                    checked={filters.categories.includes(category.value)}
                    onCheckedChange={(checked: boolean) =>
                      handleCategoryChange(category.value, checked)
                    }
                  />
                  <Label
                    htmlFor={category.value}
                    className="text-sm text-gray-600 cursor-pointer hover:text-gray-900 flex items-center gap-2"
                  >
                    <span>{category.icon}</span>
                    {category.label}
                  </Label>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {filterCounts[category.value] || 0}
                </Badge>
              </div>
            ))}
        </div>
      </div>

      <Separator />

      {/* Price Range */}
      <div>
        <Label className="text-sm font-medium text-gray-700 mb-3 block">
          Price Range
        </Label>
        <div className="px-2">
          <Slider
            value={[filters.minPrice, filters.maxPrice]}
            onValueChange={(value: number[]) =>
              handlePriceRangeChange(value as [number, number])
            }
            min={priceRange.min}
            max={priceRange.max}
            step={1000}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>₹{filters.minPrice.toLocaleString('en-IN')}</span>
            <span>₹{filters.maxPrice.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Availability */}
      <div>
        <Label className="text-sm font-medium text-gray-700 mb-3 block">
          Availability
        </Label>
        <div className="space-y-3">
          {availabilityOptions.map(option => (
            <div
              key={option.value}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <Checkbox
                  id={`availability_${option.value}`}
                  checked={filters.availability.includes(option.value)}
                  onCheckedChange={(checked: boolean) =>
                    handleAvailabilityChange(option.value, checked)
                  }
                />
                <Label
                  htmlFor={`availability_${option.value}`}
                  className="text-sm text-gray-600 cursor-pointer hover:text-gray-900"
                >
                  {option.label}
                </Label>
              </div>
              <Badge variant="secondary" className="text-xs">
                {filterCounts[`availability_${option.value}`] || 0}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Rating Filter */}
      <div>
        <Label className="text-sm font-medium text-gray-700 mb-3 block">
          Minimum Rating
        </Label>
        <div className="space-y-2">
          {ratingOptions.map(option => (
            <div key={option.value} className="flex items-center space-x-3">
              <Checkbox
                id={`rating_${option.value}`}
                checked={filters.minRating === option.value}
                onCheckedChange={(checked: boolean) =>
                  setFilters({ minRating: checked ? option.value : 0 })
                }
              />
              <Label
                htmlFor={`rating_${option.value}`}
                className="text-sm text-gray-600 cursor-pointer hover:text-gray-900 flex items-center gap-1"
              >
                <span className="text-yellow-500">⭐</span>
                {option.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Featured Products */}
      <div>
        <div className="flex items-center space-x-3">
          <Checkbox
            id="featured"
            checked={filters.featured === 'true'}
            onCheckedChange={(checked: boolean) =>
              setFilters({ featured: checked ? 'true' : '' })
            }
          />
          <Label
            htmlFor="featured"
            className="text-sm text-gray-600 cursor-pointer hover:text-gray-900 flex items-center gap-2"
          >
            <span>⭐</span>
            Featured Products Only
          </Label>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-80 shrink-0">
        <div className="sticky top-24 bg-white rounded-xl border border-gray-200 shadow-sm p-6 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <FilterContent />
        </div>
      </div>

      {/* Mobile Filter Sheet */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 border-gray-300"
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
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              Filters
              {getActiveFilterCount() > 0 && (
                <Badge className="bg-primary text-white text-xs ml-1">
                  {getActiveFilterCount()}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Filter Products</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
