import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/vitest.setup.ts", 
    coverage: {
      provider: "v8",
      exclude: ["src/**/*.css.ts", "src/**/*.d.ts"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/app"),
    },
  },
});
