"use client";

import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";

export default function ThemeToggle() {
  // Dark mode enabled by default
  const [enabled, setEnabled] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = window.document.documentElement;
    if (enabled) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [enabled]);

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground hidden sm:inline">
        Dark
      </span>
      <Switch checked={enabled} onCheckedChange={setEnabled} />
    </div>
  );
}
