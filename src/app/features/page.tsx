import type { Metadata } from "next";
import {
  LayoutDashboard,
  Puzzle,
  Bot,
  Terminal,
  GitBranch,
  Search,
  Palette,
  Cpu,
  Workflow,
} from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-section";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Podex's features — visual dashboard, drag-and-drop Arena playground, AI tutor, live debugging, and topology view.",
};

const featureCategories = [
  {
    name: "Explore",
    description: "Visual tools for understanding your cluster at a glance.",
    color: "from-[#f2856d]/10 to-[#f2856d]/5 text-[#f2856d]",
    features: [
      {
        icon: LayoutDashboard,
        title: "Visual Dashboard",
        description:
          "Real-time health donut chart showing running vs failed workloads. Metrics counters for Nodes, Pods, Deployments, and Services with auto-refresh.",
      },
      {
        icon: Search,
        title: "Cluster Explorer",
        description:
          "Interactive table views for Pods, Deployments, and Services. Filter by namespace, search by name, and inspect manifests with a single click.",
      },
      {
        icon: GitBranch,
        title: "Topology View",
        description:
          "Dynamic SVG map showing relationships between Ingress rules, Services, Deployments, and Pods. Drag to reposition, zoom, pan, and filter.",
      },
    ],
  },
  {
    name: "Design",
    description: "Build Kubernetes architectures visually, not with YAML.",
    color: "from-[#8b5cf6]/10 to-[#8b5cf6]/5 text-[#8b5cf6]",
    features: [
      {
        icon: Puzzle,
        title: "Arena Playground",
        description:
          "Drag-and-drop React Flow canvas. Wire together Pods, Services, Deployments, ConfigMaps, and Secrets. Draw connections, auto-generate valid YAML, and apply directly to your cluster.",
      },
      {
        icon: Workflow,
        title: "Visual YAML Generation",
        description:
          "Every visual design in the Arena produces clean, production-ready YAML. No more indentation errors — just drag, connect, and deploy.",
      },
      {
        icon: Cpu,
        title: "Canvas Templates",
        description:
          "Start from pre-built architecture templates or a blank canvas. Onboarding overlay guides first-time users with 'Start with Empty Arena'.",
      },
    ],
  },
  {
    name: "Debug",
    description: "Real-time tools for diagnosing cluster issues.",
    color: "from-emerald-500/10 to-emerald-500/5 text-emerald-500",
    features: [
      {
        icon: Terminal,
        title: "Live Log Streaming (SSE)",
        description:
          "Stream container stdout/stderr in real time via Server-Sent Events. Automatic reconnection, configurable tail limits, line wrap toggle, and timestamp display.",
      },
      {
        icon: Terminal,
        title: "Interactive Terminal (WebSocket)",
        description:
          "Exec into any container directly from your browser. Full terminal emulation over WebSocket — run /bin/sh, debug tools, or inspect files.",
      },
      {
        icon: Bot,
        title: "AI Troubleshooter",
        description:
          "One-click diagnosis: Podex fetches pod status, events, and logs, then sends structured context to an LLM. Returns root cause, evidence list, and suggested fix with a beginner-friendly analogy.",
      },
    ],
  },
  {
    name: "Learn",
    description: "Built-in tools for Kubernetes education.",
    color: "from-cyan-500/10 to-cyan-500/5 text-cyan-500",
    features: [
      {
        icon: Bot,
        title: "AI Concept Tutor",
        description:
          "Ask 'What is a Service?' and get clear explanations with real-world analogies, common gotchas, and context drawn from your live cluster.",
      },
      {
        icon: Palette,
        title: "Customizable UI",
        description:
          "Dark mode by default with a YunoHost-inspired navy palette and peach (#f2856d) accent. Six accent colors to choose from, including cyan, violet, emerald, and amber.",
      },
      {
        icon: Cpu,
        title: "Mock AI Providers",
        description:
          "Built-in sandbox AI providers work offline without API keys. Perfect for learning environments, classrooms, and areas with limited connectivity.",
      },
    ],
  },
];

const iconBgColors: Record<string, string> = {
  Explore: "bg-[#f2856d]/10 text-[#f2856d]",
  Design: "bg-[#8b5cf6]/10 text-[#8b5cf6]",
  Debug: "bg-emerald-500/10 text-emerald-500",
  Learn: "bg-cyan-500/10 text-cyan-500",
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-border px-4 py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-gradient-start/5 via-transparent to-gradient-end/5" />
        <div className="relative mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Features
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Everything you need to{" "}
              <span className="text-gradient">learn Kubernetes</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Podex replaces terminal anxiety with visual tools. Explore, design, debug, and learn —
              all from your browser.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {featureCategories.map((category, catIdx) => (
        <section
          key={category.name}
          id={category.name.toLowerCase()}
          className="border-b border-border px-4 py-20"
        >
          <div className="mx-auto max-w-6xl">
            <AnimatedSection>
              <div className="mb-12">
                <span
                  className={`inline-block rounded-full bg-gradient-to-r px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ${category.color}`}
                >
                  {category.name}
                </span>
                <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
                  {category.name}
                </h2>
                <p className="mt-2 max-w-xl text-muted-foreground">{category.description}</p>
              </div>
            </AnimatedSection>

            <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <StaggerItem key={feature.title}>
                    <div className="group relative h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                      <div
                        className={`mb-4 inline-flex rounded-lg p-2.5 ${iconBgColors[category.name] ?? "bg-muted text-muted-foreground"}`}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>
      ))}

      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              And there&apos;s more to come
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Podex is under active development. Multi-context support, CRD exploration,
              Prometheus charting, and Helm deployment are on the roadmap.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
