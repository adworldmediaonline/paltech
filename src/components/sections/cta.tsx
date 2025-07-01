import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Advanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-paltech-blue-900 via-paltech-blue-800 to-steel-900"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-paltech-blue-600/20 via-paltech-blue-500/10 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-paltech-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-24 h-24 bg-paltech-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-2/3 w-16 h-16 bg-paltech-blue-400/30 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          {/* Main Content */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-paltech-blue-100 to-paltech-blue-400 bg-clip-text text-transparent">
                Ready to Transform Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-paltech-blue-300 via-paltech-blue-200 to-white bg-clip-text text-transparent">
                Cooling System?
              </span>
            </h2>

            <p className="text-xl sm:text-2xl text-paltech-blue-200/90 max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-plus-jakarta-sans)]">
              Get expert consultation and custom solutions for your industrial
              cooling needs. Our team is ready to help you improve efficiency
              and reduce costs.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-paltech-blue-500 to-paltech-blue-600 hover:from-paltech-blue-600 hover:to-paltech-blue-700 text-white shadow-2xl shadow-paltech-blue-500/25 hover:shadow-paltech-blue-500/40 transform hover:scale-105 transition-all duration-300 font-[family-name:var(--font-plus-jakarta-sans)] text-lg px-8 py-6"
            >
              Get Free Consultation
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

            <Button
              size="lg"
              variant="outline"
              className="group bg-white/10 border-paltech-blue-300/30 text-white hover:bg-white/20 hover:border-paltech-blue-300/50 backdrop-blur-sm transition-all duration-300 font-[family-name:var(--font-plus-jakarta-sans)] text-lg px-8 py-6"
            >
              <svg
                className="mr-2 w-5 h-5"
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
              Call: +91-7926-306-244
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            {[
              {
                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                title: '24/7 Support',
                description: 'Round-the-clock assistance for all your needs',
              },
              {
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                title: 'Quality Guaranteed',
                description: '100% satisfaction with our premium solutions',
              },
              {
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                title: 'Fast Implementation',
                description: 'Quick deployment with minimal downtime',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group flex flex-col items-center space-y-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-paltech-blue-400 to-paltech-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7 text-white"
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

                <h3 className="text-lg font-[family-name:var(--font-plus-jakarta-sans)] font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-sm text-paltech-blue-200 text-center font-[family-name:var(--font-plus-jakarta-sans)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="pt-16 border-t border-paltech-blue-300/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '500+', label: 'Projects Completed' },
                { value: '25+', label: 'Years Experience' },
                { value: '99.8%', label: 'Client Satisfaction' },
                { value: '50+', label: 'Countries Served' },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl sm:text-4xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold bg-gradient-to-r from-paltech-blue-300 to-white bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-paltech-blue-300 mt-1 font-[family-name:var(--font-plus-jakarta-sans)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-12 text-white dark:text-steel-900"
          fill="currentColor"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
