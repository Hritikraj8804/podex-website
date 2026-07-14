"use client";

import { motion, type Variants } from "framer-motion";
import { Terminal, ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimatedBackground } from "@/components/illustrations/animated-background";
import { DashboardMockup } from "@/components/illustrations/app-mockups";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Visual Kubernetes Playground
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-bold text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              Your Kubernetes{" "}
              <span className="bg-gradient-to-r from-[#f2856d] via-[#8b5cf6] to-[#f39e8a] bg-clip-text text-transparent">
                Visual Playground
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              Podex transforms your terminal into a drag-and-drop playground
              with live debugging, AI tutoring, and visual cluster management.
              Zero config — just{" "}
              <code className="rounded bg-primary/10 px-1.5 py-0.5 font-mono text-sm text-primary">
                docker compose up
              </code>
              .
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/download"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md active:scale-[0.98]"
              >
                <Terminal className="h-4 w-4" />
                Get Started
              </Link>
              <Link
                href="/docs"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-background px-8 text-base font-medium transition-all hover:bg-secondary hover:text-secondary-foreground"
              >
                View Docs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>


          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-[#f2856d]/20 via-[#8b5cf6]/20 to-[#f39e8a]/20 blur-3xl" />
            <div className="relative rounded-2xl border border-border/50 bg-card/80 p-2 shadow-2xl backdrop-blur-sm">
              <DashboardMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


