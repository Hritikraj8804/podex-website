"use client";

import { useState } from "react";
import Link from "next/link";
import { docs, docsByCategory } from "@/lib/content-data";
import { ChevronRight, Search, Compass, Layers, BookMarked, Users } from "lucide-react";
import { DocSidebar } from "@/components/docs-sidebar";

const categoryIcons: Record<string, React.ReactNode> = {
  "Getting Started": <Compass className="h-4 w-4" />,
  "Features": <Layers className="h-4 w-4" />,
  "Reference": <BookMarked className="h-4 w-4" />,
  "Community": <Users className="h-4 w-4" />,
};

export default function DocsPage() {
  const [query, setQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const categories = Object.keys(docsByCategory);

  const filtered = query.trim()
    ? docs.filter((d) =>
        d.title.toLowerCase().includes(query.toLowerCase()) ||
        d.description.toLowerCase().includes(query.toLowerCase())
      )
    : null;

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-12">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex items-center gap-2 text-sm font-medium text-primary mb-4 lg:hidden"
          >
            <svg className={`h-4 w-4 transition-transform ${sidebarOpen ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            {sidebarOpen ? "Hide sidebar" : "Show documentation list"}
          </button>

          <aside className={`${sidebarOpen ? "block" : "hidden"} lg:block mb-8 lg:mb-0`}>
            <DocSidebar />
          </aside>

          {/* Main Content */}
          <main>
            <div className="mb-10">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Documentation
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">
                Everything you need to get started with Podex and make the most
                of your Kubernetes experience.
              </p>
            </div>

            {filtered !== null ? (
              filtered.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  {filtered.map((doc) => (
                    <Link
                      key={doc.slug}
                      href={`/docs/${doc.slug}`}
                      className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {doc.title}
                        </h3>
                        <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary transition-colors mt-0.5" />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {doc.description}
                      </p>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-center py-12 text-muted-foreground">
                  No docs match your search.
                </p>
              )
            ) : (
              <div className="space-y-10">
                {categories.map((category) => (
                  <section key={category}>
                    <h2 className="flex items-center gap-2 text-2xl font-semibold text-foreground mb-6 pb-3 border-b border-border">
                      {categoryIcons[category]} {category}
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {docsByCategory[category]
                        .sort((a, b) => a.order - b.order)
                        .map((doc) => (
                          <Link
                            key={doc.slug}
                            href={`/docs/${doc.slug}`}
                            className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-md"
                          >
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                {doc.title}
                              </h3>
                              <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary transition-colors mt-0.5" />
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {doc.description}
                            </p>
                          </Link>
                        ))}
                    </div>
                  </section>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
