import {
  CTA,
  Clients,
  Features,
  Footer,
  Header,
  Hero,
  Services,
  Video,
} from '@/components/sections';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Video />
      <Services />
      <Features />
      <Clients />
      <CTA />
      <Footer />
    </div>
  );
}
