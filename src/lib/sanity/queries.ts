import { groq } from "next-sanity";

export const blogPostsQuery = groq`
  *[_type == "blogPost" && status == "published"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    featuredImage,
    "categories": categories[]->{
      _id,
      title,
      slug
    },
    status
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    body,
    featuredImage,
    publishedAt,
    "categories": categories[]->{
      _id,
      title,
      slug
    },
    status,
    seoTitle,
    seoDescription
  }
`;

export const blogPostSlugsQuery = groq`
  *[_type == "blogPost" && status == "published"] {
    "slug": slug.current
  }
`;

export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description
  }
`;
