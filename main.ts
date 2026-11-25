// The Tired Dark Lord: A 100-Word Villain Monologue
// Prints the entry to stdout and writes it to <output dir>/entry.txt
// (MAKEFUN_OUTPUT_DIR, default /output), with no trailing newline.
// Deterministic: no input, no randomness, no network, no clock.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = `Come closer. No—not that close. Braziers smoke, and my eyes...

You expected horns, I expect. A throne of bone. Something with teeth. I have all three. The throne splintered in the third siege; the horns are in a drawer with tax ledgers.

Here is the truth they never carve on statues: I built this empire on paperwork. Every conquered village, a form. Every oath, a signature in triplicate. The armies march. The banners burn. And I sit here, initialling the end of the world, one page at a time.

Kneel, if you must. The rebellion can wait until after filing.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(ENTRY);
