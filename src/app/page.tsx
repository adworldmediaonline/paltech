import {
  Clients,
  Features,
  Hero,
  Products,
  Services,
  Video,
} from '@/components/sections';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Products />
      <Video />
      <Services />
      <Features />
      <Clients />
      {/* <CTA /> */}
    </div>
  );
}
