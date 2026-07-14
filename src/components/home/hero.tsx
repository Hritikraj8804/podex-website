"use client";

import { motion, type Variants } from "framer-motion";
import { Download, ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { AnimatedBackground } from "@/components/illustrations/animated-background";
import { PodsMockup } from "@/components/illustrations/app-mockups";

const stats = [
  { value: "10K+", label: "Downloads" },
  { value: "4.9/5", label: "Rating" },
  { value: "100%", label: "Open Source" },
];

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
              Now available for Windows, macOS & Linux
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-bold text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              Kubernetes, without the{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                complexity
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              Podex is the desktop browser for Kubernetes. Explore clusters,
              manage pods, stream logs, and deploy apps — all from a beautiful,
              intuitive interface.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link href="/download" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md active:scale-[0.98]">
                <Download className="h-4 w-4" />
                Download Free
              </Link>
              <Link href="/docs" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-background px-8 text-base font-medium transition-all hover:bg-secondary hover:text-secondary-foreground">
                View Docs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-10 flex items-center gap-2 text-sm text-muted-foreground"
            >
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20">
                <Play className="h-4 w-4" />
              </button>
              <span>Watch the 2-minute demo</span>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={5}
              className="mt-12 grid grid-cols-3 gap-8 border-t border-border pt-8"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-bold text-2xl text-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl" />
            <div className="relative rounded-2xl border border-border/50 bg-card/80 p-2 shadow-2xl backdrop-blur-sm">
              <PodsMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
