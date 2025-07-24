'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const mainServices = [
  {
    title: 'Air Conditioning Services',
    description:
      'From installation to repairs air conditioning services are designed to keep you cool.',
    image: '/images/products/prd-1.jpg',
    link: '#',
  },
  {
    title: 'Heating System Services',
    description:
      'Stay cozy in the winter months with our comprehensive heating system services.',
    image: '/images/products/prd-2.jpg',
    link: '#',
  },
  {
    title: 'Indoor Air Quality Solutions',
    description:
      'Indoor air quality is essential to your health and comfort we offer solutions to improve.',
    image: '/images/products/prd-3.png',
    link: '#',
  },
];

export default function Services() {
  return (
    <section className="py-10 lg:py-14 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text + Button */}
          <div className="flex flex-col gap-3">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wide w-fit mb-1">
              Our Services
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-1">
              Expert Heating & Cooling Services You Can Trust
            </h2>
            <p className="text-base text-gray-600 max-w-xl mb-2">
              No matter the season, we’re here to ensure your HVAC system runs
              at peak performance. Experience quality, reliability, exceptional
              service.
            </p>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white font-semibold text-base px-5 py-2 rounded-lg w-fit mb-2"
            >
              Call Us: (234) 345-4574
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          {/* Right: Main Image */}
          <div className="relative w-full h-40 sm:h-48 lg:h-56 rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/products/prd-1.jpg"
              alt="HVAC Technician"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {mainServices.map(service => (
            <div
              key={service.title}
              className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow border border-gray-100 min-h-[90px]"
            >
              <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-900 mb-0.5">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-xs mb-1 line-clamp-2">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="inline-flex items-center gap-1 text-primary font-semibold text-xs hover:underline"
                >
                  Read More <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
