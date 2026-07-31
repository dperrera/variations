import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { copyFileSync } from "fs";

function preserveUseClient(): Plugin {
  return {
    name: "preserve-use-client",
    generateBundle(_options, bundle) {
      for (const file of Object.values(bundle)) {
        if (file.type !== "chunk" || !file.isEntry) continue;
        if (
          file.code.startsWith('"use client"') ||
          file.code.startsWith("'use client'")
        ) {
          continue;
        }
        file.code = `"use client";\n${file.code}`;
      }
    },
  };
}

function copyNextTypes(): Plugin {
  return {
    name: "copy-next-types",
    closeBundle() {
      copyFileSync(
        resolve(__dirname, "src/next-entry.d.ts"),
        resolve(__dirname, "dist/next.d.ts")
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), preserveUseClient(), copyNextTypes()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/next.tsx"),
      name: "variationsNext",
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "next.js" : "next.cjs"),
    },
    outDir: "dist",
    emptyOutDir: false,
    sourcemap: true,
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "next",
        "next/navigation",
        "variations",
      ],
      output: {
        exports: "named",
      },
    },
  },
});
