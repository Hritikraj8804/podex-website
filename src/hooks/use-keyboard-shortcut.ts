"use client";

import { useEffect, useCallback } from "react";

type KeyCombo = {
  key: string;
  ctrl?: boolean;
  meta?: boolean;
  shift?: boolean;
  alt?: boolean;
};

export function useKeyboardShortcut(
  combo: KeyCombo,
  callback: () => void,
  dependencies: React.DependencyList = []
) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== combo.key.toLowerCase()) return;
      if (combo.ctrl && !e.ctrlKey) return;
      if (combo.meta && !e.metaKey) return;
      if (combo.shift && !e.shiftKey) return;
      if (combo.alt && !e.altKey) return;

      if (combo.ctrl || combo.meta) {
        e.preventDefault();
      }
      callback();
    },
    [callback, combo]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleKeyDown, ...dependencies]);
}
