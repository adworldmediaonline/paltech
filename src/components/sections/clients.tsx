import { Badge } from '@/components/ui/badge';
import homeContent from '@/data/home-content.json';

export default function Clients() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-paltech-blue-50/30 dark:from-steel-900 dark:to-steel-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-64 h-64 bg-paltech-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-paltech-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <Badge
            variant="secondary"
            className="bg-paltech-blue-100 text-paltech-blue-700 dark:bg-paltech-blue-900/20 dark:text-paltech-blue-300 border border-paltech-blue-200 dark:border-paltech-blue-700 font-[family-name:var(--font-plus-jakarta-sans)]"
          >
            Trusted Partners
          </Badge>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold">
            <span className="bg-gradient-to-r from-steel-900 via-paltech-blue-700 to-paltech-blue-600 dark:from-white dark:via-paltech-blue-300 dark:to-paltech-blue-400 bg-clip-text text-transparent">
              {homeContent.clients.title}
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-steel-600 dark:text-steel-300 max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-plus-jakarta-sans)]">
            {homeContent.clients.subtitle}
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 mb-16">
          {homeContent.clients.logos.map((client, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white/60 dark:bg-steel-900/60 backdrop-blur-xl border border-white/20 dark:border-steel-700/20 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-paltech-blue-500/5 to-paltech-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              {/* Floating decoration */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-paltech-blue-500/10 to-paltech-blue-500/10 rounded-full blur-lg group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative z-10 flex items-center justify-center h-16">
                <span className="text-steel-700 dark:text-steel-300 font-[family-name:var(--font-plus-jakarta-sans)] font-semibold text-lg group-hover:text-paltech-blue-700 dark:group-hover:text-paltech-blue-300 transition-colors duration-300 text-center">
                  {client}
                </span>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-paltech-blue-500 to-paltech-blue-500 rounded-full group-hover:w-16 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
              title: 'Verified Companies',
              description:
                'All our clients are verified and trusted industry leaders',
              gradient: 'from-green-500 to-emerald-500',
            },
            {
              icon: 'M13 10V3L4 14h7v7l9-11h-7z',
              title: 'Rapid Deployment',
              description:
                'Fast implementation with minimal downtime for operations',
              gradient: 'from-paltech-blue-500 to-paltech-blue-600',
            },
            {
              icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
              title: 'Long-term Partnerships',
              description:
                'Building lasting relationships with ongoing support and maintenance',
              gradient: 'from-purple-500 to-pink-500',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group text-center space-y-4 p-8 rounded-2xl bg-white/40 dark:bg-steel-900/40 backdrop-blur-sm border border-white/20 dark:border-steel-700/20 hover:bg-white/60 dark:hover:bg-steel-900/60 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 mx-auto bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={item.icon}
                  />
                </svg>
              </div>

              <h3 className="text-xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold text-steel-900 dark:text-white group-hover:text-paltech-blue-700 dark:group-hover:text-paltech-blue-300 transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-steel-600 dark:text-steel-300 font-[family-name:var(--font-plus-jakarta-sans)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 p-12 rounded-3xl bg-gradient-to-br from-paltech-blue-600/90 to-paltech-blue-500/90 backdrop-blur-xl text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>

          <div className="relative z-10 space-y-6">
            <h3 className="text-3xl sm:text-4xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold">
              Join Industry Leaders
            </h3>
            <p className="text-xl text-paltech-blue-100 max-w-2xl mx-auto font-[family-name:var(--font-plus-jakarta-sans)]">
              Ready to experience the same quality and reliability that our
              clients trust?
            </p>
            <button className="group inline-flex items-center px-8 py-4 bg-white text-paltech-blue-700 font-[family-name:var(--font-plus-jakarta-sans)] font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Start Your Project
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
      </div>
    </section>
  );
}
