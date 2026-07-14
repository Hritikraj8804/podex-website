import type { Metadata } from "next";
import {
  Target,
  Eye,
  BookOpen,
  Heart,
  Calendar,
  Users,
  GitBranch,
  Rocket,
  Puzzle,
  Sparkles,
  Shield,
  Globe,
} from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Podex — our mission to make Kubernetes accessible to every developer, our open-source philosophy, and the team behind the project.",
};

const roadmap = [
  {
    version: "v1.0",
    title: "Extensibility & Intelligence",
    date: "Q3 2026",
    icon: Rocket,
    items: ["Plugin System with public API", "AI Assistant for cluster diagnostics", "Multi-language support (i18n)"],
  },
  {
    version: "v1.5",
    title: "Team Collaboration",
    date: "Q1 2027",
    icon: Users,
    items: ["Team Workspaces with shared configs", "RBAC integration for enterprise clusters", "Audit logging for compliance"],
  },
  {
    version: "v2.0",
    title: "Automation & Scale",
    date: "Q3 2027",
    icon: Globe,
    items: ["Cluster Templates for rapid onboarding", "GitOps workflow integration", "Multi-cluster orchestration views"],
  },
];

const team = [
  {
    name: "Alex Chen",
    role: "Creator & Lead Developer",
    bio: "Full-stack engineer passionate about developer tools. Previously built internal platforms at a Fortune 500 company.",
  },
  {
    name: "Sam Rivera",
    role: "Core Maintainer",
    bio: "Kubernetes contributor and distributed systems enthusiast. Focused on performance and reliability.",
  },
  {
    name: "Jordan Kim",
    role: "UX & Design",
    bio: "Designer obsessed with making complex systems feel simple. Advocates for accessibility in developer tools.",
  },
  {
    name: "Taylor Patel",
    role: "Documentation & Community",
    bio: "Technical writer and open-source community builder. Ensures Podex is welcoming to contributors of all experience levels.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-border px-4 py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-gradient-start/5 via-transparent to-gradient-end/5" />
        <div className="relative mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              About
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              About <span className="text-gradient">Podex</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We&apos;re building the Kubernetes desktop browser we always wished existed &mdash;
              visual, fast, and a pleasure to use.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <Target className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  To make Kubernetes accessible to every developer. We believe that container
                  orchestration shouldn&apos;t require a steep learning curve or constant reliance on
                  the command line for basic tasks.
                </p>
              </div>
              <div>
                <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                  <Eye className="h-6 w-6 text-accent" aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  A world where cluster management is visual, intuitive, and delightful. Where
                  developers spend their time building products, not wrestling with YAML manifests
                  and debugging opaque error messages.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
              <BookOpen className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Our Story</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We noticed that developers who were comfortable with Docker Desktop found Kubernetes
                intimidating. The terminal-centric workflow, the YAML complexity, the lack of visual
                feedback &mdash; all of these created unnecessary friction.
              </p>
              <p>
                Podex was born from a simple question: <em>what if managing Kubernetes felt as easy
                as using Docker Desktop?</em>
              </p>
              <p>
                We started with a focused set of features &mdash; browsing pods, streaming logs,
                opening a terminal &mdash; and built outward from there. Every feature is designed to
                save a developer a trip to the command line without hiding the power of Kubernetes
                underneath.
              </p>
              <p>
                Today Podex is a growing open-source project used by developers and platform teams
                who want a fast, visual way to interact with their clusters. We&apos;re still early,
                but the feedback has been incredible and the roadmap is ambitious.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Why Podex</h2>
            <p className="mt-3 text-muted-foreground">
              The tools that exist today force a trade-off between simplicity and power. Podex
              refuses to compromise.
            </p>
          </AnimatedSection>
          <StaggerContainer className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Globe,
                title: "Visual by Default",
                description:
                  "See your cluster state at a glance instead of parsing terminal output. Every resource has a clear, scannable layout.",
              },
              {
                icon: Shield,
                title: "Safe Operations",
                description:
                  "Destructive actions require confirmation. Rollbacks are one click away. You never have to worry about running the wrong kubectl command.",
              },
              {
                icon: Puzzle,
                title: "Extensible Architecture",
                description:
                  "A plugin system lets the community extend Podex with custom resource viewers, integrations, and workflows.",
              },
              {
                icon: Sparkles,
                title: "Zero Configuration",
                description:
                  "Podex reads your existing kubeconfig and works immediately. No servers to install, no databases to manage, no Docker required.",
              },
              {
                icon: Heart,
                title: "Open Source",
                description:
                  "Fully open source under a permissive license. Inspect the code, contribute features, or fork it for your own needs.",
              },
              {
                icon: GitBranch,
                title: "Fast Release Cycle",
                description:
                  "Releases ship every two to three weeks with clear changelogs. Critical fixes are pushed as soon as they're ready.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <div className="h-full rounded-xl border border-border bg-card p-6">
                    <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2">
                      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
              <Calendar className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Roadmap</h2>
            <p className="mt-3 text-muted-foreground">
              Where Podex is headed. Priorities shift based on community feedback, so these dates
              are estimates, not promises.
            </p>
          </AnimatedSection>
          <div className="mt-10 space-y-8">
            {roadmap.map((milestone, idx) => {
              const Icon = milestone.icon;
              return (
                <AnimatedSection key={milestone.version} delay={idx * 0.1}>
                  <div className="rounded-xl border border-border bg-card p-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="inline-flex rounded-lg bg-primary/10 p-2">
                        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="font-bold text-foreground">{milestone.version}</span>
                        <span className="ml-2 text-sm text-muted-foreground">
                          &mdash; {milestone.title}
                        </span>
                      </div>
                      <span className="ml-auto rounded-full bg-surface-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                        {milestone.date}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {milestone.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="mb-4 inline-flex rounded-lg bg-emerald/10 p-3">
              <Heart className="h-6 w-6 text-emerald" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Open Source</h2>
            <div className="mt-4 max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Podex is built in the open. Every decision, every design trade-off, and every feature
                discussion happens in public. We believe transparency builds trust and produces
                better software.
              </p>
              <p>
                We welcome contributions from developers of all experience levels. Whether it&apos;s a
                bug report, a documentation improvement, or a new feature &mdash; your input makes
                Podex better for everyone.
              </p>
              <p>
                Licensed under the MIT License, Podex is free to use, modify, and distribute. No
                strings attached.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">The Team</h2>
            <p className="mt-3 text-muted-foreground">
              A small, focused team building the Kubernetes browser we all deserve.
            </p>
          </AnimatedSection>
          <StaggerContainer className="mt-10 grid gap-6 sm:grid-cols-2">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gradient-start to-gradient-end text-lg font-bold text-white">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
