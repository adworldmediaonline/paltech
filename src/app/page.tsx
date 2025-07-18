import {
  Clients,
  Features,
  Hero,
  HeroBanner,
  Products,
  Services,
  Video,
} from '@/components/sections';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Products />
      <HeroBanner />
      <Video />
      <Services />
      <Features />
      <Clients />
    </div>
  );
}
