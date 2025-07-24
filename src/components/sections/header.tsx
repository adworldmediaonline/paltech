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

interface DropdownItem {
  label: string;
  href: string;
  subtitle?: string;
  hasSubmenu?: boolean;
  submenu?: { label: string; href: string }[];
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<
    string | null
  >(null);

  const toggleMobileDropdown = (label: string) => {
    setMobileActiveDropdown(mobileActiveDropdown === label ? null : label);
  };

  return (
    <header className="z-50 relative w-full">
      {/* Enhanced Color Flow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary/60 lg:to-primary/70"></div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-8 sm:h-10 lg:h-12 aspect-square group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/logo/logo.webp"
                alt="Paltech Cooling Towers & Equipments Ltd. - ISO 9001:2015, ISO 14001:2015, OHSAS 45001:2018 certified Company"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="ml-2 sm:ml-3 text-lg sm:text-xl lg:text-2xl font-bold text-steel-900">
              Paltech.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-6 xl:space-x-8">
              {navigationData.header.navigation.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.hasDropdown ? (
                    <>
                      <NavigationMenuTrigger
                        className={`text-sm font-medium transition-all duration-300 bg-transparent hover:bg-primary focus:bg-primary data-[state=open]:bg-primary text-steel-900 hover:text-white focus:text-white data-[state=open]:text-white`}
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
                                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-steel-900 hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
                                    >
                                      <div className="text-sm font-medium leading-none text-primary">
                                        {dropdownItem.label}
                                      </div>
                                      {(dropdownItem as DropdownItem)
                                        .subtitle && (
                                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                          {
                                            (dropdownItem as DropdownItem)
                                              .subtitle
                                          }
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
                                            className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors text-steel-900 hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
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
                                    className="block select-none rounded-md p-3 text-sm font-medium text-steel-900 hover:bg-primary hover:text-white focus:bg-primary focus:text-white transition-colors"
                                  >
                                    {dropdownItem.label}
                                    {(dropdownItem as DropdownItem)
                                      .subtitle && (
                                      <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                        {
                                          (dropdownItem as DropdownItem)
                                            .subtitle
                                        }
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
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={`text-sm font-medium transition-all duration-300 bg-transparent text-steel-900 hover:bg-primary hover:text-white focus:bg-primary focus:text-white px-3 xl:px-4 py-2 rounded-lg`}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link
              href={navigationData.header.cta.href}
              className="hidden sm:inline-flex items-center px-4 sm:px-6 py-2 sm:py-2.5 text-sm font-semibold text-white bg-steel-900 hover:bg-steel-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              {navigationData.header.cta.text}
            </Link>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden border-transparent hover:border-transparent hover:bg-transparent focus:bg-transparent text-steel-700 hover:text-primary p-2"
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
                className="w-[280px] sm:w-[320px] bg-white/95 backdrop-blur-md overflow-y-auto"
              >
                <div className="flex flex-col space-y-4 mt-6 sm:mt-8">
                  <div className="flex items-center pb-4 sm:pb-6 border-b border-gray-200">
                    <div className="relative h-10 sm:h-12 aspect-square">
                      <Image
                        src="/images/logo/logo.webp"
                        alt="Paltech Cooling Towers & Equipments Ltd."
                        fill
                        className="object-contain"
                        sizes="48px"
                      />
                    </div>
                    <span className="ml-3 text-lg sm:text-xl font-bold text-steel-900">
                      Paltech.
                    </span>
                  </div>

                  <nav className="flex flex-col space-y-1 sm:space-y-2">
                    {navigationData.header.navigation.map((item, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            className={`flex-1 flex items-center px-3 sm:px-4 py-2.5 sm:py-3 text-sm font-medium transition-all duration-300 ${
                              item.active
                                ? 'text-primary border-l-4 border-primary'
                                : 'text-steel-700 hover:text-primary'
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                          {item.hasDropdown && (
                            <button
                              onClick={() => toggleMobileDropdown(item.label)}
                              className="p-2 text-steel-500 hover:text-primary transition-colors duration-200"
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
                            <div className="ml-4 mt-1 sm:mt-2 space-y-1">
                              {item.dropdown?.map(
                                (dropdownItem, dropdownIndex) => (
                                  <div key={dropdownIndex}>
                                    <Link
                                      href={dropdownItem.href}
                                      className="block px-3 sm:px-4 py-2 text-sm font-medium text-steel-600 hover:text-primary transition-colors duration-200"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {dropdownItem.label}
                                      {(dropdownItem as DropdownItem)
                                        .subtitle && (
                                        <div className="text-xs text-steel-500 mt-0.5">
                                          {
                                            (dropdownItem as DropdownItem)
                                              .subtitle
                                          }
                                        </div>
                                      )}
                                    </Link>
                                    {/* Mobile Submenu */}
                                    {dropdownItem.submenu && (
                                      <div className="ml-3 sm:ml-4 mt-1 space-y-1">
                                        {dropdownItem.submenu.map(
                                          (submenuItem, submenuIndex) => (
                                            <Link
                                              key={submenuIndex}
                                              href={submenuItem.href}
                                              className="block px-2 sm:px-3 py-1.5 text-xs font-medium text-steel-500 hover:text-primary transition-colors duration-200"
                                              onClick={() =>
                                                setMobileMenuOpen(false)
                                              }
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

                  <div className="pt-4 sm:pt-6 border-t border-gray-200">
                    <Link
                      href={navigationData.header.cta.href}
                      className="flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-white bg-steel-900 hover:bg-steel-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {navigationData.header.cta.text}
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
