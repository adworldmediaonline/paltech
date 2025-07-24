import {
  About,
  Expertise,
  Faq,
  Features,
  Hero,
  Products,
  Services,
} from '@/components/sections';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Products />
      <Services />
      <About />
      <Expertise />
      {/* <Services /> */}
      <Features />
      <Faq />
    </div>
  );
}
