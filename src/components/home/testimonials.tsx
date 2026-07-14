"use client";

import { Quote } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";

const testimonials = [
  {
    quote:
      "Podex is hands-down the best Kubernetes learning tool I've found. The Arena makes abstract concepts tangible.",
    name: "Alex Rivera",
    role: "Cloud Engineering Student",
    avatar: "AR",
  },
  {
    quote:
      "I was terrified of kubectl. Podex's visual dashboard and AI tutor gave me the confidence to finally learn K8s.",
    name: "Priya Sharma",
    role: "DevOps Intern",
    avatar: "PS",
  },
  {
    quote:
      "The drag-and-drop Arena is genius. I built my first real deployment without writing a single line of YAML.",
    name: "Marcus Kim",
    role: "CS Student",
    avatar: "MK",
  },
  {
    quote:
      "Being able to exec into pods and stream logs from a browser  for free  is amazing for a learner like me.",
    name: "Elena Torres",
    role: "Junior Platform Engineer",
    avatar: "ET",
  },
  {
    quote:
      "The AI troubleshooting feature saved me hours of googling errors. It explains things like a senior dev would.",
    name: "James Chen",
    role: "Backend Developer (New to K8s)",
    avatar: "JC",
  },
  {
    quote:
      "I use Podex to teach Kubernetes to my students. It's the perfect visual companion to the textbook.",
    name: "Dr. Sarah Mitchell",
    role: "Computer Science Professor",
    avatar: "SM",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-bold text-3xl tracking-tight sm:text-4xl">
              Loved by learners
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hear from the community using Podex to level up their Kubernetes skills.
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <Card className="group flex h-full flex-col transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="flex flex-1 flex-col pt-6">
                  <Quote className="mb-4 h-8 w-8 text-primary/40" />
                  <p className="flex-1 text-base leading-relaxed text-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#2563eb] to-[#14b8a6] text-sm font-bold text-white">
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
