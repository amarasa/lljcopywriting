import { Building2, Heart, Leaf, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const audiences = [
  {
    icon: Building2,
    title: "Senior Living Communities",
    description:
      "Memory care, assisted living, and independent living communities that want families to feel confident choosing you for their loved ones.",
  },
  {
    icon: Heart,
    title: "Healthcare Providers",
    description:
      "Clinics, practices, and healthcare organizations that need to explain treatments and services in patient-friendly language.",
  },
  {
    icon: Leaf,
    title: "Wellness Businesses",
    description:
      "Health coaches, supplement companies, and wellness brands that want to educate without overwhelming their audience.",
  },
  {
    icon: Users,
    title: "Health-Focused Brands",
    description:
      "Fitness businesses, nutrition companies, and health tech startups that communicate complex health information to everyday people.",
  },
];

export function WhoSheHelps() {
  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Who I work with
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            I partner with businesses that serve people during some of life&apos;s
            most important health decisions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <Card
              key={audience.title}
              className="bg-card border-border/50 hover:border-primary/30 transition-colors"
            >
              <CardHeader className="pb-2">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <audience.icon
                    className="h-6 w-6 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <CardTitle className="text-lg">{audience.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {audience.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
