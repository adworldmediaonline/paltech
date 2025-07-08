import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';
import { Suspense } from 'react';
import ProductsContentNew from './products-content-new';

export default function Products() {
  return (
    <div className="pt-16 lg:pt-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-3">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-gray-900 font-medium">
                Products
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Products Content with Suspense */}
      <Suspense fallback={<ProductsLoading />}>
        <ProductsContentNew />
      </Suspense>
    </div>
  );
}

function ProductsLoading() {
  return (
    <div className="space-y-8">
      {/* Filters Loading */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="w-full lg:w-80 h-10 bg-gray-200 rounded animate-pulse"></div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <div className="w-full sm:w-48 h-10 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-full sm:w-48 h-10 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-20 h-10 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Products Grid Loading */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="aspect-square bg-gray-200 rounded-lg mb-4 animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
