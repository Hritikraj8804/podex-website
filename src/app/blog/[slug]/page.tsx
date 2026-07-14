import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/content-data";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

const categoryColors: Record<string, "default" | "secondary" | "accent" | "success" | "outline"> = {
  Announcement: "default",
  "Release Notes": "accent",
  Tutorial: "success",
  Engineering: "secondary",
  Guide: "outline",
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
          {/* Main Content */}
          <article>
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <header className="mb-10">
              <div className="mb-4 flex items-center gap-2">
                <Badge variant={categoryColors[post.category] ?? "default"}>
                  {post.category}
                </Badge>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {post.title}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {post.author}
                  <span className="text-xs text-muted-foreground/60">
                    · {post.role}
                  </span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </header>

            <div
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
                prose-hr:border-border"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Sidebar */}
          <aside className="mt-12 lg:mt-0">
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  About the Author
                </h3>
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-sm font-semibold text-foreground">
                    {post.author}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {post.role}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Related Posts
                </h3>
                <div className="space-y-3">
                  {relatedPosts.map((rp) => (
                    <Link
                      key={rp.slug}
                      href={`/blog/${rp.slug}`}
                      className="group block rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-sm"
                    >
                      <Badge
                        variant={categoryColors[rp.category] ?? "default"}
                        className="mb-2 text-[10px]"
                      >
                        {rp.category}
                      </Badge>
                      <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {rp.title}
                      </h4>
                      <p className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {rp.readTime}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
