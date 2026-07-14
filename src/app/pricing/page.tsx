import type { Metadata } from "next";
import Link from "next/link";
import { Terminal, Heart, BugOff, Coffee, CreditCard, Ban } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description: "It's free. Like, completely free. Stop looking for a catch.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-border px-4 py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Ban className="h-3.5 w-3.5" />
            Completely free
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Pricing?{" "}
            <span className="text-gradient">What Pricing?</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            You really clicked on a "Pricing" tab for an open source project?
            Alright, here you go.
          </p>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-12">
            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative text-center">
              <div className="mb-6 inline-flex rounded-full bg-emerald-500/10 p-4">
                <Heart className="h-10 w-10 text-emerald-500" />
              </div>
              <h2 className="text-4xl font-bold text-foreground">$0.00</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Yes, zero. Nada. Zilch. Free as in beer.
              </p>
              <p className="mt-2 text-sm text-muted-foreground/60 italic">
                (Also free as in speech, but that doesn't sound as fun)
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-surface p-6 text-center">
                <CreditCard className="mx-auto h-8 w-8 text-muted-foreground/40" />
                <h3 className="mt-3 font-semibold text-foreground">Payment Integration</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  I don't know how to add it. That's literally the main reason it's free.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-6 text-center">
                <BugOff className="mx-auto h-8 w-8 text-muted-foreground/40" />
                <h3 className="mt-3 font-semibold text-foreground">Enterprise Plan</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We don't have one. Send an angry email to yourself, it'll have the same effect.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-6 text-center">
                <Coffee className="mx-auto h-8 w-8 text-muted-foreground/40" />
                <h3 className="mt-3 font-semibold text-foreground">Premium Support</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Open an issue on GitHub like everyone else. Or buy me a coffee if you're feeling generous.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-6 text-center">
                <Terminal className="mx-auto h-8 w-8 text-muted-foreground/40" />
                <h3 className="mt-3 font-semibold text-foreground">Pro Tier</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  There is no Pro tier. It's the same code. You already have it. Go build something.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-xl border border-border bg-surface/50 p-6 text-center">
              <p className="text-sm font-mono text-muted-foreground">
                <span className="text-emerald-500">$</span> echo &quot;Thanks for making Podex free&quot; | sudo tee /dev/null
              </p>
              <p className="mt-2 text-xs text-muted-foreground/50">
                (sudo not actually required, but it makes you feel important)
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/download"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90"
            >
              <Terminal className="h-4 w-4" />
              Get Started (It's Free)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
