"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";
import {
  DashboardMockup,
  PodsMockup,
  TerminalMockup,
} from "@/components/illustrations/app-mockups";

const tabs = [
  { id: "dashboard", label: "Dashboard" },
  { id: "pods", label: "Explorer" },
  { id: "terminal", label: "Terminal" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const mockups: Record<TabId, React.ComponentType<{ className?: string }>> = {
  dashboard: DashboardMockup,
  pods: PodsMockup,
  terminal: TerminalMockup,
};

export function Screenshots() {
  const [activeTab, setActiveTab] = useState<TabId>("dashboard");

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-bold text-3xl tracking-tight sm:text-4xl">
              See Podex in action
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A clean, purpose-built interface for every Kubernetes workflow.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto mt-12 max-w-5xl">
          <div className="flex justify-center">
            <div className="inline-flex rounded-lg border border-border bg-muted/50 p-1 backdrop-blur-sm">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "relative rounded-md px-6 py-2.5 text-sm font-medium transition-colors",
                    activeTab === tab.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeScreenshotTab"
                      className="absolute inset-0 rounded-md bg-background shadow-sm"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-2xl border border-border/50 bg-card/80 p-2 shadow-2xl backdrop-blur-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                {(() => {
                  const Mockup = mockups[activeTab];
                  return <Mockup />;
                })()}
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
