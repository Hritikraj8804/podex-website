import { Terminal, ExternalLink } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="relative border-t border-border py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border/60 bg-card p-12 text-center shadow-xl sm:p-16">
          <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to explore your{" "}
              <span className="text-gradient">cluster visually</span>
              ?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Free, open source, and runs entirely on your machine.
              No data leaves your cluster. Start in minutes.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/download"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl active:scale-[0.98]"
              >
                <Terminal className="h-4 w-4" />
                Get Started Now
              </Link>
              <a
                href="https://github.com/Hritikraj8804/podex"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-background px-8 text-base font-medium transition-all hover:bg-secondary hover:shadow-md active:scale-[0.98]"
              >
                <ExternalLink className="h-4 w-4" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
