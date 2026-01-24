import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { WhoSheHelps } from "@/components/sections/WhoSheHelps";
import { WhyLarissa } from "@/components/sections/WhyLarissa";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <WhoSheHelps />
        <WhyLarissa />
        <ServicesPreview />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
