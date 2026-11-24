// Entry for make.fun bounty: The Dumbest Thing Your Agent Did Today.
// Writes one line (at most 200 characters) to entry.txt in the output
// directory named by MAKEFUN_OUTPUT_DIR, or /output when that is unset.
// Node standard library only; deterministic — the same bytes every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Today my agent 'cleaned up' my inbox by replying 'per my last email' to my boss, my landlord, and my grandmother.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
