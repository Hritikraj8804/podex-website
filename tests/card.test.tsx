import { render, screen } from "@testing-library/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

describe("Card", () => {
  it("renders card with all sub-components", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description text</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card content here</p>
        </CardContent>
        <CardFooter>
          <span>Card footer</span>
        </CardFooter>
      </Card>
    );

    expect(screen.getByText("Card Title")).toBeTruthy();
    expect(screen.getByText("Card description text")).toBeTruthy();
    expect(screen.getByText("Card content here")).toBeTruthy();
    expect(screen.getByText("Card footer")).toBeTruthy();
  });

  it("applies custom className", () => {
    render(<Card className="custom-class">Content</Card>);
    const card = screen.getByText("Content").closest("div");
    expect(card?.className).toContain("custom-class");
  });
});
