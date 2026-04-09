import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const htmlPath = path.join(distDir, "index.html");
const assetsDir = path.join(distDir, "assets");

const html = await readFile(htmlPath, "utf8");

if (!html.includes('/src/main.ts')) {
  console.log("dist/index.html already references built assets.");
  process.exit(0);
}

const assetNames = await readdir(assetsDir);
const jsAsset = assetNames.find((name) => /^index-[\w-]+\.js$/.test(name));
const cssAsset = assetNames.find((name) => /^index-[\w-]+\.css$/.test(name));

if (!jsAsset || !cssAsset) {
  throw new Error("Missing generated index assets in dist/assets.");
}

const replacement = [
  `    <link rel="stylesheet" crossorigin href="/assets/${cssAsset}" />`,
  `    <script type="module" crossorigin src="/assets/${jsAsset}"></script>`
].join("\n");

const nextHtml = html.replace(
  /<script type="module" src="\/src\/main\.ts"><\/script>/,
  replacement
);

if (nextHtml === html) {
  throw new Error("Could not find the Vite entry script in dist/index.html.");
}

await writeFile(htmlPath, nextHtml, "utf8");
console.log(`Updated dist/index.html to use ${jsAsset} and ${cssAsset}.`);
