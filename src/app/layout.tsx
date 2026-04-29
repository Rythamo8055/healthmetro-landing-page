import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Health Metro | Connecting Health Globally",
  description: "Experience world-class healthcare connectivity with Health Metro. Connecting 330+ cities worldwide with ultra-reliable digital infrastructure for medical tourism, emergency records, and global health coordination.",
  keywords: [
    "healthcare connectivity", 
    "health metro", 
    "medical tourism", 
    "global health coordination", 
    "digital health infrastructure",
    "emergency medical records",
    "international healthcare"
  ],
  authors: [{ name: "Health Metro Team" }],
  metadataBase: new URL("https://healthmetro.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Health Metro | Connecting Health Globally",
    description: "World-class healthcare connectivity for everyone, everywhere. 330+ cities, 99.9% uptime.",
    type: "website",
    url: "/",
    siteName: "Health Metro",
    images: [{ url: "/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Metro | Connecting Health Globally",
    description: "World-class healthcare connectivity for everyone, everywhere.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

const medicalOrgSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Health Metro",
  "url": "https://healthmetro.com",
  "logo": "https://healthmetro.com/logo.png",
  "description": "Connecting Health Globally — the world's platform for international healthcare connectivity and medical coordination.",
  "sameAs": [
    "https://twitter.com/healthmetro",
    "https://linkedin.com/company/healthmetro",
    "https://en.wikipedia.org/wiki/Health_Metro"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Support",
    "telephone": "+1-800-HEALTH",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Health Metro HQ",
    "addressLocality": "Global",
    "addressCountry": "Global"
  }
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Health Metro",
  "url": "https://healthmetro.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://healthmetro.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Health Metro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Health Metro is a global healthcare connectivity platform that bridges the gap between patients and world-class specialists using ultra-reliable digital infrastructure."
      }
    },
    {
      "@type": "Question",
      "name": "How does Health Metro connect health globally?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We utilize a decentralized network of medical servers and secure data pipelines to ensure that patient records and consultations are available in 330+ cities worldwide without latency."
      }
    },
    {
      "@type": "Question",
      "name": "Is Health Metro reliable for emergency medical records?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Health Metro is built with 99.9% uptime reliability and end-to-end encryption, ensuring that emergency responders can access life-saving data instantly and securely."
      },
    },
    {
      "@type": "Question",
      "name": "Who can use Health Metro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Health Metro is designed for everyone—from individual patients and families to healthcare providers and global medical organizations seeking seamless connectivity."
      }
    }
  ]
};

const schemas = [medicalOrgSchema, webSiteSchema, faqSchema];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
