import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CommandPalette } from "@/components/command-palette";
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
    default: "Podex - Kubernetes, Without the Complexity",
    template: "%s | Podex",
  },
  description:
    "Podex is the desktop browser for Kubernetes. Explore clusters, manage pods, stream logs, and deploy applications with a visual interface. No more YAML headaches.",
  keywords: [
    "Kubernetes",
    "K8s",
    "container orchestration",
    "desktop app",
    "pod browser",
    "cluster management",
    "DevOps",
    "kubernetes UI",
    "kubernetes browser",
  ],
  authors: [{ name: "Podex" }],
  creator: "Podex",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://podex.dev",
    siteName: "Podex",
    title: "Podex - Kubernetes, Without the Complexity",
    description:
      "The desktop browser for Kubernetes. Explore clusters, manage pods, stream logs, and deploy applications with a visual interface.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Podex - Kubernetes Desktop Browser",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Podex - Kubernetes, Without the Complexity",
    description:
      "The desktop browser for Kubernetes. Explore clusters, manage pods, stream logs, and deploy applications.",
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
        </ThemeProvider>
      </body>
    </html>
  );
}
