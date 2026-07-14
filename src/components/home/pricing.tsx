import { Heart, Shield, GitBranch, Star } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "100% Free & Open Source",
    description: "Podex is completely free to use. No paid tiers, no feature gates  just open source under a permissive license. Forever.",
    accent: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    icon: Shield,
    title: "Runs Locally, Stays Private",
    description: "No cloud dependency. Your cluster data never leaves your machine. Podex runs as a local daemon via Docker Compose.",
    accent: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: GitBranch,
    title: "Community-Powered",
    description: "Built for learners by the community. Contributions, issues, and feedback drive every feature. Star us on GitHub and join the conversation.",
    accent: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative border-t border-border py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Star className="h-3.5 w-3.5" />
            Always free
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Free. Open Source.{" "}
            <span className="text-gradient">Always.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No pricing tiers. No enterprise upsells. Just a tool that helps people learn Kubernetes.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/20">
                <div className={`mb-4 inline-flex rounded-lg ${reason.bg} p-3 ${reason.accent}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Podex is a community project.{" "}
            <a
              href="https://github.com/Hritikraj8804/podex"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Star us on GitHub
            </a>{" "}
            to show your support.
          </p>
        </div>
      </div>
    </section>
  );
}
