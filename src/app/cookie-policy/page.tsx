import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';

export default function CookiePolicy() {
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
              <BreadcrumbPage>Cookie Policy</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12 mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Cookie Policy
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
                What Are Cookies
              </h2>
              <p className="text-gray-600 mb-4">
                Cookies are small text files that are placed on your computer or
                mobile device when you visit a website. They are widely used to
                make websites work more efficiently and to provide information
                to website owners.
              </p>
              <p className="text-gray-600">
                This Cookie Policy explains how Paltech™ Cooling Towers &
                Equipments Ltd. ("we," "our," or "us") uses cookies and similar
                technologies on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How We Use Cookies
              </h2>
              <p className="text-gray-600 mb-4">
                We use cookies for several reasons, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>To ensure our website functions properly and securely</li>
                <li>To remember your preferences and settings</li>
                <li>
                  To analyze how our website is used and improve user experience
                </li>
                <li>To measure the effectiveness of our marketing campaigns</li>
                <li>To provide personalized content and advertisements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Types of Cookies We Use
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Essential Cookies
              </h3>
              <p className="text-gray-600 mb-4">
                These cookies are necessary for our website to function
                properly. They enable basic features like page navigation,
                access to secure areas, and form submissions. Without these
                cookies, certain services cannot be provided.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Performance Cookies
              </h3>
              <p className="text-gray-600 mb-4">
                These cookies collect information about how visitors use our
                website, such as which pages are visited most often and if users
                receive error messages. This information helps us improve how
                our website works.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Functionality Cookies
              </h3>
              <p className="text-gray-600 mb-4">
                These cookies allow our website to remember choices you make
                (such as your preferred language or region) and provide
                enhanced, more personal features.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Targeting/Advertising Cookies
              </h3>
              <p className="text-gray-600 mb-4">
                These cookies are used to deliver advertisements that are more
                relevant to you and your interests. They may also be used to
                limit the number of times you see an advertisement and help
                measure the effectiveness of advertising campaigns.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Third-Party Cookies
              </h2>
              <p className="text-gray-600 mb-4">
                We may also use third-party services that set cookies on our
                behalf. These may include:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>
                  <strong>Google Analytics:</strong> To analyze website traffic
                  and user behavior
                </li>
                <li>
                  <strong>Social Media Platforms:</strong> To enable social
                  media sharing and integration
                </li>
                <li>
                  <strong>Marketing Tools:</strong> To track conversions and
                  optimize our marketing efforts
                </li>
                <li>
                  <strong>Customer Support:</strong> To provide live chat and
                  support services
                </li>
              </ul>
              <p className="text-gray-600">
                These third-party cookies are governed by the respective privacy
                policies of these external services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Managing Cookies
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Browser Settings
              </h3>
              <p className="text-gray-600 mb-4">
                Most web browsers allow you to control cookies through their
                settings. You can usually:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>
                  View what cookies have been set and delete them individually
                </li>
                <li>Block third-party cookies</li>
                <li>Block cookies from particular sites</li>
                <li>Block all cookies from being set</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Browser-Specific Instructions
              </h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <strong>Chrome:</strong> Settings → Privacy and Security →
                    Cookies and other site data
                  </li>
                  <li>
                    <strong>Firefox:</strong> Options → Privacy & Security →
                    Cookies and Site Data
                  </li>
                  <li>
                    <strong>Safari:</strong> Preferences → Privacy → Manage
                    Website Data
                  </li>
                  <li>
                    <strong>Edge:</strong> Settings → Cookies and site
                    permissions → Cookies and site data
                  </li>
                </ul>
              </div>

              <p className="text-gray-600 mb-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <strong>Please note:</strong> Disabling cookies may affect the
                functionality of our website and your user experience. Some
                features may not work properly if cookies are disabled.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cookie Retention
              </h2>
              <p className="text-gray-600 mb-4">
                We retain cookies for different periods depending on their
                purpose:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>
                  <strong>Session Cookies:</strong> Deleted when you close your
                  browser
                </li>
                <li>
                  <strong>Persistent Cookies:</strong> Remain for a set period
                  (typically 1-24 months)
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Usually expire after 2
                  years
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Typically expire after
                  30-90 days
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                International Transfers
              </h2>
              <p className="text-gray-600 mb-4">
                Some of the third-party services we use may transfer your
                information to countries outside of India. We ensure that
                appropriate safeguards are in place to protect your information
                in accordance with applicable data protection laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Updates to This Policy
              </h2>
              <p className="text-gray-600 mb-4">
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or applicable laws. We will notify you
                of any material changes by posting the new policy on our website
                and updating the "Effective Date" at the top of this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Your Consent
              </h2>
              <p className="text-gray-600 mb-4">
                By continuing to use our website, you consent to our use of
                cookies as described in this policy. If you do not agree with
                our use of cookies, you should adjust your browser settings or
                discontinue use of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about our Cookie Policy or data
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
