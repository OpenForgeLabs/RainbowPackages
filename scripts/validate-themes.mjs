import fs from "fs";
import path from "path";

const themesPath =
  process.argv[2] ??
  path.join(process.cwd(), "packages", "ui", "styles", "themes.css");

if (!fs.existsSync(themesPath)) {
  console.error(`themes.css not found at ${themesPath}`);
  process.exit(1);
}

const requiredTokens = [
  "--rx-color-bg",
  "--rx-color-surface",
  "--rx-color-surface-2",
  "--rx-color-surface-3",
  "--rx-color-overlay",
  "--rx-color-elevated",
  "--rx-color-text",
  "--rx-color-text-muted",
  "--rx-color-text-subtle",
  "--rx-color-text-inverse",
  "--rx-color-text-on-primary",
  "--rx-color-text-on-accent",
  "--rx-color-text-on-danger",
  "--rx-color-text-on-success",
  "--rx-color-text-on-warning",
  "--rx-color-border",
  "--rx-color-border-subtle",
  "--rx-color-border-strong",
  "--rx-color-divider",
  "--rx-color-ring",
  "--rx-color-focus",
  "--rx-color-primary",
  "--rx-color-primary-hover",
  "--rx-color-primary-active",
  "--rx-color-accent",
  "--rx-color-accent-hover",
  "--rx-color-accent-active",
  "--rx-color-control",
  "--rx-color-control-hover",
  "--rx-color-control-active",
  "--rx-color-success",
  "--rx-color-success-hover",
  "--rx-color-warning",
  "--rx-color-warning-hover",
  "--rx-color-danger",
  "--rx-color-danger-hover",
  "--rx-color-info",
  "--rx-color-viz-1",
  "--rx-color-viz-2",
  "--rx-color-viz-3",
  "--rx-color-viz-4",
  "--rx-color-viz-5",
  "--rx-color-viz-6",
  "--rx-color-viz-7",
  "--rx-color-viz-8",
  "--rx-color-viz-positive",
  "--rx-color-viz-negative",
  "--rx-color-viz-neutral",
  "--rx-radius-none",
  "--rx-radius-sm",
  "--rx-radius-md",
  "--rx-radius-lg",
  "--rx-radius-xl",
  "--rx-radius-full",
  "--rx-shadow-xs",
  "--rx-shadow-sm",
  "--rx-shadow-md",
  "--rx-shadow-lg",
  "--rx-shadow-xl",
  "--rx-motion-fast",
  "--rx-motion-normal",
  "--rx-motion-slow",
  "--rx-ease-standard",
  "--rx-ease-emphasized",
  "--rx-z-dropdown",
  "--rx-z-modal",
  "--rx-z-toast",
  "--rx-z-tooltip",
];

const content = fs.readFileSync(themesPath, "utf8");
const blockRegex = /(:root|\\[data-theme=\"([^\"]+)\"\\])\\s*\\{([\\s\\S]*?)\\}/g;
const tokenRegex = /(--rx-[^:]+):\\s*([^;]+);/g;

const parseRgb = (value) => {
  const parts = value.trim().split(/\\s+/).map(Number);
  if (parts.length < 3 || parts.some((part) => Number.isNaN(part))) return null;
  if (parts.some((part) => part < 0 || part > 255)) return null;
  return parts.slice(0, 3);
};

const luminance = (rgb) => {
  const channel = (c) => {
    const v = c / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * channel(rgb[0]) + 0.7152 * channel(rgb[1]) + 0.0722 * channel(rgb[2]);
};

const contrast = (a, b) => {
  const l1 = luminance(a);
  const l2 = luminance(b);
  const bright = Math.max(l1, l2);
  const dark = Math.min(l1, l2);
  return (bright + 0.05) / (dark + 0.05);
};

const failures = [];

for (const match of content.matchAll(blockRegex)) {
  const blockName = match[2] ?? "root";
  const body = match[3];
  const tokens = new Map();

  for (const tokenMatch of body.matchAll(tokenRegex)) {
    tokens.set(tokenMatch[1], tokenMatch[2].trim());
  }

  const missing = requiredTokens.filter((token) => !tokens.has(token));
  if (missing.length > 0) {
    failures.push(`Theme ${blockName} missing tokens: ${missing.join(", ")}`);
  }

  const colorTokens = requiredTokens.filter((token) => token.startsWith("--rx-color-"));
  for (const token of colorTokens) {
    const value = tokens.get(token);
    if (!value) continue;
    const parsed = parseRgb(value);
    if (!parsed) {
      failures.push(`Theme ${blockName} invalid rgb for ${token}: "${value}"`);
    }
  }

  const checkPairs = [
    ["--rx-color-text", "--rx-color-bg", "text on bg"],
    ["--rx-color-text-on-primary", "--rx-color-primary", "on-primary"],
    ["--rx-color-text-on-danger", "--rx-color-danger", "on-danger"],
    ["--rx-color-text-on-success", "--rx-color-success", "on-success"],
    ["--rx-color-text-on-warning", "--rx-color-warning", "on-warning"],
  ];

  for (const [fgToken, bgToken, label] of checkPairs) {
    const fg = parseRgb(tokens.get(fgToken) ?? "");
    const bg = parseRgb(tokens.get(bgToken) ?? "");
    if (!fg || !bg) continue;
    const ratio = contrast(fg, bg);
    if (ratio < 4.5) {
      failures.push(
        `Theme ${blockName} contrast ${label} too low (${ratio.toFixed(2)})`,
      );
    }
  }
}

if (failures.length) {
  console.error("Theme validation failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Theme validation passed.");
