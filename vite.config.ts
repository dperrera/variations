import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

/**
 * Next.js App Router requires the "use client" directive at the top of
 * published client-entry modules. Vite strips source directives during
 * transform, so re-inject it into every emitted JS chunk.
 */
function preserveUseClient(): Plugin {
  return {
    name: "preserve-use-client",
    generateBundle(_options, bundle) {
      for (const file of Object.values(bundle)) {
        if (file.type !== "chunk" || !file.isEntry) continue;
        if (file.code.startsWith('"use client"') || file.code.startsWith("'use client'")) {
          continue;
        }
        file.code = `"use client";\n${file.code}`;
      }
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src"],
      rollupTypes: true,
      insertTypesEntry: true,
    }),
    preserveUseClient(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "variations",
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
        exports: "named",
      },
    },
  },
});
