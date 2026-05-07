/**
 * 30-day German curriculum, mapped from the source PPT.
 * Each day declares the lesson objectives, vocabulary, grammar notes,
 * exercises, and a quick quiz. The data shape is consumed by
 * ExerciseRunner.jsx — keep keys stable when extending.
 */

export const PRONOUNS = [
  { de: 'ich',       en: 'I' },
  { de: 'du',        en: 'you (sg, informal)' },
  { de: 'er',        en: 'he' },
  { de: 'sie',       en: 'she' },
  { de: 'es',        en: 'it' },
  { de: 'wir',       en: 'we' },
  { de: 'ihr',       en: 'you (pl, informal)' },
  { de: 'Sie',       en: 'you (formal) / they' },
];

export const CONJ = {
  sein:   [['ich','bin'],['du','bist'],['er/sie/es','ist'],['wir','sind'],['ihr','seid'],['sie/Sie','sind']],
  haben:  [['ich','habe'],['du','hast'],['er/sie/es','hat'],['wir','haben'],['ihr','habt'],['sie/Sie','haben']],
  werden: [['ich','werde'],['du','wirst'],['er/sie/es','wird'],['wir','werden'],['ihr','werdet'],['sie/Sie','werden']],
  machen: [['ich','mache'],['du','machst'],['er/sie/es','macht'],['wir','machen'],['ihr','macht'],['sie/Sie','machen']],
  lernen: [['ich','lerne'],['du','lernst'],['er/sie/es','lernt'],['wir','lernen'],['ihr','lernt'],['sie/Sie','lernen']],
  arbeiten:[['ich','arbeite'],['du','arbeitest'],['er/sie/es','arbeitet'],['wir','arbeiten'],['ihr','arbeitet'],['sie/Sie','arbeiten']],
  spielen:[['ich','spiele'],['du','spielst'],['er/sie/es','spielt'],['wir','spielen'],['ihr','spielt'],['sie/Sie','spielen']],
  können: [['ich','kann'],['du','kannst'],['er/sie/es','kann'],['wir','können'],['ihr','könnt'],['sie/Sie','können']],
  müssen: [['ich','muss'],['du','musst'],['er/sie/es','muss'],['wir','müssen'],['ihr','müsst'],['sie/Sie','müssen']],
  wollen: [['ich','will'],['du','willst'],['er/sie/es','will'],['wir','wollen'],['ihr','wollt'],['sie/Sie','wollen']],
  dürfen: [['ich','darf'],['du','darfst'],['er/sie/es','darf'],['wir','dürfen'],['ihr','dürft'],['sie/Sie','dürfen']],
  sollen: [['ich','soll'],['du','sollst'],['er/sie/es','soll'],['wir','sollen'],['ihr','sollt'],['sie/Sie','sollen']],
  mögen:  [['ich','mag'],['du','magst'],['er/sie/es','mag'],['wir','mögen'],['ihr','mögt'],['sie/Sie','mögen']],
};

const conjEx = (verb, en) => ({
  type: 'conjugation',
  verb, en,
  rows: CONJ[verb].map(([pronoun, form]) => ({ pronoun, form })),
});

/**
 * Per-pronoun English glosses + example sentences keyed by verb. Used by
 * Days 5–7 (sein/haben/werden) — the high-confusion week-1 auxiliaries —
 * so each row of the conjugation table makes the I/he/she/it/we/they/you
 * mapping unmistakable.
 */
const PRONOUN_LABELS = [
  ['ich',       'I'],
  ['du',        'you (1 person you know)'],
  ['er/sie/es', 'he / she / it'],
  ['wir',       'we'],
  ['ihr',       'you all (group of friends)'],
  ['sie / Sie', 'they / you (formal)'],
];

const RICH_EXAMPLES = {
  sein: [
    { de: 'Ich bin müde.',         en: 'I am tired.' },
    { de: 'Du bist hier.',         en: 'You (1 friend) are here.' },
    { de: 'Er ist Lehrer.',        en: 'He is a teacher.' },
    { de: 'Wir sind Kollegen.',    en: 'We are colleagues.' },
    { de: 'Ihr seid spät.',        en: 'You all are late.' },
    { de: 'Sie sind glücklich.',   en: '"Sie sind" = both "they are" AND "you (formal) are".' },
  ],
  haben: [
    { de: 'Ich habe Hunger.',          en: 'I have hunger → I am hungry.' },
    { de: 'Du hast Zeit.',             en: 'You (1 friend) have time.' },
    { de: 'Sie hat eine Idee.',        en: 'She has an idea.  (sie + hat → "she")' },
    { de: 'Wir haben Stress.',         en: 'We have stress.' },
    { de: 'Ihr habt Probleme.',        en: 'You all (group) have problems.' },
    { de: 'Sie haben einen Termin.',   en: '"Sie haben" = "they have" OR "you (formal) have".' },
  ],
  werden: [
    { de: 'Ich werde müde.',           en: 'I am becoming tired.' },
    { de: 'Du wirst schneller.',       en: 'You (1 friend) are getting faster.' },
    { de: 'Es wird besser.',           en: 'It is getting better.' },
    { de: 'Wir werden ruhig.',         en: 'We are becoming calm.' },
    { de: 'Ihr werdet nervös.',        en: 'You all are getting nervous.' },
    { de: 'Sie werden langsamer.',     en: '"Sie werden" = "they are" / "you (formal) are" becoming slower.' },
  ],
};

const richConjEx = (verb, en) => ({
  type: 'conjugation',
  verb, en,
  rows: CONJ[verb].map(([pronoun, form], i) => ({
    pronoun,
    form,
    english: PRONOUN_LABELS[i][1],
    example: RICH_EXAMPLES[verb]?.[i],
  })),
});

