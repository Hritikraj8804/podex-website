import { render, screen, fireEvent } from "@testing-library/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

describe("Accordion", () => {
  it("renders accordion with items", () => {
    render(
      <Accordion>
        <AccordionItem value="item-1">
          <AccordionTrigger>Question 1</AccordionTrigger>
          <AccordionContent>Answer 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Question 2</AccordionTrigger>
          <AccordionContent>Answer 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText("Question 1")).toBeTruthy();
    expect(screen.getByText("Question 2")).toBeTruthy();
  });

  it("toggles content visibility on click", () => {
    render(
      <Accordion>
        <AccordionItem value="item-1">
          <AccordionTrigger>Question</AccordionTrigger>
          <AccordionContent>Answer</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByText("Question");
    const content = screen.getByText("Answer");

    expect(content.parentElement?.className).toContain("max-h-0");

    fireEvent.click(trigger);
    expect(content.parentElement?.className).toContain("max-h-[500px]");

    fireEvent.click(trigger);
    expect(content.parentElement?.className).toContain("max-h-0");
  });

  it("single mode closes other items when one opens", () => {
    render(
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Q1</AccordionTrigger>
          <AccordionContent>A1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Q2</AccordionTrigger>
          <AccordionContent>A2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    fireEvent.click(screen.getByText("Q1"));
    expect(screen.getByText("A1").parentElement?.className).toContain("max-h-[500px]");

    fireEvent.click(screen.getByText("Q2"));
    expect(screen.getByText("A1").parentElement?.className).toContain("max-h-0");
    expect(screen.getByText("A2").parentElement?.className).toContain("max-h-[500px]");
  });
});
