import { createClient } from "@sanity/client";
import { sanityConfig } from "./config";

export const client = createClient({
  ...sanityConfig,
  perspective: "published",
});

export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false,
  perspective: "previewDrafts",
});