export const days = [
  /* ===================== WEEK 1: foundations ===================== */
  {
    id: 1, week: 1,
    title: 'Sounds of German',
    titleDe: 'Die Laute des Deutschen',
    emoji: '🔤',
    objective: 'Master the pronunciation traps that trip up English speakers.',
    intro: 'German uses the Latin alphabet but several letters sound very different from English. Learn these "traps" first — they unlock correct pronunciation for everything that follows.',
    vocabulary: [
      // V sounds like F
      { de: 'Vater',   en: 'father',   hint: 'V → F   say "FAH-tuh"' },
      { de: 'Vogel',   en: 'bird',     hint: 'V → F   say "FOH-gel"' },
      { de: 'viel',    en: 'much / a lot', hint: 'V → F   say "feel"' },
      // W sounds like soft V
      { de: 'Wasser',  en: 'water',    hint: 'W → soft V   say "VAH-sser"' },
      { de: 'Wein',    en: 'wine',     hint: 'W → soft V   say "vine" (rhymes with "shine")' },
      // Z sounds like ts
      { de: 'Zeit',    en: 'time',     hint: 'Z → ts   say "tsait" (rhymes with "kite")' },
      { de: 'Zoo',     en: 'zoo',      hint: 'Z → ts   say "tso"' },
      // J sounds like Y
      { de: 'ja',      en: 'yes',      hint: 'J → Y   say "ya"' },
      { de: 'Jahr',    en: 'year',     hint: 'J → Y   say "yar"' },
      { de: 'Junge',   en: 'boy',      hint: 'J → Y   say "YOONG-uh"' },
      // Hard ch — back of throat
      { de: 'Bach',    en: 'stream',   hint: 'hard ch — air from the back of the throat' },
      { de: 'kochen',  en: 'to cook',  hint: 'hard ch (after a / o / u): "KOKH-en"' },
      { de: 'machen',  en: 'to do',    hint: 'hard ch: "MAKH-en"' },
      // Soft ch — front of mouth
      { de: 'ich',     en: 'I',        hint: 'soft ch (after i / e / consonants): "ikh"' },
      { de: 'nicht',   en: 'not',      hint: 'soft ch: "nikht"' },
      { de: 'Milch',   en: 'milk',     hint: 'soft ch: "milkh"' },
      // sch = English sh
      { de: 'Schule',  en: 'school',   hint: 'sch = English "sh": "SHOO-luh"' },
      // Umlauts
      { de: 'Bär',     en: 'bear',     hint: 'ä = open "eh" (like English "bed", lips wider)' },
      { de: 'schön',   en: 'beautiful',hint: 'ö = lips for "oh", tongue says "eh"' },
      { de: 'Öl',      en: 'oil',      hint: 'ö stand-alone: "url" (lips rounded, no R sound)' },
      { de: 'müde',    en: 'tired',    hint: 'ü = lips for "oo", tongue says "ee": "MUE-duh"' },
      // Compound words
      { de: 'Wochenende',     en: 'weekend',     hint: 'chunk it: Wo-chen-en-de' },
      { de: 'Hausaufgabe',    en: 'homework',    hint: 'chunk it: Haus-auf-ga-be' },
      { de: 'Softwareentwicklung', en: 'software development', hint: 'chunk it: Soft-ware-ent-wick-lung' },
    ],
    grammar: [
      { rule: 'V → F', body: 'Vater, Vogel, viel — the V is pronounced like English F.' },
      { rule: 'W → soft V', body: 'Wasser, Wein, was — softer than English V.' },
      { rule: 'Z → ts', body: 'Zeit, Zoo, zehn — never like English Z.' },
      { rule: 'J → Y', body: 'ja, Jahr, Junge — never like English J.' },
      { rule: 'ch / sch', body: 'ch = airy sound (Bach). sch = English sh (Schule).' },
      { rule: 'Hard ch vs soft ch',
        body:
          'German has TWO "ch" sounds — same spelling, different mouth position:\n' +
          '• Hard ch (after a / o / u / au): Bach, kochen, machen, lachen, Buch — air from the BACK of the throat. Like Scottish "loch".\n' +
          '• Soft ch (after e / i / ä / ö / ü / consonants): ich, nicht, Milch, möchte, Mädchen — air from the FRONT, near the roof of the mouth. Almost a hiss.\n' +
          'If you can\'t produce the hard ch yet, that\'s normal — it sits deeper than any English sound.',
      },
      { rule: 'Unlocking the hard "ch"',
        body:
          'Six tricks to find the sound:\n' +
          '1. Imagine a cat hissing — but deeper in the throat.\n' +
          '2. A quiet "k" without closing the mouth — air flows, but no full "k".\n' +
          '3. Pretend your glasses are dirty — breathe on them: "hhh…" then push it deeper.\n' +
          '4. Like fogging up a mirror — long warm air, then stronger.\n' +
          '5. Imagine a hair in your throat — soft clearing sound.\n' +
          '6. Strong whisper — push the "h" backward.',
      },
      { rule: 'Unlocking the "ö" — front-rounded vowel',
        body:
          'Eight tricks to find the umlauted ö:\n' +
          '1. Say "e" (like in "bed"), then ROUND your lips → becomes ö.\n' +
          '2. Think of English "bird" — similar but shorter and clearer.\n' +
          '3. Start with "e", then move your lips forward and round them.\n' +
          '4. Tongue stays relaxed in the middle (not high, not low).\n' +
          '5. Round your lips gently (like saying "o", but not too strong).\n' +
          '6. The sound sits in the middle of your mouth — not deep in the throat.\n' +
          '7. Keep it short and clean, not stretched.\n' +
          '8. Listen for ö in: schön, hören, möchte, Brötchen, Öl.',
      },
      { rule: 'Umlauts ä ö ü', body: 'On a US keyboard you may type ae, oe, ue.' },
      { rule: 'English loan words keep English sounds',
        body:
          'Some everyday German words are imported from English and KEEP their English pronunciation:\n' +
          '• Software, Sport, Service — start with English "S" (not the German Z-sound).\n' +
          '• Computer — sounds like English "computer".\n' +
          '• Job, Manager — pronounced English-style.\n' +
          'When you see one of these inside a compound (e.g. Softwareentwicklung), pronounce the loan part as English, the rest as German.',
      },
      { rule: 'Long compound words — break them up',
        body:
          'German loves to glue nouns together. Don\'t try to say the whole word at once — chunk it:\n' +
          '• Softwareentwicklung → Soft-ware-ent-wick-lung\n' +
          '• Wochenende → Wo-chen-en-de\n' +
          '• Hausaufgabe → Haus-auf-ga-be\n' +
          '• Verkäufer → Ver-käu-fer\n' +
          'Reading hint: most compounds are stressed on the FIRST chunk.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      // Letter → sound pairing — locks in the four core swaps
      {
        type: 'match',
        pairs: [
          { de: 'V',  en: 'sounds like English F' },
          { de: 'W',  en: 'sounds like English soft V' },
          { de: 'Z',  en: 'sounds like English "ts"' },
          { de: 'J',  en: 'sounds like English Y' },
        ],
      },
      {
        type: 'multiple-choice',
        q: 'Which letter is pronounced like English "Y"?',
        options: ['V', 'J', 'Z', 'W'],
        answer: 'J',
        explain: '"ja" is said "ya". "Jahr" → "yar". "Junge" → "YOONG-uh".',
      },
      {
        type: 'multiple-choice',
        q: 'How is "Zeit" pronounced?',
        options: [
          'Like English "zeyt" (English Z sound)',
          'Like English "tsayt" — rhymes with "kite", but with a "ts" at the start',
          'Like English "sayt" (English S sound)',
          'Like English "yayt" (Y sound)',
        ],
        answer: 'Like English "tsayt" — rhymes with "kite", but with a "ts" at the start',
        explain: 'Z always = ts. The diphthong "ei" sounds like the English word "eye".',
      },
      {
        type: 'match',
        pairs: [
          { de: 'Vater',  en: 'father' },
          { de: 'Wasser', en: 'water' },
          { de: 'Schule', en: 'school' },
          { de: 'müde',   en: 'tired' },
        ],
      },
      {
        type: 'multiple-choice',
        q: 'Which word uses the HARD ch (back of the throat)?',
        options: ['ich', 'nicht', 'machen', 'Milch'],
        answer: 'machen',
        explain: 'After a / o / u / au, ch is hard: machen, Bach, kochen, auch.',
      },
      {
        type: 'multiple-choice',
        q: 'Which word uses the SOFT ch (front of the mouth)?',
        options: ['Bach', 'kochen', 'lachen', 'Milch'],
        answer: 'Milch',
        explain: 'After i / e / ä / ö / ü / consonants, ch is soft: ich, Milch, nicht, möchte.',
      },
      {
        type: 'multiple-choice',
        q: 'Which letter combination does NOT exist in standard German?',
        options: ['sch', 'ch', 'tsch', 'dsch'],
        answer: 'dsch',
        explain: 'sch = English "sh". ch = the air sound. tsch = English "ch" (Deutsch). "dsch" is not a standard German cluster.',
      },
      {
        type: 'multiple-choice',
        q: 'On a US keyboard, how can you type ä, ö, ü?',
        options: ['ah / oh / uh', 'ae / oe / ue', 'a- / o- / u-', "a' / o' / u'"],
        answer: 'ae / oe / ue',
        explain: 'Mädchen ↔ Maedchen, schön ↔ schoen, müde ↔ muede. Recognised by all Germans.',
      },
      {
        type: 'dialogue',
        lines: [
          { speaker: 'Hard CH text', de: 'Ich bin im Restaurant und der Koch kocht heute frisch.', en: 'I am at the restaurant and the cook is cooking fresh today.' },
          { speaker: 'Hard CH',     de: 'Ich mache eine Pause und ich lache.',                       en: 'I take a break and I laugh.' },
          { speaker: 'Hard CH',     de: 'Das Essen ist gut und ich mache ein Foto.',                  en: 'The food is good and I take a photo.' },
          { speaker: 'Soft CH text',de: 'Ich bin im Restaurant und ich möchte einen Kaffee mit Milch.', en: 'I am at the restaurant and I would like a coffee with milk.' },
          { speaker: 'Soft CH',     de: 'Ich bin hungrig, aber ich esse nicht viel.',                 en: 'I am hungry, but I don\'t eat much.' },
          { speaker: 'Soft CH',     de: 'Ich spreche mit dem Kellner und ich frage: „Wie viel kostet das?"', en: 'I speak with the waiter and I ask: "How much does that cost?"' },
        ],
      },
      {
        type: 'dialogue',
        lines: [
          { speaker: 'ö-text',  de: 'Ich höre Musik und ich möchte ein Brötchen essen.',  en: 'I am listening to music and I would like to eat a bread roll.' },
          { speaker: 'ö-text',  de: 'Der Bäcker ist schön und ich spreche mit dem Verkäufer.', en: 'The bakery is beautiful and I speak with the salesperson.' },
          { speaker: 'ö-text',  de: 'Ich kaufe ein Brötchen und ein Öl.',                 en: 'I buy a bread roll and an oil.' },
          { speaker: 'ö-text',  de: 'Der Verkäufer ist höflich und ich sage: „Danke schön!"', en: 'The salesperson is polite and I say: "Thank you very much!"' },
        ],
      },
      // Comprehension on the ö passage — proves you decoded it, not just listened to it
      {
        type: 'multiple-choice',
        q: 'In the ö-text: what does the speaker buy?',
        options: ['a coffee and milk', 'a bread roll and an oil', 'a book and a song', 'a cake and a tea'],
        answer: 'a bread roll and an oil',
        explain: '"Ich kaufe ein Brötchen und ein Öl." — Brötchen = bread roll, Öl = oil.',
      },
      {
        type: 'multiple-choice',
        q: 'How many ö-sounds appear in: „Der Verkäufer ist höflich"?',
        options: ['0', '1', '2', '3'],
        answer: '2',
        explain: 'Verkäufer (äu — diphthong, sounds like English "oy") · höflich (ö — front-rounded vowel). Two umlaut sounds, but only one is the pure ö.',
      },
    ],
    quiz: [
      { type: 'multiple-choice', q: 'German "W" sounds most like…', options: ['English W', 'English soft V', 'F', 'Silent'], answer: 'English soft V' },
      { type: 'multiple-choice', q: 'German "V" sounds most like…', options: ['English V', 'English F', 'English W', 'Silent'], answer: 'English F' },
      { type: 'multiple-choice', q: 'Pick the correct umlaut spelling for "schoen".', options: ['schön','schon','schoen','schøn'], answer: 'schön' },
      { type: 'multiple-choice', q: 'Break "Wochenende" into chunks.', options: ['Wo-che-nen-de', 'Wo-chen-en-de', 'Woc-hen-ende', 'Wochen-en-de'], answer: 'Wo-chen-en-de' },
      { type: 'multiple-choice', q: '"Junge" is pronounced…', options: ['"JUNG-eh" (English J)', '"YOONG-uh" (Y sound)', '"DZHOONG-uh" (English J)', '"GOONG-eh" (G sound)'], answer: '"YOONG-uh" (Y sound)' },
      { type: 'multiple-choice', q: 'Why does "Software" in "Softwareentwicklung" start with an English S, not the German Z-sound?',
        options: [
          'It is irregular.',
          'It is a loan word from English — keeps its English pronunciation.',
          'Because of the silent T after S.',
          'No reason — both pronunciations are correct.',
        ],
        answer: 'It is a loan word from English — keeps its English pronunciation.',
      },
    ],
  },

  {
    id: 2, week: 1,
    title: 'Numbers 0–29',
    titleDe: 'Zahlen 0–29',
    emoji: '🔢',
    objective: 'Count from zero to twenty-nine — and pronounce the tricky ones (sechs, sieben, zwölf) right.',
    intro: 'Numbers are everywhere — age, phone, prices, times. German has three patterns: 0-12 are unique words, 13-19 is "unit + zehn", and 21-29 FLIPS to "unit-and-twenty" (einundzwanzig = "one-and-twenty").',
    vocabulary: [
      // 0-12 — unique words, all to be memorised
      { de: 'null',   en: '0',  hint: 'simple "nool"' },
      { de: 'eins',   en: '1',  hint: 'rhymes with English "rhinos" (start)' },
      { de: 'zwei',   en: '2',  hint: 'tsv-eye — kids often say "zwo" on the phone to avoid confusion with drei' },
      { de: 'drei',   en: '3',  hint: 'rhymes with English "fly"' },
      { de: 'vier',   en: '4',  hint: 'V→F: "feer", same as English "fear"' },
      { de: 'fünf',   en: '5',  hint: 'ü = lips for oo, say ee → "fuenf"' },
      { de: 'sechs',  en: '6',  hint: '⚠ "chs" sounds like English [ks]: "zeks" (not "zekh-s")' },
      { de: 'sieben', en: '7',  hint: '"ZEE-ben" — long e, soft b' },
      { de: 'acht',   en: '8',  hint: 'hard ch: "akht"' },
      { de: 'neun',   en: '9',  hint: 'eu = oy: "noyn"' },
      { de: 'zehn',   en: '10', hint: 'silent h = long e: "tsayn"' },
      { de: 'elf',    en: '11', hint: 'just "elf" — same as the English word' },
      { de: 'zwölf',  en: '12', hint: 'ö = lips for oh, tongue says eh: "tsvurlf"' },
      // 13-19 — unit + zehn
      { de: 'dreizehn',  en: '13', hint: 'drei + zehn: "DRYE-tsayn"' },
      { de: 'vierzehn',  en: '14', hint: 'vier + zehn: "FEER-tsayn"' },
      { de: 'fünfzehn',  en: '15', hint: 'fünf + zehn: "FUENF-tsayn"' },
      { de: 'sechzehn',  en: '16', hint: '⚠ NO -s- (not sechszehn): "ZEKH-tsayn"' },
      { de: 'siebzehn',  en: '17', hint: '⚠ NO -en- (not siebenzehn): "ZEEP-tsayn"' },
      { de: 'achtzehn',  en: '18', hint: 'acht + zehn: "AKH-tsayn"' },
      { de: 'neunzehn',  en: '19', hint: 'neun + zehn: "NOYN-tsayn"' },
      // 20 + flips
      { de: 'zwanzig',           en: '20', hint: 'final -ig sounds like soft "ich" / "ik": "TSVAN-tsikh"' },
      { de: 'einundzwanzig',     en: '21', hint: '⚠ EIN- not eins-: drops the s before "und"' },
      { de: 'zweiundzwanzig',    en: '22', hint: 'two-and-twenty' },
      { de: 'dreiundzwanzig',    en: '23', hint: 'three-and-twenty' },
      { de: 'vierundzwanzig',    en: '24', hint: 'four-and-twenty' },
      { de: 'fünfundzwanzig',    en: '25', hint: 'five-and-twenty' },
      { de: 'sechsundzwanzig',   en: '26', hint: 'six-and-twenty (full sechs — NOT sechundzwanzig)' },
      { de: 'siebenundzwanzig',  en: '27', hint: 'seven-and-twenty (full sieben — NOT siebundzwanzig)' },
      { de: 'achtundzwanzig',    en: '28', hint: 'eight-and-twenty' },
      { de: 'neunundzwanzig',    en: '29', hint: 'nine-and-twenty' },
    ],
    grammar: [
      { rule: 'Three building blocks for any 0-29 number',
        body:
          '• 0-12   — unique words, just memorise them.\n' +
          '• 13-19  — UNIT + zehn, written as ONE word: drei-zehn, vier-zehn, fünf-zehn …\n' +
          '• 20     — zwanzig, then 21-29 FLIP: UNIT + und + zwanzig (einundzwanzig).\n' +
          '21 drops the -s of "eins" → ein-und-zwanzig (not eins-und-zwanzig).',
      },
      { rule: 'Pronunciation traps in numbers',
        body:
          '• sechs (6) — the "chs" cluster sounds like English [ks]. Say "zeks", NOT "zekh-s".\n' +
          '• sechzehn (16) — drops the -s- before zehn: sech-zehn (zekh-tsayn).\n' +
          '• siebzehn (17) — drops the -en- of sieben before zehn: sieb-zehn (zeep-tsayn).\n' +
          '  But sechsundzwanzig (26) and siebenundzwanzig (27) keep the FULL form (sechs-, sieben-).\n' +
          '• zehn (10) — silent h lengthens the e: "tsayn", not "tsen".\n' +
          '• -ig endings — zwanzig is pronounced "TSVAN-tsikh" in northern German, "TSVAN-tsig" in the south. Both fine.',
      },
      { rule: 'Where you\'ll use these every day',
        body:
          '• Age: "Ich bin 25 Jahre alt." → "Ich bin fünfundzwanzig Jahre alt."\n' +
          '• Phone numbers: spoken as pairs — 0151 → null-eins-fünf-eins.\n' +
          '• Prices and time come in Days 18-19; today\'s numbers are the foundation.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      // Pronunciation drills — specifically targeting the traps
      {
        type: 'multiple-choice',
        q: 'How is "sechs" (6) pronounced?',
        options: [
          'Zekh-s (kh + s separately)',
          'Zeks — "chs" sounds like English [ks]',
          'Sex (English S sound)',
          'Sekhs (English S + kh)',
        ],
        answer: 'Zeks — "chs" sounds like English [ks]',
        explain: 'In German, "chs" inside a word merges to [ks]. Sechs, wachsen, nächste all use this rule.',
      },
      {
        type: 'multiple-choice',
        q: 'How is "zehn" (10) pronounced?',
        options: [
          '"Tsen" — short e (rhymes with "den")',
          '"Tsayn" — long e (rhymes with "main")',
          '"Zayn" — English Z',
          '"Tsen-h" — pronounce the h',
        ],
        answer: '"Tsayn" — long e (rhymes with "main")',
        explain: 'A silent h after a vowel makes that vowel LONG. zehn = "tsayn".',
      },
      {
        type: 'multiple-choice',
        q: 'How do you say 21?',
        options: ['zwanzigeins','einsundzwanzig','einundzwanzig','zwanzigundeins'],
        answer: 'einundzwanzig',
        explain: 'Unit-und-tens, AND drop the -s of eins → ein-und-zwanzig.',
      },
      // Spelling traps
      {
        type: 'multiple-choice',
        q: 'Pick the correct spelling of 16.',
        options: ['sechszehn', 'sechzehn', 'sechs-zehn', 'sechtzehn'],
        answer: 'sechzehn',
        explain: '16 drops the -s of sechs before zehn. But 26 (sechsundzwanzig) keeps the full sechs.',
      },
      {
        type: 'multiple-choice',
        q: 'Pick the correct spelling of 17.',
        options: ['siebenzehn', 'siebzehn', 'sieb-zehn', 'siebnzehn'],
        answer: 'siebzehn',
        explain: '17 drops the -en of sieben. But 27 (siebenundzwanzig) keeps it.',
      },
      // Real-world fill-blanks
      { type: 'fill-blank', sentence: 'Ich bin __ Jahre alt. (25)',                     answer: 'fünfundzwanzig' },
      { type: 'fill-blank', sentence: 'Mein Bruder ist __ Jahre alt. (16)',              answer: 'sechzehn' },
      { type: 'fill-blank', sentence: 'Die Klasse hat __ Studenten. (29)',                answer: 'neunundzwanzig' },
      { type: 'fill-blank', sentence: 'Eine Woche hat __ Tage. (7)',                      answer: 'sieben' },
      { type: 'fill-blank', sentence: 'Ein Jahr hat __ Monate. (12)',                     answer: 'zwölf' },
      // Match
      {
        type: 'match',
        pairs: [
          { de: 'sieben',          en: '7' },
          { de: 'zwölf',           en: '12' },
          { de: 'achtzehn',        en: '18' },
          { de: 'zweiundzwanzig',  en: '22' },
          { de: 'sechsundzwanzig', en: '26' },
        ],
      },
    ],
    quiz: [
      { type: 'multiple-choice', q: 'Which number is "fünfzehn"?', options: ['5','15','50','55'], answer: '15' },
      { type: 'multiple-choice', q: 'Which number is "neunundzwanzig"?', options: ['9','19','29','99'], answer: '29' },
      { type: 'multiple-choice', q: 'Which spelling is correct for 16?', options: ['sechszehn','sechzehn','sechtzehn','sex-zehn'], answer: 'sechzehn' },
      { type: 'multiple-choice', q: 'How does "sechs" sound?', options: ['ZEX (chs = ks)','ZEKH-S','SEX','SEKH-S'], answer: 'ZEX (chs = ks)' },
      { type: 'fill-blank', sentence: '13 = __', answer: 'dreizehn' },
      { type: 'fill-blank', sentence: '21 = __', answer: 'einundzwanzig' },
      { type: 'fill-blank', sentence: '"My phone number ends with 27." = … endet mit __ .', answer: 'siebenundzwanzig' },
    ],
  },

  {
    id: 3, week: 1,
    title: 'Personal pronouns',
    titleDe: 'Personalpronomen',
    emoji: '👤',
    objective: 'Use the six person pronouns to refer to yourself and others.',
    intro: 'German has formal "Sie" for strangers and informal "du" for friends. Children always get "du".',
    vocabulary: PRONOUNS,
    grammar: [
      { rule: 'Singular vs plural', body: 'ich/du/er/sie/es are singular. wir/ihr/sie are plural.' },
      { rule: 'Capitalised Sie', body: 'Formal "Sie" is always capitalised — even mid-sentence.' },
      { rule: 'er/sie/es match the article', body: 'der Laptop → er, die Tasche → sie, das Handy → es.' },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      { type: 'multiple-choice', q: 'You meet your manager for the first time. Use…', options: ['du','ihr','Sie','es'], answer: 'Sie' },
      { type: 'multiple-choice', q: 'Replace "der Laptop" with a pronoun.', options: ['es','er','sie','das'], answer: 'er' },
      { type: 'match', pairs: [
        { de: 'ich', en: 'I' }, { de: 'wir', en: 'we' },
        { de: 'ihr', en: 'you (plural)' }, { de: 'Sie', en: 'you (formal)' },
      ]},
    ],
    quiz: [
      { type: 'multiple-choice', q: 'Which pronoun is for "she"?', options: ['er','sie','es','ihr'], answer: 'sie' },
      { type: 'fill-blank', sentence: '____ sind eine Lehrerin. (formal you)', answer: 'Sie' },
    ],
  },

  {
    id: 4, week: 1,
    title: 'Articles: der, die, das',
    titleDe: 'Artikel: der, die, das',
    emoji: '🪪',
    objective: 'Recognise the three genders and pick the right pronoun.',
    intro: 'Every German noun has a gender. Learn the article with the noun — never separately.',
    vocabulary: [
      { de: 'der Tisch',  en: 'the table (m)' },
      { de: 'der Stuhl',  en: 'the chair (m)' },
      { de: 'der Laptop', en: 'the laptop (m)' },
      { de: 'die Lampe',  en: 'the lamp (f)' },
      { de: 'die Tasche', en: 'the bag (f)' },
      { de: 'die Frau',   en: 'the woman (f)' },
      { de: 'das Buch',   en: 'the book (n)' },
      { de: 'das Handy',  en: 'the mobile (n)' },
      { de: 'das Kind',   en: 'the child (n)' },
      { de: 'die Leute',  en: 'the people (pl)' },
    ],
    grammar: [
      { rule: 'Three genders', body: 'der = masculine, die = feminine, das = neuter. Plurals always use die.' },
      { rule: 'Article → pronoun', body: 'der → er, die → sie, das → es. die (plural) → sie.' },
      { rule: 'Trust the article, not logic', body: '"das Mädchen" (the girl) is neuter because of the -chen suffix.' },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      { type: 'multiple-choice', q: 'Which article goes with "Tisch"?', options: ['der','die','das'], answer: 'der' },
      { type: 'multiple-choice', q: '"die Tasche" → which pronoun?', options: ['er','sie','es'], answer: 'sie' },
      { type: 'match', pairs: [
        { de: 'der', en: 'masculine' }, { de: 'die', en: 'feminine' },
        { de: 'das', en: 'neuter' }, { de: 'die (pl)', en: 'plural' },
      ]},
    ],
    quiz: [
      { type: 'multiple-choice', q: 'Pick the correct article for "Buch".', options: ['der','die','das'], answer: 'das' },
      { type: 'multiple-choice', q: '"das Handy" is referred to as…', options: ['er','sie','es'], answer: 'es' },
    ],
  },

  {
    id: 5, week: 1,
    title: 'sein — to be',
    titleDe: 'Das Verb „sein"',
    emoji: '🟦',
    objective: 'Conjugate "sein" and use it in basic sentences.',
    intro: '"sein" is the most important verb in German. It is irregular — memorise all six forms today.',
    vocabulary: [
      { de: 'müde',     en: 'tired' },     { de: 'hungrig',  en: 'hungry' },
      { de: 'durstig',  en: 'thirsty' },   { de: 'fertig',   en: 'finished' },
      { de: 'spät',     en: 'late' },      { de: 'früh',     en: 'early' },
      { de: 'glücklich',en: 'happy' },     { de: 'krank',    en: 'sick' },
      { de: 'hier',     en: 'here' },      { de: 'da',       en: 'there' },
      { de: 'gut',      en: 'good' },      { de: 'bereit',   en: 'ready' },
    ],
    grammar: [
      { rule: 'sein conjugation', body: 'ich bin · du bist · er/sie/es ist · wir sind · ihr seid · sie/Sie sind' },
      { rule: 'Verb in 2nd position', body: 'Main clauses always have the conjugated verb in slot 2: "Ich bin müde."' },
    ],
    exercises: [
      richConjEx('sein', 'to be'),
      { type: 'fill-blank', sentence: 'Ich __ Softwareentwickler.',  answer: 'bin' },
      { type: 'fill-blank', sentence: 'Du __ Softwareentwickler.',   answer: 'bist' },
      { type: 'fill-blank', sentence: 'Er __ in einer Firma.',       answer: 'ist' },
      { type: 'fill-blank', sentence: 'Sie __ in einer Firma.',      answer: 'ist', hint: 'sie = she (singular)' },
      { type: 'fill-blank', sentence: 'Es __ deutsch.',              answer: 'ist' },
      { type: 'fill-blank', sentence: 'Wir __ ein Team.',            answer: 'sind' },
      { type: 'fill-blank', sentence: 'Ihr __ in einer Stadt.',      answer: 'seid' },
      { type: 'fill-blank', sentence: 'Sie __ Kollegen.',            answer: 'sind', hint: 'Kollegen is plural → sie = they' },
      { type: 'fill-blank', sentence: 'Wir __ Kollegen.',            answer: 'sind' },
      { type: 'fill-blank', sentence: 'Er __ hier.',                 answer: 'ist' },
      { type: 'fill-blank', sentence: 'Ich __ aus Indien.',          answer: 'bin' },
      { type: 'fill-blank', sentence: 'Es __ ein Moment.',           answer: 'ist' },
      { type: 'multiple-choice', q: 'Pick the correct form: "Ihr __ spät."', options: ['bin','bist','seid','sind'], answer: 'seid' },
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Du __ müde.', answer: 'bist' },
      { type: 'multiple-choice', q: 'Which is correct?', options: ['Ich ist hier.','Ich bin hier.','Ich sind hier.','Ich seid hier.'], answer: 'Ich bin hier.' },
    ],
  },

  {
    id: 6, week: 1,
    title: 'haben — to have',
    titleDe: 'Das Verb „haben"',
    emoji: '🟩',
    objective: 'Conjugate "haben" and talk about possessions and feelings.',
    intro: '"haben" is used for ownership AND for body states like hunger and thirst (where English uses "to be").',
    vocabulary: [
      { de: 'die Zeit',     en: 'time' },        { de: 'der Hunger', en: 'hunger' },
      { de: 'der Durst',    en: 'thirst' },      { de: 'der Stress', en: 'stress' },
      { de: 'die Arbeit',   en: 'work' },        { de: 'die Frage',  en: 'question' },
      { de: 'das Problem',  en: 'problem' },     { de: 'die Pause',  en: 'break' },
      { de: 'die Idee',     en: 'idea' },        { de: 'der Termin', en: 'appointment' },
    ],
    grammar: [
      { rule: 'haben conjugation', body: 'ich habe · du hast · er/sie/es hat · wir haben · ihr habt · sie/Sie haben' },
      { rule: 'Hunger/Durst', body: 'Use "Ich habe Hunger" — literally "I have hunger" — not "Ich bin hungrig" (which means I am the hungry type).' },
      {
        rule: '⚠ The three "sies" — don\'t panic',
        body:
          'German has THREE words spelled "sie/Sie". The verb form tells you which one:\n' +
          '• sie hat / sie ist  → "she" (singular)\n' +
          '• sie haben / sie sind → "they" (plural, lowercase)\n' +
          '• Sie haben / Sie sind → "you" formal (capital S, used with bosses, strangers, officials).\n' +
          'Trick: if the verb ending is the singular one ("hat", "ist"), it must be "she". If it is the plural form ("haben", "sind"), it is either "they" or formal "you" — context tells you which.',
      },
      {
        rule: 'Quick pronoun map',
        body:
          'ich = I  |  du = you (1 friend)  |  er = he  |  sie = she  |  es = it\n' +
          'wir = we  |  ihr = you all (group of friends)  |  sie = they  |  Sie = you (formal)',
      },
    ],
    exercises: [
      richConjEx('haben', 'to have'),
      { type: 'fill-blank', sentence: 'Ich __ ein Moment.',   answer: 'habe' },
      { type: 'fill-blank', sentence: 'Du __ eine Firma.',    answer: 'hast' },
      { type: 'fill-blank', sentence: 'Er __ ein Meeting.',   answer: 'hat' },
      { type: 'fill-blank', sentence: 'Sie __ ein Team.',     answer: 'hat', hint: 'sie + hat → "she" (singular)' },
      { type: 'fill-blank', sentence: 'Es __ einen Namen.',   answer: 'hat' },
      { type: 'fill-blank', sentence: 'Wir __ ein Meeting.',  answer: 'haben' },
      { type: 'fill-blank', sentence: 'Ihr __ eine Firma.',   answer: 'habt' },
      { type: 'fill-blank', sentence: 'Sie __ ein Team.',     answer: 'haben', hint: 'sie + haben → "they" (plural)' },
      { type: 'fill-blank', sentence: 'Ich __ Hunger.',       answer: 'habe' },
      { type: 'fill-blank', sentence: 'Wir __ Zeit.',         answer: 'haben' },
      { type: 'fill-blank', sentence: 'Sie __ eine Idee.',    answer: 'hat', hint: 'singular subject "she"' },
      { type: 'multiple-choice', q: '"Ihr __ Stress." — pick the form.', options: ['habe','hast','habt','haben'], answer: 'habt' },
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Du __ einen Termin.', answer: 'hast' },
      { type: 'multiple-choice', q: 'How do Germans say "I am thirsty"?', options: ['Ich bin Durst.','Ich habe Durst.','Ich Durst bin.','Ich durstig.'], answer: 'Ich habe Durst.' },
    ],
  },

  {
    id: 7, week: 1,
    title: 'werden + sentence rules',
    titleDe: '„werden" + Satzregeln',
    emoji: '🟨',
    objective: 'Conjugate "werden" and apply the two basic German sentence rules.',
    intro: '"werden" means "to become" or, paired with another verb, expresses the future. We end Week 1 with two iron rules of word order.',
    vocabulary: [
      { de: 'ruhig',     en: 'calm' },      { de: 'nervös',   en: 'nervous' },
      { de: 'besser',    en: 'better' },    { de: 'langsamer', en: 'slower' },
      { de: 'schneller', en: 'faster' },    { de: 'müde',      en: 'tired' },
    ],
    grammar: [
      { rule: 'werden conjugation', body: 'ich werde · du wirst · er/sie/es wird · wir werden · ihr werdet · sie/Sie werden' },
      { rule: 'Rule 1 — verb second', body: 'In a main clause, the conjugated verb sits in position 2.' },
      { rule: 'Rule 2 — capitalise nouns', body: 'EVERY noun starts with a capital letter, no matter where it sits in the sentence.' },
    ],
    exercises: [
      richConjEx('werden', 'to become'),
      { type: 'fill-blank', sentence: 'Ich __ Softwareentwickler.',  answer: 'werde', hint: 'becoming — future direction' },
      { type: 'fill-blank', sentence: 'Du __ Softwareentwickler.',   answer: 'wirst' },
      { type: 'fill-blank', sentence: 'Er __ Softwareentwickler.',   answer: 'wird' },
      { type: 'fill-blank', sentence: 'Es __ ein Meeting.',          answer: 'wird' },
      { type: 'fill-blank', sentence: 'Wir __ ein Team.',            answer: 'werden' },
      { type: 'fill-blank', sentence: 'Ihr __ ein Team.',            answer: 'werdet' },
      { type: 'fill-blank', sentence: 'Sie __ Kollegen.',            answer: 'werden', hint: 'plural subject' },
      { type: 'fill-blank', sentence: 'Ich __ müde.',                answer: 'werde' },
      { type: 'fill-blank', sentence: 'Es __ besser.',               answer: 'wird' },
      { type: 'fill-blank', sentence: 'Sie __ eine Kollegin.',       answer: 'wird', hint: 'sie (singular) + wird → "she"' },
      // Mixed challenge — pick whichever auxiliary fits the meaning. Slide 41.
      { type: 'fill-blank', sentence: 'Ich __ Softwareentwickler. (right now)',     answer: 'bin' },
      { type: 'fill-blank', sentence: 'Du __ einen Moment.',                        answer: 'hast' },
      { type: 'fill-blank', sentence: 'Sie __ ein Team. (development — future)',    answer: 'werden' },
      { type: 'fill-blank', sentence: 'Wir __ Kollegen. (development — future)',    answer: 'werden' },
      { type: 'multiple-choice',
        q: 'Which sentence is correct?',
        options: ['ich habe hunger.','Ich Habe Hunger.','Ich habe Hunger.','Ich habe hunger'],
        answer: 'Ich habe Hunger.',
        explain: 'Capitalise the first word AND every noun — Hunger.' },
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Wir __ ruhig.', answer: 'werden' },
      { type: 'multiple-choice', q: 'Which word MUST be capitalised in "ich kaufe ein buch"?', options: ['ich','kaufe','ein','buch'], answer: 'buch' },
    ],
  },

  /* ===================== WEEK 2: building sentences ===================== */
  {
    id: 8, week: 2,
    title: 'Numbers 30–100',
    titleDe: 'Zahlen 30–100',
    emoji: '💯',
    objective: 'Count up to one hundred.',
    intro: 'The tens follow the same pattern as zwanzig — but watch out for "dreißig" (with ß, no -z-).',
    vocabulary: [
      { de: 'dreißig', en: '30' }, { de: 'vierzig', en: '40' },
      { de: 'fünfzig', en: '50' }, { de: 'sechzig', en: '60' },
      { de: 'siebzig', en: '70' }, { de: 'achtzig', en: '80' },
      { de: 'neunzig', en: '90' }, { de: 'hundert', en: '100' },
      { de: 'einundvierzig', en: '41' }, { de: 'siebenundsechzig', en: '67' },
    ],
    grammar: [
      { rule: '30 is special', body: 'dreißig — written with ß and without a -z- in the stem.' },
      { rule: 'Same flip rule', body: '67 = sieben-und-sechzig. Read units before tens.' },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      { type: 'fill-blank', sentence: '67 = __', answer: 'siebenundsechzig' },
      { type: 'multiple-choice', q: 'How is 30 written?', options: ['dreizig','dreißig','dreissig','dreizen'], answer: 'dreißig' },
      { type: 'match', pairs: [
        { de: 'fünfzig', en: '50' }, { de: 'achtzig', en: '80' },
        { de: 'einundvierzig', en: '41' }, { de: 'hundert', en: '100' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: '99 = neunund__', answer: 'neunzig' },
      { type: 'multiple-choice', q: 'Pick 76.', options: ['siebenundsechzig','sechsundsiebzig','siebzigsechs','siebzigundsechs'], answer: 'sechsundsiebzig' },
    ],
  },

  {
    id: 9, week: 2,
    title: 'Subject · Verb · Object',
    titleDe: 'Subjekt · Verb · Objekt',
    emoji: '🧩',
    objective: 'Spot the subject, verb and object in any simple sentence.',
    intro: 'A German sentence usually follows S-V-O — like English. The subject does the action; the object receives it.',
    vocabulary: [
      { de: 'der Lehrer',  en: 'the teacher' },
      { de: 'der Student', en: 'the student' },
      { de: 'das Wort',    en: 'the word' },
      { de: 'der Satz',    en: 'the sentence' },
      { de: 'die Frage',   en: 'the question' },
    ],
    grammar: [
      { rule: 'S-V-O', body: '"Der Student schreibt den Satz." — Student (S) writes (V) the sentence (O).' },
      { rule: 'Verb still 2nd', body: 'Even if the object comes first for emphasis, the verb stays in position 2.' },
      { rule: 'Question test',
        body:
          'To find the subject, ask "Wer / Was?" (Who / What is doing the action?).\n' +
          'To find the object, ask "Wen / Was?" (Whom / What is being acted on?).\n' +
          'Example: "Heute habe ich Hunger." Wer hat Hunger? → ich (subject). Was hat ich? → Hunger (object).',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      { type: 'multiple-choice', q: 'In "Der Lehrer erklärt das Wort", what is the SUBJECT?', options: ['Der Lehrer','erklärt','das Wort','Wort'], answer: 'Der Lehrer' },
      { type: 'multiple-choice', q: 'And the OBJECT?', options: ['Der Lehrer','erklärt','das Wort','das'], answer: 'das Wort' },
      { type: 'multiple-choice', q: '"Heute habe ich Hunger." — what is the subject?', options: ['Heute','habe','ich','Hunger'], answer: 'ich' },
      { type: 'multiple-choice', q: '"Heute habe ich Hunger." — what is the object?', options: ['Heute','habe','ich','Hunger'], answer: 'Hunger' },
      { type: 'multiple-choice', q: '"Wir haben eine Idee." — subject?', options: ['Wir','haben','eine Idee','—'], answer: 'Wir' },
      { type: 'multiple-choice', q: '"Wir haben eine Idee." — object?', options: ['Wir','haben','eine Idee','—'], answer: 'eine Idee' },
      { type: 'multiple-choice', q: '"Im Team haben wir Aufgaben." — subject?', options: ['Im Team','haben','wir','Aufgaben'], answer: 'wir' },
      { type: 'multiple-choice', q: '"Im Team haben wir Aufgaben." — object?', options: ['Im Team','haben','wir','Aufgaben'], answer: 'Aufgaben' },
      { type: 'multiple-choice', q: '"Morgen wird das Lernen besser." — subject?', options: ['Morgen','wird','das Lernen','besser'], answer: 'das Lernen' },
      { type: 'fill-blank', sentence: 'Der Student __ den Satz. (writes)', answer: 'schreibt' },
    ],
    quiz: [
      { type: 'multiple-choice', q: 'Which is the verb in "Wir lernen Deutsch"?', options: ['Wir','lernen','Deutsch','—'], answer: 'lernen' },
    ],
  },

  {
    id: 10, week: 2,
    title: 'Regular verbs — the pattern',
    titleDe: 'Regelmäßige Verben',
    emoji: '🔁',
    objective: 'Conjugate any regular verb by stripping -en and adding the right ending.',
    intro: 'Take the infinitive (machen), drop -en (mach-), then add the ending that matches the pronoun.',
    vocabulary: [
      { de: 'machen',  en: 'to do/make' }, { de: 'lernen',  en: 'to learn' },
      { de: 'spielen', en: 'to play' },    { de: 'arbeiten',en: 'to work' },
      { de: 'kaufen',  en: 'to buy' },     { de: 'fragen',  en: 'to ask' },
      { de: 'hören',   en: 'to hear' },    { de: 'wohnen',  en: 'to live (reside)' },
    ],
    grammar: [
      { rule: 'Endings cheat-sheet', body: 'ich -e · du -st · er/sie/es -t · wir -en · ihr -t · sie/Sie -en' },
      { rule: 'Stem ends in -t/-d', body: 'Add an extra "e": du arbeit-est, er arbeit-et — easier to pronounce.' },
    ],
    exercises: [
      conjEx('machen', 'to do'),
      conjEx('arbeiten', 'to work'),
      { type: 'fill-blank', sentence: 'Ich __ Deutsch. (lernen)', answer: 'lerne' },
      { type: 'fill-blank', sentence: 'Wir __ Fußball. (spielen)', answer: 'spielen' },
      { type: 'fill-blank', sentence: 'Er __ in Berlin. (wohnen)', answer: 'wohnt' },
      // trinken drill — slide 62. Multiple subjects, same verb.
      { type: 'fill-blank', sentence: 'Ich __ Rotwein. (trinken)',                       answer: 'trinke' },
      { type: 'fill-blank', sentence: 'Du __ Weißwein. (trinken)',                       answer: 'trinkst' },
      { type: 'fill-blank', sentence: 'Robert und Sabine __ Bier. (trinken)',            answer: 'trinken', hint: 'two people = plural' },
      { type: 'fill-blank', sentence: 'Der Hund __ Wasser. (trinken)',                   answer: 'trinkt', hint: 'der Hund → er → -t' },
      { type: 'fill-blank', sentence: 'Celina und ich __ Sprite. (trinken)',             answer: 'trinken', hint: '"… and I" = wir' },
      { type: 'fill-blank', sentence: 'Ihr __ Tee. (trinken)',                           answer: 'trinkt' },
      // wohnen drill — slide 63
      { type: 'fill-blank', sentence: 'Ich __ in Berlin. (wohnen)',                      answer: 'wohne' },
      { type: 'fill-blank', sentence: 'Du __ auch in Berlin. (wohnen)',                  answer: 'wohnst' },
      { type: 'fill-blank', sentence: 'Celina und ich __ in meiner Wohnung. (wohnen)',   answer: 'wohnen' },
      { type: 'fill-blank', sentence: 'Ihr __ in Indien. (wohnen)',                      answer: 'wohnt' },
      // arbeiten drill — slide 64. Stem ends in -t, takes -et / -est.
      { type: 'fill-blank', sentence: 'Mein Team und ich __ in Indien. (arbeiten)',      answer: 'arbeiten' },
      { type: 'fill-blank', sentence: 'Die Kollegin __ in unserem Team. (arbeiten)',     answer: 'arbeitet', hint: 'stem ends in t → -et' },
      { type: 'fill-blank', sentence: 'Der Chef __ in unserem Büro. (arbeiten)',         answer: 'arbeitet' },
      { type: 'fill-blank', sentence: 'Die Kunden __ auch in der IT. (arbeiten)',        answer: 'arbeiten' },
      { type: 'fill-blank', sentence: 'Du __ als Deutschlehrer. (arbeiten)',             answer: 'arbeitest', hint: 'stem ends in t → -est, not -st' },
    ],
    quiz: [
      { type: 'multiple-choice', q: '"du lernen" → ?', options: ['lerne','lernst','lernt','lernen'], answer: 'lernst' },
      { type: 'fill-blank', sentence: 'Sie (she) __ ein Buch. (kaufen)', answer: 'kauft' },
    ],
  },

  {
    id: 11, week: 2,
    title: 'Common verbs in action',
    titleDe: 'Häufige Verben',
    emoji: '⚡',
    objective: 'Use eight everyday verbs in real sentences.',
    intro: 'You already know the conjugation pattern. Today we lock in eight high-frequency verbs.',
    vocabulary: [
      { de: 'kommen',    en: 'to come' },     { de: 'gehen',     en: 'to go' },
      { de: 'essen',     en: 'to eat (irreg.)' }, { de: 'trinken',  en: 'to drink' },
      { de: 'sehen',     en: 'to see (irreg.)' }, { de: 'schreiben',en: 'to write' },
      { de: 'lesen',     en: 'to read (irreg.)' }, { de: 'sprechen', en: 'to speak (irreg.)' },
      { de: 'besuchen',    en: 'to visit' },
      { de: 'zeigen',      en: 'to show' },
      { de: 'benutzen',    en: 'to use' },
      { de: 'erklären',    en: 'to explain' },
      { de: 'wiederholen', en: 'to repeat' },
      { de: 'üben',        en: 'to practise' },
      { de: 'suchen',      en: 'to search / look for' },
      { de: 'schicken',    en: 'to send' },
      { de: 'erzählen',    en: 'to tell (a story)' },
      { de: 'fragen',      en: 'to ask' },
      { de: 'warten',      en: 'to wait' },
    ],
    grammar: [
      { rule: 'Stem-changers', body: 'essen → ich esse, du isst, er isst. sehen → du siehst, er sieht. The change happens only in du / er / sie / es.' },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      { type: 'fill-blank', sentence: 'Du __ einen Apfel. (essen)', answer: 'isst' },
      { type: 'fill-blank', sentence: 'Sie (she) __ ein Buch. (lesen)', answer: 'liest' },
      { type: 'multiple-choice', q: '"er sprechen" → ?', options: ['sprecht','sprechst','spricht','spreche'], answer: 'spricht' },
      // Slide 89 challenge — the visit/show/use mini-set.
      { type: 'fill-blank', sentence: 'Der Student __ den Freund. (besuchen)',                answer: 'besucht' },
      { type: 'fill-blank', sentence: 'Ich __ den Studenten. (besuchen)',                     answer: 'besuche' },
      { type: 'fill-blank', sentence: 'Die Lehrerin __ den Studenten das Buch. (zeigen)',     answer: 'zeigt' },
      { type: 'fill-blank', sentence: 'Wir __ den Computer. (benutzen)',                      answer: 'benutzen' },
      // Mixed practice with the new verbs
      { type: 'fill-blank', sentence: 'Der Lehrer __ die Grammatik. (erklären)',              answer: 'erklärt' },
      { type: 'fill-blank', sentence: 'Wir __ jeden Tag. (üben)',                             answer: 'üben' },
      { type: 'fill-blank', sentence: 'Du __ deinen Schlüssel. (suchen)',                     answer: 'suchst' },
      { type: 'fill-blank', sentence: 'Sie (they) __ eine E-Mail. (schicken)',                answer: 'schicken' },
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Wir __ Wasser. (trinken)', answer: 'trinken' },
      { type: 'multiple-choice', q: 'Which is correct?', options: ['Ich sehe.','Ich siehe.','Ich sehe.','Ich seht.'], answer: 'Ich sehe.' },
    ],
  },

  {
    id: 13, week: 2,
    title: 'Time, frequency, preference',
    titleDe: 'Zeit · Häufigkeit · Präferenz',
    emoji: '🕒',
    objective: 'Drop time- and frequency-words into a sentence in the right order.',
    intro: 'Order: Subject → Verb → Time → (Frequency) → (Preference) → Object. "Ich lerne heute oft gerne Deutsch."',
    vocabulary: [
      // Time
      { de: 'heute',         en: 'today' },
      { de: 'morgen',        en: 'tomorrow' },
      { de: 'jetzt',         en: 'now' },
      { de: 'jeden Tag',     en: 'every day' },
      { de: 'am Wochenende', en: 'on the weekend' },
      { de: 'nach der Arbeit', en: 'after work' },
      { de: 'in meiner Freizeit', en: 'in my free time' },
      // Frequency
      { de: 'oft',           en: 'often' },
      { de: 'manchmal',      en: 'sometimes' },
      { de: 'immer',         en: 'always' },
      { de: 'nie',           en: 'never' },
      // Preference
      { de: 'gerne',         en: 'gladly (like to)' },
      { de: 'sehr gerne',    en: 'very much (like to)' },
      // Hobby verbs (slide 66)
      { de: 'reisen',        en: 'to travel' },
      { de: 'kochen',        en: 'to cook' },
      { de: 'schauen',       en: 'to watch' },
      { de: 'hören',         en: 'to listen' },
      { de: 'programmieren', en: 'to program' },
      // Hobby objects (slide 66)
      { de: 'Bücher',        en: 'books' },
      { de: 'Filme',         en: 'movies' },
      { de: 'Musik',         en: 'music' },
      { de: 'Sport',         en: 'sport' },
      { de: 'Freunde',       en: 'friends' },
      { de: 'Kollegen',      en: 'colleagues' },
      { de: 'Code',          en: 'code' },
      { de: 'Spiele',        en: 'games' },
      { de: 'Rezepte',       en: 'recipes' },
      { de: 'Länder',        en: 'countries' },
      { de: 'Städte',        en: 'cities' },
    ],
    grammar: [
      { rule: 'TeKaMoLo (light)', body: 'Time first, then place. "Ich lerne heute zu Hause Deutsch."' },
      { rule: '"gerne" before object', body: '"Ich trinke gerne Kaffee" — placed right before the object to mean "I like to drink coffee".' },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      { type: 'fill-blank', sentence: 'Ich lerne __ Deutsch. (every day)', answer: 'jeden Tag' },
      // Hobby-sentence builders — apply S + V + Time + Frequency + Preference + Object
      { type: 'fill-blank', sentence: 'Ich __ jeden Tag gerne Musik. (listen)',          answer: 'höre' },
      { type: 'fill-blank', sentence: 'Wir __ am Wochenende oft Fußball. (play)',        answer: 'spielen' },
      { type: 'fill-blank', sentence: 'Sie (she) __ in ihrer Freizeit gerne. (cook)',    answer: 'kocht' },
      { type: 'fill-blank', sentence: 'Du __ nach der Arbeit Bücher. (read)',            answer: 'liest', hint: 'lesen, irreg.: du liest' },
      { type: 'fill-blank', sentence: 'Ich __ sehr gerne Code. (program)',               answer: 'programmiere' },
      { type: 'multiple-choice',
        q: 'Which sentence is in the right order?',
        options: [
          'Ich heute lerne Deutsch.',
          'Ich lerne heute Deutsch.',
          'Ich lerne Deutsch heute gerne.',
          'Heute Deutsch ich lerne.',
        ],
        answer: 'Ich lerne heute Deutsch.' },
      { type: 'multiple-choice',
        q: 'Pick the natural order: subject + verb + Time + Frequency + Preference + Object.',
        options: [
          'Ich Musik höre jeden Tag oft gerne.',
          'Ich höre jeden Tag oft gerne Musik.',
          'Jeden Tag oft gerne Musik ich höre.',
          'Ich höre Musik jeden Tag oft gerne.',
        ],
        answer: 'Ich höre jeden Tag oft gerne Musik.',
        explain: 'Time → Frequency → Preference → Object. The verb stays in slot 2.' },
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Wir spielen __ Fußball. (often)', answer: 'oft' },
      { type: 'multiple-choice', q: '"gerne" usually expresses…', options: ['time','frequency','preference','place'], answer: 'preference' },
    ],
  },

  {
    id: 14, week: 2,
    title: 'Introducing yourself',
    titleDe: 'Sich vorstellen',
    emoji: '👋',
    objective: 'Hold a 60-second self-introduction in German.',
    intro: 'Bundle everything from Week 1–2 into one fluent paragraph about you.',
    vocabulary: [
      { de: 'Hallo',         en: 'hello' },          { de: 'Guten Tag',  en: 'good day' },
      { de: 'Mein Name ist', en: 'My name is' },     { de: 'Ich heiße',  en: 'I am called' },
      { de: 'Ich komme aus', en: 'I come from' },    { de: 'Ich wohne in', en: 'I live in' },
      { de: 'Ich bin __ Jahre alt', en: 'I am __ years old' },
      { de: 'Ich lerne Deutsch', en: 'I learn German' },
    ],
    grammar: [
      { rule: 'Greeting register', body: '"Hallo" is informal; "Guten Tag" works everywhere; "Servus" is southern German.' },
    ],
    exercises: [
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Hallo! Wie heißt du?',                 en: 'Hi, what are you called?' },
        { speaker: 'B', de: 'Ich heiße Anna. Und du?',              en: 'I am called Anna. And you?' },
        { speaker: 'A', de: 'Ich heiße Tom. Woher kommst du?',      en: 'I am called Tom. Where are you from?' },
        { speaker: 'B', de: 'Ich komme aus Indien und wohne in Berlin.', en: 'I come from India and live in Berlin.' },
        { speaker: 'A', de: 'Wie alt bist du?',                     en: 'How old are you?' },
        { speaker: 'B', de: 'Ich bin fünfundzwanzig Jahre alt.',    en: 'I am 25 years old.' },
      ]},
      { type: 'fill-blank', sentence: 'Ich __ Anna. (am called)', answer: 'heiße' },
      { type: 'fill-blank', sentence: 'Ich __ aus Indien. (come)', answer: 'komme' },
      // Moritz translation drill — slide 167-168. Translate one sentence at a time.
      { type: 'fill-blank', sentence: '"My name is Moritz." → Mein Name __ Moritz.',     answer: 'ist' },
      { type: 'fill-blank', sentence: '"I am 27 years old." → Ich __ 27 Jahre alt.',     answer: 'bin' },
      { type: 'fill-blank', sentence: '"I come from Germany." → Ich komme __ Deutschland.', answer: 'aus' },
      { type: 'fill-blank', sentence: '"I live in Dorfen." → Ich __ in Dorfen.',         answer: 'wohne', hint: 'wohnen / leben both work — use wohnen' },
      { type: 'fill-blank', sentence: '"I am a teacher." → Ich __ Lehrer.',              answer: 'bin' },
      { type: 'fill-blank', sentence: '"I work in a school." → Ich __ in einer Schule.', answer: 'arbeite' },
      { type: 'fill-blank', sentence: '"I have a friend." → Ich __ einen Freund.',       answer: 'habe' },
      { type: 'fill-blank', sentence: '"In my free time, I play football." → In meiner Freizeit __ ich Fußball.', answer: 'spiele', hint: 'time-phrase first → verb still position 2 → subject after verb' },
      { type: 'fill-blank', sentence: '"On Saturday, I sometimes play a game." → Am Samstag __ ich manchmal ein Spiel.', answer: 'spiele' },
    ],
    quiz: [
      { type: 'multiple-choice', q: 'Which is most formal?', options: ['Hallo','Servus','Guten Tag','Hi'], answer: 'Guten Tag' },
      { type: 'fill-blank', sentence: 'Ich __ in Berlin.', answer: 'wohne' },
    ],
  },

  {
    id: 15, week: 3,
    title: 'Week 1+2 review',
    titleDe: 'Wiederholung Woche 1+2',
    emoji: '🏁',
    objective: 'Lock in everything before tackling cases.',
    intro: 'A spaced-repetition pass through what you have learned. Aim for ≥ 80%.',
    vocabulary: [],
    grammar: [],
    exercises: [
      { type: 'multiple-choice', q: '21 = ?', options: ['einsundzwanzig','einundzwanzig','zwanzigundeins','einzwanzig'], answer: 'einundzwanzig' },
      { type: 'fill-blank', sentence: 'Wir __ müde. (sein)', answer: 'sind' },
      { type: 'fill-blank', sentence: 'Du __ eine Frage. (haben)', answer: 'hast' },
      { type: 'fill-blank', sentence: 'Ich __ Deutsch. (lernen)', answer: 'lerne' },
      { type: 'multiple-choice', q: '"das Buch" → which pronoun?', options: ['er','sie','es'], answer: 'es' },
      { type: 'multiple-choice', q: 'Which is correct?', options: ['Ich oft lerne Deutsch.','Ich lerne oft Deutsch.','Oft Deutsch ich lerne.','Ich Deutsch lerne oft.'], answer: 'Ich lerne oft Deutsch.' },
    ],
    quiz: [],
  },

  /* ===================== WEEK 3: numbers + Akkusativ ===================== */
  {
    id: 18, week: 3,
    title: 'Numbers 100–1000',
    titleDe: 'Zahlen 100–1000',
    emoji: '🧮',
    objective: 'Read and write three-digit numbers.',
    intro: 'Hundreds + tens-with-flip = full number. 365 = drei-hundert-fünf-und-sechzig.',
    vocabulary: [
      { de: 'einhundert',   en: '100' }, { de: 'zweihundert', en: '200' },
      { de: 'tausend',      en: '1000' },{ de: 'einhundertfünfundzwanzig', en: '125' },
      { de: 'dreihundertfünfundsechzig', en: '365' },
    ],
    grammar: [
      { rule: 'Big numbers stay one word', body: 'Even 99,999 is written without spaces in old style. Modern usage allows spacing for readability.' },
    ],
    exercises: [
      { type: 'fill-blank', sentence: '125 = ein__fünfundzwanzig', answer: 'hundert' },
      { type: 'multiple-choice', q: '365 = ?', options: ['dreihundertsechsundfünfzig','dreihundertfünfundsechzig','sechsdreihundertfünfzig','dreihundertfünf'], answer: 'dreihundertfünfundsechzig' },
    ],
    quiz: [{ type: 'fill-blank', sentence: '1000 = __', answer: 'tausend' }],
  },

  {
    id: 21, week: 3,
    title: 'Akkusativ — masculine flips',
    titleDe: 'Akkusativ (m)',
    emoji: '➡️',
    objective: 'Change "der" to "den" when a noun is the direct object.',
    intro: 'In German the article changes shape when the noun receives the action. Only masculine articles change in the accusative — the others stay the same.',
    vocabulary: [
      { de: 'der Mann → den Mann',   en: 'the man (subject → object)' },
      { de: 'der Tisch → den Tisch', en: 'the table' },
      { de: 'der Kaffee → den Kaffee', en: 'the coffee' },
      { de: 'ein Mann → einen Mann', en: 'a man' },
    ],
    grammar: [
      { rule: 'Akkusativ table',
        body: 'm: der → den · ein → einen | f: die → die · eine → eine | n: das → das · ein → ein | pl: die → die.' },
      { rule: 'When?', body: 'Whenever the noun is the direct object — the thing being verbed.' },
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Ich sehe __ Mann. (the)', answer: 'den' },
      { type: 'fill-blank', sentence: 'Wir kaufen __ Tisch. (a)', answer: 'einen' },
      { type: 'multiple-choice', q: 'Which is correct?', options: ['Ich trinke der Kaffee.','Ich trinke den Kaffee.','Ich trinke dem Kaffee.','Ich trinke des Kaffees.'], answer: 'Ich trinke den Kaffee.' },
      // Akkusativ masculine drill — slide 125 (definite) + 126 (indefinite)
      { type: 'fill-blank', sentence: 'Der Freund besucht __ Student. (the, masc. Akk.)', answer: 'den' },
      { type: 'fill-blank', sentence: 'Der Student benutzt __ Computer. (the, masc. Akk.)', answer: 'den' },
      { type: 'fill-blank', sentence: 'Der Student kauft __ Buch. (a, neuter Akk.)', answer: 'ein' },
      { type: 'fill-blank', sentence: 'Der Freund besucht __ Studentin. (a, fem. Akk.)', answer: 'eine' },
      { type: 'fill-blank', sentence: 'Der Student erzählt __ Geschichte. (a, fem. Akk.)', answer: 'eine' },
      { type: 'fill-blank', sentence: 'Die Freunde kaufen __ Buch. (a, neuter Akk.)', answer: 'ein' },
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Er hat __ Hund. (a, masc.)', answer: 'einen' },
      { type: 'fill-blank', sentence: 'Der Kollege besucht __ Freunde. (no article — already plural)', answer: 'die', hint: 'die for plural Akk' },
    ],
  },

  {
    id: 22, week: 4,
    title: 'Akkusativ — f / n / plural',
    titleDe: 'Akkusativ (f, n, pl)',
    emoji: '🔄',
    objective: 'Confirm that feminine, neuter and plural articles do NOT change.',
    intro: 'Good news: only masculine articles change in the Akkusativ. The rest stay identical to the Nominativ form.',
    vocabulary: [
      { de: 'die Tasche', en: 'the bag (f)' },
      { de: 'das Buch',   en: 'the book (n)' },
      { de: 'die Bücher', en: 'the books (pl)' },
    ],
    grammar: [
      { rule: 'No-change rule',
        body: 'die / das / die-plural look identical as subject and as direct object.' },
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Ich kaufe __ Tasche. (the)', answer: 'die' },
      { type: 'fill-blank', sentence: 'Wir lesen __ Buch. (the)', answer: 'das' },
      { type: 'fill-blank', sentence: 'Sie hat __ Bücher. (the, pl)', answer: 'die' },
      // Definite Nominativ drill — slide 123
      { type: 'fill-blank', sentence: '__ Studenten benutzen das Buch. (the, plural)', answer: 'Die' },
      { type: 'fill-blank', sentence: '__ Geschichte ist interessant. (the, fem.)', answer: 'Die' },
      { type: 'fill-blank', sentence: 'Am Wochenende erzählt __ Kollege eine Geschichte. (the, masc.)', answer: 'der' },
      // Indefinite Nominativ drill — slide 124
      { type: 'fill-blank', sentence: '__ Studentin arbeitet in der Firma. (a, fem.)', answer: 'Eine' },
      { type: 'fill-blank', sentence: '__ Freund besucht den Studenten. (a, masc.)', answer: 'Ein' },
      { type: 'fill-blank', sentence: 'Am Wochenende besucht __ Freund den Studenten. (a, masc.)', answer: 'ein' },
    ],
    quiz: [
      { type: 'multiple-choice', q: '"Ich habe __ Idee." (a, fem.)', options: ['einen','eine','ein','einer'], answer: 'eine' },
    ],
  },

  {
    id: 23, week: 4,
    title: 'Nominativ vs Akkusativ',
    titleDe: 'Nominativ vs Akkusativ',
    emoji: '⚖️',
    objective: 'Decide instantly whether a noun is a subject or an object.',
    intro: 'The subject does the action (Nominativ). The object receives it (Akkusativ).',
    vocabulary: [],
    grammar: [
      { rule: 'Question test', body: 'Ask "Wer/Was?" → subject. Ask "Wen/Was?" → object.' },
      { rule: 'One sentence — four meanings',
        body:
          'The same verb + nouns can shift meaning depending on definite (der/die/das) vs indefinite (ein/eine):\n' +
          '• Ein Freund besucht eine Studentin. — any friend visits any student\n' +
          '• Der Freund besucht eine Studentin. — the (specific) friend visits any student\n' +
          '• Ein Freund besucht die Studentin. — any friend visits the (specific) student\n' +
          '• Die Freundin besucht die Studentin. — the friend visits the student\n' +
          'The article does NOT change the grammatical role — Freund stays the subject.',
      },
    ],
    exercises: [
      { type: 'multiple-choice', q: 'In "Der Hund sieht den Mann", what is in the Akkusativ?', options: ['Der Hund','sieht','den Mann','—'], answer: 'den Mann' },
      { type: 'fill-blank', sentence: '__ Mann sieht den Hund. (the)', answer: 'Der' },
      { type: 'fill-blank', sentence: 'Der Mann sieht __ Hund. (the)', answer: 'den' },
      // Mixed Nom-vs-Akk article drill — slides 107, 109, 160, 161
      { type: 'fill-blank', sentence: '__ Freund besucht __ Studentin. — specific male friend visits any female student.', answer: 'Der eine', hint: 'two words separated by a space: subject article, then object article' },
      { type: 'fill-blank', sentence: '__ Freund besucht __ Studentin. — any male friend visits the specific female student.', answer: 'Ein die' },
      { type: 'fill-blank', sentence: '__ Freundin besucht __ Freund. — any female friend visits any male friend.', answer: 'Eine einen' },
      { type: 'fill-blank', sentence: '__ Freunde besuchen __ Freund. — specific friends visit the specific male friend.', answer: 'Die den' },
    ],
    quiz: [
      { type: 'multiple-choice', q: 'Which sentence is wrong?', options: ['Ich sehe den Tisch.','Der Tisch ist groß.','Ich sehe der Tisch.','Wir kaufen den Tisch.'], answer: 'Ich sehe der Tisch.' },
    ],
  },

  {
    id: 24, week: 4,
    title: 'Verbs that take Akkusativ',
    titleDe: 'Verben mit Akkusativ',
    emoji: '🎯',
    objective: 'Memorise high-frequency Akkusativ verbs.',
    intro: 'These verbs almost always carry a direct object: kaufen, sehen, haben, essen, trinken, lesen, schreiben, hören, fragen, suchen.',
    vocabulary: [
      { de: 'kaufen',  en: 'to buy' },  { de: 'sehen',  en: 'to see' },
      { de: 'haben',   en: 'to have' }, { de: 'essen',  en: 'to eat' },
      { de: 'trinken', en: 'to drink' },{ de: 'lesen',  en: 'to read' },
      { de: 'schreiben',en:'to write' },{ de: 'hören',  en: 'to hear' },
      { de: 'fragen',  en: 'to ask' },  { de: 'suchen', en: 'to search' },
    ],
    grammar: [
      { rule: 'Default to Akkusativ', body: 'When in doubt with these verbs, use the Akkusativ for their object.' },
      { rule: 'First mention vs second mention',
        body:
          'In a story or paragraph:\n' +
          '• First time you mention something → ein / eine / einen (introducing it).\n' +
          '• Every time after → der / die / das (we already know which one).\n' +
          'Example: „Ich habe ein Buch. Das Buch ist gut." — first time = ein, second time = das.',
      },
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Ich suche __ Schlüssel. (the, masc.)', answer: 'den' },
      { type: 'fill-blank', sentence: 'Wir hören __ Musik. (the, fem.)', answer: 'die' },
      { type: 'multiple-choice', q: '"Er liest __ Buch." (the)', options: ['der','den','das','die'], answer: 'das' },
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Ich frage __ Lehrer. (the, masc.)', answer: 'den' },
    ],
  },

  {
    id: 31, week: 5,
    title: 'Family',
    titleDe: 'Die Familie',
    emoji: '👨‍👩‍👧',
    objective: 'Talk about your family with possessives.',
    intro: 'Family vocab plus the possessive "mein" (my). It declines just like "ein".',
    vocabulary: [
      // Family nouns
      { de: 'die Familie',  en: 'the family' },
      { de: 'der Vater',    en: 'the father' },     { de: 'die Mutter', en: 'the mother' },
      { de: 'der Bruder',   en: 'the brother' },    { de: 'die Schwester', en: 'the sister' },
      { de: 'der Sohn',     en: 'the son' },        { de: 'die Tochter',   en: 'the daughter' },
      { de: 'die Eltern',   en: 'the parents (pl)' },
      { de: 'die Großeltern', en: 'the grandparents (pl)' },
      // Full possessive pronoun set — slide 290
      { de: 'mein',  en: 'my' },
      { de: 'dein',  en: 'your (1 friend)' },
      { de: 'sein',  en: 'his / its' },
      { de: 'ihr',   en: 'her' },
      { de: 'unser', en: 'our' },
      { de: 'euer',  en: 'your (group of friends)' },
      { de: 'ihr',   en: 'their' },
      { de: 'Ihr',   en: 'your (formal — capital I)' },
    ],
    grammar: [
      { rule: 'Possessivpronomen — full table',
        body:
          'Each subject pronoun has its own possessive. They decline like "ein/eine":\n' +
          '• ich → mein (my)\n' +
          '• du → dein (your, one friend)\n' +
          '• er → sein (his)  ·  es → sein (its)\n' +
          '• sie → ihr (her)\n' +
          '• wir → unser (our)\n' +
          '• ihr → euer (your, group of friends)\n' +
          '• sie → ihr (their)\n' +
          '• Sie → Ihr (your, formal — always capital)',
      },
      { rule: 'Endings (Nominativ → Akkusativ)',
        body:
          'mein behaves exactly like ein:\n' +
          '• masc.: mein → meinen (Akk.)   "mein Bruder" → "meinen Bruder"\n' +
          '• fem.:  meine → meine          "meine Schwester" → "meine Schwester"\n' +
          '• neut.: mein → mein            "mein Kind" → "mein Kind"\n' +
          '• plural: meine → meine         "meine Eltern" → "meine Eltern"\n' +
          'Replace "m" with d/s/uns/eu/ihr to get the same six endings for the other persons.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      { type: 'fill-blank', sentence: '__ Vater ist Lehrer. (my)', answer: 'Mein' },
      { type: 'fill-blank', sentence: 'Ich sehe __ Bruder. (my, Akk.)', answer: 'meinen' },
      { type: 'fill-blank', sentence: '__ Mutter heißt Anna. (my)', answer: 'Meine' },
      // Full-table drills — one item per person
      { type: 'fill-blank', sentence: '__ Bruder spielt Fußball. (your, 1 friend)',           answer: 'Dein' },
      { type: 'fill-blank', sentence: '__ Schwester wohnt in Berlin. (his)',                  answer: 'Seine' },
      { type: 'fill-blank', sentence: '__ Vater arbeitet in der Firma. (her)',                answer: 'Ihr' },
      { type: 'fill-blank', sentence: '__ Familie ist groß. (our)',                           answer: 'Unsere' },
      { type: 'fill-blank', sentence: '__ Eltern sind nett. (your, plural — group of friends)', answer: 'Eure', hint: 'euer drops the e before -e: eure, euren' },
      { type: 'fill-blank', sentence: '__ Sohn lernt Deutsch. (their)',                       answer: 'Ihr' },
      // Slide 291 translation drill — translate each line
      { type: 'fill-blank', sentence: '"My friend (m) sees my colleague (f)." → __ Freund sieht meine Kollegin.', answer: 'Mein' },
      { type: 'fill-blank', sentence: '"My boss (m) works on the weekend." → __ Chef arbeitet am Wochenende.',    answer: 'Mein' },
      { type: 'fill-blank', sentence: '"The teacher (f) sees my friend (m) tomorrow." → Die Lehrerin sieht __ Freund morgen.', answer: 'meinen', hint: 'Akkusativ masculine' },
      { type: 'fill-blank', sentence: '"My friends go to my restaurant in the evening." → __ Freunde gehen zu meinem Restaurant am Abend.', answer: 'Meine' },
    ],
    quiz: [
      { type: 'multiple-choice', q: '"Ich liebe __ Schwester." (my, Akk.)', options: ['mein','meinen','meine','meiner'], answer: 'meine' },
      { type: 'multiple-choice', q: '"Where is YOUR coffee?" (1 friend, masc.)', options: ['mein','dein','sein','euer'], answer: 'dein' },
    ],
  },

  {
    id: 32, week: 5,
    title: 'Daily routine',
    titleDe: 'Der Tagesablauf',
    emoji: '🌅',
    objective: 'Describe a normal day with time markers.',
    intro: 'Stitch together everything: pronouns, verbs, time words, articles.',
    vocabulary: [
      { de: 'aufstehen',     en: 'to get up' },
      { de: 'frühstücken',   en: 'to have breakfast' },
      { de: 'arbeiten',      en: 'to work' },
      { de: 'Mittagessen',   en: 'lunch' },
      { de: 'nach Hause gehen', en: 'to go home' },
      { de: 'fernsehen',     en: 'to watch TV' },
      { de: 'schlafen',      en: 'to sleep' },
    ],
    grammar: [
      { rule: 'Time first', body: 'Morgens stehe ich um 7 Uhr auf. — When time leads, the verb still keeps slot 2 → subject moves after the verb.' },
    ],
    exercises: [
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Was machst du am Morgen?',      en: 'What do you do in the morning?' },
        { speaker: 'B', de: 'Ich stehe um sieben Uhr auf.',  en: 'I get up at seven.' },
        { speaker: 'A', de: 'Und dann?',                     en: 'And then?' },
        { speaker: 'B', de: 'Ich frühstücke und arbeite.',   en: 'I have breakfast and work.' },
      ]},
      { type: 'fill-blank', sentence: 'Ich __ um sieben Uhr auf.', answer: 'stehe' },
    ],
    quiz: [
      { type: 'multiple-choice', q: '"Morgens __ ich Kaffee." (drink)', options: ['trinke','trinkst','trinkt','trinken'], answer: 'trinke' },
    ],
  },

  /* ===================== WEEK 4: modals + scenarios ===================== */
  {
    id: 35, week: 5,
    title: 'Modals: können · müssen · wollen',
    titleDe: 'Modalverben I',
    emoji: '🛠️',
    objective: 'Express ability, obligation and desire.',
    intro: 'Modal verbs work as a duo with a second verb that goes to the END of the sentence in its infinitive form.',
    vocabulary: [
      { de: 'können', en: 'can / be able to' },
      { de: 'müssen', en: 'must / have to' },
      { de: 'wollen', en: 'to want to' },
    ],
    grammar: [
      { rule: 'Sandwich rule', body: 'Modal in slot 2, infinitive at the end. "Ich KANN heute Deutsch LERNEN."' },
      { rule: 'Stem changes', body: 'können → ich kann; müssen → ich muss; wollen → ich will. The vowel changes only in the singular.' },
    ],
    exercises: [
      conjEx('können', 'can'),
      conjEx('müssen', 'must'),
      conjEx('wollen', 'want to'),
      { type: 'fill-blank', sentence: 'Ich __ heute Deutsch lernen. (must)', answer: 'muss' },
      { type: 'multiple-choice', q: 'Which is correct?', options: ['Ich will Deutsch lernen heute.','Heute ich will Deutsch lernen.','Ich will heute Deutsch lernen.','Ich Deutsch lernen will heute.'], answer: 'Ich will heute Deutsch lernen.' },
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Du __ schwimmen. (can)', answer: 'kannst' },
    ],
  },

  {
    id: 36, week: 6,
    title: 'Modals: dürfen · sollen · mögen',
    titleDe: 'Modalverben II',
    emoji: '🧰',
    objective: 'Express permission, advice and liking.',
    intro: '"dürfen" = be allowed. "sollen" = should. "mögen" = like (and, in subjunctive form möchte = would like — your restaurant friend).',
    vocabulary: [
      { de: 'dürfen', en: 'to be allowed' },
      { de: 'sollen', en: 'should' },
      { de: 'mögen',  en: 'to like' },
      { de: 'möchten',en: 'would like (polite)' },
    ],
    grammar: [
      { rule: 'möchte vs will', body: '"Ich möchte einen Kaffee" is polite. "Ich will einen Kaffee" sounds demanding.' },
      { rule: 'The politeness ladder',
        body:
          'Climb the ladder to sound natural in cafés, shops and offices:\n' +
          '1. Ich möchte einen Kaffee bestellen.            (basic polite — "I would like to order")\n' +
          '2. Ich möchte gerne einen Kaffee bestellen.      (warmer — "gladly")\n' +
          '3. Ich möchte sehr gerne einen Kaffee bestellen, bitte.   (very polite)\n' +
          '4. Ich möchte einen Kaffee mit Milch, bitte.     (specifying preferences)\n' +
          '5. Ich hätte gerne einen Kaffee mit Milch.       (most natural in restaurants)\n' +
          'Add "bitte" anywhere — it always softens.',
      },
      { rule: '"den" vs "einen" — does it matter?',
        body:
          'Ich möchte EINEN Fisch bestellen. — "any fish" (you are choosing).\n' +
          'Ich möchte DEN Fisch bestellen. — "the (specific) fish" (you are pointing at it on the menu).\n' +
          'Both are correct German — meaning shifts.',
      },
    ],
    exercises: [
      conjEx('dürfen', 'be allowed'),
      conjEx('sollen', 'should'),
      conjEx('mögen', 'to like'),
      { type: 'fill-blank', sentence: 'Ich __ ein Bier, bitte. (would like)', answer: 'möchte' },
      { type: 'fill-blank', sentence: 'Du __ nicht rauchen. (be allowed, neg.)', answer: 'darfst' },
      // Politeness ladder drills — slide 258
      { type: 'fill-blank', sentence: 'Ich möchte __ einen Kaffee bestellen. (gladly)', answer: 'gerne' },
      { type: 'fill-blank', sentence: 'Ich möchte sehr __ einen Kaffee bestellen, bitte.', answer: 'gerne' },
      { type: 'fill-blank', sentence: 'Ich möchte einen Kaffee __ Milch, bitte. (with)', answer: 'mit' },
      { type: 'fill-blank', sentence: 'Ich __ gerne einen Kaffee mit Milch. (most natural restaurant phrasing)', answer: 'hätte', hint: '"hätte gerne" = "would like to have"' },
      { type: 'multiple-choice', q: 'Most natural restaurant order:',
        options: ['Ich will einen Kaffee.', 'Gib mir einen Kaffee.', 'Ich hätte gerne einen Kaffee, bitte.', 'Kaffee jetzt!'],
        answer: 'Ich hätte gerne einen Kaffee, bitte.' },
    ],
    quiz: [
      { type: 'multiple-choice', q: 'Polite restaurant order:', options: ['Ich will eine Pizza.','Ich möchte eine Pizza.','Ich muss eine Pizza.','Ich kann eine Pizza.'], answer: 'Ich möchte eine Pizza.' },
    ],
  },

  {
    id: 39, week: 6,
    title: 'At the restaurant',
    titleDe: 'Im Restaurant',
    emoji: '🍽️',
    objective: 'Order food, ask for the bill, talk to the waiter.',
    intro: 'A full restaurant scenario combining articles, Akkusativ, modals and politeness.',
    vocabulary: [
      { de: 'die Speisekarte', en: 'the menu' },
      { de: 'der Kellner',     en: 'the waiter' },
      { de: 'das Wasser',      en: 'water' },
      { de: 'der Kaffee',      en: 'coffee' },
      { de: 'die Pizza',       en: 'pizza' },
      { de: 'die Rechnung',    en: 'the bill' },
      { de: 'lecker',          en: 'delicious' },
      { de: 'Wie viel kostet das?', en: 'How much does it cost?' },
      { de: 'Zahlen, bitte.',  en: 'The bill, please.' },
    ],
    grammar: [
      { rule: 'möchte + Akkusativ', body: 'Ich möchte einen Kaffee, eine Pizza, ein Wasser.' },
    ],
    exercises: [
      { type: 'dialogue', lines: [
        { speaker: 'Kellner', de: 'Guten Tag, was möchten Sie?',         en: 'Good day, what would you like?' },
        { speaker: 'Gast',    de: 'Ich möchte eine Pizza und ein Wasser.', en: 'I would like a pizza and a water.' },
        { speaker: 'Kellner', de: 'Sehr gerne. Noch etwas?',              en: 'Gladly. Anything else?' },
        { speaker: 'Gast',    de: 'Nein, danke. Die Rechnung, bitte.',    en: 'No thanks. The bill, please.' },
        { speaker: 'Kellner', de: 'Das macht zwölf Euro fünfzig.',        en: 'That is twelve euros fifty.' },
      ]},
      { type: 'fill-blank', sentence: 'Ich __ einen Kaffee, bitte.', answer: 'möchte' },
      { type: 'fill-blank', sentence: 'Wie viel __ das?', answer: 'kostet' },
      // Restaurant translation challenge — selected sentences from slide 254
      { type: 'fill-blank', sentence: '"I come from India and work in a company." → Ich __ aus Indien und arbeite in einer Firma.', answer: 'komme' },
      { type: 'fill-blank', sentence: '"I would like to order a coffee with milk." → Ich möchte einen Kaffee __ Milch bestellen.', answer: 'mit' },
      { type: 'fill-blank', sentence: '"I see the waiter and I speak with him." → Ich sehe den Kellner und ich __ mit ihm.', answer: 'spreche' },
      { type: 'fill-blank', sentence: '"I must work today, but I want to eat in the restaurant." → Ich muss heute arbeiten, __ ich will im Restaurant essen.', answer: 'aber' },
      { type: 'fill-blank', sentence: '"I would like a table, please." → Ich __ gerne einen Tisch, bitte.', answer: 'hätte' },
      { type: 'fill-blank', sentence: '"How much does that cost?" → Wie viel __ das?', answer: 'kostet' },
      { type: 'fill-blank', sentence: '"I would like to pay, please." → Ich möchte __, bitte.', answer: 'zahlen' },
      { type: 'fill-blank', sentence: '"I always pay with card." → Ich zahle __ mit Karte.', answer: 'immer' },
      { type: 'fill-blank', sentence: '"I want to learn German and I speak a little German." → Ich will Deutsch lernen und ich __ ein bisschen Deutsch.', answer: 'spreche' },
      { type: 'fill-blank', sentence: '"I sometimes drink coffee with milk." → Ich trinke __ Kaffee mit Milch.', answer: 'manchmal' },
      { type: 'fill-blank', sentence: '"I read the menu and I order a soup." → Ich lese die Speisekarte und ich __ eine Suppe.', answer: 'bestelle' },
      { type: 'fill-blank', sentence: '"I meet my friends on the weekend." → Ich treffe meine Freunde __ Wochenende.', answer: 'am' },
    ],
    quiz: [
      { type: 'multiple-choice', q: 'How do you ask for the bill?', options: ['Was kostet das?','Wo ist die Toilette?','Zahlen, bitte.','Guten Appetit!'], answer: 'Zahlen, bitte.' },
    ],
  },

  {
    id: 40, week: 6,
    title: 'Shopping',
    titleDe: 'Einkaufen',
    emoji: '🛒',
    objective: 'Buy clothes and groceries; ask about price and size.',
    intro: 'Combine numbers, Akkusativ and modals to navigate any shop.',
    vocabulary: [
      { de: 'das Geschäft',  en: 'shop' },
      { de: 'der Supermarkt', en: 'supermarket' },
      { de: 'die Hose',      en: 'trousers' },
      { de: 'das T-Shirt',   en: 't-shirt' },
      { de: 'das Brot',      en: 'bread' },
      { de: 'die Milch',     en: 'milk' },
      { de: 'der Apfel',     en: 'apple' },
      { de: 'teuer',         en: 'expensive' },
      { de: 'billig',        en: 'cheap' },
      { de: 'Wie viel kostet …?', en: 'How much is …?' },
    ],
    grammar: [],
    exercises: [
      { type: 'dialogue', lines: [
        { speaker: 'Kunde',     de: 'Wie viel kostet das T-Shirt?', en: 'How much is the t-shirt?' },
        { speaker: 'Verkäufer', de: 'Es kostet zwanzig Euro.',      en: 'It costs twenty euros.' },
        { speaker: 'Kunde',     de: 'Das ist zu teuer.',            en: 'That is too expensive.' },
      ]},
      { type: 'fill-blank', sentence: 'Ich kaufe __ Apfel. (an, masc.)', answer: 'einen' },
      { type: 'fill-blank', sentence: 'Wie viel __ die Milch?', answer: 'kostet' },
    ],
    quiz: [
      { type: 'multiple-choice', q: 'Which means cheap?', options: ['teuer','billig','lecker','schnell'], answer: 'billig' },
    ],
  },

  {
    id: 42, week: 6,
    title: 'Negation: nicht & kein',
    titleDe: 'Verneinung',
    emoji: '🚫',
    objective: 'Say "not" and "no/none" correctly.',
    intro: '"nicht" negates verbs, adjectives, names. "kein/keine" negates nouns that would otherwise take ein/eine.',
    vocabulary: [
      { de: 'nicht',  en: 'not' },
      { de: 'kein',   en: 'no/none (m, n)' },
      { de: 'keine',  en: 'no/none (f, pl)' },
    ],
    grammar: [
      { rule: 'Pick the right one', body: 'Use "kein" if the positive sentence has "ein"/no article. Use "nicht" otherwise.' },
      { rule: 'Position of nicht', body: '"nicht" goes near the end, before the part you negate. "Ich arbeite heute nicht."' },
      { rule: 'Full kein declension table',
        body:
          '"kein" takes the same endings as "ein" — and adds them in plural too:\n' +
          '• masc. (der Kaffee)   → keinen   "Ich möchte keinen Kaffee."\n' +
          '• fem.  (die Milch)    → keine    "Ich möchte keine Milch."\n' +
          '• neuter (das Glas)    → kein     "Ich möchte kein Glas Wasser."\n' +
          '• plural (die Kellner) → keine    "Ich habe keine Freunde im Restaurant."\n' +
          'Same Akkusativ rule as ein: only the masculine changes.',
      },
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Ich habe __ Zeit. (no, fem.)', answer: 'keine' },
      { type: 'fill-blank', sentence: 'Er trinkt __ Bier. (no, n.)', answer: 'kein' },
      { type: 'fill-blank', sentence: 'Wir arbeiten heute __.', answer: 'nicht' },
      { type: 'multiple-choice', q: 'Which is wrong?', options: ['Ich habe keine Idee.','Ich habe nicht eine Idee.','Ich bin nicht müde.','Ich kaufe das Buch nicht.'], answer: 'Ich habe nicht eine Idee.' },
      // Slide 271 — restaurant kein dialog
      { type: 'fill-blank', sentence: 'Kellner: „Möchtest du einen Kaffee?" Du: „Nein, ich möchte __ Kaffee."', answer: 'keinen' },
      { type: 'fill-blank', sentence: 'Kellner: „Möchtest du Milch?" Du: „Nein, ich möchte __ Milch."', answer: 'keine' },
      { type: 'fill-blank', sentence: 'Kellner: „Möchtest du ein Glas Wasser?" Du: „Nein, ich möchte __ Glas Wasser."', answer: 'kein' },
      { type: 'fill-blank', sentence: 'Kellner: „Hast du Freunde im Restaurant?" Du: „Nein, ich habe __ Freunde."', answer: 'keine' },
      // Slide 272 challenge — five fill-blanks
      { type: 'fill-blank', sentence: 'Ich möchte __ Kaffee. (kein, masc. Akk.)', answer: 'keinen' },
      { type: 'fill-blank', sentence: 'Ich habe __ Schwester. (kein, fem.)', answer: 'keine' },
      { type: 'fill-blank', sentence: 'Ich kaufe __ Brot. (kein, neuter)', answer: 'kein' },
      { type: 'fill-blank', sentence: 'Ich habe __ Freunde. (kein, plural)', answer: 'keine' },
      { type: 'fill-blank', sentence: 'Ich sehe __ Hund. (kein, masc. Akk.)', answer: 'keinen' },
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Ich habe __ Hund. (no, masc.)', answer: 'keinen' },
    ],
  },

  {
    id: 41, week: 6,
    title: 'Travel',
    titleDe: 'Reisen',
    emoji: '✈️',
    objective: 'Buy a ticket, ask for directions, check in.',
    intro: 'Practical scenario for the airport, train station and hotel.',
    vocabulary: [
      { de: 'der Bahnhof',   en: 'train station' },
      { de: 'der Flughafen', en: 'airport' },
      { de: 'das Hotel',     en: 'hotel' },
      { de: 'die Fahrkarte', en: 'ticket' },
      { de: 'die Reise',     en: 'trip' },
      { de: 'links',         en: 'left' },
      { de: 'rechts',        en: 'right' },
      { de: 'geradeaus',     en: 'straight on' },
      { de: 'Wo ist …?',     en: 'Where is …?' },
    ],
    grammar: [],
    exercises: [
      { type: 'dialogue', lines: [
        { speaker: 'Tourist', de: 'Entschuldigung, wo ist der Bahnhof?', en: 'Excuse me, where is the station?' },
        { speaker: 'Person',  de: 'Geradeaus und dann links.',           en: 'Straight on, then left.' },
        { speaker: 'Tourist', de: 'Vielen Dank!',                        en: 'Many thanks!' },
      ]},
      { type: 'match', pairs: [
        { de: 'links', en: 'left' }, { de: 'rechts', en: 'right' },
        { de: 'geradeaus', en: 'straight on' }, { de: 'Bahnhof', en: 'station' },
      ]},
    ],
    quiz: [
      { type: 'multiple-choice', q: '"Wo ist das Hotel?" — what does it ask?', options: ['How is the hotel?','Where is the hotel?','What is the hotel?','When is the hotel?'], answer: 'Where is the hotel?' },
    ],
  },

  {
    id: 43, week: 7,
    title: 'Week 4-6 review',
    titleDe: 'Wiederholung Woche 4-6',
    emoji: '📚',
    objective: 'Cement modals, Akkusativ, scenarios, negation.',
    intro: 'Review pass before the final stretch.',
    vocabulary: [],
    grammar: [],
    exercises: [
      { type: 'fill-blank', sentence: 'Ich __ heute arbeiten. (must)', answer: 'muss' },
      { type: 'fill-blank', sentence: 'Wir kaufen __ Brot. (the, n.)', answer: 'das' },
      { type: 'fill-blank', sentence: 'Sie hat __ Zeit.', answer: 'keine' },
      { type: 'multiple-choice', q: 'Polite "I would like…"', options: ['Ich will…','Ich möchte…','Ich muss…','Ich soll…'], answer: 'Ich möchte…' },
      { type: 'multiple-choice', q: 'Where does the infinitive sit with a modal?', options: ['Position 2','Position 1','At the end','Anywhere'], answer: 'At the end' },
      // Word-order error spotting — slide 253. Twelve sentences; pick "Correct" or "Wrong".
      { type: 'multiple-choice', q: '"Ich will heute im Restaurant essen."', options: ['Correct','Wrong'], answer: 'Correct',
        explain: 'Modal in slot 2, infinitive at the end. Time and place after the verb.' },
      { type: 'multiple-choice', q: '"Wir heute wollen im Restaurant essen."', options: ['Correct','Wrong'], answer: 'Wrong',
        explain: 'Verb is in slot 3 — should be slot 2. → "Wir wollen heute im Restaurant essen."' },
      { type: 'multiple-choice', q: '"Meine Freundin will im Restaurant heute essen."', options: ['Correct','Wrong'], answer: 'Correct',
        explain: 'Modal in slot 2, infinitive at the end. Order of time/place is flexible.' },
      { type: 'multiple-choice', q: '"Am Wochenende du isst im Restaurant."', options: ['Correct','Wrong'], answer: 'Wrong',
        explain: 'When time leads, the verb still keeps slot 2 — subject moves AFTER the verb. → "Am Wochenende isst du im Restaurant."' },
      { type: 'multiple-choice', q: '"Ich esse am Wochenende im Restaurant."', options: ['Correct','Wrong'], answer: 'Correct' },
      { type: 'multiple-choice', q: '"Die Freunde und ich essen im Restaurant am Freitag."', options: ['Correct','Wrong'], answer: 'Correct',
        explain: '"Die Freunde und ich" is plural → essen.' },
      { type: 'multiple-choice', q: '"Die Freunde und ich müssen heute arbeiten."', options: ['Correct','Wrong'], answer: 'Correct' },
      { type: 'multiple-choice', q: '"Meine Freundin heute muss im Restaurant arbeiten."', options: ['Correct','Wrong'], answer: 'Wrong',
        explain: 'Modal verb in slot 3. → "Meine Freundin muss heute im Restaurant arbeiten."' },
      { type: 'multiple-choice', q: '"Wir können im Restaurant heute essen."', options: ['Correct','Wrong'], answer: 'Correct' },
      { type: 'multiple-choice', q: '"Ich rufe dich heute an."', options: ['Correct','Wrong'], answer: 'Correct',
        explain: 'Separable verb anrufen split correctly: stem (rufe) in slot 2, prefix (an) at the end.' },
      { type: 'multiple-choice', q: '"Ich rufe an dich heute."', options: ['Correct','Wrong'], answer: 'Wrong',
        explain: 'Separable prefix must go to the END, not glued to the stem. → "Ich rufe dich heute an."' },
      { type: 'multiple-choice', q: '"Wir machen heute das Licht aus."', options: ['Correct','Wrong'], answer: 'Correct',
        explain: 'Separable verb ausmachen split correctly.' },
    ],
    quiz: [],
  },

  /* ===================== WEEK 7: review + final ===================== */
  {
    id: 49, week: 8,
    title: 'Mega review · Say it back',
    titleDe: 'Großes Review · Mündlich',
    emoji: '🧠',
    objective: 'Recall every grammar pillar aloud, then drill the patterns one more time.',
    intro: 'Two halves: 35 oral prompts (slides 266-267) where you say the answer aloud and self-grade, then a written drill of the high-frequency patterns. The more you speak, the more it sticks.',
    vocabulary: [],
    grammar: [],
    exercises: [
      // ---- Oral prompts batch ----  (PPT slides 266-267, 35 prompts)
      { type: 'oral-prompt', prompts: [
        // Grammar Q&A — slide 266
        { q: 'What is the structure of a W-question?', answer: 'W-word + verb + subject + rest.', example: 'Wo wohnst du?' },
        { q: 'What are the three basic German gender articles?', answer: 'der (masculine), die (feminine), das (neuter). Plural always uses die.' },
        { q: 'Definite vs indefinite article — what is the difference?', answer: 'der/die/das = "the" (a specific person/thing). ein/eine = "a/an" (any).' },
        { q: 'What two things must you check before choosing the correct article?', answer: '1) the gender of the noun, and 2) the grammatical case (Nom · Akk · Dat).' },
        { q: 'What is nominative?', answer: 'The case for the SUBJECT — who or what does the action. Ask "Wer / Was?"' },
        { q: 'What is accusative?', answer: 'The case for the DIRECT OBJECT — what receives the action. Ask "Wen / Was?"' },
        { q: 'What is a separable verb?', answer: 'A verb whose prefix detaches from the stem in a sentence.', example: 'aufstehen → Ich stehe um 7 Uhr auf.' },
        { q: 'Where does the prefix go in a separable-verb sentence?', answer: 'At the very END of the sentence.', example: 'Wir kaufen am Samstag ein.' },
        { q: 'What is a modal verb?', answer: 'A helper verb that adds meaning of ability / wanting / having to / being allowed / should / liking.', example: 'können · müssen · wollen · dürfen · sollen · mögen / möchten' },
        { q: 'Where is the main verb in a sentence with a modal?', answer: 'At the END as an infinitive. The modal sits in slot 2.', example: 'Ich kann Deutsch sprechen.' },
        { q: 'Can time expressions move in the sentence?', answer: 'Yes — they can lead. But the conjugated verb still keeps slot 2 (subject moves after the verb).', example: 'Heute lerne ich Deutsch.' },
        { q: 'What are the three German auxiliary verbs?', answer: 'sein (to be) · haben (to have) · werden (to become).' },
        { q: 'Name the German personal pronouns.', answer: 'ich · du · er / sie / es · wir · ihr · sie / Sie.' },
        { q: 'Where is the conjugated verb in a normal German sentence?', answer: 'Position 2 (slot 2).' },
        { q: 'What gets capitalised in German?', answer: 'The first word of every sentence AND every noun — even mid-sentence.', example: 'Ich habe Hunger.' },
        { q: 'What is the subject in a sentence?', answer: 'The doer of the action. Ask "Wer/Was?".' },
        { q: 'What is the object in a sentence?', answer: 'What receives the action. Ask "Wen/Was?".' },
        { q: 'What is the regular verb ending pattern?', answer: '-e · -st · -t · -en · -t · -en   (for ich · du · er/sie/es · wir · ihr · sie/Sie).' },
        { q: 'What is a yes/no question?', answer: 'A question answerable with ja / nein / doch — formed by flipping the verb to position 1.', example: 'Bist du müde?' },
        { q: 'Where is the verb in a yes/no question?', answer: 'Position 1 — the very first word.' },
        { q: 'What is a W-question?', answer: 'A question opening with a W-word: wer · was · wo · wann · warum · wie · woher · wohin · welcher · wie viel.' },
        // Build-a-sentence — slide 267
        { q: 'Build one sentence with sein.',                answer: 'Any conjugation works. Try a state or profession.', example: 'Ich bin müde.' },
        { q: 'Build one sentence with haben.',               answer: 'Try a body state (Hunger / Durst) or possession.', example: 'Wir haben Zeit.' },
        { q: 'Build one sentence with werden.',              answer: 'Try a "becoming" — getting tired / faster / better.', example: 'Es wird besser.' },
        { q: 'Make one yes/no question.',                    answer: 'Verb first.', example: 'Hast du Zeit am Wochenende?' },
        { q: 'Make one W-question with wo.',                 answer: 'wo asks where (location).', example: 'Wo wohnst du?' },
        { q: 'Make one W-question with woher.',              answer: 'woher asks where FROM (origin).', example: 'Woher kommst du?' },
        { q: 'Give one sentence with a separable verb.',     answer: 'Stem in slot 2, prefix at the end.', example: 'Ich stehe um sieben Uhr auf.' },
        { q: 'Give one sentence with a modal verb.',         answer: 'Modal in slot 2, infinitive at the end.', example: 'Ich muss heute arbeiten.' },
        { q: 'Give one sentence with the time expression at position 1.', answer: 'Verb still slot 2, subject moves after.', example: 'Heute trinke ich Kaffee.' },
        { q: 'Give one nominative article.',                 answer: 'der · die · das · die (plural).', example: 'der Tisch ist hier.' },
        { q: 'Give all the accusative articles.',            answer: 'Definite: den · die · das · die.\nIndefinite: einen · eine · ein · — (no plural for ein).' },
        { q: 'Order one drink in German (politely).',        answer: 'Climb the politeness ladder.', example: 'Ich hätte gerne einen Kaffee mit Milch, bitte.' },
        { q: 'Ask for the price in German.',                 answer: 'Use kosten or "Wie viel".', example: 'Wie viel kostet das?' },
        { q: 'Ask for the bill in German.',                  answer: 'Two natural options.', example: 'Die Rechnung, bitte.  /  Zahlen, bitte.' },
      ]},
      // ---- Written drill (the original mega review) ----
      { type: 'fill-blank', sentence: '21 = __', answer: 'einundzwanzig' },
      { type: 'fill-blank', sentence: 'Ich __ Hunger.', answer: 'habe' },
      { type: 'fill-blank', sentence: 'Du __ müde.', answer: 'bist' },
      { type: 'fill-blank', sentence: 'Wir __ Deutsch. (learn)', answer: 'lernen' },
      { type: 'fill-blank', sentence: 'Er sieht __ Mann. (the, masc.)', answer: 'den' },
      { type: 'fill-blank', sentence: 'Ich __ einen Kaffee. (would like)', answer: 'möchte' },
      { type: 'multiple-choice', q: 'Which is correct?', options: ['Ich kann Deutsch lerne.','Ich kann Deutsch lernen.','Ich Deutsch kann lernen.','Ich lernen kann Deutsch.'], answer: 'Ich kann Deutsch lernen.' },
      { type: 'fill-blank', sentence: 'Ich habe __ Idee. (no, fem.)', answer: 'keine' },
    ],
    quiz: [],
  },

  {
    id: 50, week: 8,
    title: 'Final exam · Schlussprüfung',
    titleDe: 'Schlussprüfung',
    emoji: '🏆',
    objective: 'Pass the comprehensive test and earn your certificate.',
    intro: '20 mixed questions covering everything. Score ≥ 80% to unlock your certificate.',
    vocabulary: [],
    grammar: [],
    exercises: [],
    quiz: [
      { type: 'multiple-choice', q: 'How is "Wasser" pronounced?', options: ['Wasser (English W)','Vasser (soft V)','Fasser','Yasser'], answer: 'Vasser (soft V)' },
      { type: 'fill-blank', sentence: '47 = __', answer: 'siebenundvierzig' },
      { type: 'multiple-choice', q: 'Pick the correct article: __ Buch.', options: ['der','die','das'], answer: 'das' },
      { type: 'multiple-choice', q: 'Replace "der Laptop":', options: ['er','sie','es'], answer: 'er' },
      { type: 'fill-blank', sentence: 'Ich __ Softwareentwickler.', answer: 'bin' },
      { type: 'fill-blank', sentence: 'Wir __ Hunger.', answer: 'haben' },
      { type: 'fill-blank', sentence: 'Du __ schneller.', answer: 'wirst' },
      { type: 'multiple-choice', q: 'Which sentence is correct?', options: ['ich habe hunger.','Ich Habe hunger.','Ich habe Hunger.','Ich Habe Hunger.'], answer: 'Ich habe Hunger.' },
      { type: 'fill-blank', sentence: 'Wir __ Fußball. (play)', answer: 'spielen' },
      { type: 'fill-blank', sentence: 'Sie (she) __ ein Buch. (read)', answer: 'liest' },
      { type: 'multiple-choice', q: 'Order: subject-verb-time.', options: ['Ich heute lerne.','Ich lerne heute.','Heute lerne ich.','Both B and C are valid.'], answer: 'Both B and C are valid.' },
      { type: 'fill-blank', sentence: 'Ich kaufe __ Tisch. (a, masc.)', answer: 'einen' },
      { type: 'fill-blank', sentence: 'Wir lesen __ Buch. (the, n.)', answer: 'das' },
      { type: 'multiple-choice', q: 'Polite order at a café:', options: ['Ich will Kaffee.','Ich möchte einen Kaffee.','Kaffee jetzt!','Ich brauche Kaffee.'], answer: 'Ich möchte einen Kaffee.' },
      { type: 'fill-blank', sentence: 'Ich __ heute lernen. (must)', answer: 'muss' },
      { type: 'multiple-choice', q: '"Ich kann Deutsch ___."', options: ['lerne','lernen','lernt','gelernt'], answer: 'lernen' },
      { type: 'fill-blank', sentence: 'Ich habe __ Zeit. (no, fem.)', answer: 'keine' },
      { type: 'fill-blank', sentence: 'Er arbeitet heute __. (not)', answer: 'nicht' },
      { type: 'multiple-choice', q: 'Where is the station? = ', options: ['Wer ist der Bahnhof?','Wo ist der Bahnhof?','Was ist der Bahnhof?','Wann ist der Bahnhof?'], answer: 'Wo ist der Bahnhof?' },
      { type: 'multiple-choice', q: 'Asking for the bill:', options: ['Bitte schön.','Zahlen, bitte.','Guten Appetit.','Auf Wiedersehen.'], answer: 'Zahlen, bitte.' },
    ],
  },

  /* ===================== v2.0.0 — Phase B + C inserted days ===================== */

  /* ----- Day 12: Separable verbs (slides 188-204, 225-241) ----- */
  {
    id: 12, week: 2,
    title: 'Separable verbs',
    titleDe: 'Trennbare Verben',
    emoji: '🧩',
    objective: 'Recognise and use German verbs that split apart in a sentence.',
    intro: 'Many common German verbs are written as one word in the dictionary (aufstehen, einkaufen) but BREAK in a real sentence: the prefix moves to the end. "Ich stehe um 7 Uhr AUF."',
    vocabulary: [
      { de: 'aufstehen',  en: 'to get up' },
      { de: 'einkaufen',  en: 'to shop / buy groceries' },
      { de: 'mitkommen',  en: 'to come along' },
      { de: 'aufmachen',  en: 'to open' },
      { de: 'zumachen',   en: 'to close' },
      { de: 'ausfüllen',  en: 'to fill out (a form)' },
      { de: 'anrufen',    en: 'to call (on the phone)' },
      { de: 'fernsehen',  en: 'to watch TV' },
      { de: 'abholen',    en: 'to pick up' },
      { de: 'anfangen',   en: 'to begin' },
      { de: 'einladen',   en: 'to invite' },
      { de: 'aufhören',   en: 'to stop' },
    ],
    grammar: [
      { rule: 'How separable verbs work',
        body:
          'Dictionary form: aufstehen (one word).\n' +
          'In a main sentence: the verb stem stays in position 2; the prefix jumps to the very end.\n' +
          '  Ich STEHE um 7 Uhr AUF.\n' +
          '  Wir KAUFEN am Samstag EIN.\n' +
          '  Du MACHST das Fenster AUF.',
      },
      { rule: 'How to spot one',
        body:
          'A separable verb is written together in the infinitive; the STRESS sits on the prefix.\n' +
          'Common prefixes: auf-, an-, ein-, aus-, mit-, ab-, fern-, zu-, nach-.\n' +
          'Compare: BEsuchen / verSTEHen → these are NOT separable (stress on the stem, no split).',
      },
      { rule: 'With a modal verb — no split',
        body:
          'When a modal verb takes over slot 2, the separable verb goes to the end as a SINGLE infinitive:\n' +
          '  Ich muss um 7 Uhr aufstehen. (no split)\n' +
          '  Wir wollen am Samstag einkaufen.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      { type: 'fill-blank', sentence: 'Ich __ um sieben Uhr __. (aufstehen) — present tense, splits!', answer: 'stehe auf', hint: 'two words separated by a space' },
      { type: 'fill-blank', sentence: 'Wir __ am Samstag __. (einkaufen)', answer: 'kaufen ein' },
      { type: 'fill-blank', sentence: 'Du __ das Fenster __. (aufmachen)', answer: 'machst auf' },
      { type: 'fill-blank', sentence: 'Er __ seine Freundin __. (anrufen)', answer: 'ruft an' },
      { type: 'fill-blank', sentence: 'Ich __ am Abend __. (fernsehen)', answer: 'sehe fern' },
      { type: 'fill-blank', sentence: 'Wir __ unsere Freunde __. (einladen) — present tense', answer: 'laden ein' },
      { type: 'fill-blank', sentence: 'Mit modal: "Ich muss um 7 Uhr __." (aufstehen — no split!)', answer: 'aufstehen' },
      { type: 'fill-blank', sentence: 'Mit modal: "Wir wollen am Samstag __." (einkaufen)', answer: 'einkaufen' },
      { type: 'multiple-choice',
        q: 'Which sentence is correct?',
        options: [
          'Ich aufstehe um 7 Uhr.',
          'Ich stehe um 7 Uhr auf.',
          'Ich stehe auf um 7 Uhr.',
          'Auf ich stehe um 7 Uhr.',
        ],
        answer: 'Ich stehe um 7 Uhr auf.',
        explain: 'In the present tense the stem (stehe) sits in slot 2 and the prefix (auf) jumps to the very end.',
      },
      { type: 'match', pairs: [
        { de: 'aufstehen', en: 'to get up' },
        { de: 'einkaufen', en: 'to shop' },
        { de: 'mitkommen', en: 'to come along' },
        { de: 'anrufen',   en: 'to phone' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Ich __ den Kollegen __. (abholen)', answer: 'hole ab' },
      { type: 'multiple-choice', q: 'Where does the prefix go in present tense?', options: ['Position 1','Position 2','At the very end','Anywhere'], answer: 'At the very end' },
    ],
  },

  /* ----- Day 16: Yes/No questions (slides 71-77, 128-131) ----- */
  {
    id: 16, week: 3,
    title: 'Yes/No questions',
    titleDe: 'Ja/Nein-Fragen',
    emoji: '❓',
    objective: 'Turn any statement into a yes/no question by flipping word order.',
    intro: 'Yes/no questions in German are easy: just put the conjugated verb FIRST. "Du bist müde." → "Bist du müde?" Add a question mark — done.',
    vocabulary: [
      { de: 'ja',         en: 'yes' },
      { de: 'nein',       en: 'no' },
      { de: 'doch',       en: 'yes (contradicting a negative)' },
      { de: 'vielleicht', en: 'maybe' },
      { de: 'natürlich',  en: 'of course' },
      { de: 'sicher',     en: 'sure / certainly' },
    ],
    grammar: [
      { rule: 'Word-order flip',
        body:
          'Statement → question = swap subject and verb:\n' +
          '  Du bist müde.            → Bist du müde?\n' +
          '  Sie hat Hunger.          → Hat sie Hunger?\n' +
          '  Wir wohnen in Berlin.    → Wohnen wir in Berlin?\n' +
          'No "do" required — German has no helper for questions.',
      },
      { rule: 'Three ways to answer',
        body:
          'Ja — yes (positive answer to a positive question).\n' +
          'Nein — no.\n' +
          'Doch — yes! (used to contradict a negative question)\n' +
          '  Bist du nicht müde? — Doch! (yes I am — contradicting "not")',
      },
      { rule: 'Separable verbs in a question',
        body:
          'The prefix STILL goes to the end:\n' +
          '  Stehst du um 7 Uhr auf?\n' +
          '  Kaufen wir am Samstag ein?',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      { type: 'fill-blank', sentence: 'Statement: "Du bist müde." → Question: "__ du müde?"', answer: 'Bist' },
      { type: 'fill-blank', sentence: 'Statement: "Sie hat Hunger." → Question: "__ sie Hunger?"', answer: 'Hat' },
      { type: 'fill-blank', sentence: 'Statement: "Wir wohnen in Berlin." → Question: "__ wir in Berlin?"', answer: 'Wohnen' },
      { type: 'fill-blank', sentence: 'Statement: "Er kommt aus Indien." → Question: "__ er aus Indien?"', answer: 'Kommt' },
      { type: 'fill-blank', sentence: 'Statement: "Ich kann Deutsch." → Question: "__ du Deutsch?"', answer: 'Kannst' },
      { type: 'fill-blank', sentence: 'With separable verb: "Du stehst um 7 Uhr auf." → Question: "__ du um 7 Uhr __?"', answer: 'Stehst auf' },
      { type: 'multiple-choice', q: '"Bist du nicht müde?" — Yes I am! (contradicting). Pick the right answer.',
        options: ['Ja!','Nein!','Doch!','Vielleicht!'], answer: 'Doch!' },
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Hast du Zeit am Wochenende?',          en: 'Do you have time on the weekend?' },
        { speaker: 'B', de: 'Ja, ich habe Zeit.',                   en: 'Yes, I have time.' },
        { speaker: 'A', de: 'Möchtest du ins Restaurant gehen?',    en: 'Would you like to go to the restaurant?' },
        { speaker: 'B', de: 'Vielleicht. Bist du nicht müde?',      en: 'Maybe. Are you not tired?' },
        { speaker: 'A', de: 'Doch, aber ich möchte trotzdem essen.', en: 'Yes (I am), but I still want to eat.' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Make the question: "Sie spricht Deutsch." → "__ sie Deutsch?"', answer: 'Spricht' },
      { type: 'multiple-choice', q: 'Where does the verb go in a yes/no question?', options: ['Position 1','Position 2','Position 3','At the end'], answer: 'Position 1' },
    ],
  },

  /* ----- Day 17: W-questions (slide 76 — 10 W-words) ----- */
  {
    id: 17, week: 3,
    title: 'W-questions',
    titleDe: 'W-Fragen',
    emoji: '🔍',
    objective: 'Ask questions starting with WHO, WHAT, WHERE, WHEN, WHY, HOW.',
    intro: 'A W-question opens with a question word, then the verb, then everything else. "Wer bist du? Wo wohnst du? Wann kommst du?"',
    vocabulary: [
      { de: 'wer',     en: 'who' },
      { de: 'was',     en: 'what' },
      { de: 'wo',      en: 'where (at)' },
      { de: 'wohin',   en: 'where to' },
      { de: 'woher',   en: 'where from' },
      { de: 'wann',    en: 'when' },
      { de: 'warum',   en: 'why' },
      { de: 'wie',     en: 'how' },
      { de: 'welcher', en: 'which (m / der-words)' },
      { de: 'wie viel',  en: 'how much' },
      { de: 'wie viele', en: 'how many' },
    ],
    grammar: [
      { rule: 'Pattern: W-word · verb · subject · …',
        body:
          'Wer ist das?           — Who is that?\n' +
          'Wo wohnst du?          — Where do you live?\n' +
          'Wann kommst du?        — When are you coming?\n' +
          'Warum lernst du Deutsch? — Why are you learning German?\n' +
          'Wie heißt du?          — What is your name?',
      },
      { rule: 'wo / wohin / woher',
        body:
          'wo = where (location, no movement): "Wo ist der Bahnhof?"\n' +
          'wohin = where TO (movement away from speaker): "Wohin gehst du?"\n' +
          'woher = where FROM (origin): "Woher kommst du?"',
      },
      { rule: '"Wie heißt du?" not "Wie ist dein Name?"',
        body: 'Both are correct. "Wie heißt du?" sounds more natural.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      { type: 'fill-blank', sentence: '__ ist das? (who)', answer: 'Wer' },
      { type: 'fill-blank', sentence: '__ heißt du? (how / what)', answer: 'Wie' },
      { type: 'fill-blank', sentence: '__ wohnst du? (where at)', answer: 'Wo' },
      { type: 'fill-blank', sentence: '__ kommst du? (where from)', answer: 'Woher' },
      { type: 'fill-blank', sentence: '__ gehst du? (where to)', answer: 'Wohin' },
      { type: 'fill-blank', sentence: '__ kommst du nach Hause? (when)', answer: 'Wann' },
      { type: 'fill-blank', sentence: '__ lernst du Deutsch? (why)', answer: 'Warum' },
      { type: 'fill-blank', sentence: '__ kostet das? (how much)', answer: 'Wie viel' },
      { type: 'multiple-choice', q: '"Where do you live?" =', options: ['Wo wohnst du?','Wohin wohnst du?','Wer wohnst du?','Was wohnst du?'], answer: 'Wo wohnst du?' },
      { type: 'multiple-choice', q: '"Where are you going?" =', options: ['Wo gehst du?','Wohin gehst du?','Woher gehst du?','Was gehst du?'], answer: 'Wohin gehst du?' },
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Wie heißt du?',          en: 'What is your name?' },
        { speaker: 'B', de: 'Ich heiße Anna.',         en: 'My name is Anna.' },
        { speaker: 'A', de: 'Woher kommst du?',        en: 'Where are you from?' },
        { speaker: 'B', de: 'Ich komme aus Indien.',   en: 'I come from India.' },
        { speaker: 'A', de: 'Wo wohnst du jetzt?',     en: 'Where do you live now?' },
        { speaker: 'B', de: 'Jetzt wohne ich in Berlin.', en: 'Now I live in Berlin.' },
        { speaker: 'A', de: 'Warum lernst du Deutsch?', en: 'Why are you learning German?' },
        { speaker: 'B', de: 'Ich arbeite hier.',        en: 'I work here.' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: '"What is that?" → __ ist das?', answer: 'Was' },
      { type: 'multiple-choice', q: 'How many W-words start with W in German?', options: ['5','7','10','It varies — at least 10 common ones.'], answer: 'It varies — at least 10 common ones.' },
    ],
  },

  /* ----- Day 19: Big numbers & prices (slides 143-145, 186-187, 256) ----- */
  {
    id: 19, week: 3,
    title: 'Big numbers & prices',
    titleDe: 'Große Zahlen & Preise',
    emoji: '💶',
    objective: 'Read 4–6 digit numbers and handle prices in euros.',
    intro: 'After 1000, German numbers can look terrifying — but the building blocks are the same. Plus you\'ll need them for shopping, salaries and bills.',
    vocabulary: [
      { de: 'tausend',          en: '1 000' },
      { de: 'zweitausend',      en: '2 000' },
      { de: 'zehntausend',      en: '10 000' },
      { de: 'hunderttausend',   en: '100 000' },
      { de: 'eine Million',     en: '1 000 000' },
      { de: 'der Euro',         en: 'euro' },
      { de: 'der Cent',         en: 'cent' },
      { de: 'kosten',           en: 'to cost' },
      { de: 'der Preis',        en: 'price' },
      { de: 'teuer',            en: 'expensive' },
      { de: 'billig',           en: 'cheap' },
      { de: 'günstig',          en: 'good value' },
    ],
    grammar: [
      { rule: 'Building any number',
        body:
          'Read it like Lego — biggest unit first:\n' +
          '• 365   = drei-hundert-fünf-und-sechzig\n' +
          '• 1 234 = ein-tausend-zwei-hundert-vier-und-dreißig\n' +
          '• 9 876 = neun-tausend-acht-hundert-sechs-und-siebzig\n' +
          '• 24 499 = vier-und-zwanzigtausend-vier-hundert-neun-und-neunzig',
      },
      { rule: 'Decimals use a COMMA, thousands use a DOT',
        body:
          'German money: 1.234,56 € (English: 1,234.56)\n' +
          'Spoken: "ein-tausend-zwei-hundert-vier-und-dreißig Euro sechs-und-fünfzig (Cent)"\n' +
          'Or just: "ein-tausend-zwei-hundert-vier-und-dreißig Euro fünfzig" (Cents often dropped).',
      },
      { rule: 'Asking and giving a price',
        body:
          'Q: "Wie viel kostet das?"  /  "Was kostet …?"\n' +
          'A: "Das kostet 13 Euro."  /  "13 Euro fünfzig."',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      { type: 'fill-blank', sentence: '1000 = __', answer: 'tausend' },
      { type: 'fill-blank', sentence: '10 000 = __', answer: 'zehntausend' },
      { type: 'fill-blank', sentence: '1 234 = ein__zweihundertvierunddreißig', answer: 'tausend' },
      { type: 'fill-blank', sentence: '"How much does it cost?" → Wie viel __ das?', answer: 'kostet' },
      { type: 'fill-blank', sentence: '"That costs 13 euros." → Das __ dreizehn Euro.', answer: 'kostet' },
      { type: 'multiple-choice', q: '982 = ?',
        options: ['neunhundertachtzigzwei','neunhundertzweiundachtzig','neunhundertachtundzwei','neuhundertzweiundachtzig'],
        answer: 'neunhundertzweiundachtzig' },
      { type: 'multiple-choice', q: 'In German, 1.234,56 € reads as…',
        options: ['one point two three four, fifty-six','one thousand two hundred thirty-four euros fifty-six','one comma two three four','twelve hundred and thirty-four'],
        answer: 'one thousand two hundred thirty-four euros fifty-six' },
      { type: 'dialogue', lines: [
        { speaker: 'Kunde',     de: 'Wie viel kostet das Smartphone?',     en: 'How much does the smartphone cost?' },
        { speaker: 'Verkäufer', de: 'Das Smartphone kostet 982 Euro.',     en: 'The smartphone costs 982 euros.' },
        { speaker: 'Kunde',     de: 'Und das Auto?',                       en: 'And the car?' },
        { speaker: 'Verkäufer', de: 'Das Auto kostet 24 499 Euro.',         en: 'The car costs 24,499 euros.' },
        { speaker: 'Kunde',     de: 'Das ist sehr teuer!',                 en: 'That is very expensive!' },
      ]},
    ],
    quiz: [
      { type: 'multiple-choice', q: '13 € (spoken) =', options: ['drei Euro','dreizehn Euro','dreißig Euro','dreihundert Euro'], answer: 'dreizehn Euro' },
      { type: 'fill-blank', sentence: '1 000 000 = eine __', answer: 'Million' },
    ],
  },

  /* ----- Day 20: Week 3 review (questions + numbers) ----- */
  {
    id: 20, week: 3,
    title: 'Week 3 review',
    titleDe: 'Wiederholung Woche 3',
    emoji: '🔁',
    objective: 'Lock in questions, big numbers, and the politeness ladder before tackling cases.',
    intro: 'Mixed pass through Yes/No questions, W-questions, big numbers and prices.',
    vocabulary: [],
    grammar: [],
    exercises: [
      { type: 'fill-blank', sentence: 'Statement: "Sie kommt aus Indien." → Question: "__ sie aus Indien?"', answer: 'Kommt' },
      { type: 'fill-blank', sentence: 'Asking origin: "__ kommst du?"', answer: 'Woher' },
      { type: 'fill-blank', sentence: 'Asking destination: "__ gehst du?"', answer: 'Wohin' },
      { type: 'fill-blank', sentence: '"Bist du nicht müde?" — Yes (contradicting). → "__!"', answer: 'Doch' },
      { type: 'fill-blank', sentence: '"How much does the menu cost?" → __ kostet die Speisekarte?', answer: 'Wie viel' },
      { type: 'fill-blank', sentence: 'Separable verb question: "__ du um 7 Uhr __?" (aufstehen)', answer: 'Stehst auf' },
      { type: 'multiple-choice', q: 'Pick the natural German order for "Why are you learning German?".', options: ['Du lernst warum Deutsch?','Warum du lernst Deutsch?','Warum lernst du Deutsch?','Lernst du warum Deutsch?'], answer: 'Warum lernst du Deutsch?' },
      { type: 'multiple-choice', q: '24 499 = ?', options: ['vierundzwanzigtausendvierhundertneunundneunzig','zweiundvierzigtausend…','vierundzwanzighundertneunundvierzig','vierundzwanzigtausendvierneunneun'], answer: 'vierundzwanzigtausendvierhundertneunundneunzig' },
    ],
    quiz: [],
  },

  /* ----- Day 25: Dativ I — prepositions (slides 277-280) ----- */
  {
    id: 25, week: 4,
    title: 'Dativ I — prepositions',
    titleDe: 'Dativ I — Präpositionen',
    emoji: '🅿️',
    objective: 'Use the Dativ case after the eight everyday "always-Dativ" prepositions.',
    intro: 'After mastering Akkusativ (object), meet the third case: Dativ. It marks the indirect object ("to whom") AND is forced by certain prepositions like mit, bei, zu.',
    vocabulary: [
      { de: 'mit',        en: 'with' },
      { de: 'bei',        en: 'at / near / with (a person)' },
      { de: 'zu',         en: 'to (a place / person)' },
      { de: 'von',        en: 'from / of' },
      { de: 'nach',       en: 'to (city/country) / after' },
      { de: 'aus',        en: 'out of / from (origin)' },
      { de: 'seit',       en: 'since / for' },
      { de: 'gegenüber',  en: 'opposite' },
    ],
    grammar: [
      { rule: 'Dativ article table',
        body:
          'masc.   der → dem    "mit dem Auto"\n' +
          'fem.    die → der    "mit der Frau"\n' +
          'neuter  das → dem    "bei dem Kind" (often → beim Kind)\n' +
          'plural  die → den + ADD -n to the noun if missing  "mit den Kindern"',
      },
      { rule: 'Indefinite & possessive',
        body:
          'ein → einem (m, n)  /  eine → einer (f)  /  no plural form for ein.\n' +
          'mein → meinem / meiner / meinem / meinen.\n' +
          '  "Ich fahre mit meinem Auto."\n' +
          '  "Ich wohne bei meiner Mutter."',
      },
      { rule: 'The 8 always-Dativ prepositions',
        body:
          'mit · bei · zu · von · nach · aus · seit · gegenüber.\n' +
          'Memorise them as one block — every noun after one of these uses Dativ.',
      },
      { rule: 'Common contractions',
        body:
          'bei + dem  → beim    "beim Bäcker"\n' +
          'von + dem  → vom     "vom Bahnhof"\n' +
          'zu + dem   → zum     "zum Arzt"\n' +
          'zu + der   → zur     "zur Schule"',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      { type: 'fill-blank', sentence: 'Ich fahre mit __ Auto. (the, masc.)',          answer: 'dem' },
      { type: 'fill-blank', sentence: 'Wir wohnen bei __ Eltern. (the, plural)',      answer: 'den', hint: 'don\'t forget — plural Dativ noun adds -n if missing: Eltern already ends in n' },
      { type: 'fill-blank', sentence: 'Ich gehe zu __ Bahnhof. (the, masc.)',          answer: 'dem' },
      { type: 'fill-blank', sentence: 'Sie kommt aus __ Schule. (the, fem.)',         answer: 'der' },
      { type: 'fill-blank', sentence: 'Er arbeitet seit __ Jahr. (a, neuter)',        answer: 'einem' },
      { type: 'fill-blank', sentence: 'Wir fahren nach __ . (Berlin — no article!)',  answer: 'Berlin', hint: 'cities and most countries take no article' },
      { type: 'fill-blank', sentence: 'Ich fahre mit __ Mutter. (my, fem.)',          answer: 'meiner' },
      { type: 'fill-blank', sentence: 'Contraction: "bei + dem" = __',                answer: 'beim' },
      { type: 'fill-blank', sentence: 'Contraction: "zu + der" = __',                 answer: 'zur' },
      { type: 'multiple-choice', q: 'Which preposition does NOT take Dativ?',
        options: ['mit', 'bei', 'für', 'zu'],
        answer: 'für',
        explain: '"für" takes Akkusativ. The eight always-Dativ prepositions are mit, bei, zu, von, nach, aus, seit, gegenüber.',
      },
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Ich gehe zu __ Arzt. (the, masc. — use the contraction)', answer: 'zum' },
      { type: 'multiple-choice', q: 'Plural Dativ for "die Bücher" =', options: ['die Bücher','der Bücher','dem Bücher','den Büchern'], answer: 'den Büchern', explain: 'Plural Dativ: article = den, and the noun adds -n.' },
    ],
  },

  /* ----- Day 26: Dativ II — verbs (slides 281-287) ----- */
  {
    id: 26, week: 4,
    title: 'Dativ II — verbs',
    titleDe: 'Dativ II — Verben',
    emoji: '🤝',
    objective: 'Spot the verbs that demand a Dativ object — and use them.',
    intro: 'Some verbs take a direct object in the Dativ rather than the Akkusativ. They are common ones — helfen, danken, gefallen, gehören, antworten, glauben.',
    vocabulary: [
      { de: 'helfen',     en: 'to help (someone)' },
      { de: 'danken',     en: 'to thank' },
      { de: 'gefallen',   en: 'to please / to be liked by' },
      { de: 'gehören',    en: 'to belong to' },
      { de: 'antworten',  en: 'to answer (someone)' },
      { de: 'glauben',    en: 'to believe (someone)' },
      { de: 'gratulieren',en: 'to congratulate' },
      { de: 'passen',     en: 'to fit / suit' },
    ],
    grammar: [
      { rule: 'Dativ-only verbs',
        body:
          'These verbs take their human object in Dativ:\n' +
          '• helfen, danken, antworten, gratulieren, glauben (jdm.)\n' +
          '• gefallen, gehören, passen (jdm.)\n' +
          'Examples:\n' +
          '  Ich helfe DEM Vater.       I help the father.\n' +
          '  Ich danke DER Frau.         I thank the woman.\n' +
          '  Das Buch gehört DEM Kind.   The book belongs to the child.\n' +
          '  Die Stadt gefällt MIR.      I like the city. (lit. "the city pleases me")',
      },
      { rule: 'gefallen — flipped meaning',
        body:
          'In English: "I like X." (subject = I)\n' +
          'In German: "X gefällt mir." (subject = X — what is liked!)\n' +
          'Memorise the swap: the THING is the subject, the PERSON is in Dativ.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      { type: 'fill-blank', sentence: 'Ich helfe __ Vater. (the, masc.)',          answer: 'dem' },
      { type: 'fill-blank', sentence: 'Wir danken __ Lehrerin. (the, fem.)',       answer: 'der' },
      { type: 'fill-blank', sentence: 'Das Buch gehört __ Kind. (the, neuter)',    answer: 'dem' },
      { type: 'fill-blank', sentence: 'Du antwortest __ Kollegen. (the, plural)',  answer: 'den' },
      { type: 'fill-blank', sentence: 'Die Stadt gefällt __ . (me — Dativ of ich)', answer: 'mir' },
      { type: 'fill-blank', sentence: 'Das Auto gehört __ . (you, 1 friend — Dativ of du)', answer: 'dir' },
      { type: 'fill-blank', sentence: 'Ich glaube __ Frau. (the, fem.)',           answer: 'der' },
      { type: 'multiple-choice', q: '"I like the city." in German is…',
        options: ['Ich mag die Stadt.', 'Die Stadt gefällt mir.', 'Both are correct.', 'Neither.'],
        answer: 'Both are correct.',
        explain: 'Both work. "gefallen" + Dativ is the more idiomatic phrasing.' },
      { type: 'multiple-choice', q: 'Which verb does NOT take Dativ?',
        options: ['helfen','danken','sehen','gefallen'],
        answer: 'sehen',
        explain: '"sehen" takes Akkusativ: Ich sehe DEN Mann.' },
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Wir gratulieren __ Chef. (the, masc.)', answer: 'dem' },
    ],
  },

  /* ----- Day 27: Cases review (Nom · Akk · Dat) ----- */
  {
    id: 27, week: 4,
    title: 'Cases review',
    titleDe: 'Kasus-Wiederholung',
    emoji: '📐',
    objective: 'Tell Nominativ, Akkusativ and Dativ apart in any sentence.',
    intro: 'Three cases, one cheat-sheet. Once this clicks, half of German grammar is yours.',
    vocabulary: [],
    grammar: [
      { rule: 'Article cheat-sheet',
        body:
          '              masc.   fem.   neuter  plural\n' +
          'Nominativ     der     die    das     die\n' +
          'Akkusativ     den     die    das     die\n' +
          'Dativ         dem     der    dem     den +n\n' +
          'Indef. Nom.   ein     eine   ein     —\n' +
          'Indef. Akk.   einen   eine   ein     —\n' +
          'Indef. Dat.   einem   einer  einem   —',
      },
      { rule: 'Decision tree',
        body:
          '1. Is the noun the subject (who does it)? → Nominativ.\n' +
          '2. Is it the direct object (what is being verbed)? → Akkusativ.\n' +
          '3. After mit / bei / zu / von / nach / aus / seit / gegenüber? → Dativ.\n' +
          '4. After helfen / danken / gehören / gefallen / antworten / glauben? → Dativ.\n' +
          '5. None of the above? Default to Akkusativ.',
      },
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Subject: "__ Mann arbeitet hier." (the, masc., Nom.)', answer: 'Der' },
      { type: 'fill-blank', sentence: 'Object: "Ich sehe __ Mann." (the, masc., Akk.)',       answer: 'den' },
      { type: 'fill-blank', sentence: 'Dativ prep: "Ich gehe mit __ Mann." (the, masc.)',      answer: 'dem' },
      { type: 'fill-blank', sentence: 'Subject: "__ Frau ist hier." (the, fem., Nom.)',       answer: 'Die' },
      { type: 'fill-blank', sentence: 'Object: "Ich sehe __ Frau." (the, fem., Akk.)',         answer: 'die' },
      { type: 'fill-blank', sentence: 'Dativ verb: "Ich helfe __ Frau." (the, fem.)',          answer: 'der' },
      { type: 'fill-blank', sentence: 'Plural Dativ: "Ich spreche mit __ Studenten."',         answer: 'den' },
      { type: 'multiple-choice', q: 'What case after "mit"?', options: ['Nom.','Akk.','Dat.','Gen.'], answer: 'Dat.' },
      { type: 'multiple-choice', q: '"Das Buch gefällt ___ ." — pick.', options: ['ich','mich','mir','meinen'], answer: 'mir' },
      { type: 'multiple-choice', q: '"Ich kaufe ___ Buch." (a, neuter)', options: ['ein','einen','einem','eine'], answer: 'ein' },
    ],
    quiz: [],
  },

  /* ----- Day 30: Hobbies — dedicated (slide 66 expansion) ----- */
  {
    id: 33, week: 5,
    title: 'Hobbies & free time',
    titleDe: 'Hobbys & Freizeit',
    emoji: '🎮',
    objective: 'Talk about what you do for fun, with the right time and frequency words.',
    intro: 'You already met the hobby vocab on Day 13. Today: build long, natural sentences and hold a 60-second conversation about your free time.',
    vocabulary: [
      { de: 'das Hobby',     en: 'hobby' },
      { de: 'die Freizeit',  en: 'free time' },
      { de: 'reisen',        en: 'to travel' },
      { de: 'kochen',        en: 'to cook' },
      { de: 'tanzen',        en: 'to dance' },
      { de: 'singen',        en: 'to sing' },
      { de: 'malen',         en: 'to paint' },
      { de: 'fotografieren', en: 'to take photos' },
      { de: 'wandern',       en: 'to hike' },
      { de: 'schwimmen',     en: 'to swim' },
      { de: 'Fahrrad fahren',en: 'to ride a bike' },
      { de: 'Yoga machen',   en: 'to do yoga' },
      { de: 'der Sport',     en: 'sport' },
      { de: 'die Musik',     en: 'music' },
      { de: 'die Kunst',     en: 'art' },
    ],
    grammar: [
      { rule: 'Sentence template',
        body:
          'Subject + Verb + Time + Frequency + Preference + Object\n' +
          '  Ich   höre  am Wochenende  oft  gerne  Musik.\n' +
          '  Wir   spielen jeden Tag  manchmal — Fußball.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      { type: 'fill-blank', sentence: 'In meiner Freizeit __ ich gerne. (cook)',                  answer: 'koche' },
      { type: 'fill-blank', sentence: 'Wir __ am Wochenende oft. (hike)',                          answer: 'wandern' },
      { type: 'fill-blank', sentence: 'Sie (she) __ jeden Tag. (sing)',                            answer: 'singt' },
      { type: 'fill-blank', sentence: 'Du __ in deiner Freizeit Bücher. (read)',                   answer: 'liest' },
      { type: 'fill-blank', sentence: 'Ich __ sehr gerne Yoga. (machen — irreg. modal-like idiom)', answer: 'mache' },
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Was machst du in deiner Freizeit?',         en: 'What do you do in your free time?' },
        { speaker: 'B', de: 'Ich spiele gerne Videospiele und ich koche.', en: 'I like playing video games and I cook.' },
        { speaker: 'A', de: 'Was kochst du?',                            en: 'What do you cook?' },
        { speaker: 'B', de: 'Indisches Essen. Magst du indisches Essen?', en: 'Indian food. Do you like Indian food?' },
        { speaker: 'A', de: 'Ja, sehr gerne!',                           en: 'Yes, very much!' },
      ]},
    ],
    quiz: [
      { type: 'multiple-choice', q: '"In my free time, I gladly travel." Pick the order.',
        options: [
          'Ich reise in meiner Freizeit gerne.',
          'In meiner Freizeit ich reise gerne.',
          'Reise ich in meiner Freizeit gerne.',
          'Gerne ich reise in meiner Freizeit.',
        ],
        answer: 'Ich reise in meiner Freizeit gerne.' },
    ],
  },

  /* ----- Day 31: Reading practice (slides 111, 146-147, 183) ----- */
  {
    id: 34, week: 5,
    title: 'Reading practice',
    titleDe: 'Leseverständnis',
    emoji: '📖',
    objective: 'Read short German paragraphs and answer comprehension questions.',
    intro: 'You have built enough vocabulary and grammar to read real beginner-level paragraphs. Read each text aloud (use the 🔊), then answer the questions.',
    vocabulary: [],
    grammar: [
      { rule: 'Reading strategy',
        body:
          '1. Read the whole paragraph once for the gist — do NOT translate every word.\n' +
          '2. Highlight the verbs (they tell you who does what).\n' +
          '3. On the second read, look up only words you actually need.\n' +
          '4. Answer the questions IN GERMAN if you can — match grammar from the text.',
      },
    ],
    exercises: [
      { type: 'dialogue', lines: [
        { speaker: 'Text 1', de: 'Der Student ist dreiundzwanzig Jahre alt.', en: 'The student is 23 years old.' },
        { speaker: 'Text 1', de: 'Heute arbeitet er in der Firma.',           en: 'Today he works in the company.' },
        { speaker: 'Text 1', de: 'Jetzt schreibt er einen Satz und sucht ein Wort.', en: 'Now he writes a sentence and looks up a word.' },
        { speaker: 'Text 1', de: 'Danach zeigt der Lehrer ein Buch und erklärt eine Geschichte.', en: 'Afterwards the teacher shows a book and explains a story.' },
        { speaker: 'Text 1', de: 'Der Student hört und wiederholt das Wort.', en: 'The student listens and repeats the word.' },
      ]},
      { type: 'multiple-choice', q: 'Text 1: How old is the student?', options: ['13', '23', '33', '43'], answer: '23' },
      { type: 'multiple-choice', q: 'Text 1: Who shows the book?', options: ['the student', 'the teacher', 'the friend', 'the colleague'], answer: 'the teacher' },
      { type: 'multiple-choice', q: 'Text 1: What does the student do at the end?', options: ['writes a sentence', 'works in the company', 'listens and repeats', 'reads a book'], answer: 'listens and repeats' },
      { type: 'dialogue', lines: [
        { speaker: 'Text 2', de: 'Anna kommt aus Indien und wohnt jetzt in Berlin.', en: 'Anna comes from India and lives now in Berlin.' },
        { speaker: 'Text 2', de: 'Sie ist Softwareentwicklerin und arbeitet in einer Firma.', en: 'She is a software developer and works in a company.' },
        { speaker: 'Text 2', de: 'Am Wochenende kocht Anna gerne und besucht ihre Freunde.', en: 'On the weekend, Anna likes to cook and visits her friends.' },
        { speaker: 'Text 2', de: 'Heute hat sie keine Zeit — sie muss arbeiten.', en: 'Today she has no time — she has to work.' },
      ]},
      { type: 'multiple-choice', q: 'Text 2: Where is Anna from?', options: ['Berlin', 'Germany', 'India', 'Frankfurt'], answer: 'India' },
      { type: 'multiple-choice', q: 'Text 2: What is Anna\'s profession?', options: ['teacher', 'software developer', 'cook', 'doctor'], answer: 'software developer' },
      { type: 'multiple-choice', q: 'Text 2: Why does Anna have no time today?', options: ['She is sick.', 'She has to work.', 'She is travelling.', 'She is cooking.'], answer: 'She has to work.' },
      { type: 'dialogue', lines: [
        { speaker: 'Text 3', de: 'Im Restaurant bestellt Tom einen Kaffee mit Milch und eine Suppe.', en: 'At the restaurant Tom orders a coffee with milk and a soup.' },
        { speaker: 'Text 3', de: 'Der Kellner bringt das Essen schnell.', en: 'The waiter brings the food quickly.' },
        { speaker: 'Text 3', de: 'Tom isst und liest ein Buch.', en: 'Tom eats and reads a book.' },
        { speaker: 'Text 3', de: 'Danach fragt er: „Wie viel kostet das?" — und zahlt mit Karte.', en: 'Afterwards he asks: "How much does that cost?" — and pays with card.' },
      ]},
      { type: 'multiple-choice', q: 'Text 3: What does Tom order?', options: ['tea and a salad', 'coffee with milk and a soup', 'water and bread', 'beer and pizza'], answer: 'coffee with milk and a soup' },
      { type: 'multiple-choice', q: 'Text 3: How does Tom pay?', options: ['cash', 'card', 'phone', 'cheque'], answer: 'card' },
    ],
    quiz: [],
  },

  /* ===================== v3.0.0 — A2 expansion (presentation 0205.pptx) ===================== */

  /* ----- Day 28: Akkusativ pronouns ----- */
  {
    id: 28, week: 4,
    title: 'Akkusativ pronouns',
    titleDe: 'Akkusativ-Pronomen',
    emoji: '👀',
    objective: 'Replace any direct-object noun with the right Akkusativ pronoun.',
    intro: 'You have already met "ich · du · er · sie · es · wir · ihr · sie/Sie" as subjects. When the SAME person becomes the direct object, most of them shape-shift: ich → mich, du → dich, er → ihn, and so on.',
    vocabulary: [
      { de: 'mich',  en: 'me' },
      { de: 'dich',  en: 'you (1 friend)' },
      { de: 'ihn',   en: 'him' },
      { de: 'sie',   en: 'her / them (unchanged)' },
      { de: 'es',    en: 'it (unchanged)' },
      { de: 'uns',   en: 'us' },
      { de: 'euch',  en: 'you all (group of friends)' },
      { de: 'Sie',   en: 'you (formal)' },
    ],
    grammar: [
      { rule: 'The full Akkusativ-pronoun table',
        body:
          '              Subject (Nom)   →   Direct object (Akk)\n' +
          '   1st sg     ich              →   mich\n' +
          '   2nd sg     du               →   dich\n' +
          '   3rd m      er               →   ihn\n' +
          '   3rd f      sie              →   sie     (unchanged)\n' +
          '   3rd n      es               →   es      (unchanged)\n' +
          '   1st pl     wir              →   uns\n' +
          '   2nd pl     ihr              →   euch\n' +
          '   3rd pl     sie / Sie        →   sie / Sie  (unchanged)',
      },
      { rule: 'When to use them',
        body:
          'After verbs that take Akkusativ — sehen, haben, kaufen, lieben, treffen, besuchen, einladen…\n' +
          '  Wrong: „Ich sehe du!"\n' +
          '  Right: „Ich sehe dich!"\n' +
          '  Wrong: „Er liebt ich."\n' +
          '  Right: „Er liebt mich."',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      { type: 'fill-blank', sentence: '"He loves me." → Er liebt __.',                  answer: 'mich' },
      { type: 'fill-blank', sentence: '"I call you (1 friend)." → Ich rufe __ an.',     answer: 'dich' },
      { type: 'fill-blank', sentence: '"She meets him." → Sie trifft __.',              answer: 'ihn' },
      { type: 'fill-blank', sentence: '"I visit her." → Ich besuche __.',               answer: 'sie' },
      { type: 'fill-blank', sentence: '"I buy it." → Ich kaufe __.',                    answer: 'es' },
      { type: 'fill-blank', sentence: '"They help us." → Sie helfen __ . (uns works in both Akk and Dat)', answer: 'uns' },
      { type: 'fill-blank', sentence: '"We invite you (group)." → Wir laden __ ein.',   answer: 'euch' },
      { type: 'fill-blank', sentence: '"I see you (formal)." → Ich sehe __.',           answer: 'Sie' },
      { type: 'multiple-choice', q: '"He sees me." =',
        options: ['Er sieht ich.', 'Er sieht mir.', 'Er sieht mich.', 'Er sieht mein.'],
        answer: 'Er sieht mich.', explain: 'Subject: er (Nom). Object: ich → mich (Akk).' },
      { type: 'match', pairs: [
        { de: 'mich',  en: 'me' },
        { de: 'dich',  en: 'you (1 friend)' },
        { de: 'ihn',   en: 'him' },
        { de: 'uns',   en: 'us' },
        { de: 'euch',  en: 'you all' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: '"She invites him." → Sie lädt __ ein.', answer: 'ihn' },
      { type: 'multiple-choice', q: 'Which pronoun is the same in Nom and Akk?',
        options: ['ich','du','er','sie/es'], answer: 'sie/es', explain: 'sie (her/them) and es (it) keep the same form.' },
    ],
  },

  /* ----- Day 29: Dativ pronouns ----- */
  {
    id: 29, week: 5,
    title: 'Dativ pronouns',
    titleDe: 'Dativ-Pronomen',
    emoji: '🤲',
    objective: 'Use the Dativ pronoun set after Dativ verbs and Dativ prepositions.',
    intro: 'Same idea as yesterday, different case. After verbs like helfen, danken, geben — and after prepositions like mit, bei, zu — pronouns shift again: ich → mir, du → dir, er → ihm…',
    vocabulary: [
      { de: 'mir',     en: 'to / for me' },
      { de: 'dir',     en: 'to / for you (1 friend)' },
      { de: 'ihm',     en: 'to / for him / it' },
      { de: 'ihr',     en: 'to / for her' },
      { de: 'uns',     en: 'to / for us' },
      { de: 'euch',    en: 'to / for you all' },
      { de: 'ihnen',   en: 'to / for them' },
      { de: 'Ihnen',   en: 'to / for you (formal — capital I)' },
    ],
    grammar: [
      { rule: 'The full Dativ-pronoun table',
        body:
          '              Subject (Nom)   →   Indirect object (Dat)\n' +
          '   1st sg     ich              →   mir\n' +
          '   2nd sg     du               →   dir\n' +
          '   3rd m      er               →   ihm\n' +
          '   3rd f      sie              →   ihr\n' +
          '   3rd n      es               →   ihm\n' +
          '   1st pl     wir              →   uns\n' +
          '   2nd pl     ihr              →   euch\n' +
          '   3rd pl     sie              →   ihnen\n' +
          '   formal     Sie              →   Ihnen  (capital I)',
      },
      { rule: 'When to use them',
        body:
          'After Dativ-only verbs: helfen, danken, geben, gehören, gefallen, antworten, glauben.\n' +
          'After Dativ prepositions: mit, bei, zu, von, nach, aus, seit, gegenüber.\n' +
          '  Wrong: „Das Buch gehört ich!"\n' +
          '  Right: „Das Buch gehört mir!"\n' +
          '  Wrong: „Er kommt mit du."\n' +
          '  Right: „Er kommt mit dir."',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      { type: 'fill-blank', sentence: '"He helps me." → Er hilft __.',                       answer: 'mir' },
      { type: 'fill-blank', sentence: '"I help you (1 friend)." → Ich helfe __.',            answer: 'dir' },
      { type: 'fill-blank', sentence: '"She gives him the book." → Sie gibt __ das Buch.',   answer: 'ihm' },
      { type: 'fill-blank', sentence: '"I give her the book." → Ich gebe __ das Buch.',      answer: 'ihr' },
      { type: 'fill-blank', sentence: '"We help you (group)." → Wir helfen __.',             answer: 'euch' },
      { type: 'fill-blank', sentence: '"They give us a computer." → Sie geben __ einen Computer.', answer: 'uns' },
      { type: 'fill-blank', sentence: '"I help you (group)." → Ich helfe __.',               answer: 'euch' },
      { type: 'fill-blank', sentence: '"He comes with me." → Er kommt mit __.',              answer: 'mir' },
      { type: 'fill-blank', sentence: '"The book belongs to her." → Das Buch gehört __.',    answer: 'ihr' },
      { type: 'multiple-choice', q: 'Akk pronoun for "her" vs Dat pronoun for "her" — pick the Dat one.',
        options: ['sie','ihr','ihn','ihnen'], answer: 'ihr',
        explain: 'Akk = sie (unchanged). Dat = ihr.' },
    ],
    quiz: [
      { type: 'fill-blank', sentence: '"I am thanking you (formal)." → Ich danke __.', answer: 'Ihnen', hint: 'capital I — formal you' },
    ],
  },

  /* ----- Day 30: Akkusativ + Wechsel prepositions ----- */
  {
    id: 30, week: 5,
    title: 'More prepositions: Akk + Wechsel',
    titleDe: 'Mehr Präpositionen',
    emoji: '🧭',
    objective: 'Master the Akkusativ-only prepositions AND the "two-way" prepositions that switch case.',
    intro: 'On Day 25 you met the eight always-Dativ prepositions. Today: the three always-Akkusativ ones (für · um · ohne) and the trickiest group — Wechselpräpositionen (in, an, auf) — which switch between Dat and Akk depending on the question they answer.',
    vocabulary: [
      { de: 'für',    en: 'for (always Akk)' },
      { de: 'um',     en: 'at (time) / around (always Akk)' },
      { de: 'ohne',   en: 'without (always Akk)' },
      { de: 'in',     en: 'in / into (Wechsel)' },
      { de: 'an',     en: 'at / on (Wechsel)' },
      { de: 'auf',    en: 'on / onto (Wechsel)' },
    ],
    grammar: [
      { rule: '3 always-Akkusativ prepositions',
        body:
          'für · um · ohne — every noun after these is Akkusativ:\n' +
          '  Ich kaufe Kaffee FÜR den Freund.\n' +
          '  Ich esse UM 18 Uhr.\n' +
          '  Ich gehe OHNE den Schlüssel weg.',
      },
      { rule: 'Wechselpräpositionen — the case depends on the QUESTION',
        body:
          'in · an · auf (and a few more later) take EITHER case.\n' +
          '  "Wo?" (location, no movement) → DATIV.    Ich bin IN der Stadt.\n' +
          '  "Wohin?" (movement INTO/ONTO) → AKKUSATIV. Ich gehe IN die Stadt.\n' +
          'Same trick for an + auf:\n' +
          '  Wo? → Das Bild hängt AN DER Wand.   (Dat — no movement)\n' +
          '  Wohin? → Ich hänge das Bild AN DIE Wand. (Akk — movement)',
      },
      { rule: 'New short forms',
        body:
          'Akkusativ contractions (less common but you\'ll see them):\n' +
          '  in + das  → ins    "Ich gehe ins Restaurant."\n' +
          '  an + das  → ans    "Ich gehe ans Fenster."',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      { type: 'fill-blank', sentence: 'Akk-only: Ich kaufe Kaffee für __ Freund. (the, masc.)', answer: 'den' },
      { type: 'fill-blank', sentence: 'Akk-only: Wir essen um __ Uhr. (eight)',                 answer: 'acht' },
      { type: 'fill-blank', sentence: 'Akk-only: Ich gehe ohne __ Schlüssel. (a, masc.)',       answer: 'einen' },
      { type: 'fill-blank', sentence: 'Wechsel "wo?": Ich bin in __ Stadt. (the, fem. → Dat)',  answer: 'der' },
      { type: 'fill-blank', sentence: 'Wechsel "wohin?": Ich gehe in __ Stadt. (the, fem. → Akk)', answer: 'die' },
      { type: 'fill-blank', sentence: 'Wechsel "wohin?": Ich gehe __ Restaurant. (in + das contraction)', answer: 'ins' },
      { type: 'fill-blank', sentence: 'Wechsel "wo?": Das Buch ist auf __ Tisch. (the, masc. → Dat)', answer: 'dem' },
      { type: 'multiple-choice', q: '"in / an / auf" choose the case based on…',
        options: ['Always Dativ', 'Always Akkusativ', 'The question (Wo? → Dat, Wohin? → Akk)', 'Whichever sounds better'],
        answer: 'The question (Wo? → Dat, Wohin? → Akk)' },
      { type: 'multiple-choice', q: 'Which preposition is NOT Akkusativ-only?',
        options: ['für','um','mit','ohne'], answer: 'mit',
        explain: '"mit" is in the always-Dativ group from Day 25.' },
    ],
    quiz: [
      { type: 'fill-blank', sentence: '"I work for the company." → Ich arbeite für __ Firma. (the, fem. — Akk fem = die)', answer: 'die' },
    ],
  },

  /* ----- Day 37: Sentence connections ----- */
  {
    id: 37, week: 6,
    title: 'Sentence connections',
    titleDe: 'Konnektoren',
    emoji: '🔗',
    objective: 'Glue two sentences together — and know when the verb stays in slot 2 vs jumps to the end.',
    intro: 'Two flavours of conjunction. Coordinating ones (und, oder, aber, denn, dann) leave word order ALONE. Subordinating ones (weil, wenn) push the verb to the very END of the second clause.',
    vocabulary: [
      { de: 'und',   en: 'and' },
      { de: 'oder',  en: 'or' },
      { de: 'aber',  en: 'but' },
      { de: 'denn',  en: 'because (coordinating — verb stays slot 2)' },
      { de: 'dann',  en: 'then' },
      { de: 'weil',  en: 'because (subordinating — verb to end)' },
      { de: 'wenn',  en: 'if / when' },
      { de: 'dass',  en: 'that (subordinating — verb to end)' },
    ],
    grammar: [
      { rule: 'Group 1 — verb still in slot 2',
        body:
          'und · oder · aber · denn · dann\n' +
          '  Ich lerne Deutsch UND ich arbeite viel.\n' +
          '  Ich trinke Kaffee ODER ich trinke Tee.\n' +
          '  Das ist lecker, ABER es ist teuer.\n' +
          '  Ich gehe ins Restaurant, DENN ich bin hungrig.\n' +
          '  Ich lerne Deutsch, DANN gehe ich nach Hause.   (note: "dann" pulls subject after verb)',
      },
      { rule: 'Group 2 — verb JUMPS to the end',
        body:
          'weil · wenn · dass\n' +
          '  Ich lerne Deutsch, WEIL ich in Deutschland ARBEITE.\n' +
          '  Ich komme, WENN ich Zeit HABE.\n' +
          '  Ich denke, DASS er müde IST.\n' +
          'Comma BEFORE the conjunction. Conjugated verb at the very end of the sub-clause.',
      },
      { rule: 'denn vs weil — same meaning, different word order',
        body:
          'Both mean "because". Pick the word order you want:\n' +
          '  Ich gehe, DENN ich bin hungrig.   (verb stays slot 2)\n' +
          '  Ich gehe, WEIL ich hungrig BIN.   (verb to end)\n' +
          'Speakers tend to use "weil" more often in modern German.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      { type: 'fill-blank', sentence: 'Ich lerne Deutsch __ ich arbeite viel. (and)',                       answer: 'und' },
      { type: 'fill-blank', sentence: 'Ich trinke Kaffee __ ich trinke Tee. (or)',                          answer: 'oder' },
      { type: 'fill-blank', sentence: 'Das ist lecker, __ es ist teuer. (but)',                             answer: 'aber' },
      { type: 'fill-blank', sentence: 'Ich gehe ins Restaurant, __ ich bin hungrig. (because — verb in slot 2)', answer: 'denn' },
      { type: 'fill-blank', sentence: 'Ich lerne Deutsch, weil ich in Deutschland __. (arbeiten — verb at END)', answer: 'arbeite' },
      { type: 'fill-blank', sentence: 'Ich komme, wenn ich Zeit __. (haben — verb at END)',                  answer: 'habe' },
      { type: 'multiple-choice', q: 'Which conjunction sends the verb to the END?',
        options: ['und','aber','denn','weil'], answer: 'weil',
        explain: 'weil, wenn, dass are subordinating — verb jumps to the end of the clause.' },
      { type: 'multiple-choice', q: 'Pick the correct word order:',
        options: [
          'Ich bin müde, weil ich arbeite viel.',
          'Ich bin müde, weil ich viel arbeite.',
          'Ich bin müde, weil arbeite ich viel.',
          'Ich bin müde, viel weil ich arbeite.',
        ],
        answer: 'Ich bin müde, weil ich viel arbeite.',
        explain: 'After "weil", the conjugated verb (arbeite) goes to the very end.' },
    ],
    quiz: [
      { type: 'fill-blank', sentence: '"I think that he is tired." → Ich denke, dass er müde __.', answer: 'ist' },
    ],
  },

  /* ----- Day 38: Demonstrative articles + Indefinite pronouns ----- */
  {
    id: 38, week: 6,
    title: 'Demonstratives & indefinites',
    titleDe: 'Demonstrativ + Indefinit',
    emoji: '👉',
    objective: 'Point at "this one" with dieser/diese/dieses; talk about "someone/nobody/something/nothing/everyone".',
    intro: 'Two small but high-frequency word groups. "dieser" replaces der/die/das to mean "THIS particular one". Indefinite pronouns let you say "someone is here" or "nobody knows" without naming names.',
    vocabulary: [
      { de: 'dieser',   en: 'this (m, der-words)' },
      { de: 'diese',    en: 'this (f) / these (pl)' },
      { de: 'dieses',   en: 'this (n)' },
      { de: 'jemand',   en: 'someone' },
      { de: 'niemand',  en: 'nobody' },
      { de: 'etwas',    en: 'something' },
      { de: 'nichts',   en: 'nothing' },
      { de: 'alles',    en: 'everything' },
      { de: 'man',      en: 'one / people (impersonal)' },
    ],
    grammar: [
      { rule: 'Demonstrative articles — same endings as der/die/das',
        body:
          '         der → dieser     dieser Mann\n' +
          '         die → diese      diese Frau\n' +
          '         das → dieses     dieses Kind\n' +
          '   plural die → diese     diese Leute\n' +
          'They take the same case endings as der/die/das. Just swap "d" for "dies-" plus the original ending.',
      },
      { rule: 'Indefinite pronouns — quick map',
        body:
          'jemand   = someone   "Jemand ist hier."     (Nom)  / "Ich sehe jemanden." (Akk — note +en)\n' +
          'niemand  = nobody    "Niemand ist da."      (Nom)  / "Ich sehe niemanden." (Akk)\n' +
          'etwas    = something "Hast du etwas?"        (no change)\n' +
          'nichts   = nothing   "Ich habe nichts."      (no change)\n' +
          'alles    = everything "Alles ist gut."        (no change)\n' +
          'man      = one/people "Man arbeitet viel."    (always subject — uses 3rd-singular verb)',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      { type: 'fill-blank', sentence: '__ Mann arbeitet heute. (this, masc.)',     answer: 'Dieser' },
      { type: 'fill-blank', sentence: '__ Frau kocht sehr gut. (this, fem.)',      answer: 'Diese' },
      { type: 'fill-blank', sentence: '__ Restaurant ist sehr gut. (this, neuter)', answer: 'Dieses' },
      { type: 'fill-blank', sentence: '__ Tasche ist sehr schön. (this, fem.)',     answer: 'Diese' },
      { type: 'fill-blank', sentence: 'Indef: __ ist hier. (someone)',              answer: 'Jemand' },
      { type: 'fill-blank', sentence: 'Indef: Ich sehe __. (someone — Akk gets +en)', answer: 'jemanden' },
      { type: 'fill-blank', sentence: 'Indef: __ ist bei der Arbeit. (nobody)',     answer: 'Niemand' },
      { type: 'fill-blank', sentence: 'Indef: Ich habe __. (nothing)',              answer: 'nichts' },
      { type: 'fill-blank', sentence: 'Indef: __ arbeitet viel. (one / people)',    answer: 'Man' },
      { type: 'multiple-choice', q: '"man" takes which verb form?',
        options: ['1st singular (ich)','2nd singular (du)','3rd singular (er/sie/es)','plural (wir)'],
        answer: '3rd singular (er/sie/es)',
        explain: 'man arbeitet, man trinkt, man sagt — like er/sie/es.' },
    ],
    quiz: [
      { type: 'multiple-choice', q: '"This child" — pick the article.',
        options: ['dieser','diese','dieses','das'], answer: 'dieses' },
    ],
  },

  /* ----- Day 44: A2 mid-review ----- */
  {
    id: 44, week: 7,
    title: 'A2 mid-review',
    titleDe: 'A2 Zwischenwiederholung',
    emoji: '🎯',
    objective: 'Lock in pronouns, prepositions, conjunctions and demonstratives before tackling past tenses.',
    intro: 'Mixed pass through everything new from Days 28-38. Aim for ≥ 80%.',
    vocabulary: [],
    grammar: [],
    exercises: [
      { type: 'fill-blank', sentence: 'Akk pronoun: "She loves him." → Sie liebt __.',     answer: 'ihn' },
      { type: 'fill-blank', sentence: 'Dat pronoun: "He helps me." → Er hilft __.',        answer: 'mir' },
      { type: 'fill-blank', sentence: 'Wechsel: Ich gehe __ Restaurant. (in + das)',       answer: 'ins' },
      { type: 'fill-blank', sentence: 'Wechsel: Ich bin __ Stadt. (in + the, fem. → Dat)', answer: 'in der' },
      { type: 'fill-blank', sentence: 'Konnektor (verb at end): Ich lerne, weil ich Deutsch sprechen __. (wollen)', answer: 'will' },
      { type: 'fill-blank', sentence: 'Konnektor (verb in slot 2): Ich lerne, denn ich __ Deutsch sprechen. (wollen)', answer: 'will' },
      { type: 'fill-blank', sentence: 'Demonstrativ: __ Buch ist gut. (this, neuter)',     answer: 'Dieses' },
      { type: 'fill-blank', sentence: 'Indefinit: __ ist hier. (nobody)',                  answer: 'Niemand' },
      { type: 'multiple-choice', q: 'Which preposition takes Akkusativ?',
        options: ['mit','bei','für','von'], answer: 'für' },
      { type: 'multiple-choice', q: 'In "Er kommt mit dir.", what is "dir"?',
        options: ['Akk pronoun','Dat pronoun','Possessive','Demonstrative'], answer: 'Dat pronoun' },
    ],
    quiz: [],
  },

  /* ----- Day 45: Perfekt I — haben + Partizip II ----- */
  {
    id: 45, week: 7,
    title: 'Perfekt I — haben + Partizip II',
    titleDe: 'Perfekt I (haben)',
    emoji: '⏪',
    objective: 'Speak about the past using haben + Partizip II — the everyday way.',
    intro: 'In spoken German, the Perfekt is THE past tense for nearly every verb. Two ingredients: a conjugated form of haben (or sein — tomorrow) plus the past participle of the main verb at the END of the sentence.',
    vocabulary: [
      { de: 'gearbeitet',  en: 'worked  (Part. II of arbeiten — regular: ge___t)' },
      { de: 'gelernt',     en: 'learned (Part. II of lernen)' },
      { de: 'gemacht',     en: 'done (Part. II of machen)' },
      { de: 'gespielt',    en: 'played (Part. II of spielen)' },
      { de: 'gekauft',     en: 'bought (Part. II of kaufen)' },
      { de: 'gewohnt',     en: 'lived (Part. II of wohnen)' },
      { de: 'getrunken',   en: 'drunk (Part. II of trinken — irregular)' },
      { de: 'gegessen',    en: 'eaten (Part. II of essen — irregular)' },
      { de: 'gelesen',     en: 'read (Part. II of lesen — irregular)' },
      { de: 'gesehen',     en: 'seen (Part. II of sehen — irregular)' },
      { de: 'geschrieben', en: 'written (Part. II of schreiben — irregular)' },
      { de: 'gesprochen',  en: 'spoken (Part. II of sprechen — irregular)' },
    ],
    grammar: [
      { rule: 'The Perfekt formula',
        body:
          'subject + haben (slot 2) + … + Partizip II (sentence end)\n' +
          '  Ich HABE gestern Deutsch GELERNT.\n' +
          '  Wir HABEN viel Kaffee GETRUNKEN.\n' +
          '  Du HAST das Buch GELESEN.',
      },
      { rule: 'Building Partizip II — regular verbs',
        body:
          'ge + verb-stem + t.\n' +
          '  arbeit-en → gearbeitet\n' +
          '  lern-en   → gelernt\n' +
          '  mach-en   → gemacht\n' +
          '  kauf-en   → gekauft',
      },
      { rule: 'Irregular Partizip II — memorise',
        body:
          'Many common verbs change the stem vowel and end in -en:\n' +
          '  trinken  → getrunken\n' +
          '  essen    → gegessen\n' +
          '  lesen    → gelesen\n' +
          '  sehen    → gesehen\n' +
          '  schreiben → geschrieben\n' +
          '  sprechen → gesprochen\n' +
          'Pattern is irregular — learn the participle alongside the verb.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      { type: 'fill-blank', sentence: 'Ich __ gestern __. (regular: arbeiten → present perfect)', answer: 'habe gearbeitet', hint: 'two words: helper + participle' },
      { type: 'fill-blank', sentence: 'Wir __ Kaffee __. (irregular: trinken)',                   answer: 'haben getrunken' },
      { type: 'fill-blank', sentence: 'Du __ ein Buch __. (irregular: lesen)',                    answer: 'hast gelesen' },
      { type: 'fill-blank', sentence: 'Sie (she) __ ein Brot __. (regular: kaufen)',              answer: 'hat gekauft' },
      { type: 'fill-blank', sentence: 'Ich __ Deutsch __. (regular: lernen)',                     answer: 'habe gelernt' },
      { type: 'fill-blank', sentence: 'Ihr __ Pizza __. (irregular: essen)',                      answer: 'habt gegessen' },
      { type: 'multiple-choice', q: 'Where does the Partizip II go?',
        options: ['Position 1','Position 2','Right after the helper','At the very end of the sentence'],
        answer: 'At the very end of the sentence' },
      { type: 'multiple-choice', q: 'Pick the right Partizip II for "spielen".',
        options: ['gespielen','gespielt','spielt','gespielen'], answer: 'gespielt',
        explain: 'Regular verb → ge + stem + t.' },
    ],
    quiz: [
      { type: 'fill-blank', sentence: '"I have spoken German." → Ich habe Deutsch __.', answer: 'gesprochen' },
    ],
  },

  /* ----- Day 46: Perfekt II — sein + motion verbs ----- */
  {
    id: 46, week: 7,
    title: 'Perfekt II — sein + motion verbs',
    titleDe: 'Perfekt II (sein)',
    emoji: '🚶',
    objective: 'Switch the helper from haben to sein for verbs of motion or change of state.',
    intro: 'A small group of verbs use SEIN (not haben) as their Perfekt helper — almost always verbs of MOVEMENT (gehen, fahren, kommen) or CHANGE OF STATE (werden, bleiben). The rule of thumb: did the subject move or change? Use sein.',
    vocabulary: [
      { de: 'gegangen',  en: 'gone (Part. II of gehen)' },
      { de: 'gefahren',  en: 'driven / travelled (Part. II of fahren)' },
      { de: 'gekommen',  en: 'come (Part. II of kommen)' },
      { de: 'geblieben', en: 'stayed (Part. II of bleiben — change of state-ish)' },
      { de: 'geflogen',  en: 'flown (Part. II of fliegen)' },
      { de: 'aufgestanden', en: 'got up (Part. II of aufstehen — separable!)' },
      { de: 'geworden',  en: 'become (Part. II of werden)' },
    ],
    grammar: [
      { rule: 'sein-helper rule',
        body:
          'Use sein + Partizip II for:\n' +
          '• verbs of MOTION from A to B: gehen, fahren, kommen, fliegen, laufen, reisen\n' +
          '• verbs of CHANGE OF STATE: werden (become), aufstehen (get up), einschlafen (fall asleep)\n' +
          '• exceptions: bleiben (to stay), sein (to be), passieren (to happen)\n' +
          'Everything else uses haben.',
      },
      { rule: 'Examples',
        body:
          '  Ich BIN nach Hause GEGANGEN.\n' +
          '  Wir SIND in die Stadt GEFAHREN.\n' +
          '  Du BIST aus der Schule GEKOMMEN.\n' +
          '  Sie IST im Restaurant GEBLIEBEN.\n' +
          '  Ich BIN um 7 Uhr AUFGESTANDEN.   (separable verb! prefix glues to participle)',
      },
      { rule: 'Separable verbs in Perfekt',
        body:
          'For separable verbs the prefix re-attaches AND the "ge-" goes BETWEEN them:\n' +
          '  aufstehen   → aufgestanden    (ich bin aufgestanden)\n' +
          '  einkaufen   → eingekauft      (ich habe eingekauft)\n' +
          '  anrufen     → angerufen       (ich habe angerufen)',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      { type: 'fill-blank', sentence: 'Ich __ nach Hause __. (gehen)',                       answer: 'bin gegangen' },
      { type: 'fill-blank', sentence: 'Wir __ in die Stadt __. (fahren)',                    answer: 'sind gefahren' },
      { type: 'fill-blank', sentence: 'Du __ aus der Stadt __. (kommen)',                    answer: 'bist gekommen' },
      { type: 'fill-blank', sentence: 'Er __ im Restaurant __. (bleiben)',                   answer: 'ist geblieben' },
      { type: 'fill-blank', sentence: 'Ich __ um 7 Uhr __. (aufstehen — separable!)',        answer: 'bin aufgestanden' },
      { type: 'fill-blank', sentence: 'Ich __ am Samstag __. (einkaufen — separable, but takes haben!)', answer: 'habe eingekauft', hint: 'einkaufen is not motion — uses haben' },
      { type: 'multiple-choice', q: '"to drive / travel" → which helper?',
        options: ['haben','sein','either works','depends on subject'], answer: 'sein',
        explain: 'fahren is motion → sein.' },
      { type: 'multiple-choice', q: '"to drink" → which helper?',
        options: ['haben','sein','either works','depends on subject'], answer: 'haben',
        explain: 'No motion, no change of state → haben.' },
    ],
    quiz: [
      { type: 'fill-blank', sentence: '"I have flown to Berlin." → Ich __ nach Berlin __.', answer: 'bin geflogen' },
    ],
  },

  /* ----- Day 47: Präteritum (sein + haben) ----- */
  {
    id: 47, week: 7,
    title: 'Präteritum — war & hatte',
    titleDe: 'Präteritum (sein + haben)',
    emoji: '📜',
    objective: 'Use the simple past of sein and haben — the only Präteritum forms you need at A1.',
    intro: 'Most past-tense verbs use Perfekt in spoken German. EXCEPT sein and haben — those almost always use the Präteritum (war / hatte) even in conversation. "Ich war müde" sounds natural; "Ich bin müde gewesen" sounds odd.',
    vocabulary: [
      // sein
      { de: 'war',     en: 'was (ich / er / sie / es)' },
      { de: 'warst',   en: 'were (du)' },
      { de: 'waren',   en: 'were (wir / sie / Sie)' },
      { de: 'wart',    en: 'were (ihr)' },
      // haben
      { de: 'hatte',   en: 'had (ich / er / sie / es)' },
      { de: 'hattest', en: 'had (du)' },
      { de: 'hatten',  en: 'had (wir / sie / Sie)' },
      { de: 'hattet',  en: 'had (ihr)' },
    ],
    grammar: [
      { rule: 'sein → war (Präteritum)',
        body:
          'ich  war\n' +
          'du   warst\n' +
          'er/sie/es  war\n' +
          'wir  waren\n' +
          'ihr  wart\n' +
          'sie / Sie  waren',
      },
      { rule: 'haben → hatte (Präteritum)',
        body:
          'ich  hatte\n' +
          'du   hattest\n' +
          'er/sie/es  hatte\n' +
          'wir  hatten\n' +
          'ihr  hattet\n' +
          'sie / Sie  hatten',
      },
      { rule: 'When to use Präteritum vs Perfekt',
        body:
          '• sein + haben → Präteritum (war / hatte) is normal even in speech.\n' +
          '• Modal verbs → Präteritum is also natural (musste, konnte, wollte).\n' +
          '• All other verbs → use Perfekt in conversation. Reserve their Präteritum for written stories.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      // sein translations — slide
      { type: 'fill-blank', sentence: '"I was tired." → Ich __ müde.',                  answer: 'war' },
      { type: 'fill-blank', sentence: '"We were in the restaurant." → Wir __ im Restaurant.', answer: 'waren' },
      { type: 'fill-blank', sentence: '"He was in the office." → Er __ im Büro.',       answer: 'war' },
      { type: 'fill-blank', sentence: '"She was not there." → Sie __ nicht da.',        answer: 'war' },
      { type: 'fill-blank', sentence: '"You (1) were late." → Du __ spät.',             answer: 'warst' },
      { type: 'fill-blank', sentence: '"You (group) were in the park." → Ihr __ im Park.', answer: 'wart' },
      { type: 'fill-blank', sentence: '"They were in Germany." → Sie __ in Deutschland.', answer: 'waren' },
      // haben translations — slide
      { type: 'fill-blank', sentence: '"I had time." → Ich __ Zeit.',                   answer: 'hatte' },
      { type: 'fill-blank', sentence: '"We had a meeting." → Wir __ ein Meeting.',      answer: 'hatten' },
      { type: 'fill-blank', sentence: '"He had a question." → Er __ eine Frage.',       answer: 'hatte' },
      { type: 'fill-blank', sentence: '"You (1) had a lot of work." → Du __ viel Arbeit.', answer: 'hattest' },
      { type: 'fill-blank', sentence: '"You (group) had a break." → Ihr __ eine Pause.', answer: 'hattet' },
      { type: 'multiple-choice', q: 'Most verbs in spoken German use which past tense?',
        options: ['Präteritum','Perfekt','Konjunktiv','Plusquamperfekt'], answer: 'Perfekt',
        explain: 'Reserve Präteritum for sein, haben, and modal verbs in speech.' },
    ],
    quiz: [
      { type: 'fill-blank', sentence: '"They had a bus." → Sie __ einen Bus.', answer: 'hatten' },
    ],
  },

  /* ----- Day 48: Konjunktiv II + Imperative ----- */
  {
    id: 48, week: 7,
    title: 'Konjunktiv II + Imperative',
    titleDe: 'Konjunktiv II + Imperativ',
    emoji: '🙏',
    objective: 'Sound polite with möchte/würde, and bark (kindly) commands with the Imperativ.',
    intro: 'Two unrelated tools that you already half-know. "möchte" and "würde" are the two Konjunktiv II forms you need at A1 — they make wishes and polite requests. The Imperativ is for commands: Komm! Iss! Ruf an!',
    vocabulary: [
      // Konjunktiv II — möchten
      { de: 'möchte',     en: 'would like (ich / er / sie / es)' },
      { de: 'möchtest',   en: 'would like (du)' },
      { de: 'möchten',    en: 'would like (wir / sie / Sie)' },
      { de: 'möchtet',    en: 'would like (ihr)' },
      // Konjunktiv II — würden
      { de: 'würde',      en: 'would (ich / er / sie / es)' },
      { de: 'würdest',    en: 'would (du)' },
      { de: 'würden',     en: 'would (wir / sie / Sie)' },
      { de: 'würdet',     en: 'would (ihr)' },
      // Imperative samples
      { de: 'Komm!',      en: 'Come!' },
      { de: 'Geh!',       en: 'Go!' },
      { de: 'Iss!',       en: 'Eat!' },
      { de: 'Ruf an!',    en: 'Call (someone)!' },
      { de: 'Kauf ein!',  en: 'Go shopping!' },
    ],
    grammar: [
      { rule: 'Konjunktiv II — what it is',
        body:
          'NOT a tense (not past). It expresses politeness, wishes, hypotheticals.\n' +
          'At A1 you only need TWO verbs:\n' +
          '  möchten — Konjunktiv II of mögen → "would like"\n' +
          '  würden  — Konjunktiv II of werden → "would"\n' +
          '  Ich MÖCHTE einen Kaffee (haben).\n' +
          '  Ich WÜRDE später essen.',
      },
      { rule: 'möchten conjugation',
        body:
          'ich  möchte\n' +
          'du   möchtest\n' +
          'er/sie/es  möchte\n' +
          'wir  möchten\n' +
          'ihr  möchtet\n' +
          'sie / Sie  möchten',
      },
      { rule: 'würden conjugation',
        body:
          'ich  würde\n' +
          'du   würdest\n' +
          'er/sie/es  würde\n' +
          'wir  würden\n' +
          'ihr  würdet\n' +
          'sie / Sie  würden',
      },
      { rule: 'The Imperativ — talking to one person (du-form)',
        body:
          'Take the du-present-tense, drop the -st ending, drop the pronoun:\n' +
          '  du kommst → Komm!\n' +
          '  du gehst  → Geh!\n' +
          '  du isst   → Iss!\n' +
          '  du rufst an → Ruf an!   (separable: prefix to end)\n' +
          '  du kaufst ein → Kauf ein!\n' +
          '"Sei!" is the irregular du-form for sein.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      { type: 'fill-blank', sentence: 'Polite: Ich __ einen Kaffee, bitte. (would like)',           answer: 'möchte' },
      { type: 'fill-blank', sentence: 'Polite: Du __ später essen. (would)',                        answer: 'würdest' },
      { type: 'fill-blank', sentence: 'Polite: Wir __ ins Restaurant gehen. (would like)',          answer: 'möchten' },
      { type: 'fill-blank', sentence: 'Polite: Ihr __ am Samstag arbeiten. (would)',                answer: 'würdet' },
      { type: 'fill-blank', sentence: 'Imperativ (du): "Come into the office!" → __ in die Arbeit!', answer: 'Komm' },
      { type: 'fill-blank', sentence: 'Imperativ (du): "Eat the soup!" → __ die Suppe!',            answer: 'Iss' },
      { type: 'fill-blank', sentence: 'Imperativ (du, separable): "Call your friend!" → __ deinen Freund __!', answer: 'Ruf an', hint: 'two words separated by a space — prefix to end' },
      { type: 'multiple-choice', q: 'Konjunktiv II is used to express…',
        options: ['the past','the future','politeness / wishes','negation'], answer: 'politeness / wishes' },
      { type: 'multiple-choice', q: '"möchten" is the Konjunktiv II form of which verb?',
        options: ['mögen','machen','müssen','möcht'], answer: 'mögen' },
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Imperativ: "Buy the bread!" → __ das Brot __!', answer: 'Kauf ein' },
    ],
  },
];

/* Sort once on export so days inserted out of order still render in numeric order. */
days.sort((a, b) => a.id - b.id);

export const weeks = [
  { n: 1, title: 'Foundations',                  tagline: 'Sounds, numbers 0-29, pronouns, articles, sein/haben/werden' },
  { n: 2, title: 'Building sentences',           tagline: 'Numbers 30-100, S-V-O, regular & separable verbs, time, self-intro' },
  { n: 3, title: 'Questions & numbers',          tagline: 'Mid-review, yes/no & W-questions, numbers 100-1000+, into cases' },
  { n: 4, title: 'Cases — articles',             tagline: 'Akkusativ + Dativ articles & verbs + cases review + Akk pronouns' },
  { n: 5, title: 'Pronouns & people',            tagline: 'Dat pronouns, Wechsel prepositions, family, routine, hobbies, reading' },
  { n: 6, title: 'Modals, glue & scenarios',     tagline: 'Modals, conjunctions, demonstratives, restaurant, shopping, travel, negation' },
  { n: 7, title: 'Past tenses & polite forms',   tagline: 'Reviews, Perfekt I/II, Präteritum, Konjunktiv II + Imperativ' },
  { n: 8, title: 'Mastery',                      tagline: 'Mega review · Say it back · final exam' },
];

export const dayById = (id) => days.find((d) => d.id === Number(id));
