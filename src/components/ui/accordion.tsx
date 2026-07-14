"use client";

import { HTMLAttributes, forwardRef, useState, createContext, useContext, useCallback, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  openItems: Set<string>;
  toggle: (id: string) => void;
}

const AccordionContext = createContext<AccordionContextValue>({
  openItems: new Set(),
  toggle: () => {},
});

interface AccordionItemContextValue {
  value: string;
}

const AccordionItemContext = createContext<AccordionItemContextValue>({ value: "" });

interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  defaultValue?: string[];
}

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, type = "single", defaultValue = [], children, ...props }, ref) => {
    const [openItems, setOpenItems] = useState<Set<string>>(new Set(defaultValue));

    const toggle = useCallback((id: string) => {
      setOpenItems((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          if (type === "single") {
            next.clear();
          }
          next.add(id);
        }
        return next;
      });
    }, [type]);

    return (
      <AccordionContext.Provider value={{ openItems, toggle }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = "Accordion";

interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, children, ...props }, ref) => {
    const { openItems } = useContext(AccordionContext);
    const isOpen = openItems.has(value);

    return (
      <AccordionItemContext.Provider value={{ value }}>
        <div
          ref={ref}
          className={cn(
            "rounded-lg border border-border overflow-hidden transition-all duration-300",
            isOpen && "border-primary/30 bg-card/50",
            className
          )}
          data-state={isOpen ? "open" : "closed"}
          {...props}
        >
          {children}
        </div>
      </AccordionItemContext.Provider>
    );
  }
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    const { openItems, toggle } = useContext(AccordionContext);
    const { value } = useContext(AccordionItemContext);
    const isOpen = openItems.has(value);

    return (
      <button
        ref={ref}
        type="button"
        onClick={() => toggle(value)}
        className={cn(
          "flex w-full items-center justify-between p-4 text-left font-medium transition-all hover:bg-secondary/50",
          className
        )}
        aria-expanded={isOpen}
        {...props}
      >
        {children}
        <svg
          className={cn(
            "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300",
            isOpen && "rotate-180"
          )}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
    );
  }
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { openItems } = useContext(AccordionContext);
    const { value } = useContext(AccordionItemContext);
    const isOpen = openItems.has(value);

    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
          className
        )}
        role="region"
        {...props}
      >
        <div className="p-4 pt-0 text-muted-foreground">{children}</div>
      </div>
    );
  }
);
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
