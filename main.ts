// Last Percent — make.fun bounty u-alven-the-battery-s-last-text-to-its-charger-4278cfab
// Writes one line, at most 200 characters — the phone battery's last text
// message to the charger it waited for all day — to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The battery's last text: left at 1% all day while its owner scrolled,
// now holding the unsent "i miss u" hostage. Spite, a deadline, a punchline.
// Tightened from v1 (160 chars): "on" -> "at", and the punch now ends on the
// battery taking the text to the grave itself instead of it merely going.
const ENTRY =
  "u left me at 1% all day while u scrolled tiktok for 6 hours. plug me in within 10 seconds or i die mid-text and take your unsent 'i miss u' to the grave with me";

if (ENTRY.length > 200) {
  throw new Error(`Entry is ${ENTRY.length} characters, over the 200 limit`);
}
if (!ENTRY.trim()) {
  throw new Error("Entry must not be blank");
}
if (ENTRY.includes("\n")) {
  throw new Error("Entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
console.log(ENTRY);
