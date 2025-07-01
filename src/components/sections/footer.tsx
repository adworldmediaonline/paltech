import navigationData from '@/data/navigation.json';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-steel-900 via-steel-950 to-paltech-blue-950 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(255,255,255,0))]"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-paltech-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-paltech-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="relative py-20 lg:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-paltech-blue-500 to-paltech-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-paltech-blue-500/25">
                    <span className="text-white font-[family-name:var(--font-plus-jakarta-sans)] font-bold text-xl">
                      P
                    </span>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-paltech-blue-500 to-paltech-blue-500 rounded-2xl opacity-20 blur-sm"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold bg-gradient-to-r from-white to-paltech-blue-200 bg-clip-text text-transparent">
                    {navigationData.footer.company.name}
                  </h3>
                  <p className="text-steel-400 font-[family-name:var(--font-plus-jakarta-sans)] text-sm">
                    Industrial Cooling Excellence
                  </p>
                </div>
              </div>

              <p className="text-steel-300 text-lg leading-relaxed max-w-md font-[family-name:var(--font-plus-jakarta-sans)]">
                {navigationData.footer.company.description}
              </p>

              {/* Contact Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-steel-400 font-[family-name:var(--font-plus-jakarta-sans)]">
                        Call Us
                      </p>
                      <p className="text-white font-[family-name:var(--font-plus-jakarta-sans)] font-semibold group-hover:text-paltech-blue-300 transition-colors duration-300">
                        {navigationData.footer.company.contact.phone}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-paltech-blue-500 to-paltech-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-steel-400 font-[family-name:var(--font-plus-jakarta-sans)]">
                        Email Us
                      </p>
                      <p className="text-white font-[family-name:var(--font-plus-jakarta-sans)] font-semibold group-hover:text-paltech-blue-300 transition-colors duration-300">
                        {navigationData.footer.company.contact.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold text-white">
                {navigationData.footer.links.products.title}
              </h4>
              <ul className="space-y-4">
                {navigationData.footer.links.products.items.map(
                  (item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-steel-300 hover:text-paltech-blue-300 transition-colors duration-300 font-[family-name:var(--font-plus-jakarta-sans)] flex items-center group"
                      >
                        <svg
                          className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-[family-name:var(--font-plus-jakarta-sans)] font-bold text-white">
                {navigationData.footer.links.company.title}
              </h4>
              <ul className="space-y-4">
                {navigationData.footer.links.company.items.map(
                  (item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-steel-300 hover:text-paltech-blue-300 transition-colors duration-300 font-[family-name:var(--font-plus-jakarta-sans)] flex items-center group"
                      >
                        <svg
                          className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>

              {/* Location Card */}
              <div className="mt-8 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-steel-400 font-[family-name:var(--font-plus-jakarta-sans)] mb-1">
                      Our Location
                    </p>
                    <p className="text-white text-sm font-[family-name:var(--font-plus-jakarta-sans)] leading-relaxed">
                      {navigationData.footer.company.contact.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-steel-700/50">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-steel-400 text-sm font-[family-name:var(--font-plus-jakarta-sans)] text-center md:text-left">
                {navigationData.footer.copyright}
              </p>

              {/* Social Links (placeholder) */}
              <div className="flex space-x-4">
                {[
                  {
                    icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z',
                    label: 'Twitter',
                  },
                  {
                    icon: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.488-1.995.219 0 .979.219.979 1.488 0 .906-.578 2.261-.881 3.518-.25 1.058.531 1.925 1.574 1.925 1.893 0 3.348-1.995 3.348-4.879 0-2.548-1.831-4.33-4.441-4.33-3.026 0-4.803 2.268-4.803 4.615 0 .914.351 1.893.788 2.424.087.104.099.195.073.301-.08.331-.256 1.011-.292 1.153-.047.188-.154.227-.355.137-1.279-.594-2.077-2.459-2.077-3.954 0-3.359 2.442-6.442 7.031-6.442 3.693 0 6.566 2.633 6.566 6.153 0 3.669-2.312 6.615-5.518 6.615-1.076 0-2.092-.559-2.438-1.228 0 0-.534 2.032-.663 2.533-.24.932-.889 2.1-1.323 2.816.996.307 2.05.472 3.147.472 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z',
                    label: 'Pinterest',
                  },
                  {
                    icon: 'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z',
                    label: 'Twitter',
                  },
                ].map((social, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <svg
                      className="w-5 h-5 text-steel-300 group-hover:text-paltech-blue-300 transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.icon} />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
