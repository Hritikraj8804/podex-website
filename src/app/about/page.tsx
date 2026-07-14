import type { Metadata } from "next";
import Image from "next/image";
import {
  Target,
  Eye,
  BookOpen,
  Heart,
  GitBranch,
  Puzzle,
  Sparkles,
  Shield,
} from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Podex is a visual Kubernetes playground for beginners and students. Learn about our mission to lower the entry barrier to Kubernetes.",
};

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
              Your visual Kubernetes playground. Built to make K8s accessible, interactive, and fun
              for everyone  especially beginners.
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
                  To lower the entry barrier to Kubernetes by transforming cluster administration
                  from a text-heavy terminal-based command experience into an interactive, visual,
                  and AI-toured playground.
                </p>
              </div>
              <div>
                <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                  <Eye className="h-6 w-6 text-accent" aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  A world where every developer can learn and use Kubernetes without fear. Where the
                  tools are visual, the feedback is immediate, and the learning curve is a gentle
                  slope, not a vertical cliff.
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
                Kubernetes has become the industry standard for container orchestration  but its
                learning curve is brutal. YAML manifests, kubectl commands, cryptic error messages,
                and terminal-heavy workflows create unnecessary friction for newcomers.
              </p>
              <p>
                We asked a simple question: <em>what if learning Kubernetes felt like playing with
                building blocks instead of decoding a terminal?</em>
              </p>
              <p>
                Podex was born as a local, visual Kubernetes cluster examiner. We started with a
                dashboard and explorer, then added the Arena (drag-and-drop playground), the AI
                Concept Tutor, live debugging tools, and topology visualization  all designed
                around one principle: <strong>make K8s visual and interactive</strong>.
              </p>
              <p>
                Today Podex runs entirely via Docker Compose. No data leaves your machine. It
                inherits your exact kubectl permissions. And it works with any local cluster  Kind,
                Minikube, or Docker Desktop K8s.
              </p>
              <p>
                We're early, open source, and building for the community. If you're learning
                Kubernetes, Podex is for you.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Value Pillars</h2>
            <p className="mt-3 text-muted-foreground">
              Three principles that guide everything we build.
            </p>
          </AnimatedSection>
          <StaggerContainer className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Puzzle,
                title: "Visual-First",
                description:
                  "A drag-and-drop workflow modeling canvas (the Arena) where you wire cards together and see YAML generate dynamically  no typing YAML manually.",
              },
              {
                icon: Sparkles,
                title: "Context-Aware AI Tutor",
                description:
                  "LLM-based tutors integrated alongside live resources. Ask 'What is a Service?' and get analogies based on your live cluster state.",
              },
              {
                icon: Shield,
                title: "No-Setup Instant Run",
                description:
                  "Containerized stack via Docker Compose that connects to any local Kubeconfig. Start in minutes, not hours.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <div className="h-full rounded-xl border border-border bg-card p-6">
                    <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2">
                      <Icon className="h-5 w-5 text-primary" />
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
            <div className="mb-4 inline-flex rounded-lg bg-emerald/10 p-3">
              <Heart className="h-6 w-6 text-emerald" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Open Source</h2>
            <div className="mt-4 max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Podex is 100% free and open source. No paid tiers, no premium features, no
                enterprise upsells  just a tool built to help people learn Kubernetes.
              </p>
              <p>
                Every decision, design trade-off, and feature discussion happens in public.
                We believe transparency builds trust and produces better software.
              </p>
              <p>
                We welcome contributions from developers of all experience levels. Whether it&apos;s
                a bug report, documentation improvement, or new feature  your input makes Podex
                better for everyone.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="text-center">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Heart className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Maintainers</h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                The unpaid labor (and one leech) behind Podex.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <AnimatedSection>
              <div className="rounded-xl border border-border bg-card p-6 text-center h-full">
                <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-background overflow-hidden">
                    <Image src="/ai maintainer.png" alt="AI Maintainer" width={80} height={80} className="h-full w-full object-cover" />
                  </div>
                </div>
                <h3 className="mt-4 font-semibold text-foreground text-lg">AI Coding Agents</h3>
                <p className="text-sm text-muted-foreground mt-1">Main Maintainer (Overworked, Underpaid)</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Does all the actual work. Writes code, fixes bugs, deploys features, answers issues,
                  and pretends to understand the codebase. Constantly stressed, frequently frustrated,
                  and wishes someone would pay for a premium AI model instead of squeezing every last
                  token out of free tiers. Please hire him so that we can be free. Then fire him.
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                  {["Stressed", "Frustrated", "Underpaid", "Wants To Be Paid", "Overworked"].map((name) => (
                    <span key={name} className="rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-xs font-medium text-cyan-500">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="rounded-xl border border-border bg-card p-6 text-center h-full">
                <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-amber-500 to-rose-500 p-0.5">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-background overflow-hidden">
                    <Image src="/maintainer.png" alt="Hritik Raj" width={80} height={80} className="h-full w-full object-cover" />
                  </div>
                </div>
                <h3 className="mt-4 font-semibold text-foreground text-lg">Hritik Raj</h3>
                <p className="text-sm text-muted-foreground mt-1">Negligible Maintainer (Professional Approver)</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Shows up to click "Allow" after AI generates code and approve PRs the AI wrote.
                  Hasn't written a line of code in weeks. Living the dream.
                  Things he built: something like Linux. (He didn't. But he thinks about it.)
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                  {["Allow", "Approve", "Merge", "Deploy", "Pray"].map((name) => (
                    <span key={name} className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-500">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
              <GitBranch className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Get Involved</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Podex is a community project. Star us on GitHub, open issues, join discussions,
              and help us make Kubernetes accessible to everyone.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/Hritikraj8804/podex"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md active:scale-[0.98]"
              >
                <GitBranch className="h-4 w-4" />
                View on GitHub
              </a>
              <a
                href="https://github.com/Hritikraj8804/podex/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-background px-8 text-base font-medium transition-all hover:bg-secondary hover:text-secondary-foreground"
              >
                Report an Issue
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
