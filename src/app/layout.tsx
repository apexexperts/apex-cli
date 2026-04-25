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

export const dynamic = "force-dynamic";

export const viewport: Viewport = {
  themeColor: "#06080a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://apexexperts.net"),
  title: {
    default:
      "APEX Experts AI Solutions | AI Systems, Oracle APEX & Custom Software",
    template: "%s | APEX Experts AI Solutions",
  },
  description:
    "APEX Experts AI Solutions builds practical AI systems, Oracle APEX applications, business dashboards, automation workflows, and custom web and mobile software for real business operations.",
  keywords: [
    "APEX Experts AI Solutions",
    "Oracle APEX development",
    "Oracle APEX AI",
    "AI software development",
    "custom AI solutions",
    "business automation",
    "AI dashboards",
    "natural language analytics",
    "Oracle database reporting",
    "web development company",
    "mobile app development",
    "enterprise software development",
  ],
  openGraph: {
    title:
      "APEX Experts AI Solutions | AI Systems, Oracle APEX & Custom Software",
    description:
      "We build practical AI systems, Oracle APEX solutions, dashboards, automation workflows, and custom software for companies that need technology they can actually use.",
    url: "https://apexexperts.net",
    siteName: "APEX Experts AI Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title:
      "APEX Experts AI Solutions | AI Systems, Oracle APEX & Custom Software",
    description:
      "Practical AI systems, Oracle APEX applications, dashboards, automation, and custom software built for real business use.",
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
    canonical: "https://apexexperts.net",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/images/logo-dark.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
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
        <main id="main-content" className="min-h-screen relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
