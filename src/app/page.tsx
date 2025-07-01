import {
  Clients,
  Features,
  Footer,
  Header,
  Hero,
  Products,
  Services,
  Video,
} from '@/components/sections';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Products />
      <Video />
      <Services />
      <Features />
      <Clients />
      {/* <CTA /> */}
      <Footer />
    </div>
  );
}
