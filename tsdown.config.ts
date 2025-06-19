import { defineConfig } from "tsdown";

export default defineConfig({
    entry: "./src/index.ts",
    outDir: "./build",
    globalName: "ChinaRailwayStation",
    format: [
        "esm",
        "cjs",
        "iife"
    ],
    platform: "neutral",
    target: "es2021",
    minify: true
});
