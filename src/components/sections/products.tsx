import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const products = [
  {
    id: 'cooling-towers',
    title: 'Cooling Towers',
    description:
      'Manufactured in accordance with industry standards, Paltech Cooling Towers are widely appreciated for their high quality and reliability.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    gradient: 'from-primary to-primary/80',
    href: '/products/cooling-towers',
  },
  {
    id: 'chilling-plants',
    title: 'Chilling Plants',
    description:
      'Paltech supplies high-quality chilling plants at competitive prices, with a strong emphasis on product efficiency and performance.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    gradient: 'from-primary/80 to-primary',
    href: '/products/chilling-plants',
  },
  {
    id: 'frp-structural',
    title: 'FRP Structural Profiles',
    description:
      'Paltech offers a diverse range of Pultrusion products, including FRP Ladders, Hand Rails, and Insulator Rods, ensuring high-quality solutions for various applications.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    gradient: 'from-primary to-primary/90',
    href: '/products/frp-structural',
  },
  {
    id: 'spares',
    title: 'Spares',
    description:
      'Paltech Spares and FRP Fans are trusted names for the most efficient and reliable products in the industry, ensuring quality and longevity.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    gradient: 'from-primary/70 to-primary/90',
    href: '/spares',
  },
];

export default function Products() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-steel-50/30 dark:from-steel-950 dark:to-steel-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/5 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a05_1px,transparent_1px),linear-gradient(to_bottom,#0f172a05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-20">
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary border border-primary/20 dark:border-primary/30 font-[family-name:var(--font-plus-jakarta-sans)]"
          >
            Our Products
          </Badge>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold">
            <span className="bg-gradient-to-r from-steel-900 via-primary to-primary/80 dark:from-white dark:via-primary/80 dark:to-primary bg-clip-text text-transparent">
              Our Products
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-steel-600 dark:text-steel-300 max-w-4xl mx-auto leading-relaxed font-[family-name:var(--font-plus-jakarta-sans)]">
            Comprehensive range of industrial cooling solutions and FRP products
            engineered for excellence
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
          {products.map(product => (
            <Card
              key={product.id}
              className="group relative border-0 bg-white/80 dark:bg-steel-900/80 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden h-full flex flex-col"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Floating decoration */}
              <div
                className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${product.gradient} opacity-10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700`}
              ></div>

              <CardHeader className="relative z-10 text-center pb-4">
                {/* Icon Container */}
                <div className="relative mx-auto mb-6">
                  <div
                    className={`w-20 h-20 mx-auto bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-2xl group-hover:shadow-primary/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={product.icon}
                      />
                    </svg>
                  </div>

                  {/* Icon glow effect */}
                  <div
                    className={`absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br ${product.gradient} rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-xl`}
                  ></div>

                  {/* Orbit rings */}
                  <div className="absolute inset-0 w-20 h-20 mx-auto">
                    <div className="absolute inset-0 border border-primary/30 dark:border-primary/20 rounded-full animate-spin-slow group-hover:border-primary/50 dark:group-hover:border-primary/40 transition-colors duration-500"></div>
                    <div className="absolute inset-2 border border-primary/20 dark:border-primary/20 rounded-full animate-spin-slow-reverse group-hover:border-primary/40 dark:group-hover:border-primary/40 transition-colors duration-500"></div>
                  </div>
                </div>

                <CardTitle className="text-2xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold text-steel-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary/80 transition-colors duration-300 leading-tight">
                  {product.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10 text-center flex flex-col flex-grow">
                <p className="text-base text-steel-600 dark:text-steel-300 leading-relaxed font-[family-name:var(--font-plus-jakarta-sans)] mb-8 group-hover:text-steel-700 dark:group-hover:text-steel-200 transition-colors duration-300 flex-grow">
                  {product.description}
                </p>

                <div className="mt-auto">
                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    className="group/btn w-full bg-transparent border-primary/30 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 font-[family-name:var(--font-plus-jakarta-sans)] font-semibold"
                  >
                    Read More
                    <svg
                      className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
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

                  {/* Bottom indicator */}
                  <div className="pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className={`w-12 h-1 mx-auto bg-gradient-to-r ${product.gradient} rounded-full`}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20 p-12 rounded-3xl bg-gradient-to-br from-primary/90 to-primary/80 backdrop-blur-xl text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%)] bg-[length:20px_20px]"></div>

          <div className="relative z-10 space-y-6">
            <h3 className="text-3xl sm:text-4xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold">
              Need Custom Solutions?
            </h3>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-[family-name:var(--font-plus-jakarta-sans)]">
              Our engineering team specializes in creating tailored solutions
              for your specific industrial cooling requirements.
            </p>
            <Button
              size="lg"
              className="group bg-white text-primary hover:bg-white/90 hover:text-primary/90 font-[family-name:var(--font-plus-jakarta-sans)] font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get Custom Quote
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
          </div>
        </div>
      </div>
    </section>
  );
}
