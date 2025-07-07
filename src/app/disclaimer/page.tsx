import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';

export default function Disclaimer() {
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
              <BreadcrumbPage>Disclaimer</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12 mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Disclaimer
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
                General Information
              </h2>
              <p className="text-gray-600 mb-4">
                The information on this website is provided by Paltech™ Cooling
                Towers & Equipments Ltd. ("Company," "we," "our," or "us") on an
                "as is" basis. To the fullest extent permitted by law, this
                Company excludes all representations, warranties, and conditions
                relating to our website and the use of this website.
              </p>
              <p className="text-gray-600">
                This disclaimer governs your use of our website and supersedes
                any prior agreements between you and the Company in relation to
                your use of this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Website Content
              </h2>
              <p className="text-gray-600 mb-4">
                The information on this website is provided for general
                informational purposes only and should not be relied upon as
                professional advice. While we strive to keep the information
                up-to-date and correct, we make no representations or warranties
                of any kind about:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>
                  The completeness, accuracy, reliability, or suitability of the
                  information
                </li>
                <li>
                  The availability of the website or the information, products,
                  services, or graphics
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
                Product and Service Information
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Technical Specifications
              </h3>
              <p className="text-gray-600 mb-4">
                All product specifications, dimensions, capacities, and
                technical data provided on this website are approximate and
                subject to change without notice. Final specifications will be
                confirmed in detailed engineering drawings and official
                quotations.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Performance Claims
              </h3>
              <p className="text-gray-600 mb-4">
                Performance data and efficiency claims are based on standard
                testing conditions and may vary depending on actual operating
                conditions, installation factors, maintenance practices, and
                environmental conditions.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Product Images
              </h3>
              <p className="text-gray-600 mb-4">
                Product images on this website are for illustrative purposes
                only. Actual products may vary in appearance, color, finish, and
                configuration from the images shown.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Professional Advice
              </h2>
              <p className="text-gray-600 mb-4">
                The information on this website does not constitute professional
                engineering, legal, financial, or other professional advice. You
                should:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>
                  Consult with qualified professionals before making any
                  technical or business decisions
                </li>
                <li>
                  Verify all technical specifications and requirements for your
                  specific application
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
                Limitation of Liability
              </h2>
              <p className="text-gray-600 mb-4">
                To the maximum extent permitted by applicable law, Paltech™ and
                its directors, employees, partners, agents, suppliers, or
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
                  Damages arising from your use or inability to use the website
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
                Third-Party Links and Content
              </h2>
              <p className="text-gray-600 mb-4">
                This website may contain links to third-party websites that are
                not owned or controlled by Paltech™. We have no control over and
                assume no responsibility for:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>
                  The content, privacy policies, or practices of any third-party
                  websites
                </li>
                <li>
                  The accuracy or availability of information on linked websites
                </li>
                <li>
                  Any damages or losses arising from your use of third-party
                  websites
                </li>
              </ul>
              <p className="text-gray-600">
                We strongly advise you to read the terms and conditions and
                privacy policies of any third-party websites you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Indemnification
              </h2>
              <p className="text-gray-600 mb-4">
                You agree to defend, indemnify, and hold harmless Paltech™ and
                its licensees, licensors, employees, contractors, agents,
                officers and directors from and against any and all claims,
                damages, obligations, losses, liabilities, costs, and expenses
                arising from:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Your use of and access to the website</li>
                <li>Your violation of any term of these disclaimers</li>
                <li>
                  Your violation of any third-party right, including any
                  copyright, property, or privacy right
                </li>
                <li>Any claim that your use caused damage to a third party</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Regulatory Compliance
              </h2>
              <p className="text-gray-600 mb-4">
                You are responsible for ensuring that:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>
                  Our products and services comply with applicable local laws
                  and regulations
                </li>
                <li>
                  Proper permits and approvals are obtained before installation
                </li>
                <li>
                  Environmental and safety standards are met in your
                  jurisdiction
                </li>
                <li>Building codes and technical standards are satisfied</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Changes to Website
              </h2>
              <p className="text-gray-600 mb-4">We reserve the right to:</p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>
                  Modify or discontinue any part of the website without notice
                </li>
                <li>Update product information, specifications, and pricing</li>
                <li>Remove or add content at our sole discretion</li>
                <li>
                  Suspend or terminate website access for maintenance or other
                  reasons
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Governing Law
              </h2>
              <p className="text-gray-600 mb-4">
                This disclaimer shall be governed by and construed in accordance
                with the laws of India. Any disputes arising under this
                disclaimer shall be subject to the exclusive jurisdiction of the
                courts in Gurugram, Haryana, India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this disclaimer, please contact
                us:
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
