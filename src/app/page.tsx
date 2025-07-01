import {
  CTA,
  Clients,
  Features,
  Footer,
  Header,
  Hero,
  Services,
} from '@/components/sections';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Features />
      <Clients />
      <CTA />
      <Footer />
    </div>
  );
}
