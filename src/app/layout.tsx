import type { Metadata } from 'next';
import { JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title:
    'Paltech Cooling Towers & Equipments Ltd - Industrial Cooling Solutions',
  description:
    'Leading provider of industrial cooling towers, HVAC systems, and cooling equipment. Expert solutions for efficient and reliable cooling systems with 25+ years of experience.',
  keywords:
    'cooling towers, industrial cooling, HVAC systems, cooling equipment, industrial solutions',
  authors: [{ name: 'Paltech Cooling Towers & Equipments Ltd' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${jetBrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
