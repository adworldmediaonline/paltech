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
  { name: 'Privacy Policy', href: '/privacy-policy', current: true },
  { name: 'Terms of Service', href: '/terms-of-service', current: false },
  { name: 'Cookie Policy', href: '/cookie-policy', current: false },
  { name: 'Disclaimer', href: '/disclaimer', current: false },
];

export default function PrivacyPolicy() {
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
                Privacy Policy
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
                Privacy Policy
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
                  1. Introduction
                </h2>
                <p className="text-gray-600 mb-4">
                  In the following, we provide information about the collection
                  of personal data when using
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>
                    our website{' '}
                    <a
                      href="https://www.paltech.net.in/"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      https://www.paltech.net.in/
                    </a>
                  </li>
                  <li>our profiles in social media.</li>
                </ul>
                <p className="text-gray-600 mb-4">
                  Personal data is any data that can be related to a specific
                  natural person, such as their name or IP address.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  1.1. Contact Details
                </h3>
                <p className="text-gray-600 mb-4">
                  The controller within the meaning of Art. 4 para. 7 EU General
                  Data Protection Regulation (GDPR) is Paltech™ Cooling Towers &
                  Equipments Ltd., Plot No. 774, Udyog Vihar Phase-V, Gurugram -
                  122016, India.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Information We Collect
                </h2>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Personal Information
                </h3>
                <p className="text-gray-600 mb-4">
                  We may collect personal information that you voluntarily
                  provide to us when you:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Submit business inquiries through our contact forms</li>
                  <li>Request quotes or product information</li>
                  <li>Subscribe to our newsletters or updates</li>
                  <li>Communicate with us via email or phone</li>
                  <li>Participate in surveys or feedback requests</li>
                </ul>

                <p className="text-gray-600 mb-4">
                  This information may include:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Name and contact information (email, phone, address)</li>
                  <li>Company name and job title</li>
                  <li>Business requirements and project details</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Automatically Collected Information
                </h3>
                <p className="text-gray-600 mb-4">
                  When you visit our website, we may automatically collect
                  certain information about your device and usage patterns:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>IP address and browser information</li>
                  <li>Device type and operating system</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring websites and search terms</li>
                  <li>Geographic location (general)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-gray-600 mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>
                    Respond to your business inquiries and provide customer
                    support
                  </li>
                  <li>
                    Process quote requests and provide product information
                  </li>
                  <li>
                    Send marketing communications and industry updates (with
                    your consent)
                  </li>
                  <li>Improve our website functionality and user experience</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>
                    Comply with legal obligations and protect our business
                    interests
                  </li>
                  <li>Prevent fraud and enhance security</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Information Sharing and Disclosure
                </h2>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information in the following
                  circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>
                    <strong>Business Partners:</strong> With authorized
                    distributors or partners to fulfill your requests
                  </li>
                  <li>
                    <strong>Service Providers:</strong> With trusted third-party
                    service providers who assist in our operations
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law or
                    to protect our rights and safety
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with
                    mergers, acquisitions, or asset transfers
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Data Security
                </h2>
                <p className="text-gray-600 mb-4">
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. However, no
                  method of transmission over the internet or electronic storage
                  is 100% secure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Data Retention
                </h2>
                <p className="text-gray-600 mb-4">
                  We retain your personal information for as long as necessary
                  to fulfill the purposes outlined in this policy, comply with
                  legal obligations, resolve disputes, and enforce our
                  agreements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Your Rights
                </h2>
                <p className="text-gray-600 mb-4">
                  Depending on your location, you may have the following rights
                  regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>
                    Access and receive a copy of your personal information
                  </li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>
                    Delete your personal information (subject to legal
                    obligations)
                  </li>
                  <li>Object to or restrict processing of your information</li>
                  <li>Data portability (where applicable)</li>
                  <li>Withdraw consent for marketing communications</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. International Data Transfers
                </h2>
                <p className="text-gray-600 mb-4">
                  Your information may be transferred to and processed in
                  countries other than your own. We ensure appropriate
                  safeguards are in place to protect your personal information
                  in accordance with applicable data protection laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Children's Privacy
                </h2>
                <p className="text-gray-600 mb-4">
                  Our services are not intended for children under 13 years of
                  age. We do not knowingly collect personal information from
                  children under 13.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  10. Changes to This Policy
                </h2>
                <p className="text-gray-600 mb-4">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  our website and updating the "Last updated" date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  11. Contact Information
                </h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us at:
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
