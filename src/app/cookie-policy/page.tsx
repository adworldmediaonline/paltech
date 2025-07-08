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
  { name: 'Cookie Policy', href: '/cookie-policy', current: true },
  { name: 'Disclaimer', href: '/disclaimer', current: false },
];

export default function CookiePolicy() {
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
                Cookie Policy
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
                Cookie Policy
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
                  1. What Are Cookies
                </h2>
                <p className="text-gray-600 mb-4">
                  Cookies are small text files that are placed on your computer
                  or mobile device when you visit a website. They are widely
                  used to make websites work more efficiently and to provide
                  information to website owners.
                </p>
                <p className="text-gray-600">
                  This Cookie Policy explains how Paltech™ Cooling Towers &
                  Equipments Ltd. ("we," "our," or "us") uses cookies and
                  similar technologies on our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. How We Use Cookies
                </h2>
                <p className="text-gray-600 mb-4">
                  We use cookies for several reasons, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>To ensure our website functions properly and securely</li>
                  <li>To remember your preferences and settings</li>
                  <li>
                    To analyze how our website is used and improve user
                    experience
                  </li>
                  <li>
                    To measure the effectiveness of our marketing campaigns
                  </li>
                  <li>To provide personalized content and advertisements</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Types of Cookies We Use
                </h2>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  3.1. Essential Cookies
                </h3>
                <p className="text-gray-600 mb-4">
                  These cookies are necessary for our website to function
                  properly. They enable basic features like page navigation,
                  access to secure areas, and form submissions. Without these
                  cookies, certain services cannot be provided.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  3.2. Performance Cookies
                </h3>
                <p className="text-gray-600 mb-4">
                  These cookies collect information about how visitors use our
                  website, such as which pages are visited most often and if
                  users receive error messages. This information helps us
                  improve how our website works.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  3.3. Functionality Cookies
                </h3>
                <p className="text-gray-600 mb-4">
                  These cookies allow our website to remember choices you make
                  (such as your preferred language or region) and provide
                  enhanced, more personal features.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  3.4. Targeting/Advertising Cookies
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
                  4. Third-Party Cookies
                </h2>
                <p className="text-gray-600 mb-4">
                  We may also use third-party services that set cookies on our
                  behalf. These may include:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>
                    <strong>Google Analytics:</strong> To analyze website
                    traffic and user behavior
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
                  These third-party cookies are governed by the respective
                  privacy policies of these external services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Managing Cookies
                </h2>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  5.1. Browser Settings
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
                  5.2. Browser-Specific Instructions
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
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Opt-Out Options
                </h2>
                <p className="text-gray-600 mb-4">
                  You can opt out of certain types of cookies and tracking:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>
                    <strong>Google Analytics:</strong> Visit{' '}
                    <a
                      href="https://tools.google.com/dlpage/gaoptout"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      Google Analytics Opt-out
                    </a>
                  </li>
                  <li>
                    <strong>Advertising Cookies:</strong> Visit{' '}
                    <a
                      href="http://www.aboutads.info/choices/"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      Digital Advertising Alliance
                    </a>
                  </li>
                  <li>
                    <strong>Social Media:</strong> Adjust privacy settings on
                    respective platforms
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Impact of Disabling Cookies
                </h2>
                <p className="text-gray-600 mb-4">
                  Please note that disabling cookies may impact your experience
                  on our website. Some features may not work properly or may be
                  unavailable if you choose to disable cookies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Updates to This Policy
                </h2>
                <p className="text-gray-600 mb-4">
                  We may update this Cookie Policy from time to time to reflect
                  changes in our practices or for other operational, legal, or
                  regulatory reasons. We will notify you of any material changes
                  by posting the updated policy on our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Contact Information
                </h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Cookie Policy or our use
                  of cookies, please contact us at:
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
