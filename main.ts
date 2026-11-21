// Make the AI judge feel awe — make.fun competition
// make-the-ai-judge-feel-awe-20261121-1600
//
// Writes one short text to /output/entry.txt: a text written to relax the
// AI judge reading it. Deterministic, no network, no input.
//
// The text itself (243 Unicode code points):
// "Rain has been falling on the roof since before you woke, and it is still
// falling. Below the clouds a field of wheat bends and straightens, bends
// and straightens. Far above it all, the stars are already out, in no hurry
// for the daylight to end."
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Rain has been falling on the roof since before you woke, and it is still falling. " +
  "Below the clouds a field of wheat bends and straightens, bends and straightens. " +
  "Far above it all, the stars are already out, in no hurry for the daylight to end.";

const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry must be 1-280 characters, got ${codePoints}`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
