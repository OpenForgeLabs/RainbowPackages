import fs from "fs";
import path from "path";
import postcss from "postcss";
import tailwindPostcss from "@tailwindcss/postcss";

const root = process.cwd();
const preset = (await import(path.join(root, "packages", "ui", "tailwind-preset.mjs")))
  .default;

const semanticsPath = path.join(root, "packages", "ui", "styles", "semantics.css");
const semanticsCss = fs.readFileSync(semanticsPath, "utf8");

const input = `
@tailwind base;
@tailwind components;
@tailwind utilities;
${semanticsCss}
`;

const config = {
  presets: [preset],
  content: [
    "./packages/ui/src/**/*.{ts,tsx,js,jsx}",
    {
      raw: `
        <div class="bg-primary text-primary-foreground border-border"></div>
        <div class="bg-accent text-accent-foreground border-border-strong"></div>
        <div class="bg-success text-success-foreground border-border-subtle"></div>
        <div class="bg-warning text-warning-foreground"></div>
        <div class="bg-danger text-danger-foreground"></div>
        <div class="ring-2 focus:ring-[color:rgb(var(--rx-color-ring)/0.4)]"></div>
      `,
    },
  ],
};

const result = await postcss([tailwindPostcss(config)]).process(input, {
  from: undefined,
});

if (!result.css || result.css.length < 10) {
  throw new Error("Tailwind smoke test produced empty output.");
}

console.log("Tailwind smoke test passed.");
