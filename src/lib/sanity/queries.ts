import { groq } from "next-sanity";

// Larissa Ray's author ID - only show her posts on this site
const AUTHOR_ID = "a3af9557-2209-47f7-962b-afbd7689a883";

export const blogPostsQuery = groq`
  *[_type == "blogPost" && status == "published" && author._ref == "${AUTHOR_ID}"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readingTime,
    headerStyle,
    "author": author->{
      name,
      slug,
      image,
      role
    },
    "category": category->{
      name,
      slug,
      color
    },
    tags
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    publishedAt,
    updatedAt,
    readingTime,
    headerStyle,
    tableOfContents,
    faqs,
    seo,
    "author": author->{
      name,
      slug,
      image,
      role,
      bio,
      socialLinks
    },
    "category": category->{
      name,
      slug,
      color
    },
    tags,
    "relatedPosts": relatedPosts[]->{
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      "category": category->{
        name,
        slug,
        color
      }
    }
  }
`;

export const blogPostSlugsQuery = groq`
  *[_type == "blogPost" && status == "published" && author._ref == "${AUTHOR_ID}"] {
    "slug": slug.current
  }
`;

export const categoriesQuery = groq`
  *[_type == "category"] | order(order asc) {
    _id,
    name,
    slug,
    description,
    color,
    icon
  }
`;
