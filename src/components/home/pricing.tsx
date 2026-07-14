"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "For individuals and small teams",
    features: [
      "Unlimited clusters",
      "Pod management",
      "Log viewer",
      "Terminal access",
      "Deployments",
      "Real-time updates",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/mo",
    description: "For teams and power users",
    features: [
      "Everything in Free",
      "Team collaboration",
      "AI assistant",
      "Priority support",
      "Custom themes",
      "Advanced analytics",
      "Plugin system",
    ],
    popular: true,
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-bold text-3xl tracking-tight sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start free. Upgrade when you need more.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-muted/50 p-1">
              <button
                onClick={() => setYearly(false)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  !yearly
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  yearly
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Yearly
                <span className="ml-1.5 text-xs text-emerald-500">Save 20%</span>
              </button>
            </div>
          </div>
        </AnimatedSection>

        <StaggerContainer className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-2">
          {tiers.map((tier) => (
            <StaggerItem key={tier.name}>
              <Card
                className={cn(
                  "relative flex h-full flex-col",
                  tier.popular && "border-primary shadow-lg shadow-primary/10"
                )}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                    Most Popular
                  </div>
                )}

                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-bold text-4xl text-foreground">
                      {yearly && tier.price !== "$0"
                        ? `$${Math.round(parseInt(tier.price.replace("$", "")) * 0.8)}`
                        : tier.price}
                    </span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <Check className="h-4 w-4 shrink-0 text-emerald-500" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <a
                    href="/download"
                    className={cn(
                      "flex h-10 w-full items-center justify-center rounded-lg px-5 py-2 text-sm font-medium transition-all duration-200",
                      tier.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md active:scale-[0.98]"
                        : "border border-border bg-background hover:bg-secondary hover:text-secondary-foreground"
                    )}
                  >
                    {tier.price === "$0" ? "Get Started Free" : "Start Pro Trial"}
                  </a>
                </CardFooter>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
