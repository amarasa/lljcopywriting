import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { client, blogPostsQuery, type BlogPost } from "@/lib/sanity";
import { Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on senior living marketing, healthcare communication, and patient education content. Practical tips for connecting with families and building trust.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | LLJ Copywriting",
    description:
      "Insights on senior living marketing, healthcare communication, and patient education content.",
    url: "https://lljcopywriting.com/blog",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "LLJ Copywriting Blog",
  description:
    "Insights on senior living marketing, healthcare communication, and patient education content.",
  url: "https://lljcopywriting.com/blog",
  author: {
    "@type": "Person",
    name: "Larissa Ray",
  },
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const revalidate = 60;

export default async function BlogPage() {
  const posts: BlogPost[] = await client.fetch(blogPostsQuery);

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
                Insights & Resources
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Practical advice for senior living communities and healthcare
                organizations looking to connect with families through better
                content.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  New articles coming soon. Check back shortly!
                </p>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <article key={post._id}>
                    <Link
                      href={`/blog/${post.slug.current}`}
                      className="group block h-full"
                    >
                      <Card className="h-full transition-shadow hover:shadow-lg">
                        <CardHeader className="pb-3">
                          {post.categories && post.categories.length > 0 && (
                            <Badge
                              variant="secondary"
                              className="w-fit mb-2 text-xs"
                            >
                              {post.categories[0].title}
                            </Badge>
                          )}
                          <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h2>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar
                                className="h-3.5 w-3.5"
                                aria-hidden="true"
                              />
                              <time dateTime={post.publishedAt}>
                                {formatDate(post.publishedAt)}
                              </time>
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
