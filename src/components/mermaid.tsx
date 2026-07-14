"use client";

import { useEffect, useRef } from "react";

export function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import("mermaid").then((mermaid) => {
      mermaid.default.initialize({ theme: "base", themeVariables: { background: "transparent" } });
      if (ref.current) {
        mermaid.default.run({ nodes: [ref.current] });
      }
    });
  }, [chart]);

  return (
    <div className="mermaid my-6 flex justify-center" ref={ref}>
      {chart}
    </div>
  );
}
