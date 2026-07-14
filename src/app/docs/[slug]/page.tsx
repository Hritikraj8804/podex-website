import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { docs } from "@/lib/content-data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DocSidebar } from "@/components/docs-sidebar";

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

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-12">
          {/* Sidebar */}
          <aside className="mb-8 lg:mb-0">
            <DocSidebar currentSlug={slug} />
          </aside>

          {/* Main Content */}
          <main>
            <div className="mb-8">
              <p className="flex items-center gap-1.5 text-sm font-medium text-primary mb-2">
                {doc.category}
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
              dangerouslySetInnerHTML={{ __html: marked.parse(doc.content) }}
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
