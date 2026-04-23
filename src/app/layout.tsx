import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#06080a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://apex-experts.com"),
  title: {
    default: "APEX Experts AI Solutions — Premium AI Engineering",
    template: "%s | APEX Experts AI Solutions",
  },
  description:
    "APEX Experts AI Solutions engineers production-grade artificial intelligence systems. We design, build, and deploy enterprise AI architecture with technical precision.",
  keywords: [
    "AI solutions",
    "artificial intelligence",
    "enterprise AI",
    "machine learning engineering",
    "AI architecture",
  ],
  openGraph: {
    title: "APEX Experts AI Solutions",
    description:
      "Engineering production-grade AI systems for forward-thinking enterprises.",
    url: "https://apex-experts.com",
    siteName: "APEX Experts AI Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "APEX Experts AI Solutions",
    description:
      "Engineering production-grade AI systems for forward-thinking enterprises.",
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
  alternates: {
    canonical: "https://apex-experts.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-background focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
