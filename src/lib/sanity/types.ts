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

export interface Category {
  _id?: string;
  title: string;
  slug: { current: string };
  description?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PortableTextContent = any[];

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  body?: PortableTextContent;
  featuredImage?: SanityImage;
  publishedAt: string;
  categories?: Category[];
  status: "draft" | "published";
  seoTitle?: string;
  seoDescription?: string;
}
