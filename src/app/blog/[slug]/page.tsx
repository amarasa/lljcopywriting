import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  client,
  blogPostBySlugQuery,
  blogPostSlugsQuery,
  type BlogPost,
} from "@/lib/sanity";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(blogPostSlugsQuery);
  return slugs.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post: BlogPost | null = await client.fetch(blogPostBySlugQuery, { slug });

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const title = post.seo?.metaTitle || post.title;
  const description = post.seo?.metaDescription || post.excerpt;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | LLJ Copywriting`,
      description,
      url: `https://lljcopywriting.com/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author?.name || "Larissa Ray"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | LLJ Copywriting`,
      description,
    },
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const portableTextComponents = {
  types: {
    richTextBlock: ({
      value,
    }: {
      value: { content: PortableTextBlock[] };
    }) => (
      <div className="prose prose-lg max-w-none">
        <PortableText value={value.content} />
      </div>
    ),
    infoCalloutBlock: ({
      value,
    }: {
      value: { title: string; content: string; type: string };
    }) => (
      <div
        className={`my-6 p-6 rounded-lg border-l-4 ${
          value.type === "warning"
            ? "bg-amber-50 border-amber-500"
            : value.type === "tip"
            ? "bg-green-50 border-green-500"
            : "bg-blue-50 border-blue-500"
        }`}
      >
        {value.title && (
          <h4 className="font-semibold mb-2">{value.title}</h4>
        )}
        <p className="text-muted-foreground">{value.content}</p>
      </div>
    ),
    keyTakeawaysBlock: ({
      value,
    }: {
      value: { title: string; takeaways: string[] };
    }) => (
      <div className="my-6 p-6 bg-primary/5 rounded-lg">
        <h4 className="font-semibold mb-4">
          {value.title || "Key Takeaways"}
        </h4>
        <ul className="space-y-2">
          {value.takeaways?.map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-4 leading-relaxed text-muted-foreground">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({
      children,
      value,
    }: {
      children?: React.ReactNode;
      value?: { href: string };
    }) => (
      <a
        href={value?.href}
        className="text-primary underline hover:no-underline"
        target={value?.href?.startsWith("http") ? "_blank" : undefined}
        rel={value?.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-muted-foreground">{children}</li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-muted-foreground">{children}</li>
    ),
  },
};

export const revalidate = 60;

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post: BlogPost | null = await client.fetch(blogPostBySlugQuery, { slug });

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author?.name || "Larissa Ray",
    },
    publisher: {
      "@type": "Organization",
      name: "LLJ Copywriting",
      url: "https://lljcopywriting.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://lljcopywriting.com/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main>
        {/* Article Header */}
        <article>
          <header className="py-12 sm:py-16 bg-gradient-to-b from-background to-muted/30">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to Blog
              </Link>

              {post.category && (
                <Badge variant="secondary" className="mb-4">
                  {post.category.name}
                </Badge>
              )}

              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>

              <p className="mt-4 text-lg text-muted-foreground">
                {post.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" aria-hidden="true" />
                  {post.author?.name || "Larissa Ray"}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <time dateTime={post.publishedAt}>
                    {formatDate(post.publishedAt)}
                  </time>
                </span>
                {post.readingTime && (
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    {post.readingTime} min read
                  </span>
                )}
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="py-12 sm:py-16">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              {post.content && (
                <div className="prose prose-lg max-w-none">
                  <PortableText
                    value={post.content}
                    components={portableTextComponents}
                  />
                </div>
              )}

              {/* FAQs */}
              {post.faqs && post.faqs.length > 0 && (
                <section className="mt-12 pt-8 border-t">
                  <h2 className="text-2xl font-bold mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    {post.faqs.map((faq, index) => (
                      <div key={index}>
                        <h3 className="font-semibold text-foreground mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-8 pt-8 border-t">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Posts */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <section className="py-12 sm:py-16 bg-muted/30">
              <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {post.relatedPosts.map((related) => (
                    <Link
                      key={related._id}
                      href={`/blog/${related.slug.current}`}
                      className="group"
                    >
                      <Card className="h-full transition-shadow hover:shadow-lg">
                        <CardHeader className="pb-2">
                          {related.category && (
                            <Badge variant="secondary" className="w-fit text-xs">
                              {related.category.name}
                            </Badge>
                          )}
                          <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                            {related.title}
                          </h3>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {related.excerpt}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </article>

        {/* CTA */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-foreground">
              Need help with your content?
            </h2>
            <p className="mt-4 text-muted-foreground">
              I help senior living communities and healthcare organizations
              create content that connects with families.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/contact">Start a Conversation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
