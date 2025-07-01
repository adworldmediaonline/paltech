'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  telephone: z.string().min(10, {
    message: 'Please enter a valid telephone number.',
  }),
  company: z.string().min(2, {
    message: 'Company name must be at least 2 characters.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

const uspItems = [
  'Quality Products & Most Reliable Services',
  'More than 34 years of mfg. Excellence',
  'More than 9000 clients',
  'Export to 25+ countries',
  'More than 11000 Installations Worldwide',
  'Associate Member of Cooling Technology Institute (CTI) USA, Since more than Last Two Decades',
  'ISO 9001: 2015 Quality Management System, ISO 14001:2015 Environmental Management System and OHSAS 45001:2018 Occupational Health and Safety Management Systems Certified Company',
];

export default function Footer() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      telephone: '',
      company: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission here
  }

  return (
    <footer className="relative bg-white border-t border-gray-200 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,154,213,0.05),rgba(0,154,213,0))]"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,154,213,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,154,213,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="relative py-16 lg:py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Visit Us Section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold text-gray-900 mb-6">
                  Visit Us
                </h3>

                <div className="space-y-6">
                  {/* Location */}
                  <div>
                    <h4 className="text-lg font-[family-name:var(--font-plus-jakarta-sans)] font-semibold text-gray-800 mb-3">
                      Location:
                    </h4>
                    <p className="text-gray-600 leading-relaxed font-[family-name:var(--font-plus-jakarta-sans)]">
                      Plot No. 774, IInd Floor, Udyog Vihar, Phase - V,
                      Gurugram, Haryana-122016
                    </p>
                  </div>

                  {/* Phone */}
                  <div>
                    <h4 className="text-lg font-[family-name:var(--font-plus-jakarta-sans)] font-semibold text-gray-800 mb-3">
                      Phone No.(s):
                    </h4>
                    <Link
                      href="tel:+911244499700"
                      className="text-gray-600 hover:text-primary transition-colors duration-300 font-[family-name:var(--font-plus-jakarta-sans)]"
                    >
                      +91.124.4499700
                    </Link>
                  </div>

                  {/* Email */}
                  <div>
                    <h4 className="text-lg font-[family-name:var(--font-plus-jakarta-sans)] font-semibold text-gray-800 mb-3">
                      E-mail:
                    </h4>
                    <div className="space-y-2">
                      <Link
                        href="mailto:paltech@paltech.net.in"
                        className="block text-gray-600 hover:text-primary transition-colors duration-300 font-[family-name:var(--font-plus-jakarta-sans)]"
                      >
                        paltech@paltech.net.in
                      </Link>
                      <Link
                        href="mailto:bd@paltech.net.in"
                        className="block text-gray-600 hover:text-primary transition-colors duration-300 font-[family-name:var(--font-plus-jakarta-sans)]"
                      >
                        bd@paltech.net.in
                      </Link>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="flex space-x-4 pt-4">
                    {[
                      {
                        icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
                        label: 'Facebook',
                        href: '#',
                      },
                      {
                        icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
                        label: 'Twitter',
                        href: '#',
                      },
                      {
                        icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
                        label: 'YouTube',
                        href: '#',
                      },
                    ].map((social, index) => (
                      <Link
                        key={index}
                        href={social.href}
                        className="w-10 h-10 bg-gray-100 hover:bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                        aria-label={social.label}
                      >
                        <svg
                          className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors duration-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d={social.icon} />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Our USP Section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold text-gray-900 mb-6">
                  Our USP
                </h3>

                <div className="space-y-4">
                  {uspItems.map((usp, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 group"
                    >
                      <div className="flex-shrink-0 w-2 h-2 mt-2 bg-gray-400 group-hover:bg-primary rounded-full transition-colors duration-300"></div>
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 font-[family-name:var(--font-plus-jakarta-sans)] text-sm leading-relaxed">
                        {usp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Business Enquiry Section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold text-gray-900 mb-6">
                  Business Enquiry
                </h3>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-[family-name:var(--font-plus-jakarta-sans)]">
                            Name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your Name"
                              {...field}
                              className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary font-[family-name:var(--font-plus-jakarta-sans)]"
                            />
                          </FormControl>
                          <FormMessage className="text-red-600" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-[family-name:var(--font-plus-jakarta-sans)]">
                            E-mail *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
                              {...field}
                              className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary font-[family-name:var(--font-plus-jakarta-sans)]"
                            />
                          </FormControl>
                          <FormMessage className="text-red-600" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="telephone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-[family-name:var(--font-plus-jakarta-sans)]">
                            Telephone *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+91 12345 67890"
                              {...field}
                              className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary font-[family-name:var(--font-plus-jakarta-sans)]"
                            />
                          </FormControl>
                          <FormMessage className="text-red-600" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-[family-name:var(--font-plus-jakarta-sans)]">
                            Company *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your Company Name"
                              {...field}
                              className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary font-[family-name:var(--font-plus-jakarta-sans)]"
                            />
                          </FormControl>
                          <FormMessage className="text-red-600" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-[family-name:var(--font-plus-jakarta-sans)]">
                            Message *
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message here..."
                              className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary font-[family-name:var(--font-plus-jakarta-sans)] min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-600" />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-primary text-white hover:bg-primary/90 font-[family-name:var(--font-plus-jakarta-sans)] font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Submit
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-500 text-sm font-[family-name:var(--font-plus-jakarta-sans)] text-center md:text-left">
                © 2024 Paltech™ Cooling Towers & Equipments Ltd. | Website
                Concept by: GetonTheWeb.in
              </p>

              <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm font-[family-name:var(--font-plus-jakarta-sans)]">
                <Link
                  href="/awards-recognition"
                  className="text-gray-500 hover:text-primary transition-colors duration-300"
                >
                  Awards & Recognition
                </Link>
                <Link
                  href="/policies-certification"
                  className="text-gray-500 hover:text-primary transition-colors duration-300"
                >
                  Policies & Certification
                </Link>
                <Link
                  href="/request-quote"
                  className="text-gray-500 hover:text-primary transition-colors duration-300"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/download-brochures"
                  className="text-gray-500 hover:text-primary transition-colors duration-300"
                >
                  Download Product Brochures
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
