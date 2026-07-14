"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
      <p className="text-[8rem] font-black leading-none text-foreground/10 sm:text-[10rem]">
        404
      </p>
      <h1 className="-mt-6 text-2xl font-bold text-foreground sm:text-3xl">Page not found</h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Check the URL or head
        back to a familiar place.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Home className="h-4 w-4" aria-hidden="true" />
          Go Home
        </Link>
        <button
          type="button"
          onClick={() => {
            if (typeof window !== "undefined") {
              window.history.back();
            }
          }}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-secondary"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Go Back
        </button>
      </div>
    </div>
  );
}
