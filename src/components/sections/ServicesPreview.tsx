import Link from "next/link";
import { ArrowRight, FileText, Globe, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Website Copy",
    description:
      "Clear, compelling website content that helps families understand your services and feel confident reaching out.",
    href: "/services#website-copy",
  },
  {
    icon: FileText,
    title: "Articles & Blog Content",
    description:
      "Educational content that positions you as a trusted resource while helping readers navigate health decisions.",
    href: "/services#articles",
  },
  {
    icon: BookOpen,
    title: "Patient Education",
    description:
      "Materials that explain procedures, conditions, and care options in language patients and families actually understand.",
    href: "/services#patient-education",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How I can help
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From website overhauls to ongoing content, I create the words that
            connect your expertise to the people who need it.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-card border-border/50 hover:border-primary/30 transition-colors group"
            >
              <CardHeader>
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/30">
                  <service.icon
                    className="h-6 w-6 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                <Link
                  href={service.href}
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 group-hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  Learn more
                  <ArrowRight
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
