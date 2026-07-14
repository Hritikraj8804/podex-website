"use client";

import { useEffect, useRef } from "react";
import { Check, Copy } from "lucide-react";

export function DocContent({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const root = ref.current;

    // Render mermaid diagrams
    const mermaidBlocks = root.querySelectorAll<HTMLElement>("pre code.language-mermaid");
    if (mermaidBlocks.length > 0) {
      const isDark = document.documentElement.classList.contains("dark");
      import("mermaid").then((mermaid) => {
        mermaid.default.initialize({
          theme: isDark ? "dark" : "neutral",
          flowchart: { useMaxWidth: true, htmlLabels: true, curve: "basis", padding: 16 },
        });
        mermaidBlocks.forEach((block, i) => {
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
    }

    // Add copy buttons to code blocks
    const pres = root.querySelectorAll<HTMLElement>("pre");
    pres.forEach((pre) => {
      if (pre.querySelector(".copy-btn")) return;
      if (pre.querySelector(".mermaid")) return;

      const btn = document.createElement("button");
      btn.className = "copy-btn absolute top-2 right-2 flex h-7 w-7 items-center justify-center rounded-md border border-border bg-background/80 text-muted-foreground opacity-0 transition-opacity hover:text-foreground group-hover:opacity-100";
      btn.innerHTML = `<svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;

      pre.classList.add("group", "relative");
      pre.style.overflow = "hidden";
      pre.appendChild(btn);

      btn.addEventListener("click", async () => {
        const code = pre.querySelector("code");
        const text = code?.textContent || "";
        try {
          await navigator.clipboard.writeText(text);
          btn.innerHTML = `<svg class="h-3.5 w-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`;
          setTimeout(() => {
            btn.innerHTML = `<svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
          }, 2000);
        } catch {
          // clipboard not available
        }
      });
    });
  }, [html]);

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
