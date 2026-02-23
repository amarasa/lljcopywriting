import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const siteUrl = "https://lljcopywriting.com";
const GTM_ID = "GTM-K2686N3W";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LLJ Copywriting | Health & Senior Living Content",
    template: "%s | LLJ Copywriting",
  },
  description:
    "I help health and senior living businesses explain complex topics in ways that build trust with worried families and aging adults. Copywriting for healthcare, senior living communities, and wellness brands.",
  keywords: [
    "health copywriter",
    "senior living copywriter",
    "healthcare content writer",
    "medical copywriting",
    "senior care content",
    "patient education content",
    "healthcare marketing",
    "senior living marketing",
    "health content writer",
    "wellness copywriter",
  ],
  authors: [{ name: "Larissa Ray" }],
  creator: "Larissa Ray",
  publisher: "LLJ Copywriting, LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "LLJ Copywriting",
    title: "LLJ Copywriting | Health & Senior Living Content",
    description:
      "I help health and senior living businesses explain complex topics in ways that build trust with worried families and aging adults.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LLJ Copywriting - Health content that worried families actually understand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LLJ Copywriting | Health & Senior Living Content",
    description:
      "I help health and senior living businesses explain complex topics in ways that build trust with worried families and aging adults.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add these when available
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
