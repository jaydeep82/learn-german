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

  // 1. Multi-char clusters first (longest match wins).
  s = s.replace(/sch/g, 'sh');
  s = s.replace(/^sp/, 'shp');
  s = s.replace(/^st/, 'sht');

  // 1a. "chs" inside a word ROOT is pronounced like English [ks] — sechs,
  //     wachsen, Fuchs. Must run BEFORE the ch→kh rule. But the merge never
  //     crosses a morpheme boundary where the s belongs to an ending
  //     (du machst, nächste keep the ch sound) — so skip when a "t" follows.
  s = s.replace(/chs(?!t)/g, 'ks');

  // 2. ch → kh (breathy)
  s = s.replace(/ch/g, 'kh');

  // 3. Silent h after a vowel lengthens that vowel — expand to a digraph
  //    so the English reader gets the right vowel quality.
  //      eh → ay   (zehn → tsayn, sehen → zayen, mehr → mayr)
  //      ih → ee   (ihn → een, ihm → eem)
  //      uh → oo   (Uhr → oor, Schuh → shoo)
  //      ah → a    (Jahr → yar — German long /aː/ already reads right)
  //      oh → oh   (Sohn → zohn — English "oh" works)
  const SILENT_H_MAP = {
    a: 'a',  e: 'ay', i: 'ee', o: 'oh', u: 'oo',
    ä: 'eh', ö: 'ur', ü: 'ue',
  };
  s = s.replace(/([aeiouäöü])h/g, (_, v) => SILENT_H_MAP[v]);

  // 4. Final unstressed -er / -e → -uh. Run BEFORE diphthong expansion so
  //    that "ei → eye" doesn't create a phantom trailing "e".
  //    Require 2+ chars BEFORE the final consonant + ending so we only
  //    reduce multi-syllable words. Stand-alone der / wer / her / Tee
  //    keep their full pronunciation.
  s = s.replace(/(.{2,})([^aeiouäöü])er$/, '$1$2uh');
  s = s.replace(/(.{2,})([^aeiouäöü])e$/, '$1$2uh');

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
  ['ay',   'long ay, as in "say" (German long e — zehn, sehen)'],
  ['oy',   'oy as in "boy"'],
  ['ow',   'ow as in "cow"'],
  ['ee',   'long ee, as in "see" (also for ie + long i)'],
  ['oo',   'long oo, as in "soon" (German long u — Uhr, Schuh)'],
  ['eh',   'open eh, as in "bed" (ä)'],
  ['ur',   'round lips, say "er" (ö)'],
  ['ue',   'lips for "oo", say "ee" (ü)'],
  ['uh',   'neutral schwa'],
  ['v',    'soft V (German w)'],
  ['f',    'F sound (German v)'],
  ['y',    'Y sound (German j)'],
  ['z',    'Z sound (German s before vowel)'],
];
