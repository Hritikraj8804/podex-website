"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-section";
import { Calendar, Clock, User } from "lucide-react";

const categoryColors: Record<string, "default" | "secondary" | "accent" | "success" | "outline"> = {
  Announcement: "default",
  "Release Notes": "accent",
  Tutorial: "success",
  Engineering: "secondary",
  Guide: "outline",
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  role: string;
  category: string;
  readTime: string;
  content: string;
}

export function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <StaggerContainer className="grid gap-6 sm:grid-cols-2">
      {posts.map((post) => (
        <StaggerItem key={post.slug}>
          <Link href={`/blog/${post.slug}`} className="group block h-full">
            <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-md">
              <div className="mb-3 flex items-center gap-2">
                <Badge variant={categoryColors[post.category] ?? "default"}>
                  {post.category}
                </Badge>
              </div>
              <h2 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h2>
              <p className="mb-4 flex-1 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground border-t border-border pt-4">
                <span className="flex items-center gap-1">
                  <User className="h-3.5 w-3.5" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>
            </article>
          </Link>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
