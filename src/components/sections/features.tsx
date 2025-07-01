import { Badge } from '@/components/ui/badge';
import homeContent from '@/data/home-content.json';

export default function Features() {
  const featureIcons = [
    {
      path: 'M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z',
      gradient: 'from-paltech-blue-500 to-paltech-blue-600',
    },
    {
      path: 'M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z',
      gradient: 'from-paltech-blue-400 to-paltech-blue-500',
    },
    {
      path: 'M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z',
      gradient: 'from-paltech-blue-600 to-paltech-blue-700',
    },
    {
      path: 'M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z',
      gradient: 'from-paltech-blue-300 to-paltech-blue-500',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-paltech-blue-50/30 to-white dark:from-steel-950 dark:to-steel-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-paltech-blue-500/5 to-paltech-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-paltech-blue-500/5 to-paltech-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-1/3 w-4 h-4 bg-paltech-blue-400/20 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 left-1/4 w-6 h-6 bg-paltech-blue-400/20 rotate-45 animate-bounce delay-700"></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-paltech-blue-500/30 rounded-full animate-bounce delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a05_1px,transparent_1px),linear-gradient(to_bottom,#0f172a05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <Badge
            variant="secondary"
            className="bg-paltech-blue-100 text-paltech-blue-700 dark:bg-paltech-blue-900/20 dark:text-paltech-blue-300 border border-paltech-blue-200 dark:border-paltech-blue-700 font-[family-name:var(--font-plus-jakarta-sans)]"
          >
            Why Choose Us
          </Badge>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold">
            <span className="bg-gradient-to-r from-steel-900 via-paltech-blue-700 to-paltech-blue-600 dark:from-white dark:via-paltech-blue-300 dark:to-paltech-blue-400 bg-clip-text text-transparent">
              {homeContent.features.title}
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-steel-600 dark:text-steel-300 max-w-4xl mx-auto leading-relaxed font-[family-name:var(--font-plus-jakarta-sans)]">
            {homeContent.features.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {homeContent.features.items.map((feature, index) => (
            <div
              key={index}
              className="group relative text-center space-y-6 p-8 rounded-2xl bg-white/60 dark:bg-steel-900/60 backdrop-blur-xl border border-white/20 dark:border-steel-700/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${featureIcons[index].gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
              ></div>

              {/* Floating decoration */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-paltech-blue-500/10 to-paltech-blue-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10">
                {/* Icon Container */}
                <div className="relative mx-auto">
                  <div
                    className={`w-20 h-20 mx-auto bg-gradient-to-br ${featureIcons[index].gradient} rounded-2xl flex items-center justify-center shadow-lg shadow-paltech-blue-500/20 group-hover:shadow-2xl group-hover:shadow-paltech-blue-500/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <svg
                      className="w-10 h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d={featureIcons[index].path}
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  {/* Icon glow effect */}
                  <div
                    className={`absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br ${featureIcons[index].gradient} rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-xl`}
                  ></div>

                  {/* Orbit rings */}
                  <div className="absolute inset-0 w-20 h-20 mx-auto">
                    <div className="absolute inset-0 border border-paltech-blue-200/30 dark:border-paltech-blue-300/20 rounded-full animate-spin-slow group-hover:border-paltech-blue-300/50 dark:group-hover:border-paltech-blue-300/40 transition-colors duration-500"></div>
                    <div className="absolute inset-2 border border-paltech-blue-200/20 dark:border-paltech-blue-300/20 rounded-full animate-spin-slow-reverse group-hover:border-paltech-blue-300/40 dark:group-hover:border-paltech-blue-300/40 transition-colors duration-500"></div>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="text-2xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold text-steel-900 dark:text-white group-hover:text-paltech-blue-700 dark:group-hover:text-paltech-blue-300 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-base text-steel-600 dark:text-steel-300 leading-relaxed font-[family-name:var(--font-plus-jakarta-sans)] group-hover:text-steel-700 dark:group-hover:text-steel-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom indicator */}
                <div className="pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className={`w-12 h-1 mx-auto bg-gradient-to-r ${featureIcons[index].gradient} rounded-full`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 p-12 rounded-3xl bg-gradient-to-br from-paltech-blue-600 to-paltech-blue-500 text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%)] bg-[length:20px_20px]"></div>

          {[
            { value: '25+', label: 'Years Experience' },
            { value: '500+', label: 'Projects Completed' },
            { value: '99.8%', label: 'Customer Satisfaction' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div key={index} className="text-center relative z-10 group">
              <div className="text-4xl sm:text-5xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-paltech-blue-100 font-[family-name:var(--font-plus-jakarta-sans)] text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
