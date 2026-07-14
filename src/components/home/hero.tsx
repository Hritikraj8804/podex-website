import Link from "next/link";
import Image from "next/image";
import { Terminal, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-glow pointer-events-none absolute inset-0" />
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-accent/5 blur-[100px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-24 lg:py-32">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="flex h-2 w-2 rounded-full bg-primary" />
            v1.2.0 — Port Forwarding, AI Command Generator, Pod Status Matrix
          </div>

          <div className="relative flex items-center justify-center gap-6">
            <h1 className="max-w-3xl text-center text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Your Kubernetes{" "}
              <span className="text-gradient">Visual Playground</span>
            </h1>
            <div className="hidden lg:block shrink-0">
              <Image
                src="/mascot.png"
                alt="Poddy mascot"
                width={140}
                height={140}
                className="animate-float"
              />
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
            Explore clusters, design architectures with drag-and-drop, stream logs,
            port-forward services, generate kubectl commands with AI — all from your browser.
            Zero config, just{" "}
            <code className="rounded bg-primary/10 px-1.5 py-0.5 font-mono text-sm text-primary">
              docker compose up
            </code>
            .
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/download"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]"
            >
              <Terminal className="h-4 w-4" />
              Get Started
            </Link>
            <Link
              href="/docs"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-card px-8 text-base font-medium transition-all hover:bg-secondary hover:shadow-md active:scale-[0.98]"
            >
              View Documentation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="https://github.com/Hritikraj8804/podex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 text-base font-medium transition-all hover:bg-secondary hover:shadow-md active:scale-[0.98]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
