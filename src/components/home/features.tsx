"use client";

import { Eye, Box, FileText, Terminal, Rocket, Layers } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: Eye,
    title: "Cluster Browser",
    description:
      "Visual cluster exploration with real-time updates",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Box,
    title: "Pod Explorer",
    description:
      "Browse, search, and manage pods across all namespaces",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: FileText,
    title: "Live Logs",
    description:
      "Stream and search container logs in real time",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Terminal,
    title: "Built-in Terminal",
    description:
      "Exec into any pod without leaving the app",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Rocket,
    title: "Deploy Apps",
    description:
      "Deploy applications with a visual editor or paste YAML",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Layers,
    title: "Resource Viewer",
    description:
      "Monitor deployments, services, and resource usage",
    color: "from-amber-500 to-amber-600",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-bold text-3xl tracking-tight sm:text-4xl">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                manage Kubernetes
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A powerful suite of tools that makes working with Kubernetes
              intuitive, fast, and enjoyable.
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={feature.title}>
                <Card className="group h-full transition-colors hover:border-primary/50">
                  <CardHeader>
                    <div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
