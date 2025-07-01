import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const productUSPs = [
  'Quality Products & Most Reliable Services',
  'More than 3 decades of excellence',
  'Over 11,000 clients served',
  'Export to 25+ countries',
  'More than 13,000 installations worldwide',
  'Associate Member of Cooling Technology Institute (CTI) USA for over three decades',
  'ISO 9001:2015 Quality Management System certified',
  'ISO 14001:2015 Environmental Management System certified',
  'ISO 45001:2018 Occupational Health and Safety Management Systems certified',
];

const productBenefits = [
  {
    title: 'High Quality Components',
    description:
      'We are renowned for using only high-quality components in our products. This ensures that you receive the best of the best for every product manufactured or supplied by Paltech.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    gradient: 'from-primary to-primary/80',
  },
  {
    title: 'Low Noise',
    description:
      'Paltech is committed to promoting a green environment and clean energy. Therefore, all our products are designed to produce the lowest noise levels in accordance with industry standards.',
    icon: 'M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5 7h4l1 1h3a1 1 0 011 1v4a1 1 0 01-1 1H9l-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1z',
    gradient: 'from-primary/80 to-primary',
  },
  {
    title: 'Low Power Consumption',
    description:
      'In line with our commitment to clean and green energy, our products are designed to have low power consumption. This not only benefits the environment but also proves advantageous for your business, ensuring both efficiency and eco-friendliness.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    gradient: 'from-primary to-primary/90',
  },
  {
    title: 'Economical in Production Cost',
    description:
      'Our products contribute to reducing your production costs due to their low maintenance requirements and energy-efficient operation. They operate on lower power consumption, providing you with economic benefits while maintaining high-quality performance.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1',
    gradient: 'from-primary/90 to-primary/70',
  },
  {
    title: 'Precision in Process Control',
    description:
      'Precision is considered the paramount aspect of measurement for process control. Our entire manufacturing process is meticulously controlled to ensure the highest level of precision, resulting in the production of top-quality products.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    gradient: 'from-primary/70 to-primary',
  },
  {
    title: 'Smarter, Simpler, Safer and more Reliable Products',
    description:
      'We continuously adapt to the evolving demands of the industry. Our approach is dedicated to creating products that are smarter, simpler, safer, and more reliable. Through innovative design and constant improvement, we aim to provide products that offer enhanced intelligence, ease of use, safety, and reliability to our customers.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    gradient: 'from-primary/60 to-primary/80',
  },
];

export default function Services() {
  return (
    <section
      id="solutions"
      className="py-16 lg:py-24 bg-gradient-to-b from-steel-50 to-white dark:from-steel-900 dark:to-steel-950 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b03_1px,transparent_1px),linear-gradient(to_bottom,#1e293b03_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>
      </div>

      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary border border-primary/20 dark:border-primary/30"
          >
            Product Excellence
          </Badge>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-steel-900 via-primary to-primary/80 dark:from-white dark:via-primary/80 dark:to-primary bg-clip-text text-transparent">
              Product's U.S.P.
            </span>
          </h2>
        </div>

        {/* USP Section */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 mb-20">
          {/* Left Column - USP List */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-white to-steel-50 dark:from-steel-800 dark:to-steel-900 rounded-2xl p-8 shadow-xl border border-steel-200 dark:border-steel-700 sticky top-8">
              <h3 className="text-2xl font-bold text-steel-900 dark:text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-lg mr-3 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                Our Excellence
              </h3>

              <div className="space-y-4">
                {productUSPs.map((usp, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="flex-shrink-0 w-5 h-5 mt-1 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                    <span className="text-sm font-medium text-steel-700 dark:text-steel-300 group-hover:text-primary dark:group-hover:text-primary/80 transition-colors duration-300">
                      {usp}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Benefits Grid */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {productBenefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="group relative border-0 bg-white/80 dark:bg-steel-900/80 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
                >
                  {/* Card Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  {/* Floating decoration */}
                  <div
                    className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${benefit.gradient} opacity-10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700`}
                  ></div>

                  <CardHeader className="relative z-10 pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div
                        className={`relative w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                      >
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={benefit.icon}
                          />
                        </svg>
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-md`}
                        ></div>
                      </div>
                    </div>

                    <CardTitle className="text-lg font-bold text-steel-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary/80 transition-colors duration-300 leading-tight">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <p className="text-sm text-steel-600 dark:text-steel-300 leading-relaxed">
                      {benefit.description}
                    </p>

                    {/* Hover indicator */}
                    <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center text-sm font-medium text-paltech-blue-600 dark:text-paltech-blue-400">
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
          </div>
        </div>

        {/* Bottom Commitment Section */}
        <div className="bg-gradient-to-r from-paltech-blue-900 to-steel-900 dark:from-paltech-blue-950 dark:to-steel-950 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-paltech-blue-400/20 to-paltech-blue-500/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-4 left-4 w-40 h-40 bg-gradient-to-br from-paltech-blue-500/20 to-paltech-blue-600/20 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-paltech-blue-400 to-paltech-blue-500 bg-clip-text text-transparent">
                Paltech™
              </span>{' '}
              Our Commitment
            </h3>

            <p className="text-steel-300 leading-relaxed text-lg">
              <span className="font-semibold text-primary">Paltech™</span>{' '}
              remains steadfast in its commitment to its core objectives:
              providing quality products and services to its clients. We are
              deeply dedicated to turnkey services that encompass the entire
              process from conceptualization to commissioning, followed by
              ongoing support and maintenance services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-paltech-blue-500 to-paltech-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-paltech-blue-500/25 hover:shadow-xl hover:shadow-paltech-blue-500/40 hover:scale-105 transition-all duration-300">
                Get Quote
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </button>

              <button className="group inline-flex items-center px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm hover:bg-white/20 hover:border-white/30 transition-all duration-300">
                View Projects
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
