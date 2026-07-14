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
    question: "What exactly is Podex?",
    answer:
      "Podex is a local, visual Kubernetes cluster examiner and interactive playground. It runs in your browser via Docker Compose and connects to your local Kubernetes cluster (like Kind or Minikube). It's designed for beginners and students who find kubectl intimidating.",
  },
  {
    question: "Is it a desktop app I need to install?",
    answer:
      "No  Podex runs as a Docker Compose stack. You clone the repo, run 'docker compose up --build', and open http://localhost:5173 in your browser. No native installers, no .msi or .dmg files.",
  },
  {
    question: "Is Podex free?",
    answer:
      "Yes  100% free and open source. There are no paid tiers, premium features, or subscription plans. Podex is built for the community.",
  },
  {
    question: "Does it work with any Kubernetes cluster?",
    answer:
      "Yes. Podex loads your active context from ~/.kube/config and supports any cluster authentication scheme: local certificates, OIDC tokens, username/password, and AWS IAM Authenticator. It works with Kind, Minikube, Docker Desktop K8s, EKS, GKE, AKS, and more.",
  },
  {
    question: "Do I need a Kubernetes cluster to use it?",
    answer:
      "Yes  Podex connects to a local Kubernetes cluster. We recommend Kind (Kubernetes-in-Docker) for beginners: 'kind create cluster --name podex'. It's free and runs on your machine.",
  },
  {
    question: "Do I need API keys for the AI features?",
    answer:
      "No  Podex includes built-in mock AI providers that work offline without any API keys. If you want to use real LLMs (Gemini or OpenAI), you can add your API keys in the Settings panel.",
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
                href="https://github.com/Hritikraj8804/podex/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Open an issue on GitHub
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
