import type { Metadata } from "next";
import { blogPosts } from "@/lib/content-data";
import { BlogList } from "./blog-list";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Latest news, tutorials, and engineering insights from the Podex team.",
};

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Blog
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            News, tutorials, and insights from the Podex team.
          </p>
        </div>
        <BlogList posts={sortedPosts} />
      </div>
    </div>
  );
}
