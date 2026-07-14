"use client";

import { useState } from "react";
import Link from "next/link";
import { docsByCategory } from "@/lib/content-data";
import { BookOpen, FileText, Search, Compass, Layers, BookMarked, Users } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "Getting Started": <Compass className="h-4 w-4" />,
  "Features": <Layers className="h-4 w-4" />,
  "Reference": <BookMarked className="h-4 w-4" />,
  "Community": <Users className="h-4 w-4" />,
};

export function DocSidebar({ currentSlug }: { currentSlug?: string }) {
  const [query, setQuery] = useState("");
  const categories = Object.keys(docsByCategory);

  return (
    <div className="sticky top-24 space-y-6">
      <div>
        <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
          <BookOpen className="h-5 w-5 text-primary" />
          Documentation
        </h2>
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search docs..."
            className="w-full rounded-lg border border-border bg-surface py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
      </div>

      <nav className="space-y-6">
        {categories.map((category) => {
          const docs = docsByCategory[category].sort((a, b) => a.order - b.order);
          const filtered = query.trim()
            ? docs.filter((d) =>
                d.title.toLowerCase().includes(query.toLowerCase()) ||
                d.description.toLowerCase().includes(query.toLowerCase())
              )
            : docs;

          if (filtered.length === 0) return null;

          return (
            <div key={category}>
              <h3 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {categoryIcons[category]} {category}
              </h3>
              <ul className="space-y-1">
                {filtered.map((d) => (
                  <li key={d.slug}>
                    <Link
                      href={`/docs/${d.slug}`}
                      className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
                        d.slug === currentSlug
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:bg-surface hover:text-foreground"
                      }`}
                    >
                      <FileText className="h-4 w-4 shrink-0" />
                      {d.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
