"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Podex?",
    answer:
      "Podex is a desktop application that provides a visual, intuitive interface for managing Kubernetes clusters. It replaces the need to context-switch between multiple terminal windows and dashboards.",
  },
  {
    question: "Is Podex free?",
    answer:
      "Yes, Podex is completely free and open source for individual use. The Pro plan is available for teams that need advanced collaboration features, AI-assisted debugging, and priority support.",
  },
  {
    question: "Does it work with managed Kubernetes?",
    answer:
      "Absolutely. Podex works with EKS, GKE, AKS, and any standard Kubernetes distribution. It reads your existing kubeconfig, so there is no extra setup required.",
  },
  {
    question: "Do I need kubectl?",
    answer:
      "No. Podex has its own built-in Kubernetes client that handles all standard operations. That said, it integrates with your kubeconfig so your existing auth setup carries over seamlessly.",
  },
  {
    question: "What operating systems are supported?",
    answer:
      "Podex runs on Windows, macOS, and Linux. Native installers are provided for each platform, and updates are delivered automatically.",
  },
  {
    question: "How does Podex compare to kubectl?",
    answer:
      "Podex is not a replacement for kubectl — it is a complement. For quick visual exploration, debugging, and day-to-day management, Podex is faster. For scripted automation and CI/CD pipelines, kubectl remains the right tool.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-bold text-3xl tracking-tight sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Can&apos;t find what you&apos;re looking for?{" "}
              <a
                href="mailto:support@podex.dev"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Reach out to our team
              </a>
              .
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-border bg-card px-6"
              >
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
}
