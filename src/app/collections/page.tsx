import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

const categories = [
  {
    id: 'cooling-towers',
    title: 'Cooling Towers',
    description:
      'Industrial cooling towers for efficient heat rejection and water cooling solutions',
    icon: '🏭',
    href: '/collections/cooling-towers',
    gradient: 'from-blue-500 to-cyan-500',
    featured: true,
  },
  {
    id: 'hvac-systems',
    title: 'HVAC Systems',
    description:
      'Complete heating, ventilation, and air conditioning systems for industrial facilities',
    icon: '❄️',
    href: '/collections/hvac-systems',
    gradient: 'from-indigo-500 to-blue-500',
    featured: false,
  },
  {
    id: 'heat-exchangers',
    title: 'Heat Exchangers',
    description:
      'Efficient heat transfer equipment for optimal thermal management',
    icon: '🔥',
    href: '/collections/heat-exchangers',
    gradient: 'from-orange-500 to-red-500',
    featured: false,
  },
  {
    id: 'pumps-motors',
    title: 'Pumps & Motors',
    description:
      'High-performance pumps and motors for water circulation and system operation',
    icon: '⚙️',
    href: '/collections/pumps-motors',
    gradient: 'from-green-500 to-emerald-500',
    featured: false,
  },
  {
    id: 'water-treatment',
    title: 'Water Treatment',
    description:
      'Advanced water treatment solutions for system efficiency and longevity',
    icon: '💧',
    href: '/collections/water-treatment',
    gradient: 'from-cyan-500 to-blue-500',
    featured: false,
  },
  {
    id: 'maintenance-service',
    title: 'Maintenance & Service',
    description:
      'Comprehensive maintenance and service solutions for optimal system performance',
    icon: '🔧',
    href: '/collections/maintenance-service',
    gradient: 'from-purple-500 to-pink-500',
    featured: false,
  },
];

export default function Collections() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-16 lg:py-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8">
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
                Collections
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
            Choose <span className="text-primary">A Category</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of industrial cooling solutions and
            equipment categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map(category => (
            <Link
              key={category.id}
              href={category.href}
              className="group block transition-all duration-300 hover:scale-105"
            >
              <Card
                className={`h-full transition-all duration-300 hover:shadow-xl border-2 hover:border-primary/20 ${
                  category.featured
                    ? 'bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30'
                    : 'bg-white hover:bg-gradient-to-br hover:from-gray-50 hover:to-white border-gray-200'
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white text-2xl shadow-lg`}
                    >
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                        {category.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {category.description}
                  </CardDescription>
                  <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:text-primary/80 transition-colors">
                    Explore Category
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
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-primary rounded-2xl p-8 text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Need Custom Solutions?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Our expert team can design and manufacture custom cooling
              solutions tailored to your specific requirements
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 text-lg font-semibold text-primary bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get Custom Quote
              <svg
                className="ml-2 w-5 h-5"
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
