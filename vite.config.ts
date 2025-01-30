import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["styled-jsx/babel"],
      },
    }),
    dts(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "variations",
      formats: ["es", "umd", "cjs"],
      fileName: (format) => {
        switch (format) {
          case "es":
            return `index.es.js`;
          case "umd":
            return `index.umd.js`;
          case "cjs":
            return `index.js`;
          default:
            return `index.${format}.js`;
        }
      },
    },
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
