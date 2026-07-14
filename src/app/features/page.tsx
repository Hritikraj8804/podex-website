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
  Eye,
  Shield,
  Zap,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/animated-section";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Podex's features  visual dashboard, drag-and-drop Arena playground, AI tutor, live debugging, and topology view.",
};

const featureCategories = [
  {
    name: "Explore",
    tagline: "See your cluster like never before",
    description: "Visual tools for understanding your cluster at a glance.",
    gradient: "from-[#f2856d] to-[#e06b54]",
    features: [
      {
        icon: LayoutDashboard,
        title: "Visual Dashboard",
        description:
          "Real-time health donut chart showing running vs failed workloads. Metrics counters for Nodes, Pods, Deployments, and Services with auto-refresh.",
        highlights: ["Health donut chart", "Auto-refresh metrics", "Namespace scope"],
      },
      {
        icon: Search,
        title: "Cluster Explorer",
        description:
          "Interactive table views for Pods, Deployments, and Services. Filter by namespace, search by name, and inspect manifests with a single click.",
        highlights: ["Multi-resource tables", "Inline actions", "YAML inspector"],
      },
      {
        icon: GitBranch,
        title: "Topology View",
        description:
          "Dynamic SVG map showing relationships between Ingress rules, Services, Deployments, and Pods. Drag to reposition, zoom, pan, and filter.",
        highlights: ["SVG relationship map", "Drag & reposition", "Smart filtering"],
      },
    ],
  },
  {
    name: "Design",
    tagline: "Build architectures visually",
    description: "Build Kubernetes architectures visually, not with YAML.",
    gradient: "from-[#8b5cf6] to-[#7c3aed]",
    features: [
      {
        icon: Puzzle,
        title: "Arena Playground",
        description:
          "Drag-and-drop React Flow canvas. Wire together Pods, Services, Deployments, ConfigMaps, and Secrets. Draw connections, auto-generate valid YAML.",
        highlights: ["Visual drag & drop", "Auto YAML output", "Live cluster apply"],
      },
      {
        icon: Workflow,
        title: "Visual YAML Generation",
        description:
          "Every visual design in the Arena produces clean, production-ready YAML. No more indentation errors.",
        highlights: ["Zero YAML typing", "Validated output", "Template library"],
      },
      {
        icon: Cpu,
        title: "Canvas Templates",
        description:
          "Start from pre-built architecture templates or a blank canvas. Onboarding overlay guides first-time users.",
        highlights: ["Pre-built templates", "Blank canvas", "Onboarding guide"],
      },
    ],
  },
  {
    name: "Debug",
    tagline: "Diagnose issues in real time",
    description: "Real-time tools for diagnosing cluster issues.",
    gradient: "from-emerald-500 to-emerald-600",
    features: [
      {
        icon: Terminal,
        title: "Live Log Streaming",
        description:
          "Stream container stdout/stderr in real time via Server-Sent Events. Automatic reconnection, configurable tail limits, line wrap toggle.",
        highlights: ["SSE streaming", "Auto reconnect", "Configurable limits"],
      },
      {
        icon: Terminal,
        title: "Interactive Terminal",
        description:
          "Exec into any container directly from your browser. Full terminal emulation over WebSocket.",
        highlights: ["WebSocket shell", "Multi-container", "Full PTY"],
      },
      {
        icon: Bot,
        title: "AI Troubleshooter",
        description:
          "One-click diagnosis: fetches pod status, events, and logs, sends structured context to an LLM. Returns root cause, evidence list, and fix.",
        highlights: ["AI diagnosis", "Evidence list", "Fix suggestions"],
      },
    ],
  },
  {
    name: "Learn",
    tagline: "Master Kubernetes faster",
    description: "Built-in tools for Kubernetes education.",
    gradient: "from-cyan-500 to-cyan-600",
    features: [
      {
        icon: Bot,
        title: "AI Concept Tutor",
        description:
          "Ask 'What is a Service?' and get clear explanations with real-world analogies, common gotchas, and context from your live cluster.",
        highlights: ["Live analogies", "Concept library", "Cluster-aware"],
      },
      {
        icon: Palette,
        title: "Customizable UI",
        description:
          "Dark mode by default with YunoHost-inspired navy palette and peach accent. Six accent colors to choose from.",
        highlights: ["6 accent colors", "Dark/Light modes", "Peach signature"],
      },
      {
        icon: Cpu,
        title: "Mock AI Providers",
        description:
          "Built-in sandbox AI providers work offline without API keys. Perfect for learning environments and classrooms.",
        highlights: ["Offline ready", "No API keys needed", "Sandbox mode"],
      },
    ],
  },
];

