"use client";

import { Quote } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";

const testimonials = [
  {
    quote:
      "Podex completely changed how I work with Kubernetes. No more terminal gymnastics.",
    name: "Sarah Chen",
    role: "Senior DevOps Engineer",
    avatar: "SC",
  },
  {
    quote:
      "Finally, a visual tool that doesn't sacrifice power. The log viewer alone is worth it.",
    name: "Marcus Rivera",
    role: "Platform Engineer",
    avatar: "MR",
  },
  {
    quote:
      "I recommend Podex to every new team member learning K8s. The learning curve drops dramatically.",
    name: "Elena Volkov",
    role: "SRE Lead",
    avatar: "EV",
  },
  {
    quote:
      "We tried three other Kubernetes dashboards. Podex is the one that stuck.",
    name: "James Wilson",
    role: "CTO at CloudScale",
    avatar: "JW",
  },
  {
    quote:
      "The terminal integration is seamless. It feels like part of the cluster, not a bolted-on tool.",
    name: "Priya Sharma",
    role: "Backend Engineer",
    avatar: "PS",
  },
  {
    quote:
      "As a student, Kubernetes was overwhelming. Podex made it click.",
    name: "Alex Kim",
    role: "CS Student",
    avatar: "AK",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-bold text-3xl tracking-tight sm:text-4xl">
              Loved by engineers
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See what the community has to say about Podex.
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <Card className="group flex h-full flex-col transition-colors hover:border-primary/50">
                <CardContent className="flex flex-1 flex-col pt-6">
                  <Quote className="mb-4 h-8 w-8 text-primary/40" />
                  <p className="flex-1 text-base leading-relaxed text-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-sm font-bold text-white">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-medium text-sm text-foreground">
                        {t.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
