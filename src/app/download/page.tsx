import type { Metadata } from "next";
import { Terminal, Container, GitBranch, BookOpen, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Get Podex running in minutes with Docker Compose. No native installers needed — just clone and run.",
};

export default function DownloadPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-border px-4 py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-gradient-start/5 via-transparent to-gradient-end/5" />
        <div className="relative mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Get Started
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Run Podex in{" "}
              <span className="text-gradient">two commands</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              No native installers, no package managers, no complex setup.
              Podex runs on any system with Docker and a local Kubernetes cluster.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Quick Start</h2>
            <p className="mt-3 text-muted-foreground">
              Get Podex up and running in under two minutes.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mt-10 space-y-8">
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f2856d]/10 text-[#f2856d]">
                    <span className="font-bold text-lg">1</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">Clone the Repository</h3>
                    <div className="mt-3 rounded-lg border border-border bg-surface px-4 py-3 font-mono text-sm">
                      <span className="text-emerald-500">$</span>{" "}
                      <span className="text-muted-foreground">git clone</span>{" "}
                      <span className="text-foreground">https://github.com/your-org/podex.git</span>
                      <br />
                      <span className="text-emerald-500">$</span>{" "}
                      <span className="text-foreground">cd podex</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#8b5cf6]/10 text-[#8b5cf6]">
                    <span className="font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">Start with Docker Compose</h3>
                    <div className="mt-3 rounded-lg border border-border bg-surface px-4 py-3 font-mono text-sm">
                      <span className="text-emerald-500">$</span>{" "}
                      <span className="text-primary">docker compose up --build</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                    <span className="font-bold text-lg">3</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">Open Your Browser</h3>
                    <p className="mt-2 text-muted-foreground">
                      Navigate to{" "}
                      <code className="rounded bg-primary/10 px-1.5 py-0.5 font-mono text-sm text-primary">
                        http://localhost:5173
                      </code>{" "}
                      and start exploring your cluster.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Prerequisites</h2>
            <p className="mt-3 text-muted-foreground">
              Before running Podex, make sure you have these installed.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: Container,
                  title: "Docker & Docker Compose",
                  desc: "Required to run the Podex container stack.",
                  link: "https://docs.docker.com/get-docker/",
                },
                {
                  icon: Terminal,
                  title: "Kind or Minikube",
                  desc: "A local Kubernetes cluster to explore.",
                  link: "https://kind.sigs.k8s.io/",
                },
                {
                  icon: BookOpen,
                  title: "Kubeconfig",
                  desc: "A valid ~/.kube/config with cluster context. Podex auto-detects it.",
                  link: "/docs/quick-start",
                },
                {
                  icon: GitBranch,
                  title: "Git",
                  desc: "To clone the repository.",
                  link: "https://git-scm.com/",
                },
              ].map((req) => (
                <div key={req.title} className="rounded-xl border border-border bg-card p-6">
                  <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2.5">
                    <req.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{req.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{req.desc}</p>
                  <a
                    href={req.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-sm font-medium text-primary hover:underline"
                  >
                    Learn more →
                  </a>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">System Requirements</h2>
            <p className="mt-3 text-muted-foreground">
              Podex is lightweight and runs on any modern system with Docker.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <CheckCircle className="mx-auto mb-3 h-8 w-8 text-emerald" />
                <p className="text-sm font-medium text-muted-foreground">Docker</p>
                <p className="mt-1 text-lg font-bold text-foreground">20.10+</p>
                <p className="mt-1 text-xs text-muted-foreground">With Compose V2</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <CheckCircle className="mx-auto mb-3 h-8 w-8 text-emerald" />
                <p className="text-sm font-medium text-muted-foreground">Memory</p>
                <p className="mt-1 text-lg font-bold text-foreground">4 GB RAM</p>
                <p className="mt-1 text-xs text-muted-foreground">For Docker + K8s</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <CheckCircle className="mx-auto mb-3 h-8 w-8 text-emerald" />
                <p className="text-sm font-medium text-muted-foreground">Platform</p>
                <p className="mt-1 text-lg font-bold text-foreground">Any OS</p>
                <p className="mt-1 text-xs text-muted-foreground">With Docker support</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Local Development</h2>
            <p className="mt-3 text-muted-foreground">
              If you prefer to develop without Docker containers, run each service separately.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">Backend</h3>
                <div className="mt-3 rounded-lg border border-border bg-surface px-4 py-3 font-mono text-xs sm:text-sm">
                  <div><span className="text-emerald-500">$</span> <span className="text-foreground">cd backend</span></div>
                  <div><span className="text-emerald-500">$</span> <span className="text-foreground">python -m venv .venv</span></div>
                  <div><span className="text-emerald-500">$</span> <span className="text-foreground">pip install -r requirements.txt</span></div>
                  <div><span className="text-emerald-500">$</span> <span className="text-primary">uvicorn main:app --reload</span></div>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Runs on <code className="text-primary">http://localhost:8000</code>
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">Frontend</h3>
                <div className="mt-3 rounded-lg border border-border bg-surface px-4 py-3 font-mono text-xs sm:text-sm">
                  <div><span className="text-emerald-500">$</span> <span className="text-foreground">cd frontend</span></div>
                  <div><span className="text-emerald-500">$</span> <span className="text-foreground">npm install</span></div>
                  <div><span className="text-emerald-500">$</span> <span className="text-primary">npm run dev</span></div>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Runs on <code className="text-primary">http://localhost:5173</code>
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="mt-8 rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
                <div>
                  <p className="font-semibold text-foreground">No Docker override needed</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    When running locally (not in Docker), the backend connects directly to your
                    kubeconfig without the <code className="text-primary">host.docker.internal</code> address patching.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
