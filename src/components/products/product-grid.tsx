import ProductCard from '@/components/products/product-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { type Product } from '@/data/products';

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
  emptyState?: React.ReactNode;
  onProductQuickView?: (product: Product) => void;
  onProductAddToCart?: (product: Product) => void;
  onClearFilters?: () => void;
}

export default function ProductGrid({
  products,
  loading = false,
  emptyState,
  onProductQuickView,
  onProductAddToCart,
  onClearFilters,
}: ProductGridProps) {
  if (loading) {
    return <ProductGridSkeleton />;
  }

  if (products.length === 0) {
    return (
      <div className="flex-1">
        {emptyState || <NoProductsFound onClearFilters={onClearFilters} />}
      </div>
    );
  }

  return (
    <div className="flex-1">
      {/* Results Summary */}
      <div className="mb-6">
        <div className="text-sm text-gray-600">
          Showing {products.length} product{products.length !== 1 ? 's' : ''}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={onProductQuickView}
            onAddToCart={onProductAddToCart}
          />
        ))}
      </div>

      {/* Load More / Pagination Placeholder */}
      {products.length >= 12 && (
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="px-8">
            Load More Products
          </Button>
        </div>
      )}
    </div>
  );
}

// Loading skeleton component
function ProductGridSkeleton() {
  const skeletonCount = 6;

  return (
    <div className="flex-1">
      {/* Summary skeleton */}
      <div className="mb-6">
        <div className="h-5 bg-gray-200 rounded w-32 animate-pulse"></div>
      </div>

      {/* Product grid skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}

// Product card skeleton
function ProductCardSkeleton() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 animate-pulse">
      {/* Image skeleton */}
      <div className="bg-gray-200 rounded-lg aspect-square w-full mb-4"></div>

      <div className="flex-1">
        {/* Title skeleton */}
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>

        {/* Category badge skeleton */}
        <div className="h-5 bg-gray-200 rounded w-20 mb-3"></div>

        {/* Description skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>

        {/* Features skeleton */}
        <div className="flex gap-2 mb-4">
          <div className="h-6 bg-gray-200 rounded w-16"></div>
          <div className="h-6 bg-gray-200 rounded w-20"></div>
          <div className="h-6 bg-gray-200 rounded w-14"></div>
        </div>

        {/* Price and button skeleton */}
        <div className="flex items-center justify-between">
          <div className="h-8 bg-gray-200 rounded w-24"></div>
          <div className="h-9 bg-gray-200 rounded w-28"></div>
        </div>
      </div>
    </div>
  );
}

// No products found component
function NoProductsFound({ onClearFilters }: { onClearFilters?: () => void }) {
  return (
    <div className="text-center py-16">
      <div className="w-24 h-24 mx-auto mb-6 text-gray-300">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="w-full h-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-5h.01M6 8h.01"
          />
        </svg>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        No products found
      </h3>

      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        We couldn't find any products matching your current filters. Try
        adjusting your search criteria or clearing some filters.
      </p>

      <div className="space-y-3">
        {onClearFilters && (
          <Button onClick={onClearFilters} variant="outline" size="lg">
            Clear All Filters
          </Button>
        )}

        <div>
          <Button variant="link" className="text-primary">
            Browse All Categories →
          </Button>
        </div>
      </div>

      {/* Suggestions */}
      <div className="mt-12 max-w-md mx-auto">
        <h4 className="text-sm font-medium text-gray-900 mb-4">
          Popular Categories
        </h4>
        <div className="flex flex-wrap gap-2 justify-center">
          <Badge
            variant="secondary"
            className="cursor-pointer hover:bg-primary/10"
          >
            🏭 Cooling Towers
          </Badge>
          <Badge
            variant="secondary"
            className="cursor-pointer hover:bg-primary/10"
          >
            ❄️ HVAC Systems
          </Badge>
          <Badge
            variant="secondary"
            className="cursor-pointer hover:bg-primary/10"
          >
            🔥 Heat Exchangers
          </Badge>
          <Badge
            variant="secondary"
            className="cursor-pointer hover:bg-primary/10"
          >
            ⚙️ Pumps & Motors
          </Badge>
        </div>
      </div>
    </div>
  );
}
