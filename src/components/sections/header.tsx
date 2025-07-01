import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import navigationData from '@/data/navigation.json';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-steel-900/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-steel-900/60 border-b border-paltech-blue-100/20 dark:border-steel-700/50 shadow-lg shadow-paltech-blue-500/5">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-paltech-blue-500 to-paltech-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-paltech-blue-500/25 group-hover:shadow-xl group-hover:shadow-paltech-blue-500/40 transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-[family-name:var(--font-plus-jakarta-sans)] font-bold text-xl">
                    P
                  </span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-paltech-blue-500 to-paltech-blue-600 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
              </div>
              <div>
                <h1 className="text-2xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold bg-gradient-to-r from-steel-900 to-paltech-blue-700 dark:from-white dark:to-paltech-blue-300 bg-clip-text text-transparent">
                  {navigationData.header.logo.text}
                </h1>
                <p className="text-sm font-[family-name:var(--font-plus-jakarta-sans)] text-steel-600 dark:text-steel-400 -mt-1">
                  {navigationData.header.logo.tagline}
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationData.header.navigation.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-[family-name:var(--font-plus-jakarta-sans)] font-medium rounded-lg transition-all duration-300 group ${
                  item.active
                    ? 'text-paltech-blue-700 dark:text-paltech-blue-300 bg-paltech-blue-50 dark:bg-paltech-blue-900/20'
                    : 'text-steel-700 dark:text-steel-300 hover:text-paltech-blue-700 dark:hover:text-paltech-blue-300 hover:bg-paltech-blue-50/50 dark:hover:bg-paltech-blue-900/10'
                }`}
              >
                {item.label}
                {item.active && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-paltech-blue-600 to-paltech-blue-500 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link
              href={navigationData.header.cta.href}
              className="hidden sm:inline-flex items-center px-6 py-3 text-sm font-[family-name:var(--font-plus-jakarta-sans)] font-semibold text-white bg-gradient-to-r from-paltech-blue-600 to-paltech-blue-500 rounded-lg shadow-lg shadow-paltech-blue-500/25 hover:shadow-xl hover:shadow-paltech-blue-500/40 hover:scale-105 transition-all duration-300 group"
            >
              {navigationData.header.cta.text}
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300"
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

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="lg:hidden border-paltech-blue-200 dark:border-steel-700 hover:bg-paltech-blue-50 dark:hover:bg-steel-800"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-white/95 dark:bg-steel-900/95 backdrop-blur-md"
              >
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center space-x-3 pb-6 border-b border-paltech-blue-100 dark:border-steel-700">
                    <div className="w-10 h-10 bg-gradient-to-br from-paltech-blue-600 to-paltech-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-[family-name:var(--font-plus-jakarta-sans)] font-bold text-lg">
                        P
                      </span>
                    </div>
                    <div>
                      <h2 className="font-[family-name:var(--font-plus-jakarta-sans)] font-bold text-steel-900 dark:text-white">
                        {navigationData.header.logo.text}
                      </h2>
                      <p className="text-sm text-steel-600 dark:text-steel-400">
                        {navigationData.header.logo.tagline}
                      </p>
                    </div>
                  </div>

                  <nav className="flex flex-col space-y-2">
                    {navigationData.header.navigation.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className={`flex items-center px-4 py-3 text-sm font-[family-name:var(--font-plus-jakarta-sans)] font-medium rounded-lg transition-all duration-300 ${
                          item.active
                            ? 'text-paltech-blue-700 dark:text-paltech-blue-300 bg-paltech-blue-50 dark:bg-paltech-blue-900/20 border-l-4 border-paltech-blue-600'
                            : 'text-steel-700 dark:text-steel-300 hover:text-paltech-blue-700 dark:hover:text-paltech-blue-300 hover:bg-paltech-blue-50 dark:hover:bg-paltech-blue-900/10'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="pt-6 border-t border-paltech-blue-100 dark:border-steel-700">
                    <Link
                      href={navigationData.header.cta.href}
                      className="flex items-center justify-center px-6 py-3 text-sm font-[family-name:var(--font-plus-jakarta-sans)] font-semibold text-white bg-gradient-to-r from-paltech-blue-600 to-paltech-blue-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {navigationData.header.cta.text}
                      <svg
                        className="ml-2 w-4 h-4"
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
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
