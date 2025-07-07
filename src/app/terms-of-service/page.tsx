import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 lg:py-20">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Terms of Service</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12 mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Effective Date: January 1, 2024
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Agreement to Terms
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
                Description of Services
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
                Acceptable Use
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
                  Attempt to gain unauthorized access to our systems or networks
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
                Business Terms and Conditions
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Quotations and Orders
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
                  Custom orders may require advance payment or letters of credit
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Payment Terms
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
                Delivery and Installation
              </h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>
                  Delivery dates are estimates and may vary due to manufacturing
                  schedules
                </li>
                <li>
                  Installation services are provided subject to separate terms
                  and conditions
                </li>
                <li>
                  Site conditions must be suitable for equipment installation
                </li>
                <li>
                  Customer is responsible for providing necessary utilities and
                  access
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Intellectual Property Rights
              </h2>
              <p className="text-gray-600 mb-4">
                All content on our website, including text, graphics, logos,
                images, and software, is the property of Paltech™ or its
                licensors and is protected by copyright and other intellectual
                property laws.
              </p>
              <p className="text-gray-600">
                You may not reproduce, distribute, modify, or create derivative
                works from our content without our express written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Warranties and Disclaimers
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Product Warranties
              </h3>
              <p className="text-gray-600 mb-4">
                Our products are covered by specific warranty terms as outlined
                in our product documentation and sales contracts. Warranty
                coverage typically includes:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Defects in materials and workmanship</li>
                <li>Performance guarantees as specified</li>
                <li>
                  Exclusions for normal wear, misuse, or improper maintenance
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Website Disclaimer
              </h3>
              <p className="text-gray-600 mb-4">
                Our website and its content are provided "as is" without
                warranties of any kind. We disclaim all warranties, express or
                implied, including merchantability, fitness for a particular
                purpose, and non-infringement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-600 mb-4">
                To the maximum extent permitted by law, Paltech™ shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Loss of profits or business opportunities</li>
                <li>Interruption of operations</li>
                <li>Loss of data or information</li>
                <li>Third-party claims</li>
              </ul>
              <p className="text-gray-600">
                Our total liability shall not exceed the amount paid by you for
                the specific product or service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Force Majeure
              </h2>
              <p className="text-gray-600 mb-4">
                We shall not be liable for any failure or delay in performance
                due to circumstances beyond our reasonable control, including
                but not limited to acts of God, natural disasters, war,
                terrorism, labor disputes, government actions, or supplier
                failures.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Governing Law
              </h2>
              <p className="text-gray-600 mb-4">
                These Terms shall be governed by and construed in accordance
                with the laws of India. Any disputes arising under these Terms
                shall be subject to the exclusive jurisdiction of the courts in
                Gurugram, Haryana, India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these Terms at any time. Changes
                will be effective immediately upon posting on our website. Your
                continued use of our website constitutes acceptance of the
                modified Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-800 font-semibold mb-2">
                  Paltech™ Cooling Towers & Equipments Ltd.
                </p>
                <p className="text-gray-600 mb-1">
                  Plot No. 774, IInd Floor, Udyog Vihar, Phase - V, Gurugram,
                  Haryana-122016
                </p>
                <p className="text-gray-600 mb-1">
                  Phone:{' '}
                  <Link
                    href="tel:+911244499700"
                    className="text-primary hover:underline"
                  >
                    +91.124.4499700
                  </Link>
                </p>
                <p className="text-gray-600">
                  Email:{' '}
                  <Link
                    href="mailto:paltech@paltech.net.in"
                    className="text-primary hover:underline"
                  >
                    paltech@paltech.net.in
                  </Link>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
