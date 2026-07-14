"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { navigation } from "@/lib/content-data";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#f2856d] to-[#8b5cf6]">
            <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="12" cy="8" r="1" fill="currentColor" />
              <circle cx="16" cy="12" r="1" fill="currentColor" />
              <circle cx="12" cy="16" r="1" fill="currentColor" />
              <circle cx="8" cy="12" r="1" fill="currentColor" />
            </svg>
          </div>
          <span className="text-xl font-bold">Podex</span>
        </Link>

        {(!isMobile || isOpen) && (
          <div
            className={cn(
              "flex flex-col gap-1",
              isMobile
                ? "absolute left-0 top-16 w-full border-b border-border bg-background/95 backdrop-blur-xl p-4"
                : "flex-row items-center gap-1"
            )}
          >
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary",
                    isMobile && "block"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        )}

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {isMobile ? (
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          ) : (
            <Link href="/download">
              <Button size="sm">
                <Terminal className="h-4 w-4" />
                Get Started
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
