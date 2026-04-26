import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Health Metro | Connecting Health Globally",
  description: "Experience world-class healthcare connectivity with Health Metro. Heavily optimized for mobile, accessible for all ages, and powered by advanced medical technology.",
  keywords: ["healthcare", "health metro", "medical connectivity", "global health", "digital health"],
  authors: [{ name: "Health Metro Team" }],
  openGraph: {
    title: "Health Metro | Connecting Health Globally",
    description: "World-class healthcare connectivity for everyone, everywhere.",
    type: "website",
    url: "https://healthmetro.com",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Metro | Connecting Health Globally",
    description: "World-class healthcare connectivity for everyone, everywhere.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Health Metro",
              "url": "https://healthmetro.com",
              "logo": "https://healthmetro.com/logo.png",
              "description": "Connecting Health Globally with ultra-reliable digital infrastructure.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Health Metro HQ",
                "addressLocality": "Global",
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-HEALTH",
                "contactType": "customer service"
              }
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
