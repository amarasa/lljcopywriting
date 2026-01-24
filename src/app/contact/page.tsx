import { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch to discuss your health or senior living copywriting project. I respond to all inquiries within 1-2 business days.",
  openGraph: {
    title: "Contact | LLJ Copywriting",
    description:
      "Get in touch to discuss your health or senior living copywriting project.",
    url: "https://lljcopywriting.com/contact",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "ProfessionalService",
    name: "LLJ Copywriting",
    url: "https://lljcopywriting.com",
  },
};

export default function ContactPage() {
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
                Let&apos;s talk about your project
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Ready to create content that connects with your audience? Tell me
                a bit about what you&apos;re working on.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 sm:py-20 bg-card">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Form */}
              <div>
                <ContactForm />
              </div>

              {/* Info */}
              <div className="lg:pl-8">
                <h2 className="text-2xl font-bold text-foreground">
                  What happens next?
                </h2>
                <div className="mt-6 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        I&apos;ll review your message
                      </h3>
                      <p className="mt-1 text-muted-foreground">
                        I read every inquiry personally and respond within 1-2
                        business days.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        We&apos;ll schedule a call
                      </h3>
                      <p className="mt-1 text-muted-foreground">
                        If it seems like a good fit, we&apos;ll hop on a quick
                        call to discuss your project in detail.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        I&apos;ll send a proposal
                      </h3>
                      <p className="mt-1 text-muted-foreground">
                        You&apos;ll receive a clear proposal outlining scope,
                        timeline, and investment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
