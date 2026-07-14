import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { HowItWorks } from "@/components/home/how-it-works";
import { Screenshots } from "@/components/home/screenshots";
import { Testimonials } from "@/components/home/testimonials";
import { Pricing } from "@/components/home/pricing";
import { FAQ } from "@/components/home/faq";
import { CTA } from "@/components/home/cta";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Features />
      <HowItWorks />
      <Screenshots />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}
