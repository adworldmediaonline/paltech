import { products } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white pb-16">
      {/* Hero Banner */}
      <section className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] flex items-end overflow-hidden">
        <Image
          src="/images/products/prd-1.jpg"
          alt="Paltech Cooling Towers"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <div className="mb-2">
            <span className="inline-block bg-white/20 text-white text-xs font-semibold tracking-widest px-4 py-1 rounded uppercase shadow-sm backdrop-blur-sm">
              PRODUCTS
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white drop-shadow-lg max-w-3xl">
            The Entire Range of Wet & Dry Cooling Solutions is Only Available at
            Paltech
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-10">
        <div className="grid md:grid-cols-2 gap-8 text-gray-700 text-base leading-relaxed">
          <div>
            The entire scope of cooling tower technologies can be found at
            Paltech. These time-tested solutions are customised to your unique
            needs and
          </div>
          <div>
            deliver highly predictable thermal performance to ensure you get the
            most out of your cooling process.
          </div>
        </div>
      </section>

      {/* Product Cards Grid */}
      <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col overflow-hidden hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="relative w-full aspect-[4/3] bg-gray-50 border-b border-gray-100 rounded-t-xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="flex-1 flex flex-col px-5 pt-4 pb-5">
                <h2 className="text-lg font-bold text-gray-900 mb-1 text-left">
                  {product.name}
                </h2>
                <p className="text-gray-600 text-sm mb-2 text-left line-clamp-2">
                  {product.description}
                </p>
                {/* Optional: Features as a single muted line */}
                {product.features.length > 0 && (
                  <div className="text-xs text-gray-400 mb-3 text-left truncate">
                    {product.features.slice(0, 3).join(' • ')}
                  </div>
                )}
                <div className="flex justify-end mt-auto">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline hover:text-primary/80 transition-colors"
                  >
                    Read more <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
