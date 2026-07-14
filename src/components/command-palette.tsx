"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigation } from "@/lib/content-data";
import {
  Search, FileText, Download, BookOpen, Info, Home,
  Command
} from "lucide-react";
import { useKeyboardShortcut } from "@/hooks/use-keyboard-shortcut";

interface PaletteItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  category: string;
}

const paletteItems: PaletteItem[] = [
  { id: "home", title: "Home", description: "Go to home page", href: "/", icon: <Home className="h-4 w-4" />, category: "Navigation" },
  { id: "features", title: "Features", description: "View all features", href: "/features", icon: <FileText className="h-4 w-4" />, category: "Navigation" },
  { id: "download", title: "Download", description: "Download Podex", href: "/download", icon: <Download className="h-4 w-4" />, category: "Navigation" },
  { id: "docs", title: "Documentation", description: "Read the docs", href: "/docs", icon: <BookOpen className="h-4 w-4" />, category: "Navigation" },
  { id: "blog", title: "Blog", description: "Read our blog", href: "/blog", icon: <FileText className="h-4 w-4" />, category: "Navigation" },
  { id: "about", title: "About", description: "Learn about Podex", href: "/about", icon: <Info className="h-4 w-4" />, category: "Navigation" },
  { id: "docs-install", title: "Installation", description: "Install Podex", href: "/docs/installation", icon: <BookOpen className="h-4 w-4" />, category: "Documentation" },
  { id: "docs-connect", title: "Connect Cluster", description: "Connect to a Kubernetes cluster", href: "/docs/connect-cluster", icon: <BookOpen className="h-4 w-4" />, category: "Documentation" },
  { id: "docs-pods", title: "Browse Pods", description: "Explore pods in your cluster", href: "/docs/browse-pods", icon: <BookOpen className="h-4 w-4" />, category: "Documentation" },
  { id: "docs-logs", title: "Viewing Logs", description: "Stream and search pod logs", href: "/docs/logs", icon: <BookOpen className="h-4 w-4" />, category: "Documentation" },
  { id: "docs-deploy", title: "Deploy Applications", description: "Deploy apps from the UI", href: "/docs/deploy-apps", icon: <BookOpen className="h-4 w-4" />, category: "Documentation" },
];

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const close = useCallback(() => {
    setIsOpen(false);
    setQuery("");
  }, []);

  useKeyboardShortcut({ key: "k", meta: true }, () => setIsOpen((prev) => !prev));
  useKeyboardShortcut({ key: "k", ctrl: true }, () => setIsOpen((prev) => !prev));
  useKeyboardShortcut({ key: "Escape" }, close);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const filtered = paletteItems.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
  );

  const grouped = filtered.reduce<Record<string, PaletteItem[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary"
        aria-label="Open command palette"
      >
        <Search className="h-4 w-4" />
        <span>Search...</span>
        <kbd className="pointer-events-none ml-4 inline-flex items-center gap-0.5 rounded border border-border bg-background px-1.5 py-0.5 font-mono text-[10px] font-medium text-muted-foreground">
          <Command className="h-2.5 w-2.5" />K
        </kbd>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={close} />
          <div className="relative z-[101] w-full max-w-lg rounded-xl border border-border bg-background shadow-2xl overflow-hidden">
            <div className="flex items-center gap-3 border-b border-border px-4">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages and documentation..."
                className="flex-1 bg-transparent py-4 text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
              <kbd className="rounded border border-border bg-surface px-1.5 py-0.5 text-[10px] text-muted-foreground">
                ESC
              </kbd>
            </div>
            <div className="max-h-[300px] overflow-y-auto p-2">
              {Object.entries(grouped).map(([category, items]) => (
                <div key={category}>
                  <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">{category}</div>
                  {items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        router.push(item.href);
                        close();
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-secondary"
                    >
                      <span className="text-muted-foreground">{item.icon}</span>
                      <div>
                        <div className="font-medium text-foreground">{item.title}</div>
                        <div className="text-xs text-muted-foreground">{item.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              ))}
              {filtered.length === 0 && (
                <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                  No results found for &quot;{query}&quot;
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
