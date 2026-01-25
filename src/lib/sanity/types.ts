export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface Author {
  _id?: string;
  name: string;
  slug: { current: string };
  image?: SanityImage;
  role?: string;
  bio?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
  };
}

export interface Category {
  _id?: string;
  name: string;
  slug: { current: string };
  description?: string;
  color?: string;
  icon?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PortableTextContent = any[];

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  content?: PortableTextContent;
  publishedAt: string;
  updatedAt?: string;
  readingTime?: number;
  headerStyle?: string;
  tableOfContents?: boolean;
  author: Author;
  category: Category;
  tags?: string[];
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogImage?: SanityImage;
  };
  relatedPosts?: BlogPost[];
}
