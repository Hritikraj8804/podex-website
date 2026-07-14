import type { Metadata } from "next";
import {
  Globe,
  Package,
  ScrollText,
  Terminal,
  LayoutGrid,
  Rocket,
  FolderTree,
  AlertCircle,
  FileText,
  Lock,
  HardDrive,
  ArrowRightLeft,
  Braces,
  RefreshCw,
  Search,
  Moon,
  Puzzle,
  Sparkles,
} from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-section";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore all 18 features that make Podex the most intuitive Kubernetes desktop browser for developers and platform engineers.",
};

const categories = [
  {
    name: "Core",
    description: "Essential tools for exploring and understanding your Kubernetes clusters.",
    features: [
      {
        icon: Globe,
        title: "Cluster Browser",
        description:
          "Navigate multiple clusters from a single sidebar. Switch between contexts, view node health at a glance, and see resource quotas without running a single command.",
      },
      {
        icon: Package,
        title: "Pod Explorer",
        description:
          "Browse every pod across every namespace with a searchable, filterable list. Inspect labels, annotations, restarts, and status in a single unified view.",
      },
      {
        icon: ScrollText,
        title: "Live Logs",
        description:
          "Stream container logs in real time with syntax highlighting and line wrapping. Follow specific containers, tail output, and search through historical logs instantly.",
      },
      {
        icon: Terminal,
        title: "Integrated Terminal",
        description:
          "Open a shell session into any pod directly from the UI. Execute kubectl commands, run debugging tools, and interact with your containers without leaving Podex.",
      },
      {
        icon: LayoutGrid,
        title: "Resource Viewer",
        description:
          "Inspect Deployments, StatefulSets, DaemonSets, and any custom resource. View replica counts, strategy, update status, and conditions in a structured layout.",
      },
    ],
  },
  {
    name: "Management",
    description: "Full lifecycle management for every Kubernetes resource type.",
    features: [
      {
        icon: Rocket,
        title: "Deployments",
        description:
          "Create, edit, scale, and roll back Deployments through a visual interface. View rollout history, pause progressions, and trigger redeploys with a single click.",
      },
      {
        icon: FolderTree,
        title: "Namespaces",
        description:
          "Organize and switch between namespaces effortlessly. Create new namespaces, view resource quotas, and manage limits without touching the terminal.",
      },
      {
        icon: AlertCircle,
        title: "Events",
        description:
          "Monitor cluster events in a chronological timeline. Filter by type, reason, or object to quickly diagnose scheduling failures, OOM kills, and network issues.",
      },
      {
        icon: FileText,
        title: "ConfigMaps",
        description:
          "View and edit ConfigMap key-value pairs with inline editing. Validate YAML syntax, compare versions, and apply changes directly to running clusters.",
      },
      {
        icon: Lock,
        title: "Secrets",
        description:
          "Inspect Secrets with optional base64 decoding. Manage TLS certificates, registry credentials, and environment variables with fine-grained access controls.",
      },
      {
        icon: HardDrive,
        title: "Volumes",
        description:
          "Browse PersistentVolumes and PersistentVolumeClaims. Check mount status, access modes, storage class, and reclaim policies from a single detail panel.",
      },
    ],
  },
  {
    name: "Developer",
    description: "Developer-focused tools that accelerate debugging and local workflows.",
    features: [
      {
        icon: ArrowRightLeft,
        title: "Port Forwarding",
        description:
          "Set up port forwarding to any pod or service with a simple form. Map local ports to remote endpoints for local development and testing in seconds.",
      },
      {
        icon: Braces,
        title: "Exec into Pods",
        description:
          "Launch an interactive terminal session inside any container. Choose from available shells, switch containers, and run commands in context.",
      },
      {
        icon: RefreshCw,
        title: "Real-time Updates",
        description:
          "Watch resources update live as your cluster state changes. Status shifts, replica counts, and event timelines refresh automatically without manual polling.",
      },
      {
        icon: Search,
        title: "Search & Filters",
        description:
          "Filter resources by name, label, status, or namespace. Full-text search across all resource types so you can find exactly what you need in seconds.",
      },
    ],
  },
  {
    name: "UI/UX",
    description: "Thoughtful design details that make Podex a joy to use.",
    features: [
      {
        icon: Moon,
        title: "Dark Mode",
        description:
          "Switch between light and dark themes with a single toggle. The dark theme is carefully tuned for long sessions in dim environments without eye strain.",
      },
      {
        icon: Puzzle,
        title: "Plugin Support",
        description:
          "Extend Podex with custom plugins. Add new resource viewers, integrations, or UI panels through a plugin API built for community contributions.",
        badge: "Coming Soon",
      },
      {
        icon: Sparkles,
        title: "AI Assistant",
        description:
          "Ask natural language questions about your cluster. Get explanations for error events, resource recommendations, and guided remediation steps.",
        badge: "Coming Soon",
      },
    ],
  },
];

const categoryColors: Record<string, string> = {
  Core: "from-indigo-500/10 to-indigo-500/5 text-indigo-500",
  Management: "from-purple-500/10 to-purple-500/5 text-purple-500",
  Developer: "from-cyan-500/10 to-cyan-500/5 text-cyan-500",
  "UI/UX": "from-emerald-500/10 to-emerald-500/5 text-emerald-500",
};

const iconBgColors: Record<string, string> = {
  Core: "bg-indigo-500/10 text-indigo-500",
  Management: "bg-purple-500/10 text-purple-500",
  Developer: "bg-cyan-500/10 text-cyan-500",
  "UI/UX": "bg-emerald-500/10 text-emerald-500",
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
              <span className="text-gradient">manage Kubernetes</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Podex replaces scattered terminal commands with a unified visual interface. Explore 18
              features designed to make cluster management fast, safe, and enjoyable.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {categories.map((category, catIdx) => (
        <section
          key={category.name}
          id={category.name.toLowerCase().replace(/[^a-z]/g, "")}
          className="border-b border-border px-4 py-20"
        >
          <div className="mx-auto max-w-6xl">
            <AnimatedSection>
              <div className="mb-12">
                <span
                  className={`inline-block rounded-full bg-gradient-to-r px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ${
                    categoryColors[category.name] ?? "bg-muted text-muted-foreground"
                  }`}
                >
                  {category.name}
                </span>
                <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
                  {category.name} Features
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
                        className={`mb-4 inline-flex rounded-lg p-2.5 ${
                          iconBgColors[category.name] ?? "bg-muted text-muted-foreground"
                        }`}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="mb-2 flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                        {"badge" in feature && feature.badge && (
                          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                            {feature.badge}
                          </span>
                        )}
                      </div>
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
              Podex is under active development. New features ship regularly, and the roadmap is
              guided by real developer feedback. Star the repo to stay updated.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
