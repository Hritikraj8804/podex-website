"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export function DocContent({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!ref.current) return;
    const blocks = ref.current.querySelectorAll<HTMLElement>("pre code.language-mermaid");
    if (blocks.length === 0) return;

    const isDark = resolvedTheme === "dark";

    import("mermaid").then((mermaid) => {
      mermaid.default.initialize({
        theme: "base",
        themeVariables: {
          background: "transparent",
          primaryColor: isDark ? "#1e40af" : "#2563eb",
          primaryBorderColor: isDark ? "#3b82f6" : "#1d4ed8",
          primaryTextColor: "#ffffff",
          secondaryColor: isDark ? "#155e75" : "#06b6d4",
          secondaryBorderColor: isDark ? "#22d3ee" : "#0891b2",
          secondaryTextColor: "#ffffff",
          tertiaryColor: isDark ? "#1e293b" : "#f1f5f9",
          tertiaryBorderColor: isDark ? "#475569" : "#cbd5e1",
          tertiaryTextColor: isDark ? "#e2e8f0" : "#0f172a",
          lineColor: isDark ? "#64748b" : "#94a3b8",
          fontFamily: "Geist, system-ui, sans-serif",
          fontSize: "14px",
          edgeLabelBackground: isDark ? "#1e293b" : "#f8fafc",
          nodeBorder: isDark ? "#475569" : "#cbd5e1",
        },
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
          curve: "basis",
        },
      });

      blocks.forEach((block, i) => {
        const pre = block.parentElement;
        if (!pre) return;
        const id = `mermaid-${i}`;
        const chart = block.textContent || "";
        pre.innerHTML = `<div class="mermaid" id="${id}">${chart}</div>`;
        try {
          mermaid.default.run({ nodes: [document.getElementById(id)!] });
        } catch {
          pre.innerHTML = `<div class="text-sm text-muted-foreground p-4 border border-border rounded-lg">Failed to render diagram</div>`;
        }
      });
    });
  }, [html, resolvedTheme]);

  return (
    <div
      ref={ref}
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
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
