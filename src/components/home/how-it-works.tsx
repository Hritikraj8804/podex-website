import { GitBranch, Container, Eye } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: GitBranch,
    title: "Clone & Run",
    description: "Clone the repo and start with a single Docker Compose command.",
  },
  {
    number: "02",
    icon: Container,
    title: "Connect Cluster",
    description: "Auto-detects your local kubeconfig context  no configuration needed.",
  },
  {
    number: "03",
    icon: Eye,
    title: "Explore Visually",
    description: "Dashboard, Arena, AI Tutor, and live debugging  all in your browser at localhost:3000.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative border-t border-border py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            Three simple steps
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            From zero to{" "}
            <span className="text-gradient">exploring</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get started in under two minutes. No config files, no complex setup.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="group relative flex">
                <div className="flex flex-col rounded-xl border border-border bg-card p-6 w-full">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-mono font-bold text-muted-foreground">
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
