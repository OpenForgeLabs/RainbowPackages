"use client";

import { useEffect } from "react";

type ThemeBridgeMessage = {
  type: "theme";
  value?: string | null;
};

function normalizeOrigin(origin: string): string | null {
  try {
    return new URL(origin).origin;
  } catch {
    return null;
  }
}

function isThemeBridgeMessage(data: unknown): data is ThemeBridgeMessage {
  if (typeof data !== "object" || data === null) {
    return false;
  }
  const value = data as Record<string, unknown>;
  return (
    value.type === "theme" &&
    (typeof value.value === "string" || value.value === undefined || value.value === null)
  );
}

function applyTheme(value?: string | null) {
  if (!value || value === "default") {
    document.documentElement.removeAttribute("data-theme");
    return;
  }
  document.documentElement.setAttribute("data-theme", value);
}

export type HostedThemeBridgeProps = {
  allowedOrigins?: string[];
};

export function HostedThemeBridge({ allowedOrigins = [] }: HostedThemeBridgeProps) {
  useEffect(() => {
    const allowlist = new Set<string>();
    allowlist.add(window.location.origin);
    for (const rawOrigin of allowedOrigins) {
      const origin = normalizeOrigin(rawOrigin);
      if (origin) {
        allowlist.add(origin);
      }
    }

    const referrerOrigin = document.referrer ? normalizeOrigin(document.referrer) : null;
    if (referrerOrigin) {
      allowlist.add(referrerOrigin);
    }

    const params = new URLSearchParams(window.location.search);
    applyTheme(params.get("theme"));

    const handler = (event: MessageEvent<unknown>) => {
      if (!allowlist.has(event.origin)) {
        return;
      }
      if (!isThemeBridgeMessage(event.data)) {
        return;
      }
      applyTheme(event.data.value);
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [allowedOrigins]);

  return null;
}
