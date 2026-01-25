import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  client,
  blogPostBySlugQuery,
  blogPostSlugsQuery,
  type BlogPost,
} from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { Calendar, ArrowLeft, User } from "lucide-react";

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

  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | LLJ Copywriting`,
      description,
      url: `https://lljcopywriting.com/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Larissa Ray"],
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
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-lg font-semibold mt-4 mb-2">{children}</h4>
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
    em: ({ children }: { children?: React.ReactNode }) => (
      <em>{children}</em>
    ),
    underline: ({ children }: { children?: React.ReactNode }) => (
      <span className="underline">{children}</span>
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
    author: {
      "@type": "Person",
      name: "Larissa Ray",
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

              {post.categories && post.categories.length > 0 && (
                <div className="flex gap-2 mb-4">
                  {post.categories.map((cat) => (
                    <Badge key={cat._id} variant="secondary">
                      {cat.title}
                    </Badge>
                  ))}
                </div>
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
                  Larissa Ray
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <time dateTime={post.publishedAt}>
                    {formatDate(post.publishedAt)}
                  </time>
                </span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="py-12 sm:py-16">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              {post.body && (
                <div className="prose prose-lg max-w-none">
                  <PortableText
                    value={post.body}
                    components={portableTextComponents}
                  />
                </div>
              )}
            </div>
          </div>
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
