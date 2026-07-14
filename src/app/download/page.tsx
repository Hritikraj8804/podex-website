import type { Metadata } from "next";
import {
  Download,
  Monitor,
  Apple,
  Terminal,
  HardDrive,
  Cpu,
  MemoryStick,
  MonitorCheck,
  CheckCircle,
  Copy,
} from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-section";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download Podex for Windows, macOS, or Linux. Free, open-source Kubernetes desktop browser available for all major platforms.",
};

const platforms = [
  {
    name: "Windows",
    icon: Monitor,
    filename: "Podex-0.2.1-x64.exe",
    size: "112 MB",
    requirements: ["Windows 10 (64-bit) or later", "4 GB RAM minimum", "500 MB free disk space"],
    command: "winget install Podex.Podex",
  },
  {
    name: "macOS",
    icon: Apple,
    filename: "Podex-0.2.1-universal.dmg",
    size: "128 MB",
    requirements: ["macOS 13 Ventura or later", "Apple Silicon or Intel", "4 GB RAM minimum"],
    command: "brew install --cask podex",
  },
  {
    name: "Linux",
    icon: Terminal,
    filename: "Podex-0.2.1-x86_64.AppImage",
    size: "98 MB",
    requirements: ["Ubuntu 22.04+ / Fedora 38+ / Debian 12+", "4 GB RAM minimum", "500 MB free disk space"],
    command: "flatpak install dev.podex.Podex",
  },
];

const releases = [
  {
    version: "v0.2.1",
    date: "July 8, 2026",
    tag: "Latest",
    changes: [
      "Fixed pod log streaming interruption on network reconnect",
      "Improved ConfigMap editor with syntax validation",
      "Added volume mount visualization in pod detail view",
      "Performance improvements for clusters with 500+ pods",
    ],
  },
  {
    version: "v0.2.0",
    date: "June 15, 2026",
    changes: [
      "Port forwarding with persistent mappings across sessions",
      "Namespace resource quota dashboard",
      "Search across all resource types with label filters",
      "Event timeline with filtering by reason and object",
    ],
  },
  {
    version: "v0.1.1",
    date: "May 22, 2026",
    changes: [
      "Bug fix for kubeconfig merge order",
      "Reduced memory usage by 40% for large clusters",
      "Added dark mode theme toggle",
      "Improved error messages for connection failures",
    ],
  },
  {
    version: "v0.1.0",
    date: "April 30, 2026",
    changes: [
      "Initial public release",
      "Cluster browser with multi-context support",
      "Pod explorer with real-time status updates",
      "Integrated terminal and live log streaming",
      "Resource viewer for core Kubernetes objects",
    ],
  },
];

const checksums = [
  { file: "Podex-0.2.1-x64.exe", hash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" },
  { file: "Podex-0.2.1-universal.dmg", hash: "a7ffc6f8bf1ed76651c14756a061d662f580ff4de43b49fa82d80a4b80f8434a" },
  { file: "Podex-0.2.1-x86_64.AppImage", hash: "d7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592" },
];

export default function DownloadPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-border px-4 py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-gradient-start/5 via-transparent to-gradient-end/5" />
        <div className="relative mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Download
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Download <span className="text-gradient">Podex</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Free, open-source, and available for Windows, macOS, and Linux. Get up and running with
              your Kubernetes clusters in under two minutes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <StaggerContainer className="grid gap-8 lg:grid-cols-3">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <StaggerItem key={platform.name}>
                  <div className="flex h-full flex-col rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                    <div className="mb-6 inline-flex rounded-lg bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{platform.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {platform.filename} &middot; {platform.size}
                    </p>
                    <ul className="mt-6 flex-1 space-y-2">
                      {platform.requirements.map((req) => (
                        <li
                          key={req}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald" aria-hidden="true" />
                          {req}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 space-y-3">
                      <a
                        href="#"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        <Download className="h-4 w-4" aria-hidden="true" />
                        Download for {platform.name}
                      </a>
                      <div className="flex items-center gap-2 rounded-lg bg-surface-secondary px-3 py-2">
                        <code className="flex-1 truncate text-xs text-muted-foreground">
                          {platform.command}
                        </code>
                        <button
                          type="button"
                          className="shrink-0 rounded p-1 text-muted-foreground transition-colors hover:text-foreground"
                          aria-label={`Copy ${platform.command}`}
                        >
                          <Copy className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
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
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">System Requirements</h2>
            <p className="mt-3 text-muted-foreground">
              Podex is a lightweight desktop application. These are the minimum requirements for a
              smooth experience.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <MemoryStick className="mx-auto mb-3 h-8 w-8 text-primary" aria-hidden="true" />
                <p className="text-sm font-medium text-muted-foreground">Memory</p>
                <p className="mt-1 text-lg font-bold text-foreground">4 GB RAM</p>
                <p className="mt-1 text-xs text-muted-foreground">8 GB recommended</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <HardDrive className="mx-auto mb-3 h-8 w-8 text-primary" aria-hidden="true" />
                <p className="text-sm font-medium text-muted-foreground">Disk</p>
                <p className="mt-1 text-lg font-bold text-foreground">500 MB</p>
                <p className="mt-1 text-xs text-muted-foreground">Plus cache space</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <Cpu className="mx-auto mb-3 h-8 w-8 text-primary" aria-hidden="true" />
                <p className="text-sm font-medium text-muted-foreground">Processor</p>
                <p className="mt-1 text-lg font-bold text-foreground">x86_64 / ARM64</p>
                <p className="mt-1 text-xs text-muted-foreground">Dual-core or better</p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="mt-8 rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-3">
                <MonitorCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-foreground">Auto-Update</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Podex checks for updates automatically on startup. You can also check manually
                    from <span className="font-medium text-foreground">Settings &rarr; About</span>.
                    Critical security patches are applied without user intervention.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Release Notes</h2>
            <p className="mt-3 text-muted-foreground">
              A history of every release, what changed, and what improved.
            </p>
          </AnimatedSection>
          <div className="mt-10 space-y-8">
            {releases.map((release, idx) => (
              <AnimatedSection key={release.version} delay={idx * 0.05}>
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-bold text-foreground">{release.version}</h3>
                    {release.tag && (
                      <span className="rounded-full bg-emerald/10 px-2.5 py-0.5 text-xs font-semibold text-emerald">
                        {release.tag}
                      </span>
                    )}
                    <span className="text-sm text-muted-foreground">{release.date}</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {release.changes.map((change) => (
                      <li
                        key={change}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Checksums</h2>
            <p className="mt-3 text-muted-foreground">
              Verify the integrity of your download with SHA-256 checksums. This ensures your file
              was not tampered with during transfer.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="mt-8 overflow-hidden rounded-xl border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface-secondary">
                  <tr>
                    <th className="px-6 py-3 font-medium text-muted-foreground">File</th>
                    <th className="px-6 py-3 font-medium text-muted-foreground">SHA-256</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {checksums.map((item) => (
                    <tr key={item.file}>
                      <td className="px-6 py-4 font-medium text-foreground">{item.file}</td>
                      <td className="px-6 py-4 font-mono text-xs text-muted-foreground break-all">
                        {item.hash}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
