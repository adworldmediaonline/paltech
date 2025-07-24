import {
  About,
  Clients,
  Features,
  Hero,
  Products,
} from '@/components/sections';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Products />
      <About />
      {/* <Services /> */}
      <Features />
      <Clients />
    </div>
  );
}
