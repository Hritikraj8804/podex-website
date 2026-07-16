import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CommandPalette } from "@/components/command-palette";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Podex  Your Visual Kubernetes Playground",
    template: "%s | Podex",
  },
  description:
    "Podex is a visual Kubernetes cluster examiner and interactive playground. Explore clusters, design architectures with drag-and-drop, stream logs, and learn K8s  all from your browser. Zero config, just docker compose up.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  keywords: [
    "Kubernetes",
    "K8s",
    "container orchestration",
    "visual kubernetes",
    "kubectl alternative",
    "kubernetes playground",
    "DevOps learning",
    "kubernetes for beginners",
    "cluster management",
    "K8s UI",
    "kubernetes visualizer",
    "learn kubernetes",
  ],
  authors: [{ name: "Podex" }],
  creator: "Podex",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://podex.in",
    siteName: "Podex",
    title: "Podex  Your Visual Kubernetes Playground",
    description:
      "Explore clusters, design architectures with drag-and-drop, stream logs, and learn K8s  all from your browser with Podex.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Podex  Visual Kubernetes Playground",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Podex  Your Visual Kubernetes Playground",
    description:
      "Explore clusters, design architectures with drag-and-drop, stream logs, and learn K8s  all from your browser.",
    images: ["/og-image.png"],
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider>
          <Navbar />
          <CommandPalette />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
