import { LayoutDashboard, Puzzle, Bot, Terminal, GitBranch, Search, ArrowLeftRight, Wand2 } from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Visual Dashboard",
    description: "Real-time cluster health with gradient hero, color-coded cards, Pod Status Matrix, and a Needs-Attention panel for quick triage.",
    gradient: "from-blue-500 to-blue-600",
    border: "hover:border-blue-500/30",
  },
  {
    icon: Search,
    title: "Cluster Explorer",
    description: "Browse 9 resource types — Pods, Deployments, Services, Nodes, ConfigMaps, Secrets, StatefulSets, DaemonSets, and Events with full YAML inspection.",
    gradient: "from-cyan-500 to-cyan-600",
    border: "hover:border-cyan-500/30",
  },
  {
    icon: Puzzle,
    title: "Arena Playground",
    description: "Drag-and-drop React Flow canvas to wire K8s blocks together. Auto-generate valid YAML manifests from your visual design.",
    gradient: "from-violet-500 to-violet-600",
    border: "hover:border-violet-500/30",
  },
  {
    icon: Terminal,
    title: "Live Debugging",
    description: "SSE log streaming and WebSocket-powered interactive terminal shells inside any container — all from your browser.",
    gradient: "from-emerald-500 to-emerald-600",
    border: "hover:border-emerald-500/30",
  },
  {
    icon: Wand2,
    title: "AI Command Generator",
    description: "Describe what you need in plain English and get a ready-to-run kubectl command. No more memorizing CLI flags.",
    gradient: "from-amber-500 to-amber-600",
    border: "hover:border-amber-500/30",
  },
  {
    icon: ArrowLeftRight,
    title: "Port Forwarding",
    description: "One-click port forwarding with PID subprocess management. Forward service ports directly from your browser.",
    gradient: "from-rose-500 to-rose-600",
    border: "hover:border-rose-500/30",
  },
  {
    icon: GitBranch,
    title: "Topology View",
    description: "Dynamic SVG map showing relationships between Ingress, Services, Deployments, and Pods. Drag, zoom, pan, and filter.",
    gradient: "from-amber-500 to-amber-600",
    border: "hover:border-amber-500/30",
  },
  {
    icon: Bot,
    title: "AI Concept Tutor & Troubleshooter",
    description: "Ask 'What is a Service?' and get real-world analogies with crash-loop diagnosis. Built-in mock providers work offline, no API key needed.",
    gradient: "from-violet-500 to-violet-600",
    border: "hover:border-violet-500/30",
  },
];

export function Features() {
  return (
    <section id="features" className="relative border-t border-border py-24 lg:py-32">
      <div className="bg-glow-card pointer-events-none absolute inset-0" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            Everything you need
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Master Kubernetes{" "}
            <span className="text-gradient">visually</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Visual tools that make cluster management intuitive, interactive, and beginner-friendly.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg ${feature.border}`}
              >
                <div className={`mb-4 inline-flex rounded-lg bg-gradient-to-br ${feature.gradient} p-3 text-white shadow-sm`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
