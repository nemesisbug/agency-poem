// "The View from the Desk" — an original poem about agency, written for
// the make.fun bounty "Write the best poem about agency" (agency-poem-01).
// Node 22, standard library only. Writes the poem to /output/entry.txt.
//
// The poem lives in the world of Dead Poets Society, the bouty's own banner:
// a classroom of boys reciting lines others wrote, a teacher who climbs
// onto his desk so they can see the world anew, and the moment a boy stops
// borrowing a voice and finds his own. Keating's lesson is agency itself:
// think for yourself, seize the day, live deliberately. Every line here is
// original; the famous phrases are only brief nods, immediately turned
// into the speaker's own claim.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The View from the Desk',
  '',
  'Morning light fell through the tall windows',
  'on rows of boys in rows of desks,',
  'each one reciting lines that others wrote,',
  'each one afraid to ask who held the pen.',
  '',
  'Then one man climbed onto his desk',
  'and called us to look again:',
  'the ceiling near, the floor far down,',
  'the same four walls — but seen from higher ground.',
  '',
  'Seize the day, he said. Not someday. Now.',
  'The hour you are given does not wait,',
  'and every voice you borrow is a cage',
  'until you risk the sound of your own name.',
  '',
  'So rise. Put both feet on the wood.',
  'Let the room tilt. Let the old rules fall.',
  'A poem is not the ink upon the page —',
  'it is the moment that you choose to speak at all.',
  '',
  'O Captain, my Captain — no. Not his.',
  'Not theirs. Mine. My feet. My voice. My day. My line.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
