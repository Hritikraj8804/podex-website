import { docs, blogPosts, docsByCategory } from "@/lib/content-data";

describe("content data", () => {
  it("has 8 documentation entries", () => {
    expect(docs).toHaveLength(8);
  });

  it("each doc has required fields", () => {
    docs.forEach((doc) => {
      expect(doc.slug).toBeTruthy();
      expect(doc.title).toBeTruthy();
      expect(doc.description).toBeTruthy();
      expect(doc.content).toBeTruthy();
      expect(doc.category).toBeTruthy();
      expect(typeof doc.order).toBe("number");
    });
  });

  it("has unique slugs", () => {
    const slugs = docs.map((d) => d.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("has 5 blog posts", () => {
    expect(blogPosts).toHaveLength(5);
  });

  it("each blog post has required fields", () => {
    blogPosts.forEach((post) => {
      expect(post.slug).toBeTruthy();
      expect(post.title).toBeTruthy();
      expect(post.excerpt).toBeTruthy();
      expect(post.date).toBeTruthy();
      expect(post.author).toBeTruthy();
      expect(post.readTime).toBeTruthy();
      expect(post.content).toBeTruthy();
    });
  });

  it("groups docs by category", () => {
    const categories = Object.keys(docsByCategory);
    expect(categories).toContain("Getting Started");
    expect(categories).toContain("Core Features");
    expect(categories).toContain("Support");
  });
});
