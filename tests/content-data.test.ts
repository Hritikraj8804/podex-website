import { docs, docsByCategory } from "@/lib/content-data";

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

  it("groups docs by category", () => {
    const categories = Object.keys(docsByCategory);
    expect(categories).toContain("Getting Started");
    expect(categories).toContain("Features");
    expect(categories).toContain("Reference");
    expect(categories).toContain("Community");
  });
});
