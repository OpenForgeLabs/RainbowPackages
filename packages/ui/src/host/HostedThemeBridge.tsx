"use client";

import { useEffect } from "react";

const applyTheme = (value?: string | null) => {
  if (!value || value === "default") {
    document.documentElement.removeAttribute("data-theme");
    return;
  }
  document.documentElement.setAttribute("data-theme", value);
};

export function HostedThemeBridge() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const params = new URLSearchParams(window.location.search);
    applyTheme(params.get("theme"));

    const handler = (event: MessageEvent) => {
      if (event?.data?.type === "theme") {
        applyTheme(event.data.value);
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return null;
}
