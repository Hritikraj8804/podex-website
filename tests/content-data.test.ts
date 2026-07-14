import { docs, blogPosts, docsByCategory } from "@/lib/content-data";

describe("content data", () => {
  it("has 12 documentation entries", () => {
    expect(docs).toHaveLength(12);
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

  it("has 4 blog posts", () => {
    expect(blogPosts).toHaveLength(4);
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
    expect(categories).toContain("Features");
    expect(categories).toContain("Reference");
    expect(categories).toContain("Community");
  });
});
