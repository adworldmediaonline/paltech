import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
              <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12 mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
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
                Introduction
              </h2>
              <p className="text-gray-600 mb-4">
                Paltech™ Cooling Towers & Equipments Ltd. ("we," "our," or "us")
                is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you visit our website or engage with our
                services.
              </p>
              <p className="text-gray-600">
                By using our website or services, you consent to the data
                practices described in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Personal Information
              </h3>
              <p className="text-gray-600 mb-4">
                We may collect personal information that you voluntarily provide
                to us when you:
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
                When you visit our website, we may automatically collect certain
                information about your device and usage patterns:
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
                How We Use Your Information
              </h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>
                  Respond to your business inquiries and provide customer
                  support
                </li>
                <li>Process quote requests and provide product information</li>
                <li>
                  Send marketing communications and industry updates (with your
                  consent)
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
                Information Sharing and Disclosure
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
                Data Security
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
                Data Retention
              </h2>
              <p className="text-gray-600 mb-4">
                We retain your personal information for as long as necessary to
                fulfill the purposes outlined in this policy, comply with legal
                obligations, resolve disputes, and enforce our agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Your Rights
              </h2>
              <p className="text-gray-600 mb-4">
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>
                  Delete your personal information (subject to legal
                  obligations)
                </li>
                <li>Restrict or object to processing of your information</li>
                <li>Data portability</li>
                <li>Withdraw consent for marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                International Transfers
              </h2>
              <p className="text-gray-600 mb-4">
                Your information may be transferred to and processed in
                countries other than your own. We ensure appropriate safeguards
                are in place to protect your information in accordance with
                applicable data protection laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-gray-600 mb-4">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Effective Date" at the top of this
                policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
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
