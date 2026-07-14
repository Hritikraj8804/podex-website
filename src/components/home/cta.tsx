"use client";

import { Terminal } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/animated-section";

export function CTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-[#f2856d]/10 via-[#8b5cf6]/10 to-[#f39e8a]/10 px-6 py-16 text-center backdrop-blur-sm sm:px-12 sm:py-20">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#f2856d]/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#8b5cf6]/20 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="font-bold text-3xl tracking-tight sm:text-4xl lg:text-5xl">
                Ready to explore your{" "}
                <span className="bg-gradient-to-r from-[#f2856d] via-[#8b5cf6] to-[#f39e8a] bg-clip-text text-transparent">
                  cluster visually
                </span>
                ?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
                Free, open source, and runs entirely on your machine.
                No data leaves your cluster. Start in minutes.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/download"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md active:scale-[0.98]"
                >
                  <Terminal className="h-4 w-4" />
                  Get Started
                </Link>
                <a
                  href="https://github.com/your-org/podex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-background px-8 text-base font-medium transition-all hover:bg-secondary hover:text-secondary-foreground"
                >
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
