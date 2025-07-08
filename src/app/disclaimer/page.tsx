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
  { name: 'Terms of Service', href: '/terms-of-service', current: false },
  { name: 'Cookie Policy', href: '/cookie-policy', current: false },
  { name: 'Disclaimer', href: '/disclaimer', current: true },
];

export default function Disclaimer() {
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
                Disclaimer
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
                Disclaimer
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
                  1. General Information
                </h2>
                <p className="text-gray-600 mb-4">
                  The information on this website is provided by Paltech™
                  Cooling Towers & Equipments Ltd. ("Company," "we," "our," or
                  "us") on an "as is" basis. To the fullest extent permitted by
                  law, this Company excludes all representations, warranties,
                  and conditions relating to our website and the use of this
                  website.
                </p>
                <p className="text-gray-600">
                  This disclaimer governs your use of our website and supersedes
                  any prior agreements between you and the Company in relation
                  to your use of this website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Website Content
                </h2>
                <p className="text-gray-600 mb-4">
                  The information on this website is provided for general
                  informational purposes only and should not be relied upon as
                  professional advice. While we strive to keep the information
                  up-to-date and correct, we make no representations or
                  warranties of any kind about:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>
                    The completeness, accuracy, reliability, or suitability of
                    the information
                  </li>
                  <li>
                    The availability of the website or the information,
                    products, services, or graphics
                  </li>
                  <li>
                    That the website will be uninterrupted, secure, or free from
                    errors or viruses
                  </li>
                  <li>
                    The results that may be obtained from the use of the website
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Product and Service Information
                </h2>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  3.1. Technical Specifications
                </h3>
                <p className="text-gray-600 mb-4">
                  All product specifications, dimensions, capacities, and
                  technical data provided on this website are approximate and
                  subject to change without notice. Final specifications will be
                  confirmed in detailed engineering drawings and official
                  quotations.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  3.2. Performance Claims
                </h3>
                <p className="text-gray-600 mb-4">
                  Performance data and efficiency claims are based on standard
                  testing conditions and may vary depending on actual operating
                  conditions, installation factors, maintenance practices, and
                  environmental conditions.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  3.3. Product Images
                </h3>
                <p className="text-gray-600 mb-4">
                  Product images on this website are for illustrative purposes
                  only. Actual products may vary in appearance, color, finish,
                  and configuration from the images shown.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Professional Advice
                </h2>
                <p className="text-gray-600 mb-4">
                  The information on this website does not constitute
                  professional engineering, legal, financial, or other
                  professional advice. You should:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>
                    Consult with qualified professionals before making any
                    technical or business decisions
                  </li>
                  <li>
                    Verify all technical specifications and requirements for
                    your specific application
                  </li>
                  <li>
                    Obtain proper engineering consultation for installation and
                    operation
                  </li>
                  <li>
                    Ensure compliance with local codes, regulations, and safety
                    standards
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Limitation of Liability
                </h2>
                <p className="text-gray-600 mb-4">
                  To the maximum extent permitted by applicable law, Paltech™
                  and its directors, employees, partners, agents, suppliers, or
                  affiliates shall not be liable for any:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>
                    Direct, indirect, punitive, incidental, special, or
                    consequential damages
                  </li>
                  <li>
                    Loss of use, data, business, revenues, profits, or savings
                  </li>
                  <li>
                    Interruption of business or loss of business opportunities
                  </li>
                  <li>
                    Damages arising from your use or inability to use the
                    website
                  </li>
                  <li>Reliance on any information obtained from the website</li>
                  <li>Mistakes, inaccuracies, or omissions in the content</li>
                </ul>
                <p className="text-gray-600">
                  This applies whether such damages arise in contract, tort,
                  negligence, or any other legal theory, even if we have been
                  advised of the possibility of such damages.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Third-Party Links and Content
                </h2>
                <p className="text-gray-600 mb-4">
                  This website may contain links to third-party websites that
                  are not owned or controlled by Paltech™. We have no control
                  over and assume no responsibility for:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>
                    The content, privacy policies, or practices of any
                    third-party websites
                  </li>
                  <li>
                    The availability, accuracy, or reliability of third-party
                    services
                  </li>
                  <li>
                    Any damages or losses incurred from third-party interactions
                  </li>
                  <li>
                    The security or privacy of information transmitted to third
                    parties
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Regulatory Compliance
                </h2>
                <p className="text-gray-600 mb-4">
                  Our products are designed to meet applicable industry
                  standards and regulations. However, compliance requirements
                  may vary by jurisdiction and application. It is your
                  responsibility to:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>
                    Verify compliance with local building codes and regulations
                  </li>
                  <li>Ensure proper permits and approvals are obtained</li>
                  <li>Meet environmental and safety requirements</li>
                  <li>
                    Comply with industry-specific standards and guidelines
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Changes to Products and Services
                </h2>
                <p className="text-gray-600 mb-4">
                  We reserve the right to modify, discontinue, or update our
                  products and services at any time without prior notice. We may
                  also change pricing, specifications, and availability without
                  notice.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Governing Law
                </h2>
                <p className="text-gray-600 mb-4">
                  This disclaimer is governed by the laws of India. Any disputes
                  arising from or relating to this disclaimer shall be subject
                  to the exclusive jurisdiction of the courts in Gurugram,
                  Haryana, India.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  10. Updates to This Disclaimer
                </h2>
                <p className="text-gray-600 mb-4">
                  We may update this disclaimer from time to time. Any changes
                  will be effective immediately upon posting on our website.
                  Your continued use of the website after such changes
                  constitutes acceptance of the updated disclaimer.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  11. Contact Information
                </h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this disclaimer or our
                  services, please contact us at:
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
            <div className="sticky top-24">
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
