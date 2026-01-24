import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { WhoSheHelps } from "@/components/sections/WhoSheHelps";
import { WhyLarissa } from "@/components/sections/WhyLarissa";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { CTA } from "@/components/sections/CTA";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://lljcopywriting.com/#business",
      name: "LLJ Copywriting",
      description:
        "Professional copywriting services for health and senior living businesses. Specializing in website copy, patient education materials, and healthcare content.",
      url: "https://lljcopywriting.com",
      logo: "https://lljcopywriting.com/logo.png",
      image: "https://lljcopywriting.com/og-image.png",
      priceRange: "$$",
      serviceType: [
        "Copywriting",
        "Content Writing",
        "Healthcare Marketing",
        "Senior Living Marketing",
      ],
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      founder: {
        "@type": "Person",
        name: "Larissa Ray",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://lljcopywriting.com/#website",
      url: "https://lljcopywriting.com",
      name: "LLJ Copywriting",
      description:
        "Health content that worried families actually understand. Copywriting for senior living communities and healthcare businesses.",
      publisher: {
        "@id": "https://lljcopywriting.com/#business",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://lljcopywriting.com/#webpage",
      url: "https://lljcopywriting.com",
      name: "LLJ Copywriting | Health & Senior Living Content",
      description:
        "I help health and senior living businesses explain complex topics in ways that build trust with worried families and aging adults.",
      isPartOf: {
        "@id": "https://lljcopywriting.com/#website",
      },
      about: {
        "@id": "https://lljcopywriting.com/#business",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
