import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-16 sm:py-20 bg-primary">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to communicate with families, not at them?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Let&apos;s talk about how clear, compassionate content can help your
            audience understand what you do and why it matters to them.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8"
            >
              <Link href="/contact">Start the Conversation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
