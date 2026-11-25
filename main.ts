import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });

// People Hugging is the makefun-emoji entry.
writeFileSync(join(outputDir, 'entry.txt'), '🫂', 'utf8');
