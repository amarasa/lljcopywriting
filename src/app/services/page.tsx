import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Globe,
  FileText,
  BookOpen,
  Building2,
  Stethoscope,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Copywriting services for health and senior living businesses: website copy, articles, patient education materials, healthcare content, and brand messaging.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Copywriting Services | LLJ Copywriting",
    description:
      "Website copy, articles, patient education materials, and more for health and senior living businesses.",
    url: "https://lljcopywriting.com/services",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Copywriting Services",
  provider: {
    "@type": "ProfessionalService",
    name: "LLJ Copywriting",
    url: "https://lljcopywriting.com",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Copywriting Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Copy",
          description: "Clear, compassionate website copy for health and senior living businesses.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Articles & Blog Content",
          description: "Educational content that positions you as a trusted resource.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Patient Education Materials",
          description: "Complex medical information translated into language patients can understand.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Senior Living Content",
          description: "Specialized content for memory care, assisted living, and independent living communities.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Healthcare Practice Content",
          description: "Content that helps patients understand your services and approach to care.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brand Messaging",
          description: "Foundational messaging that captures who you are and why you matter.",
        },
      },
    ],
  },
};

const services = [
  {
    id: "website-copy",
    icon: Globe,
    title: "Website Copy",
    description:
      "Your website is often the first impression families have of your organization. I write clear, compassionate copy that helps visitors understand your services and feel confident reaching out.",
    includes: [
      "Homepage messaging",
      "Service and program pages",
      "About and team pages",
      "Location pages",
    ],
    idealFor:
      "Senior living communities, healthcare practices, and wellness businesses launching or refreshing their websites.",
  },
  {
    id: "articles",
    icon: FileText,
    title: "Articles & Blog Content",
    description:
      "Educational content that positions you as a trusted resource. I write articles that help your audience navigate health decisions while building your authority in the space.",
    includes: [
      "Blog posts and articles",
      "Resource guides",
      "FAQ content",
      "Newsletter content",
    ],
    idealFor:
      "Organizations that want to attract and educate potential clients through helpful, search-friendly content.",
  },
  {
    id: "patient-education",
    icon: BookOpen,
    title: "Patient Education Materials",
    description:
      "Complex medical information translated into language patients and families can understand and act on. Clear explanations that reduce anxiety and improve outcomes.",
    includes: [
      "Procedure explanations",
      "Condition overviews",
      "Treatment guides",
      "Pre/post-care instructions",
    ],
    idealFor:
      "Healthcare providers who want patients to feel informed and prepared, not overwhelmed.",
  },
  {
    id: "senior-living",
    icon: Building2,
    title: "Senior Living Content",
    description:
      "Specialized content for memory care, assisted living, and independent living communities. I understand the unique concerns families face when researching care options.",
    includes: [
      "Community descriptions",
      "Care level explanations",
      "Family resource content",
      "Move-in guides",
    ],
    idealFor:
      "Senior living communities that want to connect with families during one of life's most important decisions.",
  },
  {
    id: "healthcare",
    icon: Stethoscope,
    title: "Healthcare Practice Content",
    description:
      "Content that helps patients understand your services, specialties, and approach to care. Build trust before they ever walk through your door.",
    includes: [
      "Service descriptions",
      "Provider bios",
      "Specialty pages",
      "New patient information",
    ],
    idealFor:
      "Medical practices, clinics, and healthcare organizations looking to improve their patient communication.",
  },
  {
    id: "brand-messaging",
    icon: MessageSquare,
    title: "Brand Messaging",
    description:
      "Foundational messaging that captures who you are and why you matter to your audience. The strategic groundwork that makes all your other content more effective.",
    includes: [
      "Value proposition development",
      "Key messaging frameworks",
      "Taglines and positioning",
      "Voice and tone guidelines",
    ],
    idealFor:
      "Organizations that need clarity on how to talk about themselves before creating content.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery call",
    description:
      "We start with a conversation about your organization, your audience, and what you're trying to achieve. I ask a lot of questions.",
  },
  {
    number: "02",
    title: "Research & strategy",
    description:
      "I dig into your audience, your competitors, and your unique value. This shapes the messaging strategy for your project.",
  },
  {
    number: "03",
    title: "Writing & collaboration",
    description:
      "I write. You review. We refine together until the content sounds like you, only clearer.",
  },
  {
    number: "04",
    title: "Final delivery",
    description:
      "You receive polished, ready-to-use content along with any implementation guidance you need.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Content that connects
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                From website overhauls to ongoing content, I create the words
                that help health and senior living businesses communicate with
                the families who need them.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 sm:py-20 bg-card">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card
                  key={service.id}
                  id={service.id}
                  className="bg-background border-border/50 hover:border-primary/30 transition-colors scroll-mt-24"
                >
                  <CardHeader>
                    <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <service.icon
                        className="h-6 w-6 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">
                        Includes:
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span
                              className="text-primary mt-1.5 text-xs"
                              aria-hidden="true"
                            >
                              ●
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t border-border/50">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">
                          Ideal for:{" "}
                        </span>
                        {service.idealFor}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                How we&apos;ll work together
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Every project is different, but here&apos;s the general flow.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <div key={step.number} className="relative">
                  <div className="text-5xl font-bold text-primary/20 mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-primary">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Not sure what you need?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Let&apos;s talk through your goals and figure out the best
                approach together. No pressure, just a conversation.
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8"
                >
                  <Link href="/contact">Schedule a Call</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
