'use client';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import navigationData from '@/data/navigation.json';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<
    string | null
  >(null);

  const toggleMobileDropdown = (label: string) => {
    setMobileActiveDropdown(mobileActiveDropdown === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-steel-900/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-steel-900/60 border-b border-paltech-blue-100/20 dark:border-steel-700/50 shadow-lg shadow-paltech-blue-500/5">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22 lg:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-14 sm:h-16 lg:h-20 aspect-square group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/logo/logo.webp"
                alt="Paltech Cooling Towers & Equipments Ltd. - ISO 9001:2015, ISO 14001:2015, OHSAS 45001:2018 certified Company"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navigationData.header.navigation.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.hasDropdown ? (
                    <>
                      <NavigationMenuTrigger
                        className={`text-sm font-[family-name:var(--font-plus-jakarta-sans)] font-medium transition-all duration-300 bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent ${
                          item.active
                            ? 'text-paltech-blue-700 dark:text-paltech-blue-300'
                            : 'text-steel-700 dark:text-steel-300 hover:text-paltech-blue-700 dark:hover:text-paltech-blue-300'
                        }`}
                      >
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[600px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.dropdown?.map((dropdownItem, dropdownIndex) => (
                            <div key={dropdownIndex}>
                              {dropdownItem.hasSubmenu ? (
                                <div className="space-y-2">
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={dropdownItem.href}
                                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                      <div className="text-sm font-medium leading-none text-paltech-blue-700 dark:text-paltech-blue-300">
                                        {dropdownItem.label}
                                      </div>
                                      {(dropdownItem as any).subtitle && (
                                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                          {(dropdownItem as any).subtitle}
                                        </p>
                                      )}
                                    </Link>
                                  </NavigationMenuLink>
                                  <div className="ml-4 space-y-1">
                                    {dropdownItem.submenu?.map(
                                      (submenuItem, submenuIndex) => (
                                        <NavigationMenuLink
                                          asChild
                                          key={submenuIndex}
                                        >
                                          <Link
                                            href={submenuItem.href}
                                            className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                          >
                                            <div className="text-xs font-medium leading-none">
                                              {submenuItem.label}
                                            </div>
                                          </Link>
                                        </NavigationMenuLink>
                                      )
                                    )}
                                  </div>
                                </div>
                              ) : (
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={dropdownItem.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">
                                      {dropdownItem.label}
                                    </div>
                                    {(dropdownItem as any).subtitle && (
                                      <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                        {(dropdownItem as any).subtitle}
                                      </p>
                                    )}
                                  </Link>
                                </NavigationMenuLink>
                              )}
                            </div>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`relative group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-[family-name:var(--font-plus-jakarta-sans)] font-medium transition-colors ${
                        item.active
                          ? 'text-paltech-blue-700 dark:text-paltech-blue-300'
                          : 'text-steel-700 dark:text-steel-300 hover:text-paltech-blue-700 dark:hover:text-paltech-blue-300'
                      }`}
                    >
                      {item.label}
                      {item.active && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-paltech-blue-600 to-paltech-blue-500 rounded-full"></div>
                      )}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link
              href={navigationData.header.cta.href}
              className="hidden sm:inline-flex items-center px-6 py-3 text-sm font-[family-name:var(--font-plus-jakarta-sans)] font-semibold text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300 group"
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
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden border-transparent hover:border-transparent hover:bg-transparent focus:bg-transparent text-steel-700 dark:text-steel-300 hover:text-paltech-blue-700 dark:hover:text-paltech-blue-300"
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
                className="w-[300px] sm:w-[400px] bg-white/95 dark:bg-steel-900/95 backdrop-blur-md overflow-y-auto"
              >
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center pb-6 border-b border-paltech-blue-100 dark:border-steel-700">
                    <div className="relative h-16 aspect-square">
                      <Image
                        src="/images/logo/logo.webp"
                        alt="Paltech Cooling Towers & Equipments Ltd."
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                  </div>

                  <nav className="flex flex-col space-y-2">
                    {navigationData.header.navigation.map((item, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            className={`flex-1 flex items-center px-4 py-3 text-sm font-[family-name:var(--font-plus-jakarta-sans)] font-medium transition-all duration-300 ${
                              item.active
                                ? 'text-paltech-blue-700 dark:text-paltech-blue-300 border-l-4 border-paltech-blue-600'
                                : 'text-steel-700 dark:text-steel-300 hover:text-paltech-blue-700 dark:hover:text-paltech-blue-300'
                            }`}
                          >
                            {item.label}
                          </Link>
                          {item.hasDropdown && (
                            <button
                              onClick={() => toggleMobileDropdown(item.label)}
                              className="p-2 text-steel-500 hover:text-paltech-blue-600 transition-colors duration-200"
                            >
                              <svg
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  mobileActiveDropdown === item.label
                                    ? 'rotate-180'
                                    : ''
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>
                          )}
                        </div>

                        {/* Mobile Dropdown */}
                        {item.hasDropdown &&
                          mobileActiveDropdown === item.label && (
                            <div className="ml-4 mt-2 space-y-1">
                              {item.dropdown?.map(
                                (dropdownItem, dropdownIndex) => (
                                  <div key={dropdownIndex}>
                                    <Link
                                      href={dropdownItem.href}
                                      className="block px-4 py-2 text-sm font-[family-name:var(--font-plus-jakarta-sans)] text-steel-600 dark:text-steel-400 hover:text-paltech-blue-600 dark:hover:text-paltech-blue-400 transition-colors duration-200"
                                    >
                                      {dropdownItem.label}
                                      {(dropdownItem as any).subtitle && (
                                        <div className="text-xs text-steel-500 dark:text-steel-500 mt-0.5">
                                          {(dropdownItem as any).subtitle}
                                        </div>
                                      )}
                                    </Link>
                                    {/* Mobile Submenu */}
                                    {dropdownItem.submenu && (
                                      <div className="ml-4 mt-1 space-y-1">
                                        {dropdownItem.submenu.map(
                                          (submenuItem, submenuIndex) => (
                                            <Link
                                              key={submenuIndex}
                                              href={submenuItem.href}
                                              className="block px-3 py-1.5 text-xs font-[family-name:var(--font-plus-jakarta-sans)] text-steel-500 dark:text-steel-500 hover:text-paltech-blue-500 dark:hover:text-paltech-blue-500 transition-colors duration-200"
                                            >
                                              {submenuItem.label}
                                            </Link>
                                          )
                                        )}
                                      </div>
                                    )}
                                  </div>
                                )
                              )}
                            </div>
                          )}
                      </div>
                    ))}
                  </nav>

                  <div className="pt-6 border-t border-paltech-blue-100 dark:border-steel-700">
                    <Link
                      href={navigationData.header.cta.href}
                      className="flex items-center justify-center px-6 py-3 text-sm font-[family-name:var(--font-plus-jakarta-sans)] font-semibold text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
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
