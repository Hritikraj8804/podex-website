"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
      <div className="inline-flex rounded-full bg-destructive/10 p-4">
        <AlertTriangle className="h-10 w-10 text-destructive" aria-hidden="true" />
      </div>
      <h1 className="mt-6 text-2xl font-bold text-foreground sm:text-3xl">
        Something went wrong
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        An unexpected error occurred while rendering this page. You can try reloading or go back to
        the previous page.
      </p>
      {error.digest && (
        <p className="mt-4 rounded-lg bg-surface-secondary px-4 py-2 font-mono text-xs text-muted-foreground">
          Error ID: {error.digest}
        </p>
      )}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <RefreshCw className="h-4 w-4" aria-hidden="true" />
          Try Again
        </button>
        <a
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-secondary"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
