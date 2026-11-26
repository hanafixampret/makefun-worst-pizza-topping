import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Gummy bears, melted straight into the mozzarella — every slice stretches, squeaks, and silently judges the choices that brought you here.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters, one line.
if (entry.length < 1 || entry.length > 200 || entry.includes("\n")) {
  throw new Error(`entry fails gate: ${entry.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`wrote ${entry.length} chars`);
