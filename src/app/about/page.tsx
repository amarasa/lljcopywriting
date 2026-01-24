import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Users, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Larissa Ray, a copywriter who specializes in translating complex health topics into content that worried families actually understand. Senior living and healthcare content expert.",
  openGraph: {
    title: "About Larissa Ray | LLJ Copywriting",
    description:
      "Meet Larissa Ray, a copywriter who specializes in translating complex health topics into content that worried families actually understand.",
    url: "https://lljcopywriting.com/about",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "Person",
    name: "Larissa Ray",
    jobTitle: "Health & Senior Living Copywriter",
    description:
      "Copywriter specializing in health and senior living content that helps families understand complex medical topics.",
    worksFor: {
      "@type": "Organization",
      name: "LLJ Copywriting, LLC",
    },
  },
};

const values = [
  {
    icon: Heart,
    title: "Empathy first",
    description:
      "Every piece of content starts with understanding who's reading it and what they're going through.",
  },
  {
    icon: Users,
    title: "Clarity over cleverness",
    description:
      "Your audience doesn't need impressive jargon. They need information they can understand and act on.",
  },
  {
    icon: Lightbulb,
    title: "Trust through transparency",
    description:
      "Good health content doesn't oversell. It educates, reassures, and helps people make informed decisions.",
  },
];

export default function AboutPage() {
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
                The person behind the words
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I&apos;m Larissa Ray, and I help health and senior living
                businesses communicate with the families who need them most.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 sm:py-20 bg-card">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                How I got here
              </h2>
              <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I spent years writing marketing content. The kind that checks
                  all the boxes: SEO-friendly, professionally polished, hitting
                  all the right keywords. But something was missing.
                </p>
                <p>
                  The turning point came when I started writing for senior living
                  communities. Suddenly, I wasn&apos;t just writing about
                  services. I was writing to daughters worried about their aging
                  parents. Sons trying to understand memory care options. Spouses
                  facing impossible decisions.
                </p>
                <p>
                  That&apos;s when I realized: the best content isn&apos;t about
                  impressing people with expertise. It&apos;s about meeting them
                  where they are, in moments of uncertainty, and giving them the
                  clarity they need.
                </p>
                <p className="text-foreground font-medium">
                  I&apos;ve been the worried family member searching for answers
                  at midnight. I know what it feels like to need information you
                  can actually understand during a health crisis. That experience
                  shapes everything I write.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What drives me */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What drives my work
              </h2>
              <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Health decisions are personal. When someone is researching
                  treatment options, evaluating care facilities, or trying to
                  understand a diagnosis, they&apos;re not in &ldquo;consumer
                  mode.&rdquo; They&apos;re in &ldquo;I need help&rdquo; mode.
                </p>
                <p>
                  I believe the businesses that serve these people have a
                  responsibility to communicate clearly. Not to dumb things down,
                  but to translate complexity into understanding. To replace
                  anxiety with confidence.
                </p>
                <p>
                  That&apos;s the work I love: helping health and senior living
                  businesses become the trusted voice their audience is searching
                  for.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 sm:py-20 bg-card">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                How I approach every project
              </h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <value.icon
                      className="h-7 w-7 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {value.description}
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
                Let&apos;s work together
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                If you&apos;re ready to create content that truly connects with
                the families you serve, I&apos;d love to hear about your project.
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8"
                >
                  <Link href="/contact">Get in Touch</Link>
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
