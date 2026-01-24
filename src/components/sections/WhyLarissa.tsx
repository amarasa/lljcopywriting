import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Senior living experience",
    description:
      "I've written for senior living communities and understand the unique concerns families face when making care decisions.",
  },
  {
    title: "Health communication passion",
    description:
      "I've spent years translating complex medical information into content that helps worried parents and families make informed decisions.",
  },
  {
    title: "The human element",
    description:
      "I've been the worried family member searching for answers at midnight. I know what it feels like to need clarity during uncertainty.",
  },
];

export function WhyLarissa() {
  return (
    <section className="py-16 sm:py-20 bg-card">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why work with me?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              I&apos;m not just a copywriter who happens to write about health.
              I&apos;m someone who genuinely understands the weight of health
              decisions and the families making them.
            </p>

            <ul className="mt-8 space-y-6" role="list">
              {reasons.map((reason) => (
                <li key={reason.title} className="flex gap-4">
                  <CheckCircle2
                    className="h-6 w-6 flex-shrink-0 text-primary mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {reason.title}
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
              <div className="text-center p-8">
                <blockquote className="text-xl italic text-foreground">
                  &ldquo;Your content shouldn&apos;t just inform. It should
                  reassure.&rdquo;
                </blockquote>
                <p className="mt-4 text-muted-foreground">
                  — Larissa Ray
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
