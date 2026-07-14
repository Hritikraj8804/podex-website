"use client";

import { LayoutDashboard, Puzzle, Bot, Terminal, GitBranch, Search } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: LayoutDashboard,
    title: "Visual Dashboard",
    description: "Real-time cluster health donut, metrics counters, and namespace filtering at a glance.",
    color: "from-[#f2856d] to-[#e06b54]",
  },
  {
    icon: Puzzle,
    title: "Arena Playground",
    description: "Drag-and-drop canvas to wire K8s blocks together and auto-generate valid YAML manifests.",
    color: "from-[#8b5cf6] to-[#7c3aed]",
  },
  {
    icon: Bot,
    title: "AI Concept Tutor",
    description: "Ask 'What is a Service?' and get real-world analogies plus crash-loop diagnosis with fix suggestions.",
    color: "from-[#f39e8a] to-[#f2856d]",
  },
  {
    icon: Terminal,
    title: "Live Debugging",
    description: "SSE log streaming and WebSocket-powered interactive terminal shells inside any container.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: GitBranch,
    title: "Topology View",
    description: "Dynamic SVG map showing relationships between Ingress, Services, Deployments, and Pods.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Search,
    title: "Cluster Explorer",
    description: "Browse Pods, Deployments, and Services with inline scale, restart, and delete controls.",
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
              <span className="bg-gradient-to-r from-[#f2856d] via-[#8b5cf6] to-[#f39e8a] bg-clip-text text-transparent">
                master Kubernetes
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Visual tools that make cluster management intuitive, interactive, and beginner-friendly.
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={feature.title}>
                <Card className="group h-full transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
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
