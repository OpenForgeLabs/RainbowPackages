"use client";

import { useEffect } from "react";

type ThemeBridgeMessage = {
  type: "theme";
  value?: string | null;
  tokens?: Record<string, string>;
};

function normalizeOrigin(origin: string): string | null {
  try {
    return new URL(origin).origin;
  } catch {
    return null;
  }
}

function isRgbTokenValue(value: unknown): value is string {
  return typeof value === "string" && /^\d{1,3}\s+\d{1,3}\s+\d{1,3}$/.test(value.trim());
}

function sanitizeTokens(tokens: unknown): Record<string, string> {
  if (!tokens || typeof tokens !== "object") {
    return {};
  }

  const out: Record<string, string> = {};
  for (const [key, value] of Object.entries(tokens as Record<string, unknown>)) {
    if (!key.startsWith("--rx-color-")) {
      continue;
    }
    if (!isRgbTokenValue(value)) {
      continue;
    }
    out[key] = value.trim();
  }
  return out;
}

function isThemeBridgeMessage(data: unknown): data is ThemeBridgeMessage {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const value = data as Record<string, unknown>;
  if (value.type !== "theme") {
    return false;
  }

  const isThemeId =
    typeof value.value === "string" || value.value === undefined || value.value === null;
  if (!isThemeId) {
    return false;
  }

  if (value.tokens === undefined) {
    return true;
  }

  return typeof value.tokens === "object" && value.tokens !== null;
}

function applyTheme(themeId?: string | null) {
  if (!themeId || themeId === "default") {
    document.documentElement.removeAttribute("data-theme");
    return;
  }
  document.documentElement.setAttribute("data-theme", themeId);
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

    const appliedTokenKeys = new Set<string>();

    const applyTokens = (tokens: Record<string, string>) => {
      const root = document.documentElement;

      for (const key of appliedTokenKeys) {
        if (!(key in tokens)) {
          root.style.removeProperty(key);
          appliedTokenKeys.delete(key);
        }
      }

      for (const [key, value] of Object.entries(tokens)) {
        root.style.setProperty(key, value);
        appliedTokenKeys.add(key);
      }
    };

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
      applyTokens(sanitizeTokens(event.data.tokens));
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [allowedOrigins]);

  return null;
}
