"use client";

import { GitBranch, Container, Eye } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

const steps = [
  {
    number: "01",
    icon: GitBranch,
    title: "Clone & Run",
    description: "git clone + cd podex + docker compose up",
  },
  {
    number: "02",
    icon: Container,
    title: "Connect Cluster",
    description: "Auto-detects your local kubeconfig context",
  },
  {
    number: "03",
    icon: Eye,
    title: "Explore Visually",
    description: "Dashboard, Arena, AI Tutor  all in your browser",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-bold text-3xl tracking-tight sm:text-4xl">
              How it works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three steps from zero to exploring your cluster.
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="mx-auto mt-16 grid max-w-4xl gap-12 sm:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.number}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#f2856d] via-[#8b5cf6] to-[#f39e8a] shadow-lg shadow-primary/25">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-card text-sm font-bold text-primary shadow-md">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-semibold text-xl text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-mono text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <AnimatedSection className="mx-auto mt-12 max-w-4xl border-t border-border pt-8">
          <div className="flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            No configuration files required. Works with your existing kubeconfig.
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
