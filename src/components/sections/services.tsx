import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import homeContent from '@/data/home-content.json';

export default function Services() {
  const serviceIcons = [
    'M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z',
    'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z',
    'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  ];

  const gradients = [
    'from-paltech-blue-500 to-paltech-blue-600',
    'from-paltech-blue-400 to-paltech-blue-500',
    'from-paltech-blue-600 to-paltech-blue-700',
  ];

  return (
    <section
      id="products"
      className="py-24 lg:py-32 bg-gradient-to-b from-white to-paltech-blue-50/30 dark:from-steel-900 dark:to-steel-950 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-paltech-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-paltech-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <Badge
            variant="secondary"
            className="bg-paltech-blue-100 text-paltech-blue-700 dark:bg-paltech-blue-900/20 dark:text-paltech-blue-300 border border-paltech-blue-200 dark:border-paltech-blue-700 font-[family-name:var(--font-plus-jakarta-sans)]"
          >
            Our Solutions
          </Badge>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold">
            <span className="bg-gradient-to-r from-steel-900 via-paltech-blue-700 to-paltech-blue-600 dark:from-white dark:via-paltech-blue-300 dark:to-paltech-blue-400 bg-clip-text text-transparent">
              {homeContent.services.title}
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-steel-600 dark:text-steel-300 max-w-4xl mx-auto leading-relaxed font-[family-name:var(--font-plus-jakarta-sans)]">
            {homeContent.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {homeContent.services.items.map((service, index) => (
            <Card
              key={index}
              className="group relative border-0 bg-white/60 dark:bg-steel-900/60 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              {/* Card Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Floating decoration */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-paltech-blue-500/10 to-paltech-blue-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>

              <CardHeader className="relative z-10 pb-6">
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`relative w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center shadow-lg shadow-paltech-blue-500/20 group-hover:shadow-xl group-hover:shadow-paltech-blue-500/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d={serviceIcons[index]}
                        clipRule="evenodd"
                      />
                    </svg>

                    {/* Icon glow effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-md`}
                    ></div>
                  </div>

                  <Badge
                    variant="outline"
                    className="bg-white/50 dark:bg-steel-800/50 border-paltech-blue-200 dark:border-steel-600 text-paltech-blue-700 dark:text-paltech-blue-300 font-[family-name:var(--font-plus-jakarta-sans)] group-hover:bg-paltech-blue-50 dark:group-hover:bg-steel-700 transition-colors duration-300"
                  >
                    Premium
                  </Badge>
                </div>

                <CardTitle className="text-2xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold text-steel-900 dark:text-white group-hover:text-paltech-blue-700 dark:group-hover:text-paltech-blue-300 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10 space-y-6">
                <CardDescription className="text-base text-steel-600 dark:text-steel-300 leading-relaxed font-[family-name:var(--font-plus-jakarta-sans)]">
                  {service.description}
                </CardDescription>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-3 group/item"
                    >
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5 bg-gradient-to-r from-paltech-blue-500 to-paltech-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-[family-name:var(--font-plus-jakarta-sans)] text-steel-700 dark:text-steel-300 group-hover/item:text-paltech-blue-700 dark:group-hover/item:text-paltech-blue-300 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover indicator */}
                <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center text-sm font-[family-name:var(--font-plus-jakarta-sans)] font-medium text-paltech-blue-600 dark:text-paltech-blue-400">
                    Learn more
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
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg font-[family-name:var(--font-plus-jakarta-sans)] text-steel-600 dark:text-steel-300 mb-6">
            Need a custom solution? We&apos;ve got you covered.
          </p>
          <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-paltech-blue-600 to-paltech-blue-500 text-white font-[family-name:var(--font-plus-jakarta-sans)] font-semibold rounded-xl shadow-lg shadow-paltech-blue-500/25 hover:shadow-xl hover:shadow-paltech-blue-500/40 hover:scale-105 transition-all duration-300">
            Explore All Solutions
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
          </button>
        </div>
      </div>
    </section>
  );
}
