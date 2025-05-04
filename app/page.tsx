import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import Testimonials from '@/components/sections/testimonials';
import TechStack from '@/components/sections/tech-stack';
import Pricing from '@/components/sections/pricing';
import Stats from '@/components/sections/stats';
import CTA from '@/components/sections/cta';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      <Hero />
      <Services />
      <Stats />
      <TechStack />
      <Testimonials />
      <Pricing />
      <CTA />
    </div>
  );
}