const comparisons = [
  {
    feature: "Setup time",
    Podex: "~2 min (docker compose up)",
    Kubectl: "Already installed",
    Lens: "~5 min (download + install)",
    K9s: "~3 min (brew install)",
    Octant: "Deprecated",
  },
  {
    feature: "Visual cluster map",
    Podex: "✅ Live topology SVG",
    Kubectl: "❌ CLI only",
    Lens: "✅ Limited",
    K9s: "❌ TUI only",
    Octant: "✅ Resource viewer",
  },
  {
    feature: "Drag & drop design",
    Podex: "✅ Arena playground",
    Kubectl: "❌",
    Lens: "❌",
    K9s: "❌",
    Octant: "❌",
  },
  {
    feature: "AI troubleshooting",
    Podex: "✅ Gemini + OpenAI + Mock",
    Kubectl: "❌",
    Lens: "❌",
    K9s: "❌",
    Octant: "❌",
  },
  {
    feature: "AI concept tutor",
    Podex: "✅ Built-in",
    Kubectl: "❌",
    Lens: "❌",
    K9s: "❌",
    Octant: "❌",
  },
  {
    feature: "Live log streaming",
    Podex: "✅ SSE with auto-reconnect",
    Kubectl: "✅ kubectl logs -f",
    Lens: "✅ Built-in",
    K9s: "✅ Built-in",
    Octant: "✅ Built-in",
  },
  {
    feature: "Interactive terminal",
    Podex: "✅ WebSocket shell",
    Kubectl: "✅ kubectl exec",
    Lens: "✅ Built-in",
    K9s: "✅ Built-in",
    Octant: "❌",
  },
  {
    feature: "Browser-based",
    Podex: "✅ Runs in browser",
    Kubectl: "✅ Terminal",
    Lens: "❌ Desktop app",
    K9s: "❌ Terminal TUI",
    Octant: "❌ Desktop app",
  },
  {
    feature: "Runs on any OS",
    Podex: "✅ Docker required",
    Kubectl: "✅ Native binary",
    Lens: "✅ Desktop app",
    K9s: "✅ Go binary",
    Octant: "✅ Desktop app",
  },
  {
    feature: "Free & open source",
    Podex: "✅ Fully free",
    Kubectl: "✅ Free",
    Lens: "⚠️ Freemium",
    K9s: "✅ Free",
    Octant: "✅ Free (deprecated)",
  },
  {
    feature: "Offline AI support",
    Podex: "✅ Mock providers",
    Kubectl: "N/A",
    Lens: "❌",
    K9s: "N/A",
    Octant: "N/A",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border px-4 py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f2856d]/10 via-[#8b5cf6]/10 to-[#f39e8a]/10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-[#f2856d]/20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-[#8b5cf6]/20 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
              <Zap className="h-3.5 w-3.5 text-[#f2856d]" />
              Everything in one place
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Features that make{" "}
              <span className="bg-gradient-to-r from-[#f2856d] via-[#8b5cf6] to-[#f39e8a] bg-clip-text text-transparent">
                K8s click
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Explore, design, debug, and learn Kubernetes  all from your browser.
              No terminal required, no YAML headaches.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Feature Categories */}
      {featureCategories.map((category) => (
        <section
          key={category.name}
          id={category.name.toLowerCase()}
          className="border-b border-border px-4 py-24"
        >
          <div className="mx-auto max-w-6xl">
            <AnimatedSection>
              <div className="mb-16 text-center">
                <div
                  className={`mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${category.gradient} shadow-lg shadow-${category.gradient.split(" ")[1]}/25`}
                >
                  {category.name === "Explore" && <Eye className="h-7 w-7 text-white" />}
                  {category.name === "Design" && <Workflow className="h-7 w-7 text-white" />}
                  {category.name === "Debug" && <Terminal className="h-7 w-7 text-white" />}
                  {category.name === "Learn" && <Globe className="h-7 w-7 text-white" />}
                </div>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                  {category.tagline}
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
                  {category.description}
                </p>
              </div>
            </AnimatedSection>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {category.features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <AnimatedSection key={feature.title}>
                    <div className="group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
                      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-[#f2856d]/5 to-[#8b5cf6]/5 blur-2xl transition-all duration-500 group-hover:from-[#f2856d]/10 group-hover:to-[#8b5cf6]/10" />
                      <div className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${category.gradient} p-3.5 shadow-lg`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                        {feature.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {feature.highlights.map((h) => (
                          <span
                            key={h}
                            className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Competitor Comparison */}
      <section className="border-b border-border px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                How does Podex{" "}
                <span className="bg-gradient-to-r from-[#f2856d] via-[#8b5cf6] to-[#f39e8a] bg-clip-text text-transparent">
                  compare
                </span>
                ?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
                See how Podex stacks up against other Kubernetes tools.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="overflow-x-auto rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider">
                      <span className="bg-gradient-to-r from-[#f2856d] to-[#8b5cf6] bg-clip-text text-transparent">
                        Podex
                      </span>
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      kubectl
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Lens
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      K9s
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Octant
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {comparisons.map((row) => (
                    <tr
                      key={row.feature}
                      className="transition-colors hover:bg-white/[0.02]"
                    >
                      <td className="px-6 py-4 font-medium text-foreground whitespace-nowrap">
                        {row.feature}
                      </td>
                      {["Podex", "Kubectl", "Lens", "K9s", "Octant"].map((col) => {
                        const val = row[col as keyof typeof row];
                        const isPodex = col === "Podex";
                        const isPositive = val?.startsWith("✅") || val?.startsWith("~");
                        return (
                          <td
                            key={col}
                            className={`px-6 py-4 whitespace-nowrap text-xs ${
                              isPodex
                                ? "font-semibold text-[#f2856d]"
                                : isPositive
                                  ? "text-emerald-500"
                                  : val === "❌"
                                    ? "text-red-500/60"
                                    : val?.startsWith("⚠️")
                                      ? "text-yellow-500"
                                      : "text-muted-foreground"
                            }`}
                          >
                            {val}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Podex is the only tool that combines visual cluster management, drag-and-drop
              architecture design, AI tutoring, and live debugging  all in your browser,
              fully open source.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-[#f2856d]/10 via-[#8b5cf6]/10 to-[#f39e8a]/10 px-8 py-16 backdrop-blur-sm sm:px-16">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#f2856d]/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#8b5cf6]/20 blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                  Ready to try Podex?
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                  Free, open source, and runs entirely on your machine.
                  No data leaves your cluster.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/download"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#f2856d] to-[#e06b54] px-8 text-base font-medium text-white shadow-lg shadow-[#f2856d]/25 transition-all hover:shadow-xl hover:shadow-[#f2856d]/30 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Zap className="h-4 w-4" />
                    Get Started Now
                  </Link>
                  <Link
                    href="/docs"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-8 text-base font-medium backdrop-blur-sm transition-all hover:bg-secondary hover:text-secondary-foreground"
                  >
                    Read the Docs
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
