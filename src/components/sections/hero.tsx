import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import homeContent from '@/data/home-content.json';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-paltech-blue-950 via-paltech-blue-900 to-steel-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-paltech-blue-600/20 via-paltech-blue-400/10 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-paltech-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-paltech-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-paltech-blue-950/50 to-paltech-blue-950"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 text-center lg:text-left">
            <div className="space-y-8">
              <Badge
                variant="secondary"
                className="inline-flex items-center px-4 py-2 bg-paltech-blue-500/10 text-paltech-blue-400 border border-paltech-blue-500/20 backdrop-blur-sm hover:bg-paltech-blue-500/20 transition-all duration-300 font-[family-name:var(--font-plus-jakarta-sans)]"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {homeContent.hero.badge}
              </Badge>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-paltech-blue-100 to-paltech-blue-400 bg-clip-text text-transparent">
                  {homeContent.hero.title}
                </span>
              </h1>

              <h2 className="text-xl sm:text-2xl font-[family-name:var(--font-plus-jakarta-sans)] font-medium text-paltech-blue-200">
                {homeContent.hero.subtitle}
              </h2>

              <p className="text-lg sm:text-xl text-paltech-blue-300/90 max-w-2xl leading-relaxed font-[family-name:var(--font-plus-jakarta-sans)]">
                {homeContent.hero.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-paltech-blue-500 to-paltech-blue-600 hover:from-paltech-blue-600 hover:to-paltech-blue-700 text-white shadow-2xl shadow-paltech-blue-500/25 hover:shadow-paltech-blue-500/40 transform hover:scale-105 transition-all duration-300 font-[family-name:var(--font-plus-jakarta-sans)] text-lg px-8 py-6"
              >
                {homeContent.hero.cta.primary}
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group bg-white/5 border-paltech-blue-300/30 text-paltech-blue-200 hover:bg-white/10 hover:border-paltech-blue-300/50 backdrop-blur-sm transition-all duration-300 font-[family-name:var(--font-plus-jakarta-sans)] text-lg px-8 py-6"
              >
                {homeContent.hero.cta.secondary}
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              {homeContent.hero.stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl sm:text-4xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold bg-gradient-to-r from-paltech-blue-300 to-paltech-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm font-[family-name:var(--font-plus-jakarta-sans)] text-paltech-blue-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative lg:mt-0 mt-16">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 backdrop-blur-xl border border-white/20 shadow-2xl shadow-paltech-blue-500/10">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      icon: 'M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z',
                      title: 'Energy Efficient',
                      value: 'Up to 40% savings',
                      gradient: 'from-green-400 to-emerald-500',
                    },
                    {
                      icon: 'M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z',
                      title: 'Reliable',
                      value: '99.8% uptime',
                      gradient: 'from-paltech-blue-400 to-paltech-blue-500',
                    },
                    {
                      icon: 'M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z',
                      title: 'Certified',
                      value: 'ISO 9001:2015',
                      gradient: 'from-purple-400 to-pink-500',
                    },
                    {
                      icon: 'M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z',
                      title: 'Global',
                      value: '50+ countries',
                      gradient: 'from-orange-400 to-red-500',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d={item.icon}
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <h3 className="font-[family-name:var(--font-plus-jakarta-sans)] font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm font-[family-name:var(--font-plus-jakarta-sans)] text-paltech-blue-300">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-paltech-blue-500 to-paltech-blue-600 rounded-full opacity-20 blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-paltech-blue-500 to-paltech-blue-400 rounded-full opacity-15 blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
