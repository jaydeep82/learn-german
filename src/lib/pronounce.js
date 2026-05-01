/**
 * Convert German text into an English-friendly phonetic approximation.
 *
 * This is a heuristic — it captures the rules from Day 1 (V→F, W→V, Z→ts,
 * J→Y, ch→kh, sch→sh, ä→eh, ö→ur, ü→ue, etc.) plus diphthongs and silent
 * h. It is not IPA — it is meant to be readable by absolute beginners.
 *
 * Notation we use:
 *   [kh] = breathy ch as in "Bach"
 *   [sh] = English "sh"
 *   [ts] = "ts" as in "cats"
 *   [eye]= long "i" as in "eye"
 *   [oy] = "oy" as in "boy"
 *   [ow] = "ow" as in "cow"
 *   [ue] = lips for "oo", say "ee" (German ü)
 *   [ur] = lips rounded, say "er" (German ö)
 *   [eh] = open "eh" as in "bed" (German ä)
 *   [uh] = neutral schwa
 */

function transliterate(word) {
  const wasCap = /^[A-ZÄÖÜ]/.test(word);
  let s = word.toLowerCase();

  // 1. Multi-char clusters first (longest match wins)
  s = s.replace(/sch/g, 'sh');
  s = s.replace(/^sp/, 'shp');
  s = s.replace(/^st/, 'sht');

  // 2. ch → kh (breathy)
  s = s.replace(/ch/g, 'kh');

  // 3. Silent h that lengthens the preceding vowel — drop it BEFORE we
  //    introduce new "h"s for umlauts/diphthongs (eh, oy, etc.)
  s = s.replace(/([aeiou])h/g, '$1');

  // 4. Final unstressed -er / -e → -uh. Run BEFORE diphthong expansion so
  //    that "ei → eye" doesn't create a phantom trailing "e".
  s = s.replace(/([^aeiouäöü])er$/, '$1uh');
  s = s.replace(/([^aeiouäöü])e$/, '$1uh');

  // 5. Single-letter swaps. Done BEFORE diphthongs so that the "w" we
  //    later introduce in "au→ow" / "y" in "ei→eye" can't collide with
  //    the w→v / j→y rules. Order within: v→f BEFORE w→v.
  s = s.replace(/z/g, 'ts');
  s = s.replace(/v/g, 'f');
  s = s.replace(/w/g, 'v');
  s = s.replace(/j/g, 'y');

  // 6. s at the start of a word before a vowel sounds like English "z"
  s = s.replace(/^s([aeiou])/, 'z$1');

  // 7. Diphthongs (do äu before ä, eu before e)
  s = s.replace(/eu/g, 'oy');
  s = s.replace(/äu/g, 'oy');
  s = s.replace(/ei/g, 'eye');
  s = s.replace(/ie/g, 'ee');
  s = s.replace(/au/g, 'ow');

  // 8. Umlauts and ß
  s = s.replace(/ä/g, 'eh');
  s = s.replace(/ö/g, 'ur');
  s = s.replace(/ü/g, 'ue');
  s = s.replace(/ß/g, 'ss');

  return wasCap ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}

const TOKENISER = /(\s+|[?!.,;:()„""''«»–—-])/;

export function pronounce(text) {
  if (!text) return '';
  return text
    .split(TOKENISER)
    .map((tok) => (TOKENISER.test(tok) || !tok ? tok : transliterate(tok)))
    .join('');
}

/** Tiny user-facing legend, used on Settings + Day 1. */
export const PRONUNCIATION_KEY = [
  ['kh',   'breathy ch — like Scottish "loch"'],
  ['sh',   'English sh, as in "ship"'],
  ['ts',   'ts as in "cats"'],
  ['eye',  'long i, as in "eye"'],
  ['oy',   'oy as in "boy"'],
  ['ow',   'ow as in "cow"'],
  ['ee',   'long e, as in "see"'],
  ['eh',   'open eh, as in "bed" (ä)'],
  ['ur',   'round lips, say "er" (ö)'],
  ['ue',   'lips for "oo", say "ee" (ü)'],
  ['uh',   'neutral schwa'],
  ['v',    'soft V (German w)'],
  ['f',    'F sound (German v)'],
  ['y',    'Y sound (German j)'],
  ['z',    'Z sound (German s before vowel)'],
];
