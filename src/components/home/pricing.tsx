"use client";

import { Heart, GitBranch, Shield } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const reasons = [
  {
    icon: Heart,
    title: "100% Free & Open Source",
    description: "Podex is completely free to use. No paid tiers, no feature gates — just open source under a permissive license.",
    color: "from-[#f2856d] to-[#e06b54]",
  },
  {
    icon: Shield,
    title: "Runs Locally, Stays Private",
    description: "No cloud dependency. Your cluster data never leaves your machine. Podex runs as a local daemon via Docker Compose.",
    color: "from-[#8b5cf6] to-[#7c3aed]",
  },
  {
    icon: GitBranch,
    title: "Community-Powered",
    description: "Built for learners by the community. Contributions, issues, and feedback are what make Podex better every day.",
    color: "from-emerald-500 to-emerald-600",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-bold text-3xl tracking-tight sm:text-4xl">
              Free. Open Source.{""}
              <span className="bg-gradient-to-r from-[#f2856d] via-[#8b5cf6] to-[#f39e8a] bg-clip-text text-transparent">
                {" "}Always.
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              No pricing tiers. No enterprise upsells. Just a tool that helps people learn Kubernetes.
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <StaggerItem key={reason.title}>
                <Card className="group h-full transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                  <CardHeader>
                    <div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${reason.color} text-white shadow-lg`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{reason.title}</CardTitle>
                    <CardDescription className="mt-2 text-base">
                      {reason.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <AnimatedSection className="mx-auto mt-12 text-center">
          <p className="text-muted-foreground">
            Podex is a community project.{" "}
            <a
              href="https://github.com/your-org/podex"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Star us on GitHub
            </a>{" "}
            to show your support.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
