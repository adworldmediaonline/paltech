import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  categories,
  formatPrice,
  getCategoryColor,
  type Product,
} from '@/data/products';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
}

export default function ProductCard({
  product,
  onQuickView,
  onAddToCart,
}: ProductCardProps) {
  const categoryLabel = categories.find(
    cat => cat.value === product.category
  )?.label;

  return (
    <Card className="group relative transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-2 hover:border-primary/20 bg-white overflow-hidden p-0 flex flex-col">
      {/* Featured Badge */}
      {product.featured && (
        <div className="absolute top-3 left-3 z-10">
          <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white text-xs font-medium">
            Featured
          </Badge>
        </div>
      )}

      {/* Product Image */}
      <div className="relative overflow-hidden aspect-square w-full bg-gradient-to-br from-gray-100 to-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={e => {
            // Fallback to placeholder if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const placeholder = target.nextElementSibling as HTMLElement;
            if (placeholder) placeholder.classList.remove('hidden');
          }}
        />
        {/* Fallback placeholder */}
        <div className="hidden absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
          <div className="text-4xl text-primary/30 group-hover:scale-110 transition-transform duration-300">
            📦
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-2">
            {onQuickView && (
              <Button
                size="sm"
                variant="secondary"
                onClick={e => {
                  e.stopPropagation();
                  onQuickView(product);
                }}
                className="bg-white/90 text-gray-900 hover:bg-white"
              >
                Quick View
              </Button>
            )}
          </div>
        </div>

        {/* Availability Badge */}
        <Badge
          className={`absolute top-3 right-3 text-xs ${
            product.availability === 'In Stock'
              ? 'bg-green-100 text-green-800 border-green-200'
              : product.availability === 'Custom Order'
              ? 'bg-orange-100 text-orange-800 border-orange-200'
              : 'bg-red-100 text-red-800 border-red-200'
          }`}
        >
          {product.availability}
        </Badge>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-4">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 leading-tight mb-2">
                {product.name}
              </h3>

              {/* Category Badge */}
              <Badge
                className={`text-xs border ${getCategoryColor(
                  product.category
                )}`}
                variant="outline"
              >
                {categoryLabel}
              </Badge>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 text-sm bg-yellow-50 px-2 py-1 rounded-lg flex-shrink-0">
              <span className="text-yellow-500">⭐</span>
              <span className="font-medium text-yellow-700">
                {product.rating}
              </span>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
            {product.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                {feature}
              </Badge>
            ))}
            {product.features.length > 3 && (
              <Badge
                variant="secondary"
                className="text-xs bg-gray-100 text-gray-600"
              >
                +{product.features.length - 3}
              </Badge>
            )}
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between pt-2">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-primary">
                {formatPrice(product.price)}
              </div>
              <div className="text-xs text-gray-500">Starting from</div>
            </div>

            <div className="flex gap-2 flex-wrap">
              {onAddToCart && product.availability === 'In Stock' && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={e => {
                    e.stopPropagation();
                    onAddToCart(product);
                  }}
                  className="border-primary text-primary hover:bg-primary hover:text-white text-xs px-3"
                >
                  Add to Cart
                </Button>
              )}
              <Button
                size="sm"
                className="group bg-primary hover:bg-primary/90 text-white shadow-sm hover:shadow-md transition-all duration-200 text-xs px-3"
              >
                View Details
                <svg
                  className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
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
          </div>
        </div>
      </div>
    </Card>
  );
}
