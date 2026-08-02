import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://humanresetlab.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Human Reset Lab | Evidence-Based Wellness for Nonprofits",
    template: "%s | Human Reset Lab",
  },
  description:
    "Human Reset Lab is a nonprofit digital wellness platform offering evidence-based programmes to help individuals and communities reset, recharge, and thrive.",
  keywords: [
    "wellness",
    "nonprofit",
    "mental health",
    "evidence-based",
    "human reset",
    "community health",
  ],
  authors: [{ name: "Human Reset Lab", url: siteUrl }],
  creator: "Human Reset Lab",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Human Reset Lab",
    title: "Human Reset Lab | Evidence-Based Wellness for Nonprofits",
    description:
      "A nonprofit digital wellness platform helping individuals and communities reset, recharge, and thrive.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Human Reset Lab | Evidence-Based Wellness",
    description:
      "A nonprofit digital wellness platform helping individuals and communities reset, recharge, and thrive.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-dvh flex-col antialiased">
        {/* Accessibility: skip to main content */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Header />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
