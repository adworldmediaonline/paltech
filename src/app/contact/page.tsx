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
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  telephone: z
    .string()
    .min(10, { message: 'Please enter a valid telephone number.' }),
  company: z
    .string()
    .min(2, { message: 'Company name must be at least 2 characters.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function ContactPage() {
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
  }

  return (
    <main className="relative min-h-screen bg-white flex flex-col">
      <section className="relative w-full bg-primary/90 py-16 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
          Contact Us
        </h1>
        <p className="max-w-xl mx-auto text-lg text-white/90 font-medium">
          We'd love to hear from you. Reach out for business enquiries, support,
          or just to say hello!
        </p>
      </section>
      <section className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1 flex items-start justify-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-steel-900">
                Get in Touch
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="text-base font-semibold text-gray-700 mb-1">
                    Address
                  </div>
                  <div className="text-gray-600 leading-relaxed">
                    Plot No. 774, IInd Floor, Udyog Vihar, Phase - V, Gurugram,
                    Haryana-122016
                  </div>
                </div>
                <div>
                  <div className="text-base font-semibold text-gray-700 mb-1">
                    Phone
                  </div>
                  <Link
                    href="tel:+911244499700"
                    className="text-primary font-medium hover:underline"
                  >
                    +91.124.4499700
                  </Link>
                </div>
                <div>
                  <div className="text-base font-semibold text-gray-700 mb-1">
                    Email
                  </div>
                  <div className="space-y-1">
                    <Link
                      href="mailto:paltech@paltech.net.in"
                      className="text-primary font-medium hover:underline block"
                    >
                      paltech@paltech.net.in
                    </Link>
                    <Link
                      href="mailto:bd@paltech.net.in"
                      className="text-primary font-medium hover:underline block"
                    >
                      bd@paltech.net.in
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8 space-x-4 flex">
              <Link
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-gray-100 hover:bg-primary/10 rounded-lg flex items-center justify-center transition-all hover:scale-110"
              >
                <svg
                  className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 bg-gray-100 hover:bg-primary/10 rounded-lg flex items-center justify-center transition-all hover:scale-110"
              >
                <svg
                  className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>
              <Link
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 bg-gray-100 hover:bg-primary/10 rounded-lg flex items-center justify-center transition-all hover:scale-110"
              >
                <svg
                  className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
            <h2 className="text-2xl font-bold text-steel-900 mb-6">
              Send us a Message
            </h2>
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
                      <FormLabel className="text-gray-700">Name *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Name"
                          {...field}
                          className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary"
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
                      <FormLabel className="text-gray-700">E-mail *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          {...field}
                          className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary"
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
                      <FormLabel className="text-gray-700">
                        Telephone *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+91 12345 67890"
                          {...field}
                          className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary"
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
                      <FormLabel className="text-gray-700">Company *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Company Name"
                          {...field}
                          className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary"
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
                      <FormLabel className="text-gray-700">Message *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message here..."
                          className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-primary text-white hover:bg-primary/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </main>
  );
}
