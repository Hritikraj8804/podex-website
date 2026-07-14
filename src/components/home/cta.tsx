"use client";

import { Download } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/animated-section";

export function CTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 px-6 py-16 text-center backdrop-blur-sm sm:px-12 sm:py-20">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="font-bold text-3xl tracking-tight sm:text-4xl lg:text-5xl">
                Ready to simplify{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Kubernetes
                </span>
                ?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
                Join thousands of engineers who manage their clusters with Podex.
                Free to use, open source, and available on all platforms.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/download" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md active:scale-[0.98]">
                  <Download className="h-4 w-4" />
                  Download Free
                </Link>
                <a href="https://github.com/podex" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-background px-8 text-base font-medium transition-all hover:bg-secondary hover:text-secondary-foreground">
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
