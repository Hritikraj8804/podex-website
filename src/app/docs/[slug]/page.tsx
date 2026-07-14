import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { docs, docsByCategory } from "@/lib/content-data";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  FileText,
  Search,
} from "lucide-react";

export function generateStaticParams() {
  return docs.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = docs.find((d) => d.slug === slug);
  if (!doc) return { title: "Not Found" };
  return {
    title: doc.title,
    description: doc.description,
  };
}

const categoryIcons: Record<string, string> = {
  "Getting Started": "🚀",
  "Core Features": "⚙️",
  Support: "💬",
};

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = docs.find((d) => d.slug === slug);
  if (!doc) notFound();

  const sortedDocs = [...docs].sort((a, b) => a.order - b.order);
  const currentIndex = sortedDocs.findIndex((d) => d.slug === slug);
  const prevDoc = currentIndex > 0 ? sortedDocs[currentIndex - 1] : null;
  const nextDoc =
    currentIndex < sortedDocs.length - 1 ? sortedDocs[currentIndex + 1] : null;
  const categories = Object.keys(docsByCategory);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-12">
          {/* Sidebar */}
          <aside className="mb-8 lg:mb-0">
            <div className="sticky top-24 space-y-6">
              <div>
                <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Documentation
                </h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <div className="w-full rounded-lg border border-border bg-surface pl-10 pr-4 py-2.5 text-sm text-muted-foreground">
                    Search docs...
                  </div>
                </div>
              </div>

              <nav className="space-y-6">
                {categories.map((category) => (
                  <div key={category}>
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {categoryIcons[category]} {category}
                    </h3>
                    <ul className="space-y-1">
                      {docsByCategory[category]
                        .sort((a, b) => a.order - b.order)
                        .map((d) => (
                          <li key={d.slug}>
                            <Link
                              href={`/docs/${d.slug}`}
                              className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
                                d.slug === slug
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
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main>
            <div className="mb-8">
              <p className="text-sm font-medium text-primary mb-2">
                {categoryIcons[doc.category]} {doc.category}
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {doc.title}
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">
                {doc.description}
              </p>
            </div>

            <article
              className="prose prose-neutral dark:prose-invert max-w-none
                prose-headings:scroll-mt-24 prose-headings:font-semibold
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-foreground
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-foreground
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground
                prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-surface prose-pre:border prose-pre:border-border prose-pre:rounded-xl
                prose-li:text-muted-foreground
                prose-table:border-collapse
                prose-th:text-foreground prose-th:border-b prose-th:border-border prose-th:pb-2 prose-th:text-left
                prose-td:text-muted-foreground prose-td:border-b prose-td:border-border prose-td:py-2
                prose-hr:border-border"
              dangerouslySetInnerHTML={{ __html: doc.content }}
            />

            {/* Prev / Next Navigation */}
            <div className="mt-16 grid grid-cols-2 gap-4 border-t border-border pt-8">
              {prevDoc ? (
                <Link
                  href={`/docs/${prevDoc.slug}`}
                  className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <span className="text-xs font-medium text-muted-foreground mb-1 flex items-center gap-1">
                    <ChevronLeft className="h-3 w-3" />
                    Previous
                  </span>
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {prevDoc.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {nextDoc ? (
                <Link
                  href={`/docs/${nextDoc.slug}`}
                  className="group flex flex-col items-end rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md text-right"
                >
                  <span className="text-xs font-medium text-muted-foreground mb-1 flex items-center gap-1">
                    Next
                    <ChevronRight className="h-3 w-3" />
                  </span>
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {nextDoc.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
