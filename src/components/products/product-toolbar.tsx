'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { sortOptions } from '@/data/products';

interface ProductToolbarProps {
  totalProducts: number;
  filteredProducts: number;
  sortBy: string;
  onSortChange: (value: string) => void;
  activeFiltersCount?: number;
  onClearFilters?: () => void;
}

export default function ProductToolbar({
  totalProducts,
  filteredProducts,
  sortBy,
  onSortChange,
  activeFiltersCount = 0,
  onClearFilters,
}: ProductToolbarProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Left side - Results info and filters */}
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">
            <span className="font-medium text-gray-900">
              {filteredProducts}
            </span>
            {filteredProducts !== totalProducts && (
              <span> of {totalProducts}</span>
            )}{' '}
            products
          </div>

          {activeFiltersCount > 0 && (
            <div className="flex items-center gap-2">
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20"
              >
                {activeFiltersCount} filter{activeFiltersCount !== 1 ? 's' : ''}{' '}
                applied
              </Badge>
              {onClearFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClearFilters}
                  className="text-xs text-primary hover:text-primary/80 h-auto p-1"
                >
                  Clear all
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Right side - Controls */}
        <div className="flex items-center gap-3">
          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 hidden sm:block">
              Sort by:
            </span>
            <Select value={sortBy} onValueChange={onSortChange}>
              <SelectTrigger className="w-48 h-9">
                <SelectValue placeholder="Sort by..." />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Mobile filter summary */}
      <div className="mt-3 sm:hidden">
        {activeFiltersCount > 0 && (
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-600">
              {activeFiltersCount} filter{activeFiltersCount !== 1 ? 's' : ''}{' '}
              applied
            </span>
            {onClearFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onClearFilters}
                className="text-xs text-primary hover:text-primary/80 h-auto p-1"
              >
                Clear all filters
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
