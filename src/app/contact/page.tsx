"use client";

import { useState } from "react";
import { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, AlertCircle } from "lucide-react";

const projectTypes = [
  { value: "website-copy", label: "Website Copy" },
  { value: "articles-blog", label: "Articles & Blog Content" },
  { value: "patient-education", label: "Patient Education Materials" },
  { value: "senior-living", label: "Senior Living Content" },
  { value: "healthcare", label: "Healthcare Practice Content" },
  { value: "brand-messaging", label: "Brand Messaging" },
  { value: "other", label: "Other / Not Sure" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
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
                {status === "success" ? (
                  <div className="rounded-lg bg-primary/10 p-8 text-center">
                    <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                    <h2 className="mt-4 text-2xl font-bold text-foreground">
                      Message sent!
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                      Thanks for reaching out. I&apos;ll get back to you within
                      1-2 business days.
                    </p>
                    <Button
                      className="mt-6"
                      variant="outline"
                      onClick={() => setStatus("idle")}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {status === "error" && (
                      <div className="rounded-lg bg-destructive/10 p-4 flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-destructive">{errorMessage}</p>
                      </div>
                    )}

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your organization"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="projectType">Project Type *</Label>
                        <Select
                          value={formData.projectType}
                          onValueChange={(value) =>
                            setFormData((prev) => ({ ...prev, projectType: value }))
                          }
                          required
                        >
                          <SelectTrigger id="projectType">
                            <SelectValue placeholder="Select a project type" />
                          </SelectTrigger>
                          <SelectContent>
                            {projectTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell me about your project *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What are you working on? What challenges are you facing with your current content? What would success look like?"
                        rows={6}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
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
