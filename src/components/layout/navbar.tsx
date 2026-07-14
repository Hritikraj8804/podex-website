"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
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
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const isMobile = useMobile();

  useEffect(() => { setMounted(true); }, []);

  const logoSrc = mounted && resolvedTheme === "dark" ? "/logo-dark.png" : "/logo-light.png";

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur-xl shadow-sm"
          : "border-b border-transparent bg-background/70 backdrop-blur-md"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="h-8 w-24 relative">
            {mounted ? (
              <Image
                src={logoSrc}
                alt="Podex"
                fill
                className="object-contain object-left"
                priority
              />
            ) : (
              <span className="text-xl font-bold absolute inset-0 flex items-center">Podex</span>
            )}
          </div>
        </Link>

        {(!isMobile || isOpen) && (
          <div
            className={cn(
              "flex flex-col gap-1",
              isMobile
                ? "absolute left-0 top-16 w-full border-b border-border bg-background/95 backdrop-blur-xl p-4 shadow-lg"
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
                    isMobile && "block",
                    item.title === "Pricing" && !isActive && "animate-pulse text-primary/80 hover:text-primary"
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
              <Button size="sm" className="shadow-sm">
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
