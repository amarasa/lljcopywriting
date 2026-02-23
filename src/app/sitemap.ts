import { MetadataRoute } from "next";
import { client, blogPostSlugsQuery } from "@/lib/sanity";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://lljcopywriting.com";

  // Fetch blog post slugs and dates from Sanity
  const blogPosts = await client.fetch<
    { slug: string; publishedAt: string; _updatedAt: string }[]
  >(blogPostSlugsQuery);

  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post._updatedAt || post.publishedAt),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Use the most recent blog post date for the blog listing page
  const latestPostDate = blogPosts.length > 0
    ? new Date(
        Math.max(...blogPosts.map((p) => new Date(p._updatedAt || p.publishedAt).getTime()))
      )
    : new Date();

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: latestPostDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...blogUrls,
  ];
}
