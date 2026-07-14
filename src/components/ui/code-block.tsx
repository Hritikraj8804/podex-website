import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ code, language = "bash", filename, showLineNumbers = false }: CodeBlockProps) {
  const lines = code.trim().split("\n");

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-[#0d1117]">
      {filename && (
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-2 text-xs text-gray-400 font-mono">{filename}</span>
        </div>
      )}
      <pre className="overflow-x-auto p-4 text-sm">
        <code className={cn("font-mono text-gray-300", `language-${language}`)}>
          {showLineNumbers
            ? lines.map((line, i) => (
                <div key={i} className="flex">
                  <span className="mr-4 select-none text-right text-gray-600 w-4">{i + 1}</span>
                  <span>{line}</span>
                </div>
              ))
            : lines.join("\n")}
        </code>
      </pre>
    </div>
  );
}
