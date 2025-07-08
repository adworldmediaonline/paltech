import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';

const legalPages = [
  { name: 'Privacy Policy', href: '/privacy-policy', current: false },
  { name: 'Terms of Service', href: '/terms-of-service', current: true },
  { name: 'Cookie Policy', href: '/cookie-policy', current: false },
  { name: 'Disclaimer', href: '/disclaimer', current: false },
];

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white py-16 lg:py-20">
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
                Terms of Service
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-3">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Terms of Service
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                Your use of and access to our service are subject to the
                following terms; if you do not agree to all of the following,
                you may not use or access the service in any manner.
              </p>
              <p className="text-sm text-gray-500 italic">
                Last updated: January 1, 2024
              </p>
            </div>

            {/* Content Sections */}
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Agreement to Terms
                </h2>
                <p className="text-gray-600 mb-4">
                  These Terms of Service ("Terms") constitute a legally binding
                  agreement between you and Paltech™ Cooling Towers & Equipments
                  Ltd. ("Company," "we," "our," or "us") concerning your use of
                  our website and services.
                </p>
                <p className="text-gray-600">
                  By accessing or using our website, you agree to be bound by
                  these Terms. If you do not agree to these Terms, please do not
                  use our website or services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Description of Services
                </h2>
                <p className="text-gray-600 mb-4">
                  Paltech™ is a leading manufacturer and supplier of cooling
                  towers, chilling plants, FRP structural profiles, and related
                  equipment. Our services include:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>
                    Design, manufacturing, and supply of cooling towers and
                    equipment
                  </li>
                  <li>Installation, commissioning, and maintenance services</li>
                  <li>Technical consultation and engineering support</li>
                  <li>Spare parts and replacement components</li>
                  <li>After-sales service and support</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Acceptable Use
                </h2>
                <p className="text-gray-600 mb-4">
                  You agree to use our website and services only for lawful
                  purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>
                    Use our website for any unlawful purpose or to solicit
                    unlawful activity
                  </li>
                  <li>
                    Attempt to gain unauthorized access to our systems or
                    networks
                  </li>
                  <li>
                    Transmit viruses, malware, or other harmful computer code
                  </li>
                  <li>Interfere with or disrupt our website or servers</li>
                  <li>
                    Collect or harvest personal information from other users
                  </li>
                  <li>
                    Use our website to spam or send unsolicited communications
                  </li>
                  <li>Infringe upon intellectual property rights of others</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Business Terms and Conditions
                </h2>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  4.1. Quotations and Orders
                </h3>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>
                    All quotations are valid for 30 days unless otherwise
                    specified
                  </li>
                  <li>
                    Orders are subject to our acceptance and may be declined at
                    our discretion
                  </li>
                  <li>
                    Specifications, delivery terms, and pricing are subject to
                    confirmation
                  </li>
                  <li>
                    Custom orders may require advance payment or letters of
                    credit
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  4.2. Payment Terms
                </h3>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>
                    Payment terms will be specified in individual contracts or
                    purchase orders
                  </li>
                  <li>
                    Late payments may incur interest charges as per prevailing
                    rates
                  </li>
                  <li>
                    We reserve the right to suspend deliveries for overdue
                    accounts
                  </li>
                  <li>
                    All prices are exclusive of taxes unless otherwise stated
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  4.3. Delivery and Installation
                </h3>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>
                    Delivery dates are estimates and may vary due to
                    manufacturing schedules
                  </li>
                  <li>
                    Installation services are provided subject to separate terms
                    and conditions
                  </li>
                  <li>
                    Site conditions must be suitable for equipment installation
                  </li>
                  <li>
                    Customer is responsible for providing necessary utilities
                    and access
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Intellectual Property Rights
                </h2>
                <p className="text-gray-600 mb-4">
                  All content on our website, including text, graphics, logos,
                  images, and software, is the property of Paltech™ or its
                  licensors and is protected by copyright and other intellectual
                  property laws.
                </p>
                <p className="text-gray-600">
                  You may not reproduce, distribute, modify, or create
                  derivative works from our content without our express written
                  permission.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Warranties and Disclaimers
                </h2>
                <p className="text-gray-600 mb-4">
                  Our products are warranted against defects in materials and
                  workmanship for the period specified in individual contracts.
                  This warranty does not cover:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Normal wear and tear or deterioration</li>
                  <li>Damage due to misuse, negligence, or accidents</li>
                  <li>Modifications or repairs by unauthorized personnel</li>
                  <li>
                    Damage caused by environmental factors beyond our control
                  </li>
                </ul>
                <p className="text-gray-600">
                  EXCEPT AS EXPRESSLY STATED HEREIN, WE MAKE NO WARRANTIES,
                  EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY OR
                  FITNESS FOR A PARTICULAR PURPOSE.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Limitation of Liability
                </h2>
                <p className="text-gray-600 mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, PALTECH™ SHALL NOT BE
                  LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                  OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF
                  PROFITS, DATA, OR USE.
                </p>
                <p className="text-gray-600">
                  Our total liability for any claim arising out of or relating
                  to these Terms shall not exceed the amount paid by you for the
                  specific product or service giving rise to the claim.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Indemnification
                </h2>
                <p className="text-gray-600 mb-4">
                  You agree to indemnify and hold harmless Paltech™ from any
                  claims, damages, losses, or expenses arising out of your use
                  of our website or services, or your violation of these Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Governing Law and Jurisdiction
                </h2>
                <p className="text-gray-600 mb-4">
                  These Terms shall be governed by and construed in accordance
                  with the laws of India. Any disputes arising out of or
                  relating to these Terms shall be subject to the exclusive
                  jurisdiction of the courts in Gurugram, Haryana, India.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  10. Termination
                </h2>
                <p className="text-gray-600 mb-4">
                  We may terminate or suspend your access to our website and
                  services at any time, without prior notice, for any reason,
                  including breach of these Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  11. Changes to Terms
                </h2>
                <p className="text-gray-600 mb-4">
                  We reserve the right to modify these Terms at any time.
                  Changes will be effective immediately upon posting on our
                  website. Your continued use of our services after such changes
                  constitutes acceptance of the new Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  12. Contact Information
                </h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms of Service, please
                  contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Paltech™ Cooling Towers & Equipments Ltd.</strong>
                  </p>
                  <p className="text-gray-600 mb-1">
                    Plot No. 774, Udyog Vihar Phase-V, Gurugram - 122016, India
                  </p>
                  <p className="text-gray-600 mb-1">Phone: +91.124.4499700</p>
                  <p className="text-gray-600">
                    Email:{' '}
                    <a
                      href="mailto:paltech@paltech.net.in"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      paltech@paltech.net.in
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>

          {/* Sidebar - Right Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 sm:top-22 lg:top-32">
              <nav className="space-y-2">
                {legalPages.map(page => (
                  <Link
                    key={page.name}
                    href={page.href}
                    className={`block px-4 py-2 text-sm font-medium transition-colors ${
                      page.current
                        ? 'bg-[#009ad5] text-white'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {page.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
