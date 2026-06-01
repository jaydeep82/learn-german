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
  // Stem-changing verbs (Day 11). Vowel shifts in du / er / sie / es only.
  essen:    [['ich','esse'],   ['du','isst'],    ['er/sie/es','isst'],   ['wir','essen'],   ['ihr','esst'],   ['sie/Sie','essen']],   // e → i
  lesen:    [['ich','lese'],   ['du','liest'],   ['er/sie/es','liest'],  ['wir','lesen'],   ['ihr','lest'],   ['sie/Sie','lesen']],   // e → ie  (s + st merges to st)
  sehen:    [['ich','sehe'],   ['du','siehst'],  ['er/sie/es','sieht'],  ['wir','sehen'],   ['ihr','seht'],   ['sie/Sie','sehen']],   // e → ie
  sprechen: [['ich','spreche'],['du','sprichst'],['er/sie/es','spricht'],['wir','sprechen'],['ihr','sprecht'],['sie/Sie','sprechen']], // e → i
  nehmen:   [['ich','nehme'],  ['du','nimmst'],  ['er/sie/es','nimmt'],  ['wir','nehmen'],  ['ihr','nehmt'],  ['sie/Sie','nehmen']],   // e → i  (+ doubled m)
  geben:    [['ich','gebe'],   ['du','gibst'],   ['er/sie/es','gibt'],   ['wir','geben'],   ['ihr','gebt'],   ['sie/Sie','geben']],    // e → i
  fahren:   [['ich','fahre'],  ['du','fährst'],  ['er/sie/es','fährt'],  ['wir','fahren'],  ['ihr','fahrt'],  ['sie/Sie','fahren']],   // a → ä
  schlafen: [['ich','schlafe'],['du','schläfst'],['er/sie/es','schläft'],['wir','schlafen'],['ihr','schlaft'],['sie/Sie','schlafen']], // a → ä
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
      { de: 'Vater',   en: 'father',   emoji: '👨', hint: 'V → F   say "FAH-tuh"',  example: 'Der Vater ist müde.',  exampleEn: 'The father is tired.' },
      { de: 'Vogel',   en: 'bird',     emoji: '🐦', hint: 'V → F   say "FOH-gel"',  example: 'Der Vogel ist schön.', exampleEn: 'The bird is beautiful.' },
      { de: 'viel',    en: 'much / a lot', emoji: '➕', hint: 'V → F   say "feel"', example: 'Ich mache viel.',      exampleEn: 'I do a lot.' },
      // W sounds like soft V
      { de: 'Wasser',  en: 'water',    emoji: '💧', hint: 'W → soft V   say "VAH-sser"', example: 'Das ist Wasser.',  exampleEn: 'That is water.' },
      { de: 'Wein',    en: 'wine',     emoji: '🍷', hint: 'W → soft V   say "vine" (rhymes with "shine")', example: 'Das ist Wein.', exampleEn: 'That is wine.' },
      // Z sounds like ts
      { de: 'Zeit',    en: 'time',     emoji: '⏰', hint: 'Z → ts   say "tsait" (rhymes with "kite")', example: 'Die Zeit ist schön.', exampleEn: 'The time is lovely.' },
      { de: 'Zoo',     en: 'zoo',      emoji: '🦁', hint: 'Z → ts   say "tso"',     example: 'Der Zoo ist schön.',  exampleEn: 'The zoo is nice.' },
      // J sounds like Y
      { de: 'ja',      en: 'yes',      emoji: '✅', hint: 'J → Y   say "ya"',       example: 'Ja, ich bin müde.',   exampleEn: 'Yes, I am tired.' },
      { de: 'Jahr',    en: 'year',     emoji: '📅', hint: 'J → Y   say "yar"',      example: 'Das Jahr ist schön.', exampleEn: 'The year is nice.' },
      { de: 'Junge',   en: 'boy',      emoji: '👦', hint: 'J → Y   say "YOONG-uh"', example: 'Der Junge ist müde.', exampleEn: 'The boy is tired.' },
      // Hard ch — back of throat
      { de: 'Bach',    en: 'stream',   emoji: '🏞️', hint: 'hard ch — air from the back of the throat', example: 'Der Bach ist schön.', exampleEn: 'The stream is beautiful.' },
      { de: 'kochen',  en: 'to cook',  emoji: '🍳', hint: 'hard ch (after a / o / u): "KOKH-en"', example: 'Ich koche Wasser.', exampleEn: 'I boil water.' },
      { de: 'machen',  en: 'to do',    emoji: '🛠️', hint: 'hard ch: "MAKH-en"',     example: 'Ich mache viel.',     exampleEn: 'I do a lot.' },
      // Soft ch — front of mouth
      { de: 'ich',     en: 'I',        emoji: '🙋', hint: 'soft ch (after i / e / consonants): "ikh"', example: 'Ich bin müde.', exampleEn: 'I am tired.' },
      { de: 'nicht',   en: 'not',      emoji: '🚫', hint: 'soft ch: "nikht"',       example: 'Das ist nicht schön.', exampleEn: 'That is not nice.' },
      { de: 'Milch',   en: 'milk',     emoji: '🥛', hint: 'soft ch: "milkh"',       example: 'Das ist Milch.',      exampleEn: 'That is milk.' },
      // sch = English sh
      { de: 'Schule',  en: 'school',   emoji: '🏫', hint: 'sch = English "sh": "SHOO-luh"', example: 'Die Schule ist schön.', exampleEn: 'The school is nice.' },
      // Umlauts
      { de: 'Bär',     en: 'bear',     emoji: '🐻', hint: 'ä = open "eh" (like English "bed", lips wider)', example: 'Der Bär ist müde.', exampleEn: 'The bear is tired.' },
      { de: 'schön',   en: 'beautiful',emoji: '✨', hint: 'ö = lips for "oh", tongue says "eh"', example: 'Das ist schön.', exampleEn: 'That is beautiful.' },
      { de: 'Öl',      en: 'oil',      emoji: '🛢️', hint: 'ö stand-alone: "url" (lips rounded, no R sound)', example: 'Das ist Öl.', exampleEn: 'That is oil.' },
      { de: 'müde',    en: 'tired',    emoji: '😴', hint: 'ü = lips for "oo", tongue says "ee": "MUE-duh"', example: 'Du bist müde.', exampleEn: 'You are tired.' },
      // Compound words
      { de: 'Wochenende',     en: 'weekend',     emoji: '🎉', hint: 'chunk it: Wo-chen-en-de', example: 'Das Wochenende ist schön.', exampleEn: 'The weekend is nice.' },
      { de: 'Hausaufgabe',    en: 'homework',    emoji: '📝', hint: 'chunk it: Haus-auf-ga-be', example: 'Die Hausaufgabe ist nicht schön.', exampleEn: 'The homework is not nice.' },
      { de: 'Softwareentwicklung', en: 'software development', emoji: '💻', hint: 'chunk it: Soft-ware-ent-wick-lung', example: 'Das ist Softwareentwicklung.', exampleEn: 'That is software development.' },
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
    vocabLayout: 'spotlight',
    title: 'Numbers 0–29',
    titleDe: 'Zahlen 0–29',
    emoji: '🔢',
    objective: 'Count from zero to twenty-nine — and pronounce the tricky ones (sechs, sieben, zwölf) right.',
    intro: 'Numbers are everywhere — age, phone, prices, times. German has three patterns: 0-12 are unique words, 13-19 is "unit + zehn", and 21-29 FLIPS to "unit-and-twenty" (einundzwanzig = "one-and-twenty").',
    vocabulary: [
      // 0-12 — unique words, all to be memorised
      { de: 'null',   en: '0',  emoji: '0️⃣', hint: 'simple "nool"', example: 'Ich habe null Euro.', exampleEn: 'I have zero euros.' },
      { de: 'eins',   en: '1',  emoji: '1️⃣', hint: 'rhymes with English "rhinos" (start)', example: 'Eins plus eins ist zwei.', exampleEn: 'One plus one is two.' },
      { de: 'zwei',   en: '2',  emoji: '✌️', hint: 'tsv-eye — kids often say "zwo" on the phone to avoid confusion with drei', example: 'Ich habe zwei Hände.', exampleEn: 'I have two hands.' },
      { de: 'drei',   en: '3',  emoji: '🚀', hint: 'rhymes with English "fly"', example: 'Drei, zwei, eins — los!', exampleEn: 'Three, two, one — go!' },
      { de: 'vier',   en: '4',  emoji: '🚗', hint: 'V→F: "feer", same as English "fear"', example: 'Ein Auto hat vier Räder.', exampleEn: 'A car has four wheels.' },
      { de: 'fünf',   en: '5',  emoji: '🖐️', hint: 'ü = lips for oo, say ee → "fuenf"', example: 'Eine Hand hat fünf Finger.', exampleEn: 'A hand has five fingers.' },
      { de: 'sechs',  en: '6',  emoji: '🥚', hint: '⚠ "chs" sounds like English [ks]: "zeks" (not "zekh-s")', example: 'Sechs Eier, bitte.', exampleEn: 'Six eggs, please.' },
      { de: 'sieben', en: '7',  emoji: '📅', hint: '"ZEE-ben" — long e, soft b', example: 'Eine Woche hat sieben Tage.', exampleEn: 'A week has seven days.' },
      { de: 'acht',   en: '8',  emoji: '💼', hint: 'hard ch: "akht"', example: 'Ich arbeite acht Stunden.', exampleEn: 'I work eight hours.' },
      { de: 'neun',   en: '9',  emoji: '➕', hint: 'eu = oy: "noyn"', example: 'Neun plus eins ist zehn.', exampleEn: 'Nine plus one is ten.' },
      { de: 'zehn',   en: '10', emoji: '🔟', hint: 'silent h = long e: "tsayn"', example: 'Ich zähle bis zehn.', exampleEn: 'I count to ten.' },
      { de: 'elf',    en: '11', emoji: '⚽', hint: 'just "elf" — same as the English word', example: 'Ein Team hat elf Spieler.', exampleEn: 'A team has eleven players.' },
      { de: 'zwölf',  en: '12', emoji: '📆', hint: 'ö = lips for oh, tongue says eh: "tsvurlf"', example: 'Ein Jahr hat zwölf Monate.', exampleEn: 'A year has twelve months.' },
      // 13-19 — unit + zehn
      { de: 'dreizehn',  en: '13', emoji: '🔢', hint: 'drei + zehn: "DRYE-tsayn"', example: 'Dreizehn ist eine Zahl.', exampleEn: 'Thirteen is a number.' },
      { de: 'vierzehn',  en: '14', emoji: '📅', hint: 'vier + zehn: "FEER-tsayn"', example: 'Zwei Wochen sind vierzehn Tage.', exampleEn: 'Two weeks are fourteen days.' },
      { de: 'fünfzehn',  en: '15', emoji: '🕒', hint: 'fünf + zehn: "FUENF-tsayn"', example: 'Es ist fünfzehn Uhr.', exampleEn: 'It is 15:00 (3 pm).' },
      { de: 'sechzehn',  en: '16', emoji: '👦', hint: '⚠ NO -s- (not sechszehn): "ZEKH-tsayn"', example: 'Mein Bruder ist sechzehn.', exampleEn: 'My brother is sixteen.' },
      { de: 'siebzehn',  en: '17', emoji: '➕', hint: '⚠ NO -en- (not siebenzehn): "ZEEP-tsayn"', example: 'Siebzehn plus drei ist zwanzig.', exampleEn: 'Seventeen plus three is twenty.' },
      { de: 'achtzehn',  en: '18', emoji: '🎂', hint: 'acht + zehn: "AKH-tsayn"', example: 'Ich bin achtzehn Jahre alt.', exampleEn: 'I am eighteen years old.' },
      { de: 'neunzehn',  en: '19', emoji: '➕', hint: 'neun + zehn: "NOYN-tsayn"', example: 'Neunzehn plus eins ist zwanzig.', exampleEn: 'Nineteen plus one is twenty.' },
      // 20 + flips
      { de: 'zwanzig',           en: '20', emoji: '🎂', hint: 'final -ig sounds like soft "ich" / "ik": "TSVAN-tsikh"', example: 'Ich bin zwanzig Jahre alt.', exampleEn: 'I am twenty years old.' },
      { de: 'einundzwanzig',     en: '21', emoji: '🎉', hint: '⚠ EIN- not eins-: drops the s before "und"', example: 'Mit einundzwanzig ist man jung.', exampleEn: 'At twenty-one, one is young.' },
      { de: 'zweiundzwanzig',    en: '22', emoji: '🎂', hint: 'two-and-twenty', example: 'Sie ist zweiundzwanzig Jahre alt.', exampleEn: 'She is twenty-two years old.' },
      { de: 'dreiundzwanzig',    en: '23', emoji: '🎂', hint: 'three-and-twenty', example: 'Er ist dreiundzwanzig.', exampleEn: 'He is twenty-three.' },
      { de: 'vierundzwanzig',    en: '24', emoji: '🕐', hint: 'four-and-twenty', example: 'Ein Tag hat vierundzwanzig Stunden.', exampleEn: 'A day has twenty-four hours.' },
      { de: 'fünfundzwanzig',    en: '25', emoji: '🎂', hint: 'five-and-twenty', example: 'Ich bin fünfundzwanzig Jahre alt.', exampleEn: 'I am twenty-five years old.' },
      { de: 'sechsundzwanzig',   en: '26', emoji: '🔤', hint: 'six-and-twenty (full sechs — NOT sechundzwanzig)', example: 'Das Alphabet hat sechsundzwanzig Buchstaben.', exampleEn: 'The alphabet has twenty-six letters.' },
      { de: 'siebenundzwanzig',  en: '27', emoji: '🎂', hint: 'seven-and-twenty (full sieben — NOT siebundzwanzig)', example: 'Er ist siebenundzwanzig.', exampleEn: 'He is twenty-seven.' },
      { de: 'achtundzwanzig',    en: '28', emoji: '📆', hint: 'eight-and-twenty', example: 'Februar hat achtundzwanzig Tage.', exampleEn: 'February has twenty-eight days.' },
      { de: 'neunundzwanzig',    en: '29', emoji: '➕', hint: 'nine-and-twenty', example: 'Neunundzwanzig plus eins ist dreißig.', exampleEn: 'Twenty-nine plus one is thirty.' },
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
    vocabLayout: 'spotlight',
    title: 'Personal pronouns',
    titleDe: 'Personalpronomen',
    emoji: '👤',
    objective: 'Use the eight personal pronouns confidently — and decode the THREE different "sie" / "Sie" forms.',
    intro: 'German has more pronouns than English: TWO ways to say "you" (informal du / formal Sie), and the same word "sie" means three different things (she / they / formal you) — the verb form tells them apart. Master these eight today and every sentence in the rest of Week 1 falls into place.',
    vocabulary: [
      // Singular
      { de: 'ich',  en: 'I',                  emoji: '🙋', hint: '"ikh" — soft ch (front of mouth)', example: 'Ich bin müde.',        exampleEn: 'I am tired.' },
      { de: 'du',   en: 'you (1 friend)',     emoji: '👉', hint: '"doo" — informal singular',       example: 'Wie heißt du?',       exampleEn: 'What is your name?' },
      { de: 'er',   en: 'he / it (m)',        emoji: '👨', hint: '"ehr" (rhymes with "air")',       example: 'Er ist hier.',        exampleEn: 'He is here.' },
      { de: 'sie',  en: 'she / it (f)',       emoji: '👩', hint: '"zee" — short, lowercase',        example: 'Sie ist Lehrerin.',   exampleEn: 'She is a teacher.' },
      { de: 'es',   en: 'it (n)',             emoji: '📦', hint: '"ess" — short, like English',     example: 'Es ist spät.',        exampleEn: 'It is late.' },
      // Plural
      { de: 'wir',  en: 'we',                  emoji: '👥', hint: '"veer" — w → soft V, long i',     example: 'Wir lernen Deutsch.', exampleEn: 'We learn German.' },
      { de: 'ihr',  en: 'you all (group of friends)', emoji: '👨‍👩‍👧‍👦', hint: '"eer" — silent h, long e', example: 'Ihr seid hier.',      exampleEn: 'You all are here.' },
      { de: 'sie',  en: 'they  (plural — same spelling as "she")', emoji: '🧑‍🤝‍🧑', hint: '"zee" — verb form distinguishes from singular sie', example: 'Sie sind Kollegen.', exampleEn: 'They are colleagues.' },
      // Formal
      { de: 'Sie',  en: 'you (formal — singular OR plural)', emoji: '🤝', hint: '"Zee" — ALWAYS capital S, even mid-sentence', example: 'Wie heißen Sie?', exampleEn: 'What is your name? (formal)' },
    ],
    grammar: [
      { rule: 'The 6 grammatical persons',
        body:
          'Three singular + three plural — every verb conjugates across all six:\n' +
          '• 1st singular   ich       I\n' +
          '• 2nd singular   du        you (one friend)\n' +
          '• 3rd singular   er/sie/es he / she / it\n' +
          '• 1st plural     wir       we\n' +
          '• 2nd plural     ihr       you all (group of friends)\n' +
          '• 3rd plural     sie       they\n' +
          'Plus the formal "Sie" — always capital, used as a singular OR plural "you" with the same conjugation as 3rd plural.',
      },
      { rule: '⚠ The three "sies" — verb form decodes them',
        body:
          'Three different words share the spelling sie / Sie. The verb form tells you which:\n' +
          '• "Sie ist Lehrerin."          ist (singular)  →  she\n' +
          '• "Sie sind Kollegen."          sind (plural)  →  they  (or formal you — context decides)\n' +
          '• "Sie haben einen Termin."     haben (plural) →  formal you  (or they — context decides)\n' +
          'Capital "S" only ever marks the formal you; lower-case "sie" is she or they.',
      },
      { rule: 'du vs Sie — choosing the register',
        body:
          'Use du with: family, close friends, children, animals, God in prayer, between students or young colleagues, on most social media.\n' +
          'Use Sie with: strangers, customer service, doctors, professors (until invited otherwise), in formal business settings.\n' +
          'Switching from Sie to du is a small ceremony — let the older / more senior person offer it first ("Wir können uns duzen").',
      },
      { rule: 'er / sie / es match the noun\'s ARTICLE — not its meaning',
        body:
          'Replace any noun with its pronoun by looking at the article, NOT what the thing is in real life:\n' +
          '• der Laptop → er\n' +
          '• die Tasche → sie    (a bag, but feminine article → sie)\n' +
          '• das Mädchen → es    (a girl, but neuter article → es!)\n' +
          'Plural always becomes sie:  die Bücher → sie.',
      },
      { rule: 'Capitalised Sie',
        body:
          'Formal "Sie" — and its possessive "Ihr" / "Ihnen" — keep the capital wherever they appear: "Wie heißen Sie?", "Können Sie mir helfen?". Inside a sentence, capital "Sie" is your reliable cue that the speaker means formal "you".',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      // English ↔ German match
      {
        type: 'match',
        pairs: [
          { de: 'ich', en: 'I' },
          { de: 'wir', en: 'we' },
          { de: 'ihr', en: 'you all (group of friends)' },
          { de: 'Sie', en: 'you (formal)' },
          { de: 'er',  en: 'he' },
          { de: 'es',  en: 'it' },
        ],
      },
      // du vs Sie scenarios
      { type: 'multiple-choice', q: 'You meet your new manager for the first time. Use…',
        options: ['du','ihr','Sie','es'], answer: 'Sie',
        explain: 'Workplace + first meeting = formal Sie. Switch to du only if invited.' },
      { type: 'multiple-choice', q: 'You\'re talking to your six-year-old niece. Use…',
        options: ['du','ihr','Sie','es'], answer: 'du',
        explain: 'Children always get du, regardless of how well you know them.' },
      { type: 'multiple-choice', q: 'You\'re addressing a group of three friends together. Use…',
        options: ['du','ihr','Sie','sie'], answer: 'ihr',
        explain: 'ihr = "you all" for a group of friends. Sie would be the formal version (e.g. addressing a board).' },
      { type: 'multiple-choice', q: 'You ask a stranger on the street for directions. Use…',
        options: ['du','ihr','Sie','sie'], answer: 'Sie',
        explain: 'Strangers in public default to formal Sie.' },
      // Article → pronoun
      { type: 'multiple-choice', q: 'Replace "der Laptop" with a pronoun.', options: ['es','er','sie','das'], answer: 'er' },
      { type: 'multiple-choice', q: 'Replace "die Tasche" with a pronoun.', options: ['er','sie','es','das'], answer: 'sie' },
      { type: 'multiple-choice', q: 'Replace "das Mädchen" with a pronoun.', options: ['er','sie','es','sie (plural)'], answer: 'es',
        explain: 'das Mädchen has a neuter article (because of the -chen suffix), so the pronoun is es — even though a Mädchen is a girl in real life.' },
      { type: 'multiple-choice', q: 'Replace "die Bücher" (plural) with a pronoun.', options: ['er','sie','es','das'], answer: 'sie',
        explain: 'Plural always uses sie — same spelling as "she" / "they", different verb forms.' },
      // The three sies decoder
      { type: 'multiple-choice', q: 'In "Sie ist Lehrerin", what does sie mean?',
        options: ['she', 'they', 'formal you', 'it'], answer: 'she',
        explain: 'Singular verb "ist" → singular subject → she.' },
      { type: 'multiple-choice', q: 'In "Sie haben einen Termin", what does Sie mean?',
        options: ['she', 'they (plural)', 'formal you (singular or plural)', 'it'], answer: 'formal you (singular or plural)',
        explain: 'Capital S + plural verb form "haben" — most likely formal you. Could also be "they"; context decides. Either way, NOT "she".' },
      { type: 'multiple-choice', q: 'In "sie sind Kollegen", what does sie mean?',
        options: ['she', 'they (plural)', 'formal you', 'it'], answer: 'they (plural)',
        explain: 'Lower-case "sie" + plural verb "sind" → they. (Capital "Sie" with the same verb form would be formal you.)' },
      // Fill-in-blank for replacement
      { type: 'fill-blank', sentence: 'der Hund → __  (replace with a pronoun)', answer: 'er', hint: 'der → er' },
      { type: 'fill-blank', sentence: 'die Frau → __  (replace with a pronoun)', answer: 'sie' },
      { type: 'fill-blank', sentence: 'das Kind → __  (replace with a pronoun)', answer: 'es' },
      { type: 'fill-blank', sentence: 'die Studenten → __  (replace with a pronoun, plural)', answer: 'sie' },
    ],
    quiz: [
      { type: 'multiple-choice', q: 'Which pronoun is for "she"?', options: ['er','sie','es','ihr'], answer: 'sie' },
      { type: 'multiple-choice', q: 'Which pronoun is for a group of friends ("you all")?', options: ['Sie','sie','ihr','wir'], answer: 'ihr' },
      { type: 'multiple-choice', q: 'A bakery customer wants to address the salesperson. Use…',
        options: ['du','ihr','Sie','sie'], answer: 'Sie' },
      { type: 'multiple-choice', q: 'Which is the FORMAL "you", written correctly?',
        options: ['sie','Sie','ihr','Ihr'], answer: 'Sie' },
      { type: 'multiple-choice', q: '"das Buch" → which pronoun?', options: ['er','sie','es','der'], answer: 'es' },
      { type: 'fill-blank', sentence: '____ sind eine Lehrerin. (formal you)', answer: 'Sie' },
      { type: 'fill-blank', sentence: '__ ist mein Bruder. (he)', answer: 'Er' },
    ],
  },

  {
    id: 4, week: 1,
    vocabLayout: 'spotlight',
    title: 'Articles: der, die, das',
    titleDe: 'Artikel: der, die, das',
    emoji: '🪪',
    objective: 'Pick the right article for any noun, recognise the four article slots, and replace nouns with pronouns.',
    intro: 'Every German noun has a gender — masculine (der), feminine (die) or neuter (das). Plurals always use die. The gender often has nothing to do with real-life logic, so the iron rule is: ALWAYS learn the article TOGETHER with the noun. Never memorise just "Tisch" — memorise "der Tisch".',
    vocabulary: [
      // Masculine — der
      { de: 'der Tisch',   en: 'the table',   emoji: '🍽️', hint: 'masc. → der · "der Tish"',                                 example: 'Der Tisch ist groß.',       exampleEn: 'The table is big.' },
      { de: 'der Stuhl',   en: 'the chair',   emoji: '🪑', hint: 'masc. → der · "der Shtool"',                                example: 'Der Stuhl ist neu.',        exampleEn: 'The chair is new.' },
      { de: 'der Laptop',  en: 'the laptop',  emoji: '💻', hint: 'masc. → der · loan word, English-style "lap-top"',          example: 'Der Laptop ist alt.',       exampleEn: 'The laptop is old.' },
      { de: 'der Mann',    en: 'the man',     emoji: '👨', hint: 'masc. → der · "der Mann"',                                  example: 'Der Mann ist nett.',        exampleEn: 'The man is nice.' },
      { de: 'der Hund',    en: 'the dog',     emoji: '🐕', hint: 'masc. → der · "der Hoont"',                                 example: 'Der Hund ist klein.',       exampleEn: 'The dog is small.' },
      { de: 'der Tag',     en: 'the day',     emoji: '☀️', hint: 'masc. → der · most days/months are masc.',                  example: 'Der Tag ist schön.',         exampleEn: 'The day is nice.' },
      // Feminine — die
      { de: 'die Lampe',   en: 'the lamp',    emoji: '💡', hint: 'fem. → die · ends in -e, often a feminine clue',            example: 'Die Lampe ist neu.',         exampleEn: 'The lamp is new.' },
      { de: 'die Tasche',  en: 'the bag',     emoji: '👜', hint: 'fem. → die · "dee Tashuh"',                                  example: 'Die Tasche ist schwer.',     exampleEn: 'The bag is heavy.' },
      { de: 'die Frau',    en: 'the woman',   emoji: '👩', hint: 'fem. → die · "dee Frow"',                                    example: 'Die Frau ist Lehrerin.',     exampleEn: 'The woman is a teacher.' },
      { de: 'die Wohnung', en: 'the apartment', emoji: '🏠', hint: 'fem. → die · ALL -ung nouns are feminine',                  example: 'Die Wohnung ist groß.',      exampleEn: 'The apartment is big.' },
      { de: 'die Zeitung', en: 'the newspaper', emoji: '📰', hint: 'fem. → die · -ung again',                                  example: 'Die Zeitung ist neu.',       exampleEn: 'The newspaper is new.' },
      // Neuter — das
      { de: 'das Buch',    en: 'the book',    emoji: '📖', hint: 'neuter → das · "das Bukh"',                                 example: 'Das Buch ist gut.',          exampleEn: 'The book is good.' },
      { de: 'das Handy',   en: 'the mobile phone', emoji: '📱', hint: 'neuter → das · pseudo-English loan, neuter in German', example: 'Das Handy ist neu.',         exampleEn: 'The mobile is new.' },
      { de: 'das Kind',    en: 'the child',   emoji: '🧒', hint: 'neuter → das · "das Kint"',                                 example: 'Das Kind ist müde.',         exampleEn: 'The child is tired.' },
      { de: 'das Mädchen', en: 'the girl',    emoji: '👧', hint: '⚠ neuter → das · -chen ALWAYS makes a noun neuter, even though a girl is feminine in life', example: 'Das Mädchen ist nett.',  exampleEn: 'The girl is nice.' },
      { de: 'das Brötchen',en: 'the bread roll', emoji: '🥖', hint: 'neuter → das · -chen again',                              example: 'Das Brötchen ist frisch.',   exampleEn: 'The bread roll is fresh.' },
      // Plural — die
      { de: 'die Leute',   en: 'the people (pl)', emoji: '👥', hint: 'pl. → die · only exists in plural — no singular',        example: 'Die Leute sind freundlich.', exampleEn: 'The people are friendly.' },
      { de: 'die Bücher',  en: 'the books (pl)',  emoji: '📚', hint: 'pl. → die · plural of das Buch',                         example: 'Die Bücher sind alt.',       exampleEn: 'The books are old.' },
      { de: 'die Kinder',  en: 'the children (pl)', emoji: '🎒', hint: 'pl. → die · plural of das Kind',                       example: 'Die Kinder spielen.',        exampleEn: 'The children are playing.' },
      // Indefinite preview
      { de: 'ein',  en: 'a / an  (masc. + neuter)', emoji: '🅰️', hint: 'indefinite → ein · for der + das nouns',               example: 'Das ist ein Buch.',          exampleEn: 'That is a book.' },
      { de: 'eine', en: 'a / an  (fem.)',           emoji: '🅰️', hint: 'indefinite → eine · for die nouns',                   example: 'Das ist eine Tasche.',       exampleEn: 'That is a bag.' },
    ],
    grammar: [
      { rule: 'The four article slots',
        body:
          'Definite (the):    der · die · das · die\n' +
          '                  masc. fem. neut. plural\n' +
          'Indefinite (a):    ein · eine · ein · — (no plural)\n' +
          'In the dative and accusative cases the forms change — that\'s Week 4. Today, just learn the four basic slots.',
      },
      { rule: 'Iron rule — learn the article WITH the noun',
        body:
          'Memorise "der Tisch", not "Tisch". Memorise "die Tasche", not "Tasche".\n' +
          'In flashcards, write the article in the SAME COLOUR as the noun — they belong together.\n' +
          'When you guess the article wrong, fix the WHOLE pair in your mind, not just the article.',
      },
      { rule: 'Article → pronoun map',
        body:
          'Replace any noun with its pronoun by reading the article:\n' +
          '• der → er    "der Laptop ist neu." → "Er ist neu."\n' +
          '• die → sie   "die Tasche ist groß." → "Sie ist groß."\n' +
          '• das → es    "das Buch ist gut." → "Es ist gut."\n' +
          '• die (pl) → sie  "die Bücher sind neu." → "Sie sind neu."',
      },
      { rule: 'Suffix gender clues — when the ending TELLS you the article',
        body:
          'Some endings have a 100% reliable gender:\n' +
          '• -ung → die (Wohnung, Zeitung, Übung, Achtung)\n' +
          '• -chen → das (Mädchen, Brötchen, Hähnchen, Kätzchen) — diminutives are neuter\n' +
          '• -lein → das (Fräulein, Büchlein) — same diminutive rule\n' +
          '• -heit / -keit → die (Freiheit, Möglichkeit)\n' +
          '• -tion / -tät → die (Information, Universität)\n' +
          '• -er denoting a profession or doer → der (Lehrer, Bäcker, Verkäufer)\n' +
          'Spot the suffix → guess the article instantly.',
      },
      { rule: 'Trust the article, not real-life logic',
        body:
          '"das Mädchen" (the girl) is NEUTER because the -chen suffix forces it.\n' +
          '"die Person" (the person, any gender) is FEMININE.\n' +
          'When the German word\'s gender disagrees with English logic, the GERMAN gender wins for grammar.',
      },
      { rule: 'Plurals collapse to "die"',
        body:
          'der Tisch → die Tische (the tables)\n' +
          'die Tasche → die Taschen (the bags)\n' +
          'das Buch → die Bücher (the books)\n' +
          'No matter the singular gender, every plural noun uses "die" + a plural pronoun "sie".',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      // Article ↔ category match
      {
        type: 'match',
        pairs: [
          { de: 'der',      en: 'masculine' },
          { de: 'die',      en: 'feminine OR plural' },
          { de: 'das',      en: 'neuter' },
          { de: 'ein',      en: 'a / an  — masc. + neuter' },
          { de: 'eine',     en: 'a / an  — feminine' },
        ],
      },
      // Pick the article for common nouns
      { type: 'multiple-choice', q: 'Which article goes with "Tisch"?',  options: ['der','die','das'], answer: 'der' },
      { type: 'multiple-choice', q: 'Which article goes with "Tasche"?', options: ['der','die','das'], answer: 'die' },
      { type: 'multiple-choice', q: 'Which article goes with "Buch"?',   options: ['der','die','das'], answer: 'das' },
      { type: 'multiple-choice', q: 'Which article goes with "Wohnung"?',options: ['der','die','das'], answer: 'die',
        explain: 'EVERY -ung noun is feminine.' },
      { type: 'multiple-choice', q: 'Which article goes with "Mädchen"?',options: ['der','die','das'], answer: 'das',
        explain: '-chen always makes the noun neuter — even when meaning a girl.' },
      // Pronoun replacement
      { type: 'multiple-choice', q: '"die Tasche" → which pronoun?', options: ['er','sie','es'], answer: 'sie' },
      { type: 'multiple-choice', q: '"das Buch" → which pronoun?',   options: ['er','sie','es'], answer: 'es' },
      { type: 'multiple-choice', q: '"die Bücher" (plural) → which pronoun?', options: ['er','sie','es'], answer: 'sie' },
      // Indefinite article
      { type: 'multiple-choice', q: 'Pick the indefinite article: "Ich habe ___ Hund." (a dog, masc.)',
        options: ['ein','eine','das','der'], answer: 'ein' },
      { type: 'multiple-choice', q: 'Pick the indefinite article: "Ich habe ___ Tasche." (a bag, fem.)',
        options: ['ein','eine','der','das'], answer: 'eine' },
      // Suffix-clue MCQs
      { type: 'multiple-choice', q: 'Without knowing the word: "Information" — pick the article.',
        options: ['der','die','das'], answer: 'die',
        explain: '-tion is always feminine.' },
      { type: 'multiple-choice', q: 'Without knowing the word: "Brötchen" — pick the article.',
        options: ['der','die','das'], answer: 'das',
        explain: '-chen makes it neuter.' },
      { type: 'multiple-choice', q: 'Without knowing the word: "Lehrer" (teacher, male) — pick the article.',
        options: ['der','die','das'], answer: 'der',
        explain: '-er for a profession/doer is masculine.' },
      // Fill-blanks
      { type: 'fill-blank', sentence: '__ Tisch ist groß. (the table)',  answer: 'Der' },
      { type: 'fill-blank', sentence: '__ Lampe ist neu. (the lamp)',     answer: 'Die' },
      { type: 'fill-blank', sentence: '__ Handy ist hier. (the mobile)',   answer: 'Das' },
      { type: 'fill-blank', sentence: '__ Kinder spielen. (the children, pl.)', answer: 'Die' },
      { type: 'fill-blank', sentence: 'Ich habe __ Buch. (a book, neuter)', answer: 'ein' },
    ],
    quiz: [
      { type: 'multiple-choice', q: 'Pick the correct article for "Buch".', options: ['der','die','das'], answer: 'das' },
      { type: 'multiple-choice', q: '"das Handy" is referred to as…', options: ['er','sie','es'], answer: 'es' },
      { type: 'multiple-choice', q: 'Pick the article for "Übung" (exercise).', options: ['der','die','das'], answer: 'die', explain: '-ung → feminine, always.' },
      { type: 'multiple-choice', q: 'Pick the article for "Hähnchen" (small chicken).', options: ['der','die','das'], answer: 'das', explain: '-chen → neuter, always.' },
      { type: 'multiple-choice', q: 'Plural of any noun takes which article?', options: ['der','die','das','varies'], answer: 'die' },
      { type: 'fill-blank', sentence: '____ Frau ist Lehrerin. (the woman)', answer: 'Die' },
      { type: 'fill-blank', sentence: '____ Stuhl ist neu. (the chair, masc.)', answer: 'Der' },
    ],
  },

  {
    id: 5, week: 1,
    vocabLayout: 'spotlight',
    title: 'sein — to be',
    titleDe: 'Das Verb „sein"',
    emoji: '🟦',
    objective: 'Conjugate "sein" across all six persons and use it for state, profession, place and origin.',
    intro: '"sein" is the most important German verb. It is fully irregular — none of the six forms look like the infinitive — so memorise all six today. With sein you can already say where you are, how you feel, what you do for a living, and where you come from.',
    vocabulary: [
      // adjectives describing state
      { de: 'müde',      en: 'tired',     emoji: '😴', hint: '"MUE-duh" — long ü, soft d',                       example: 'Ich bin müde.',           exampleEn: 'I am tired.' },
      { de: 'hungrig',   en: 'hungry',    emoji: '🍽️', hint: '"HOON-grikh" — final -ig sounds like soft ich',     example: 'Du bist hungrig.',        exampleEn: 'You are hungry.' },
      { de: 'durstig',   en: 'thirsty',   emoji: '🥤', hint: '"DOOR-stikh"',                                      example: 'Er ist durstig.',         exampleEn: 'He is thirsty.' },
      { de: 'fertig',    en: 'finished / done', emoji: '✅', hint: '"FAIR-tikh"',                                  example: 'Wir sind fertig.',         exampleEn: 'We are finished.' },
      { de: 'glücklich', en: 'happy',     emoji: '😊', hint: '"GLUEK-likh" — ü + soft ch',                         example: 'Sie ist glücklich.',       exampleEn: 'She is happy.' },
      { de: 'krank',     en: 'sick',      emoji: '🤒', hint: '"krahnk"',                                          example: 'Der Mann ist krank.',     exampleEn: 'The man is sick.' },
      { de: 'bereit',    en: 'ready',     emoji: '👍', hint: '"buh-RYE-t" — ei = eye',                            example: 'Bist du bereit?',          exampleEn: 'Are you ready?' },
      { de: 'gut',       en: 'good',      emoji: '👌', hint: '"goot" — long u',                                   example: 'Das Buch ist gut.',        exampleEn: 'The book is good.' },
      // time markers
      { de: 'spät',      en: 'late',      emoji: '🌙', hint: '"shpeht" — ä = open eh, st-start = sht',            example: 'Es ist spät.',             exampleEn: 'It is late.' },
      { de: 'früh',      en: 'early',     emoji: '🌅', hint: '"frue" — silent h lengthens ü',                     example: 'Es ist früh.',             exampleEn: 'It is early.' },
      // place markers
      { de: 'hier',      en: 'here',      emoji: '📍', hint: '"heer" — long ee',                                  example: 'Wir sind hier.',           exampleEn: 'We are here.' },
      { de: 'da',        en: 'there',     emoji: '👉', hint: '"dah" — short',                                     example: 'Er ist da.',               exampleEn: 'He is there.' },
      // origin / profession (used in patterns below)
      { de: 'aus Indien', en: 'from India', emoji: '🇮🇳', hint: 'Ich bin aus Indien.',                              example: 'Ich bin aus Indien.',      exampleEn: 'I am from India.' },
      { de: 'aus Deutschland', en: 'from Germany', emoji: '🇩🇪', hint: 'aus = from / out of',                       example: 'Sie ist aus Deutschland.', exampleEn: 'She is from Germany.' },
      { de: 'Lehrer',    en: 'teacher (m)',   emoji: '👨‍🏫', hint: 'no article needed: "Ich bin Lehrer."',         example: 'Er ist Lehrer.',           exampleEn: 'He is a teacher.' },
      { de: 'Lehrerin',  en: 'teacher (f)',   emoji: '👩‍🏫', hint: '-in suffix → female form',                     example: 'Sie ist Lehrerin.',        exampleEn: 'She is a teacher.' },
      { de: 'Softwareentwickler', en: 'software developer', emoji: '💻', hint: 'compound — break up: Soft-ware-ent-wick-ler', example: 'Ich bin Softwareentwickler.', exampleEn: 'I am a software developer.' },
    ],
    grammar: [
      { rule: 'sein — full conjugation table',
        body:
          'sein is irregular — none of the forms look like the infinitive:\n' +
          '   ich        bin     I am\n' +
          '   du         bist    you (1 friend) are\n' +
          '   er/sie/es  ist     he / she / it is\n' +
          '   wir        sind    we are\n' +
          '   ihr        seid    you all (group of friends) are\n' +
          '   sie / Sie  sind    they / formal you are',
      },
      { rule: 'Three patterns you can already build',
        body:
          'STATE / FEELING:    Subject + sein + adjective\n' +
          '  "Ich bin müde."  /  "Du bist krank."  /  "Wir sind bereit."\n' +
          'PROFESSION:         Subject + sein + Beruf  (no article!)\n' +
          '  "Ich bin Lehrer."  /  "Sie ist Softwareentwicklerin."\n' +
          'PLACE / ORIGIN:     Subject + sein + place\n' +
          '  "Ich bin hier."  /  "Wir sind in Berlin."  /  "Ich bin aus Indien."',
      },
      { rule: 'Verb in slot 2',
        body:
          'In a main sentence, the conjugated verb ALWAYS sits in position 2.\n' +
          '  "Ich bin müde."     subject (slot 1) + verb (slot 2) + rest.\n' +
          '  "Heute bin ich müde."   time (slot 1) + verb (slot 2) + subject moves to slot 3.',
      },
      { rule: 'sein vs haben for body states',
        body:
          'English uses "to be" for hunger / thirst / fear: "I AM hungry."\n' +
          'German uses "haben" instead: "Ich HABE Hunger." (literally "I have hunger" — Day 6).\n' +
          'But for tired / sick / happy / ready, German keeps sein: "Ich BIN müde / krank / glücklich / bereit".',
      },
    ],
    exercises: [
      richConjEx('sein', 'to be'),
      // Forms ↔ pronouns match — locks the table by matching, not just filling
      {
        type: 'match',
        pairs: [
          { de: 'bin',  en: 'ich' },
          { de: 'bist', en: 'du' },
          { de: 'ist',  en: 'er / sie / es' },
          { de: 'sind', en: 'wir / sie / Sie' },
          { de: 'seid', en: 'ihr' },
        ],
      },
      // State / feeling pattern
      { type: 'fill-blank', sentence: 'Ich __ müde.',                                  answer: 'bin' },
      { type: 'fill-blank', sentence: 'Du __ krank.',                                  answer: 'bist' },
      { type: 'fill-blank', sentence: 'Wir __ bereit.',                                answer: 'sind' },
      // Profession pattern
      { type: 'fill-blank', sentence: 'Ich __ Softwareentwickler. (no article!)',      answer: 'bin' },
      { type: 'fill-blank', sentence: 'Sie (she) __ Lehrerin.',                        answer: 'ist' },
      { type: 'fill-blank', sentence: 'Du __ Softwareentwickler.',                     answer: 'bist' },
      // Place / origin pattern
      { type: 'fill-blank', sentence: 'Ich __ aus Indien.',                            answer: 'bin' },
      { type: 'fill-blank', sentence: 'Wir __ in Berlin.',                             answer: 'sind' },
      { type: 'fill-blank', sentence: 'Er __ hier.',                                   answer: 'ist' },
      { type: 'fill-blank', sentence: 'Ihr __ in einer Stadt.',                        answer: 'seid' },
      // Disambiguation
      { type: 'fill-blank', sentence: 'Sie __ in einer Firma.',                        answer: 'ist',  hint: 'sie + ist → she (singular)' },
      { type: 'fill-blank', sentence: 'Sie __ Kollegen.',                              answer: 'sind', hint: 'Kollegen is plural → sie = they' },
      { type: 'fill-blank', sentence: 'Es __ ein Moment.',                             answer: 'ist' },
      { type: 'fill-blank', sentence: 'Es __ deutsch.',                                answer: 'ist' },
      // Word-order awareness
      { type: 'multiple-choice',
        q: 'Pick the correct word order:',
        options: [
          'Heute ich bin müde.',
          'Heute bin ich müde.',
          'Ich heute bin müde.',
          'Bin ich heute müde.',
        ],
        answer: 'Heute bin ich müde.',
        explain: 'When time leads, the verb still keeps slot 2 — so the subject moves AFTER the verb.',
      },
      { type: 'multiple-choice', q: 'Pick the correct form: "Ihr __ spät."', options: ['bin','bist','seid','sind'], answer: 'seid' },
      { type: 'multiple-choice', q: 'Polite "Are you ready?" (formal you).',
        options: ['Bist du bereit?','Seid ihr bereit?','Sind Sie bereit?','Ist sie bereit?'],
        answer: 'Sind Sie bereit?',
        explain: 'Formal Sie always uses the plural form "sind" + capital S.' },
      // Mini dialogue
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Hallo! Ich bin Tom.',                          en: 'Hello! I am Tom.' },
        { speaker: 'B', de: 'Hallo Tom! Ich bin Anna.',                     en: 'Hi Tom! I am Anna.' },
        { speaker: 'A', de: 'Woher bist du?',                                en: 'Where are you from?' },
        { speaker: 'B', de: 'Ich bin aus Deutschland. Und du?',              en: 'I am from Germany. And you?' },
        { speaker: 'A', de: 'Ich bin aus Indien. Bist du Lehrerin?',         en: 'I am from India. Are you a teacher?' },
        { speaker: 'B', de: 'Nein, ich bin Softwareentwicklerin.',           en: 'No, I am a software developer.' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Du __ müde.', answer: 'bist' },
      { type: 'fill-blank', sentence: 'Wir __ Kollegen.', answer: 'sind' },
      { type: 'fill-blank', sentence: 'Ihr __ glücklich.', answer: 'seid' },
      { type: 'fill-blank', sentence: 'Heute __ ich krank. (slot 2!)', answer: 'bin' },
      { type: 'multiple-choice', q: 'Which is correct?', options: ['Ich ist hier.','Ich bin hier.','Ich sind hier.','Ich seid hier.'], answer: 'Ich bin hier.' },
      { type: 'multiple-choice', q: 'Which is correct for "She is from Germany"?',
        options: ['Sie bin aus Deutschland.','Sie ist aus Deutschland.','Sie sind aus Deutschland.','Sie ist von Deutschland.'],
        answer: 'Sie ist aus Deutschland.',
        explain: 'singular sie → ist · "from a country" = "aus" + country.' },
    ],
  },

  {
    id: 6, week: 1,
    vocabLayout: 'spotlight',
    title: 'haben — to have',
    titleDe: 'Das Verb „haben"',
    emoji: '🟩',
    objective: 'Conjugate "haben" and use it for possession, abstract things, and the body-state expressions where English would say "I AM …".',
    intro: '"haben" is your second power tool. It is used for OWNERSHIP (Ich habe ein Buch), ABSTRACT things (Ich habe eine Idee, Ich habe Zeit), and — crucially — BODY STATES where English uses "to be": Ich habe Hunger / Durst / Angst (I am hungry / thirsty / afraid).',
    vocabulary: [
      // body states — the ones that surprise English speakers
      { de: 'der Hunger',  en: 'hunger',     emoji: '🍽️', hint: '⚠ "Ich habe Hunger" = "I am hungry" — never "Ich bin Hunger"!', example: 'Ich habe Hunger.',         exampleEn: 'I am hungry.' },
      { de: 'der Durst',   en: 'thirst',     emoji: '🥤', hint: '"Ich habe Durst" = "I am thirsty"',                                example: 'Hast du Durst?',          exampleEn: 'Are you thirsty?' },
      { de: 'die Angst',   en: 'fear',       emoji: '😨', hint: '"Ich habe Angst" = "I am afraid"',                                 example: 'Sie hat Angst.',           exampleEn: 'She is afraid.' },
      { de: 'die Lust',    en: 'desire / want to', emoji: '🎉', hint: '"Ich habe Lust auf …" = "I feel like (having) …"',           example: 'Wir haben Lust auf Kaffee.', exampleEn: 'We feel like (having) coffee.' },
      // abstract / time
      { de: 'die Zeit',    en: 'time',       emoji: '⏰', hint: '"Ich habe Zeit" = "I have time / I am free"',                       example: 'Habt ihr Zeit?',           exampleEn: 'Do you all have time?' },
      { de: 'die Pause',   en: 'break',      emoji: '☕', hint: '"Ich habe Pause" = "I have a break / I\'m on break"',               example: 'Wir haben Pause.',         exampleEn: 'We have a break.' },
      { de: 'die Idee',    en: 'idea',       emoji: '💡', hint: '"Ich habe eine Idee" = "I have an idea"',                          example: 'Ich habe eine Idee.',      exampleEn: 'I have an idea.' },
      { de: 'die Frage',   en: 'question',   emoji: '❓', hint: '"Ich habe eine Frage" = "I have a question"',                       example: 'Haben Sie eine Frage?',    exampleEn: 'Do you (formal) have a question?' },
      { de: 'das Problem', en: 'problem',    emoji: '⚠️', hint: '"Ich habe ein Problem" — pronounced English-style "problayme"',     example: 'Er hat ein Problem.',      exampleEn: 'He has a problem.' },
      { de: 'der Stress',  en: 'stress',     emoji: '😰', hint: '"Ich habe Stress" — start with English "sht-"',                     example: 'Ich habe Stress.',         exampleEn: 'I am stressed.' },
      // work-life
      { de: 'die Arbeit',  en: 'work',       emoji: '💼', hint: '"Ich habe viel Arbeit" — long opening A',                          example: 'Du hast viel Arbeit.',     exampleEn: 'You have a lot of work.' },
      { de: 'der Termin',  en: 'appointment',emoji: '📅', hint: '"Ich habe einen Termin um 10 Uhr"',                                example: 'Sie hat einen Termin.',    exampleEn: 'She has an appointment.' },
      // possessions
      { de: 'das Buch',    en: 'a book',     emoji: '📖', hint: 'neuter → "Ich habe ein Buch"',                                    example: 'Ich habe ein Buch.',       exampleEn: 'I have a book.' },
      { de: 'der Hund',    en: 'a dog',      emoji: '🐕', hint: 'masc. — Akk. preview: "Ich habe EINEN Hund" (Week 4)',             example: 'Sie haben einen Hund.',    exampleEn: 'They have a dog.' },
    ],
    grammar: [
      { rule: 'haben — full conjugation table',
        body:
          '   ich        habe   I have\n' +
          '   du         hast   you (1 friend) have\n' +
          '   er/sie/es  hat    he / she / it has\n' +
          '   wir        haben  we have\n' +
          '   ihr        habt   you all (group of friends) have\n' +
          '   sie / Sie  haben  they / formal you have\n' +
          'Pattern: du and er/sie/es DROP the "b" (du HAST not du habst, er HAT not er habt). Whisper "ha-st, ha-t, ha-ben" three times — it sticks.',
      },
      { rule: '⚠ haben (not sein!) for body states',
        body:
          'English says "I am hungry / thirsty / afraid". German uses haben:\n' +
          '  ✗ Ich bin Hunger.       ✓ Ich habe Hunger.        I am hungry.\n' +
          '  ✗ Ich bin Durst.        ✓ Ich habe Durst.          I am thirsty.\n' +
          '  ✗ Ich bin Angst.        ✓ Ich habe Angst.          I am afraid.\n' +
          'The German nouns Hunger / Durst / Angst are LITERAL feelings you POSSESS.\n' +
          'If you instead want to describe yourself as a TYPE, use sein + adjective: "Ich bin hungrig / durstig / ängstlich" — but this sounds less natural in conversation.',
      },
      { rule: 'Common haben patterns',
        body:
          'POSSESSION:    Ich habe + ein/einen/eine + noun.\n' +
          '  "Ich habe ein Buch."  /  "Wir haben einen Hund."\n' +
          'ABSTRACT:      Ich habe + bare noun (often no article).\n' +
          '  "Ich habe Hunger."  /  "Sie hat Stress."  /  "Wir haben Zeit."\n' +
          'QUESTION:      Hast du …?  /  Haben Sie …?\n' +
          '  "Hast du Zeit am Wochenende?"  /  "Haben Sie eine Frage?"',
      },
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
      // Forms ↔ pronouns match
      {
        type: 'match',
        pairs: [
          { de: 'habe',  en: 'ich' },
          { de: 'hast',  en: 'du' },
          { de: 'hat',   en: 'er / sie / es' },
          { de: 'haben', en: 'wir / sie / Sie' },
          { de: 'habt',  en: 'ihr' },
        ],
      },
      // Body-state pattern (the killer English-vs-German contrast)
      { type: 'fill-blank', sentence: '"I am hungry." → Ich __ Hunger.',                  answer: 'habe' },
      { type: 'fill-blank', sentence: '"He is thirsty." → Er __ Durst.',                   answer: 'hat' },
      { type: 'fill-blank', sentence: '"We are afraid." → Wir __ Angst.',                  answer: 'haben' },
      { type: 'fill-blank', sentence: '"Do you (1 friend) have time?" → __ du Zeit?',      answer: 'Hast' },
      // Possession + abstract
      { type: 'fill-blank', sentence: 'Ich __ ein Buch.',                                  answer: 'habe' },
      { type: 'fill-blank', sentence: 'Du __ eine Firma.',                                 answer: 'hast' },
      { type: 'fill-blank', sentence: 'Er __ ein Meeting.',                                answer: 'hat' },
      { type: 'fill-blank', sentence: 'Wir __ ein Meeting.',                               answer: 'haben' },
      { type: 'fill-blank', sentence: 'Ihr __ eine Firma.',                                answer: 'habt' },
      { type: 'fill-blank', sentence: 'Es __ einen Namen.',                                answer: 'hat' },
      // sie disambiguation
      { type: 'fill-blank', sentence: 'Sie __ ein Team.', answer: 'hat',  hint: 'sie + hat → "she" (singular)' },
      { type: 'fill-blank', sentence: 'Sie __ ein Team.', answer: 'haben',hint: 'sie + haben → "they" (plural)  — same sentence, different verb!' },
      { type: 'fill-blank', sentence: 'Sie __ eine Idee.', answer: 'hat', hint: 'singular subject "she"' },
      // sein vs haben — the choice is the test
      { type: 'multiple-choice',
        q: 'Pick the natural German for "I am hungry":',
        options: ['Ich bin Hunger.', 'Ich habe Hunger.', 'Ich Hunger bin.', 'Ich bin hungrig haben.'],
        answer: 'Ich habe Hunger.',
        explain: 'Body states use HABEN in German, not sein.',
      },
      { type: 'multiple-choice',
        q: 'Pick the natural German for "She is sick":',
        options: ['Sie hat krank.', 'Sie ist krank.', 'Sie hat Krankheit.', 'Sie krank.'],
        answer: 'Sie ist krank.',
        explain: 'krank is an adjective describing a state — use SEIN. Body NEEDS like Hunger/Durst use haben; ADJECTIVE descriptions use sein.',
      },
      { type: 'multiple-choice', q: '"Ihr __ Stress." — pick the form.', options: ['habe','hast','habt','haben'], answer: 'habt' },
      { type: 'multiple-choice', q: 'Polite "Do you have a question?" (formal you).',
        options: ['Hast du eine Frage?','Habt ihr eine Frage?','Haben Sie eine Frage?','Hat sie eine Frage?'],
        answer: 'Haben Sie eine Frage?' },
      // Mini dialogue
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Hast du Zeit am Wochenende?',                  en: 'Do you have time on the weekend?' },
        { speaker: 'B', de: 'Ja, ich habe Zeit. Warum?',                    en: 'Yes, I have time. Why?' },
        { speaker: 'A', de: 'Ich habe Hunger und ich habe eine Idee — ein Restaurant!', en: 'I am hungry and I have an idea — a restaurant!' },
        { speaker: 'B', de: 'Sehr gerne! Ich habe auch Durst.',              en: 'Gladly! I am also thirsty.' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Du __ einen Termin.', answer: 'hast' },
      { type: 'fill-blank', sentence: 'Wir __ keine Zeit.',  answer: 'haben' },
      { type: 'fill-blank', sentence: 'Ihr __ Hunger.',      answer: 'habt' },
      { type: 'fill-blank', sentence: 'Sie __ eine Frage. (singular — she)', answer: 'hat' },
      { type: 'multiple-choice', q: 'How do Germans say "I am thirsty"?', options: ['Ich bin Durst.','Ich habe Durst.','Ich Durst bin.','Ich durstig.'], answer: 'Ich habe Durst.' },
      { type: 'multiple-choice', q: 'Pick the right verb: "Ich __ ein Problem."', options: ['bin','ist','habe','hast'], answer: 'habe' },
      { type: 'multiple-choice', q: 'Pick the right verb: "Ich __ müde." (sein/haben)?', options: ['bin','habe','hat','sind'], answer: 'bin', explain: 'müde is an adjective → SEIN.' },
    ],
  },

  {
    id: 7, week: 1,
    vocabLayout: 'spotlight',
    title: 'werden + sentence rules',
    titleDe: '„werden" + Satzregeln',
    emoji: '🟨',
    objective: 'Conjugate "werden", talk about CHANGING STATE, and lock in the two iron word-order rules that close Week 1.',
    intro: '"werden" is the third Week-1 power verb. It means "to become" — describing CHANGE OF STATE (Es WIRD kalt = "It is getting cold"). Paired with another verb it forms the future tense (Day 45). Today closes Week 1 with werden + the two rules every German sentence obeys: VERB IN SLOT 2 and CAPITALISE EVERY NOUN.',
    vocabulary: [
      // adjectives describing change-of-state
      { de: 'müde',      en: 'tired',         emoji: '😴',  hint: '"MUE-duh" — Ich werde müde = I am getting tired',     example: 'Ich werde müde.',         exampleEn: 'I am getting tired.' },
      { de: 'ruhig',     en: 'calm',          emoji: '😌',  hint: '"ROO-ikh" — final -ig sounds like soft ich',           example: 'Du wirst ruhig.',         exampleEn: 'You are getting calm.' },
      { de: 'nervös',    en: 'nervous',       emoji: '😬',  hint: '"nair-VURS" — long ö',                                  example: 'Sie wird nervös.',         exampleEn: 'She is getting nervous.' },
      { de: 'besser',    en: 'better',        emoji: '📈',  hint: '"BESS-uh" — comparative of gut',                        example: 'Es wird besser.',          exampleEn: 'It is getting better.' },
      { de: 'langsamer', en: 'slower',        emoji: '🐢',  hint: '"LANG-zam-uh" — comparative of langsam',                example: 'Wir werden langsamer.',    exampleEn: 'We are getting slower.' },
      { de: 'schneller', en: 'faster',        emoji: '⚡',  hint: '"SHNELL-uh" — sch + final -er reduces',                 example: 'Ihr werdet schneller.',    exampleEn: 'You all are getting faster.' },
      { de: 'kalt',      en: 'cold',          emoji: '❄️',  hint: '"kahlt"',                                                example: 'Es wird kalt.',            exampleEn: 'It is getting cold.' },
      { de: 'warm',      en: 'warm',          emoji: '🌡️', hint: '"vahrm" — w → v',                                       example: 'Es wird warm.',            exampleEn: 'It is getting warm.' },
      { de: 'heiß',      en: 'hot',           emoji: '🔥',  hint: '"hyess" — ei = eye, ß = ss',                            example: 'Das Öl wird heiß.',        exampleEn: 'The oil is getting hot.' },
      { de: 'dunkel',    en: 'dark',          emoji: '🌑',  hint: '"DOON-kel"',                                            example: 'Es wird dunkel.',          exampleEn: 'It is getting dark.' },
      { de: 'hell',      en: 'bright',        emoji: '💡',  hint: '"hell"',                                                 example: 'Es wird hell.',            exampleEn: 'It is getting bright.' },
      { de: 'alt',       en: 'old',           emoji: '👴',  hint: '"ahlt"',                                                 example: 'Wir werden alt.',          exampleEn: 'We are getting old.' },
      { de: 'jung',      en: 'young',         emoji: '👶',  hint: '"yoong" — j → y · use sein here (you don\'t BECOME young)', example: 'Er ist jung.',             exampleEn: 'He is young.' },
      { de: 'reich',     en: 'rich',          emoji: '💰',  hint: '"ryekh" — ei = eye, soft ch',                           example: 'Sie werden reich.',        exampleEn: 'They are getting rich.' },
      // future-trajectory profession examples
      { de: 'Arzt',      en: 'doctor (m)',    emoji: '👨‍⚕️', hint: '"artst" — rz = rts',                                  example: 'Er wird Arzt.',            exampleEn: 'He is becoming a doctor.' },
      { de: 'Ärztin',    en: 'doctor (f)',    emoji: '👩‍⚕️', hint: '"EHRTS-tin" — -in suffix = female form',              example: 'Sie wird Ärztin.',         exampleEn: 'She is becoming a doctor.' },
    ],
    grammar: [
      { rule: 'werden — full conjugation (vowel changes in singular)',
        body:
          '   ich        werde    I become / am becoming\n' +
          '   du         wirst    you become      ⚠ vowel changes e → i\n' +
          '   er/sie/es  wird     he / she / it becomes  ⚠ also e → i\n' +
          '   wir        werden   we become       (e returns)\n' +
          '   ihr        werdet   you all become\n' +
          '   sie / Sie  werden   they / formal you become\n' +
          'Pattern: e → i ONLY in the singular du/er/sie/es. Plural goes back to e.',
      },
      { rule: 'What werden actually means at A1',
        body:
          '1. CHANGE OF STATE (today): something is becoming X — "Es wird kalt" (It IS GETTING cold).\n' +
          '2. PROFESSION you are TRAINING TOWARDS — "Ich werde Arzt" (I am becoming a doctor).\n' +
          '3. FUTURE TENSE (preview, full lesson Day 45): werden + infinitive at the end.\n' +
          '   "Ich werde morgen lernen" (I will study tomorrow).\n' +
          'For everyday spoken German, native speakers usually skip future-werden and use the present tense + a time word: "Morgen lerne ich" works fine.',
      },
      { rule: 'sein vs werden — STATE vs BECOMING',
        body:
          'sein   = describes a current state.        "Es IST kalt."     It is cold (now).\n' +
          'werden = describes change towards a state. "Es WIRD kalt."    It is getting cold.\n' +
          'Same drill for adjectives:\n' +
          '  Ich BIN müde.        I am tired.\n' +
          '  Ich WERDE müde.      I am getting tired (felt fresh five minutes ago).',
      },
      { rule: '⭐ Iron rule 1 — the conjugated verb sits in position 2',
        body:
          'In a main clause, the conjugated verb is ALWAYS the second slot — even if the time / place / object leads.\n' +
          '  "Ich werde müde."        slot 1 = ich, slot 2 = werde.\n' +
          '  "Heute werde ich müde."   slot 1 = heute, slot 2 = werde, subject moved to slot 3.\n' +
          'NEVER "Heute ich werde müde" — that puts the verb in slot 3 and is wrong.',
      },
      { rule: '⭐ Iron rule 2 — every noun starts with a capital letter',
        body:
          'EVERY noun, anywhere in the sentence, starts with a capital. The first word of a sentence also gets a capital (regardless of word class).\n' +
          '  "Ich habe Hunger."  — Hunger capitalised.\n' +
          '  "Heute werde ich Lehrer." — Lehrer capitalised.\n' +
          '  "Wir kaufen das Buch." — Buch capitalised.\n' +
          'If you skip capitalisation, your sentence still parses but reads "wrong" to every German.',
      },
      { rule: 'Week 1 recap — three aux verbs side by side',
        body:
          '              sein            haben           werden\n' +
          '   ich        bin             habe            werde\n' +
          '   du         bist            hast            wirst\n' +
          '   er/sie/es  ist             hat             wird\n' +
          '   wir        sind            haben           werden\n' +
          '   ihr        seid            habt            werdet\n' +
          '   sie/Sie    sind            haben           werden\n' +
          'sein = state + identity · haben = possession + body needs · werden = becoming + future.',
      },
    ],
    exercises: [
      richConjEx('werden', 'to become'),
      // Forms ↔ pronouns match
      {
        type: 'match',
        pairs: [
          { de: 'werde',  en: 'ich' },
          { de: 'wirst',  en: 'du' },
          { de: 'wird',   en: 'er / sie / es' },
          { de: 'werden', en: 'wir / sie / Sie' },
          { de: 'werdet', en: 'ihr' },
        ],
      },
      // Becoming-pattern fill-blanks
      { type: 'fill-blank', sentence: 'Ich __ müde.',                                answer: 'werde' },
      { type: 'fill-blank', sentence: 'Du __ Softwareentwickler. (training towards)', answer: 'wirst' },
      { type: 'fill-blank', sentence: 'Er __ Softwareentwickler.',                    answer: 'wird' },
      { type: 'fill-blank', sentence: 'Es __ ein Meeting.',                           answer: 'wird' },
      { type: 'fill-blank', sentence: 'Wir __ ein Team.',                             answer: 'werden' },
      { type: 'fill-blank', sentence: 'Ihr __ ein Team.',                             answer: 'werdet' },
      { type: 'fill-blank', sentence: 'Sie __ Kollegen.',                             answer: 'werden', hint: 'plural subject' },
      { type: 'fill-blank', sentence: 'Es __ besser.',                                answer: 'wird' },
      { type: 'fill-blank', sentence: 'Sie __ eine Kollegin.',                        answer: 'wird', hint: 'sie (singular) + wird → "she"' },
      { type: 'fill-blank', sentence: 'Es __ kalt. (it is getting)',                  answer: 'wird' },
      { type: 'fill-blank', sentence: 'Ich __ Arzt. (training towards)',              answer: 'werde' },
      // sein vs werden
      { type: 'multiple-choice',
        q: '"It IS cold (right now)." in German is…',
        options: ['Es wird kalt.', 'Es ist kalt.', 'Es hat kalt.', 'Es kalt.'],
        answer: 'Es ist kalt.',
        explain: 'Current state → sein → ist.' },
      { type: 'multiple-choice',
        q: '"It is GETTING cold." in German is…',
        options: ['Es wird kalt.', 'Es ist kalt.', 'Es hat kalt.', 'Es kalt wird.'],
        answer: 'Es wird kalt.',
        explain: 'Change of state → werden → wird.' },
      // Mixed three-aux disambiguation (slide 41)
      { type: 'fill-blank', sentence: 'Three aux: "Ich __ Softwareentwickler." (right now)',     answer: 'bin' },
      { type: 'fill-blank', sentence: 'Three aux: "Du __ einen Moment." (possession)',           answer: 'hast' },
      { type: 'fill-blank', sentence: 'Three aux: "Sie __ ein Team." (development → future)',    answer: 'werden' },
      { type: 'fill-blank', sentence: 'Three aux: "Wir __ Kollegen." (development → future)',    answer: 'werden' },
      // Capitalisation drill
      { type: 'multiple-choice',
        q: 'Which sentence is correctly capitalised?',
        options: ['ich habe hunger.','Ich Habe Hunger.','Ich habe Hunger.','Ich habe hunger'],
        answer: 'Ich habe Hunger.',
        explain: 'Capitalise the first word AND every noun — Hunger.' },
      { type: 'multiple-choice',
        q: 'Spot the sentence that MIS-capitalises a noun.',
        options: [
          'Wir kaufen das Buch.',
          'Heute werde ich Lehrer.',
          'Sie hat eine idee.',
          'Es ist kalt.',
        ],
        answer: 'Sie hat eine idee.',
        explain: '"Idee" is a noun — it MUST be capitalised, even mid-sentence.',
      },
      // Verb-second drill
      { type: 'multiple-choice',
        q: 'Pick the correct word order:',
        options: [
          'Heute ich werde müde.',
          'Heute werde ich müde.',
          'Ich heute werde müde.',
          'Werde heute ich müde.',
        ],
        answer: 'Heute werde ich müde.',
        explain: 'When time leads, the verb still keeps slot 2 — subject moves to slot 3.',
      },
      // Mini dialogue — change-of-state in real conversation
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Es wird kalt heute.',                   en: 'It is getting cold today.' },
        { speaker: 'B', de: 'Ja, und ich werde müde.',                en: 'Yes, and I am getting tired.' },
        { speaker: 'A', de: 'Wir werden schneller nach Hause gehen.', en: 'We will go home faster.' },
        { speaker: 'B', de: 'Gute Idee. Morgen wird es besser.',       en: 'Good idea. Tomorrow it will get better.' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Wir __ ruhig.', answer: 'werden' },
      { type: 'fill-blank', sentence: 'Du __ schneller. (you are getting)', answer: 'wirst' },
      { type: 'fill-blank', sentence: 'Heute __ es kalt. (slot 2 — it is getting)', answer: 'wird' },
      { type: 'multiple-choice', q: 'Which word MUST be capitalised in "ich kaufe ein buch"?',
        options: ['ich','kaufe','ein','buch'], answer: 'buch' },
      { type: 'multiple-choice', q: 'Which sentence is wrong?',
        options: [
          'Ich werde Arzt.',
          'Heute werde ich müde.',
          'Es wird kalt.',
          'Heute ich werde müde.',
        ],
        answer: 'Heute ich werde müde.',
        explain: 'Verb must be in slot 2 — the subject moves AFTER the verb when time leads.',
      },
      { type: 'multiple-choice', q: 'Pick the right verb: "Es __ kalt." (it is — current state)',
        options: ['ist','wird','hat','sein'], answer: 'ist' },
      { type: 'multiple-choice', q: 'Pick the right verb: "Es __ kalt." (it is GETTING — change)',
        options: ['ist','wird','hat','wirst'], answer: 'wird' },
    ],
  },

  /* ===================== WEEK 2: building sentences ===================== */
  {
    id: 8, week: 2,
    vocabLayout: 'spotlight',
    title: 'Numbers 30–100',
    titleDe: 'Zahlen 30–100',
    emoji: '💯',
    objective: 'Read and write any number 30-100 and use them for age, year, and price.',
    intro: 'Most tens just add -zig to the unit (vier → vierzig, sechs → sechzig). Watch out for THREE oddities: 30 is dreißig (with ß, no -z-), 60 drops the -s- of sechs, 70 drops the -en- of sieben. The unit-flip rule from 21-29 keeps working all the way to 99: 67 = sieben-und-sechzig.',
    vocabulary: [
      // The tens
      { de: 'dreißig',   en: '30',   emoji: '🎂', hint: '⚠ ß instead of -zig: "DRY-sikh" — note the ß, NOT a -z- ending', example: 'Sie ist dreißig Jahre alt.',       exampleEn: 'She is thirty years old.' },
      { de: 'vierzig',   en: '40',   emoji: '👔', hint: '"FEER-tsikh"',                                                  example: 'Mein Vater ist vierzig.',          exampleEn: 'My father is forty.' },
      { de: 'fünfzig',   en: '50',   emoji: '🎓', hint: '"FUENF-tsikh" — long ü',                                          example: 'Die Klasse hat fünfzig Studenten.', exampleEn: 'The class has fifty students.' },
      { de: 'sechzig',   en: '60',   emoji: '⏱️', hint: '⚠ drops -s- of sechs: "ZEKH-tsikh"',                              example: 'Eine Stunde hat sechzig Minuten.',  exampleEn: 'An hour has sixty minutes.' },
      { de: 'siebzig',   en: '70',   emoji: '👴', hint: '⚠ drops -en- of sieben: "ZEEP-tsikh"',                            example: 'Mein Opa ist siebzig.',             exampleEn: 'My grandpa is seventy.' },
      { de: 'achtzig',   en: '80',   emoji: '👵', hint: '"AKH-tsikh"',                                                    example: 'Meine Oma ist achtzig.',            exampleEn: 'My grandma is eighty.' },
      { de: 'neunzig',   en: '90',   emoji: '🎉', hint: '"NOYN-tsikh"',                                                   example: 'Mein Onkel wird neunzig.',          exampleEn: 'My uncle is turning ninety.' },
      { de: 'hundert',   en: '100',  emoji: '💯', hint: '"HOON-dert" — short u',                                          example: 'Das Buch hat hundert Seiten.',      exampleEn: 'The book has a hundred pages.' },
      { de: 'einhundert',en: '100 (longer form)', emoji: '📞', hint: 'one-hundred — used to disambiguate over the phone', example: 'Einhundert Euro, bitte.',            exampleEn: 'One hundred euros, please.' },
      // Flip examples
      { de: 'einunddreißig',  en: '31', emoji: '🎂', hint: 'unit + und + tens, all one word',                              example: 'Mein Freund ist einunddreißig.',     exampleEn: 'My friend is thirty-one.' },
      { de: 'zweiundvierzig', en: '42', emoji: '📖', hint: 'two-and-forty',                                                 example: 'Das Buch hat zweiundvierzig Seiten.', exampleEn: 'The book has forty-two pages.' },
      { de: 'fünfundfünfzig', en: '55', emoji: '💶', hint: 'five-and-fifty',                                                example: 'Das kostet fünfundfünfzig Euro.',    exampleEn: 'That costs fifty-five euros.' },
      { de: 'sechsundsechzig',en: '66', emoji: '🏖️', hint: '⚠ FULL sechs in the unit slot, drops -s- in the tens slot',     example: 'Mein Großvater ist sechsundsechzig.', exampleEn: 'My grandfather is sixty-six.' },
      { de: 'siebenundsiebzig', en: '77', emoji: '🎂', hint: '⚠ FULL sieben in the unit slot, drops -en- in the tens slot', example: 'Meine Tante ist siebenundsiebzig.',  exampleEn: 'My aunt is seventy-seven.' },
      { de: 'achtundachtzig', en: '88', emoji: '🎂', hint: 'eight-and-eighty',                                              example: 'Mein Onkel ist achtundachtzig.',     exampleEn: 'My uncle is eighty-eight.' },
      { de: 'neunundneunzig', en: '99', emoji: '🎈', hint: 'nine-and-ninety',                                               example: 'Neunundneunzig Luftballons!',         exampleEn: 'Ninety-nine balloons! (famous Nena song)' },
      // Real-world support words
      { de: 'das Jahr',     en: 'the year',         emoji: '📅', hint: '"yar" — used after the number: "Ich bin 35 Jahre alt"', example: 'Ein Jahr hat zwölf Monate.',     exampleEn: 'A year has twelve months.' },
      { de: 'das Alter',    en: 'the age',          emoji: '👶', hint: '"AHL-tuh"',                                            example: 'Was ist dein Alter?',             exampleEn: 'What is your age?' },
      { de: 'die Nummer',   en: 'the number',       emoji: '🔢', hint: '"NOO-muh" — the cardinal/identifier sense',           example: 'Die Nummer ist sechsundsechzig.', exampleEn: 'The number is sixty-six.' },
      { de: 'das Prozent',  en: 'percent',          emoji: '📊', hint: '"pro-TSENT"',                                          example: 'Das sind fünfzig Prozent.',        exampleEn: 'That is fifty percent.' },
    ],
    grammar: [
      { rule: 'Three spelling oddities you must memorise',
        body:
          '• 30 → dreißig.   ß instead of -zig, NOT "dreizig".\n' +
          '• 60 → sechzig.   sechs LOSES its -s- before -zig.\n' +
          '• 70 → siebzig.   sieben LOSES its -en- before -zig.\n' +
          'BUT in the flip-numbers, the UNIT side keeps the full word: 66 = sechs-und-sechzig (full sechs, dropped -s- sechzig). 77 = sieben-und-siebzig (full sieben, dropped -en- siebzig).',
      },
      { rule: 'The flip rule keeps working — read units before tens',
        body:
          'Like 21-29, every two-digit number 21-99 puts the UNIT first, then "und", then the tens — written as ONE WORD:\n' +
          '  31 = ein-und-dreißig   (no -s of eins)\n' +
          '  42 = zwei-und-vierzig\n' +
          '  67 = sieben-und-sechzig\n' +
          '  99 = neun-und-neunzig\n' +
          'It feels backwards because English reads tens first ("sixty-seven"); German reads units first ("seven-and-sixty"). Your brain re-wires after about 50 reps.',
      },
      { rule: '-ig endings sound like soft ich',
        body:
          'Final -ig is pronounced like the soft ch in "ich" — "ikh" — in standard / northern German:\n' +
          '  zwanzig → "TSVAN-tsikh"\n' +
          '  fünfzig → "FUENF-tsikh"\n' +
          '  hungrig → "HOON-grikh"\n' +
          'In southern Germany, Austria and Switzerland it is often pronounced as a hard "g": "TSVAN-tsig". Both are accepted; northern is the standard taught at A1.',
      },
      { rule: 'hundert: with or without "ein"',
        body:
          '100 = hundert  /  einhundert  — both correct.\n' +
          '"Einhundert" is the safer form on the phone or when you must avoid being misheard.\n' +
          'Bigger 3-digit numbers ALWAYS need "hundert" before, then the flipped 2-digit suffix:\n' +
          '  125 = ein-hundert-fünf-und-zwanzig.\n' +
          '  365 = drei-hundert-fünf-und-sechzig.\n' +
          'These bigger numbers come back on Day 18 (Numbers 100-1000).',
      },
      { rule: 'Where you\'ll use these every day',
        body:
          '• Age: "Ich bin 35 Jahre alt." → "Ich bin fünfunddreißig Jahre alt."\n' +
          '• Year: "Ich bin 1991 geboren" — read in pairs (no flip): "neunzehn-hundert-ein-und-neunzig" (years up to 1999 use the special "hundred" reading).\n' +
          '• Price: "60 Euro" → "sechzig Euro"  (full pricing pattern arrives on Day 19).\n' +
          '• Phone numbers: speak each digit OR each pair separately. "0151" → "null-eins-fünf-eins".',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      // Spelling traps
      { type: 'multiple-choice', q: 'How is 30 written?',
        options: ['dreizig','dreißig','dreissig','dreizen'], answer: 'dreißig',
        explain: 'Special form — ß instead of -zig.' },
      { type: 'multiple-choice', q: 'How is 60 written?',
        options: ['sechszig','sechzig','sextig','sechsig'], answer: 'sechzig',
        explain: 'sechs LOSES its -s- before -zig in the tens form.' },
      { type: 'multiple-choice', q: 'How is 70 written?',
        options: ['siebenzig','siebnzig','siebzig','sieptzig'], answer: 'siebzig',
        explain: 'sieben LOSES its -en- before -zig in the tens form.' },
      // Flip-vs-no-flip
      { type: 'multiple-choice', q: 'Pick 76.',
        options: ['siebenundsechzig','sechsundsiebzig','siebzigsechs','siebzigundsechs'], answer: 'sechsundsiebzig',
        explain: '76 = six-and-seventy. Unit (sechs) first, then und, then siebzig.' },
      { type: 'multiple-choice', q: 'Pick 67.',
        options: ['siebenundsechzig','sechsundsiebzig','sechzigundsieben','siebzigsechs'], answer: 'siebenundsechzig',
        explain: '67 = seven-and-sixty. Unit (sieben — FULL) first, then und, then sechzig (drops -s-).' },
      // 66 + 77 — the "keep full unit, drop in tens" pair
      { type: 'fill-blank', sentence: '66 = __',  answer: 'sechsundsechzig',
        hint: 'unit slot keeps full sechs · tens slot drops -s-' },
      { type: 'fill-blank', sentence: '77 = __',  answer: 'siebenundsiebzig',
        hint: 'unit slot keeps full sieben · tens slot drops -en-' },
      // Real-world fill-blanks
      { type: 'fill-blank', sentence: 'Ich bin __ Jahre alt. (35)',                  answer: 'fünfunddreißig' },
      { type: 'fill-blank', sentence: 'Mein Vater ist __ Jahre alt. (60)',            answer: 'sechzig' },
      { type: 'fill-blank', sentence: 'Die Klasse hat __ Studenten. (44)',           answer: 'vierundvierzig' },
      { type: 'fill-blank', sentence: 'Das Auto kostet __ Euro. (95)',                answer: 'fünfundneunzig' },
      { type: 'fill-blank', sentence: '99 = neunund__',                                 answer: 'neunzig' },
      { type: 'fill-blank', sentence: '100 = __',                                       answer: 'hundert' },
      // Match
      { type: 'match', pairs: [
        { de: 'dreißig',         en: '30' },
        { de: 'fünfzig',         en: '50' },
        { de: 'achtzig',         en: '80' },
        { de: 'einundvierzig',   en: '41' },
        { de: 'sechsundsechzig', en: '66' },
        { de: 'hundert',         en: '100' },
      ]},
    ],
    quiz: [
      { type: 'multiple-choice', q: 'Which spelling is correct for 30?',
        options: ['dreizig','dreißig','dreissig','dreizen'], answer: 'dreißig' },
      { type: 'multiple-choice', q: 'Which spelling is correct for 60?',
        options: ['sechszig','sechzig','sextzig','sechsig'], answer: 'sechzig' },
      { type: 'multiple-choice', q: 'Which spelling is correct for 70?',
        options: ['siebzig','siebenzig','sieptzig','siebnzig'], answer: 'siebzig' },
      { type: 'multiple-choice', q: '88 = ?',
        options: ['achtundachtzig','achtzigundacht','achtzigacht','achtundzig'], answer: 'achtundachtzig' },
      { type: 'fill-blank', sentence: '99 = neunund__', answer: 'neunzig' },
      { type: 'fill-blank', sentence: '53 = __', answer: 'dreiundfünfzig' },
      { type: 'fill-blank', sentence: '"My grandma is 80 years old." → Meine Oma ist __ Jahre alt.',
        answer: 'achtzig' },
    ],
  },

  {
    id: 9, week: 2,
    vocabLayout: 'spotlight',
    title: 'Subject · Verb · Object',
    titleDe: 'Subjekt · Verb · Objekt',
    emoji: '🧩',
    objective: 'Spot the three sentence roles, apply the Wer/Wen test, and keep the verb glued in slot 2 — even when the sentence starts with time or place.',
    intro: 'A German sentence has three jobs to fill: 🟦 SUBJECT (the doer), 🟧 VERB (the action), 🟩 OBJECT (the receiver). The simplest order is S-V-O — same as English. But German has ONE iron rule that English doesn\'t: the conjugated verb ALWAYS sits in position 2. If you start with anything else (time, place, emphasis), the subject moves to position 3. Once you see this, every sentence in the rest of the course makes sense.',
    vocabulary: [
      // Role labels (so the lesson talks about them)
      { de: 'das Subjekt', en: 'the subject (the doer)',     emoji: '🟦', hint: '🟦 Wer / Was? (Who / What is doing it?)',     example: 'Das Subjekt ist „ich".',           exampleEn: 'The subject is "I".' },
      { de: 'das Verb',    en: 'the verb (the action)',      emoji: '🟧', hint: '🟧 ALWAYS slot 2 in a main sentence',          example: 'Das Verb ist „schreiben".',         exampleEn: 'The verb is "to write".' },
      { de: 'das Objekt',  en: 'the object (the receiver)',  emoji: '🟩', hint: '🟩 Wen / Was? (Whom / What is being verbed?)', example: 'Das Objekt ist „das Buch".',        exampleEn: 'The object is "the book".' },
      // People (common subjects)
      { de: 'der Lehrer',  en: 'the teacher',     emoji: '👨‍🏫', hint: 'masc. — common subject',                              example: 'Der Lehrer erklärt das Wort.',     exampleEn: 'The teacher explains the word.' },
      { de: 'der Student', en: 'the student',     emoji: '🧑‍🎓', hint: 'masc. — common subject',                              example: 'Der Student schreibt den Satz.',   exampleEn: 'The student writes the sentence.' },
      { de: 'die Lehrerin',en: 'the teacher (f)', emoji: '👩‍🏫', hint: 'fem. — -in suffix → female form',                     example: 'Die Lehrerin liest ein Buch.',     exampleEn: 'The teacher reads a book.' },
      // Things (common objects)
      { de: 'das Wort',    en: 'the word',     emoji: '💬', hint: 'neuter — das Wort',                                       example: 'Ich lerne das Wort.',              exampleEn: 'I learn the word.' },
      { de: 'der Satz',    en: 'the sentence', emoji: '📝', hint: 'masc. — der Satz',                                        example: 'Ich schreibe den Satz.',           exampleEn: 'I write the sentence.' },
      { de: 'die Frage',   en: 'the question', emoji: '❓', hint: 'fem. — die Frage',                                         example: 'Ich habe eine Frage.',             exampleEn: 'I have a question.' },
      { de: 'das Buch',    en: 'the book',     emoji: '📖', hint: 'common object — das Buch',                                example: 'Ich lese ein Buch.',               exampleEn: 'I read a book.' },
      { de: 'der Kaffee',  en: 'the coffee',   emoji: '☕', hint: 'common object — der Kaffee',                              example: 'Ich trinke den Kaffee.',           exampleEn: 'I drink the coffee.' },
      // Action verbs (S-V-O machinery)
      { de: 'schreiben',   en: 'to write',     emoji: '✍️', hint: 'takes an object: schreibt + den Satz',                    example: 'Du schreibst eine E-Mail.',        exampleEn: 'You write an email.' },
      { de: 'lesen',       en: 'to read',      emoji: '📚', hint: 'takes an object: liest + ein Buch',                       example: 'Sie liest ein Buch.',              exampleEn: 'She reads a book.' },
      { de: 'erklären',    en: 'to explain',   emoji: '🗣️', hint: 'takes an object: erklärt + das Wort',                     example: 'Sie erklärt das Wort.',            exampleEn: 'She explains the word.' },
      { de: 'kaufen',      en: 'to buy',       emoji: '🛒', hint: 'takes an object: kauft + den Kaffee',                     example: 'Wir kaufen einen Kaffee.',         exampleEn: 'We buy a coffee.' },
      { de: 'fragen',      en: 'to ask',       emoji: '🙋', hint: 'takes an object: fragt + den Lehrer',                     example: 'Ich frage den Lehrer.',            exampleEn: 'I ask the teacher.' },
    ],
    grammar: [
      { rule: 'The three sentence roles',
        body:
          '🟦 SUBJECT — who or what does the action.\n' +
          '🟧 VERB    — the action itself, conjugated to match the subject.\n' +
          '🟩 OBJECT  — who or what receives the action.\n' +
          'Worked example:\n' +
          '   Der Student        schreibt        den Satz.\n' +
          '   🟦 SUBJECT            🟧 VERB            🟩 OBJECT\n' +
          '   "The student writes the sentence."',
      },
      { rule: '⭐ The two-question test — find S and O in 5 seconds',
        body:
          'Step 1: find the verb (the action).\n' +
          'Step 2: ask "Wer / Was [verb]?" (Who / What is doing it?) — that\'s the SUBJECT.\n' +
          'Step 3: ask "Wen / Was [verb] der Subjekt?" (Whom / What does the subject verb?) — that\'s the OBJECT.\n' +
          '\n' +
          'Worked example: "Der Lehrer erklärt das Wort."\n' +
          '   verb = erklärt.\n' +
          '   Wer erklärt? → der Lehrer.   🟦 subject\n' +
          '   Was erklärt der Lehrer? → das Wort.   🟩 object',
      },
      { rule: '⭐ The verb is GLUED to slot 2',
        body:
          'No matter what you put first, the conjugated verb stays in position 2.\n' +
          '   Position 1     Position 2 (verb)   Position 3+\n' +
          '   Ich            lerne                Deutsch.\n' +
          '   Heute          lerne                ich Deutsch.   ← time leads, subject moves to 3\n' +
          '   In Berlin      lernt                er Deutsch.    ← place leads, subject moves to 3\n' +
          '   Deutsch        lerne                ich heute.     ← object leads, subject still after verb\n' +
          'This "verb-second" rule (V2) is the single most important word-order law in German.',
      },
      { rule: 'Not every sentence has an object',
        body:
          'Some sentences have no object — just subject and verb (with maybe an adjective or a time/place):\n' +
          '   Ich bin müde.        🟦 ich · 🟧 bin · adjective.\n' +
          '   Wir arbeiten heute.  🟦 wir · 🟧 arbeiten · time.\n' +
          'These verbs don\'t need a receiver. The Wer/Was test still finds the subject; there\'s simply no Wen/Was answer.',
      },
      { rule: '🚦 Common pitfalls',
        body:
          '✗ Heute ich lerne Deutsch.   ← verb in slot 3, broken.\n' +
          '✓ Heute lerne ich Deutsch.   ← verb in slot 2, subject in slot 3.\n' +
          '✗ Ich lerne heute Deutsch und ich arbeite heute.   ← double "heute", awkward.\n' +
          '✓ Ich lerne heute Deutsch und arbeite viel.\n' +
          'When two clauses share a subject, you can drop the second "ich".',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ INTERACTIVE — match each word in a sentence to its S / V / O role
      {
        type: 'match',
        pairs: [
          { de: 'Der Lehrer',  en: '🟦 subject (S)' },
          { de: 'erklärt',     en: '🟧 verb (V)' },
          { de: 'das Wort',    en: '🟩 object (O)' },
        ],
      },
      {
        type: 'match',
        pairs: [
          { de: 'Der Student', en: '🟦 subject (does the action)' },
          { de: 'schreibt',    en: '🟧 verb (the action)' },
          { de: 'den Satz',    en: '🟩 object (receives the action)' },
          { de: 'heute',       en: 'time — flexible position' },
        ],
      },
      // Wer/Was vs Wen/Was test
      {
        type: 'match',
        pairs: [
          { de: 'Wer / Was …?',  en: 'finds the SUBJECT' },
          { de: 'Wen / Was …?',  en: 'finds the OBJECT' },
        ],
      },

      // S/V/O identification — but cleaner format with sentence shown once
      { type: 'multiple-choice', q: '"Der Lehrer erklärt das Wort." — what is the 🟦 SUBJECT?',
        options: ['Der Lehrer','erklärt','das Wort','Wort'], answer: 'Der Lehrer' },
      { type: 'multiple-choice', q: '"Der Lehrer erklärt das Wort." — what is the 🟧 VERB?',
        options: ['Der Lehrer','erklärt','das Wort','das'], answer: 'erklärt' },
      { type: 'multiple-choice', q: '"Der Lehrer erklärt das Wort." — what is the 🟩 OBJECT?',
        options: ['Der Lehrer','erklärt','das Wort','das'], answer: 'das Wort' },

      // V2 inversion practice
      { type: 'multiple-choice',
        q: 'Which sentence is correct?',
        options: [
          'Heute ich lerne Deutsch.',
          'Heute lerne ich Deutsch.',
          'Heute Deutsch ich lerne.',
          'Ich heute Deutsch lerne.',
        ],
        answer: 'Heute lerne ich Deutsch.',
        explain: 'When time leads, the verb still keeps slot 2 — subject moves to slot 3.',
      },
      { type: 'multiple-choice',
        q: 'Which sentence is correct?',
        options: [
          'In Berlin er arbeitet als Lehrer.',
          'In Berlin arbeitet er als Lehrer.',
          'Er in Berlin arbeitet als Lehrer.',
          'Arbeitet er in Berlin als Lehrer.',
        ],
        answer: 'In Berlin arbeitet er als Lehrer.',
        explain: 'Place in slot 1 → verb in slot 2 → subject in slot 3.',
      },

      // 🛠 Build the sentence from given subject + verb + object
      { type: 'fill-blank',
        sentence: '🛠 Build the sentence: subject = "Der Student", verb = schreiben, object = "den Satz" → __',
        answer: 'Der Student schreibt den Satz',
        hint: 'S + V (slot 2!) + O' },
      { type: 'fill-blank',
        sentence: '🛠 Build the sentence: subject = "Wir", verb = haben, object = "eine Idee" → __',
        answer: 'Wir haben eine Idee' },
      { type: 'fill-blank',
        sentence: '🛠 Same words, but TIME leads: "Heute" + Wir + haben + Hunger → __',
        answer: 'Heute haben wir Hunger',
        hint: 'time slot 1 · verb slot 2 · subject slot 3' },
      { type: 'fill-blank',
        sentence: '🛠 PLACE leads: "Im Team" + wir + haben + Aufgaben → __',
        answer: 'Im Team haben wir Aufgaben' },

      // Verb-fill (verb in slot 2)
      { type: 'fill-blank', sentence: 'Der Student __ den Satz. (schreiben)',           answer: 'schreibt' },
      { type: 'fill-blank', sentence: 'Wir __ ein Buch. (lesen)',                       answer: 'lesen' },
      { type: 'fill-blank', sentence: 'Der Lehrer __ eine Frage. (haben)',              answer: 'hat' },
      { type: 'fill-blank', sentence: 'Heute __ ich Deutsch. (lernen — V2 inversion)',  answer: 'lerne' },

      // Mini dialogue showing S, V, O in real conversation
      { type: 'dialogue', lines: [
        { speaker: 'Lehrer',  de: 'Der Student schreibt den Satz.',                       en: 'The student writes the sentence.' },
        { speaker: 'Student', de: 'Was schreibt der Student?',                              en: 'What does the student write?' },
        { speaker: 'Lehrer',  de: 'Den Satz! Der Satz ist das Objekt.',                    en: 'The sentence! "Den Satz" is the object.' },
        { speaker: 'Student', de: 'Und wer schreibt?',                                       en: 'And who writes?' },
        { speaker: 'Lehrer',  de: 'Der Student. Der Student ist das Subjekt.',              en: 'The student. "Der Student" is the subject.' },
      ]},

      // Real-content S/V/O — short sweep of mixed examples
      { type: 'multiple-choice', q: '"Heute habe ich Hunger." — subject?',     options: ['Heute','habe','ich','Hunger'], answer: 'ich' },
      { type: 'multiple-choice', q: '"Heute habe ich Hunger." — object?',      options: ['Heute','habe','ich','Hunger'], answer: 'Hunger' },
      { type: 'multiple-choice', q: '"Wir haben eine Idee." — object?',        options: ['Wir','haben','eine Idee','—'], answer: 'eine Idee' },
      { type: 'multiple-choice', q: '"Im Team haben wir Aufgaben." — subject?',options: ['Im Team','haben','wir','Aufgaben'], answer: 'wir' },
      { type: 'multiple-choice', q: '"Morgen wird das Lernen besser." — subject?',
        options: ['Morgen','wird','das Lernen','besser'], answer: 'das Lernen',
        explain: '"Morgen" is in slot 1 (time), the verb "wird" is in slot 2, and "das Lernen" — the THING that becomes better — is the subject sitting in slot 3. When in doubt, ask: WHO/WHAT is doing the action of "becoming"?' },
    ],
    quiz: [
      { type: 'multiple-choice', q: 'Which is the VERB in "Wir lernen Deutsch"?',
        options: ['Wir','lernen','Deutsch','—'], answer: 'lernen' },
      { type: 'multiple-choice', q: 'Which is the SUBJECT in "Der Lehrer kauft den Kaffee"?',
        options: ['Der Lehrer','kauft','den Kaffee','—'], answer: 'Der Lehrer' },
      { type: 'multiple-choice', q: 'Which is the OBJECT in "Ich lese ein Buch"?',
        options: ['Ich','lese','ein Buch','—'], answer: 'ein Buch' },
      { type: 'multiple-choice', q: 'Where does the conjugated verb live in a main sentence?',
        options: ['Always position 1','Always position 2','Always at the end','Wherever fits'],
        answer: 'Always position 2' },
      { type: 'multiple-choice', q: 'Pick the correct order: time + verb + subject + adjective.',
        options: ['Heute ich bin müde.','Müde ich bin heute.','Heute bin ich müde.','Bin ich heute müde.'],
        answer: 'Heute bin ich müde.' },
      { type: 'fill-blank', sentence: '🛠 "Today the student writes the sentence." → Heute __ der Student den Satz.',
        answer: 'schreibt' },
      { type: 'fill-blank', sentence: '"Wer / Was?" finds the __ .', answer: 'Subjekt' },
      { type: 'fill-blank', sentence: '"Wen / Was?" finds the __ .', answer: 'Objekt' },
    ],
  },

  {
    id: 10, week: 2,
    vocabLayout: 'spotlight',
    title: 'Regular verbs — the pattern',
    titleDe: 'Regelmäßige Verben',
    emoji: '🔁',
    objective: 'Conjugate ANY regular verb in 4 seconds: take the stem, add the matching ending.',
    intro: 'German has thousands of regular verbs. They all follow the SAME pattern: take the infinitive (mach·en), drop the -en (mach·), then glue on the ending that matches the subject pronoun (ich → -e, du → -st …). Learn this once and you instantly own hundreds of verbs.',
    vocabulary: [
      // Role labels for the lesson
      { de: 'der Stamm',     en: 'the verb stem',  emoji: '🌳', hint: 'machen → mach- · lernen → lern- · spielen → spiel-',                   example: 'Der Stamm ist „mach-".',           exampleEn: 'The stem is "mach-".' },
      { de: 'die Endung',    en: 'the ending',     emoji: '🔚', hint: 'the bit that changes per pronoun: -e · -st · -t · -en · -t · -en',     example: 'Die Endung für „ich" ist „-e".',   exampleEn: 'The ending for "ich" is "-e".' },
      { de: 'regelmäßig',    en: 'regular',        emoji: '✅', hint: 'follows the standard pattern — today\'s topic',                        example: '„Lernen" ist regelmäßig.',          exampleEn: '"lernen" is regular.' },
      { de: 'unregelmäßig',  en: 'irregular',      emoji: '⚠️', hint: 'breaks the pattern — sein/haben/werden are like this',                example: '„Sein" ist unregelmäßig.',         exampleEn: '"sein" is irregular.' },
      // The 8 core regular verbs
      { de: 'machen',   en: 'to do / make',   emoji: '🛠️', hint: 'stem mach-',                                example: 'Was machst du?',           exampleEn: 'What are you doing?' },
      { de: 'lernen',   en: 'to learn',       emoji: '🎓', hint: 'stem lern-',                                example: 'Wir lernen Deutsch.',       exampleEn: 'We learn German.' },
      { de: 'spielen',  en: 'to play',        emoji: '⚽', hint: 'stem spiel-',                                example: 'Die Kinder spielen Fußball.', exampleEn: 'The children play football.' },
      { de: 'arbeiten', en: 'to work',        emoji: '🏢', hint: 'stem arbeit- (ends in -t → -et / -est)',    example: 'Du arbeitest viel.',        exampleEn: 'You work a lot.' },
      { de: 'kaufen',   en: 'to buy',         emoji: '🛒', hint: 'stem kauf-',                                example: 'Ich kaufe ein Buch.',       exampleEn: 'I buy a book.' },
      { de: 'fragen',   en: 'to ask',         emoji: '🙋', hint: 'stem frag-',                                example: 'Was fragst du?',            exampleEn: 'What are you asking?' },
      { de: 'hören',    en: 'to hear',        emoji: '🎧', hint: 'stem hör-',                                  example: 'Ich höre Musik.',           exampleEn: 'I am listening to music.' },
      { de: 'wohnen',   en: 'to live (reside)', emoji: '🏡', hint: 'stem wohn-',                              example: 'Wir wohnen in Berlin.',     exampleEn: 'We live in Berlin.' },
      // A few more useful ones
      { de: 'kommen',   en: 'to come',        emoji: '🚶', hint: 'stem komm- · ich komme aus Indien',         example: 'Ich komme aus Indien.',     exampleEn: 'I come from India.' },
      { de: 'brauchen', en: 'to need',        emoji: '🤔', hint: 'stem brauch- · ich brauche Kaffee',          example: 'Ich brauche Kaffee.',       exampleEn: 'I need coffee.' },
      { de: 'finden',   en: 'to find',        emoji: '🔍', hint: 'stem find- (ends in -d → -et / -est)',      example: 'Er findet den Weg.',        exampleEn: 'He finds the way.' },
      { de: 'trinken',  en: 'to drink',       emoji: '🍵', hint: 'stem trink-',                                example: 'Wir trinken Tee.',          exampleEn: 'We drink tea.' },
    ],
    grammar: [
      { rule: '⭐ The 4-second recipe',
        body:
          '1️⃣  Start with the infinitive:                machen\n' +
          '2️⃣  Drop the final -en (or sometimes just -n):  mach-\n' +
          '3️⃣  Look at the subject pronoun:                ich\n' +
          '4️⃣  Glue on the matching ending:                mache\n' +
          '\n' +
          'That is it. The same recipe works for hundreds of verbs.',
      },
      { rule: 'The 6 endings cheat-sheet',
        body:
          '   ich         -e        ich  mach + e      → mache\n' +
          '   du          -st       du   mach + st     → machst\n' +
          '   er/sie/es   -t        er   mach + t      → macht\n' +
          '   wir         -en       wir  mach + en     → machen\n' +
          '   ihr         -t        ihr  mach + t      → macht\n' +
          '   sie / Sie   -en       sie  mach + en     → machen\n' +
          'Notice: the wir form and the infinitive look identical (machen). The ihr form and the er-form look identical (macht).',
      },
      { rule: '⚠ Stem ends in -t or -d? Sneak in an extra e',
        body:
          'When the verb stem ends in -t (arbeiten) or -d (finden), the consonant clusters at "-tst" or "-dt" are awkward. German inserts an "e" to make it pronounceable:\n' +
          '   du   arbeit + e + st → arbeitest   (NOT arbeitst)\n' +
          '   er   arbeit + e + t  → arbeitet    (NOT arbeitt)\n' +
          '   ihr  arbeit + e + t  → arbeitet\n' +
          'Same rule: finden → du findest · er findet · ihr findet.\n' +
          'The wir / sie / ich forms don\'t need it: arbeite, arbeiten.',
      },
      { rule: '⭐ Where the conjugated verb sits — same V2 rule as Day 9',
        body:
          'Whatever verb you build, it goes in slot 2 of a main sentence:\n' +
          '   Ich       lerne      Deutsch.\n' +
          '   Heute     lerne      ich Deutsch.   ← time leads, subject moves to 3\n' +
          '   In Berlin wohnen     wir.            ← place leads, subject moves to 3',
      },
      { rule: 'Regular vs irregular — a quick preview',
        body:
          'Most verbs are regular and follow the recipe above. A small group is irregular:\n' +
          '• sein / haben / werden — already drilled on Days 5-7. Memorise their tables.\n' +
          '• Stem-changing verbs — they look regular EXCEPT for the du and er/sie/es forms, where the vowel changes (essen → du isst, lesen → er liest, sehen → er sieht). You meet these on Day 11.\n' +
          'Until tomorrow, assume any new verb is regular — you will be right 80% of the time.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ INTERACTIVE — pronoun ↔ ending match
      {
        type: 'match',
        pairs: [
          { de: 'ich',        en: '-e' },
          { de: 'du',         en: '-st' },
          { de: 'er / sie / es', en: '-t' },
          { de: 'wir',        en: '-en' },
          { de: 'ihr',        en: '-t' },
          { de: 'sie / Sie',  en: '-en' },
        ],
      },
      // ⭐ Stem + ending → form (Lego-style)
      {
        type: 'match',
        pairs: [
          { de: 'mach + e',    en: 'mache  (ich)' },
          { de: 'spiel + st',  en: 'spielst  (du)' },
          { de: 'lern + t',    en: 'lernt  (er/sie/es OR ihr)' },
          { de: 'kauf + en',   en: 'kaufen  (wir / sie / Sie)' },
          { de: 'arbeit + et', en: 'arbeitet  (er/sie/es OR ihr — extra e!)' },
        ],
      },

      // 2 conjugation tables — the standard verb + the -t-stem trap
      conjEx('machen', 'to do'),
      conjEx('arbeiten', 'to work'),

      // 🛠 BUILD-THE-FORM — given pronoun + infinitive, write the conjugated form
      { type: 'fill-blank', sentence: '🛠 Build the form: ich + lernen → __',          answer: 'lerne' },
      { type: 'fill-blank', sentence: '🛠 Build the form: du + spielen → __',           answer: 'spielst' },
      { type: 'fill-blank', sentence: '🛠 Build the form: er + kaufen → __',            answer: 'kauft' },
      { type: 'fill-blank', sentence: '🛠 Build the form: wir + hören → __',            answer: 'hören' },
      { type: 'fill-blank', sentence: '🛠 Build the form: ihr + machen → __',           answer: 'macht' },
      { type: 'fill-blank', sentence: '🛠 Build the form: du + arbeiten → __  (extra e!)', answer: 'arbeitest' },
      { type: 'fill-blank', sentence: '🛠 Build the form: er + finden → __  (extra e!)',   answer: 'findet' },

      // ⚠ Spot-the-error
      {
        type: 'multiple-choice',
        q: '⚠ Which is WRONG?',
        options: ['ich lerne','du lernst','er lernen','wir lernen'],
        answer: 'er lernen',
        explain: 'er / sie / es always takes -t, never the bare infinitive: er lernt.',
      },
      {
        type: 'multiple-choice',
        q: '⚠ Which is WRONG?',
        options: ['du arbeitst','du arbeitest','er arbeitet','wir arbeiten'],
        answer: 'du arbeitst',
        explain: 'Stem ends in -t → insert an "e" before -st: du arbeitest.',
      },

      // Mixed real-context fill-blanks (much shorter than before)
      { type: 'fill-blank', sentence: 'Ich __ Deutsch. (lernen)',                 answer: 'lerne' },
      { type: 'fill-blank', sentence: 'Wir __ Fußball am Wochenende. (spielen)',  answer: 'spielen' },
      { type: 'fill-blank', sentence: 'Er __ in Berlin. (wohnen)',                 answer: 'wohnt' },
      { type: 'fill-blank', sentence: 'Du __ Rotwein. (trinken)',                  answer: 'trinkst' },
      { type: 'fill-blank', sentence: 'Robert und Sabine __ Bier. (trinken)',      answer: 'trinken', hint: 'two people → plural' },
      { type: 'fill-blank', sentence: 'Der Hund __ Wasser. (trinken)',             answer: 'trinkt',  hint: 'der Hund → er → -t' },
      { type: 'fill-blank', sentence: 'Die Kollegin __ in unserem Team. (arbeiten)', answer: 'arbeitet' },
      { type: 'fill-blank', sentence: 'Du __ einen Kaffee. (kaufen)',              answer: 'kaufst' },
      { type: 'fill-blank', sentence: 'Wir __ Musik. (hören)',                     answer: 'hören' },
      { type: 'fill-blank', sentence: 'Sie (she) __ den Schlüssel. (finden)',      answer: 'findet',  hint: 'stem ends in d → -et' },

      // V2 inversion with regular verbs
      {
        type: 'multiple-choice',
        q: '"Today I am learning German." Pick the right order.',
        options: [
          'Heute ich lerne Deutsch.',
          'Heute lerne ich Deutsch.',
          'Ich heute lerne Deutsch.',
          'Lerne ich heute Deutsch.',
        ],
        answer: 'Heute lerne ich Deutsch.',
        explain: 'Time in slot 1 → conjugated verb stays in slot 2 → subject moves to slot 3.',
      },

      // 🛠 Build a real sentence
      { type: 'fill-blank', sentence: '🛠 Build: ich + spielen + Fußball → __',           answer: 'Ich spiele Fußball' },
      { type: 'fill-blank', sentence: '🛠 Build with TIME first: heute + ich + lernen + Deutsch → __',
        answer: 'Heute lerne ich Deutsch', hint: 'time slot 1 · verb slot 2 · subject slot 3' },

      // Mini dialogue using regular verbs in a real chat
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Was machst du heute?',                  en: 'What are you doing today?' },
        { speaker: 'B', de: 'Ich lerne Deutsch und arbeite ein bisschen.', en: 'I am learning German and working a bit.' },
        { speaker: 'A', de: 'Ich spiele Fußball am Wochenende.',     en: 'I play football on the weekend.' },
        { speaker: 'B', de: 'Wo wohnst du jetzt?',                   en: 'Where do you live now?' },
        { speaker: 'A', de: 'Ich wohne in Berlin. Und du?',          en: 'I live in Berlin. And you?' },
        { speaker: 'B', de: 'Wir wohnen in München.',                en: 'We live in Munich.' },
      ]},
    ],
    quiz: [
      { type: 'multiple-choice', q: '"du lernen" → ?', options: ['lerne','lernst','lernt','lernen'], answer: 'lernst' },
      { type: 'multiple-choice', q: '"wir kaufen" → ?', options: ['kaufe','kaufst','kauft','kaufen'], answer: 'kaufen' },
      { type: 'multiple-choice', q: '"er finden" → ?', options: ['finde','findst','findt','findet'],
        answer: 'findet', explain: 'Stem ends in -d → insert e before -t: findet.' },
      { type: 'multiple-choice', q: '"ihr arbeiten" → ?', options: ['arbeite','arbeitst','arbeitet','arbeiten'],
        answer: 'arbeitet', explain: 'ihr always ends in -t. With -t-stem, insert e: arbeitet.' },
      { type: 'fill-blank', sentence: 'Sie (she) __ ein Buch. (kaufen)', answer: 'kauft' },
      { type: 'fill-blank', sentence: 'Wir __ Musik. (hören)', answer: 'hören' },
      { type: 'fill-blank', sentence: 'Heute __ ich Fußball. (spielen — V2!)', answer: 'spiele' },
    ],
  },

  {
    id: 11, week: 2,
    vocabLayout: 'spotlight',
    title: 'Stem-changing verbs',
    titleDe: 'Verben mit Vokalwechsel',
    emoji: '⚡',
    objective: 'Spot the three stem-change patterns (e→i, e→ie, a→ä) and apply them in du/er/sie/es — only.',
    intro: 'A small group of high-frequency verbs LOOK regular but secretly switch their stem vowel in TWO forms: du and er/sie/es. Three patterns cover almost all of them: 🔁 e→i (essen → du isst), 🔁 e→ie (sehen → du siehst), 🔁 a→ä (fahren → du fährst). The other four forms (ich · wir · ihr · sie/Sie) stay regular. Today: lock in the pattern, then drill ten of the most useful stem-changers.',
    vocabulary: [
      // Pattern labels
      { de: 'der Vokalwechsel', en: 'vowel change', emoji: '🔁', hint: 'the swap that happens in du / er / sie / es only', example: 'Der Vokalwechsel ist e → i.', exampleEn: 'The vowel change is e → i.' },
      // e → i  (short i)
      { de: 'essen',    en: 'to eat',     emoji: '🍽️', hint: '🔁 e→i  ·  du isst, er isst',                        example: 'Du isst Pizza.',           exampleEn: 'You eat pizza.' },
      { de: 'sprechen', en: 'to speak',   emoji: '🗣️', hint: '🔁 e→i  ·  du sprichst, er spricht',                  example: 'Er spricht Deutsch.',      exampleEn: 'He speaks German.' },
      { de: 'nehmen',   en: 'to take',    emoji: '🤲', hint: '🔁 e→i  ·  du nimmst, er nimmt  (+ doubled m!)',      example: 'Du nimmst den Bus.',       exampleEn: 'You take the bus.' },
      { de: 'geben',    en: 'to give',    emoji: '🎁', hint: '🔁 e→i  ·  du gibst, er gibt',                        example: 'Sie gibt ein Buch.',       exampleEn: 'She gives a book.' },
      { de: 'helfen',   en: 'to help',    emoji: '🆘', hint: '🔁 e→i  ·  du hilfst, er hilft  (Dativ verb — Day 26)', example: 'Du hilfst viel.',         exampleEn: 'You help a lot.' },
      // e → ie  (long ee)
      { de: 'sehen',    en: 'to see',     emoji: '👁️', hint: '🔁 e→ie ·  du siehst, er sieht',                      example: 'Er sieht das Auto.',       exampleEn: 'He sees the car.' },
      { de: 'lesen',    en: 'to read',    emoji: '📰', hint: '🔁 e→ie ·  du liest, er liest  (s+st merges to st)',  example: 'Sie liest ein Buch.',      exampleEn: 'She reads a book.' },
      // a → ä
      { de: 'fahren',   en: 'to drive / travel', emoji: '🚗', hint: '🔁 a→ä  ·  du fährst, er fährt',                example: 'Du fährst nach Berlin.',   exampleEn: 'You travel to Berlin.' },
      { de: 'schlafen', en: 'to sleep',         emoji: '🛏️', hint: '🔁 a→ä  ·  du schläfst, er schläft',             example: 'Er schläft acht Stunden.', exampleEn: 'He sleeps eight hours.' },
      { de: 'tragen',   en: 'to wear / carry',   emoji: '👕', hint: '🔁 a→ä  ·  du trägst, er trägt',                example: 'Sie trägt eine Tasche.',   exampleEn: 'She is carrying a bag.' },
      // The three regulars they look like
      { de: 'kommen',    en: 'to come',     emoji: '🚶', hint: '✓ regular — no stem change',                       example: 'Wir kommen aus Deutschland.', exampleEn: 'We come from Germany.' },
      { de: 'gehen',     en: 'to go',       emoji: '🏃', hint: '✓ regular — no stem change',                       example: 'Wir gehen nach Hause.',     exampleEn: 'We are going home.' },
      { de: 'schreiben', en: 'to write',    emoji: '✍️', hint: '✓ regular — no stem change',                       example: 'Er schreibt eine E-Mail.',  exampleEn: 'He writes an email.' },
      { de: 'trinken',   en: 'to drink',    emoji: '🥤', hint: '✓ regular — no stem change',                       example: 'Wir trinken Wasser.',       exampleEn: 'We drink water.' },
      // Bonus regulars — high-frequency verbs from earlier enrichment
      { de: 'besuchen',    en: 'to visit',                emoji: '🏠', hint: '✓ regular bonus · besucht',           example: 'Wir besuchen Berlin.',       exampleEn: 'We visit Berlin.' },
      { de: 'zeigen',      en: 'to show',                 emoji: '👆', hint: '✓ regular bonus · zeigt',             example: 'Ich zeige das Foto.',         exampleEn: 'I show the photo.' },
      { de: 'benutzen',    en: 'to use',                  emoji: '🔧', hint: '✓ regular bonus · benutzt',           example: 'Sie benutzt das Handy.',     exampleEn: 'She uses the mobile.' },
      { de: 'erklären',    en: 'to explain',              emoji: '💡', hint: '✓ regular bonus · erklärt',           example: 'Sie erklärt die Grammatik.', exampleEn: 'She explains the grammar.' },
      { de: 'wiederholen', en: 'to repeat',               emoji: '🔄', hint: '✓ regular bonus · wiederholt',        example: 'Ich wiederhole das Wort.',   exampleEn: 'I repeat the word.' },
      { de: 'üben',        en: 'to practise',             emoji: '💪', hint: '✓ regular bonus · übt',               example: 'Du übst Deutsch.',           exampleEn: 'You practise German.' },
      { de: 'suchen',      en: 'to search / look for',    emoji: '🔎', hint: '✓ regular bonus · sucht',             example: 'Was suchst du?',             exampleEn: 'What are you looking for?' },
      { de: 'schicken',    en: 'to send',                 emoji: '📨', hint: '✓ regular bonus · schickt',           example: 'Sie schickt eine E-Mail.',   exampleEn: 'She sends an email.' },
      { de: 'erzählen',    en: 'to tell (a story)',       emoji: '🎙️', hint: '✓ regular bonus · erzählt',           example: 'Sie erzählt eine Geschichte.', exampleEn: 'She tells a story.' },
      { de: 'fragen',      en: 'to ask',                  emoji: '🙋', hint: '✓ regular bonus · fragt',             example: 'Sie fragt den Lehrer.',      exampleEn: 'She asks the teacher.' },
      { de: 'warten',      en: 'to wait',                 emoji: '⏳', hint: '✓ regular bonus · stem ends in -t → wartet', example: 'Ich warte hier.',     exampleEn: 'I am waiting here.' },
    ],
    grammar: [
      { rule: '⭐ The three stem-change patterns',
        body:
          'Three vowel swaps cover ~90% of stem-changers:\n' +
          '🔁 e → i    essen → du isst, er isst    (sprechen, nehmen, geben, helfen)\n' +
          '🔁 e → ie   sehen → du siehst, er sieht (lesen)\n' +
          '🔁 a → ä    fahren → du fährst, er fährt (schlafen, tragen, laufen)\n' +
          'You CANNOT predict which verb takes which pattern from the infinitive — you have to memorise. But once you know a verb, the pattern is rock-solid.',
      },
      { rule: '⭐ The change happens in TWO forms only',
        body:
          'Only du and er / sie / es switch the vowel. The other four forms stay regular:\n' +
          '   ich       esse        ✓ no change\n' +
          '   du        ISST        🔁 e → i\n' +
          '   er/sie/es ISST        🔁 e → i\n' +
          '   wir       essen       ✓ no change\n' +
          '   ihr       esst        ✓ no change  (uses normal stem)\n' +
          '   sie/Sie   essen       ✓ no change\n' +
          'So: if you ever say "ich isse" or "wir issen" — that\'s wrong. Only du / er-sie-es flip.',
      },
      { rule: '⚠ Two extra-quirk verbs',
        body:
          '• nehmen — e→i + the consonant DOUBLES: du nimmst, er nimmt. The "h" disappears.\n' +
          '• lesen — the stem ends in -s. When -st gets added, "s + st" merges into just "-st": du LIEST (not "liesst"), er LIEST. Same trick as essen → du isst (not isst-st).',
      },
      { rule: 'Same V2 word-order rule',
        body:
          'Stem-changers still obey position 2:\n' +
          '   Heute      isst       er Pizza.\n' +
          '   Am Morgen  fährt      sie nach Berlin.\n' +
          '   Im Buch    sieht      er ein Bild.',
      },
      { rule: 'How to spot one — the honest answer',
        body:
          'You can\'t spot a stem-changer from the infinitive alone. The trick: when you learn a NEW verb, learn the du-form alongside it. If du-form differs from the regular pattern, mark the verb as a stem-changer in your flashcards. Most stem-changers are everyday verbs (eat, sleep, drive, see, speak) — by Day 20 you\'ll know them all.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ INTERACTIVE — match each verb to its stem-change pattern
      {
        type: 'match',
        pairs: [
          { de: 'essen',    en: '🔁 e → i' },
          { de: 'sehen',    en: '🔁 e → ie' },
          { de: 'fahren',   en: '🔁 a → ä' },
          { de: 'kommen',   en: '✓ regular (no change)' },
          { de: 'sprechen', en: '🔁 e → i' },
          { de: 'schlafen', en: '🔁 a → ä' },
        ],
      },
      // ⭐ Match — verb form to its pronoun
      {
        type: 'match',
        pairs: [
          { de: 'esse',    en: 'ich' },
          { de: 'isst',    en: 'du / er / sie / es' },
          { de: 'essen',   en: 'wir / sie / Sie  (or infinitive)' },
          { de: 'esst',    en: 'ihr' },
        ],
      },

      // 2 conjugation tables — one e→i and one e→ie
      conjEx('essen', 'to eat'),
      conjEx('sehen', 'to see'),

      // 🛠 Build-the-form for stem-changers (the diagnostic test)
      { type: 'fill-blank', sentence: '🛠 du + essen → __',                              answer: 'isst' },
      { type: 'fill-blank', sentence: '🛠 er + sprechen → __',                            answer: 'spricht' },
      { type: 'fill-blank', sentence: '🛠 du + nehmen → __  (extra m!)',                  answer: 'nimmst' },
      { type: 'fill-blank', sentence: '🛠 sie (she) + lesen → __',                        answer: 'liest' },
      { type: 'fill-blank', sentence: '🛠 du + fahren → __',                              answer: 'fährst' },
      { type: 'fill-blank', sentence: '🛠 er + schlafen → __',                            answer: 'schläft' },
      { type: 'fill-blank', sentence: '🛠 ich + essen → __  (no change in ich!)',         answer: 'esse' },
      { type: 'fill-blank', sentence: '🛠 wir + sehen → __  (no change in wir!)',         answer: 'sehen' },
      { type: 'fill-blank', sentence: '🛠 ihr + fahren → __  (no change in ihr!)',        answer: 'fahrt' },
      { type: 'fill-blank', sentence: '🛠 du + helfen → __',                               answer: 'hilfst' },

      // ⚠ Spot-the-error
      {
        type: 'multiple-choice',
        q: '⚠ Which is WRONG?',
        options: ['ich esse', 'du isst', 'er isst', 'wir issen'],
        answer: 'wir issen',
        explain: 'Only du / er / sie / es flip the vowel. wir keeps the regular stem: wir essen.',
      },
      {
        type: 'multiple-choice',
        q: '⚠ Which is WRONG?',
        options: ['du siehst', 'er sieht', 'ich siehe', 'wir sehen'],
        answer: 'ich siehe',
        explain: 'ich keeps the regular stem — ich sehe (not siehe).',
      },
      {
        type: 'multiple-choice',
        q: '⚠ Which is WRONG?',
        options: ['du nimmst', 'er nimmt', 'wir nehmen', 'du nimst'],
        answer: 'du nimst',
        explain: 'nehmen has DOUBLED m in stem-change: du nimmst (with two m\'s), er nimmt.',
      },

      // Mixed real-context fill-blanks — focus on the high-yield stem-changers
      { type: 'fill-blank', sentence: 'Du __ einen Apfel. (essen)',          answer: 'isst' },
      { type: 'fill-blank', sentence: 'Sie (she) __ ein Buch. (lesen)',       answer: 'liest' },
      { type: 'fill-blank', sentence: 'Er __ Deutsch. (sprechen)',            answer: 'spricht' },
      { type: 'fill-blank', sentence: 'Du __ einen Kaffee. (nehmen)',         answer: 'nimmst' },
      { type: 'fill-blank', sentence: 'Wir __ Wasser. (trinken — regular!)',  answer: 'trinken', hint: 'trinken is REGULAR — no stem change' },
      { type: 'fill-blank', sentence: 'Du __ nach Berlin. (fahren)',          answer: 'fährst' },
      { type: 'fill-blank', sentence: 'Er __ acht Stunden. (schlafen)',        answer: 'schläft' },
      { type: 'fill-blank', sentence: 'Ich __ ein Foto. (sehen — no change in ich!)', answer: 'sehe' },
      { type: 'fill-blank', sentence: 'Wir __ Pizza. (essen — no change in wir!)',     answer: 'essen' },

      // V2 inversion with stem-changers
      {
        type: 'multiple-choice',
        q: 'Pick the right order: "Today he eats pizza."',
        options: [
          'Heute er isst Pizza.',
          'Heute isst er Pizza.',
          'Er heute isst Pizza.',
          'Isst heute er Pizza.',
        ],
        answer: 'Heute isst er Pizza.',
        explain: 'V2 still applies: time slot 1, conjugated stem-changer slot 2, subject slot 3.',
      },

      // Mini dialogue using stem-changers in a real chat
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Was isst du heute?',                       en: 'What are you eating today?' },
        { speaker: 'B', de: 'Ich esse Pizza. Und du?',                  en: 'I am eating pizza. And you?' },
        { speaker: 'A', de: 'Ich nehme einen Salat. Liest du gerade ein Buch?',
                                                                          en: 'I am taking a salad. Are you reading a book at the moment?' },
        { speaker: 'B', de: 'Ja, ich lese ein Buch über Berlin. Mein Freund fährt nächste Woche nach Berlin.',
                                                                          en: 'Yes, I am reading a book about Berlin. My friend is travelling to Berlin next week.' },
        { speaker: 'A', de: 'Sehr cool! Schläft er gut im Hotel?',     en: 'Very cool! Does he sleep well in the hotel?' },
        { speaker: 'B', de: 'Ich glaube schon — er schläft immer gut.',en: 'I think so — he always sleeps well.' },
      ]},

      // Final regular-vs-irregular sweep
      {
        type: 'match',
        pairs: [
          { de: 'kommen',    en: '✓ regular' },
          { de: 'schreiben', en: '✓ regular' },
          { de: 'sprechen',  en: '🔁 stem-changer' },
          { de: 'fahren',    en: '🔁 stem-changer' },
        ],
      },

      // ─── Bonus drill: high-frequency REGULAR verbs (carried over from v1.6.0 Phase A) ───
      // These are the slide-89 mini-set + the missing-regulars enrichment. Useful for
      // building working vocabulary alongside the stem-changer focus of today.
      { type: 'fill-blank', sentence: 'Der Student __ den Freund. (besuchen)',                answer: 'besucht' },
      { type: 'fill-blank', sentence: 'Ich __ den Studenten. (besuchen)',                     answer: 'besuche' },
      { type: 'fill-blank', sentence: 'Die Lehrerin __ den Studenten das Buch. (zeigen)',     answer: 'zeigt' },
      { type: 'fill-blank', sentence: 'Wir __ den Computer. (benutzen)',                      answer: 'benutzen' },
      { type: 'fill-blank', sentence: 'Der Lehrer __ die Grammatik. (erklären)',              answer: 'erklärt' },
      { type: 'fill-blank', sentence: 'Wir __ jeden Tag. (üben)',                             answer: 'üben' },
      { type: 'fill-blank', sentence: 'Du __ deinen Schlüssel. (suchen)',                     answer: 'suchst' },
      { type: 'fill-blank', sentence: 'Sie (they) __ eine E-Mail. (schicken)',                answer: 'schicken' },
    ],
    quiz: [
      { type: 'multiple-choice', q: '"er sprechen" → ?', options: ['sprecht','sprechst','spricht','spreche'], answer: 'spricht' },
      { type: 'multiple-choice', q: '"du fahren" → ?',   options: ['fahre','fahrst','fährst','fahrt'],         answer: 'fährst' },
      { type: 'multiple-choice', q: '"ich essen" → ?',   options: ['esse','isse','isst','isstst'],              answer: 'esse',
        explain: 'No change in ich — ich esse stays regular.' },
      { type: 'multiple-choice', q: '"wir lesen" → ?',   options: ['lese','liest','lesen','liesen'],            answer: 'lesen',
        explain: 'No change in wir — wir lesen stays regular.' },
      { type: 'multiple-choice',
        q: 'Which is correct?',
        options: ['Ich sehe ein Foto.','Ich siehe ein Foto.','Ich sieht ein Foto.','Ich seht ein Foto.'],
        answer: 'Ich sehe ein Foto.' },
      { type: 'fill-blank', sentence: 'Wir __ Wasser. (trinken — regular!)', answer: 'trinken' },
      { type: 'fill-blank', sentence: 'Sie (she) __ eine Frage. (haben)',     answer: 'hat',
        hint: 'haben is irregular but not a stem-changer — covered Day 6.' },
    ],
  },

  {
    id: 13, week: 2,
    vocabLayout: 'spotlight',
    title: 'Time, frequency, preference',
    titleDe: 'Zeit · Häufigkeit · Präferenz',
    emoji: '🕒',
    objective: 'Layer 🕒 time, 🔄 frequency and ❤️ preference words into a sentence in the right order — and know that V2 still wins when one of them leads.',
    intro: 'You can already build S-V-O sentences. Today you add three more "spice" words: 🕒 WHEN (heute, morgen, jeden Tag), 🔄 HOW OFTEN (oft, manchmal, immer, nie) and ❤️ HOW MUCH YOU LIKE IT (gerne, sehr gerne). They go in a fixed order: 🕒 → 🔄 → ❤️ → 🎯 object. So "I gladly listen to music every day often" becomes: "Ich höre jeden Tag oft gerne Musik." Memorise the chain TFP-O — it unlocks every hobby sentence, every routine, every weekend plan.',
    vocabulary: [
      // 🕒 Time
      { de: 'heute',              en: 'today',           emoji: '📅', hint: '🕒 time · "HOY-tuh"',                     example: 'Heute lerne ich Deutsch.',            exampleEn: 'Today I learn German.' },
      { de: 'morgen',             en: 'tomorrow',        emoji: '⏭️', hint: '🕒 time · "MOR-gen"',                     example: 'Morgen kommt mein Freund.',           exampleEn: 'Tomorrow my friend is coming.' },
      { de: 'gestern',            en: 'yesterday',       emoji: '⏮️', hint: '🕒 time · "GES-tern"',                    example: 'Gestern war ich müde.',                exampleEn: 'Yesterday I was tired.' },
      { de: 'jetzt',              en: 'now',             emoji: '⏰', hint: '🕒 time · "yetst"',                       example: 'Jetzt habe ich Zeit.',                 exampleEn: 'Now I have time.' },
      { de: 'am Morgen',          en: 'in the morning',  emoji: '🌅', hint: '🕒 time',                                  example: 'Am Morgen trinke ich Kaffee.',         exampleEn: 'In the morning I drink coffee.' },
      { de: 'am Abend',           en: 'in the evening',  emoji: '🌆', hint: '🕒 time · "am AH-bent"',                  example: 'Am Abend sehen wir fern.',             exampleEn: 'In the evening we watch TV.' },
      { de: 'jeden Tag',          en: 'every day',       emoji: '📆', hint: '🕒 time · two words',                     example: 'Ich lerne jeden Tag Deutsch.',         exampleEn: 'I learn German every day.' },
      { de: 'am Wochenende',      en: 'on the weekend',  emoji: '🏖️', hint: '🕒 time · "am VO-khen-en-duh"',           example: 'Wir spielen am Wochenende Fußball.',   exampleEn: 'We play football on the weekend.' },
      { de: 'nach der Arbeit',    en: 'after work',      emoji: '💼', hint: '🕒 time · "after-work" routine',          example: 'Nach der Arbeit koche ich.',           exampleEn: 'After work I cook.' },
      { de: 'in meiner Freizeit', en: 'in my free time', emoji: '🎮', hint: '🕒 time · classic hobby slot',            example: 'In meiner Freizeit lese ich.',         exampleEn: 'In my free time I read.' },
      // 🔄 Frequency (in scale order)
      { de: 'immer',              en: 'always (100%)',   emoji: '🟢', hint: '🔄 freq · top of the scale',              example: 'Ich trinke immer Kaffee.',             exampleEn: 'I always drink coffee.' },
      { de: 'oft',                en: 'often (~80%)',    emoji: '🔁', hint: '🔄 freq',                                  example: 'Wir spielen oft Fußball.',             exampleEn: 'We often play football.' },
      { de: 'manchmal',           en: 'sometimes (~40%)',emoji: '🤷', hint: '🔄 freq · "MANKH-mal"',                   example: 'Manchmal koche ich.',                   exampleEn: 'Sometimes I cook.' },
      { de: 'selten',             en: 'rarely (~10%)',   emoji: '🔅', hint: '🔄 freq · "ZEL-ten"',                     example: 'Sie reist selten.',                     exampleEn: 'She rarely travels.' },
      { de: 'nie',                en: 'never (0%)',      emoji: '🚫', hint: '🔄 freq · bottom of the scale · "nee"',   example: 'Ich esse nie Fisch.',                   exampleEn: 'I never eat fish.' },
      // ❤️ Preference
      { de: 'gerne',              en: 'gladly / I like to',           emoji: '❤️',  hint: '❤️ pref · "GAYR-nuh"',          example: 'Ich lerne gerne Deutsch.',          exampleEn: 'I like learning German.' },
      { de: 'sehr gerne',         en: 'very much / I really like to', emoji: '💖',  hint: '❤️ pref · stronger version',    example: 'Wir kochen sehr gerne.',             exampleEn: 'We really like cooking.' },
      { de: 'lieber',             en: 'rather / preferably',          emoji: '🆚',  hint: '❤️ pref · "LEE-buh"',           example: 'Ich trinke lieber Tee.',             exampleEn: 'I rather drink tea.' },
      { de: 'am liebsten',        en: 'most of all',                  emoji: '🏆',  hint: '❤️ pref · superlative',         example: 'Am liebsten esse ich Pizza.',        exampleEn: 'Most of all I eat pizza.' },
      // 🎬 Hobby verbs
      { de: 'reisen',             en: 'to travel',  emoji: '✈️',  hint: '🎬 hobby verb · regular',                          example: 'Wir reisen nach Berlin.',           exampleEn: 'We travel to Berlin.' },
      { de: 'kochen',             en: 'to cook',    emoji: '🍳',  hint: '🎬 hobby verb · regular',                          example: 'Ich koche jeden Tag.',               exampleEn: 'I cook every day.' },
      { de: 'schauen',            en: 'to watch',   emoji: '👀',  hint: '🎬 hobby verb · regular',                          example: 'Wir schauen Filme.',                 exampleEn: 'We watch movies.' },
      { de: 'hören',              en: 'to listen',  emoji: '🎧',  hint: '🎬 hobby verb · regular',                          example: 'Ich höre Musik.',                    exampleEn: 'I listen to music.' },
      { de: 'programmieren',      en: 'to program', emoji: '⌨️', hint: '🎬 hobby verb · regular · "pro-gra-MEER-en"',     example: 'Er programmiert Code.',              exampleEn: 'He programs code.' },
      // 🎯 Hobby objects
      { de: 'Bücher',             en: 'books',      emoji: '📚',  hint: '🎯 object · plural of das Buch',                  example: 'Ich lese gerne Bücher.',             exampleEn: 'I like to read books.' },
      { de: 'Filme',              en: 'movies',     emoji: '🎬',  hint: '🎯 object',                                        example: 'Sie schaut oft Filme.',              exampleEn: 'She often watches movies.' },
      { de: 'Musik',              en: 'music',      emoji: '🎵',  hint: '🎯 object · "moo-ZEEK"',                          example: 'Wir hören jeden Tag Musik.',         exampleEn: 'We listen to music every day.' },
      { de: 'Sport',              en: 'sport',      emoji: '🏋️', hint: '🎯 object · English-style "S"',                  example: 'Ich mache gerne Sport.',             exampleEn: 'I like doing sport.' },
      { de: 'Freunde',            en: 'friends',    emoji: '👫',  hint: '🎯 object',                                        example: 'Wir besuchen oft Freunde.',          exampleEn: 'We often visit friends.' },
      { de: 'Kollegen',           en: 'colleagues', emoji: '👨‍💼', hint: '🎯 object',                                       example: 'Kollegen helfen oft.',               exampleEn: 'Colleagues often help.' },
      { de: 'Code',               en: 'code',       emoji: '👨‍💻', hint: '🎯 object · English loan',                        example: 'Wir schreiben Code.',                exampleEn: 'We write code.' },
      { de: 'Spiele',             en: 'games',      emoji: '🎲',  hint: '🎯 object · plural of das Spiel',                example: 'Ich kaufe Spiele.',                  exampleEn: 'I buy games.' },
      { de: 'Rezepte',            en: 'recipes',    emoji: '🍲',  hint: '🎯 object',                                        example: 'Sie kocht neue Rezepte.',            exampleEn: 'She cooks new recipes.' },
      { de: 'Länder',             en: 'countries',  emoji: '🌍',  hint: '🎯 object · plural of das Land',                 example: 'Wir besuchen viele Länder.',         exampleEn: 'We visit many countries.' },
      { de: 'Städte',             en: 'cities',     emoji: '🏙️', hint: '🎯 object · plural of die Stadt',                example: 'Berlin und München sind Städte.',    exampleEn: 'Berlin and Munich are cities.' },
    ],
    grammar: [
      { rule: '⭐ The TFP-O order — your hobby-sentence template',
        body:
          'Subject + Verb (slot 2) + 🕒 Time + 🔄 Frequency + ❤️ Preference + 🎯 Object\n' +
          '\n' +
          '   Ich    höre    jeden Tag        oft       gerne     Musik.\n' +
          '   Wir    spielen am Wochenende    manchmal  gerne     Fußball.\n' +
          '   Du     liest   nach der Arbeit  immer     sehr gerne Bücher.\n' +
          '   Sie    kocht   am Wochenende    oft       gerne     Pasta.\n' +
          '\n' +
          'Not every slot has to be filled. Drop whichever you do not need. But when two or three appear together, they go in this order.',
      },
      { rule: '⚠ V2 still wins — if 🕒 time leads, the subject moves',
        body:
          'When you put a TIME word in slot 1 for emphasis, the conjugated verb still keeps slot 2 — so the subject moves to slot 3:\n' +
          '\n' +
          '   slot 1            slot 2 (verb)   slot 3 (subject)\n' +
          '   Heute             höre            ich       jeden Tag oft gerne Musik.   ✓\n' +
          '   Am Wochenende     spielen         wir       oft Fußball.                  ✓\n' +
          '\n' +
          'Same V2 rule from Day 9 — it never sleeps.',
      },
      { rule: '🔄 The frequency scale — picture it',
        body:
          'Frequency words live on a sliding scale from 100% to 0%:\n' +
          '\n' +
          '   100% ████████  immer       always\n' +
          '    80% ██████░░  oft         often\n' +
          '    40% ████░░░░  manchmal    sometimes\n' +
          '    10% █░░░░░░░  selten      rarely\n' +
          '     0% ░░░░░░░░  nie         never\n' +
          '\n' +
          'In a sentence, the frequency word always goes between 🕒 time and ❤️ preference. Putting it FIRST (slot 1) pushes the subject out — same V2 rule: "Manchmal höre ich Musik."',
      },
      { rule: '❤️ "gerne" — the most-loved A1 word',
        body:
          'gerne (or its short form "gern") expresses ENJOYMENT. It sits between the frequency word and the object:\n' +
          '\n' +
          '   Ich trinke    gerne     Kaffee.       I like drinking coffee.\n' +
          '   Wir spielen   gerne     Fußball.      We like playing football.\n' +
          '   Du liest      sehr gerne Bücher.       You really like reading books.\n' +
          '\n' +
          'Three escalation forms:\n' +
          '   gerne        →  I like it\n' +
          '   sehr gerne   →  I really like it\n' +
          '   am liebsten  →  most of all  ("Am liebsten esse ich Pizza.")\n' +
          '\n' +
          'Tip: gerne lives BEFORE the object, NOT after.\n' +
          '   ✗ Ich trinke Kaffee gerne.\n' +
          '   ✓ Ich trinke gerne Kaffee.',
      },
      { rule: 'TeKaMoLo — the full grown-up rule (preview)',
        body:
          'When place comes in too, German uses the order TeKaMoLo:\n' +
          '   Te = TEmporal (when)\n' +
          '   Ka = KAusal (why)\n' +
          '   Mo = MOdal (how / preference)\n' +
          '   Lo = LOkal (where)\n' +
          '\n' +
          'Example: "Ich fahre heute / wegen der Arbeit / mit dem Bus / nach Berlin."\n' +
          'For Week 2 you only need TFP-O. The full TeKaMoLo arrives once you have prepositions of place under your belt.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ INTERACTIVE — match each word to its TFP role
      {
        type: 'match',
        pairs: [
          { de: 'heute',        en: '🕒 Time' },
          { de: 'jeden Tag',    en: '🕒 Time' },
          { de: 'oft',          en: '🔄 Frequency' },
          { de: 'manchmal',     en: '🔄 Frequency' },
          { de: 'gerne',        en: '❤️ Preference' },
          { de: 'sehr gerne',   en: '❤️ Preference' },
        ],
      },
      // ⭐ Frequency scale match
      {
        type: 'match',
        pairs: [
          { de: 'immer',     en: '100% — always' },
          { de: 'oft',       en: '~80% — often' },
          { de: 'manchmal',  en: '~40% — sometimes' },
          { de: 'selten',    en: '~10% — rarely' },
          { de: 'nie',       en: '0% — never' },
        ],
      },
      // ⭐ TFP-O slot order match
      {
        type: 'match',
        pairs: [
          { de: 'Slot after the verb',  en: '🕒 Time' },
          { de: 'Right after time',     en: '🔄 Frequency' },
          { de: 'Right after frequency',en: '❤️ Preference' },
          { de: 'Last, before the period', en: '🎯 Object' },
        ],
      },

      // 🛠 BUILD-THE-SENTENCE — assemble the full TFP-O chain
      { type: 'fill-blank',
        sentence: '🛠 Ich + hören + 🕒 jeden Tag + 🔄 oft + ❤️ gerne + 🎯 Musik → __',
        answer: 'Ich höre jeden Tag oft gerne Musik' },
      { type: 'fill-blank',
        sentence: '🛠 Wir + spielen + 🕒 am Wochenende + 🔄 manchmal + 🎯 Fußball → __',
        answer: 'Wir spielen am Wochenende manchmal Fußball' },
      { type: 'fill-blank',
        sentence: '🛠 Du + lesen + 🕒 nach der Arbeit + 🔄 immer + ❤️ sehr gerne + 🎯 Bücher → __',
        answer: 'Du liest nach der Arbeit immer sehr gerne Bücher',
        hint: 'lesen is a stem-changer (e→ie): du liest' },
      { type: 'fill-blank',
        sentence: '🛠 V2 inversion: 🕒 Heute + ich + hören + Musik → __',
        answer: 'Heute höre ich Musik',
        hint: 'time slot 1 · verb slot 2 · subject slot 3' },
      { type: 'fill-blank',
        sentence: '🛠 V2 inversion: 🔄 Manchmal + wir + spielen + Fußball → __',
        answer: 'Manchmal spielen wir Fußball' },

      // ⚠ Spot-the-error
      {
        type: 'multiple-choice',
        q: '⚠ Which sentence is WRONG?',
        options: [
          'Ich höre jeden Tag oft gerne Musik.',
          'Ich höre Musik jeden Tag oft gerne.',
          'Heute höre ich Musik.',
          'Wir spielen am Wochenende Fußball.',
        ],
        answer: 'Ich höre Musik jeden Tag oft gerne.',
        explain: 'The 🎯 object goes LAST. Time / frequency / preference all come BEFORE the object.',
      },
      {
        type: 'multiple-choice',
        q: '⚠ Which sentence is WRONG?',
        options: [
          'Ich trinke gerne Kaffee.',
          'Ich trinke Kaffee gerne.',
          'Wir essen am Wochenende oft gerne Pizza.',
          'Heute kocht sie sehr gerne.',
        ],
        answer: 'Ich trinke Kaffee gerne.',
        explain: '"gerne" must come BEFORE the object, not after. → "Ich trinke gerne Kaffee."',
      },

      // Word-order MCQs
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

      // Hobby-sentence builders — fill the verb (existing, kept)
      { type: 'fill-blank', sentence: 'Ich lerne __ Deutsch. (every day)', answer: 'jeden Tag' },
      { type: 'fill-blank', sentence: 'Ich __ jeden Tag gerne Musik. (listen)',          answer: 'höre' },
      { type: 'fill-blank', sentence: 'Wir __ am Wochenende oft Fußball. (play)',        answer: 'spielen' },
      { type: 'fill-blank', sentence: 'Sie (she) __ in ihrer Freizeit gerne. (cook)',    answer: 'kocht' },
      { type: 'fill-blank', sentence: 'Du __ nach der Arbeit Bücher. (read)',            answer: 'liest', hint: 'lesen, irreg.: du liest' },
      { type: 'fill-blank', sentence: 'Ich __ sehr gerne Code. (program)',               answer: 'programmiere' },

      // Frequency-fill
      { type: 'fill-blank', sentence: 'Wir spielen __ Fußball. (often)',                 answer: 'oft' },
      { type: 'fill-blank', sentence: 'Sie liest __ Bücher. (rarely)',                    answer: 'selten' },
      { type: 'fill-blank', sentence: 'Ich __ Pizza. (never)',                             answer: 'esse nie',
        hint: 'verb (esse) in slot 2 · frequency right after' },

      // Mini dialogue using TFP in a real conversation
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Was machst du am Wochenende?',                          en: 'What do you do on the weekend?' },
        { speaker: 'B', de: 'Ich koche oft gerne. Und du?',                          en: 'I often gladly cook. And you?' },
        { speaker: 'A', de: 'Ich höre jeden Tag oft gerne Musik. Reist du gerne?',   en: 'I listen to music every day often gladly. Do you like to travel?' },
        { speaker: 'B', de: 'Ja, sehr gerne! Am liebsten reise ich nach Italien.',   en: 'Yes, very much! Most of all, I travel to Italy.' },
        { speaker: 'A', de: 'Spielst du auch Sport?',                                en: 'Do you also play sport?' },
        { speaker: 'B', de: 'Manchmal. Ich spiele selten Fußball, aber ich tanze gerne.', en: 'Sometimes. I rarely play football, but I like to dance.' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Wir spielen __ Fußball. (often)', answer: 'oft' },
      { type: 'multiple-choice', q: '"gerne" usually expresses…', options: ['time','frequency','preference','place'], answer: 'preference' },
      { type: 'multiple-choice', q: 'On the frequency scale, where does "selten" sit?',
        options: ['100% — always','~40% — sometimes','~10% — rarely','0% — never'], answer: '~10% — rarely' },
      { type: 'multiple-choice', q: 'Pick the right order:',
        options: ['Ich höre Musik gerne.','Ich höre gerne Musik.','Ich Musik höre gerne.','Gerne ich höre Musik.'],
        answer: 'Ich höre gerne Musik.',
        explain: '"gerne" goes BEFORE the object.' },
      { type: 'multiple-choice', q: 'Which is the correct TFP-O order?',
        options: ['Time → Frequency → Preference → Object','Object → Time → Frequency → Preference','Preference → Time → Object → Frequency','Object → Preference → Frequency → Time'],
        answer: 'Time → Frequency → Preference → Object' },
      { type: 'fill-blank', sentence: '🛠 V2 inversion: "Heute" + ich + lerne + Deutsch → __',
        answer: 'Heute lerne ich Deutsch' },
      { type: 'fill-blank', sentence: '🛠 Build: Wir + spielen + 🕒 am Wochenende + 🔄 oft + 🎯 Fußball → __',
        answer: 'Wir spielen am Wochenende oft Fußball' },
    ],
  },

  {
    id: 14, week: 2,
    vocabLayout: 'spotlight',
    title: 'Introducing yourself',
    titleDe: 'Sich vorstellen',
    emoji: '👋',
    objective: 'Hold a 60-second self-introduction in German — formal AND informal — using the 6-block recipe.',
    intro: 'You now own enough verbs and structure to TALK ABOUT YOURSELF in German. The trick is a recipe — six blocks in a reliable order: 👋 greeting → 🪪 name → 🌍 origin → 🏠 residence → 🎂 age → 💼 profession (+ optional 🎮 hobby). Today you assemble the blocks, in BOTH the du-form (friends) and the Sie-form (strangers / professors / customer service), and finish with a personalised mini-speech.',
    vocabulary: [
      // 👋 Greetings (by time of day + register)
      { de: 'Hallo',          en: 'hello (anytime, informal)',         emoji: '👋', hint: '👋 informal / casual',                              example: 'Hallo! Ich heiße Anna.',          exampleEn: 'Hello! I am called Anna.' },
      { de: 'Guten Morgen',   en: 'good morning (until ~10am)',         emoji: '🌅', hint: '👋 universal · "GOO-ten MOR-gen"',                  example: 'Guten Morgen, Frau Weber!',        exampleEn: 'Good morning, Mrs. Weber!' },
      { de: 'Guten Tag',      en: 'good day (10am-6pm)',                emoji: '🌞', hint: '👋 universal — works everywhere',                   example: 'Guten Tag, Herr Schmidt!',         exampleEn: 'Good day, Mr. Schmidt!' },
      { de: 'Guten Abend',    en: 'good evening (after ~6pm)',          emoji: '🌆', hint: '👋 universal',                                       example: 'Guten Abend, Mama!',                exampleEn: 'Good evening, Mom!' },
      { de: 'Servus',         en: 'hi/bye (southern Germany, Austria)', emoji: '🍺', hint: '👋 informal · Bayern · Österreich',                  example: 'Servus, Stefan!',                  exampleEn: 'Hi, Stefan!' },
      { de: 'Moin',           en: 'hi (northern Germany — anytime)',    emoji: '⚓', hint: '👋 informal · Hamburg · Norddeutschland',            example: 'Moin, Moin!',                       exampleEn: 'Hi there! (classic Hamburg double greeting)' },
      // 🪪 Name
      { de: 'Mein Name ist',  en: 'My name is …',                       emoji: '🪪', hint: '🪪 slightly more formal',                            example: 'Mein Name ist Anna Müller.',        exampleEn: 'My name is Anna Müller.' },
      { de: 'Ich heiße',      en: 'I am called …',                      emoji: '🏷️', hint: '🪪 most natural in conversation',                    example: 'Ich heiße Tom.',                    exampleEn: 'I am called Tom.' },
      // ❓ Questions — examples show a typical reply
      { de: 'Wie heißt du?',     en: 'What is your name? (informal)',   emoji: '❓',   hint: '❓ du-form question',                                example: 'Wie heißt du? — Ich heiße Anna.',  exampleEn: 'What is your name? — I am Anna.' },
      { de: 'Wie heißen Sie?',   en: 'What is your name? (formal)',     emoji: '💼',   hint: '❓ Sie-form (capital S)',                            example: 'Wie heißen Sie? — Mein Name ist Anna.', exampleEn: 'What is your name? (formal) — My name is Anna.' },
      { de: 'Woher kommst du?',  en: 'Where are you from? (origin)',    emoji: '🗺️',  hint: '❓ ⚠ Woher = where FROM',                            example: 'Woher kommst du? — Aus Indien.',   exampleEn: 'Where are you from? — From India.' },
      { de: 'Wo wohnst du?',     en: 'Where do you live? (residence)',  emoji: '📍',   hint: '❓ ⚠ Wo = where (location)',                         example: 'Wo wohnst du? — In Berlin.',        exampleEn: 'Where do you live? — In Berlin.' },
      { de: 'Wie alt bist du?',  en: 'How old are you?',                emoji: '🎂',   hint: '❓ du-form',                                          example: 'Wie alt bist du? — Ich bin 25.',    exampleEn: 'How old are you? — I am 25.' },
      { de: 'Was machst du beruflich?', en: 'What do you do for work?', emoji: '🧑‍💻', hint: '❓ literally "What do you do professionally?"',     example: 'Was machst du beruflich? — Ich bin Lehrer.', exampleEn: 'What do you do for work? — I am a teacher.' },
      { de: 'Sprichst du Deutsch?', en: 'Do you speak German?',         emoji: '🗣️',  hint: '❓ stem-changer: sprechen → du sprichst',           example: 'Sprichst du Deutsch? — Ja, ein bisschen.', exampleEn: 'Do you speak German? — Yes, a little.' },
      // 🌍 Origin & 🏠 residence
      { de: 'Ich komme aus',  en: 'I come from … (country/city)',       emoji: '🌍', hint: '🌍 + country: aus Indien · aus Deutschland',         example: 'Ich komme aus Indien.',             exampleEn: 'I come from India.' },
      { de: 'Ich wohne in',   en: 'I live in … (city)',                 emoji: '🏠', hint: '🏠 + city: in Berlin · in München',                  example: 'Ich wohne in Berlin.',              exampleEn: 'I live in Berlin.' },
      { de: 'Ich lebe in',    en: 'I live in … (alternative)',          emoji: '🏡', hint: '🏠 leben works too · slightly more "permanent"',     example: 'Ich lebe in München.',              exampleEn: 'I live in Munich.' },
      // 🎂 Age & 💼 profession
      { de: 'Ich bin … Jahre alt', en: 'I am … years old',              emoji: '🎈', hint: '🎂 number + Jahre alt',                                example: 'Ich bin 30 Jahre alt.',             exampleEn: 'I am 30 years old.' },
      { de: 'Ich bin Lehrer',     en: 'I am a teacher (m)',              emoji: '👨‍🏫', hint: '💼 profession — NO article!',                       example: 'Ich bin Lehrer.',                   exampleEn: 'I am a teacher.' },
      { de: 'Ich arbeite als',    en: 'I work as a …',                   emoji: '💼', hint: '💼 + profession noun',                                example: 'Ich arbeite als Lehrer.',           exampleEn: 'I work as a teacher.' },
      { de: 'Ich studiere',       en: 'I study (at university)',         emoji: '🎓', hint: '💼 student · "Ich studiere Informatik"',             example: 'Ich studiere Informatik.',          exampleEn: 'I study computer science.' },
      { de: 'Ich lerne Deutsch',  en: 'I am learning German',            emoji: '📚', hint: '🎓 the line you can ALREADY say',                    example: 'Ich lerne Deutsch.',                 exampleEn: 'I am learning German.' },
      // 🤝 Politeness phrases
      { de: 'Sehr angenehm',      en: 'Very nice (to meet you)',         emoji: '🤝', hint: '🤝 standard "nice to meet you"',                      example: 'Sehr angenehm! Ich bin Anna.',     exampleEn: 'Very nice to meet you! I am Anna.' },
      { de: 'Es freut mich',      en: 'Pleased to meet you',             emoji: '😊', hint: '🤝 slightly warmer · stand-alone phrase',            example: 'Es freut mich!',                    exampleEn: 'Pleased to meet you!' },
      { de: 'Schön, dich kennenzulernen',  en: 'Nice to meet you (informal)', emoji: '🙏', hint: '🤝 long but very common · du-form',         example: 'Schön, dich kennenzulernen!',       exampleEn: 'Nice to meet you!' },
      { de: 'Schön, Sie kennenzulernen',   en: 'Nice to meet you (formal)',  emoji: '🤵', hint: '🤝 Sie-form variant',                          example: 'Schön, Sie kennenzulernen, Frau Müller!', exampleEn: 'Nice to meet you, Mrs. Müller!' },
      // 👋 Closing
      { de: 'Tschüss',            en: 'Bye (informal)',                  emoji: '🚪', hint: '👋 close · "TSHUESS"',                                example: 'Tschüss, bis morgen!',              exampleEn: 'Bye, see you tomorrow!' },
      { de: 'Auf Wiedersehen',    en: 'Goodbye (formal / neutral)',      emoji: '🚶', hint: '👋 close · "owf VEE-der-zay-en" · literally "until seeing again"', example: 'Auf Wiedersehen, Herr Schmidt!', exampleEn: 'Goodbye, Mr. Schmidt!' },
      { de: 'Bis bald',           en: 'See you soon',                    emoji: '🤙', hint: '👋 close · friendly send-off',                       example: 'Bis bald, Anna!',                    exampleEn: 'See you soon, Anna!' },
      { de: 'Bis morgen',         en: 'See you tomorrow',                emoji: '🌙', hint: '👋 close · for known next meeting',                  example: 'Bis morgen!',                        exampleEn: 'See you tomorrow!' },
    ],
    grammar: [
      { rule: '⭐ The 6-block recipe',
        body:
          'Every solid self-introduction follows this order:\n' +
          '\n' +
          '   1. 👋 GREETING        Hallo · Guten Tag · Guten Morgen\n' +
          '   2. 🪪 NAME            Ich heiße … / Mein Name ist …\n' +
          '   3. 🎂 AGE             Ich bin … Jahre alt.\n' +
          '   4. 🌍 ORIGIN          Ich komme aus … (country)\n' +
          '   5. 🏠 RESIDENCE       Ich wohne in … (city)\n' +
          '   6. 💼 PROFESSION      Ich bin … / Ich arbeite als … / Ich studiere …\n' +
          '   ✨ Bonus: 🎮 hobby     In meiner Freizeit + verb (Day 13!).\n' +
          '\n' +
          'Order is flexible AFTER the greeting+name pair, but going top-to-bottom always sounds natural.',
      },
      { rule: '👤 The two registers — du vs Sie',
        body:
          'Same recipe, two voicings. Pick the right one BEFORE you open your mouth:\n' +
          '\n' +
          '   Situation                              Use\n' +
          '   ──────────────────────────────────────────────────────\n' +
          '   meeting a friend / classmate            du\n' +
          '   chatting with a child                   du\n' +
          '   social media / casual chat              du\n' +
          '   meeting your boss / a stranger          Sie\n' +
          '   talking to a doctor or professor        Sie\n' +
          '   customer service / shop staff           Sie\n' +
          '\n' +
          'Question swap when you go formal:\n' +
          '   du-form                              Sie-form\n' +
          '   Wie heißt du?                       →  Wie heißen Sie?\n' +
          '   Woher kommst du?                    →  Woher kommen Sie?\n' +
          '   Wo wohnst du?                       →  Wo wohnen Sie?\n' +
          '   Wie alt bist du?                    →  Wie alt sind Sie?',
      },
      { rule: '⚠ Woher vs Wo — the killer pair',
        body:
          'Both translate to "where" but point in OPPOSITE directions:\n' +
          '\n' +
          '   Woher kommst du?       →  Where are you FROM (origin)?\n' +
          '   Ich komme AUS Indien.\n' +
          '\n' +
          '   Wo wohnst du?          →  Where (located) do you live?\n' +
          '   Ich wohne IN Berlin.\n' +
          '\n' +
          'Pair the question word with the right preposition: woher … aus / wo … in. (There is also "wohin" = where TO — Day 17 will dive deeper.)',
      },
      { rule: '💼 Professions — no article!',
        body:
          'When you state your job, drop the article:\n' +
          '\n' +
          '   ✓ Ich bin Lehrer.       (not "Ich bin EIN Lehrer.")\n' +
          '   ✓ Sie ist Ärztin.        (not "Sie ist EINE Ärztin.")\n' +
          '   ✓ Wir sind Studenten.    (not "Wir sind DIE Studenten.")\n' +
          '\n' +
          'For female forms, add -in: Lehrer → Lehrerin · Arzt → Ärztin · Student → Studentin · Verkäufer → Verkäuferin.',
      },
      { rule: '🤝 Closing the introduction',
        body:
          'After you introduce yourself, the other person usually replies "Sehr angenehm" (very nice) or "Es freut mich" (pleased to meet you). End with one of:\n' +
          '   Tschüss             — informal bye\n' +
          '   Auf Wiedersehen     — formal / neutral goodbye\n' +
          '   Bis bald            — see you soon\n' +
          '   Bis morgen          — see you tomorrow (when you know you\'ll meet)',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ INTERACTIVE — match each question to its typical answer
      {
        type: 'match',
        pairs: [
          { de: 'Wie heißt du?',          en: 'Ich heiße Anna.' },
          { de: 'Woher kommst du?',       en: 'Ich komme aus Indien.' },
          { de: 'Wo wohnst du?',          en: 'Ich wohne in Berlin.' },
          { de: 'Wie alt bist du?',       en: 'Ich bin 25 Jahre alt.' },
          { de: 'Was machst du beruflich?', en: 'Ich bin Lehrer.' },
        ],
      },
      // ⭐ Greeting → time/situation
      {
        type: 'match',
        pairs: [
          { de: 'Guten Morgen',  en: 'until ~10am · universal' },
          { de: 'Guten Tag',     en: '10am-6pm · universal' },
          { de: 'Guten Abend',   en: 'after ~6pm · universal' },
          { de: 'Hallo',         en: 'anytime · informal' },
          { de: 'Servus',        en: 'southern Germany / Austria · informal' },
          { de: 'Moin',          en: 'northern Germany · informal' },
        ],
      },
      // ⭐ du vs Sie register match
      {
        type: 'match',
        pairs: [
          { de: 'meeting your boss',         en: 'Sie' },
          { de: 'chatting with a friend',    en: 'du' },
          { de: 'asking a stranger for help', en: 'Sie' },
          { de: 'talking to a child',        en: 'du' },
          { de: 'in customer service',       en: 'Sie' },
        ],
      },
      // ⭐ du-form → Sie-form question swap
      {
        type: 'match',
        pairs: [
          { de: 'Wie heißt du?',     en: 'Wie heißen Sie?' },
          { de: 'Woher kommst du?',  en: 'Woher kommen Sie?' },
          { de: 'Wo wohnst du?',     en: 'Wo wohnen Sie?' },
          { de: 'Wie alt bist du?',  en: 'Wie alt sind Sie?' },
        ],
      },

      // ⚠ Woher vs Wo
      {
        type: 'multiple-choice',
        q: '"Where are you FROM?" =',
        options: ['Wo kommst du?','Woher kommst du?','Wohin kommst du?','Wann kommst du?'],
        answer: 'Woher kommst du?',
        explain: 'Woher = where FROM (origin). Wo = where (location). Wohin = where TO.',
      },
      {
        type: 'multiple-choice',
        q: '"Where do you live?" =',
        options: ['Wo wohnst du?','Woher wohnst du?','Wohin wohnst du?','Wann wohnst du?'],
        answer: 'Wo wohnst du?',
      },

      // 🛠 BUILD THE ANSWER — from English question to German answer
      { type: 'fill-blank',
        sentence: '🛠 "What is your name?" (formal) → "__ Sie?"',
        answer: 'Wie heißen' },
      { type: 'fill-blank',
        sentence: '🛠 "I come from Germany." → Ich __ aus Deutschland.',
        answer: 'komme' },
      { type: 'fill-blank',
        sentence: '🛠 "I live in Berlin." → Ich __ in Berlin.',
        answer: 'wohne' },
      { type: 'fill-blank',
        sentence: '🛠 "I am a teacher." → Ich __ Lehrer.  (no article!)',
        answer: 'bin' },
      { type: 'fill-blank',
        sentence: '🛠 "I am 28 years old." → Ich bin __ Jahre alt.',
        answer: 'achtundzwanzig' },

      // ⚠ Spot-the-error
      {
        type: 'multiple-choice',
        q: '⚠ Which sentence is WRONG?',
        options: [
          'Ich heiße Anna.',
          'Mein Name ist Anna.',
          'Ich bin Anna.',
          'Ich heißt Anna.',
        ],
        answer: 'Ich heißt Anna.',
        explain: 'heißen → ich heiße (no -t for ich). The -t form is for er/sie/es: "Sie heißt Anna."',
      },
      {
        type: 'multiple-choice',
        q: '⚠ Which sentence is WRONG?',
        options: [
          'Ich bin Lehrer.',
          'Ich bin ein Lehrer.',
          'Ich bin Studentin.',
          'Sie ist Ärztin.',
        ],
        answer: 'Ich bin ein Lehrer.',
        explain: 'No article when stating your profession in German. Drop the "ein".',
      },

      // 💬 Informal dialogue (existing — preserved)
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Hallo! Wie heißt du?',                       en: 'Hi, what are you called?' },
        { speaker: 'B', de: 'Ich heiße Anna. Und du?',                    en: 'I am called Anna. And you?' },
        { speaker: 'A', de: 'Ich heiße Tom. Woher kommst du?',            en: 'I am called Tom. Where are you from?' },
        { speaker: 'B', de: 'Ich komme aus Indien und wohne in Berlin.',  en: 'I come from India and live in Berlin.' },
        { speaker: 'A', de: 'Wie alt bist du?',                            en: 'How old are you?' },
        { speaker: 'B', de: 'Ich bin fünfundzwanzig Jahre alt.',           en: 'I am 25 years old.' },
        { speaker: 'A', de: 'Schön, dich kennenzulernen!',                  en: 'Nice to meet you!' },
        { speaker: 'B', de: 'Sehr angenehm! Bis bald.',                     en: 'Very nice (to meet you)! See you soon.' },
      ]},
      // 💼 Formal dialogue — same recipe, Sie-form throughout
      { type: 'dialogue', lines: [
        { speaker: 'Frau Weber', de: 'Guten Tag! Wie heißen Sie?',                en: 'Good day! What is your name?' },
        { speaker: 'Herr Patel', de: 'Guten Tag! Mein Name ist Jaydeep Patel.',   en: 'Good day! My name is Jaydeep Patel.' },
        { speaker: 'Frau Weber', de: 'Sehr angenehm. Woher kommen Sie?',          en: 'Very nice (to meet you). Where are you from?' },
        { speaker: 'Herr Patel', de: 'Ich komme aus Indien und wohne in München.',en: 'I come from India and live in Munich.' },
        { speaker: 'Frau Weber', de: 'Was machen Sie beruflich?',                  en: 'What do you do professionally?' },
        { speaker: 'Herr Patel', de: 'Ich bin Softwareentwickler. Und Sie?',      en: 'I am a software developer. And you?' },
        { speaker: 'Frau Weber', de: 'Ich arbeite als Ärztin. Auf Wiedersehen!',  en: 'I work as a doctor. Goodbye!' },
        { speaker: 'Herr Patel', de: 'Auf Wiedersehen!',                            en: 'Goodbye!' },
      ]},

      // Moritz translation drill — slide 167-168 (existing — preserved)
      { type: 'fill-blank', sentence: 'Ich __ Anna. (am called)', answer: 'heiße' },
      { type: 'fill-blank', sentence: 'Ich __ aus Indien. (come)', answer: 'komme' },
      { type: 'fill-blank', sentence: '"My name is Moritz." → Mein Name __ Moritz.',     answer: 'ist' },
      { type: 'fill-blank', sentence: '"I am 27 years old." → Ich __ 27 Jahre alt.',     answer: 'bin' },
      { type: 'fill-blank', sentence: '"I come from Germany." → Ich komme __ Deutschland.', answer: 'aus' },
      { type: 'fill-blank', sentence: '"I live in Dorfen." → Ich __ in Dorfen.',         answer: 'wohne', hint: 'wohnen / leben both work — use wohnen' },
      { type: 'fill-blank', sentence: '"I am a teacher." → Ich __ Lehrer.',              answer: 'bin' },
      { type: 'fill-blank', sentence: '"I work in a school." → Ich __ in einer Schule.', answer: 'arbeite' },
      { type: 'fill-blank', sentence: '"I have a friend." → Ich __ einen Freund.',       answer: 'habe' },
      { type: 'fill-blank', sentence: '"In my free time, I play football." → In meiner Freizeit __ ich Fußball.', answer: 'spiele', hint: 'time-phrase first → verb still position 2 → subject after verb' },
      { type: 'fill-blank', sentence: '"On Saturday, I sometimes play a game." → Am Samstag __ ich manchmal ein Spiel.', answer: 'spiele' },

      // 🛠 BUILD-YOUR-OWN — fill-blanks where you supply the answer about YOU
      // (we use a model student "Anna" so the test has a single correct answer)
      { type: 'fill-blank',
        sentence: '🛠 Self-intro slot 2 (NAME): "Ich __ Anna."',
        answer: 'heiße' },
      { type: 'fill-blank',
        sentence: '🛠 Self-intro slot 3 (AGE — 25): "Ich __ fünfundzwanzig Jahre alt."',
        answer: 'bin' },
      { type: 'fill-blank',
        sentence: '🛠 Self-intro slot 4 (ORIGIN — India): "Ich komme __ Indien."',
        answer: 'aus' },
      { type: 'fill-blank',
        sentence: '🛠 Self-intro slot 5 (RESIDENCE — Berlin): "Ich __ in Berlin."',
        answer: 'wohne' },
      { type: 'fill-blank',
        sentence: '🛠 Self-intro slot 6 (PROFESSION — software developer): "Ich bin __."',
        answer: 'Softwareentwicklerin', hint: 'female form ends in -in' },
    ],
    quiz: [
      { type: 'multiple-choice', q: 'Which is most formal?',
        options: ['Hallo','Servus','Guten Tag','Hi'], answer: 'Guten Tag' },
      { type: 'multiple-choice', q: '"Where are you FROM?" =',
        options: ['Wo kommst du?','Woher kommst du?','Wohin kommst du?','Wann kommst du?'], answer: 'Woher kommst du?' },
      { type: 'multiple-choice', q: 'You meet your professor for the first time. Which question?',
        options: ['Wie heißt du?','Wie heißen Sie?','Was machst du?','Hallo!'], answer: 'Wie heißen Sie?' },
      { type: 'multiple-choice', q: 'Pick the natural German for "I am a doctor (f)":',
        options: ['Ich bin eine Ärztin.','Ich bin Ärztin.','Ich Ärztin bin.','Ich habe Ärztin.'],
        answer: 'Ich bin Ärztin.',
        explain: 'No article with profession.' },
      { type: 'fill-blank', sentence: 'Ich __ in Berlin.', answer: 'wohne' },
      { type: 'fill-blank', sentence: '"How old are you?" (formal) → Wie alt __ Sie?', answer: 'sind' },
      { type: 'fill-blank', sentence: '🛠 Build a 4-block intro: "Hallo! Ich __ Anna. Ich __ aus Indien und __ in Berlin. Ich __ 25 Jahre alt."',
        answer: 'heiße komme wohne bin',
        hint: 'four words separated by single spaces — the verbs for each block in order' },
    ],
  },

  {
    id: 15, week: 3,
    vocabLayout: 'spotlight',
    title: 'Week 1+2 review',
    titleDe: 'Wiederholung Woche 1+2',
    emoji: '🏁',
    objective: 'Prove you own everything from Days 1-14 before cases begin — sounds, numbers, pronouns, articles, the three auxiliaries, verb conjugation, separable verbs and word order.',
    intro: 'Milestone checkpoint! This pulls together your first two weeks: 🔤 sounds → 🔢 numbers 0-100 → 👤 pronouns → 🪪 articles → 🟦 sein/haben/werden → 🔁 regular & stem-changing & separable verbs → 🧩 S-V-O & TFP word order → 👋 self-introduction. Work through the recap cards, then the mixed drills. Aim for ≥ 80% — that means you are genuinely ready for the case system in Week 4.',
    vocabulary: [
      // 🪪 Articles — the three genders + plural rule
      { de: 'der',           en: 'the (masculine)',   emoji: '👨',  hint: '🔁 Day 4 · masc. → er',                   example: 'Der Mann ist hier.',          exampleEn: 'The man is here.' },
      { de: 'die',           en: 'the (fem. / plural)', emoji: '👩',  hint: '🔁 Day 4 · fem. → sie · pl. → sie',      example: 'Die Frau ist nett.',          exampleEn: 'The woman is nice.' },
      { de: 'das',           en: 'the (neuter)',      emoji: '🧒',  hint: '🔁 Day 4 · neuter → es',                 example: 'Das Kind ist müde.',          exampleEn: 'The child is tired.' },
      // 👤 Pronoun keystones — the register pair
      { de: 'ich',           en: 'I',                 emoji: '🙋',  hint: '🔁 Day 3 · 1st singular',                example: 'Ich heiße Anna.',             exampleEn: 'My name is Anna.' },
      { de: 'du',            en: 'you (1 friend)',    emoji: '👉',  hint: '🔁 Day 3 · informal singular',           example: 'Wie heißt du?',                exampleEn: 'What is your name?' },
      { de: 'Sie',           en: 'you (formal)',      emoji: '🤝',  hint: '🔁 Day 3 · ALWAYS capital S',            example: 'Wie heißen Sie?',              exampleEn: 'What is your name? (formal)' },
      // 🟦🟩🟨 The three auxiliaries — one form each
      { de: 'bin',           en: 'am  (sein)',        emoji: '🟦',  hint: '🔁 Day 5 · ich-form of sein',            example: 'Ich bin müde.',                exampleEn: 'I am tired.' },
      { de: 'habe',          en: 'have  (haben)',     emoji: '🟩',  hint: '🔁 Day 6 · body states use HABEN',       example: 'Ich habe Hunger.',             exampleEn: 'I am hungry.' },
      { de: 'wird',          en: 'becomes  (werden)', emoji: '🟨',  hint: '🔁 Day 7 · change of state',             example: 'Es wird kalt.',                exampleEn: 'It is getting cold.' },
      // 🧩 Sentence-rule keystones
      { de: 'nicht',         en: 'not',               emoji: '❌',  hint: '🔁 Day 1 · negates verbs / adjectives',  example: 'Das ist nicht gut.',           exampleEn: 'That is not good.' },
      { de: 'heute',         en: 'today',             emoji: '📅',  hint: '🔁 Day 13 · V2 inversion when time leads', example: 'Heute lerne ich Deutsch.',   exampleEn: 'Today I am learning German.' },
      { de: 'gerne',         en: 'gladly / I like to', emoji: '❤️', hint: '🔁 Day 13 · TFP-O · before the object',  example: 'Ich trinke gerne Kaffee.',     exampleEn: 'I like to drink coffee.' },
      { de: 'oft',           en: 'often',             emoji: '🔁',  hint: '🔁 Day 13 · 🔄 frequency · 80%',          example: 'Wir spielen oft Fußball.',     exampleEn: 'We often play football.' },
      // ⚡ Verb-pattern keystones
      { de: 'aufstehen',     en: 'to get up (separable)', emoji: '⏰', hint: '🔁 Day 12 · prefix flies to the END',  example: 'Ich stehe um 7 Uhr auf.',      exampleEn: 'I get up at 7 o\'clock.' },
      // 🔢 Number flip showcase
      { de: 'einundzwanzig', en: '21',                emoji: '🎂',  hint: '🔁 Day 2 · unit-FLIP, drops -s of eins', example: 'Ich bin einundzwanzig.',       exampleEn: 'I am twenty-one.' },
      // 👋 Self-intro keystone phrases
      { de: 'Ich komme aus', en: 'I come from …',     emoji: '🌍',  hint: '🔁 Day 14 · 6-block recipe slot 4',      example: 'Ich komme aus Indien.',        exampleEn: 'I come from India.' },
      { de: 'Ich bin Lehrer', en: 'I am a teacher',   emoji: '👨‍🏫', hint: '🔁 Day 14 · NO article with profession',  example: 'Ich bin Lehrer.',              exampleEn: 'I am a teacher.' },
    ],
    grammar: [
      { rule: '✅ Week 1 recap — the foundations',
        body:
          '🔤 Sounds: V→F · W→soft V · Z→ts · J→Y · ch (hard/soft) · sch→sh · ä/ö/ü · chs→ks.\n' +
          '🔢 Numbers: 0-12 unique · 13-19 = unit+zehn · 21-99 FLIP (einundzwanzig). 30 dreißig · 60 sechzig · 70 siebzig.\n' +
          '👤 Pronouns: ich · du · er/sie/es · wir · ihr · sie/Sie. Three "sies" — verb form decodes them.\n' +
          '🪪 Articles: der (m) · die (f) · das (n) · die (pl). Learn the article WITH the noun.\n' +
          '🟦 sein: bin · bist · ist · sind · seid · sind.\n' +
          '🟩 haben: habe · hast · hat · haben · habt · haben — body states (Hunger/Durst) use HABEN.\n' +
          '🟨 werden: werde · wirst · wird · werden · werdet · werden.',
      },
      { rule: '✅ Week 2 recap — building sentences',
        body:
          '🔁 Regular verbs: stem + -e/-st/-t/-en/-t/-en. Stem ends in -t/-d → add extra e (arbeitest).\n' +
          '⚡ Stem-changers: e→i (essen→isst) · e→ie (sehen→sieht) · a→ä (fahren→fährt). Only du + er/sie/es change.\n' +
          '🧩 Separable verbs: stem in slot 2, prefix flies to the END (Ich stehe um 7 Uhr AUF). Re-glues after a modal.\n' +
          '📍 V2 rule: the conjugated verb is ALWAYS in position 2. If time/place leads, the subject moves to slot 3.\n' +
          '🕒 TFP-O order: Time → Frequency → Preference → Object (Ich höre jeden Tag oft gerne Musik).\n' +
          '👋 Self-intro: greeting → name → age → origin (aus) → residence (in) → profession (no article!).',
      },
      { rule: '🎯 The 5 mistakes to never make again',
        body:
          '1. ✗ Ich bin Hunger.  →  ✓ Ich habe Hunger.  (body states use haben)\n' +
          '2. ✗ Ich isse.  →  ✓ Ich esse.  (only du/er/sie/es stem-change)\n' +
          '3. ✗ Ich aufstehe.  →  ✓ Ich stehe … auf.  (prefix to the end)\n' +
          '4. ✗ Heute ich lerne.  →  ✓ Heute lerne ich.  (V2 — verb stays slot 2)\n' +
          '5. ✗ Ich bin ein Lehrer.  →  ✓ Ich bin Lehrer.  (no article with profession)',
      },
    ],
    exercises: [
      // ── 🟦 Auxiliaries: forms ↔ pronouns ──
      {
        type: 'match',
        pairs: [
          { de: 'bin',  en: 'ich (sein)' },
          { de: 'bist', en: 'du (sein)' },
          { de: 'sind', en: 'wir / sie / Sie (sein)' },
          { de: 'hast', en: 'du (haben)' },
          { de: 'hat',  en: 'er / sie / es (haben)' },
          { de: 'wird', en: 'er / sie / es (werden)' },
        ],
      },
      // ── 👤 Articles → pronouns ──
      {
        type: 'match',
        pairs: [
          { de: 'der Laptop',  en: 'er' },
          { de: 'die Tasche',  en: 'sie' },
          { de: 'das Buch',    en: 'es' },
          { de: 'die Bücher',  en: 'sie (plural)' },
        ],
      },
      // ── 🔢 Numbers recall ──
      { type: 'multiple-choice', q: '21 = ?', options: ['einsundzwanzig','einundzwanzig','zwanzigundeins','einzwanzig'], answer: 'einundzwanzig' },
      { type: 'fill-blank', sentence: '🔢 16 = __', answer: 'sechzehn', hint: 'careful: 16 is sechzehn — sechzig is 60!' },
      { type: 'fill-blank', sentence: '🔢 30 = __ (special spelling!)', answer: 'dreißig' },
      { type: 'fill-blank', sentence: '🔢 77 = __', answer: 'siebenundsiebzig' },

      // ── 🟦🟩🟨 Auxiliary fill-blanks ──
      { type: 'fill-blank', sentence: 'Wir __ müde. (sein)',                 answer: 'sind' },
      { type: 'fill-blank', sentence: 'Du __ eine Frage. (haben)',            answer: 'hast' },
      { type: 'fill-blank', sentence: 'Es __ besser. (werden)',               answer: 'wird' },
      { type: 'fill-blank', sentence: 'Ich __ Hunger. (haben — body state!)', answer: 'habe' },

      // ── 🔁⚡🧩 Verb conjugation across all three types ──
      { type: 'fill-blank', sentence: 'Ich __ Deutsch. (lernen — regular)',          answer: 'lerne' },
      { type: 'fill-blank', sentence: 'Du __ einen Apfel. (essen — stem-changer)',   answer: 'isst' },
      { type: 'fill-blank', sentence: 'Er __ nach Berlin. (fahren — stem-changer)',  answer: 'fährt' },
      { type: 'fill-blank', sentence: 'Wir __ am Samstag __. (einkaufen — separable)', answer: 'kaufen ein' },

      // ── 🧩 S-V-O role ID ──
      { type: 'multiple-choice', q: '"das Buch" → which pronoun?', options: ['er','sie','es'], answer: 'es' },
      { type: 'multiple-choice', q: 'In "Der Lehrer erklärt das Wort", what is the OBJECT?',
        options: ['Der Lehrer','erklärt','das Wort','—'], answer: 'das Wort' },

      // ── 📍🕒 Word order ──
      { type: 'multiple-choice', q: 'Which is correct?',
        options: ['Ich oft lerne Deutsch.','Ich lerne oft Deutsch.','Oft Deutsch ich lerne.','Ich Deutsch lerne oft.'],
        answer: 'Ich lerne oft Deutsch.' },
      { type: 'multiple-choice', q: 'Pick the right order (time leads):',
        options: ['Heute ich bin müde.','Heute bin ich müde.','Ich heute bin müde.','Bin ich heute müde.'],
        answer: 'Heute bin ich müde.',
        explain: 'V2 — when time leads, the verb stays slot 2 and the subject moves to slot 3.' },

      // ── 🛠 Build-the-sentence (synthesis) ──
      { type: 'fill-blank', sentence: '🛠 Ich + hören + 🕒 jeden Tag + 🔄 oft + ❤️ gerne + 🎯 Musik → __',
        answer: 'Ich höre jeden Tag oft gerne Musik' },
      { type: 'fill-blank', sentence: '🛠 V2 inversion: 🕒 Heute + ich + stehen…auf + um 7 Uhr → __',
        answer: 'Heute stehe ich um 7 Uhr auf', hint: 'separable verb splits · time leads · subject after verb' },

      // ── ⚠ Spot-the-error sweep ──
      { type: 'multiple-choice', q: '⚠ Which sentence is WRONG?',
        options: ['Ich habe Hunger.','Ich bin müde.','Ich bin Hunger.','Wir haben Zeit.'],
        answer: 'Ich bin Hunger.',
        explain: 'Body states use haben: "Ich habe Hunger."' },
      { type: 'multiple-choice', q: '⚠ Which sentence is WRONG?',
        options: ['Du isst Pizza.','Er fährt nach Berlin.','Ich isse Pizza.','Wir essen Pizza.'],
        answer: 'Ich isse Pizza.',
        explain: 'Only du / er / sie / es stem-change. ich keeps the regular stem: ich esse.' },

      // ── 👋 Self-introduction recall ──
      { type: 'fill-blank', sentence: '👋 "I come from India." → Ich komme __ Indien.', answer: 'aus' },
      { type: 'fill-blank', sentence: '👋 "I live in Berlin." → Ich __ in Berlin.', answer: 'wohne' },
      { type: 'fill-blank', sentence: '👋 "I am a teacher." → Ich __ Lehrer. (no article!)', answer: 'bin' },

      // ── 💬 Putting it all together ──
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Hallo! Wie heißt du?',                              en: 'Hi! What are you called?' },
        { speaker: 'B', de: 'Ich heiße Anna. Ich komme aus Indien und wohne in Berlin.', en: 'I am called Anna. I come from India and live in Berlin.' },
        { speaker: 'A', de: 'Was machst du am Wochenende?',                       en: 'What do you do on the weekend?' },
        { speaker: 'B', de: 'Ich koche jeden Tag gerne und ich spiele oft Fußball.', en: 'I gladly cook every day and I often play football.' },
        { speaker: 'A', de: 'Stehst du am Samstag früh auf?',                     en: 'Do you get up early on Saturday?' },
        { speaker: 'B', de: 'Nein! Am Samstag schlafe ich lange. Ich bin oft müde.', en: 'No! On Saturday I sleep long. I am often tired.' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Du __ müde. (sein)', answer: 'bist' },
      { type: 'fill-blank', sentence: 'Sie (she) __ ein Buch. (lesen)', answer: 'liest' },
      { type: 'multiple-choice', q: '"die Tasche" → pronoun?', options: ['er','sie','es'], answer: 'sie' },
      { type: 'fill-blank', sentence: '🔢 53 = __', answer: 'dreiundfünfzig' },
      { type: 'multiple-choice', q: 'Where does the verb sit in a main sentence?',
        options: ['Position 1','Position 2','At the end','Anywhere'], answer: 'Position 2' },
      { type: 'multiple-choice', q: 'Pick the natural German for "I am hungry":',
        options: ['Ich bin Hunger.','Ich habe Hunger.','Ich bin hungrig haben.','Ich Hunger.'], answer: 'Ich habe Hunger.' },
      { type: 'fill-blank', sentence: '🛠 Wir + spielen + 🕒 am Wochenende + 🔄 oft + 🎯 Fußball → __',
        answer: 'Wir spielen am Wochenende oft Fußball' },
    ],
  },

  /* ===================== WEEK 3: numbers + Akkusativ ===================== */
  {
    id: 18, week: 3,
    vocabLayout: 'spotlight',
    title: 'Numbers 100–1000',
    titleDe: 'Zahlen 100–1000',
    emoji: '🧮',
    objective: 'Read and write any 3-digit number (and the year you were born) using ONE Lego rule: hundred + (units-flip + tens), all one word.',
    intro: 'Three-digit numbers are just Lego. Take the hundreds multiplier, glue on "hundert", then add the Day-2 flip number for everything below 100. 365 = drei-hundert-fünf-und-sechzig. Once you can do that, years and prices come free.',
    vocabulary: [
      // 💯 THE HUNDREDS — multiplier + hundert, ALL one word
      { de: 'hundert',          en: '100',  emoji: '💯', hint: 'either "hundert" or "einhundert" · the "ein" is optional', example: 'Ich habe hundert Euro.',                  exampleEn: 'I have one hundred euros.' },
      { de: 'einhundert',       en: '100',  emoji: '1️⃣', hint: 'explicit form · for phone-clarity ("one hundred")',     example: 'Einhundert, bitte! (am Telefon)',         exampleEn: 'One hundred, please! (on the phone)' },
      { de: 'zweihundert',      en: '200',  emoji: '2️⃣', hint: 'zwei + hundert · one word, no space',                    example: 'Die Reise kostet zweihundert Euro.',      exampleEn: 'The trip costs two hundred euros.' },
      { de: 'dreihundert',      en: '300',  emoji: '3️⃣', hint: 'drei + hundert',                                          example: 'Das Buch hat dreihundert Seiten.',        exampleEn: 'The book has three hundred pages.' },
      { de: 'vierhundert',      en: '400',  emoji: '4️⃣', hint: 'vier + hundert',                                          example: 'Vierhundert Studenten lernen Deutsch.',   exampleEn: 'Four hundred students are learning German.' },
      { de: 'fünfhundert',      en: '500',  emoji: '5️⃣', hint: 'fünf + hundert',                                          example: 'Ich habe fünfhundert Euro im Geldbeutel.', exampleEn: 'I have five hundred euros in my wallet.' },
      { de: 'sechshundert',     en: '600',  emoji: '6️⃣', hint: '⚠ sechs keeps its full -s here',                          example: 'Sechshundert Personen waren im Konzert.', exampleEn: 'Six hundred people were at the concert.' },
      { de: 'siebenhundert',    en: '700',  emoji: '7️⃣', hint: '⚠ sieben keeps its full -en here',                        example: 'Siebenhundert Meter sind es bis dorthin.', exampleEn: 'It is seven hundred metres to there.' },
      { de: 'achthundert',      en: '800',  emoji: '8️⃣', hint: 'acht + hundert',                                          example: 'Achthundert Euro pro Monat — Miete.',     exampleEn: 'Eight hundred euros per month — rent.' },
      { de: 'neunhundert',      en: '900',  emoji: '9️⃣', hint: 'neun + hundert',                                          example: 'Neunhundert Kilometer nach Berlin.',      exampleEn: 'Nine hundred kilometres to Berlin.' },
      { de: 'tausend',          en: '1 000', emoji: '🔟', hint: 'either "tausend" or "eintausend" · same Lego rule',     example: 'Tausend Dank! (idiom)',                    exampleEn: 'A thousand thanks! (= many thanks)' },

      // 🧮 THE FORMULA IN ACTION — 3-digit Lego examples (every one a worked sentence)
      { de: 'hundertfünfundzwanzig',     en: '125', emoji: '🧮', hint: '⭐ hundert + 25 (fünf-UND-zwanzig)',         example: 'Hundertfünfundzwanzig Euro, bitte.',          exampleEn: 'One hundred twenty-five euros, please.' },
      { de: 'zweihundertvierunddreißig', en: '234', emoji: '🧮', hint: '⭐ zweihundert + 34 (vier-UND-dreißig)',     example: 'Zweihundertvierunddreißig Seiten lang.',      exampleEn: 'Two hundred thirty-four pages long.' },
      { de: 'dreihundertfünfundsechzig', en: '365', emoji: '📅', hint: '⭐ dreihundert + 65 · days in a year!',      example: 'Ein Jahr hat dreihundertfünfundsechzig Tage.', exampleEn: 'A year has three hundred sixty-five days.' },
      { de: 'sechshundertachtundsiebzig',en: '678', emoji: '🧮', hint: 'sechshundert + 78',                          example: 'Sechshundertachtundsiebzig Personen.',         exampleEn: 'Six hundred seventy-eight people.' },
      { de: 'neunhundertneunundneunzig', en: '999', emoji: '🔢', hint: 'all-9s · the biggest 3-digit',               example: 'Das Handy kostet neunhundertneunundneunzig Euro.', exampleEn: 'The phone costs nine hundred ninety-nine euros.' },

      // 📅 YEAR-READING — the special trick
      { de: 'neunzehnhundertneunundachtzig', en: '1989 (year)', emoji: '📅', hint: '⭐ pre-2000 years = "neunzehnhundert" + last two', example: 'Die Mauer fiel neunzehnhundertneunundachtzig.', exampleEn: 'The Wall fell in 1989.' },
      { de: 'zweitausend',                   en: '2000 (year)', emoji: '📅', hint: '⭐ 2000+ years = "zweitausend" + units',          example: 'Im Jahr zweitausend war ich klein.',           exampleEn: 'In the year 2000 I was small.' },
      { de: 'zweitausendvierundzwanzig',     en: '2024 (year)', emoji: '📅', hint: 'zweitausend + vier-und-zwanzig',                  example: 'Wir sind im Jahr zweitausendvierundzwanzig.',  exampleEn: 'We are in the year 2024.' },

      // 💶 PRICE & SHOP phrases — the immediate payoff
      { de: 'das kostet',     en: 'that costs',         emoji: '💰', hint: 'formal price answer',                          example: 'Das kostet hundertfünfzig Euro.',     exampleEn: 'That costs one hundred fifty euros.' },
      { de: 'das macht',      en: 'that comes to',      emoji: '🧾', hint: 'casual checkout phrase · "that\'s …"',         example: 'Das macht zweihundert Euro.',         exampleEn: 'That comes to two hundred euros.' },
      { de: 'pro Monat',      en: 'per month',          emoji: '🗓️', hint: 'rent / salary context',                        example: 'Achthundert Euro pro Monat — Miete.', exampleEn: 'Eight hundred euros per month — rent.' },
      { de: 'pro Jahr',       en: 'per year',           emoji: '📆', hint: 'salary / subscription',                        example: 'Zweitausend Euro pro Jahr.',          exampleEn: 'Two thousand euros per year.' },

      // 🔢 SUPPORT WORDS — number helpers
      { de: 'die Zahl',       en: 'the number (digit)', emoji: '🔢', hint: 'math / counting · "the number itself"',         example: 'Die Zahl hundert ist rund.',          exampleEn: 'The number one hundred is round.' },
      { de: 'die Nummer',     en: 'the number (ID)',   emoji: '☎️', hint: 'phone, room, house number · an identifier',      example: 'Meine Nummer ist 30 25.',             exampleEn: 'My number is 30 25.' },
      { de: 'ungefähr',       en: 'about / roughly',    emoji: '〜', hint: 'softens the number · "around …"',               example: 'Ungefähr hundert Personen.',           exampleEn: 'About one hundred people.' },
      { de: 'genau',          en: 'exactly',            emoji: '🎯', hint: 'hardens the number · "precisely"',              example: 'Genau dreihundert Euro.',              exampleEn: 'Exactly three hundred euros.' },
    ],
    grammar: [
      { rule: '⭐ THE 3-DIGIT FORMULA — one Lego rule for ALL 3-digit numbers',
        body:
          'Read it like Lego — biggest unit first, all glued into ONE word:\n\n' +
          '  multiplier-hundert + (units-UND-tens)\n\n' +
          'Worked examples (the underscores show the Lego seams):\n\n' +
          '  125 = ein_hundert + fünf_und_zwanzig   → hundertfünfundzwanzig\n' +
          '  234 = zwei_hundert + vier_und_dreißig  → zweihundertvierunddreißig\n' +
          '  365 = drei_hundert + fünf_und_sechzig  → dreihundertfünfundsechzig\n' +
          '  678 = sechs_hundert + acht_und_siebzig → sechshundertachtundsiebzig\n' +
          '  999 = neun_hundert + neun_und_neunzig  → neunhundertneunundneunzig\n\n' +
          '🧠 The "und" only appears INSIDE the tens-units flip (fünf-und-zwanzig). NEVER between the hundreds and the rest.\n' +
          '  hundertfünfundzwanzig ✓\n' +
          '  hundert und fünfundzwanzig ✗',
      },
      { rule: '⭐ HUNDREDS & THOUSANDS — same Lego rule, all one word',
        body:
          'Hundreds (multiplier + hundert):\n' +
          '  100 = (ein)hundert     500 = fünfhundert\n' +
          '  200 = zweihundert      600 = sechshundert  ⚠ keeps full -s\n' +
          '  300 = dreihundert      700 = siebenhundert ⚠ keeps full -en\n' +
          '  400 = vierhundert      900 = neunhundert\n\n' +
          'Thousands work the same way (multiplier + tausend):\n' +
          '  1 000 = (ein)tausend\n' +
          '  2 000 = zweitausend\n' +
          '  10 000 = zehntausend\n' +
          '  1 234 = ein_tausend + zwei_hundert + vier_und_dreißig → eintausendzweihundertvierunddreißig\n\n' +
          '🧠 Spelling traps to memorise: only 16 (sechzehn) and 60 (sechzig) drop the -s of sechs. In sechshundert (600) the -s comes BACK because of the linking position. Same for 70: 17 (siebzehn) / 70 (siebzig) drop the -en — but siebenhundert (700) keeps it.',
      },
      { rule: '⭐ READING YEARS — the German shortcut',
        body:
          'German has TWO ways to read a year, depending on the century:\n\n' +
          '  📅 1100 – 1999 → "<XX>hundert + <YY>"  (read as HUNDREDS, not thousands)\n' +
          '    1989 = neunzehnhundert + neunundachtzig\n' +
          '         = neunzehnhundertneunundachtzig\n' +
          '    1492 = vierzehnhundertzweiundneunzig\n' +
          '    1900 = neunzehnhundert\n\n' +
          '  📅 2000 +     → "zweitausend + units"  (normal thousands rule)\n' +
          '    2000 = zweitausend\n' +
          '    2024 = zweitausendvierundzwanzig\n' +
          '    2026 = zweitausendsechsundzwanzig\n\n' +
          '⚠ English speakers default to "twenty twenty-four" (= zwanzig vierundzwanzig). That sounds wrong in German — use the thousands form. The neunzehnhundert trick is only for years STARTING with 11–19.',
      },
      { rule: '💶 PRICES — putting big numbers to work',
        body:
          'The two checkout phrases you\'ll hear daily:\n\n' +
          '  Q: Wie viel kostet das?       (formal · written prices)\n' +
          '  A: Das kostet 199 Euro.       — Das kostet hundertneunundneunzig Euro.\n\n' +
          '  Q: Was kostet das?            (casual)\n' +
          '  A: Das macht 25 Euro fünfzig. — Das macht fünfundzwanzig Euro fünfzig.\n\n' +
          'Speaking tip: cents are usually dropped if they\'re ,00. Otherwise just say the cent number after Euro — "fünfundzwanzig Euro fünfzig" is enough; the word "Cent" is optional.\n\n' +
          'Number-softeners + hardeners:\n' +
          '  ungefähr hundert Euro  — about €100\n' +
          '  genau hundert Euro     — exactly €100\n' +
          '  ca. hundert Euro       — circa €100 (very common in writing)',
      },
      { rule: '🚦 PITFALLS & SPOKEN SHORTCUTS',
        body:
          '• ONE WORD always. "zweihundertvierunddreißig" — no spaces, no hyphens. The flip "und" is the only "und" in the whole number.\n' +
          '• "ein" is optional at the start of round hundreds/thousands: hundert ≈ einhundert · tausend ≈ eintausend. In speech the short forms win; in writing or for phone-clarity, use the full einhundert / eintausend.\n' +
          '• ⚠ Never insert "und" between hundreds and the rest. hundert und fünf ✗ → hundertfünf ✓.\n' +
          '• 16 / 60 drop the -s of sechs (sechzehn · sechzig), but 600 (sechshundert) keeps the full sechs. Same for 17 / 70 vs 700.\n' +
          '• German uses , for decimals and . for thousands — opposite of English. 1.234,56 € is "one thousand two hundred thirty-four euros fifty-six".\n' +
          '• Years 1100-1999: read as "neunzehnhundert + last two", NOT as four digits in pairs.\n' +
          '• Phone / room / house numbers use "Nummer", not "Zahl". "Welche Nummer hast du?" not "Welche Zahl?".',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — numeral→word · year→spoken · price-phrase→meaning
      { type: 'match',
        pairs: [
          { de: '100',  en: 'hundert' },
          { de: '200',  en: 'zweihundert' },
          { de: '500',  en: 'fünfhundert' },
          { de: '600',  en: 'sechshundert' },
          { de: '700',  en: 'siebenhundert' },
          { de: '1000', en: 'tausend' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: '1989 (year)', en: 'neunzehnhundertneunundachtzig' },
          { de: '1900 (year)', en: 'neunzehnhundert' },
          { de: '2000 (year)', en: 'zweitausend' },
          { de: '2024 (year)', en: 'zweitausendvierundzwanzig' },
          { de: '1492 (year)', en: 'vierzehnhundertzweiundneunzig' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'Das kostet …',       en: '💰 formal price answer' },
          { de: 'Das macht …',         en: '🧾 casual checkout total' },
          { de: 'pro Monat',           en: '🗓️ rent / salary unit' },
          { de: 'pro Jahr',            en: '📆 yearly subscription / salary' },
          { de: 'ungefähr',            en: '〜 about / roughly' },
          { de: 'genau',               en: '🎯 exactly' },
        ],
      },

      // ⭐ 7 BUILD-THE-NUMBER fill-blanks (the formula in action)
      { type: 'fill-blank', sentence: '125 = ein__fünfundzwanzig', answer: 'hundert',
        explain: 'hundert is the Lego brick between 100 and the flip-number.' },
      { type: 'fill-blank', sentence: '234 = zweihundert__unddreißig (4 = vier · flipped before 30)', answer: 'vier' },
      { type: 'fill-blank', sentence: '365 = __hundertfünfundsechzig', answer: 'drei' },
      { type: 'fill-blank', sentence: '678 = sechshundert__undsiebzig', answer: 'acht' },
      { type: 'fill-blank', sentence: '999 = neunhundert__undneunzig', answer: 'neun' },
      { type: 'fill-blank', sentence: '500 = __hundert', answer: 'fünf' },
      { type: 'fill-blank', sentence: '1 000 = __', answer: 'tausend' },

      // ⭐ 3 HUNDREDS / FORMULA MCQs
      { type: 'multiple-choice', q: '365 = ?',
        options: ['dreihundertsechsundfünfzig','dreihundertfünfundsechzig','sechsdreihundertfünfzig','dreihundertfünf'],
        answer: 'dreihundertfünfundsechzig',
        explain: 'drei-hundert + fünf-und-sechzig. The flip "und" is the only und in the whole number.' },
      { type: 'multiple-choice', q: '600 = ?',
        options: ['sechzighundert','sechshundert','sechshundertzwanzig','sechszehnhundert'],
        answer: 'sechshundert',
        explain: 'sechs keeps its full -s in front of hundert (unlike sechzehn / sechzig).' },
      { type: 'multiple-choice', q: '999 = ?',
        options: ['neunhundertneunzigundneun','neunhundertneunundneunzig','neunzighundertneunundneunzig','neunhundertundneunundneunzig'],
        answer: 'neunhundertneunundneunzig' },

      // 📅 3 YEAR-READING MCQs
      { type: 'multiple-choice', q: '📅 The year 1989 in spoken German:',
        options: ['eintausendneunhundertneunundachtzig','neunzehnhundertneunundachtzig','neunzehnachtundneunzig','neunzehnneunundachtzig'],
        answer: 'neunzehnhundertneunundachtzig',
        explain: 'Pre-2000 years use the "neunzehnhundert + last two" shortcut.' },
      { type: 'multiple-choice', q: '📅 The year 2024 in spoken German:',
        options: ['zwanzigvierundzwanzig','zweitausendundvierundzwanzig','zweitausendvierundzwanzig','zwei_null_zwei_vier'],
        answer: 'zweitausendvierundzwanzig',
        explain: '2000+ years use the normal thousands rule — no und between tausend and the flip.' },
      { type: 'multiple-choice', q: '📅 The year 1900 in spoken German:',
        options: ['eintausendneunhundert','neunzehnhundert','neunzehn','neunzehntausend'],
        answer: 'neunzehnhundert' },

      // ⚠ 3 SPOT-THE-ERROR MCQs (one-word, no und, sechs-trap)
      { type: 'multiple-choice', q: '⚠ WRONG spelling for 145:',
        options: ['hundertfünfundvierzig','einhundertfünfundvierzig','hundert und fünfundvierzig','einhundertfünfundvierzig'],
        answer: 'hundert und fünfundvierzig',
        explain: 'Never insert "und" between hundreds and the rest. The "und" only lives inside the flip.' },
      { type: 'multiple-choice', q: '⚠ WRONG spelling for 600:',
        options: ['sechshundert','sechzighundert','sechs hundert','seclhundert'],
        answer: 'sechzighundert',
        explain: 'sechzig = 60, not 600. 600 = sechshundert (sechs keeps its -s).' },
      { type: 'multiple-choice', q: '⚠ WRONG: how German writes 1 234.56:',
        options: ['1.234,56','1,234.56','1234,56','1 234,56'],
        answer: '1,234.56',
        explain: 'German uses . for thousands and , for decimals. English does the opposite.' },

      // 💶 2 PRICE-PHRASE MCQs
      { type: 'multiple-choice', q: 'Casual checkout total: "__ 25 Euro 50."',
        options: ['Das kostet','Das macht','Das hat','Das ist'],
        answer: 'Das macht',
        explain: '"Das macht …" is the standard checkout phrase. "Das kostet" works too but sounds more formal.' },
      { type: 'multiple-choice', q: 'About €100 (softened):',
        options: ['genau hundert Euro','ungefähr hundert Euro','sicher hundert Euro','klar hundert Euro'],
        answer: 'ungefähr hundert Euro' },

      // 💬 Mini dialogue — shopping scenario sweeping 3-digit prices, "das macht", years
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Guten Tag! Wie viel kostet diese Tasche?',                 en: 'Good day! How much does this bag cost?' },
        { speaker: 'B', de: 'Die kostet hundertfünfundzwanzig Euro.',                   en: 'It costs one hundred twenty-five euros.' },
        { speaker: 'A', de: 'Und das Buch?',                                            en: 'And the book?' },
        { speaker: 'B', de: 'Das Buch macht achtzehn Euro fünfzig.',                    en: 'The book comes to eighteen euros fifty.' },
        { speaker: 'A', de: 'Ich nehme beides. Was macht das zusammen?',                en: 'I\'ll take both. What does that come to together?' },
        { speaker: 'B', de: 'Das macht hundertdreiundvierzig Euro fünfzig.',            en: 'That comes to one hundred forty-three euros fifty.' },
        { speaker: 'A', de: 'Hier sind hundertfünfzig Euro.',                           en: 'Here is one hundred fifty euros.' },
        { speaker: 'B', de: 'Danke. Sechs Euro fünfzig zurück. Schönen Tag!',           en: 'Thank you. Six euros fifty back. Have a good day!' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: '1000 = __', answer: 'tausend' },
      { type: 'multiple-choice', q: '234 = ?',
        options: ['zweihundertdreiundvierzig','zweihundertvierunddreißig','zweihundertvierzigdrei','zwanzigvierunddreißig'],
        answer: 'zweihundertvierunddreißig',
        explain: 'zwei-hundert + vier-und-dreißig.' },
      { type: 'multiple-choice', q: '📅 The year 2026 in spoken German:',
        options: ['zwanzigsechsundzwanzig','zweitausendsechsundzwanzig','zweitausendundsechsundzwanzig','sechsundzwanzighundert'],
        answer: 'zweitausendsechsundzwanzig' },
      { type: 'multiple-choice', q: '⚠ Which number is spelled WRONG?',
        options: ['hundertfünfundzwanzig','dreihundert','hundert und fünf','zweitausend'],
        answer: 'hundert und fünf',
        explain: 'No "und" between hundreds and the rest — should be "hundertfünf".' },
      { type: 'multiple-choice', q: '600 = ?',
        options: ['sechshundert','sechzighundert','sechzehnhundert','sechshundertzig'],
        answer: 'sechshundert' },
      { type: 'fill-blank', sentence: 'Casual checkout: "Das __ zwölf Euro fünfzig."', answer: 'macht' },
      { type: 'fill-blank', sentence: 'About €500 (softened): "__ fünfhundert Euro"', answer: 'ungefähr' },
    ],
  },

  {
    id: 21, week: 3,
    vocabLayout: 'spotlight',
    title: 'Akkusativ — masculine flips',
    titleDe: 'Akkusativ (m)',
    emoji: '➡️',
    objective: 'Master the FIRST case change: when a masculine noun receives the action, der → den and ein → einen. Everything else (f / n / pl) stays the same.',
    intro: 'Welcome to the German case system! Until now articles never changed. From here, the article shows a noun\'s JOB in the sentence. The good news for the Akkusativ (the "receiving" case): only the MASCULINE article flips — der → den, ein → einen. Feminine, neuter and plural look exactly the same as before. Learn this one flip and you\'ve cracked 90 % of the accusative.',
    vocabulary: [
      // ➡️ THE CORE FLIP — der → den (the ONLY definite article that changes)
      { de: 'der Mann → den Mann',     en: 'the man (subject → object)',  emoji: '👨', hint: '⭐ THE flip · der → den when it RECEIVES',     example: 'Ich sehe den Mann.',          exampleEn: 'I see the man.' },
      { de: 'der Tisch → den Tisch',   en: 'the table',                   emoji: '🪑', hint: 'masc · der → den',                          example: 'Wir kaufen den Tisch.',       exampleEn: 'We are buying the table.' },
      { de: 'der Kaffee → den Kaffee', en: 'the coffee',                  emoji: '☕', hint: 'masc · der → den',                          example: 'Ich trinke den Kaffee.',      exampleEn: 'I drink the coffee.' },
      { de: 'der Hund → den Hund',     en: 'the dog',                     emoji: '🐕', hint: 'masc · der → den',                          example: 'Sie hat den Hund.',           exampleEn: 'She has the dog.' },
      { de: 'der Apfel → den Apfel',   en: 'the apple',                   emoji: '🍎', hint: 'masc · der → den',                          example: 'Er isst den Apfel.',          exampleEn: 'He eats the apple.' },

      // 🅰️ INDEFINITE FLIP — ein → einen (the +en is the giveaway)
      { de: 'ein Mann → einen Mann',   en: 'a man',                       emoji: '👤', hint: '⭐ ein → einen · the -EN ending = Akk masc', example: 'Ich kenne einen Mann.',       exampleEn: 'I know a man.' },
      { de: 'ein Tisch → einen Tisch', en: 'a table',                     emoji: '🪑', hint: 'ein → einen',                                example: 'Wir brauchen einen Tisch.',   exampleEn: 'We need a table.' },
      { de: 'ein Hund → einen Hund',   en: 'a dog',                       emoji: '🐶', hint: 'ein → einen',                                example: 'Er hat einen Hund.',          exampleEn: 'He has a dog.' },

      // 🚫 KEIN / MEIN flip — same -en ending (preview of the pattern)
      { de: 'kein Mann → keinen Mann', en: 'no man',                      emoji: '🚫', hint: 'kein follows ein → keinen (masc Akk)',      example: 'Ich habe keinen Hund.',       exampleEn: 'I have no dog.' },
      { de: 'mein Bruder → meinen Bruder', en: 'my brother',             emoji: '👬', hint: 'mein follows ein → meinen (masc Akk)',      example: 'Ich besuche meinen Bruder.',  exampleEn: 'I am visiting my brother.' },

      // ✅ NO-CHANGE GROUP — f / n / pl look identical (the relief)
      { de: 'die Frau (= die Frau)',   en: 'the woman (f · NO change)',   emoji: '👩', hint: '✅ feminine die → die (unchanged!)',         example: 'Ich sehe die Frau.',          exampleEn: 'I see the woman.' },
      { de: 'das Kind (= das Kind)',   en: 'the child (n · NO change)',   emoji: '🧒', hint: '✅ neuter das → das (unchanged!)',           example: 'Ich sehe das Kind.',          exampleEn: 'I see the child.' },
      { de: 'die Kinder (= die Kinder)', en: 'the children (pl · NO change)', emoji: '👨‍👩‍👧', hint: '✅ plural die → die (unchanged!)',    example: 'Ich sehe die Kinder.',        exampleEn: 'I see the children.' },
      { de: 'eine Tasche (= eine Tasche)', en: 'a bag (f · NO change)',   emoji: '👜', hint: '✅ eine → eine (unchanged!)',               example: 'Ich kaufe eine Tasche.',      exampleEn: 'I am buying a bag.' },

      // 🎬 AKKUSATIV-TRIGGER VERBS — these take a direct object
      { de: 'sehen',     en: 'to see',                emoji: '👀', hint: 'classic Akk verb · "Ich sehe den …"',     example: 'Ich sehe den Bus.',           exampleEn: 'I see the bus.' },
      { de: 'haben',     en: 'to have',               emoji: '✋', hint: '🔁 Day 6 · always takes Akk',              example: 'Ich habe einen Termin.',      exampleEn: 'I have an appointment.' },
      { de: 'kaufen',    en: 'to buy',                emoji: '🛒', hint: 'buy WHAT? → Akk object',                   example: 'Sie kauft den Laptop.',       exampleEn: 'She buys the laptop.' },
      { de: 'brauchen',  en: 'to need',               emoji: '🙏', hint: 'need WHAT? → Akk object',                  example: 'Ich brauche einen Stift.',    exampleEn: 'I need a pen.' },
      { de: 'besuchen',  en: 'to visit',              emoji: '🚪', hint: 'visit WHOM? → Akk object',                 example: 'Wir besuchen den Lehrer.',    exampleEn: 'We visit the teacher.' },
      { de: 'essen',     en: 'to eat',                emoji: '🍽️', hint: '🔁 Day 11 stem-changer · eat WHAT? → Akk', example: 'Er isst den Apfel.',          exampleEn: 'He eats the apple.' },
      { de: 'trinken',   en: 'to drink',              emoji: '🥤', hint: 'drink WHAT? → Akk object',                 example: 'Ich trinke den Tee.',         exampleEn: 'I drink the tea.' },
      { de: 'nehmen',    en: 'to take',               emoji: '🤲', hint: '🔁 Day 11 stem-changer · take WHAT? → Akk', example: 'Ich nehme den Bus.',          exampleEn: 'I take the bus.' },
    ],
    grammar: [
      { rule: '⭐ WHAT IS THE AKKUSATIV? — the "receiving" case',
        body:
          'German marks a noun\'s JOB with its article. Two jobs so far:\n\n' +
          '  🟦 NOMINATIV (subject) — the DOER of the action.\n' +
          '  🟩 AKKUSATIV (direct object) — the THING/PERSON receiving the action.\n\n' +
          'Worked example — "The man sees the dog":\n' +
          '  Der Mann   sieht   den Hund.\n' +
          '  └ subject ┘        └ object ┘\n' +
          '  (Nominativ)        (Akkusativ → der flipped to den)\n\n' +
          'The man DOES the seeing (stays der). The dog RECEIVES it (der → den). Flip the meaning and the articles flip too: "Den Mann sieht der Hund" = the DOG sees the man.',
      },
      { rule: '⭐ THE ONE RULE — only MASCULINE changes',
        body:
          'This is the whole lesson. In the Akkusativ, ONLY the masculine article changes:\n\n' +
          '            NOMINATIV  →  AKKUSATIV\n' +
          '  masc.  m   der        →  den        ⭐ THE flip\n' +
          '             ein        →  einen      ⭐ +en\n' +
          '  fem.   f   die        →  die        ✅ same\n' +
          '             eine       →  eine       ✅ same\n' +
          '  neut.  n   das        →  das        ✅ same\n' +
          '             ein        →  ein        ✅ same\n' +
          '  plur.  pl  die        →  die        ✅ same\n\n' +
          '🧠 Memory hook: "der → den, ein → einen — everything else stays the same." Feminine, neuter and plural give you a free pass.',
      },
      { rule: '⭐ THE 5-SECOND TEST — Wer/Was vs Wen/Was',
        body:
          'To find which noun is the object, ask the verb a question:\n\n' +
          '  WER / WAS + verb?  → the answer is the SUBJECT (Nominativ)\n' +
          '  WEN / WAS + verb?  → the answer is the OBJECT  (Akkusativ)\n\n' +
          'Sentence: "Ich kaufe den Tisch."\n' +
          '  Wer kauft?  → Ich.        (subject)\n' +
          '  Wen/Was kaufe ich? → den Tisch.   (object → Akkusativ → der became den)\n\n' +
          '"Wen" literally means "whom" — German kept the -m/-n ending English mostly dropped. If "whom/what" fits the slot, that noun is in the Akkusativ.',
      },
      { rule: '🚫 kein / mein / dein all follow "ein"',
        body:
          'Any word built on the "ein"-pattern takes the SAME masculine -en ending in the Akkusativ:\n\n' +
          '  ein   → einen     Ich habe einen Hund.\n' +
          '  kein  → keinen    Ich habe keinen Hund.   (no dog)\n' +
          '  mein  → meinen    Ich besuche meinen Bruder.\n' +
          '  dein  → deinen    Ich sehe deinen Vater.\n' +
          '  sein  → seinen / ihr → ihren / unser → unseren …\n\n' +
          'They are called "ein-words" for exactly this reason — learn the ein → einen flip and they ALL come free. (Feminine/neuter/plural of these stay unchanged too: meine / mein / meine.)',
      },
      { rule: '🎬 WHICH VERBS TRIGGER IT? — the action-on-a-thing verbs',
        body:
          'Most everyday verbs take an Akkusativ object — the thing being acted on:\n\n' +
          '  sehen (see) · haben (have) · kaufen (buy) · brauchen (need) ·\n' +
          '  besuchen (visit) · essen (eat) · trinken (drink) · nehmen (take) ·\n' +
          '  lesen (read) · suchen (look for) · finden (find) · machen (do)\n\n' +
          '⚠ EXCEPTION — "sein" (to be) takes NO object, it takes Nominativ on BOTH sides:\n' +
          '  "Er ist ein Lehrer." (NOT einen) — sein is an equals-sign, not an action.\n' +
          '  Compare: "Er hat einen Hund" (haben → Akk) vs "Das ist ein Hund" (sein → Nom).',
      },
      { rule: '🚦 PITFALLS — the masculine traps',
        body:
          '• The flip is INVISIBLE on f / n / pl — "Ich sehe die Frau / das Kind / die Kinder" never change. Don\'t over-correct them.\n' +
          '• It only happens to the OBJECT. The subject masculine stays der: "Der Hund sieht den Mann."\n' +
          '• -en ending is the masculine Akk fingerprint: einen / keinen / meinen / deinen all end -en.\n' +
          '• sein (to be) is the big exception — "Ich bin ein Mann" (Nom), never "einen".\n' +
          '• Weak masculine nouns (der Student, der Junge, der Herr, der Kollege) ALSO add -n/-en to the NOUN in the Akk: "Ich sehe den Studenten / den Jungen / den Herrn / den Kollegen." (A small advanced group — just notice it for now.)',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — Nom→Akk flip · gender→does-it-change · verb→object
      { type: 'match',
        pairs: [
          { de: 'der Mann',  en: 'den Mann (Akk)' },
          { de: 'ein Hund',  en: 'einen Hund (Akk)' },
          { de: 'mein Bruder', en: 'meinen Bruder (Akk)' },
          { de: 'kein Tisch', en: 'keinen Tisch (Akk)' },
          { de: 'die Frau',  en: 'die Frau (NO change)' },
          { de: 'das Kind',  en: 'das Kind (NO change)' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'masculine der',   en: '⭐ → den (CHANGES)' },
          { de: 'masculine ein',   en: '⭐ → einen (CHANGES)' },
          { de: 'feminine die/eine', en: '✅ stays the same' },
          { de: 'neuter das/ein',  en: '✅ stays the same' },
          { de: 'plural die',      en: '✅ stays the same' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'Wer / Was …?', en: '🟦 finds the SUBJECT (Nominativ)' },
          { de: 'Wen / Was …?', en: '🟩 finds the OBJECT (Akkusativ)' },
          { de: 'haben / kaufen / sehen', en: '🎬 take an Akk object' },
          { de: 'sein (to be)', en: '⚠ takes Nominativ on both sides' },
        ],
      },

      // ⭐ 6 MASCULINE-FLIP fill-blanks (der → den, ein → einen)
      { type: 'fill-blank', sentence: 'Ich sehe __ Mann. (the, masc.)', answer: 'den' },
      { type: 'fill-blank', sentence: 'Wir kaufen __ Tisch. (a, masc.)', answer: 'einen' },
      { type: 'fill-blank', sentence: 'Er hat __ Hund. (a, masc.)', answer: 'einen' },
      { type: 'fill-blank', sentence: 'Der Freund besucht __ Student. (the, masc.)', answer: 'den' },
      { type: 'fill-blank', sentence: 'Ich besuche __ Bruder. (my, masc.)', answer: 'meinen' },
      { type: 'fill-blank', sentence: 'Ich habe __ Hund. (no, masc. — kein)', answer: 'keinen' },

      // ✅ 4 NO-CHANGE fill-blanks (f / n / pl stay identical)
      { type: 'fill-blank', sentence: 'Ich sehe __ Frau. (the, fem. — no change)', answer: 'die' },
      { type: 'fill-blank', sentence: 'Wir lesen __ Buch. (the, neuter — no change)', answer: 'das' },
      { type: 'fill-blank', sentence: 'Sie kauft __ Tasche. (a, fem. — no change)', answer: 'eine' },
      { type: 'fill-blank', sentence: 'Der Kollege besucht __ Freunde. (the, plural — no change)', answer: 'die', hint: 'die for plural Akk' },

      // ⭐ 3 WEN/WAS identification MCQs
      { type: 'multiple-choice', q: 'In "Der Hund sieht den Mann", what is in the Akkusativ?',
        options: ['Der Hund','sieht','den Mann','—'], answer: 'den Mann',
        explain: 'Wen sieht der Hund? → den Mann. The receiver is in the Akkusativ.' },
      { type: 'multiple-choice', q: 'In "Ich kaufe einen Tisch", which word is the SUBJECT?',
        options: ['Ich','kaufe','einen Tisch','Tisch'], answer: 'Ich',
        explain: 'Wer kauft? → Ich. The doer is the Nominativ subject.' },
      { type: 'multiple-choice', q: 'Which sentence has its masculine object correctly flipped?',
        options: ['Ich sehe der Mann.','Ich sehe den Mann.','Ich sehe dem Mann.','Ich sehe des Mannes.'],
        answer: 'Ich sehe den Mann.' },

      // ⚠ 3 SPOT-THE-ERROR MCQs (der-not-flipped · sein-exception · over-correcting f)
      { type: 'multiple-choice', q: '⚠ Which is WRONG?',
        options: ['Ich trinke den Kaffee.','Ich trinke der Kaffee.','Ich habe einen Hund.','Ich sehe den Mann.'],
        answer: 'Ich trinke der Kaffee.',
        explain: 'Kaffee is the object here → der must become den.' },
      { type: 'multiple-choice', q: '⚠ "He is a teacher." — pick the CORRECT German.',
        options: ['Er ist einen Lehrer.','Er ist ein Lehrer.','Er hat ein Lehrer.','Er ist den Lehrer.'],
        answer: 'Er ist ein Lehrer.',
        explain: 'sein (to be) takes Nominativ on both sides — never einen.' },
      { type: 'multiple-choice', q: '⚠ Which sentence OVER-corrects (changes something it should not)?',
        options: ['Ich sehe die Frau.','Ich sehe diene Frau.','Ich sehe das Kind.','Ich sehe die Kinder.'],
        answer: 'Ich sehe diene Frau.',
        explain: 'Feminine die does NOT change in the Akkusativ — and "diene" isn\'t a word. It stays "die Frau".' },

      // 💬 Mini dialogue — Akk objects across haben / kaufen / brauchen / sehen
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Was kaufst du heute?',                 en: 'What are you buying today?' },
        { speaker: 'B', de: 'Ich kaufe einen Tisch und eine Lampe.', en: 'I am buying a table and a lamp.' },
        { speaker: 'A', de: 'Brauchst du auch einen Stuhl?',         en: 'Do you also need a chair?' },
        { speaker: 'B', de: 'Nein, ich habe schon den Stuhl.',       en: 'No, I already have the chair.' },
        { speaker: 'A', de: 'Und siehst du den Laptop dort?',        en: 'And do you see the laptop there?' },
        { speaker: 'B', de: 'Ja! Ich nehme den Laptop auch.',        en: 'Yes! I\'ll take the laptop too.' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Er hat __ Hund. (a, masc.)', answer: 'einen' },
      { type: 'fill-blank', sentence: 'Ich sehe __ Mann. (the, masc.)', answer: 'den' },
      { type: 'fill-blank', sentence: 'Ich sehe __ Frau. (the, fem. — no change)', answer: 'die' },
      { type: 'multiple-choice', q: 'In "Ich kaufe den Tisch", which case is "den Tisch"?',
        options: ['Nominativ','Akkusativ','Dativ','Genitiv'], answer: 'Akkusativ' },
      { type: 'multiple-choice', q: 'Which question finds the Akkusativ object?',
        options: ['Wer/Was?','Wen/Was?','Wo?','Wann?'], answer: 'Wen/Was?' },
      { type: 'multiple-choice', q: '⚠ "He is a man." — correct German:',
        options: ['Er ist einen Mann.','Er ist ein Mann.','Er hat ein Mann.','Er ist den Mann.'],
        answer: 'Er ist ein Mann.', explain: 'sein → Nominativ on both sides.' },
      { type: 'fill-blank', sentence: 'Ich besuche __ Bruder. (my, masc. Akk)', answer: 'meinen' },
    ],
  },

  {
    id: 22, week: 4,
    vocabLayout: 'spotlight',
    title: 'Akkusativ — f / n / plural',
    titleDe: 'Akkusativ (f, n, pl)',
    emoji: '🔄',
    objective: 'Lock in the relief half of the Akkusativ: feminine, neuter and plural articles do NOT change — then practise deciding WHEN to flip and when to leave it alone.',
    intro: 'Day 21 taught the one flip (der → den). Today is the good-news day: feminine, neuter and plural articles look EXACTLY the same as direct objects as they do as subjects. die stays die, das stays das, eine stays eine. The real skill now is mixing genders in one sentence and flipping ONLY the masculine — so most drills here make you decide.',
    vocabulary: [
      // ✅ FEMININE — die / eine never change
      { de: 'die Tasche', en: 'the bag (f · NO change)',   emoji: '👜', hint: '✅ die → die · feminine never flips',       example: 'Ich kaufe die Tasche.',        exampleEn: 'I am buying the bag.' },
      { de: 'die Frau',     en: 'the woman (f · NO change)', emoji: '👩', hint: '✅ die → die',                              example: 'Ich sehe die Frau.',           exampleEn: 'I see the woman.' },
      { de: 'die Zeitung', en: 'the newspaper (f · NO change)', emoji: '📰', hint: '✅ die → die',                       example: 'Er liest die Zeitung.',        exampleEn: 'He reads the newspaper.' },
      { de: 'eine Idee',   en: 'an idea (f · NO change)',   emoji: '💡', hint: '✅ eine → eine',                            example: 'Ich habe eine Idee.',          exampleEn: 'I have an idea.' },
      { de: 'eine Frage', en: 'a question (f · NO change)', emoji: '❓', hint: '✅ eine → eine',                           example: 'Ich habe eine Frage.',         exampleEn: 'I have a question.' },

      // ✅ NEUTER — das / ein never change
      { de: 'das Buch',     en: 'the book (n · NO change)',  emoji: '📖', hint: '✅ das → das · neuter never flips',        example: 'Ich lese das Buch.',           exampleEn: 'I read the book.' },
      { de: 'das Handy',   en: 'the phone (n · NO change)', emoji: '📱', hint: '✅ das → das',                             example: 'Ich brauche das Handy.',       exampleEn: 'I need the phone.' },
      { de: 'das Auto',     en: 'the car (n · NO change)',   emoji: '🚗', hint: '✅ das → das',                             example: 'Wir kaufen das Auto.',         exampleEn: 'We are buying the car.' },
      { de: 'ein Brötchen', en: 'a bread roll (n · NO change)', emoji: '🥖', hint: '✅ ein → ein (NOT einen!)',        example: 'Ich esse ein Brötchen.',       exampleEn: 'I eat a bread roll.' },

      // ✅ PLURAL — die always stays die
      { de: 'die Bücher', en: 'the books (pl · NO change)', emoji: '📚', hint: '✅ plural die → die',                     example: 'Ich lese die Bücher.',         exampleEn: 'I read the books.' },
      { de: 'die Kinder', en: 'the children (pl · NO change)', emoji: '🧒', hint: '✅ plural die → die',                  example: 'Ich sehe die Kinder.',         exampleEn: 'I see the children.' },
      { de: 'die Freunde', en: 'the friends (pl · NO change)', emoji: '👥', hint: '✅ plural die → die',                 example: 'Ich besuche die Freunde.',     exampleEn: 'I visit the friends.' },

      // ⭐ THE CONTRAST — masculine DOES flip (so you stay sharp)
      { de: 'der Tisch → den Tisch',     en: 'the table (m · DOES flip)', emoji: '🪑', hint: '⚠ ONLY masculine flips · der → den',     example: 'Ich kaufe den Tisch.',         exampleEn: 'I am buying the table.' },
      { de: 'ein Hund → einen Hund',     en: 'a dog (m · DOES flip)',     emoji: '🐕', hint: '⚠ masc · ein → einen',                    example: 'Er hat einen Hund.',           exampleEn: 'He has a dog.' },

      // 🚫 EIN-WORDS in f / n / pl — keine / keine, meine / mein
      { de: 'keine Zeit', en: 'no time (f · NO change)',   emoji: '⏳', hint: '✅ keine → keine (feminine)',             example: 'Ich habe keine Zeit.',         exampleEn: 'I have no time.' },
      { de: 'keine Bücher', en: 'no books (pl · NO change)', emoji: '🚫', hint: '✅ keine → keine (plural)',          example: 'Ich habe keine Bücher.',       exampleEn: 'I have no books.' },
      { de: 'mein Auto',   en: 'my car (n · NO change)',    emoji: '🚙', hint: '✅ mein → mein (neuter, NOT meinen!)',   example: 'Ich nehme mein Auto.',         exampleEn: 'I take my car.' },
      { de: 'meine Tasche', en: 'my bag (f · NO change)', emoji: '👝', hint: '✅ meine → meine (feminine)',           example: 'Ich nehme meine Tasche.',      exampleEn: 'I take my bag.' },
    ],
    grammar: [
      { rule: '⭐ THE NO-CHANGE RULE — f / n / pl look identical',
        body:
          'In the Akkusativ, feminine, neuter and plural articles are EXACTLY the same as in the Nominativ. Nothing to memorise — just leave them alone:\n\n' +
          '            NOMINATIV  →  AKKUSATIV\n' +
          '  fem.   f   die        →  die        ✅ same\n' +
          '             eine       →  eine       ✅ same\n' +
          '  neut.  n   das        →  das        ✅ same\n' +
          '             ein        →  ein        ✅ same\n' +
          '  plur.  pl  die        →  die        ✅ same\n\n' +
          'Compare with the one that DOES change:\n' +
          '  masc.  m   der → den   ·   ein → einen   ⚠ the only flip\n\n' +
          '🧠 So in any sentence, scan for a MASCULINE object. If it\'s feminine, neuter or plural, you\'re already done.',
      },
      { rule: '⭐ THE FULL AKKUSATIV TABLE — all four genders at once',
        body:
          'Here is the entire definite + indefinite Akkusativ on one card. The masculine row is the ONLY one with an arrow:\n\n' +
          '          DEFINITE        INDEFINITE\n' +
          '  m   →   den  ⚠          einen ⚠\n' +
          '  f   →   die             eine\n' +
          '  n   →   das             ein\n' +
          '  pl  →   die             — (no plural "ein"; use keine / meine / plain noun)\n\n' +
          'Worked sentences (object underlined by the article):\n' +
          '  Ich sehe den Mann.   (m → den) ⚠\n' +
          '  Ich sehe die Frau.   (f → die)\n' +
          '  Ich sehe das Kind.   (n → das)\n' +
          '  Ich sehe die Kinder. (pl → die)',
      },
      { rule: '⚠ THE NEUTER TRAP — ein stays ein (never einen)',
        body:
          'The most common beginner mistake on this day: adding -en to a NEUTER "ein".\n\n' +
          '  Ich esse ein Brötchen.   ✓  (neuter → ein, no ending)\n' +
          '  Ich esse einen Brötchen. ✗  (that -en is masculine only!)\n\n' +
          'The -en ending is the masculine fingerprint and NOTHING else gets it:\n' +
          '  einen Apfel (m) ✓   ·   ein Brötchen (n) ✓   ·   eine Banane (f) ✓\n\n' +
          'Same for the ein-words: keinen/meinen are masculine only; neuter stays kein/mein, feminine becomes keine/meine.',
      },
      { rule: '⭐ MIXING GENDERS — the real skill',
        body:
          'Real sentences mix genders. Flip ONLY the masculine and leave the rest:\n\n' +
          '  "Ich kaufe einen Tisch (m) und eine Lampe (f)."\n' +
          '       → einen ⚠         → eine ✅\n\n' +
          '  "Er hat den Hund (m), das Auto (n) und die Bücher (pl)."\n' +
          '       → den ⚠   → das ✅   → die ✅\n\n' +
          'Decision routine for every object:\n' +
          '  1. What gender is the noun?\n' +
          '  2. Masculine? → flip (der→den / ein→einen).\n' +
          '  3. Feminine / neuter / plural? → leave it exactly as is.',
      },
      { rule: '🚦 PITFALLS — over-correcting the easy genders',
        body:
          '• Don\'t "fix" what isn\'t broken: die Frau / das Kind / die Kinder NEVER change in the Akk.\n' +
          '• ein Brötchen (n) and eine Banane (f) keep their plain forms — only der/ein masculine gets -en/den.\n' +
          '• Plural has no indefinite article: "Ich kaufe Bücher" (some books) or "keine Bücher" (no books) — never "einen Bücher".\n' +
          '• The flip depends on GENDER + JOB, not on the verb alone. Same verb, different object: "Ich sehe den Mann / die Frau."\n' +
          '• Remember the Day-21 contrast lives on: masculine subject also stays der — "Der Hund sieht die Frau."',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — gender→flip-or-not · article table · ein-word forms
      { type: 'match',
        pairs: [
          { de: 'die Tasche (f)', en: '✅ die (no change)' },
          { de: 'das Buch (n)',   en: '✅ das (no change)' },
          { de: 'die Kinder (pl)', en: '✅ die (no change)' },
          { de: 'der Tisch (m)',  en: '⚠ den (flips!)' },
          { de: 'ein Hund (m)',   en: '⚠ einen (flips!)' },
          { de: 'ein Brötchen (n)', en: '✅ ein (no change)' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'm definite',  en: 'den ⚠' },
          { de: 'f definite',  en: 'die ✅' },
          { de: 'n definite',  en: 'das ✅' },
          { de: 'pl definite', en: 'die ✅' },
          { de: 'm indefinite', en: 'einen ⚠' },
          { de: 'f indefinite', en: 'eine ✅' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'kein + Hund (m)',     en: 'keinen ⚠' },
          { de: 'kein + Zeit (f)',     en: 'keine ✅' },
          { de: 'mein + Auto (n)',     en: 'mein ✅' },
          { de: 'mein + Bruder (m)',   en: 'meinen ⚠' },
          { de: 'meine + Tasche (f)',  en: 'meine ✅' },
        ],
      },

      // ✅ 5 NO-CHANGE fill-blanks (f / n / pl)
      { type: 'fill-blank', sentence: 'Ich kaufe __ Tasche. (the, fem.)', answer: 'die' },
      { type: 'fill-blank', sentence: 'Wir lesen __ Buch. (the, neuter)', answer: 'das' },
      { type: 'fill-blank', sentence: 'Sie hat __ Bücher. (the, plural)', answer: 'die' },
      { type: 'fill-blank', sentence: 'Ich habe __ Idee. (an, fem.)', answer: 'eine' },
      { type: 'fill-blank', sentence: 'Ich esse __ Brötchen. (a, neuter — careful!)', answer: 'ein' },

      // ⭐ 5 MIXED-GENDER decide-the-flip fill-blanks
      { type: 'fill-blank', sentence: 'Ich kaufe __ Tisch. (a, masc. — flip!)', answer: 'einen' },
      { type: 'fill-blank', sentence: 'Ich kaufe __ Lampe. (a, fem. — no change)', answer: 'eine' },
      { type: 'fill-blank', sentence: 'Er hat __ Hund. (the, masc. — flip!)', answer: 'den' },
      { type: 'fill-blank', sentence: 'Er hat __ Auto. (the, neuter — no change)', answer: 'das' },
      { type: 'fill-blank', sentence: 'Ich nehme __ Tasche. (my, fem. — no change)', answer: 'meine' },

      // ⚠ 3 NEUTER-TRAP / over-correction MCQs
      { type: 'multiple-choice', q: '"I eat a bread roll." (Brötchen is neuter)',
        options: ['Ich esse einen Brötchen.','Ich esse ein Brötchen.','Ich esse eine Brötchen.','Ich esse den Brötchen.'],
        answer: 'Ich esse ein Brötchen.',
        explain: 'Neuter ein stays ein — the -en ending is masculine only.' },
      { type: 'multiple-choice', q: '⚠ Which is WRONG?',
        options: ['Ich sehe die Frau.','Ich sehe eine Frau.','Ich sehe einen Frau.','Ich sehe die Kinder.'],
        answer: 'Ich sehe einen Frau.',
        explain: 'Frau is feminine → eine, never einen.' },
      { type: 'multiple-choice', q: '"I have no time." (Zeit is feminine)',
        options: ['Ich habe keinen Zeit.','Ich habe keine Zeit.','Ich habe kein Zeit.','Ich habe keiner Zeit.'],
        answer: 'Ich habe keine Zeit.',
        explain: 'Feminine kein → keine (same -e as eine).' },

      // ⭐ 2 ALL-GENDERS-IN-ONE MCQs
      { type: 'multiple-choice', q: 'Pick the fully-correct sentence:',
        options: ['Ich habe einen Hund, eine Katze und ein Buch.','Ich habe ein Hund, einen Katze und einen Buch.','Ich habe einen Hund, einen Katze und ein Buch.','Ich habe den Hund, der Katze und das Buch.'],
        answer: 'Ich habe einen Hund, eine Katze und ein Buch.',
        explain: 'Hund (m)→einen ⚠ · Katze (f)→eine ✅ · Buch (n)→ein ✅.' },
      { type: 'multiple-choice', q: 'In "Ich kaufe die Bücher", what changed from the Nominativ?',
        options: ['die → den','die → die (nothing)','Bücher → Bücher','die → das'],
        answer: 'die → die (nothing)',
        explain: 'Plural die never changes in the Akkusativ.' },

      // 💬 Mini dialogue — mixed-gender objects, flipping only masculine
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Was brauchst du für die Wohnung?',           en: 'What do you need for the apartment?' },
        { speaker: 'B', de: 'Ich brauche einen Tisch und eine Lampe.',     en: 'I need a table and a lamp.' },
        { speaker: 'A', de: 'Hast du schon das Sofa?',                     en: 'Do you already have the sofa?' },
        { speaker: 'B', de: 'Ja, und ich habe auch die Stühle.',          en: 'Yes, and I also have the chairs.' },
        { speaker: 'A', de: 'Kaufst du ein Bett oder einen Schrank?',      en: 'Are you buying a bed or a wardrobe?' },
        { speaker: 'B', de: 'Ich kaufe ein Bett. Den Schrank habe ich schon.', en: 'I am buying a bed. I already have the wardrobe.' },
      ]},
    ],
    quiz: [
      { type: 'multiple-choice', q: '"Ich habe __ Idee." (a, fem.)', options: ['einen','eine','ein','einer'], answer: 'eine' },
      { type: 'fill-blank', sentence: 'Ich lese __ Buch. (the, neuter — no change)', answer: 'das' },
      { type: 'fill-blank', sentence: 'Sie kauft __ Bücher. (the, plural — no change)', answer: 'die' },
      { type: 'fill-blank', sentence: 'Ich kaufe __ Tisch. (a, masc. — flip!)', answer: 'einen' },
      { type: 'multiple-choice', q: '⚠ "I eat a bread roll." (Brötchen = neuter)',
        options: ['einen Brötchen','ein Brötchen','eine Brötchen','den Brötchen'], answer: 'ein Brötchen' },
      { type: 'multiple-choice', q: 'Which genders do NOT change in the Akkusativ?',
        options: ['masculine only','feminine, neuter & plural','all of them','none of them'], answer: 'feminine, neuter & plural' },
      { type: 'fill-blank', sentence: 'Ich habe __ Zeit. (no, fem.)', answer: 'keine' },
    ],
  },

  {
    id: 23, week: 4,
    vocabLayout: 'spotlight',
    title: 'Nominativ vs Akkusativ',
    titleDe: 'Nominativ vs Akkusativ',
    emoji: '⚖️',
    objective: 'Decide in one second whether a noun is the subject (Nominativ) or the object (Akkusativ) — and understand why German can move words around without losing the meaning.',
    intro: 'You now know the two cases (Day 21 masculine flip, Day 22 the no-change genders). Today you put them head-to-head: who DOES the action vs who RECEIVES it. The article tag is what makes German flexible — because "den" already marks the object, German can even put the object FIRST and the meaning still holds. Master the Wer/Wen test and you own both cases.',
    vocabulary: [
      // ⚖️ THE TWO ROLES — name them
      { de: 'der Nominativ', en: 'the subject case (the DOER)',     emoji: '🟦', hint: '🔁 Day 9 · Wer/Was? · stays der/die/das',      example: 'Der Mann schläft. (Mann = Nominativ)',  exampleEn: 'The man sleeps. (man = subject)' },
      { de: 'der Akkusativ', en: 'the object case (the RECEIVER)',  emoji: '🟩', hint: '🔁 Day 21 · Wen/Was? · masc → den',          example: 'Ich sehe den Mann. (Mann = Akkusativ)', exampleEn: 'I see the man. (man = object)' },
      { de: 'das Subjekt',   en: 'the subject',                     emoji: '🙋', hint: 'the one performing the verb',                 example: 'Das Subjekt ist „der Hund".',           exampleEn: 'The subject is "the dog".' },
      { de: 'das Objekt',    en: 'the (direct) object',             emoji: '🎯', hint: 'the one receiving the verb',                  example: 'Das Objekt ist „den Mann".',            exampleEn: 'The object is "the man".' },

      // 🔍 THE TEST WORDS — Wer/Wen
      { de: 'Wer …?',  en: 'Who …? (subject test)',  emoji: '🟦', hint: '⭐ answer = Nominativ (the doer)',     example: 'Wer sieht den Mann? — Der Hund.',  exampleEn: 'Who sees the man? — The dog.' },
      { de: 'Wen …?',  en: 'Whom …? (object test)',  emoji: '🟩', hint: '⭐ answer = Akkusativ (the receiver)', example: 'Wen sieht der Hund? — Den Mann.',  exampleEn: 'Whom does the dog see? — The man.' },

      // ⭐ THE SAME NOUN, BOTH JOBS — der Hund flips by role
      { de: 'Der Hund sieht den Mann.', en: 'The dog sees the man.',  emoji: '🐕', hint: '⭐ Hund = subject (der) · Mann = object (den)', example: 'Der Hund sieht den Mann.',  exampleEn: 'The dog sees the man.' },
      { de: 'Den Hund sieht der Mann.', en: 'The man sees the dog.',  emoji: '👨', hint: '⭐ object-first! den Hund = object · der Mann = subject', example: 'Den Hund sieht der Mann.',  exampleEn: 'The man sees the dog. (lit. "The dog, the man sees")' },

      // 👫 PRACTICE NOUNS — to mix subjects & objects
      { de: 'der Freund',   en: 'the (male) friend',  emoji: '👦', hint: 'masc · der → den as object',           example: 'Der Freund besucht den Lehrer.', exampleEn: 'The friend visits the teacher.' },
      { de: 'die Freundin', en: 'the (female) friend', emoji: '👧', hint: 'fem · die → die (no change)',          example: 'Die Freundin liest das Buch.',   exampleEn: 'The friend reads the book.' },
      { de: 'der Student',  en: 'the (male) student',  emoji: '🧑‍🎓', hint: '⚠ weak noun · den Studenten in Akk', example: 'Ich kenne den Studenten.',       exampleEn: 'I know the student.' },
      { de: 'die Studentin', en: 'the (female) student', emoji: '👩‍🎓', hint: 'fem · die → die (no change)',       example: 'Der Freund besucht die Studentin.', exampleEn: 'The friend visits the student.' },

      // 🎬 TWO-NOUN VERBS — need a subject AND an object
      { de: 'besuchen', en: 'to visit',  emoji: '🚪', hint: 'subject visits object → Akk',  example: 'Die Frau besucht den Arzt.',   exampleEn: 'The woman visits the doctor.' },
      { de: 'kennen',   en: 'to know (a person/thing)', emoji: '🤝', hint: 'subject knows object → Akk', example: 'Ich kenne den Mann.', exampleEn: 'I know the man.' },
      { de: 'fragen',   en: 'to ask (someone)', emoji: '🙋', hint: 'subject asks object → Akk', example: 'Der Student fragt den Lehrer.', exampleEn: 'The student asks the teacher.' },
    ],
    grammar: [
      { rule: '⭐ THE 5-SECOND TEST — Wer (subject) vs Wen (object)',
        body:
          'Every two-noun sentence has a doer and a receiver. Ask the verb two questions:\n\n' +
          '  WER + verb?   → the answer is the SUBJECT  (🟦 Nominativ)\n' +
          '  WEN + verb?   → the answer is the OBJECT   (🟩 Akkusativ)\n\n' +
          'Sentence: "Der Hund sieht den Mann."\n' +
          '  Wer sieht?        → Der Hund.   (subject → Nominativ → der)\n' +
          '  Wen sieht der Hund? → den Mann. (object → Akkusativ → den)\n\n' +
          '🧠 "Wen" carries the same -n as "den" — both are the Akkusativ tag. If "whom" fits the slot, that noun is the object.',
      },
      { rule: '⭐ WHY THE ARTICLE TAG MATTERS — word order can move',
        body:
          'English relies on WORD ORDER: "The dog sees the man" ≠ "The man sees the dog". German relies on the ARTICLE, so it can shuffle words and keep the meaning:\n\n' +
          '  Der Hund sieht den Mann.   = The dog sees the man.\n' +
          '  Den Mann sieht der Hund.   = The dog sees the man.  (SAME meaning!)\n' +
          '      └ object first         └ subject later\n\n' +
          'Because "den Mann" is tagged as the object, you can lead with it for emphasis and German still knows the dog is doing the seeing. The verb stays in slot 2 (V2 rule) — only the nouns move.\n\n' +
          '⚠ This ONLY works clearly when one noun is masculine (der vs den shows the role). With "Die Frau sieht die Katze" both are die, so order DOES carry the meaning.',
      },
      { rule: '⭐ ROLE STAYS, ARTICLE FLIPS — the same noun, two jobs',
        body:
          'A noun is not "a subject" or "an object" by nature — its JOB in the sentence decides:\n\n' +
          '  Der Mann sieht den Hund.   — Mann is subject (der)\n' +
          '  Den Mann sieht der Hund.   — Mann is object (den), Hund is now subject\n\n' +
          'Routine for building a correct sentence:\n' +
          '  1. Who DOES it? → that noun is Nominativ (der/die/das).\n' +
          '  2. Who RECEIVES it? → that noun is Akkusativ (masc → den/einen; f/n/pl unchanged).\n' +
          '  3. Put the verb in slot 2; either noun can take slot 1.',
      },
      { rule: '⚖️ definite vs indefinite does NOT change the role',
        body:
          'der/die/das (specific) vs ein/eine (any) only changes "the" vs "a" — NOT who is subject or object:\n\n' +
          '  Ein Freund besucht eine Studentin. — a friend visits a student\n' +
          '  Der Freund besucht eine Studentin. — the friend visits a student\n' +
          '  Ein Freund besucht die Studentin.  — a friend visits the student\n' +
          '  Die Freundin besucht die Studentin. — the friend visits the student\n\n' +
          'In all four, the FIRST noun is the subject (it does the visiting) and the second is the object. Swapping the/a never swaps the roles — only re-ordering or re-tagging does.',
      },
      { rule: '🚦 PITFALLS — the classic Nom-vs-Akk errors',
        body:
          '• "Ich sehe der Tisch" ✗ → Tisch is the object → "Ich sehe den Tisch." ✓\n' +
          '• "Der Tisch ist groß" ✓ — after sein the noun stays Nominativ (no object).\n' +
          '• Don\'t assume slot 1 = subject. "Den Mann sieht der Hund" — slot 1 is the OBJECT here.\n' +
          '• Weak masculine nouns add -n in the Akk: den Studenten / den Jungen / den Herrn.\n' +
          '• With two same-gender nouns (die Frau / die Katze) word order is the ONLY clue — keep subject first.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — test words · role→case · tag the words
      { type: 'match',
        pairs: [
          { de: 'Wer …?',       en: '🟦 finds the SUBJECT (Nominativ)' },
          { de: 'Wen …?',       en: '🟩 finds the OBJECT (Akkusativ)' },
          { de: 'the DOER',     en: '🟦 Nominativ' },
          { de: 'the RECEIVER', en: '🟩 Akkusativ' },
          { de: 'after "sein"', en: '🟦 Nominativ on both sides' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'Der Hund (sieht …)', en: '🟦 subject — der' },
          { de: '(… sieht) den Mann', en: '🟩 object — den' },
          { de: 'Den Hund (sieht …)', en: '🟩 object first — den' },
          { de: '(… sieht) der Mann', en: '🟦 subject later — der' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'Ich (kaufe …)',     en: '🟦 subject' },
          { de: '(… kaufe) den Tisch', en: '🟩 object (masc → den)' },
          { de: '(… sehe) die Frau', en: '🟩 object (fem → die)' },
          { de: '(… habe) ein Auto', en: '🟩 object (neut → ein)' },
        ],
      },

      // 🔍 4 IDENTIFY-THE-ROLE MCQs
      { type: 'multiple-choice', q: 'In "Der Hund sieht den Mann", what is in the Akkusativ?',
        options: ['Der Hund','sieht','den Mann','—'], answer: 'den Mann',
        explain: 'Wen sieht der Hund? → den Mann. The receiver is Akkusativ.' },
      { type: 'multiple-choice', q: 'In "Den Mann sieht der Hund", who is doing the seeing?',
        options: ['den Mann','der Hund','sieht','both'], answer: 'der Hund',
        explain: 'Object-first sentence! "der Hund" is tagged Nominativ → it is the subject.' },
      { type: 'multiple-choice', q: 'In "Ich kaufe den Tisch", which word is the SUBJECT?',
        options: ['Ich','kaufe','den Tisch','Tisch'], answer: 'Ich',
        explain: 'Wer kauft? → Ich. The doer is the Nominativ subject.' },
      { type: 'multiple-choice', q: 'Which question word finds the direct object?',
        options: ['Wer?','Wen?','Wo?','Wann?'], answer: 'Wen?' },

      // ⭐ 4 BUILD-THE-ROLE fill-blanks (subject vs object article)
      { type: 'fill-blank', sentence: '__ Mann sieht den Hund. (the — subject, masc.)', answer: 'Der' },
      { type: 'fill-blank', sentence: 'Der Mann sieht __ Hund. (the — object, masc.)', answer: 'den' },
      { type: 'fill-blank', sentence: 'Die Frau besucht __ Arzt. (the — object, masc.)', answer: 'den' },
      { type: 'fill-blank', sentence: '__ Hund sieht die Frau. (the — subject, masc.)', answer: 'Der' },

      // ⚖️ 3 TWO-ARTICLE fill-blanks (subject + object in one)
      { type: 'fill-blank', sentence: '__ Freund besucht __ Studentin. — specific male friend visits a female student.',
        answer: 'Der eine', hint: 'two words separated by a space: subject article, then object article' },
      { type: 'fill-blank', sentence: '__ Freundin besucht __ Freund. — a female friend visits a male friend.',
        answer: 'Eine einen', hint: 'subject (fem) then object (masc → einen)' },
      { type: 'fill-blank', sentence: '__ Freunde besuchen __ Freund. — the friends visit the male friend.',
        answer: 'Die den', hint: 'plural subject then masc object' },

      // ⭐ 2 WORD-ORDER / SAME-MEANING MCQs
      { type: 'multiple-choice', q: 'Which sentence ALSO means "The dog sees the man"?',
        options: ['Den Hund sieht der Mann.','Den Mann sieht der Hund.','Der Mann sieht den Hund.','Die Hund sieht der Mann.'],
        answer: 'Den Mann sieht der Hund.',
        explain: 'Object-first: "den Mann" stays the object, "der Hund" stays the subject — same meaning, just reordered.' },
      { type: 'multiple-choice', q: 'Why can German move the object to the front?',
        options: ['It can\'t — order is fixed like English.','Because the article (den) already tags it as the object.','Because the verb moves too.','Because nouns are capitalised.'],
        answer: 'Because the article (den) already tags it as the object.' },

      // ⚠ 2 SPOT-THE-ERROR MCQs
      { type: 'multiple-choice', q: 'Which sentence is WRONG?',
        options: ['Ich sehe den Tisch.','Der Tisch ist groß.','Ich sehe der Tisch.','Wir kaufen den Tisch.'],
        answer: 'Ich sehe der Tisch.',
        explain: 'Tisch is the object of sehen → der must become den.' },
      { type: 'multiple-choice', q: '⚠ Which is correct after "sein"?',
        options: ['Das ist einen Mann.','Das ist ein Mann.','Das sieht ein Mann.','Das ist den Mann.'],
        answer: 'Das ist ein Mann.',
        explain: 'sein takes Nominativ on both sides — no object, no flip.' },

      // 💬 Mini dialogue — naming subject/object roles in real chat
      { type: 'dialogue', lines: [
        { speaker: 'Lehrer',  de: 'In „Der Student liest das Buch" — wer ist das Subjekt?', en: 'In "The student reads the book" — who is the subject?' },
        { speaker: 'Schüler', de: 'Der Student. Wer liest? Der Student.',                    en: 'The student. Who reads? The student.' },
        { speaker: 'Lehrer',  de: 'Und das Objekt?',                                          en: 'And the object?' },
        { speaker: 'Schüler', de: 'Das Buch. Wen oder was liest er? Das Buch.',               en: 'The book. What does he read? The book.' },
        { speaker: 'Lehrer',  de: 'Genau. Und „Den Mann sieht der Hund" — wer sieht?',        en: 'Exactly. And "The man, the dog sees" — who sees?' },
        { speaker: 'Schüler', de: 'Der Hund! „der" zeigt das Subjekt.',                       en: 'The dog! "der" marks the subject.' },
      ]},
    ],
    quiz: [
      { type: 'multiple-choice', q: 'Which sentence is wrong?',
        options: ['Ich sehe den Tisch.','Der Tisch ist groß.','Ich sehe der Tisch.','Wir kaufen den Tisch.'], answer: 'Ich sehe der Tisch.' },
      { type: 'multiple-choice', q: 'Which question finds the SUBJECT?',
        options: ['Wer?','Wen?','Wo?','Wie?'], answer: 'Wer?' },
      { type: 'multiple-choice', q: 'In "Den Hund sieht der Mann", who does the seeing?',
        options: ['den Hund','der Mann','both','neither'], answer: 'der Mann',
        explain: 'der Mann is tagged Nominativ → the subject, even though it comes second.' },
      { type: 'fill-blank', sentence: '__ Mann sieht den Hund. (the — subject)', answer: 'Der' },
      { type: 'fill-blank', sentence: 'Der Mann sieht __ Hund. (the — object)', answer: 'den' },
      { type: 'multiple-choice', q: 'Changing "ein" to "der" before the subject…',
        options: ['turns it into the object','changes "a" to "the" but keeps the role','flips subject and object','is always wrong'],
        answer: 'changes "a" to "the" but keeps the role' },
      { type: 'fill-blank', sentence: 'Build it: "a female friend visits a male friend" → __ Freundin besucht __ Freund.', answer: 'Eine einen' },
    ],
  },

  {
    id: 24, week: 4,
    vocabLayout: 'spotlight',
    title: 'Verbs that take Akkusativ',
    titleDe: 'Verben mit Akkusativ',
    emoji: '🎯',
    objective: 'Know which everyday verbs trigger an Akkusativ object — and, just as important, which verbs DON\'T (sein/werden take Nominativ; a few take Dativ).',
    intro: 'Most German verbs describe doing something TO a thing — and that thing goes in the Akkusativ. Today you collect the high-frequency "Akkusativ verbs" so the masculine flip becomes automatic. You\'ll also learn the must-know "es gibt" (always Akkusativ!), the first-mention→ein / second-mention→der rhythm, and the key exceptions: sein/werden take NO object, and a handful of verbs (helfen, danken) take Dativ instead — coming next.',
    vocabulary: [
      // 🎯 CORE AKKUSATIV VERBS — action-on-a-thing (the big everyday set)
      { de: 'haben',     en: 'to have',          emoji: '✋', hint: '🔁 Day 6 · have WHAT? → Akk',           example: 'Ich habe einen Hund.',       exampleEn: 'I have a dog.' },
      { de: 'brauchen',  en: 'to need',          emoji: '🙏', hint: 'need WHAT? → Akk',                     example: 'Ich brauche einen Stift.',   exampleEn: 'I need a pen.' },
      { de: 'kaufen',    en: 'to buy',           emoji: '🛒', hint: 'buy WHAT? → Akk',                      example: 'Sie kauft den Laptop.',      exampleEn: 'She buys the laptop.' },
      { de: 'suchen',    en: 'to look for',      emoji: '🔎', hint: 'look for WHAT? → Akk',                 example: 'Ich suche den Schlüssel.',   exampleEn: 'I am looking for the key.' },
      { de: 'finden',    en: 'to find',          emoji: '🎯', hint: 'find WHAT? → Akk · also "think it\'s…"', example: 'Ich finde den Film gut.',    exampleEn: 'I think the film is good.' },
      { de: 'nehmen',    en: 'to take',          emoji: '🤲', hint: '🔁 Day 11 stem-changer · take WHAT? → Akk', example: 'Ich nehme den Bus.',      exampleEn: 'I take the bus.' },
      { de: 'sehen',     en: 'to see',           emoji: '👀', hint: 'see WHAT? → Akk',                      example: 'Ich sehe den Film.',         exampleEn: 'I see the film.' },
      { de: 'essen',     en: 'to eat',           emoji: '🍽️', hint: '🔁 Day 11 · eat WHAT? → Akk',          example: 'Er isst einen Apfel.',       exampleEn: 'He eats an apple.' },
      { de: 'trinken',   en: 'to drink',         emoji: '🥤', hint: 'drink WHAT? → Akk',                    example: 'Ich trinke den Kaffee.',     exampleEn: 'I drink the coffee.' },
      { de: 'lesen',     en: 'to read',          emoji: '📖', hint: '🔁 Day 11 · read WHAT? → Akk',         example: 'Sie liest die Zeitung.',     exampleEn: 'She reads the newspaper.' },
      { de: 'schreiben', en: 'to write',         emoji: '✍️', hint: 'write WHAT? → Akk',                    example: 'Ich schreibe einen Brief.',  exampleEn: 'I am writing a letter.' },
      { de: 'hören',     en: 'to hear / listen to', emoji: '🎧', hint: 'hear WHAT? → Akk',                  example: 'Ich höre die Musik.',        exampleEn: 'I listen to the music.' },
      { de: 'kennen',    en: 'to know (person/place)', emoji: '🤝', hint: 'know WHOM? → Akk (vs wissen=facts)', example: 'Ich kenne den Mann.',    exampleEn: 'I know the man.' },
      { de: 'mögen',     en: 'to like',          emoji: '😍', hint: 'like WHAT? → Akk',                     example: 'Ich mag den Tee.',           exampleEn: 'I like the tea.' },
      { de: 'fragen',    en: 'to ask (someone)', emoji: '🙋', hint: '⚠ ask SOMEONE = Akk in German!',       example: 'Ich frage den Lehrer.',      exampleEn: 'I ask the teacher.' },
      { de: 'besuchen',  en: 'to visit',         emoji: '🚪', hint: 'visit WHOM? → Akk',                    example: 'Wir besuchen den Arzt.',     exampleEn: 'We visit the doctor.' },

      // ✨ ES GIBT — the must-know construction (ALWAYS Akkusativ)
      { de: 'es gibt',   en: 'there is / there are', emoji: '✨', hint: '⭐ ALWAYS takes Akkusativ · "es gibt einen…"', example: 'Es gibt einen Supermarkt hier.', exampleEn: 'There is a supermarket here.' },

      // ⚠ NO-OBJECT VERBS — sein / werden take NOMINATIV (the equals-sign verbs)
      { de: 'sein',      en: 'to be (NO object → Nom)', emoji: '🟦', hint: '⚠ Nominativ on BOTH sides · "Er ist ein Mann"', example: 'Er ist ein Lehrer.',  exampleEn: 'He is a teacher.' },
      { de: 'werden',    en: 'to become (NO object → Nom)', emoji: '🟨', hint: '⚠ also Nominativ · "Er wird Arzt"',       example: 'Er wird Arzt.',       exampleEn: 'He is becoming a doctor.' },
      { de: 'heißen',    en: 'to be called (NO object → Nom)', emoji: '🪪', hint: '⚠ Nominativ · "Ich heiße Anna"',       example: 'Ich heiße Anna.',     exampleEn: 'My name is Anna.' },

      // 🅿️ DATIV-VERB PREVIEW — NOT every verb takes Akkusativ
      { de: 'helfen',    en: 'to help (takes DATIV!)', emoji: '🆘', hint: '⚠ Day 26 preview · "Ich helfe dem Mann" — NOT den', example: 'Ich helfe dem Mann.',  exampleEn: 'I help the man.' },
      { de: 'danken',    en: 'to thank (takes DATIV!)', emoji: '🙏', hint: '⚠ Day 26 preview · "Ich danke dem Lehrer" — NOT den', example: 'Ich danke dem Lehrer.', exampleEn: 'I thank the teacher.' },
    ],
    grammar: [
      { rule: '⭐ WHAT IS AN "AKKUSATIV VERB"? — the action-on-a-thing test',
        body:
          'A transitive verb does its action TO a direct object — and that object goes in the Akkusativ. Find it with the Day-23 test:\n\n' +
          '  verb + WEN / WAS?  → the answer is the Akkusativ object.\n\n' +
          '  Ich kaufe … was?      → einen Tisch.   (kaufen → Akk)\n' +
          '  Ich sehe … wen?       → den Mann.      (sehen → Akk)\n' +
          '  Ich brauche … was?    → eine Lampe.    (brauchen → Akk)\n\n' +
          'The big everyday Akkusativ verbs to memorise as a block:\n' +
          '  haben · brauchen · kaufen · suchen · finden · nehmen · sehen ·\n' +
          '  essen · trinken · lesen · schreiben · hören · kennen · mögen ·\n' +
          '  fragen · besuchen · machen · möchten.',
      },
      { rule: '✨ ES GIBT — the construction that ALWAYS takes Akkusativ',
        body:
          '"es gibt" = "there is / there are". It is one fixed phrase and its noun is ALWAYS Akkusativ — so masculine always flips to den/einen:\n\n' +
          '  Es gibt einen Supermarkt.   (m → einen) ⚠\n' +
          '  Es gibt eine Apotheke.      (f → eine)\n' +
          '  Es gibt ein Problem.        (n → ein)\n' +
          '  Es gibt viele Leute.        (pl → viele)\n\n' +
          'The literal logic: "es" is the subject (Nominativ), so the thing that exists is the OBJECT. Question form: "Gibt es einen Supermarkt hier?" — super common when asking for directions.',
      },
      { rule: '⚠ THE EXCEPTION — sein / werden take NO object (Nominativ)',
        body:
          'Not every verb has an Akkusativ object. The "equals-sign" verbs link two things that are the SAME — so both sides stay Nominativ:\n\n' +
          '  sein   (to be)        Er ist ein Lehrer.    (NOT einen) ✓\n' +
          '  werden (to become)    Er wird ein guter Arzt. (NOT einen) ✓\n' +
          '  heißen (to be called) Das heißt ein Problem.  (Nominativ)\n' +
          '  bleiben (to stay)     Er bleibt mein Freund.  (Nominativ)\n\n' +
          '🧠 Think of sein/werden as "=" : "Er = ein Lehrer." Both sides are the same person, so there is no receiver, no Akkusativ. This is THE most common case mistake — "Ich bin einen Student" ✗ → "Ich bin ein Student" ✓.',
      },
      { rule: '🅿️ NOT ALL OBJECTS ARE AKKUSATIV — the Dativ verbs (preview)',
        body:
          'A small but very common group of verbs takes a DATIV object instead of Akkusativ. You meet the Dativ properly on Day 25-26, but flag these now so you don\'t auto-flip them to den:\n\n' +
          '  helfen   (to help)        Ich helfe dem Mann.    (dem, NOT den) ⚠\n' +
          '  danken   (to thank)       Ich danke dem Lehrer.  (dem) ⚠\n' +
          '  gehören  (to belong to)   Das Buch gehört dem Kind.\n' +
          '  gefallen (to please)      Das Buch gefällt dem Mann.\n' +
          '  antworten (to answer)     Ich antworte dem Freund.\n\n' +
          'These are worth memorising as "the Dativ verbs". Everything NOT on this short list almost always takes Akkusativ.',
      },
      { rule: '📖 FIRST MENTION vs SECOND MENTION — ein → der',
        body:
          'Within a story or paragraph the article also tracks NEW vs KNOWN information:\n\n' +
          '• First time you introduce a thing → ein / eine / einen (one of many).\n' +
          '• Every time after → der / die / das (now we both know which one).\n\n' +
          '  „Ich habe einen Hund. Der Hund ist klein."\n' +
          '       first mention → einen        second → der (subject again)\n' +
          '  „Ich kaufe ein Buch. Das Buch ist gut."\n\n' +
          'This is the same logic as English "a … the …". Combine it with the case rules: first mention of a masculine OBJECT = einen, then as the subject of the next sentence = der.',
      },
      { rule: '🚦 PITFALLS — pick the right case per verb',
        body:
          '• Most action verbs → Akkusativ (masc der→den, ein→einen).\n' +
          '• sein / werden / heißen / bleiben → Nominativ, no flip ("Er ist ein Mann").\n' +
          '• helfen / danken / gehören / gefallen / antworten → Dativ (dem/der), NOT Akkusativ.\n' +
          '• "fragen" takes Akkusativ in German even though English "ask TO someone" feels indirect: "Ich frage den Lehrer." ✓\n' +
          '• "es gibt" is always Akkusativ — "Gibt es einen Bahnhof?" not "ein Bahnhof".\n' +
          '• kennen (people/places you\'re familiar with) vs wissen (facts) — both common, but only kennen takes a simple Akk noun.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — verb→case · es-gibt genders · sort the three groups
      { type: 'match',
        pairs: [
          { de: 'kaufen / sehen / haben', en: '🎯 takes AKKUSATIV (den/einen)' },
          { de: 'sein / werden',           en: '🟦 takes NOMINATIV (no flip)' },
          { de: 'helfen / danken',         en: '🅿️ takes DATIV (dem/der)' },
          { de: 'es gibt',                 en: '✨ ALWAYS Akkusativ' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'Es gibt __ Supermarkt (m)', en: 'einen' },
          { de: 'Es gibt __ Apotheke (f)',   en: 'eine' },
          { de: 'Es gibt __ Problem (n)',    en: 'ein' },
          { de: 'Es gibt __ Leute (pl)',     en: 'viele' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'Ich __ einen Hund', en: 'habe (Akk)' },
          { de: 'Ich __ ein Lehrer', en: 'bin (Nom)' },
          { de: 'Ich __ dem Mann',   en: 'helfe (Dativ)' },
          { de: 'Ich __ den Bus',    en: 'nehme (Akk)' },
        ],
      },

      // 🎯 5 AKKUSATIV-VERB fill-blanks (the flip in real verbs)
      { type: 'fill-blank', sentence: 'Ich brauche __ Stift. (a, masc.)', answer: 'einen' },
      { type: 'fill-blank', sentence: 'Wir nehmen __ Bus. (the, masc.)', answer: 'den' },
      { type: 'fill-blank', sentence: 'Ich suche __ Schlüssel. (the, masc.)', answer: 'den' },
      { type: 'fill-blank', sentence: 'Wir hören __ Musik. (the, fem. — no change)', answer: 'die' },
      { type: 'fill-blank', sentence: 'Ich frage __ Lehrer. (the, masc. — fragen takes Akk!)', answer: 'den' },

      // ✨ 3 ES-GIBT fill-blanks
      { type: 'fill-blank', sentence: 'Es gibt __ Supermarkt hier. (a, masc.)', answer: 'einen' },
      { type: 'fill-blank', sentence: 'Gibt es __ Apotheke in der Nähe? (an, fem.)', answer: 'eine' },
      { type: 'fill-blank', sentence: 'Es gibt __ Problem. (a, neuter)', answer: 'ein' },

      // 📖 1 first-mention → second-mention fill-blank
      { type: 'fill-blank', sentence: 'Ich habe einen Hund. __ Hund ist klein. (2nd mention — subject)', answer: 'Der' },

      // ⚠ 4 CASE-PER-VERB MCQs (Akk vs Nom vs Dativ)
      { type: 'multiple-choice', q: '"Er liest __ Buch." (the, neuter)',
        options: ['der','den','das','die'], answer: 'das',
        explain: 'lesen → Akkusativ, but Buch is neuter → das (no change).' },
      { type: 'multiple-choice', q: '"He is a teacher." — pick the correct German.',
        options: ['Er ist einen Lehrer.','Er ist ein Lehrer.','Er ist dem Lehrer.','Er hat ein Lehrer.'],
        answer: 'Er ist ein Lehrer.',
        explain: 'sein takes Nominativ on both sides — no flip.' },
      { type: 'multiple-choice', q: '⚠ "I help the man." (helfen takes Dativ!)',
        options: ['Ich helfe den Mann.','Ich helfe dem Mann.','Ich helfe einen Mann.','Ich helfe der Mann.'],
        answer: 'Ich helfe dem Mann.',
        explain: 'helfen is a Dativ verb → dem Mann, not den Mann.' },
      { type: 'multiple-choice', q: 'Which verb does NOT take an Akkusativ object?',
        options: ['kaufen','sehen','werden','brauchen'], answer: 'werden',
        explain: 'werden (to become) takes Nominativ — it links two equal things.' },

      // ⚠ 2 SPOT-THE-ERROR MCQs
      { type: 'multiple-choice', q: '⚠ Which sentence is WRONG?',
        options: ['Ich habe einen Hund.','Ich bin einen Student.','Ich sehe den Mann.','Ich kaufe einen Tisch.'],
        answer: 'Ich bin einen Student.',
        explain: 'sein → Nominativ: "Ich bin ein Student."' },
      { type: 'multiple-choice', q: '⚠ "There is a train station here." — correct German:',
        options: ['Es gibt ein Bahnhof hier.','Es gibt einen Bahnhof hier.','Es ist ein Bahnhof hier.','Es gibt dem Bahnhof hier.'],
        answer: 'Es gibt einen Bahnhof hier.',
        explain: 'es gibt always takes Akkusativ → masc einen.' },

      // 💬 Mini dialogue — Akk verbs + es gibt + the sein exception
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Gibt es hier einen Supermarkt?',          en: 'Is there a supermarket here?' },
        { speaker: 'B', de: 'Ja, es gibt einen Supermarkt und eine Apotheke.', en: 'Yes, there is a supermarket and a pharmacy.' },
        { speaker: 'A', de: 'Super. Ich brauche einen Kaffee und das Brot.', en: 'Great. I need a coffee and the bread.' },
        { speaker: 'B', de: 'Kennst du den Verkäufer? Er ist sehr nett.', en: 'Do you know the salesperson? He is very nice.' },
        { speaker: 'A', de: 'Ja, ich kenne den Mann. Ich frage ihn oft.', en: 'Yes, I know the man. I often ask him.' },
        { speaker: 'B', de: 'Und ich helfe dem Verkäufer manchmal.',    en: 'And I sometimes help the salesperson.' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Ich trinke __ Kaffee. (the, masc.)', answer: 'den' },
      { type: 'fill-blank', sentence: 'Es gibt __ Supermarkt hier. (a, masc.)', answer: 'einen' },
      { type: 'multiple-choice', q: '"He is a doctor." — correct German:',
        options: ['Er ist einen Arzt.','Er ist ein Arzt.','Er wird einen Arzt.','Er hat ein Arzt.'],
        answer: 'Er ist ein Arzt.', explain: 'sein → Nominativ.' },
      { type: 'multiple-choice', q: '⚠ "I thank the teacher." (danken takes Dativ)',
        options: ['Ich danke den Lehrer.','Ich danke dem Lehrer.','Ich danke einen Lehrer.','Ich danke der Lehrer.'],
        answer: 'Ich danke dem Lehrer.' },
      { type: 'multiple-choice', q: 'Which question word finds the Akkusativ object?',
        options: ['Wer?','Wen?','Wo?','Wann?'], answer: 'Wen?' },
      { type: 'fill-blank', sentence: 'Ich frage __ Lehrer. (the, masc. — fragen takes Akk)', answer: 'den' },
      { type: 'multiple-choice', q: 'Which verb takes a DATIV object (not Akkusativ)?',
        options: ['kaufen','helfen','sehen','brauchen'], answer: 'helfen' },
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
    vocabLayout: 'spotlight',
    title: 'Separable verbs',
    titleDe: 'Trennbare Verben',
    emoji: '🧩',
    objective: 'Spot a separable verb in the dictionary, split it correctly in a real sentence, and re-glue it after a modal.',
    intro: 'About one in six common German verbs LOOKS like one word (aufstehen, einkaufen, anrufen) but SECRETLY splits when you use it. The stem goes to slot 2 (the verb position you already know), and the prefix flies to the end of the sentence. "Ich stehe um 7 Uhr AUF." After a modal verb, the prefix re-glues. Today: spot, split, re-glue.',
    vocabulary: [
      // Role labels
      { de: 'das Präfix',     en: 'the prefix',     emoji: '🔚', hint: 'the part that flies to the end of the sentence',         example: 'Das Präfix ist „auf".',              exampleEn: 'The prefix is "auf".' },
      { de: 'der Stamm',      en: 'the verb stem',  emoji: '🌳', hint: 'the part that conjugates and stays in slot 2',           example: 'Der Stamm ist „stehen".',            exampleEn: 'The stem is "stehen".' },
      { de: 'trennbar',       en: 'separable',      emoji: '✂️', hint: 'splits in a real sentence',                                example: '„Aufstehen" ist trennbar.',           exampleEn: '"aufstehen" is separable.' },
      // The most useful separable verbs — examples SHOW the split (stem slot 2, prefix at the end)
      { de: 'aufstehen',  en: 'to get up',                emoji: '⏰', hint: '🧩 auf + stehen · "Ich stehe um 7 Uhr AUF."',           example: 'Ich stehe um 7 Uhr auf.',         exampleEn: 'I get up at 7 o\'clock.' },
      { de: 'aufwachen',  en: 'to wake up',               emoji: '🌅', hint: '🧩 auf + wachen',                                        example: 'Du wachst spät auf.',              exampleEn: 'You wake up late.' },
      { de: 'einkaufen',  en: 'to shop / buy groceries', emoji: '🛒', hint: '🧩 ein + kaufen · "Wir kaufen ein."',                    example: 'Wir kaufen am Samstag ein.',        exampleEn: 'We go shopping on Saturday.' },
      { de: 'mitkommen',  en: 'to come along',            emoji: '👫', hint: '🧩 mit + kommen · "Kommst du mit?"',                    example: 'Kommst du mit?',                    exampleEn: 'Are you coming along?' },
      { de: 'mitnehmen',  en: 'to take with',             emoji: '🥡', hint: '🧩 mit + nehmen · stem-changer too! "Ich nehme den Schlüssel mit."', example: 'Ich nehme den Schlüssel mit.', exampleEn: 'I take the key with me.' },
      { de: 'aufmachen',  en: 'to open',                  emoji: '🚪', hint: '🧩 auf + machen',                                        example: 'Du machst das Buch auf.',           exampleEn: 'You open the book.' },
      { de: 'zumachen',   en: 'to close',                 emoji: '🔒', hint: '🧩 zu + machen',                                         example: 'Wir machen das Buch zu.',           exampleEn: 'We close the book.' },
      { de: 'ausgehen',   en: 'to go out (socially)',     emoji: '🌃', hint: '🧩 aus + gehen · "Wir gehen am Wochenende aus."',       example: 'Wir gehen am Wochenende aus.',      exampleEn: 'We go out on the weekend.' },
      { de: 'ausfüllen',  en: 'to fill out (a form)',     emoji: '📝', hint: '🧩 aus + füllen',                                        example: 'Du füllst das Formular aus.',       exampleEn: 'You fill out the form.' },
      { de: 'anrufen',    en: 'to call (on the phone)',   emoji: '📞', hint: '🧩 an + rufen · "Ich rufe dich morgen AN."',             example: 'Ich rufe dich morgen an.',          exampleEn: 'I will call you tomorrow.' },
      { de: 'fernsehen',  en: 'to watch TV',              emoji: '📺', hint: '🧩 fern + sehen · stem-changer too! "Er sieht fern."',   example: 'Er sieht fern.',                    exampleEn: 'He watches TV.' },
      { de: 'abholen',    en: 'to pick up',               emoji: '🚉', hint: '🧩 ab + holen · "Ich hole dich ab."',                    example: 'Ich hole dich am Bahnhof ab.',      exampleEn: 'I pick you up at the station.' },
      { de: 'anfangen',   en: 'to begin',                 emoji: '▶️', hint: '🧩 an + fangen · stem-changer! "Es fängt um 8 Uhr an."', example: 'Es fängt um 8 Uhr an.',             exampleEn: 'It begins at 8 o\'clock.' },
      { de: 'einladen',   en: 'to invite',                emoji: '💌', hint: '🧩 ein + laden · stem-changer! "Sie lädt mich ein."',    example: 'Sie lädt mich ein.',                exampleEn: 'She invites me.' },
      { de: 'aufhören',   en: 'to stop',                  emoji: '🛑', hint: '🧩 auf + hören',                                         example: 'Wir hören auf.',                    exampleEn: 'We stop.' },
      { de: 'vorbereiten',en: 'to prepare',               emoji: '📋', hint: '🧩 vor + bereiten · "Ich bereite das Essen vor."',      example: 'Ich bereite das Essen vor.',        exampleEn: 'I prepare the meal.' },
    ],
    grammar: [
      { rule: '⭐ The sandwich pattern — splitting in a main sentence',
        body:
          'A main-clause separable verb makes a SANDWICH. The stem sits in position 2; everything else goes between; the prefix lands at the very end:\n' +
          '\n' +
          '   slot 1     slot 2 (stem)        ……  middle  ……      slot ∞ (prefix)\n' +
          '   Ich        STEHE                um 7 Uhr               AUF.\n' +
          '   Wir        KAUFEN               am Samstag             EIN.\n' +
          '   Du         MACHST               das Fenster            AUF.\n' +
          '   Er         RUFT                 seine Freundin          AN.\n' +
          '   Ich        HOLE                 dich am Bahnhof         AB.\n' +
          '\n' +
          'The longer the sentence, the wider the sandwich.',
      },
      { rule: 'Common separable prefixes — and their meanings',
        body:
          '   auf-   "up / open"     →  aufstehen, aufmachen, aufwachen, aufhören\n' +
          '   ein-   "in / into"      →  einkaufen, einladen, einsteigen\n' +
          '   aus-   "out"            →  ausgehen, ausfüllen, aussteigen\n' +
          '   ab-    "off / away"     →  abholen, abfahren\n' +
          '   an-    "on / at"        →  anrufen, anfangen, ankommen\n' +
          '   mit-   "along / with"   →  mitkommen, mitnehmen\n' +
          '   zu-    "to / closed"    →  zumachen, zuhören\n' +
          '   vor-   "before / pre-"  →  vorbereiten, vorstellen\n' +
          '   nach-  "after"          →  nachfragen\n' +
          '   fern-  "far / TV"       →  fernsehen',
      },
      { rule: '⭐ Spot a separable verb — the 3-second test',
        body:
          'Two clues identify a separable verb in the dictionary:\n' +
          '1. STRESS — the prefix is stressed when you say the infinitive: AUFstehen, EINkaufen, ANrufen. Compare to NON-separable: beSUchen, verSTEhen — stress on the stem.\n' +
          '2. PREFIX from the list above. Most separable prefixes are themselves common little German words (auf, an, mit, aus). Non-separable prefixes (be-, ver-, ent-, er-, zer-, ge-) are not.\n' +
          'Rule of thumb: if the prefix can stand alone as a German word, it usually separates.',
      },
      { rule: '⚠ With a modal verb, the prefix RE-GLUES',
        body:
          'When a modal verb (kann · muss · will · darf · soll · möchte) takes slot 2, the separable verb goes to the END as a SINGLE infinitive — no splitting:\n' +
          '\n' +
          '   Ich         stehe   um 7 Uhr         auf.            (present, splits)\n' +
          '   Ich  MUSS   um 7 Uhr                 AUFSTEHEN.       (modal, glued)\n' +
          '\n' +
          '   Wir         kaufen  am Samstag       ein.            (present, splits)\n' +
          '   Wir  WOLLEN am Samstag               EINKAUFEN.       (modal, glued)\n' +
          '\n' +
          'In a yes/no question, the stem still leads (slot 1) and the prefix still flies to the end:\n' +
          '   Stehst   du um 7 Uhr     auf?\n' +
          '   Rufst    du mich morgen   an?\n' +
          'Negation glues "nicht" right BEFORE the prefix:\n' +
          '   Ich rufe dich heute       nicht an.',
      },
      { rule: '🚦 Common pitfalls',
        body:
          '✗ Ich aufstehe um 7 Uhr.       ← prefix glued, stem buried in slot 2 — broken.\n' +
          '✓ Ich stehe um 7 Uhr auf.\n' +
          '\n' +
          '✗ Ich stehe auf um 7 Uhr.      ← prefix not at the end.\n' +
          '✓ Ich stehe um 7 Uhr auf.\n' +
          '\n' +
          '✗ Ich muss aufstehen um 7 Uhr. ← infinitive should be at the very end after the modal.\n' +
          '✓ Ich muss um 7 Uhr aufstehen.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ INTERACTIVE — match each prefix to its core meaning
      {
        type: 'match',
        pairs: [
          { de: 'auf-', en: 'up / open' },
          { de: 'ein-', en: 'in / into' },
          { de: 'aus-', en: 'out' },
          { de: 'mit-', en: 'along / with' },
          { de: 'ab-',  en: 'off / away' },
          { de: 'an-',  en: 'on / at' },
          { de: 'vor-', en: 'before / pre-' },
        ],
      },
      // ⭐ Lego-style: prefix + stem → infinitive
      {
        type: 'match',
        pairs: [
          { de: 'auf + stehen', en: 'aufstehen  (to get up)' },
          { de: 'ein + kaufen', en: 'einkaufen  (to shop)' },
          { de: 'an + rufen',   en: 'anrufen  (to call)' },
          { de: 'mit + kommen', en: 'mitkommen  (to come along)' },
          { de: 'ab + holen',   en: 'abholen  (to pick up)' },
        ],
      },

      // ⭐ Match each form to its scenario — sandwich vs glued
      {
        type: 'match',
        pairs: [
          { de: 'Ich stehe um 7 Uhr auf.',         en: '🧩 main clause — stem in slot 2, prefix at end' },
          { de: 'Ich muss um 7 Uhr aufstehen.',     en: '⚠ with modal — prefix re-glues, infinitive at end' },
          { de: 'Stehst du um 7 Uhr auf?',          en: '❓ yes/no question — stem in slot 1, prefix at end' },
          { de: 'Ich stehe nicht um 7 Uhr auf.',    en: '🚫 negation — nicht right BEFORE the prefix' },
        ],
      },

      // 🛠 BUILD-THE-SENTENCE — given parts, write the correct main-clause form
      { type: 'fill-blank', sentence: '🛠 Ich + aufstehen + um sieben Uhr → __',                 answer: 'Ich stehe um sieben Uhr auf' },
      { type: 'fill-blank', sentence: '🛠 Wir + einkaufen + am Samstag → __',                     answer: 'Wir kaufen am Samstag ein' },
      { type: 'fill-blank', sentence: '🛠 Er + anrufen + seine Freundin → __',                    answer: 'Er ruft seine Freundin an' },
      { type: 'fill-blank', sentence: '🛠 Ich + abholen + dich + am Bahnhof → __',                 answer: 'Ich hole dich am Bahnhof ab' },
      { type: 'fill-blank', sentence: '🛠 With modal: Ich + müssen + aufstehen + um sieben Uhr → __',
        answer: 'Ich muss um sieben Uhr aufstehen', hint: 'modal slot 2 · everything middle · infinitive at very end' },

      // Sandwich practice — fill stem + prefix together
      { type: 'fill-blank', sentence: 'Ich __ um sieben Uhr __. (aufstehen)', answer: 'stehe auf', hint: 'two words separated by a space' },
      { type: 'fill-blank', sentence: 'Wir __ am Samstag __. (einkaufen)',     answer: 'kaufen ein' },
      { type: 'fill-blank', sentence: 'Du __ das Fenster __. (aufmachen)',     answer: 'machst auf' },
      { type: 'fill-blank', sentence: 'Er __ seine Freundin __. (anrufen)',    answer: 'ruft an' },
      { type: 'fill-blank', sentence: 'Ich __ am Abend __. (fernsehen)',        answer: 'sehe fern',
        hint: 'fernsehen is a stem-changer too! ich form is regular, but du siehst fern · er sieht fern' },
      { type: 'fill-blank', sentence: 'Wir __ unsere Freunde __. (einladen)',  answer: 'laden ein',
        hint: 'einladen is a stem-changer! du lädst ein · er lädt ein' },

      // Modal interaction — re-gluing
      { type: 'fill-blank', sentence: 'Mit modal: "Ich muss um 7 Uhr __." (aufstehen)',  answer: 'aufstehen' },
      { type: 'fill-blank', sentence: 'Mit modal: "Wir wollen am Samstag __." (einkaufen)', answer: 'einkaufen' },
      { type: 'fill-blank', sentence: 'Mit modal: "Sie kann dich morgen __." (abholen)',  answer: 'abholen' },

      // ⚠ Spot-the-error
      {
        type: 'multiple-choice',
        q: '⚠ Which is WRONG?',
        options: [
          'Ich stehe um 7 Uhr auf.',
          'Ich aufstehe um 7 Uhr.',
          'Wir kaufen am Samstag ein.',
          'Er ruft seine Freundin an.',
        ],
        answer: 'Ich aufstehe um 7 Uhr.',
        explain: 'The stem (stehe) must be in slot 2 and the prefix (auf) must fly to the end: "Ich stehe um 7 Uhr AUF."',
      },
      {
        type: 'multiple-choice',
        q: '⚠ Which is WRONG?',
        options: [
          'Ich muss um 7 Uhr aufstehen.',
          'Ich muss aufstehen um 7 Uhr.',
          'Wir wollen am Samstag einkaufen.',
          'Er kann dich morgen abholen.',
        ],
        answer: 'Ich muss aufstehen um 7 Uhr.',
        explain: 'After a modal, the infinitive goes to the VERY end of the sentence — after the time/place: "Ich muss um 7 Uhr aufstehen."',
      },

      // Question form
      { type: 'fill-blank', sentence: '❓ Question form (yes/no): "__ du um 7 Uhr __?" (aufstehen)',
        answer: 'Stehst auf', hint: 'stem leads (slot 1) · prefix at end' },
      { type: 'fill-blank', sentence: '❓ "__ du mich morgen __?" (anrufen)',  answer: 'Rufst an' },
      { type: 'fill-blank', sentence: '❓ "__ ihr am Wochenende __?" (ausgehen)',  answer: 'Geht aus' },

      // Negation
      { type: 'fill-blank', sentence: '🚫 "Ich rufe dich heute __ __." (nicht + anrufen — prefix at end)',
        answer: 'nicht an' },

      // Word-order MCQ
      { type: 'multiple-choice',
        q: 'Which sentence is correct?',
        options: [
          'Ich aufstehe um 7 Uhr.',
          'Ich stehe um 7 Uhr auf.',
          'Ich stehe auf um 7 Uhr.',
          'Auf ich stehe um 7 Uhr.',
        ],
        answer: 'Ich stehe um 7 Uhr auf.',
        explain: 'Stem in slot 2, prefix at the end.',
      },

      // Mini dialogue using separable verbs in a real chat
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Wann stehst du normalerweise auf?',                       en: 'When do you usually get up?' },
        { speaker: 'B', de: 'Ich stehe um sieben Uhr auf.',                              en: 'I get up at seven.' },
        { speaker: 'A', de: 'Wir kaufen am Samstag ein. Kommst du mit?',                en: 'We are shopping on Saturday. Are you coming along?' },
        { speaker: 'B', de: 'Klar! Ich bringe meinen Hund mit. Ruf mich vorher an, ja?', en: 'Of course! I will bring my dog. Call me beforehand, yeah?' },
        { speaker: 'A', de: 'Ich rufe dich morgen früh an. Schläfst du gerade fern?',    en: 'I will call you tomorrow morning. Are you watching TV right now?' },
        { speaker: 'B', de: 'Nein, ich bereite das Essen vor.',                          en: 'No, I am preparing the food.' },
      ]},

      // Match — original
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
      { type: 'multiple-choice', q: 'Which prefix is NOT separable?',
        options: ['auf-','an-','be-','mit-'], answer: 'be-',
        explain: 'be-, ver-, ent-, er-, zer-, ge- are NON-separable. They do not split.' },
      { type: 'multiple-choice', q: 'After a modal verb, the separable verb goes…',
        options: ['Stays split','Re-glues at the end as one infinitive','Stays as one word in slot 2','At the start'],
        answer: 'Re-glues at the end as one infinitive' },
      { type: 'fill-blank', sentence: '🛠 "Du wachst um 8 Uhr auf." → with modal "müssen": "Du musst um 8 Uhr __."',
        answer: 'aufwachen' },
      { type: 'fill-blank', sentence: '❓ "_ du heute __?" (aufstehen — yes/no question)',
        answer: 'Stehst auf' },
    ],
  },

  /* ----- Day 16: Yes/No questions (slides 71-77, 128-131) ----- */
  {
    id: 16, week: 3,
    vocabLayout: 'spotlight',
    title: 'Yes/No questions',
    titleDe: 'Ja/Nein-Fragen',
    emoji: '❓',
    objective: 'Flip any statement into a yes/no question by putting the verb FIRST — and answer with ja, nein or the killer particle doch.',
    intro: 'Yes/no questions in German are easy: just put the conjugated verb in slot 1. "Du bist müde." → "Bist du müde?" Add a question mark — done. Then learn the three answer particles (ja · nein · doch), keep separable prefixes flying to the end, and master polite forms with möchten / können.',
    vocabulary: [
      // ✅ POSITIVE ANSWERS — from neutral to enthusiastic to polite
      { de: 'ja',           en: 'yes',                       emoji: '✅', hint: 'simple yes · neutral',                          example: 'Hast du Zeit? — Ja.',                                  exampleEn: 'Do you have time? — Yes.' },
      { de: 'natürlich',    en: 'of course',                 emoji: '👍', hint: 'lit. "naturally" · stronger than just "ja"',     example: 'Sprichst du Deutsch? — Natürlich!',                    exampleEn: 'Do you speak German? — Of course!' },
      { de: 'sicher',       en: 'certainly / sure',          emoji: '✔️', hint: 'also means "safe" · context makes it clear',     example: 'Bist du sicher? — Ja, ganz sicher.',                   exampleEn: 'Are you sure? — Yes, completely sure.' },
      { de: 'klar',         en: 'sure / clear',              emoji: '💯', hint: 'casual everyday "yeah, sure"',                   example: 'Kommst du mit? — Klar!',                               exampleEn: 'Coming along? — Sure!' },
      { de: 'ja, gerne',    en: 'yes, gladly',               emoji: '❤️', hint: 'warm acceptance · polite YES to an invitation',  example: 'Möchtest du Kaffee? — Ja, gerne.',                     exampleEn: 'Would you like coffee? — Yes, gladly.' },
      { de: 'ja, bitte',    en: 'yes please',                emoji: '🙏', hint: 'accepting an offer politely',                    example: 'Noch ein Stück Kuchen? — Ja, bitte.',                  exampleEn: 'Another piece of cake? — Yes please.' },

      // ⛔ NEGATIVE ANSWERS — from neutral to soft to absolute
      { de: 'nein',         en: 'no',                        emoji: '⛔', hint: 'simple no · neutral',                            example: 'Bist du müde? — Nein.',                                exampleEn: 'Are you tired? — No.' },
      { de: 'nein, danke',  en: 'no thank you',              emoji: '🙅', hint: 'polite refusal',                                 example: 'Möchtest du Tee? — Nein, danke.',                      exampleEn: 'Would you like tea? — No thank you.' },
      { de: 'leider nicht', en: 'unfortunately not',         emoji: '😔', hint: 'soft no · regretful',                            example: 'Hast du Zeit? — Leider nicht.',                        exampleEn: 'Do you have time? — Unfortunately not.' },
      { de: 'gar nicht',    en: 'not at all',                emoji: '🚫', hint: 'reinforced no · "not in the slightest"',         example: 'Bist du müde? — Gar nicht.',                           exampleEn: 'Are you tired? — Not at all.' },
      { de: 'auf keinen Fall', en: 'no way / under no circumstances', emoji: '❌', hint: 'strongest no possible',                 example: 'Möchtest du das? — Auf keinen Fall!',                  exampleEn: 'Do you want that? — No way!' },

      // 🔁 THE DOCH TRICK — Day-16 keystone
      { de: 'doch',         en: 'yes (contradicting a negative)', emoji: '🔁', hint: '⭐ used ONLY to contradict a nicht/kein question · German has NO English equivalent', example: 'Bist du nicht müde? — Doch! Ich bin sehr müde.',  exampleEn: 'Aren\'t you tired? — Yes I am! I am very tired.' },

      // 🤷 HEDGED ANSWERS — when you\'re not sure
      { de: 'vielleicht',   en: 'maybe',                     emoji: '🤷', hint: 'often leads the sentence → V2 inversion!',       example: 'Vielleicht komme ich morgen.',                         exampleEn: 'Maybe I will come tomorrow.' },
      { de: 'ich denke ja', en: 'I think so',                emoji: '💭', hint: 'leaning yes · uncertain',                        example: 'Kommt er? — Ich denke ja.',                            exampleEn: 'Is he coming? — I think so.' },
      { de: 'ich glaube nicht', en: 'I don\'t think so',     emoji: '🤨', hint: 'leaning no · uncertain',                         example: 'Hat er Zeit? — Ich glaube nicht.',                     exampleEn: 'Does he have time? — I don\'t think so.' },

      // ❓ SEIN QUESTIONS — verb to slot 1
      { de: 'Bist du …?',   en: 'Are you …? (informal)',     emoji: '🟦', hint: '🔁 Day 5 · sein flipped to slot 1',              example: 'Bist du müde?',                                        exampleEn: 'Are you tired?' },
      { de: 'Ist das …?',   en: 'Is that …?',                emoji: '👉', hint: 'pointing question · super common opener',        example: 'Ist das dein Buch?',                                   exampleEn: 'Is that your book?' },
      { de: 'Sind Sie …?',  en: 'Are you …? (formal)',       emoji: '🤝', hint: '🔁 Day 3 · formal Sie · always capital S',       example: 'Sind Sie Herr Schmidt?',                               exampleEn: 'Are you Mr Schmidt?' },

      // ❓ HABEN QUESTIONS
      { de: 'Hast du …?',   en: 'Do you have …?',            emoji: '🟩', hint: '🔁 Day 6 · haben flipped',                       example: 'Hast du Zeit?',                                        exampleEn: 'Do you have time?' },
      { de: 'Haben Sie …?', en: 'Do you have …? (formal)',   emoji: '💼', hint: 'formal Sie + haben',                             example: 'Haben Sie eine Frage?',                                exampleEn: 'Do you have a question?' },

      // ❓ MODAL QUESTIONS — the polite asks (Week 5 preview)
      { de: 'Möchtest du …?', en: 'Would you like …?',       emoji: '☕', hint: 'most polite invitation form · Week 5 preview',    example: 'Möchtest du einen Kaffee?',                            exampleEn: 'Would you like a coffee?' },
      { de: 'Kannst du …?',  en: 'Can you …?',               emoji: '💪', hint: 'asking for help / ability',                      example: 'Kannst du mir helfen?',                                exampleEn: 'Can you help me?' },
      { de: 'Magst du …?',   en: 'Do you like …?',           emoji: '😍', hint: 'asking about preference',                        example: 'Magst du Pizza?',                                      exampleEn: 'Do you like pizza?' },

      // 🧩 YES/NO QUESTION WITH SEPARABLE VERB — the sandwich still works
      { de: 'Stehst du … auf?', en: 'Do you get up …?',      emoji: '⏰', hint: '🔁 Day 12 · prefix STILL at END in questions',   example: 'Stehst du früh auf?',                                  exampleEn: 'Do you get up early?' },
      { de: 'Kommst du mit?',   en: 'Are you coming along?', emoji: '👫', hint: '🔁 Day 12 · mit- flies to end',                  example: 'Kommst du mit ins Kino?',                              exampleEn: 'Are you coming along to the cinema?' },
      { de: 'Rufst du … an?',   en: 'Will you call …?',      emoji: '📞', hint: '🔁 Day 12 · an- flies to end',                   example: 'Rufst du mich heute an?',                              exampleEn: 'Will you call me today?' },
    ],
    grammar: [
      { rule: '⭐ THE VERB-FIRST FLIP — yes/no questions in one rule',
        body:
          'To make a yes/no question, the conjugated verb moves to SLOT 1.\n' +
          'Subject and verb just swap places — no "do" helper like English.\n\n' +
          '  Statement                       Question\n' +
          '  ─────────                       ────────\n' +
          '  Du   bist müde.            →    Bist du müde?\n' +
          '  Sie  hat  Hunger.          →    Hat sie Hunger?\n' +
          '  Wir  wohnen in Berlin.     →    Wohnen wir in Berlin?\n' +
          '  Er   kommt aus Indien.     →    Kommt er aus Indien?\n' +
          '  Sie  sprechen Deutsch.     →    Sprechen Sie Deutsch?\n\n' +
          'No "tust du …?" — German never uses "do" as a helper. The main verb is enough.',
      },
      { rule: '⭐ THREE ANSWER PARTICLES — ja · nein · DOCH',
        body:
          'ja   — yes  → answer to a POSITIVE question.\n' +
          '         "Bist du müde?" — Ja, ich bin müde.\n\n' +
          'nein — no   → negative answer to any question.\n' +
          '         "Bist du müde?" — Nein, ich bin nicht müde.\n\n' +
          '⭐ DOCH — the killer particle. Use ONLY to contradict a NEGATIVE question.\n' +
          '         "Bist du NICHT müde?" — Doch! (= yes I AM, despite your "not")\n' +
          '         "Hast du KEIN Geld?"  — Doch! (= yes I do have money)\n\n' +
          'English has no single word for this — that\'s why doch is special. If you say "ja" to a negative question, Germans get confused. Train yourself: a "nicht" or "kein" in the question → reach for DOCH.',
      },
      { rule: '⚠ SEPARABLE VERBS — the prefix STILL flies to the end',
        body:
          'In a yes/no question the conjugated stem goes to slot 1, but the prefix STILL lands at the very end — exactly like a statement.\n\n' +
          '  Statement                            Question\n' +
          '  ─────────                            ────────\n' +
          '  Du stehst um 7 Uhr AUF.         →    Stehst du um 7 Uhr AUF?\n' +
          '  Wir kaufen am Samstag EIN.      →    Kaufen wir am Samstag EIN?\n' +
          '  Sie ruft mich heute AN.         →    Ruft sie mich heute AN?\n' +
          '  Er fängt um 8 Uhr AN.           →    Fängt er um 8 Uhr AN?\n\n' +
          'Rule of thumb: stem at the FRONT, prefix at the BACK — everything else in the middle. The sandwich still works.',
      },
      { rule: '⭐ POLITE YES/NO QUESTIONS — möchten · können · mögen',
        body:
          'These three modal verbs make yes/no questions sound polite. They\'re Week 5 grammar but you can use them as ready-made phrases NOW.\n\n' +
          '  Möchtest du …?  — Would you like …?         (most polite invitation)\n' +
          '                    Möchtest du einen Kaffee?\n' +
          '  Möchten Sie …?  — Would you like …? (formal)\n' +
          '                    Möchten Sie eine Frage?\n' +
          '  Kannst du …?    — Can you …? (ability / favour)\n' +
          '                    Kannst du mir helfen?\n' +
          '  Magst du …?     — Do you like …?\n' +
          '                    Magst du Pizza?\n\n' +
          'Polite tip: "Möchtest du …?" never offends. "Willst du …?" sounds blunt — save it for close friends.',
      },
      { rule: '🚦 ANSWER MENU — pick the right register',
        body:
          'Match the energy of the question:\n\n' +
          '  Strong yes  : Natürlich! · Klar! · Sicher!\n' +
          '  Neutral yes : Ja.\n' +
          '  Polite yes  : Ja, gerne. · Ja, bitte.\n' +
          '  Hedged      : Vielleicht. · Ich denke ja. · Ich glaube nicht.\n' +
          '  Neutral no  : Nein.\n' +
          '  Polite no   : Nein, danke. · Leider nicht.\n' +
          '  Strong no   : Gar nicht. · Auf keinen Fall.\n' +
          '  Contradict-the-negative : DOCH!\n\n' +
          'Tip: in everyday speech Germans often just say the particle alone ("Ja." / "Doch." / "Nein.") and trust context. Repeating the full sentence (Ja, ich habe Zeit.) is polite but optional.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — answer registers + statement→question + question→answer
      { type: 'match',
        pairs: [
          { de: 'Klar!',           en: '✅ strong casual yes' },
          { de: 'Ja, gerne.',      en: '✅ polite warm yes' },
          { de: 'Vielleicht.',     en: '🤷 hedged maybe' },
          { de: 'Nein, danke.',    en: '⛔ polite refusal' },
          { de: 'Gar nicht.',      en: '🚫 emphatic NO' },
          { de: 'Doch!',           en: '🔁 contradicting a NEGATIVE question' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'Du bist müde.',          en: 'Bist du müde?' },
          { de: 'Sie hat Hunger.',         en: 'Hat sie Hunger?' },
          { de: 'Wir wohnen in Berlin.',   en: 'Wohnen wir in Berlin?' },
          { de: 'Er spricht Deutsch.',     en: 'Spricht er Deutsch?' },
          { de: 'Du stehst um 7 auf.',     en: 'Stehst du um 7 auf?' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'Möchtest du einen Kaffee?',     en: 'Ja, gerne.' },
          { de: 'Bist du nicht müde?',           en: 'Doch! Ich bin sehr müde.' },
          { de: 'Hast du Zeit am Wochenende?',   en: 'Leider nicht.' },
          { de: 'Sprichst du Deutsch?',          en: 'Natürlich!' },
          { de: 'Magst du Spinat?',              en: 'Auf keinen Fall!' },
        ],
      },

      // ⭐ 6 BUILD-THE-QUESTION fill-blanks (the verb-first flip in action)
      { type: 'fill-blank', sentence: 'Statement: "Du bist müde." → Question: "__ du müde?"', answer: 'Bist' },
      { type: 'fill-blank', sentence: 'Statement: "Sie hat Hunger." → Question: "__ sie Hunger?"', answer: 'Hat' },
      { type: 'fill-blank', sentence: 'Statement: "Wir wohnen in Berlin." → Question: "__ wir in Berlin?"', answer: 'Wohnen' },
      { type: 'fill-blank', sentence: 'Statement: "Er kommt aus Indien." → Question: "__ er aus Indien?"', answer: 'Kommt' },
      { type: 'fill-blank', sentence: 'Statement: "Du sprichst Deutsch." → Question: "__ du Deutsch?"', answer: 'Sprichst' },
      { type: 'fill-blank', sentence: 'Formal — "Sie haben eine Frage." → Question: "__ Sie eine Frage?"', answer: 'Haben' },

      // ⭐ 3 SEPARABLE-VERB QUESTION fill-blanks (the sandwich survives)
      { type: 'fill-blank', sentence: '🧩 "Du stehst um 7 Uhr auf." → Question: "__ du um 7 Uhr __?"', answer: 'Stehst auf' },
      { type: 'fill-blank', sentence: '🧩 "Wir kaufen am Samstag ein." → Question: "__ wir am Samstag __?"', answer: 'Kaufen ein' },
      { type: 'fill-blank', sentence: '🧩 "Sie ruft mich heute an." → Question: "__ sie mich heute __?"', answer: 'Ruft an' },

      // ⭐ 4 DOCH-vs-JA-vs-NEIN MCQs (the day\'s killer particle)
      { type: 'multiple-choice', q: '"Bist du nicht müde?" — Yes I AM! (contradicting). Pick the right answer.',
        options: ['Ja!','Nein!','Doch!','Vielleicht!'], answer: 'Doch!',
        explain: '"nicht" in the question → answer with DOCH to contradict it.' },
      { type: 'multiple-choice', q: '"Hast du kein Geld?" — Yes, I DO have money. Pick the right answer.',
        options: ['Ja!','Doch!','Nein!','Klar!'], answer: 'Doch!',
        explain: '"kein" makes the question negative, so the contradicting yes is DOCH.' },
      { type: 'multiple-choice', q: '"Sprichst du Deutsch?" — Yes, I do. The neutral answer is:',
        options: ['Doch!','Ja.','Nein.','Vielleicht.'], answer: 'Ja.',
        explain: 'The question is POSITIVE, so a plain "Ja" works. Doch is only for negative questions.' },
      { type: 'multiple-choice', q: '"Hast du Hunger?" — No, not at all. Strongest no:',
        options: ['Nein, danke.','Vielleicht.','Gar nicht.','Doch.'], answer: 'Gar nicht.' },

      // ⚠ 3 SPOT-THE-ERROR MCQs (verb position + doch misuse + separable prefix)
      { type: 'multiple-choice', q: '⚠ Which is the CORRECT yes/no question for "Wir gehen ins Kino"?',
        options: ['Wir gehen ins Kino?','Gehen wir ins Kino?','Ins Kino wir gehen?','Tun wir ins Kino gehen?'], answer: 'Gehen wir ins Kino?',
        explain: 'The verb MUST move to slot 1. German has no "do/tun" helper.' },
      { type: 'multiple-choice', q: '⚠ "Bist du müde?" — Yes I am. WRONG answer is:',
        options: ['Ja, ich bin müde.','Ja.','Doch.','Klar.'], answer: 'Doch.',
        explain: 'The question is POSITIVE → "doch" is wrong here. Use doch ONLY when the question contains nicht or kein.' },
      { type: 'multiple-choice', q: '⚠ "Du stehst früh auf." → Yes/No question. Which is correct?',
        options: ['Du stehst früh auf?','Stehst du früh auf?','Aufstehst du früh?','Stehst auf du früh?'], answer: 'Stehst du früh auf?',
        explain: 'Only the STEM moves to slot 1. The prefix "auf" still flies to the very end.' },

      // ❓ 2 POLITE-FORM MCQs (möchten vs willst register)
      { type: 'multiple-choice', q: 'Politest way to offer coffee:',
        options: ['Willst du Kaffee?','Möchtest du einen Kaffee?','Hast du Kaffee?','Trinkst du Kaffee?'], answer: 'Möchtest du einen Kaffee?',
        explain: '"Möchtest du …?" is the polite invitation. "Willst du …?" sounds blunt to strangers.' },
      { type: 'multiple-choice', q: 'Formal yes/no question for "Sprechen Sie Deutsch":',
        options: ['Sprechen Sie Deutsch?','Sprichst du Deutsch?','Du Deutsch sprichst?','Tun Sie Deutsch sprechen?'], answer: 'Sprechen Sie Deutsch?' },

      // ⭐ 2 NEGATIVE-QUESTION → DOCH fill-blanks
      { type: 'fill-blank', sentence: '"Hast du nicht Zeit?" — (yes I do, contradicting!) → "__!"', answer: 'Doch' },
      { type: 'fill-blank', sentence: '"Bist du kein Lehrer?" — (yes I am, contradicting!) → "__!"', answer: 'Doch' },

      // 💬 Dialogue — verb-first + doch + möchten + separable
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Hast du Zeit am Wochenende?',          en: 'Do you have time on the weekend?' },
        { speaker: 'B', de: 'Ja, ich habe Zeit.',                   en: 'Yes, I have time.' },
        { speaker: 'A', de: 'Möchtest du ins Restaurant gehen?',    en: 'Would you like to go to the restaurant?' },
        { speaker: 'B', de: 'Ja, gerne. Stehst du auch früh auf?',  en: 'Yes, gladly. Do you also get up early?' },
        { speaker: 'A', de: 'Doch, ich stehe immer um 7 Uhr auf.',  en: 'Yes (despite your assumption), I always get up at 7.' },
        { speaker: 'B', de: 'Klar. Rufst du mich morgen an?',       en: 'Sure. Will you call me tomorrow?' },
        { speaker: 'A', de: 'Natürlich!',                           en: 'Of course!' },
      ]},
    ],
    quiz: [
      { type: 'multiple-choice', q: 'Where does the conjugated verb go in a yes/no question?',
        options: ['Position 1','Position 2','Position 3','At the end'], answer: 'Position 1' },
      { type: 'multiple-choice', q: '"Bist du nicht müde?" — Yes I AM! Correct contradicting answer:',
        options: ['Ja','Nein','Doch','Vielleicht'], answer: 'Doch',
        explain: 'A negative question (nicht/kein) is contradicted with DOCH.' },
      { type: 'fill-blank', sentence: 'Make the question: "Sie spricht Deutsch." → "__ sie Deutsch?"', answer: 'Spricht' },
      { type: 'fill-blank', sentence: '🧩 Separable verb question: "Du stehst um 7 auf." → "__ du um 7 __?"', answer: 'Stehst auf' },
      { type: 'multiple-choice', q: 'Politest yes/no offer for "Would you like tea?":',
        options: ['Willst du Tee?','Möchtest du Tee?','Hast du Tee?','Tee du möchtest?'], answer: 'Möchtest du Tee?' },
      { type: 'multiple-choice', q: '"Sprichst du Deutsch?" — Yes I do. Most NATURAL answer:',
        options: ['Doch.','Ja.','Vielleicht.','Auf keinen Fall.'], answer: 'Ja.',
        explain: 'Positive question → plain "Ja" works.' },
      { type: 'fill-blank', sentence: 'Strongest "no way" answer to "Möchtest du das?" — "__ keinen __!"', answer: 'Auf Fall' },
    ],
  },

  /* ----- Day 17: W-questions (slide 76 — 10 W-words) ----- */
  {
    id: 17, week: 3,
    vocabLayout: 'spotlight',
    title: 'W-questions',
    titleDe: 'W-Fragen',
    emoji: '🔍',
    objective: 'Open ANY question with a W-word — who · what · where (at/to/from) · when · why · how · which — keeping the verb glued to slot 2.',
    intro: 'A W-question starts with a question word in slot 1, then the verb in slot 2, then the subject, then everything else. "Wer bist du? Wo wohnst du? Wann kommst du?" The verb-2 rule from Day 9 still rules — the W-word just fills slot 1.',
    vocabulary: [
      // 🔤 THE CORE W-WORDS (the 12 you actually use every day)
      { de: 'wer',       en: 'who',                        emoji: '🧑',  hint: 'asks about a PERSON · "Wer ist das?"',                example: 'Wer kommt heute Abend?',          exampleEn: 'Who is coming this evening?' },
      { de: 'was',       en: 'what',                       emoji: '🎯',  hint: 'asks about a THING / action',                          example: 'Was machst du heute?',            exampleEn: 'What are you doing today?' },
      { de: 'wo',        en: 'where (at)',                 emoji: '📍',  hint: '⭐ no movement · location',                            example: 'Wo wohnst du?',                   exampleEn: 'Where do you live?' },
      { de: 'wohin',     en: 'where to',                   emoji: '➡️',  hint: '⭐ movement AWAY · destination',                       example: 'Wohin gehst du?',                  exampleEn: 'Where are you going?' },
      { de: 'woher',     en: 'where from',                 emoji: '🌍',  hint: '⭐ origin · pairs with "aus …"',                       example: 'Woher kommst du?',                 exampleEn: 'Where do you come from?' },
      { de: 'wann',      en: 'when',                       emoji: '🕐',  hint: 'asks about TIME',                                     example: 'Wann kommst du nach Hause?',       exampleEn: 'When are you coming home?' },
      { de: 'warum',     en: 'why',                        emoji: '❔',  hint: 'asks for a REASON · answer with "weil …"',            example: 'Warum lernst du Deutsch?',         exampleEn: 'Why are you learning German?' },
      { de: 'wieso',     en: 'why (more conversational)',  emoji: '🤔',  hint: 'spoken-German favourite · same meaning as warum',     example: 'Wieso bist du müde?',              exampleEn: 'Why are you tired?' },
      { de: 'wie',       en: 'how',                        emoji: '❓',  hint: 'also covers "what" in name/greeting questions',       example: 'Wie heißt du?',                    exampleEn: 'What is your name?' },
      { de: 'welcher',   en: 'which (m / der-words)',      emoji: '🔵',  hint: '⭐ changes by gender · welcher/welche/welches',         example: 'Welcher Tisch ist neu?',           exampleEn: 'Which table is new?' },
      { de: 'wie viel',  en: 'how much',                   emoji: '💶',  hint: 'singular (uncountable / money)',                      example: 'Wie viel kostet das Brot?',        exampleEn: 'How much does the bread cost?' },
      { de: 'wie viele', en: 'how many',                   emoji: '🔢',  hint: 'plural (countable things)',                           example: 'Wie viele Bücher hast du?',        exampleEn: 'How many books do you have?' },

      // 🎯 READY-MADE W-QUESTION PHRASES (drop in and use)
      { de: 'Wie heißt du?',         en: 'What\'s your name? (informal)', emoji: '🪪',  hint: '🔁 Day 14 · NOT "Wie ist dein Name?"',          example: 'Wie heißt du? — Ich heiße Anna.',    exampleEn: 'What\'s your name? — My name is Anna.' },
      { de: 'Wie heißen Sie?',       en: 'What\'s your name? (formal)',   emoji: '🤝',  hint: 'formal Sie · always capital S',                example: 'Wie heißen Sie? — Mein Name ist Anna.', exampleEn: 'What\'s your name? — My name is Anna.' },
      { de: 'Wie geht\'s?',          en: 'How\'s it going?',              emoji: '👋',  hint: 'short for "Wie geht es dir?" · greeting',      example: 'Wie geht\'s? — Gut, danke!',         exampleEn: 'How are you? — Good, thanks!' },
      { de: 'Wie alt bist du?',      en: 'How old are you?',              emoji: '🎂',  hint: '🔁 Day 14 · uses sein, not haben',             example: 'Wie alt bist du? — Ich bin 25.',      exampleEn: 'How old are you? — I am 25.' },
      { de: 'Was ist das?',          en: 'What is that?',                 emoji: '👉',  hint: 'pointing question · super common',             example: 'Was ist das? — Das ist ein Buch.',    exampleEn: 'What is that? — That is a book.' },
      { de: 'Wer ist das?',          en: 'Who is that?',                  emoji: '🧑',  hint: 'pointing at a person',                         example: 'Wer ist das? — Das ist mein Freund.', exampleEn: 'Who is that? — That is my friend.' },
      { de: 'Wo ist …?',             en: 'Where is …?',                   emoji: '🗺️', hint: 'location question · trains, bathrooms…',       example: 'Wo ist der Bahnhof?',                 exampleEn: 'Where is the train station?' },
      { de: 'Wie viel kostet das?',  en: 'How much does that cost?',      emoji: '💶',  hint: 'shopping essential',                           example: 'Wie viel kostet das Brot?',           exampleEn: 'How much does the bread cost?' },
      { de: 'Warum nicht?',          en: 'Why not?',                      emoji: '🤷',  hint: 'one-word comeback · accepting an invite',      example: 'Möchtest du Kaffee? — Warum nicht?',  exampleEn: 'Would you like coffee? — Why not?' },
      { de: 'Was für (ein) …?',      en: 'What kind of …?',               emoji: '🎁',  hint: '⚠ different from welcher · asks the TYPE',     example: 'Was für ein Buch liest du?',           exampleEn: 'What kind of book are you reading?' },

      // 🔵 WELCHER tri-form (which: m / f / n)
      { de: 'welche',                en: 'which (f · die-words)',         emoji: '🟣',  hint: '⭐ feminine ending -e',                        example: 'Welche Tasche ist neu?',               exampleEn: 'Which bag is new?' },
      { de: 'welches',               en: 'which (n · das-words)',         emoji: '🟢',  hint: '⭐ neuter ending -es',                         example: 'Welches Buch liest du?',               exampleEn: 'Which book are you reading?' },
    ],
    grammar: [
      { rule: '⭐ THE W-QUESTION PATTERN — W-word · verb · subject · …',
        body:
          'A W-question fills slot 1 with the W-word, slot 2 with the conjugated verb, slot 3 with the subject. The V2 rule from Day 9 still rules — the W-word just IS slot 1.\n\n' +
          '  Slot 1     Slot 2  Slot 3   …\n' +
          '  ──────     ──────  ──────   ─────\n' +
          '  Wer        ist     das?\n' +
          '  Was        machst  du       heute?\n' +
          '  Wo         wohnst  du?\n' +
          '  Wann       kommst  du       nach Hause?\n' +
          '  Warum      lernst  du       Deutsch?\n' +
          '  Wie        heißt   du?\n' +
          '  Wie viel   kostet  das?\n\n' +
          'No "do" helper — German never says "Was tust du machen?" The conjugated verb does all the work.',
      },
      { rule: '⭐ ⚠ THE WO TRIPLE — wo · wohin · woher',
        body:
          'English uses "where" for everything. German splits it three ways depending on movement:\n\n' +
          '  📍 wo    = where (AT, no movement)  → pairs with "in / an / auf" + STATIC verbs (sein, wohnen, bleiben)\n' +
          '             "Wo ist der Bahnhof?"\n' +
          '             "Wo wohnst du?"\n\n' +
          '  ➡️ wohin = where TO (destination)   → pairs with "nach / zu / in" + MOVEMENT verbs (gehen, fahren, fliegen)\n' +
          '             "Wohin gehst du?"  — Ich gehe nach Hause.\n' +
          '             "Wohin fährst du?" — Ich fahre nach Berlin.\n\n' +
          '  🌍 woher = where FROM (origin)      → pairs with "aus …"\n' +
          '             "Woher kommst du?" — Ich komme aus Indien.\n\n' +
          '⚠ Common mistake: "Wo gehst du?" ✗ — if there\'s movement, you NEED wohin. Train your ear: any verb of motion → wohin / woher.',
      },
      { rule: '🔵 WELCHER — gender-matched "which"',
        body:
          'welcher is THE only W-word that changes shape. It follows the article it replaces:\n\n' +
          '  Gender   article  →  welcher-form    Example\n' +
          '  ──────   ───────     ───────────     ───────\n' +
          '  m  (der)  → welcher                 Welcher Tisch ist neu?\n' +
          '  f  (die)  → welche                  Welche Tasche ist neu?\n' +
          '  n  (das)  → welches                 Welches Buch liest du?\n' +
          '  pl (die)  → welche                  Welche Bücher liest du?\n\n' +
          'Tip: welcher rhymes with der · welches rhymes with das · welche rhymes with die. Same endings as the article — that\'s the whole rule.',
      },
      { rule: '⚠ WAS FÜR vs WELCHER — kind vs which-specific',
        body:
          'These two are NOT interchangeable:\n\n' +
          '  Welcher / welche / welches  =  WHICH specific one? (from a known set)\n' +
          '    "Welches Buch liest du?"   — meaning: of the books we both know, which one?\n\n' +
          '  Was für (ein) …?            =  What KIND / TYPE? (open-ended)\n' +
          '    "Was für ein Buch liest du?" — meaning: tell me about the type / genre / topic.\n\n' +
          '"Was für" stays unchanged (the "ein" inside it follows normal article rules). Use it when you want a description, not a choice.',
      },
      { rule: '🚦 COMMON PITFALLS & SPOKEN SHORTCUTS',
        body:
          '• wer (WHO) ≠ was (WHAT) — "Wer ist das?" for people, "Was ist das?" for things.\n' +
          '• "Wie heißt du?" is the natural choice for name — "Wie ist dein Name?" is grammatically fine but stiff.\n' +
          '• In casual speech, "Wieso?" replaces "Warum?" all the time — they mean the same thing.\n' +
          '• "Warum nicht?" is a one-word polite acceptance: Möchtest du …? — Warum nicht?\n' +
          '• Verb stays in slot 2 even with a long W-phrase: "Wie viel kostet das?" — wie viel is ONE unit in slot 1.\n' +
          '• German has no "do" helper. "Was machst du?" ✓ · "Was tust du machen?" ✗.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — W-word → meaning · wo-triple → context · English Q → German Q
      { type: 'match',
        pairs: [
          { de: 'wer',      en: '🧑 asks about a PERSON' },
          { de: 'was',      en: '🎯 asks about a THING / action' },
          { de: 'wann',     en: '🕐 asks about TIME' },
          { de: 'warum',    en: '❔ asks for a REASON' },
          { de: 'wie',      en: '❓ HOW (also "what" for name/greeting)' },
          { de: 'welcher',  en: '🔵 WHICH specific one (gender-matched)' },
          { de: 'wie viel', en: '💶 HOW MUCH (uncountable / money)' },
          { de: 'wie viele',en: '🔢 HOW MANY (countable)' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'Wo ist der Bahnhof?',     en: '📍 location · no movement' },
          { de: 'Wohin gehst du?',          en: '➡️ destination · movement TO' },
          { de: 'Woher kommst du?',         en: '🌍 origin · "aus …"' },
          { de: 'Wo wohnst du?',            en: '📍 location · sein/wohnen' },
          { de: 'Wohin fährst du?',         en: '➡️ destination · fahren' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'Wie heißt du?',            en: 'What is your name?' },
          { de: 'Wie alt bist du?',         en: 'How old are you?' },
          { de: 'Wo wohnst du?',            en: 'Where do you live?' },
          { de: 'Woher kommst du?',         en: 'Where are you from?' },
          { de: 'Wie viel kostet das?',     en: 'How much does that cost?' },
          { de: 'Was machst du beruflich?', en: 'What do you do for a living?' },
        ],
      },

      // ⭐ 7 BUILD-THE-W-QUESTION fill-blanks
      { type: 'fill-blank', sentence: '__ ist das? (who)',                        answer: 'Wer' },
      { type: 'fill-blank', sentence: '__ heißt du?',                             answer: 'Wie' },
      { type: 'fill-blank', sentence: '__ machst du heute? (what)',               answer: 'Was' },
      { type: 'fill-blank', sentence: '__ kommst du nach Hause? (when)',          answer: 'Wann' },
      { type: 'fill-blank', sentence: '__ lernst du Deutsch? (why)',              answer: 'Warum' },
      { type: 'fill-blank', sentence: '__ kostet das? (how much)',                answer: 'Wie viel' },
      { type: 'fill-blank', sentence: '__ Bücher hast du? (how many)',            answer: 'Wie viele' },

      // ⭐ 4 WO/WOHIN/WOHER fill-blanks (the day\'s killer pair)
      { type: 'fill-blank', sentence: '📍 __ wohnst du? (location · no movement)', answer: 'Wo' },
      { type: 'fill-blank', sentence: '➡️ __ gehst du? (destination)',             answer: 'Wohin' },
      { type: 'fill-blank', sentence: '🌍 __ kommst du? (origin)',                 answer: 'Woher' },
      { type: 'fill-blank', sentence: '➡️ __ fährst du? (movement to)',            answer: 'Wohin' },

      // 🔵 3 WELCHER MCQs (gender-matched)
      { type: 'multiple-choice', q: '"__ Tisch ist neu?" (Tisch is masculine)',
        options: ['Welcher','Welche','Welches','Was für'], answer: 'Welcher',
        explain: 'masculine der-word → welcher.' },
      { type: 'multiple-choice', q: '"__ Tasche ist neu?" (Tasche is feminine)',
        options: ['Welcher','Welche','Welches','Was für'], answer: 'Welche',
        explain: 'feminine die-word → welche.' },
      { type: 'multiple-choice', q: '"__ Buch liest du?" (Buch is neuter)',
        options: ['Welcher','Welche','Welches','Was für'], answer: 'Welches',
        explain: 'neuter das-word → welches.' },

      // ⚠ 3 SPOT-THE-ERROR / wer-vs-was / V2 MCQs
      { type: 'multiple-choice', q: '⚠ "Where are you going?" — CORRECT German:',
        options: ['Wo gehst du?','Wohin gehst du?','Woher gehst du?','Was gehst du?'], answer: 'Wohin gehst du?',
        explain: 'gehen = movement → wohin, not wo.' },
      { type: 'multiple-choice', q: '⚠ Pointing at a person: "Who is that?" =',
        options: ['Was ist das?','Wer ist das?','Wie ist das?','Welcher ist das?'], answer: 'Wer ist das?',
        explain: 'wer for people, was for things.' },
      { type: 'multiple-choice', q: '⚠ Which sentence has the WRONG word order?',
        options: ['Was machst du?','Wo wohnst du?','Wann du kommst?','Warum lernst du Deutsch?'], answer: 'Wann du kommst?',
        explain: 'V2 rule: verb in slot 2. "Wann KOMMST du?" — subject is in slot 3.' },

      // 💬 2 WAS-FÜR vs WELCHER MCQs
      { type: 'multiple-choice', q: 'Asking for the TYPE / genre (not a specific choice): "__ Buch liest du?"',
        options: ['Welches','Was für ein','Welcher','Wie viel'], answer: 'Was für ein',
        explain: '"Was für ein …?" = what kind of? · "Welches" = which specific one.' },
      { type: 'multiple-choice', q: 'Picking ONE specific item from a known set: "__ Tasche ist neu?"',
        options: ['Welche','Was für eine','Wie','Woher'], answer: 'Welche',
        explain: 'welche for a specific choice from a known set; Tasche is feminine.' },

      // 💬 Mini dialogue — sweeps wer/was/wo/wohin/woher/wann/warum/wie + welches + wie viel
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Wie heißt du?',                  en: 'What is your name?' },
        { speaker: 'B', de: 'Ich heiße Anna.',                en: 'My name is Anna.' },
        { speaker: 'A', de: 'Woher kommst du?',               en: 'Where are you from?' },
        { speaker: 'B', de: 'Ich komme aus Indien.',          en: 'I come from India.' },
        { speaker: 'A', de: 'Wo wohnst du jetzt?',            en: 'Where do you live now?' },
        { speaker: 'B', de: 'Jetzt wohne ich in Berlin.',     en: 'Now I live in Berlin.' },
        { speaker: 'A', de: 'Wohin gehst du heute Abend?',    en: 'Where are you going this evening?' },
        { speaker: 'B', de: 'Ich gehe ins Restaurant.',       en: 'I am going to the restaurant.' },
        { speaker: 'A', de: 'Warum lernst du Deutsch?',       en: 'Why are you learning German?' },
        { speaker: 'B', de: 'Weil ich hier arbeite.',         en: 'Because I work here.' },
        { speaker: 'A', de: 'Wie viel kostet die Wohnung?',   en: 'How much does the apartment cost?' },
        { speaker: 'B', de: 'Achthundert Euro pro Monat.',    en: 'Eight hundred euros per month.' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: '"What is that?" → __ ist das?', answer: 'Was' },
      { type: 'multiple-choice', q: '"Where are you going?" — Pick the right W-word.',
        options: ['Wo','Wohin','Woher','Wann'], answer: 'Wohin',
        explain: 'Movement → wohin.' },
      { type: 'multiple-choice', q: '"__ Buch liest du?" (Buch is neuter — choose the right "which")',
        options: ['Welcher','Welche','Welches','Was für'], answer: 'Welches' },
      { type: 'fill-blank', sentence: '"How many books do you have?" → __ Bücher hast du?', answer: 'Wie viele' },
      { type: 'multiple-choice', q: 'Asking the TYPE (open-ended): "__ Buch liest du?"',
        options: ['Welches','Was für ein','Wo','Warum'], answer: 'Was für ein' },
      { type: 'multiple-choice', q: 'Which sentence has the WRONG word order?',
        options: ['Was machst du?','Wo du wohnst?','Wann kommst du?','Warum lernst du Deutsch?'], answer: 'Wo du wohnst?',
        explain: 'V2 rule: verb in slot 2. "Wo WOHNST du?" — subject is in slot 3.' },
      { type: 'fill-blank', sentence: 'Casual spoken alternative to "Warum bist du müde?" → "__ bist du müde?"', answer: 'Wieso' },
    ],
  },

  /* ----- Day 19: Big numbers & prices (slides 143-145, 186-187, 256) ----- */
  {
    id: 19, week: 3,
    vocabLayout: 'spotlight',
    title: 'Big numbers & prices',
    titleDe: 'Große Zahlen & Preise',
    emoji: '💶',
    objective: 'Read 4–7 digit numbers, handle euros & cents at any checkout, and describe prices like a local (teuer · günstig · im Angebot · Rabatt).',
    intro: 'Past 1 000, German numbers look scary but use the SAME Lego rule as Day 18 — just more bricks. Add the comma-swap trick (1.234,56 €), the polite teuer/billig/günstig ladder, and a handful of checkout phrases — and you can shop, pay, and read any salary listing.',
    vocabulary: [
      // 🔟 THE THOUSANDS LADDER — same Lego rule, more bricks
      { de: 'tausend',          en: '1 000',          emoji: '🔟', hint: 'either "tausend" or "eintausend" · same Lego rule',     example: 'Tausend Euro pro Monat.',                          exampleEn: 'One thousand euros per month.' },
      { de: 'zweitausend',      en: '2 000',          emoji: '2⃣🔟', hint: 'multiplier + tausend · one word',                     example: 'Zweitausend Euro pro Jahr für Strom.',             exampleEn: 'Two thousand euros per year for electricity.' },
      { de: 'fünftausend',      en: '5 000',          emoji: '5⃣🔟', hint: 'fünf + tausend · still one word',                      example: 'Fünftausend Schritte am Tag.',                     exampleEn: 'Five thousand steps a day.' },
      { de: 'zehntausend',      en: '10 000',         emoji: '🔢', hint: 'zehn + tausend',                                         example: 'Zehntausend Studenten an der Uni.',                exampleEn: 'Ten thousand students at the university.' },
      { de: 'fünfzigtausend',   en: '50 000',         emoji: '💸', hint: 'fünfzig + tausend · typical salary number',              example: 'Mein Bruder verdient fünfzigtausend Euro pro Jahr.', exampleEn: 'My brother earns fifty thousand euros a year.' },
      { de: 'hunderttausend',   en: '100 000',        emoji: '💯', hint: 'hundert + tausend · one word',                           example: 'Das Auto kostet hunderttausend Euro.',             exampleEn: 'The car costs one hundred thousand euros.' },
      { de: 'eine Million',     en: '1 000 000',      emoji: '🪙', hint: '⚠ FEMININE (eine, not ein) · separate word with capital M', example: 'Eine Million Menschen leben hier.',              exampleEn: 'One million people live here.' },
      { de: 'eine Milliarde',   en: '1 000 000 000',  emoji: '🌐', hint: '⚠ Milliarde = English BILLION (10⁹) · not "Billion"!',     example: 'Eine Milliarde Sterne.',                           exampleEn: 'A billion stars.' },

      // 🧮 BIG-NUMBER LEGO IN ACTION (worked examples)
      { de: 'eintausendzweihundertvierunddreißig',       en: '1 234',     emoji: '🧮', hint: 'tausend + hundert + flip',                       example: 'Eintausendzweihundertvierunddreißig Euro Miete.',           exampleEn: 'One thousand two hundred thirty-four euros rent.' },
      { de: 'neuntausendachthundertsechsundsiebzig',     en: '9 876',     emoji: '🧮', hint: 'all-9876 · biggest 4-digit demo',                 example: 'Das Modell kostet neuntausendachthundertsechsundsiebzig Euro.', exampleEn: 'The model costs nine thousand eight hundred seventy-six euros.' },
      { de: 'vierundzwanzigtausendvierhundertneunundneunzig', en: '24 499', emoji: '🚗', hint: '⭐ for 21 000+, the multiplier itself FLIPS first', example: 'Das Auto kostet vierundzwanzigtausendvierhundertneunundneunzig Euro.', exampleEn: 'The car costs twenty-four thousand four hundred ninety-nine euros.' },
      { de: 'eine Million fünfhunderttausend',           en: '1 500 000', emoji: '🏠', hint: 'Million + the rest (separate words)',              example: 'Die Wohnung kostet eine Million fünfhunderttausend Euro.', exampleEn: 'The apartment costs one million five hundred thousand euros.' },

      // 💶 MONEY & CURRENCY
      { de: 'der Euro',     en: 'euro',         emoji: '💶', hint: '€ · plural Euro (unchanged)',                example: 'Das kostet zehn Euro.',          exampleEn: 'That costs ten euros.' },
      { de: 'der Cent',     en: 'cent',         emoji: '🪙', hint: '¢ · usually dropped in speech',              example: 'Zehn Euro fünfzig (Cent).',      exampleEn: 'Ten euros fifty (cents).' },
      { de: 'das Geld',     en: 'money',        emoji: '💰', hint: 'uncountable · always das Geld',              example: 'Ich habe wenig Geld.',           exampleEn: 'I have little money.' },
      { de: 'die Münze',    en: 'coin',         emoji: '🟡', hint: 'plural: Münzen',                             example: 'Ich habe nur Münzen.',           exampleEn: 'I only have coins.' },
      { de: 'der Schein',   en: 'banknote / bill', emoji: '💵', hint: 'der Zehn-Euro-Schein = the €10 note',     example: 'Hier ist ein Fünfzig-Euro-Schein.', exampleEn: 'Here is a fifty-euro note.' },

      // 💰 PRICE — ASKING, ANSWERING, PAYING
      { de: 'kosten',         en: 'to cost',                       emoji: '🏷️', hint: '🔁 Day 18 · "kostet" = costs',                 example: 'Wie viel kostet das?',                     exampleEn: 'How much does that cost?' },
      { de: 'der Preis',      en: 'price',                         emoji: '🏷️', hint: 'masc · "Was ist der Preis?"',                  example: 'Der Preis ist gut.',                       exampleEn: 'The price is good.' },
      { de: 'bezahlen',       en: 'to pay',                        emoji: '💳', hint: 'regular verb · ich bezahle / du bezahlst',      example: 'Ich bezahle mit Karte.',                   exampleEn: 'I pay by card.' },
      { de: 'mit Karte',      en: 'by card',                       emoji: '💳', hint: 'checkout phrase · contactless / credit',         example: 'Bezahlen Sie mit Karte oder bar?',         exampleEn: 'Are you paying by card or cash?' },
      { de: 'bar',            en: 'cash',                          emoji: '💵', hint: '"in cash" · adverb · "bar bezahlen"',            example: 'Ich bezahle bar.',                         exampleEn: 'I am paying in cash.' },
      { de: 'inklusive',      en: 'including (inkl.)',             emoji: '✅', hint: '"inkl. MwSt" = incl. VAT · receipt staple',     example: 'Hundert Euro inkl. MwSt.',                 exampleEn: 'One hundred euros incl. VAT.' },

      // 🏷️ DESCRIBING A PRICE — register matters
      { de: 'teuer',          en: 'expensive',                     emoji: '💸', hint: 'neutral · "Das ist teuer"',                     example: 'Das Auto ist sehr teuer.',                 exampleEn: 'The car is very expensive.' },
      { de: 'billig',         en: 'cheap',                         emoji: '👎', hint: '⚠ can mean "cheap quality" · sounds negative', example: 'Diese Tasche ist billig — schlechte Qualität.', exampleEn: 'This bag is cheap — bad quality.' },
      { de: 'günstig',        en: 'good value / affordable',       emoji: '👍', hint: '⭐ polite way to say "cheap" · preferred',       example: 'Die Wohnung ist sehr günstig.',            exampleEn: 'The apartment is very good value.' },
      { de: 'im Angebot',     en: 'on sale / on offer',            emoji: '🏷️', hint: 'shop-window magic word',                        example: 'Heute sind die Schuhe im Angebot.',        exampleEn: 'Today the shoes are on sale.' },
      { de: 'der Rabatt',     en: 'discount',                      emoji: '🎯', hint: '"10 % Rabatt" = 10 % off',                     example: 'Es gibt zehn Prozent Rabatt.',             exampleEn: 'There is a ten percent discount.' },
    ],
    grammar: [
      { rule: '⭐ BIG NUMBERS — same Lego rule, more bricks',
        body:
          'Past 1 000 the formula stays the same. Read biggest-first, glue everything into ONE word:\n\n' +
          '  multiplier·tausend  +  multiplier·hundert  +  units-UND-tens\n\n' +
          'Worked examples (underscores show the Lego seams):\n\n' +
          '  1 234  = ein_tausend + zwei_hundert + vier_und_dreißig\n' +
          '         → eintausendzweihundertvierunddreißig\n' +
          '  9 876  = neun_tausend + acht_hundert + sechs_und_siebzig\n' +
          '         → neuntausendachthundertsechsundsiebzig\n' +
          '  24 499 = vier_und_zwanzig·tausend + vier_hundert + neun_und_neunzig\n' +
          '         → vierundzwanzigtausendvierhundertneunundneunzig\n\n' +
          '⭐ THE TWIST AT 21 000+: the multiplier in front of "tausend" itself uses the FLIP rule.\n' +
          '  24 000 = vier-UND-zwanzig + tausend → vierundzwanzigtausend (NOT "zwanzigvierhausend")\n' +
          '  73 000 = drei-UND-siebzig + tausend → dreiundsiebzigtausend\n\n' +
          '🧠 Quick parse: chunk the digits from the right in 3s (24 499 → 24 | 499) and read each chunk with its unit label (tausend / hundert / nothing).',
      },
      { rule: '⭐ MILLION & MILLIARDE — different rules + the BILLION trap',
        body:
          'Million and Milliarde are NOUNS, not number-suffixes. They behave differently from tausend:\n\n' +
          '  • Feminine (DIE): die Million · die Milliarde\n' +
          '  • Take the indefinite article "eine" — "eine Million" (NOT "ein Million") ✓\n' +
          '  • Stand as SEPARATE words — "eine Million Euro" (not "einmillioneuro")\n' +
          '  • Capital first letter — "eine Million" (always capitalised)\n' +
          '  • Plural: Millionen / Milliarden — "drei Millionen Euro"\n\n' +
          '⚠ THE FALSE-FRIEND BILLION TRAP:\n' +
          '  English BILLION  = 1 000 000 000 (10⁹)     →  German MILLIARDE\n' +
          '  English TRILLION = 1 000 000 000 000 (10¹²) →  German BILLION\n\n' +
          'Reading "der Staat hat 1 Billion Euro Schulden" as "1 billion" loses you a factor of 1 000! Always use Milliarde for the English billion.',
      },
      { rule: '⭐ DECIMALS & THOUSANDS — German swaps the . and ,',
        body:
          'German uses , for decimals and . for thousands — the OPPOSITE of English/US convention:\n\n' +
          '  German  1.234,56 €   ↔   English  1,234.56\n' +
          '  German  3,14 (Pi)    ↔   English  3.14\n' +
          '  German  1.000        ↔   English  1,000\n\n' +
          'Spoken decimals use the word "Komma":\n' +
          '  3,14   →  drei Komma eins vier\n' +
          '  9,99 € →  neun Komma neun neun Euro  (or just "neun Euro neunundneunzig")\n\n' +
          '💶 PRICE SPEECH SHORTCUT:\n' +
          '  Written:  12,50 €\n' +
          '  Spoken:   "zwölf Euro fünfzig" (Cent is usually dropped)\n' +
          '  Formal:   "zwölf Euro fünfzig Cent"',
      },
      { rule: '💶 PRICES — ask, answer, pay',
        body:
          'ASKING:\n' +
          '  Wie viel kostet das?   — How much does this cost? (most common)\n' +
          '  Was kostet das?         — same, slightly shorter\n' +
          '  Was macht das?          — What does it come to? (at checkout)\n' +
          '  Was ist der Preis?      — What\'s the price? (more formal)\n\n' +
          'ANSWERING:\n' +
          '  Das kostet 13 Euro.            — formal\n' +
          '  Das macht 25 Euro fünfzig.     — checkout\n' +
          '  Zehn Euro, bitte.              — a tip-or-stall reply\n' +
          '  Hundert Euro inkl. MwSt.       — including VAT (you\'ll see "inkl. MwSt" on every receipt)\n\n' +
          'PAYING:\n' +
          '  Q: Bar oder mit Karte?   — Cash or card?\n' +
          '  A: Mit Karte, bitte.     — Card, please.\n' +
          '  A: Bar.                  — Cash.\n' +
          '  "Stimmt so!"             — "Keep the change!" (one of the most-used checkout phrases)',
      },
      { rule: '🏷️ DESCRIBING PRICES — pick the right word (it\'s social!)',
        body:
          'The teuer / billig / günstig ladder is a REGISTER question, not just translation:\n\n' +
          '  💸 teuer    — "expensive" · neutral observation\n' +
          '                "Das Auto ist teuer."\n\n' +
          '  👎 billig   — "cheap" · BEWARE: in German this often implies CHEAP QUALITY (= shoddy)\n' +
          '                "Die Tasche ist billig" sounds dismissive\n' +
          '                Use only when you DO mean "low quality"\n\n' +
          '  👍 günstig  — ⭐ "affordable / good value" · the polite default\n' +
          '                "Die Wohnung ist günstig" = "the apartment is well-priced"\n' +
          '                In shops you\'ll hear "ein günstiges Angebot" not "ein billiges Angebot"\n\n' +
          'SHOPPING WORDS:\n' +
          '  im Angebot       — on sale / on offer (window-poster magic word)\n' +
          '  X % Rabatt       — X % off (Rabatt = discount)\n' +
          '  reduziert         — reduced ("alles reduziert")\n\n' +
          '⚠ PITFALLS: don\'t say "kostet teuer" — that\'s "ist teuer" or "kostet viel". And don\'t call a friend\'s gift "billig" — say "günstig" to keep things polite.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — numeral→word · description→meaning · Q→A
      { type: 'match',
        pairs: [
          { de: '1 000',         en: 'tausend' },
          { de: '10 000',        en: 'zehntausend' },
          { de: '50 000',        en: 'fünfzigtausend' },
          { de: '100 000',       en: 'hunderttausend' },
          { de: '1 000 000',     en: 'eine Million' },
          { de: '1 000 000 000', en: 'eine Milliarde' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'teuer',       en: '💸 expensive (neutral)' },
          { de: 'billig',      en: '👎 cheap (often = poor quality)' },
          { de: 'günstig',     en: '👍 good value / affordable (polite)' },
          { de: 'im Angebot',  en: '🏷️ on sale / on offer' },
          { de: 'der Rabatt',  en: '🎯 discount (e.g. 10 % off)' },
          { de: 'inklusive',   en: '✅ including (incl. VAT etc.)' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'Wie viel kostet das?',           en: 'Das kostet 13 Euro.' },
          { de: 'Was macht das?',                  en: 'Das macht 25 Euro fünfzig.' },
          { de: 'Bar oder mit Karte?',             en: 'Mit Karte, bitte.' },
          { de: 'Gibt es einen Rabatt?',           en: 'Ja, zehn Prozent Rabatt.' },
          { de: 'Ist das im Angebot?',             en: 'Nein, der normale Preis.' },
        ],
      },

      // ⭐ 6 BUILD-THE-BIG-NUMBER fill-blanks
      { type: 'fill-blank', sentence: '1 000 = __', answer: 'tausend' },
      { type: 'fill-blank', sentence: '10 000 = __tausend', answer: 'zehn' },
      { type: 'fill-blank', sentence: '100 000 = __tausend', answer: 'hundert' },
      { type: 'fill-blank', sentence: '1 234 = eintausendzweihundert__unddreißig', answer: 'vier' },
      { type: 'fill-blank', sentence: '24 000 = __undzwanzigtausend (the multiplier flips)', answer: 'vier' },
      { type: 'fill-blank', sentence: '1 000 000 = eine __', answer: 'Million' },

      // ⚠ 3 MILLION / MILLIARDE MCQs
      { type: 'multiple-choice', q: '"One million euros":',
        options: ['ein Million Euro','eine Million Euro','einer Million Euro','einmillion Euro'],
        answer: 'eine Million Euro',
        explain: 'Million is FEMININE → eine, not ein. And it\'s a separate word with a capital M.' },
      { type: 'multiple-choice', q: '⚠ "1 000 000 000 stars" — pick the right German word:',
        options: ['eine Million','eine Milliarde','eine Billion','eintausend Million'],
        answer: 'eine Milliarde',
        explain: 'English BILLION = German MILLIARDE. The German "Billion" actually means trillion (10¹²).' },
      { type: 'multiple-choice', q: 'How many ZEROS does a German "Billion" have?',
        options: ['6','9','12','3'],
        answer: '12',
        explain: 'German Billion = 10¹² = English trillion. The false-friend trap.' },

      // 💶 3 PRICE-FORMAT MCQs
      { type: 'multiple-choice', q: 'In German, 1.234,56 € reads as…',
        options: ['one point two three four, fifty-six','one thousand two hundred thirty-four euros fifty-six','one comma two three four','twelve hundred and thirty-four'],
        answer: 'one thousand two hundred thirty-four euros fifty-six',
        explain: 'German uses . for thousands and , for decimals — the opposite of English.' },
      { type: 'multiple-choice', q: 'Spoken: 9,99 € most naturally =',
        options: ['neun Komma neun neun Euro','neun Euro neunundneunzig','neun Punkt neun neun','neuneuro neunundneunzig'],
        answer: 'neun Euro neunundneunzig',
        explain: 'At checkout most Germans say "X Euro Y" without "Komma" — the "Cent" word is usually dropped.' },
      { type: 'multiple-choice', q: 'On a receipt "inkl. MwSt" means:',
        options: ['plus tax','including VAT','exclusive of tax','tax-free'],
        answer: 'including VAT',
        explain: 'MwSt = Mehrwertsteuer (value-added tax). German prices are usually shown including it.' },

      // ⚠ 3 SPOT-THE-ERROR / REGISTER MCQs
      { type: 'multiple-choice', q: '⚠ Which sentence is WRONG?',
        options: ['Das ist teuer.','Das kostet viel.','Das kostet teuer.','Das ist günstig.'],
        answer: 'Das kostet teuer.',
        explain: 'Don\'t pair kosten with teuer — say "ist teuer" or "kostet viel".' },
      { type: 'multiple-choice', q: '⚠ Polite way to say a friend\'s sofa was affordable:',
        options: ['Das Sofa ist billig.','Das Sofa ist günstig.','Das Sofa kostet teuer.','Das Sofa ist schein.'],
        answer: 'Das Sofa ist günstig.',
        explain: '"billig" often implies cheap-quality in German. Use "günstig" for the polite meaning of "affordable".' },
      { type: 'multiple-choice', q: '⚠ Which is the CORRECT spelling of 24 499?',
        options: ['zwanzigvierhausend...','vierundzwanzigtausendvierhundertneunundneunzig','vierundzwanzigtausend und vierhundertneunundneunzig','vierundzwanzigtausendvierhundertundneunundneunzig'],
        answer: 'vierundzwanzigtausendvierhundertneunundneunzig',
        explain: 'All one word. The multiplier 24 itself flips (vier-UND-zwanzig). No "und" between the chunks.' },

      // 💬 Mini dialogue — full checkout flow with prices, paying, Rabatt
      { type: 'dialogue', lines: [
        { speaker: 'Kunde',     de: 'Wie viel kostet das Smartphone?',                                 en: 'How much does the smartphone cost?' },
        { speaker: 'Verkäufer', de: 'Das Smartphone kostet neunhundertneunundneunzig Euro.',            en: 'The smartphone costs nine hundred ninety-nine euros.' },
        { speaker: 'Kunde',     de: 'Das ist sehr teuer! Gibt es einen Rabatt?',                       en: 'That is very expensive! Is there a discount?' },
        { speaker: 'Verkäufer', de: 'Heute ist es im Angebot — zehn Prozent Rabatt.',                   en: 'Today it is on sale — ten percent off.' },
        { speaker: 'Kunde',     de: 'Sehr günstig! Und das Auto?',                                      en: 'Very good value! And the car?' },
        { speaker: 'Verkäufer', de: 'Das Auto kostet vierundzwanzigtausendvierhundertneunundneunzig Euro inkl. MwSt.', en: 'The car costs 24,499 euros incl. VAT.' },
        { speaker: 'Kunde',     de: 'Ich nehme das Smartphone. Bar oder mit Karte?',                    en: 'I\'ll take the smartphone. Cash or card?' },
        { speaker: 'Verkäufer', de: 'Wie Sie möchten. Das macht achthundertneunundneunzig Euro zehn.',  en: 'However you prefer. That comes to 899 euros 10.' },
        { speaker: 'Kunde',     de: 'Mit Karte, bitte. Stimmt so.',                                     en: 'Card, please. Keep the change.' },
      ]},
    ],
    quiz: [
      { type: 'multiple-choice', q: '13 € (spoken) =',
        options: ['drei Euro','dreizehn Euro','dreißig Euro','dreihundert Euro'], answer: 'dreizehn Euro' },
      { type: 'fill-blank', sentence: '1 000 000 = eine __', answer: 'Million' },
      { type: 'multiple-choice', q: '⚠ English "one billion" (10⁹) in German =',
        options: ['eine Million','eine Milliarde','eine Billion','tausend Million'], answer: 'eine Milliarde',
        explain: 'German Milliarde = English billion. German Billion = English trillion. Classic false friend.' },
      { type: 'multiple-choice', q: 'German 1.234,56 means in English notation =',
        options: ['1,234.56','1.234.56','1234,56','1234.56'], answer: '1,234.56' },
      { type: 'fill-blank', sentence: '"How much does that cost?" → Wie viel __ das?', answer: 'kostet' },
      { type: 'multiple-choice', q: 'Polite way to say a price is "affordable":',
        options: ['teuer','billig','günstig','viel'], answer: 'günstig',
        explain: 'günstig is the polite default · billig often implies cheap-quality.' },
      { type: 'fill-blank', sentence: '24 000 = __undzwanzigtausend (the multiplier flips before tausend)', answer: 'vier' },
    ],
  },

  /* ----- Day 20: Week 3 review (questions + numbers) ----- */
  {
    id: 20, week: 3,
    vocabLayout: 'spotlight',
    title: 'Week 3 review',
    titleDe: 'Wiederholung Woche 3',
    emoji: '🔁',
    objective: 'Prove you own all of Week 3 — yes/no questions, the doch trick, every W-word, the wo-triple, numbers up to a million, prices and the polite checkout — before the case system begins in Week 4.',
    intro: 'Milestone checkpoint! This pulls Week 3 together: ❓ yes/no flip → 🔁 the doch particle → 🔍 W-questions → 📍 wo/wohin/woher → 🔢 numbers 100-1 000 000 → 💶 prices & the teuer/günstig ladder → 🙏 politeness. Scroll the keystones, read the recap cards, then aim for ≥ 80% on the mixed drills. That score means you are genuinely ready for Akkusativ.',
    vocabulary: [
      // ❓ QUESTION KEYSTONES — the verb-first flip + the killer particle
      { de: 'Bist du …?',  en: 'Are you …? (yes/no flip)',        emoji: '❓', hint: '🔁 Day 16 · verb to slot 1',                       example: 'Bist du müde?',                  exampleEn: 'Are you tired?' },
      { de: 'doch',        en: 'yes (contradicting a negative)',  emoji: '🔁', hint: '⭐ Day 16 · ONLY after a nicht/kein question',     example: 'Bist du nicht müde? — Doch!',    exampleEn: 'Aren\'t you tired? — Yes I am!' },
      { de: 'wer',         en: 'who',                             emoji: '🧑', hint: '🔁 Day 17 · asks a PERSON',                        example: 'Wer ist das?',                   exampleEn: 'Who is that?' },
      { de: 'was',         en: 'what',                            emoji: '🎯', hint: '🔁 Day 17 · asks a THING',                         example: 'Was machst du heute?',           exampleEn: 'What are you doing today?' },
      { de: 'wie',         en: 'how',                             emoji: '❔', hint: '🔁 Day 17 · also "Wie heißt du?"',                 example: 'Wie heißt du?',                  exampleEn: 'What is your name?' },

      // 📍 THE WO-TRIPLE — the Day-17 killer pair
      { de: 'wo',          en: 'where (at · no movement)',        emoji: '📍', hint: '🔁 Day 17 · sein / wohnen',                       example: 'Wo wohnst du?',                  exampleEn: 'Where do you live?' },
      { de: 'wohin',       en: 'where to (movement)',             emoji: '➡️', hint: '🔁 Day 17 · gehen / fahren',                      example: 'Wohin gehst du?',                exampleEn: 'Where are you going?' },
      { de: 'woher',       en: 'where from (origin)',             emoji: '🌍', hint: '🔁 Day 17 · pairs with "aus …"',                  example: 'Woher kommst du?',               exampleEn: 'Where do you come from?' },

      // 🔢 NUMBER KEYSTONES — the three building rules
      { de: 'einundzwanzig',  en: '21 (the flip)',               emoji: '🔄', hint: '🔁 Day 2 · units-UND-tens',                       example: 'Ich bin einundzwanzig.',         exampleEn: 'I am twenty-one.' },
      { de: 'dreihundertfünfundsechzig', en: '365 (3-digit Lego)', emoji: '🧮', hint: '🔁 Day 18 · hundert + flip · days in a year', example: 'Ein Jahr hat 365 Tage.',         exampleEn: 'A year has 365 days.' },
      { de: 'eine Million',   en: '1 000 000',                   emoji: '🪙', hint: '🔁 Day 19 · FEMININE · eine, not ein',            example: 'Eine Million Menschen.',         exampleEn: 'One million people.' },

      // 💶 PRICE & POLITENESS KEYSTONES
      { de: 'Wie viel kostet das?', en: 'How much does that cost?', emoji: '💶', hint: '🔁 Day 18-19 · the shopping opener',          example: 'Wie viel kostet das? — Zehn Euro.', exampleEn: 'How much is that? — Ten euros.' },
      { de: 'günstig',     en: 'good value / affordable',         emoji: '👍', hint: '🔁 Day 19 · polite "cheap" (not billig!)',       example: 'Die Wohnung ist günstig.',       exampleEn: 'The apartment is good value.' },
      { de: 'mit Karte',   en: 'by card',                         emoji: '💳', hint: '🔁 Day 19 · "Bar oder mit Karte?"',              example: 'Ich bezahle mit Karte.',         exampleEn: 'I pay by card.' },
      { de: 'bitte',       en: 'please / you\'re welcome',        emoji: '🙏', hint: 'politeness anchor · also "here you go"',          example: 'Einen Kaffee, bitte.',           exampleEn: 'A coffee, please.' },
      { de: 'Entschuldigung', en: 'excuse me / sorry',           emoji: '🙋', hint: 'opens a question to a stranger',                  example: 'Entschuldigung, wo ist der Bahnhof?', exampleEn: 'Excuse me, where is the station?' },
    ],
    grammar: [
      { rule: '✅ Week 3 recap — questions',
        body:
          '❓ YES/NO question = conjugated verb to SLOT 1:\n' +
          '   "Du bist müde." → "Bist du müde?"  (no "do" helper)\n' +
          '   Separable verb? prefix STILL at the end: "Stehst du um 7 auf?"\n\n' +
          '🔁 ANSWER PARTICLES: ja (yes) · nein (no) · DOCH (yes — to contradict a nicht/kein question).\n' +
          '   "Bist du nicht müde?" — Doch! (= yes I am)\n\n' +
          '🔍 W-QUESTION = W-word (slot 1) + verb (slot 2) + subject (slot 3):\n' +
          '   "Wo wohnst du?"  ·  "Wann kommst du?"  ·  "Warum lernst du Deutsch?"\n' +
          '   welcher/welche/welches matches the noun\'s gender.',
      },
      { rule: '✅ Week 3 recap — the wo-triple',
        body:
          '📍 wo    = where (AT · no movement) → sein, wohnen, bleiben\n' +
          '            "Wo ist der Bahnhof?"\n' +
          '➡️ wohin = where TO (destination) → gehen, fahren, fliegen\n' +
          '            "Wohin gehst du?" — Ich gehe nach Hause.\n' +
          '🌍 woher = where FROM (origin) → pairs with "aus …"\n' +
          '            "Woher kommst du?" — Ich komme aus Indien.\n\n' +
          '⚠ Any verb of MOTION needs wohin / woher — never plain "wo".',
      },
      { rule: '✅ Week 3 recap — numbers as Lego',
        body:
          '🔢 0-12 unique · 13-19 = unit+zehn · 21-99 = units-UND-tens flip (einundzwanzig).\n' +
          '🧮 3-digit: multiplier-hundert + flip → 365 = dreihundertfünfundsechzig.\n' +
          '🔟 Thousands: multiplier-tausend (the multiplier itself flips at 21 000+ → vierundzwanzigtausend).\n' +
          '🪙 eine Million / eine Milliarde — FEMININE, separate word, capital letter. ⚠ Milliarde = English BILLION.\n' +
          'All one word, no spaces; "und" lives ONLY inside the tens-units flip.',
      },
      { rule: '✅ Week 3 recap — prices & politeness',
        body:
          '💶 Ask: "Wie viel kostet das?" / "Was macht das?" (checkout).\n' +
          '💶 German money writes 1.234,56 € — . for thousands, , for decimals (opposite of English).\n' +
          '🏷️ Describe: teuer (expensive) · günstig (affordable — polite) · billig (cheap — often = poor quality!).\n' +
          '💳 Pay: "Bar oder mit Karte?" · "Stimmt so!" (keep the change).\n' +
          '🙏 Politeness: bitte · danke · Entschuldigung — open every stranger-question with Entschuldigung.',
      },
      { rule: '🎯 The 5 Week-3 mistakes to never make again',
        body:
          '1. "Du kommst aus Berlin?" ✗ → yes/no needs the FLIP: "Kommst du aus Berlin?" ✓\n' +
          '2. "Bist du nicht müde?" — "Ja!" ✗ → contradicting a negative needs "Doch!" ✓\n' +
          '3. "Wo gehst du?" ✗ → movement needs "Wohin gehst du?" ✓\n' +
          '4. "hundert und fünf" ✗ → no und between hundreds & rest: "hundertfünf" ✓\n' +
          '5. "ein Million" ✗ → Million is feminine: "eine Million" ✓',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — sweep questions, wo-triple, numbers
      { type: 'match',
        pairs: [
          { de: 'Du bist müde.',          en: 'Bist du müde?' },
          { de: 'Du kommst aus Berlin.',  en: 'Kommst du aus Berlin?' },
          { de: 'Du stehst um 7 auf.',    en: 'Stehst du um 7 auf?' },
          { de: 'Bist du nicht müde?',    en: 'Doch! (contradicting)' },
          { de: 'Sprichst du Deutsch?',   en: 'Natürlich!' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'Wo wohnst du?',     en: '📍 location · no movement' },
          { de: 'Wohin gehst du?',   en: '➡️ destination · movement' },
          { de: 'Woher kommst du?',  en: '🌍 origin · "aus …"' },
          { de: 'Wer ist das?',      en: '🧑 asks a person' },
          { de: 'Wie viel kostet das?', en: '💶 asks a price' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: '21',        en: 'einundzwanzig' },
          { de: '365',       en: 'dreihundertfünfundsechzig' },
          { de: '1 000',     en: 'tausend' },
          { de: '24 000',    en: 'vierundzwanzigtausend' },
          { de: '1 000 000', en: 'eine Million' },
        ],
      },

      // ❓ 4 QUESTION drills — flip + W-word + doch
      { type: 'multiple-choice', q: 'Make it a yes/no question: "Du kommst aus Berlin." →',
        options: ['Kommst du aus Berlin?','Du kommst aus Berlin?','Aus Berlin du kommst?','Woher kommst du?'],
        answer: 'Kommst du aus Berlin?' },
      { type: 'fill-blank', sentence: '"Where do you live?" → __ wohnst du?', answer: 'Wo' },
      { type: 'fill-blank', sentence: '"Where are you going?" → __ gehst du? (movement!)', answer: 'Wohin' },
      { type: 'multiple-choice', q: '"Hast du kein Geld?" — Yes, I DO have money. Pick the answer.',
        options: ['Ja!','Nein!','Doch!','Vielleicht!'], answer: 'Doch!',
        explain: '"kein" makes the question negative → contradict with DOCH.' },

      // 🔢 4 NUMBER drills — flip, 3-digit Lego, thousands flip, Million gender
      { type: 'multiple-choice', q: '347 = ?',
        options: ['dreihundertsiebenundvierzig','dreihundertvierundsiebzig','dreihundertsiebenvierzig','vierhundertsiebenundvierzig'],
        answer: 'dreihundertsiebenundvierzig' },
      { type: 'fill-blank', sentence: '21 = einund__', answer: 'zwanzig' },
      { type: 'fill-blank', sentence: '24 000 = __undzwanzigtausend (multiplier flips)', answer: 'vier' },
      { type: 'multiple-choice', q: '"One million euros":',
        options: ['ein Million Euro','eine Million Euro','einer Million Euro','einmillion Euro'],
        answer: 'eine Million Euro',
        explain: 'Million is feminine → eine.' },

      // 💶 2 PRICE drills — ask + describe register
      { type: 'fill-blank', sentence: '"How much is that?" → Wie viel __ das?', answer: 'kostet' },
      { type: 'multiple-choice', q: 'Polite way to say a flat is affordable:',
        options: ['Die Wohnung ist billig.','Die Wohnung ist günstig.','Die Wohnung kostet teuer.','Die Wohnung ist Karte.'],
        answer: 'Die Wohnung ist günstig.',
        explain: 'billig often implies poor quality — günstig is the polite "affordable".' },

      // ⚠ 2 SPOT-THE-ERROR MCQs across the week
      { type: 'multiple-choice', q: '⚠ Which sentence is WRONG?',
        options: ['Wohin gehst du?','Wo wohnst du?','Wo gehst du?','Woher kommst du?'],
        answer: 'Wo gehst du?',
        explain: 'gehen = movement → needs wohin.' },
      { type: 'multiple-choice', q: '⚠ Which number is spelled WRONG?',
        options: ['hundertfünf','dreihundert','hundert und fünf','zweitausend'],
        answer: 'hundert und fünf',
        explain: 'No "und" between hundreds and the rest → hundertfünf.' },

      // 💬 Capstone dialogue — politeness + question + price + paying
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Entschuldigung, wie viel kostet der Kaffee?',  en: 'Excuse me, how much is the coffee?' },
        { speaker: 'B', de: 'Der Kaffee kostet drei Euro fünfzig.',         en: 'The coffee costs three euros fifty.' },
        { speaker: 'A', de: 'Und haben Sie auch Tee?',                      en: 'And do you have tea too?' },
        { speaker: 'B', de: 'Ja, natürlich. Möchten Sie auch ein Stück Kuchen?', en: 'Yes, of course. Would you also like a piece of cake?' },
        { speaker: 'A', de: 'Ist der Kuchen im Angebot?',                   en: 'Is the cake on sale?' },
        { speaker: 'B', de: 'Doch — heute zehn Prozent Rabatt!',            en: 'Yes actually — ten percent off today!' },
        { speaker: 'A', de: 'Sehr günstig. Ich nehme alles. Mit Karte, bitte.', en: 'Very good value. I\'ll take it all. By card, please.' },
        { speaker: 'B', de: 'Das macht acht Euro zwanzig. Stimmt so?',      en: 'That comes to eight euros twenty. Keep the change?' },
      ]},
    ],
    quiz: [
      { type: 'multiple-choice', q: 'Which is a correct W-question?',
        options: ['Wo kommst du?','Woher du kommst?','Woher kommst du?','Du kommst woher?'], answer: 'Woher kommst du?' },
      { type: 'multiple-choice', q: 'Make it a yes/no question: "Sie spricht Deutsch." →',
        options: ['Sie Deutsch spricht?','Spricht sie Deutsch?','Deutsch spricht sie?','Wie spricht sie Deutsch?'], answer: 'Spricht sie Deutsch?' },
      { type: 'multiple-choice', q: '"Bist du nicht müde?" — Yes I am! Correct answer:',
        options: ['Ja','Nein','Doch','Vielleicht'], answer: 'Doch' },
      { type: 'fill-blank', sentence: 'Movement: "__ fährst du?" (where to)', answer: 'Wohin' },
      { type: 'multiple-choice', q: '365 = ?',
        options: ['dreihundertsechsundfünfzig','dreihundertfünfundsechzig','dreihundertfünfzig','dreihundertfünf'],
        answer: 'dreihundertfünfundsechzig' },
      { type: 'fill-blank', sentence: '1 000 000 = eine __', answer: 'Million' },
      { type: 'multiple-choice', q: 'Polite "affordable":',
        options: ['teuer','billig','günstig','viel'], answer: 'günstig' },
    ],
  },

  /* ----- Day 25: Dativ I — prepositions (slides 277-280) ----- */
  {
    id: 25, week: 4,
    vocabLayout: 'spotlight',
    title: 'Dativ I — prepositions',
    titleDe: 'Dativ I — Präpositionen',
    emoji: '🅿️',
    objective: 'Meet the THIRD case — and master the eight prepositions that ALWAYS force it, plus the four everyday contractions (beim · vom · zum · zur).',
    intro: 'You know Nominativ (subject) and Akkusativ (object). Now meet the Dativ — the case of "to/for whom" and the case that eight everyday prepositions DEMAND. The trick: after mit · bei · zu · von · nach · aus · seit · gegenüber, the article shifts to dem (m/n) · der (f) · den+n (pl). Memorise the eight as one block and the rest is automatic.',
    vocabulary: [
      // 🅿️ THE 8 ALWAYS-DATIV PREPOSITIONS — memorise as ONE block
      { de: 'mit',        en: 'with / by (transport)', emoji: '🤝', hint: '🅿️ always Dativ · "mit dem Bus" = by bus',    example: 'Ich fahre mit dem Bus.',          exampleEn: 'I go by bus.' },
      { de: 'bei',        en: 'at / near / at sb\'s place', emoji: '🏠', hint: '🅿️ always Dativ · "bei der Arbeit" = at work', example: 'Ich wohne bei meiner Mutter.', exampleEn: 'I live at my mother\'s.' },
      { de: 'zu',         en: 'to (a person / place)',  emoji: '➡️', hint: '🅿️ always Dativ · "zu dem Arzt" → zum Arzt',  example: 'Ich gehe zum Arzt.',              exampleEn: 'I am going to the doctor.' },
      { de: 'von',        en: 'from / of / by',         emoji: '📤', hint: '🅿️ always Dativ · "von dem" → vom',          example: 'Ich komme vom Bahnhof.',          exampleEn: 'I am coming from the station.' },
      { de: 'nach',       en: 'to (city/country) / after', emoji: '🗺️', hint: '🅿️ Dativ · but cities take NO article',   example: 'Ich fahre nach Berlin.',          exampleEn: 'I am going to Berlin.' },
      { de: 'aus',        en: 'out of / from (origin)', emoji: '🚪', hint: '🅿️ always Dativ · "aus der Schweiz"',        example: 'Sie kommt aus der Schule.',       exampleEn: 'She comes from school.' },
      { de: 'seit',       en: 'since / for (time)',     emoji: '⏳', hint: '🅿️ always Dativ · "seit einem Jahr"',        example: 'Ich lerne seit einem Jahr Deutsch.', exampleEn: 'I have been learning German for a year.' },
      { de: 'gegenüber',  en: 'opposite / across from', emoji: '↔️', hint: '🅿️ Dativ · often AFTER the noun',           example: 'Die Bank ist gegenüber dem Park.', exampleEn: 'The bank is opposite the park.' },

      // 📊 THE DATIV ARTICLES — what each one becomes
      { de: 'dem (m)',    en: 'der → dem (masculine)',  emoji: '🟦', hint: '⭐ masc. article in Dativ',                  example: 'mit dem Mann',                     exampleEn: 'with the man' },
      { de: 'der (f)',    en: 'die → der (feminine)',   emoji: '🟥', hint: '⭐ fem. article in Dativ (looks like Nom. der!)', example: 'mit der Frau',                exampleEn: 'with the woman' },
      { de: 'dem (n)',    en: 'das → dem (neuter)',     emoji: '🟩', hint: '⭐ neuter = same as masc. → dem',            example: 'mit dem Kind',                     exampleEn: 'with the child' },
      { de: 'den …-n (pl)', en: 'die → den + noun adds -n', emoji: '🟨', hint: '⭐ plural · ADD -n to the noun: den Kindern', example: 'mit den Kindern',             exampleEn: 'with the children' },

      // 🔗 THE 4 EVERYDAY CONTRACTIONS — say these, not the long form
      { de: 'beim',       en: 'bei + dem',  emoji: '🔗', hint: '🔗 beim Bäcker = at the baker\'s',     example: 'Ich bin beim Bäcker.',     exampleEn: 'I am at the baker\'s.' },
      { de: 'vom',        en: 'von + dem',  emoji: '🔗', hint: '🔗 vom Bahnhof = from the station',    example: 'Ich komme vom Bahnhof.',   exampleEn: 'I am coming from the station.' },
      { de: 'zum',        en: 'zu + dem',   emoji: '🔗', hint: '🔗 zum Arzt = to the doctor',          example: 'Ich gehe zum Arzt.',       exampleEn: 'I am going to the doctor.' },
      { de: 'zur',        en: 'zu + der',   emoji: '🔗', hint: '🔗 zur Schule = to school (fem.)',     example: 'Ich gehe zur Schule.',     exampleEn: 'I am going to school.' },

      // 🧰 USEFUL DATIV-CONTEXT NOUNS
      { de: 'mein → meinem / meiner', en: 'my (Dativ m/n · f)', emoji: '👪', hint: 'possessive in Dativ: meinem Vater · meiner Mutter', example: 'Ich wohne bei meiner Mutter.', exampleEn: 'I live with my mother.' },
      { de: 'das Auto',   en: 'the car',        emoji: '🚗', hint: 'mit dem Auto = by car',          example: 'Wir fahren mit dem Auto.', exampleEn: 'We go by car.' },
      { de: 'die Arbeit', en: 'work / the job', emoji: '💼', hint: 'bei der Arbeit = at work · nach der Arbeit = after work', example: 'Ich bin bei der Arbeit.', exampleEn: 'I am at work.' },
    ],
    grammar: [
      { rule: '⭐ THE 8 ALWAYS-DATIV PREPOSITIONS — memorise the block',
        body:
          'These eight prepositions ALWAYS take the Dativ — no exceptions, no thinking required. Any noun after one of them is Dativ:\n\n' +
          '  mit   — with / by         bei  — at / near\n' +
          '  zu    — to (person/place) von  — from / of\n' +
          '  nach  — to / after        aus  — out of / from\n' +
          '  seit  — since / for       gegenüber — opposite\n\n' +
          '🧠 Memory hook — say them in a rhythm: "mit-bei-zu-von, nach-aus-seit, gegenüber." Some learners use the song "Aus-bei-mit-nach-seit-von-zu" (alphabetical). Pick one and drill it until it\'s automatic.',
      },
      { rule: '⭐ THE DATIV ARTICLE TABLE — der/die/das all shift',
        body:
          'In the Dativ, EVERY article changes (unlike Akkusativ where only masc. flipped):\n\n' +
          '            NOM   →  DATIV       example\n' +
          '  masc.  m  der   →  dem         mit dem Mann\n' +
          '  fem.   f  die   →  der         mit der Frau   ⚠ looks like Nom. "der"!\n' +
          '  neut.  n  das   →  dem         mit dem Kind   (same as masc.)\n' +
          '  plur.  pl die   →  den +(-n)   mit den Kindern\n\n' +
          'Indefinite + possessive follow the same endings:\n' +
          '  ein → einem (m/n) · eine → einer (f)\n' +
          '  mein → meinem (m/n) · meiner (f) · meinen+(-n) (pl)\n\n' +
          '🧠 Shortcut: masc. & neuter are IDENTICAL in Dativ (both dem / einem). Only feminine (der/einer) and plural (den + noun-n) stand apart.',
      },
      { rule: '⚠ THE PLURAL -n RULE — the most-forgotten detail',
        body:
          'Plural Dativ does TWO things: article → den AND the noun gets an extra -n (if it doesn\'t already end in -n or -s):\n\n' +
          '  die Kinder  → mit den Kindern   (+n)\n' +
          '  die Bücher  → mit den Büchern   (+n)\n' +
          '  die Freunde → mit den Freunden  (+n)\n' +
          '  die Frauen  → mit den Frauen    (already ends in -n, no change)\n' +
          '  die Autos   → mit den Autos     (-s plural, no -n)\n\n' +
          'This is the #1 thing beginners forget. If it\'s plural Dativ, check the noun ending.',
      },
      { rule: '🔗 THE 4 CONTRACTIONS — say beim/vom/zum/zur',
        body:
          'In speech, preposition + dem/der almost always contracts. Using the long form sounds stiff:\n\n' +
          '  bei + dem → beim    beim Bäcker   (at the baker\'s)\n' +
          '  von + dem → vom     vom Bahnhof   (from the station)\n' +
          '  zu  + dem → zum     zum Arzt      (to the doctor)\n' +
          '  zu  + der → zur     zur Schule    (to school)\n\n' +
          '⚠ "zu" has TWO contractions because it meets both dem (zum) and der (zur). Match the gender: zum Supermarkt (m) but zur Apotheke (f).',
      },
      { rule: '⚠ "nach" vs "zu" — both mean "to", different uses',
        body:
          'A classic A1 confusion. Both are Dativ, but:\n\n' +
          '  nach — for CITIES, COUNTRIES & "home" (NO article)\n' +
          '         nach Berlin · nach Deutschland · nach Hause\n' +
          '  zu   — for PEOPLE and specific PLACES (with article → contraction)\n' +
          '         zum Arzt · zur Schule · zu meiner Mutter\n\n' +
          'Exceptions that take an article use "in die": "in die Türkei", "in die Schweiz" — but at A1, "nach + city/country (no article)" covers the vast majority. And "nach Hause" (going home) is a fixed phrase worth memorising.',
      },
      { rule: '🚦 PITFALLS — Dativ-preposition traps',
        body:
          '• für / ohne / gegen / um / durch are AKKUSATIV — do NOT use Dativ after them.\n' +
          '• fem. Dativ "der" looks exactly like masc. Nominativ "der" — context tells them apart (a preposition before it = Dativ).\n' +
          '• Don\'t forget the plural -n: "mit den Kindern", not "mit den Kinder".\n' +
          '• "seit" = since/for a duration and ALWAYS Dativ: "seit einem Jahr", "seit zwei Wochen".\n' +
          '• Use the contractions in speech: "Ich gehe zu dem Arzt" is understandable but says "zum Arzt".\n' +
          '• "gegenüber" usually comes AFTER the noun/pronoun: "mir gegenüber", "dem Park gegenüber".',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — prep meanings · article shifts · contractions
      { type: 'match',
        pairs: [
          { de: 'mit',  en: '🤝 with / by transport' },
          { de: 'bei',  en: '🏠 at / at sb\'s place' },
          { de: 'zu',   en: '➡️ to a person / place' },
          { de: 'aus',  en: '🚪 out of / origin' },
          { de: 'seit', en: '⏳ since / for (time)' },
          { de: 'gegenüber', en: '↔️ opposite' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'der (m) → ?',  en: 'dem' },
          { de: 'die (f) → ?',  en: 'der' },
          { de: 'das (n) → ?',  en: 'dem' },
          { de: 'die (pl) → ?', en: 'den + noun-n' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'bei + dem', en: 'beim' },
          { de: 'von + dem', en: 'vom' },
          { de: 'zu + dem',  en: 'zum' },
          { de: 'zu + der',  en: 'zur' },
        ],
      },

      // 🅿️ 5 ARTICLE fill-blanks across all genders
      { type: 'fill-blank', sentence: 'Ich fahre mit __ Auto. (the, masc./neut.)', answer: 'dem' },
      { type: 'fill-blank', sentence: 'Ich fahre mit __ Frau. (the, fem.)',        answer: 'der' },
      { type: 'fill-blank', sentence: 'Sie kommt aus __ Schule. (the, fem.)',      answer: 'der' },
      { type: 'fill-blank', sentence: 'Er arbeitet seit __ Jahr. (a, neuter)',      answer: 'einem' },
      { type: 'fill-blank', sentence: 'Ich fahre mit __ Mutter. (my, fem.)',        answer: 'meiner' },

      // ⚠ 3 PLURAL -n drills
      { type: 'fill-blank', sentence: 'Ich spiele mit den __ . (Kinder → plural Dativ)', answer: 'Kindern',
        hint: 'plural Dativ adds -n to the noun' },
      { type: 'multiple-choice', q: 'Plural Dativ for "die Bücher" =',
        options: ['die Bücher','der Bücher','dem Bücher','den Büchern'], answer: 'den Büchern',
        explain: 'Plural Dativ: article = den, and the noun adds -n.' },
      { type: 'multiple-choice', q: 'Which is CORRECT?',
        options: ['mit den Kinder','mit den Kindern','mit dem Kindern','mit der Kindern'],
        answer: 'mit den Kindern', explain: 'Plural Dativ: den + noun adds -n.' },

      // 🔗 3 CONTRACTION fill-blanks
      { type: 'fill-blank', sentence: 'Contraction: "bei + dem" = __',  answer: 'beim' },
      { type: 'fill-blank', sentence: 'Contraction: "zu + der" = __',   answer: 'zur' },
      { type: 'fill-blank', sentence: 'Ich gehe zu dem Arzt → Ich gehe __ Arzt.', answer: 'zum' },

      // ⚠ 3 nach-vs-zu + which-prep MCQs
      { type: 'multiple-choice', q: '"I am going to Berlin." — which preposition?',
        options: ['zu Berlin','nach Berlin','bei Berlin','in Berlin'], answer: 'nach Berlin',
        explain: 'Cities & countries use "nach" with no article.' },
      { type: 'multiple-choice', q: '"I am going to the doctor." — pick the right form:',
        options: ['nach dem Arzt','zum Arzt','bei Arzt','zur Arzt'], answer: 'zum Arzt',
        explain: 'People/places use zu → zum (zu + dem) for masculine Arzt.' },
      { type: 'multiple-choice', q: 'Which preposition does NOT take Dativ?',
        options: ['mit','bei','für','zu'], answer: 'für',
        explain: '"für" takes Akkusativ. The eight always-Dativ ones: mit, bei, zu, von, nach, aus, seit, gegenüber.' },

      // 💬 Mini dialogue — Dativ prepositions + contractions in real chat
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Wie kommst du zur Arbeit?',               en: 'How do you get to work?' },
        { speaker: 'B', de: 'Ich fahre mit dem Bus. Und du?',          en: 'I go by bus. And you?' },
        { speaker: 'A', de: 'Mit dem Auto. Wohnst du noch bei deinen Eltern?', en: 'By car. Do you still live with your parents?' },
        { speaker: 'B', de: 'Nein, seit einem Jahr wohne ich bei meiner Schwester.', en: 'No, for a year I\'ve been living with my sister.' },
        { speaker: 'A', de: 'Schön! Gehst du nachher zum Bäcker?',     en: 'Nice! Are you going to the baker\'s afterwards?' },
        { speaker: 'B', de: 'Ja, der ist gegenüber dem Park.',         en: 'Yes, it\'s opposite the park.' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Ich gehe zu __ Arzt. (the, masc. — use the contraction)', answer: 'zum' },
      { type: 'multiple-choice', q: 'Plural Dativ for "die Bücher" =',
        options: ['die Bücher','der Bücher','dem Bücher','den Büchern'], answer: 'den Büchern',
        explain: 'Plural Dativ: article = den, and the noun adds -n.' },
      { type: 'fill-blank', sentence: 'Ich fahre mit __ Frau. (the, fem.)', answer: 'der' },
      { type: 'multiple-choice', q: '"to Berlin" =',
        options: ['zu Berlin','nach Berlin','bei Berlin','aus Berlin'], answer: 'nach Berlin' },
      { type: 'multiple-choice', q: 'Which preposition is ALWAYS Dativ?',
        options: ['für','ohne','seit','durch'], answer: 'seit' },
      { type: 'fill-blank', sentence: 'Contraction: "von + dem" = __', answer: 'vom' },
      { type: 'multiple-choice', q: 'Masculine & neuter in the Dativ both become…',
        options: ['der','dem','den','das'], answer: 'dem',
        explain: 'Both masc. (der) and neuter (das) shift to dem.' },
    ],
  },

  /* ----- Day 26: Dativ II — verbs (slides 281-287) ----- */
  {
    id: 26, week: 4,
    vocabLayout: 'spotlight',
    title: 'Dativ II — verbs',
    titleDe: 'Dativ II — Verben',
    emoji: '🤝',
    objective: 'Master the verbs that demand a Dativ object (helfen, danken, gefallen…), the full set of Dativ pronouns (mir, dir, ihm…), and the famous "gefallen flip" where the thing — not the person — is the subject.',
    intro: 'Day 25 forced Dativ with prepositions. Today a SECOND trigger: certain verbs simply take their object in the Dativ, not the Akkusativ. Most involve giving, helping or reacting to a PERSON. Learn the shortlist, learn the Dativ pronouns (mir/dir/ihm…), and crack the gefallen/schmecken "flip" — and you own the third case.',
    vocabulary: [
      // 🤝 THE CLASSIC DATIV VERBS — action TO a person
      { de: 'helfen',     en: 'to help (sb)',        emoji: '🆘', hint: '⭐ Dativ! "Ich helfe DEM Mann" — NOT den',     example: 'Ich helfe dem Mann.',          exampleEn: 'I help the man.' },
      { de: 'danken',     en: 'to thank (sb)',       emoji: '🙏', hint: '⭐ Dativ! "Ich danke DIR"',                   example: 'Ich danke dem Lehrer.',        exampleEn: 'I thank the teacher.' },
      { de: 'antworten',  en: 'to answer (sb)',      emoji: '💬', hint: '⭐ Dativ! answer a PERSON → dem/der',          example: 'Ich antworte dem Freund.',     exampleEn: 'I answer the friend.' },
      { de: 'glauben',    en: 'to believe (sb)',     emoji: '🤔', hint: '⭐ Dativ for a person · "Ich glaube dir"',     example: 'Ich glaube der Frau.',         exampleEn: 'I believe the woman.' },
      { de: 'gratulieren', en: 'to congratulate (sb)', emoji: '🎉', hint: '⭐ Dativ! "Ich gratuliere DEM Chef"',       example: 'Wir gratulieren dem Chef.',    exampleEn: 'We congratulate the boss.' },
      { de: 'folgen',     en: 'to follow (sb)',      emoji: '👣', hint: '⭐ Dativ · "Folg mir!"',                      example: 'Der Hund folgt dem Kind.',     exampleEn: 'The dog follows the child.' },
      { de: 'zuhören',    en: 'to listen to (sb)',   emoji: '👂', hint: '⭐ Dativ (separable) · "Ich höre dir zu"',     example: 'Ich höre dem Lehrer zu.',      exampleEn: 'I listen to the teacher.' },

      // 🔄 THE "FLIP" VERBS — the THING is the subject, the person is Dativ
      { de: 'gefallen',   en: 'to please / be liked by', emoji: '👍', hint: '🔄 "Es gefällt MIR" = I like it',          example: 'Die Stadt gefällt mir.',       exampleEn: 'I like the city.' },
      { de: 'schmecken',  en: 'to taste good (to sb)',   emoji: '😋', hint: '🔄 "Es schmeckt MIR" = I like the taste',  example: 'Die Pizza schmeckt mir.',      exampleEn: 'I like the pizza (taste).' },
      { de: 'gehören',    en: 'to belong to (sb)',       emoji: '🔑', hint: '🔄 "Das gehört MIR" = that\'s mine',       example: 'Das Buch gehört dem Kind.',    exampleEn: 'The book belongs to the child.' },
      { de: 'passen',     en: 'to fit / suit (sb)',      emoji: '👕', hint: '🔄 "Das passt MIR" = that suits me',       example: 'Das Hemd passt dir.',          exampleEn: 'The shirt fits you.' },
      { de: 'fehlen',     en: 'to be missing (to sb)',   emoji: '😔', hint: '🔄 "Du fehlst MIR" = I miss you',          example: 'Du fehlst mir.',               exampleEn: 'I miss you.' },

      // 👤 THE DATIV PRONOUNS — learn the full set
      { de: 'mir',   en: 'to/for me',          emoji: '🙋', hint: '👤 Dativ of ich',          example: 'Das gefällt mir.',     exampleEn: 'I like that.' },
      { de: 'dir',   en: 'to/for you (1 friend)', emoji: '👉', hint: '👤 Dativ of du',         example: 'Ich danke dir.',        exampleEn: 'I thank you.' },
      { de: 'ihm',   en: 'to/for him / it',    emoji: '👨', hint: '👤 Dativ of er/es · (NOT ihn!)', example: 'Ich helfe ihm.',  exampleEn: 'I help him.' },
      { de: 'ihr',   en: 'to/for her',         emoji: '👩', hint: '👤 Dativ of sie (she)',     example: 'Ich glaube ihr.',       exampleEn: 'I believe her.' },
      { de: 'uns',   en: 'to/for us',          emoji: '👥', hint: '👤 Dativ of wir (same as Akk)', example: 'Hilf uns!',         exampleEn: 'Help us!' },
      { de: 'euch',  en: 'to/for you (group)', emoji: '👨‍👩‍👧', hint: '👤 Dativ of ihr (same as Akk)', example: 'Ich danke euch.',   exampleEn: 'I thank you all.' },
      { de: 'ihnen', en: 'to/for them',        emoji: '🧑‍🤝‍🧑', hint: '👤 Dativ of sie (they)',  example: 'Ich helfe ihnen.',      exampleEn: 'I help them.' },
      { de: 'Ihnen', en: 'to/for you (formal)', emoji: '🤝', hint: '👤 Dativ of Sie · capital I', example: 'Ich danke Ihnen.',     exampleEn: 'I thank you. (formal)' },
    ],
    grammar: [
      { rule: '⭐ THE DATIV-VERB SHORTLIST — memorise these',
        body:
          'A small group of verbs takes its object in the DATIV (not Akkusativ). Most involve helping, giving or reacting to a PERSON:\n\n' +
          '  helfen      — to help          Ich helfe dem Mann.\n' +
          '  danken      — to thank         Ich danke der Frau.\n' +
          '  antworten   — to answer        Ich antworte dem Freund.\n' +
          '  glauben     — to believe (sb)  Ich glaube dir.\n' +
          '  gratulieren — to congratulate  Wir gratulieren dem Chef.\n' +
          '  folgen      — to follow        Der Hund folgt mir.\n' +
          '  zuhören     — to listen to     Ich höre dem Lehrer zu.\n' +
          '  gehören     — to belong to     Das Buch gehört dem Kind.\n' +
          '  passen      — to fit / suit    Das Hemd passt dir.\n\n' +
          '🧠 There is no rule that predicts these — they must be memorised. The good news: there are only a handful, and they\'re all everyday verbs.',
      },
      { rule: '🔄 THE GEFALLEN FLIP — the thing is the subject',
        body:
          'gefallen, schmecken, gehören, passen and fehlen work BACKWARDS compared to English. The THING is the subject; the PERSON is in the Dativ:\n\n' +
          '  English: "I    like   the city."   (I = subject)\n' +
          '  German:  "Die Stadt gefällt mir."  (die Stadt = subject, mir = Dativ)\n' +
          '            └ subject  └ verb  └ Dativ person\n\n' +
          'More flips:\n' +
          '  Die Pizza schmeckt mir.   — I like the pizza (taste).\n' +
          '  Das Buch gehört mir.       — The book is mine.\n' +
          '  Das Hemd passt dir.        — The shirt suits you.\n' +
          '  Du fehlst mir.             — I miss you.  (lit. "you are missing to me")\n\n' +
          '⚠ Because the THING is the subject, the verb agrees with the THING, not the person:\n' +
          '  Die Schuhe gefallen mir.  (plural thing → gefallen)\n' +
          '  Das Auto gefällt mir.     (singular thing → gefällt)',
      },
      { rule: '👤 THE DATIV PRONOUNS — the full set',
        body:
          'When the Dativ object is a pronoun, use these forms:\n\n' +
          '  ich → mir          wir → uns\n' +
          '  du  → dir          ihr → euch\n' +
          '  er  → ihm          sie (they) → ihnen\n' +
          '  sie → ihr          Sie (formal) → Ihnen\n' +
          '  es  → ihm\n\n' +
          '⚠ Watch the er/sie pair: er → IHM (not "ihn" — that\'s Akkusativ!), sie → IHR.\n' +
          '🧠 uns and euch are identical in Akkusativ and Dativ — one less thing to learn.\n\n' +
          'Examples: Ich helfe dir. · Das gehört ihm. · Wir danken Ihnen. · Sie glaubt mir.',
      },
      { rule: '⚖️ DATIV vs AKKUSATIV — which case does THIS verb take?',
        body:
          'Most verbs take Akkusativ; the shortlist above takes Dativ. Compare:\n\n' +
          '  AKKUSATIV (the majority)        DATIV (the shortlist)\n' +
          '  Ich sehe den Mann.       ⚠      Ich helfe dem Mann.\n' +
          '  Ich frage den Lehrer.    ⚠      Ich danke dem Lehrer.\n' +
          '  Ich besuche den Freund.  ⚠      Ich glaube dem Freund.\n\n' +
          'The same person (der Mann) becomes den with a normal verb but dem with a Dativ verb. The VERB decides the case — so you must know which list the verb is on.',
      },
      { rule: '🚦 PITFALLS — Dativ-verb traps',
        body:
          '• helfen / danken / antworten / glauben / gratulieren / folgen / gehören / passen → Dativ, NOT Akkusativ.\n' +
          '• er → ihm (Dativ), NOT ihn (that\'s Akkusativ). Same trap: wer→wem in the Dativ question.\n' +
          '• gefallen agrees with the THING: "Die Bücher gefallen mir" (plural verb).\n' +
          '• "Ich mag die Stadt" (Akk) and "Die Stadt gefällt mir" (Dativ) both mean "I like the city" — both are correct.\n' +
          '• glauben takes Dativ for a PERSON (Ich glaube dir) but Akkusativ for a thing/fact (Ich glaube das).\n' +
          '• zuhören is separable AND Dativ: "Ich höre dir zu."',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — verb→case · pronoun→Dativ · gefallen flip
      { type: 'match',
        pairs: [
          { de: 'helfen',  en: '🤝 Dativ verb' },
          { de: 'danken',  en: '🤝 Dativ verb' },
          { de: 'sehen',   en: '🎯 Akkusativ verb' },
          { de: 'besuchen', en: '🎯 Akkusativ verb' },
          { de: 'gehören', en: '🔄 Dativ flip verb' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'ich → ?', en: 'mir' },
          { de: 'du → ?',  en: 'dir' },
          { de: 'er → ?',  en: 'ihm' },
          { de: 'sie (she) → ?', en: 'ihr' },
          { de: 'sie (they) → ?', en: 'ihnen' },
          { de: 'Sie (formal) → ?', en: 'Ihnen' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'Die Stadt gefällt mir.', en: '👍 I like the city' },
          { de: 'Die Pizza schmeckt mir.', en: '😋 I like the pizza (taste)' },
          { de: 'Das Buch gehört mir.',   en: '🔑 The book is mine' },
          { de: 'Du fehlst mir.',          en: '😔 I miss you' },
        ],
      },

      // 🤝 5 DATIV-VERB article fill-blanks
      { type: 'fill-blank', sentence: 'Ich helfe __ Vater. (the, masc.)',         answer: 'dem' },
      { type: 'fill-blank', sentence: 'Wir danken __ Lehrerin. (the, fem.)',      answer: 'der' },
      { type: 'fill-blank', sentence: 'Das Buch gehört __ Kind. (the, neuter)',   answer: 'dem' },
      { type: 'fill-blank', sentence: 'Du antwortest __ Kollegen. (the, plural)', answer: 'den' },
      { type: 'fill-blank', sentence: 'Ich glaube __ Frau. (the, fem.)',          answer: 'der' },

      // 👤 4 DATIV-PRONOUN fill-blanks
      { type: 'fill-blank', sentence: 'Die Stadt gefällt __ . (me)',               answer: 'mir' },
      { type: 'fill-blank', sentence: 'Das Auto gehört __ . (you, 1 friend)',      answer: 'dir' },
      { type: 'fill-blank', sentence: 'Ich helfe __ . (him)',                      answer: 'ihm' },
      { type: 'fill-blank', sentence: 'Wir danken __ . (you, formal)',             answer: 'Ihnen' },

      // 🔄 2 GEFALLEN-FLIP MCQs (verb agrees with the thing)
      { type: 'multiple-choice', q: '"I like the shoes." (die Schuhe — plural)',
        options: ['Die Schuhe gefällt mir.','Die Schuhe gefallen mir.','Ich gefalle die Schuhe.','Die Schuhe gefallen mich.'],
        answer: 'Die Schuhe gefallen mir.',
        explain: 'The THING (Schuhe, plural) is the subject → gefallen; the person is Dativ → mir.' },
      { type: 'multiple-choice', q: '"I like the city." in German is…',
        options: ['Ich mag die Stadt.','Die Stadt gefällt mir.','Both are correct.','Neither.'],
        answer: 'Both are correct.',
        explain: 'Both work. "gefallen" + Dativ is the more idiomatic phrasing.' },

      // ⚖️ 3 DATIV-vs-AKKUSATIV / pronoun-trap MCQs
      { type: 'multiple-choice', q: 'Which verb does NOT take Dativ?',
        options: ['helfen','danken','sehen','gefallen'], answer: 'sehen',
        explain: '"sehen" takes Akkusativ: Ich sehe DEN Mann.' },
      { type: 'multiple-choice', q: '⚠ "I help him." — correct German:',
        options: ['Ich helfe ihn.','Ich helfe ihm.','Ich helfe er.','Ich helfe ihr.'],
        answer: 'Ich helfe ihm.',
        explain: 'helfen → Dativ → er becomes ihm (NOT ihn, which is Akkusativ).' },
      { type: 'multiple-choice', q: '"Ich sehe __ Mann" vs "Ich helfe __ Mann" — the blanks are:',
        options: ['den / den','dem / dem','den / dem','dem / den'],
        answer: 'den / dem',
        explain: 'sehen = Akk → den; helfen = Dativ → dem. The verb decides the case.' },

      // 💬 Mini dialogue — Dativ verbs + pronouns + the flip in real chat
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Kannst du mir helfen?',                       en: 'Can you help me?' },
        { speaker: 'B', de: 'Natürlich, ich helfe dir gern.',             en: 'Of course, I\'ll gladly help you.' },
        { speaker: 'A', de: 'Danke! Gehört das Buch dir?',                en: 'Thanks! Does this book belong to you?' },
        { speaker: 'B', de: 'Nein, es gehört dem Lehrer.',                en: 'No, it belongs to the teacher.' },
        { speaker: 'A', de: 'Wie gefällt dir die neue Stadt?',            en: 'How do you like the new city?' },
        { speaker: 'B', de: 'Sie gefällt mir sehr! Und das Essen schmeckt mir auch.', en: 'I like it a lot! And I like the food too.' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Wir gratulieren __ Chef. (the, masc.)', answer: 'dem' },
      { type: 'fill-blank', sentence: 'Ich danke __ . (you, formal)', answer: 'Ihnen' },
      { type: 'multiple-choice', q: '⚠ "I believe him." — correct German:',
        options: ['Ich glaube ihn.','Ich glaube ihm.','Ich glaube er.','Ich glaube ihr.'],
        answer: 'Ich glaube ihm.', explain: 'glauben (a person) → Dativ → ihm.' },
      { type: 'multiple-choice', q: '"I like the shoes." (plural) →',
        options: ['Die Schuhe gefällt mir.','Die Schuhe gefallen mir.','Ich gefalle die Schuhe.','Die Schuhe gefallen mich.'],
        answer: 'Die Schuhe gefallen mir.', explain: 'Verb agrees with the THING (plural) → gefallen; person → mir.' },
      { type: 'fill-blank', sentence: 'Das Buch gehört __ Kind. (the, neuter)', answer: 'dem' },
      { type: 'multiple-choice', q: 'Dativ of "er" is…',
        options: ['ihn','ihm','ihr','es'], answer: 'ihm' },
      { type: 'multiple-choice', q: 'Which verb takes a DATIV object?',
        options: ['kaufen','besuchen','helfen','sehen'], answer: 'helfen' },
    ],
  },

  /* ----- Day 27: Cases review (Nom · Akk · Dat) ----- */
  {
    id: 27, week: 4,
    vocabLayout: 'spotlight',
    title: 'Cases review',
    titleDe: 'Kasus-Wiederholung',
    emoji: '📐',
    objective: 'Prove you can switch between all three cases at will — pick Nominativ, Akkusativ or Dativ for any noun via a 5-step decision tree, and build the classic give-sentence where Dativ (to whom) and Akkusativ (what) appear together.',
    intro: 'Milestone checkpoint for the case system! Week 4 built three cases: 🟦 Nominativ (the doer) → 🟩 Akkusativ (the receiver) → 🅿️ Dativ (to/for whom + 8 prepositions + special verbs). Today you put them side by side, learn the wer/wen/wem question test and the decision tree, and assemble the full "Ich gebe dem Mann das Buch" sentence. Scroll the keystones, read the recap cards, then aim for ≥ 80%.',
    vocabulary: [
      // ⚖️ THE THREE CASES NAMED
      { de: 'der Nominativ', en: 'subject case (the DOER)',       emoji: '🟦', hint: '🔁 Day 9 · Wer? · der/die/das stay',    example: 'Der Mann schläft.',           exampleEn: 'The man sleeps.' },
      { de: 'der Akkusativ', en: 'direct-object case (RECEIVER)', emoji: '🟩', hint: '🔁 Day 21 · Wen? · masc → den',         example: 'Ich sehe den Mann.',          exampleEn: 'I see the man.' },
      { de: 'der Dativ',     en: 'indirect-object case (TO whom)', emoji: '🅿️', hint: '🔁 Day 25-26 · Wem? · der→dem etc.',  example: 'Ich gebe dem Mann das Buch.', exampleEn: 'I give the man the book.' },

      // ⭐ THE MASCULINE DRAMA — der → den → dem
      { de: 'der → den → dem', en: 'masc.: Nom → Akk → Dat',  emoji: '🎭', hint: '⭐ the only row with 3 different forms',  example: 'Der Mann gibt dem Kind den Ball.', exampleEn: 'The man gives the child the ball.' },
      { de: 'die → die → der', en: 'fem.: Nom → Akk → Dat',   emoji: '🟥', hint: 'fem. only changes in Dativ → der',       example: 'Die Frau · die Frau · der Frau',  exampleEn: 'the woman (subj · obj · to her)' },
      { de: 'das → das → dem', en: 'neut.: Nom → Akk → Dat',  emoji: '🟩', hint: 'neut. only changes in Dativ → dem',       example: 'Das Kind · das Kind · dem Kind',  exampleEn: 'the child (subj · obj · to it)' },
      { de: 'die → die → den', en: 'pl.: Nom → Akk → Dat (+n)', emoji: '🟨', hint: 'plural Dativ → den + noun adds -n',     example: 'die Kinder → den Kindern',        exampleEn: 'the children → to the children' },

      // 🅰️ INDEFINITE forms
      { de: 'ein → einen → einem', en: 'a (masc.): Nom→Akk→Dat', emoji: '🅰️', hint: 'indefinite masc · the full change',    example: 'Ich gebe einem Mann einen Ball.', exampleEn: 'I give a man a ball.' },
      { de: 'eine → eine → einer', en: 'a (fem.): Nom→Akk→Dat', emoji: '🅰️', hint: 'indefinite fem · changes only in Dativ', example: 'Ich helfe einer Frau.',          exampleEn: 'I help a woman.' },

      // 🔍 THE QUESTION TEST — wer / wen / wem
      { de: 'Wer …?', en: 'Who …? → Nominativ',  emoji: '🟦', hint: '🔍 finds the SUBJECT',          example: 'Wer schläft? — Der Mann.',         exampleEn: 'Who sleeps? — The man.' },
      { de: 'Wen …?', en: 'Whom …? → Akkusativ', emoji: '🟩', hint: '🔍 finds the DIRECT object',    example: 'Wen sieht er? — Den Hund.',         exampleEn: 'Whom does he see? — The dog.' },
      { de: 'Wem …?', en: 'To whom …? → Dativ',  emoji: '🅿️', hint: '🔍 finds the INDIRECT object',  example: 'Wem gibt er das Buch? — Dem Kind.', exampleEn: 'To whom does he give the book? — The child.' },

      // 🎁 THE GIVE-SENTENCE — Dativ + Akkusativ together
      { de: 'geben',  en: 'to give (sb sth)',  emoji: '🎁', hint: '⭐ Dativ person + Akkusativ thing', example: 'Ich gebe dem Mann das Buch.',  exampleEn: 'I give the man the book.' },
      { de: 'zeigen', en: 'to show (sb sth)',  emoji: '👉', hint: 'Dativ person + Akkusativ thing',    example: 'Ich zeige dir die Stadt.',     exampleEn: 'I show you the city.' },

      // 🔑 KEY DATIV TRIGGERS — quick recall
      { de: 'mit / bei / zu …', en: 'the 8 Dativ prepositions', emoji: '🅿️', hint: '🔁 Day 25 · always Dativ',           example: 'Ich fahre mit dem Bus.',  exampleEn: 'I go by bus.' },
      { de: 'helfen / danken',  en: 'Dativ verbs',              emoji: '🤝', hint: '🔁 Day 26 · take Dativ, not Akk',     example: 'Ich helfe dem Mann.',     exampleEn: 'I help the man.' },
      { de: 'gefällt mir',      en: 'I like it (the flip)',     emoji: '🔄', hint: '🔁 Day 26 · thing = subject',         example: 'Die Stadt gefällt mir.',  exampleEn: 'I like the city.' },
    ],
    grammar: [
      { rule: '⭐ THE ARTICLE CHEAT-SHEET — all 12 + indefinite',
        body:
          '              masc.   fem.   neuter  plural\n' +
          '  Nominativ   der     die    das     die\n' +
          '  Akkusativ   den     die    das     die\n' +
          '  Dativ       dem     der    dem     den +n\n' +
          '  ─────────────────────────────────────────\n' +
          '  Indef. Nom. ein     eine   ein     —\n' +
          '  Indef. Akk. einen   eine   ein     —\n' +
          '  Indef. Dat. einem   einer  einem   —\n\n' +
          '🧠 Three shortcuts cover almost everything:\n' +
          '  1. Only MASCULINE changes in the Akkusativ (der→den).\n' +
          '  2. In the Dativ, masc. & neuter are identical (dem/einem).\n' +
          '  3. Plural Dativ adds -n to the noun (den Kindern).',
      },
      { rule: '🔍 THE QUESTION TEST — wer · wen · wem',
        body:
          'Identify any noun\'s case by asking the verb a question:\n\n' +
          '  Wer + verb?  → Nominativ (subject)\n' +
          '  Wen + verb?  → Akkusativ (direct object)\n' +
          '  Wem + verb?  → Dativ (indirect object)\n\n' +
          'Sentence: "Der Mann gibt dem Kind den Ball."\n' +
          '  Wer gibt?       → Der Mann.  (Nominativ)\n' +
          '  Wem gibt er …?  → dem Kind.  (Dativ — the receiver-person)\n' +
          '  Was gibt er?    → den Ball.  (Akkusativ — the thing given)\n\n' +
          '🧠 The endings echo: weR→deR (Nom), weN→deN (Akk masc.), weM→deM (Dativ).',
      },
      { rule: '⭐ THE 5-STEP DECISION TREE — which case?',
        body:
          'For any noun, ask in order:\n\n' +
          '  1. Is it the SUBJECT (who does it)?            → Nominativ\n' +
          '  2. Is it the DIRECT object (what is verbed)?    → Akkusativ\n' +
          '  3. After mit/bei/zu/von/nach/aus/seit/gegenüber? → Dativ\n' +
          '  4. After helfen/danken/gehören/gefallen/antworten/glauben? → Dativ\n' +
          '  5. None of the above?                          → default Akkusativ\n\n' +
          'This tree resolves the vast majority of A1 sentences. Steps 3-4 (the Dativ triggers) are the ones to over-learn, because they override the "default Akkusativ" instinct.',
      },
      { rule: '⭐ THE GIVE-SENTENCE — Dativ + Akkusativ together',
        body:
          'Verbs like geben, zeigen, schenken, schicken take TWO objects: a PERSON (Dativ) and a THING (Akkusativ). Default order = Dativ before Akkusativ:\n\n' +
          '  Subject(Nom)  Verb   Person(Dat)  Thing(Akk)\n' +
          '  Ich           gebe   dem Mann     das Buch.\n' +
          '  Sie           zeigt  dem Kind     den Weg.\n\n' +
          'Rule of thumb: "to/for whom" (Dativ) comes BEFORE "what" (Akkusativ) — unless the thing is a pronoun, then it flips (Ich gebe es dem Mann). At A1, Dativ-then-Akkusativ is your safe default.',
      },
      { rule: '🎯 The 5 case mistakes to never make again',
        body:
          '1. "Ich sehe der Mann" ✗ → object → "Ich sehe den Mann." ✓\n' +
          '2. "Ich helfe den Mann" ✗ → helfen takes Dativ → "Ich helfe dem Mann." ✓\n' +
          '3. "mit den Kinder" ✗ → plural Dativ adds -n → "mit den Kindern." ✓\n' +
          '4. "Das Buch gefällt mich" ✗ → gefallen takes Dativ → "… gefällt mir." ✓\n' +
          '5. "Ich helfe ihn" ✗ → Dativ pronoun → "Ich helfe ihm." ✓',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — case→test · masc grid · sentence→case
      { type: 'match',
        pairs: [
          { de: 'Nominativ', en: '🔍 Wer? · the subject' },
          { de: 'Akkusativ', en: '🔍 Wen? · the direct object' },
          { de: 'Dativ',     en: '🔍 Wem? · the indirect object' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'masc. Nominativ', en: 'der' },
          { de: 'masc. Akkusativ', en: 'den' },
          { de: 'masc. Dativ',     en: 'dem' },
          { de: 'fem. Dativ',      en: 'der' },
          { de: 'plural Dativ',    en: 'den + noun-n' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'Der Mann schläft.',      en: '🟦 Nominativ' },
          { de: 'Ich sehe den Mann.',     en: '🟩 Akkusativ' },
          { de: 'Ich helfe dem Mann.',    en: '🅿️ Dativ (verb)' },
          { de: 'Ich fahre mit dem Bus.', en: '🅿️ Dativ (preposition)' },
        ],
      },

      // ⚖️ 6 ONE-NOUN-ACROSS-CASES fill-blanks (masc + fem)
      { type: 'fill-blank', sentence: 'Subject: "__ Mann arbeitet hier." (the, masc., Nom.)', answer: 'Der' },
      { type: 'fill-blank', sentence: 'Object: "Ich sehe __ Mann." (the, masc., Akk.)',       answer: 'den' },
      { type: 'fill-blank', sentence: 'Dativ prep: "Ich gehe mit __ Mann." (the, masc.)',      answer: 'dem' },
      { type: 'fill-blank', sentence: 'Subject: "__ Frau ist hier." (the, fem., Nom.)',       answer: 'Die' },
      { type: 'fill-blank', sentence: 'Object: "Ich sehe __ Frau." (the, fem., Akk.)',         answer: 'die' },
      { type: 'fill-blank', sentence: 'Dativ verb: "Ich helfe __ Frau." (the, fem.)',          answer: 'der' },

      // 🎁 2 GIVE-SENTENCE fill-blanks (Dativ + Akkusativ together)
      { type: 'fill-blank', sentence: 'Ich gebe __ Mann das Buch. (the person — Dativ, masc.)',  answer: 'dem' },
      { type: 'fill-blank', sentence: 'Ich gebe dem Mann __ Buch. (the thing — Akkusativ, neut.)', answer: 'das' },

      // ⚠ 1 PLURAL -n drill
      { type: 'fill-blank', sentence: 'Plural Dativ: "Ich spreche mit __ Studenten."',         answer: 'den' },

      // 🔍 4 CASE-DECISION MCQs
      { type: 'multiple-choice', q: 'What case after "mit"?', options: ['Nom.','Akk.','Dat.','Gen.'], answer: 'Dat.' },
      { type: 'multiple-choice', q: '"Das Buch gefällt ___ ." — pick.', options: ['ich','mich','mir','meinen'], answer: 'mir',
        explain: 'gefallen takes Dativ → mir.' },
      { type: 'multiple-choice', q: '"Ich kaufe ___ Buch." (a, neuter)', options: ['ein','einen','einem','eine'], answer: 'ein' },
      { type: 'multiple-choice', q: 'Which question finds the Dativ (indirect object)?',
        options: ['Wer?','Wen?','Wem?','Was?'], answer: 'Wem?' },

      // ⚠ 2 SPOT-THE-ERROR MCQs
      { type: 'multiple-choice', q: '⚠ Which sentence is WRONG?',
        options: ['Ich sehe den Mann.','Ich helfe den Mann.','Ich helfe dem Mann.','Der Mann schläft.'],
        answer: 'Ich helfe den Mann.',
        explain: 'helfen takes Dativ → "Ich helfe dem Mann."' },
      { type: 'multiple-choice', q: '⚠ Plural Dativ — which is correct?',
        options: ['mit den Kinder','mit die Kindern','mit den Kindern','mit dem Kindern'],
        answer: 'mit den Kindern',
        explain: 'Plural Dativ: den + noun adds -n.' },

      // 💬 Capstone dialogue — all three cases in one chat
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Was machst du mit dem Buch?',             en: 'What are you doing with the book?' },
        { speaker: 'B', de: 'Ich gebe es dem Lehrer.',                 en: 'I am giving it to the teacher.' },
        { speaker: 'A', de: 'Und wer hilft dir bei den Hausaufgaben?', en: 'And who helps you with the homework?' },
        { speaker: 'B', de: 'Die Lehrerin hilft mir. Sie zeigt mir die Grammatik.', en: 'The teacher helps me. She shows me the grammar.' },
        { speaker: 'A', de: 'Gefällt dir der Kurs?',                   en: 'Do you like the course?' },
        { speaker: 'B', de: 'Ja! Der Kurs gefällt mir sehr.',          en: 'Yes! I like the course a lot.' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Subject: "__ Mann arbeitet hier." (the, masc., Nom.)', answer: 'Der' },
      { type: 'fill-blank', sentence: 'Object: "Ich sehe __ Mann." (the, masc., Akk.)', answer: 'den' },
      { type: 'fill-blank', sentence: 'Dativ: "Ich gebe ___ Kind einen Ball." (the, neuter)', answer: 'dem' },
      { type: 'multiple-choice', q: 'Which question finds the direct object?',
        options: ['Wer?','Wen?','Wem?','Wo?'], answer: 'Wen?' },
      { type: 'multiple-choice', q: 'masc. Dativ article =',
        options: ['der','den','dem','das'], answer: 'dem' },
      { type: 'multiple-choice', q: '⚠ "I help the child." — correct German:',
        options: ['Ich helfe das Kind.','Ich helfe dem Kind.','Ich helfe den Kind.','Ich helfe der Kind.'],
        answer: 'Ich helfe dem Kind.', explain: 'helfen → Dativ; neuter das → dem.' },
      { type: 'fill-blank', sentence: 'Plural Dativ: Ich spiele mit den __ . (Kinder + -n)', answer: 'Kindern' },
    ],
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
    vocabLayout: 'spotlight',
    title: 'Akkusativ pronouns',
    titleDe: 'Akkusativ-Pronomen',
    emoji: '👀',
    objective: 'Replace any direct-object noun with the right Akkusativ pronoun (mich · dich · ihn …) — and contrast it instantly with the Dativ set (mir · dir · ihm …) you met on Day 26.',
    intro: 'You know the subject pronouns (ich · du · er · sie · es · wir · ihr · sie/Sie). When the SAME person becomes the DIRECT object, most shape-shift: ich → mich, du → dich, er → ihn. Today you lock in the full Akkusativ set, see which ones DON\'T change (sie/es/uns/euch), and put them head-to-head with the Dativ pronouns so mich-vs-mir never trips you up.',
    vocabulary: [
      // 🔄 THE SHAPE-SHIFTERS — change from Nominativ to Akkusativ
      { de: 'ich → mich', en: 'me',                  emoji: '🙋', hint: '🔄 ich becomes mich · Dativ = mir',          example: 'Er liebt mich.',          exampleEn: 'He loves me.' },
      { de: 'du → dich',  en: 'you (1 friend)',      emoji: '👉', hint: '🔄 du becomes dich · Dativ = dir',          example: 'Ich sehe dich.',          exampleEn: 'I see you.' },
      { de: 'er → ihn',   en: 'him',                 emoji: '👨', hint: '⭐ er becomes IHN · Dativ = ihm (watch it!)', example: 'Ich treffe ihn.',         exampleEn: 'I meet him.' },

      // ✅ THE NO-CHANGERS — identical to the subject form
      { de: 'sie = sie',  en: 'her / them (NO change)', emoji: '👩', hint: '✅ sie stays sie · Dativ = ihr/ihnen',    example: 'Ich besuche sie.',        exampleEn: 'I visit her.' },
      { de: 'es = es',    en: 'it (NO change)',       emoji: '📦', hint: '✅ es stays es · Dativ = ihm',             example: 'Ich kaufe es.',           exampleEn: 'I buy it.' },
      { de: 'uns = uns',  en: 'us (NO change)',       emoji: '👥', hint: '✅ uns · same in Akk AND Dativ',           example: 'Er besucht uns.',         exampleEn: 'He visits us.' },
      { de: 'euch = euch', en: 'you all (NO change)', emoji: '👨‍👩‍👧', hint: '✅ euch · same in Akk AND Dativ',     example: 'Wir laden euch ein.',     exampleEn: 'We invite you all.' },
      { de: 'Sie = Sie',  en: 'you (formal, NO change)', emoji: '🤝', hint: '✅ formal Sie · same · Dativ = Ihnen', example: 'Ich sehe Sie.',           exampleEn: 'I see you. (formal)' },

      // ⚖️ THE AKK-vs-DAT CONTRAST PAIRS — the trap to crush
      { de: 'mich (Akk) ↔ mir (Dat)', en: 'me: object vs to-me',    emoji: '⚖️', hint: '⭐ "Er sieht mich" vs "Er hilft mir"', example: 'Er sieht mich. / Er hilft mir.', exampleEn: 'He sees me. / He helps me.' },
      { de: 'dich (Akk) ↔ dir (Dat)', en: 'you: object vs to-you',  emoji: '⚖️', hint: '⭐ "Ich liebe dich" vs "Ich danke dir"', example: 'Ich liebe dich. / Ich danke dir.', exampleEn: 'I love you. / I thank you.' },
      { de: 'ihn (Akk) ↔ ihm (Dat)',  en: 'him: object vs to-him',  emoji: '⚖️', hint: '⭐ "Ich sehe ihn" vs "Ich helfe ihm"', example: 'Ich sehe ihn. / Ich helfe ihm.', exampleEn: 'I see him. / I help him.' },

      // 🎬 AKKUSATIV VERBS that trigger these pronouns
      { de: 'lieben',   en: 'to love',          emoji: '❤️', hint: 'Akk · "Ich liebe dich"',          example: 'Ich liebe dich.',         exampleEn: 'I love you.' },
      { de: 'treffen',  en: 'to meet',          emoji: '🤝', hint: 'Akk · "Ich treffe ihn"',          example: 'Ich treffe sie morgen.',  exampleEn: 'I meet her tomorrow.' },
      { de: 'einladen', en: 'to invite (sep.)', emoji: '✉️', hint: 'Akk + separable · "Ich lade dich ein"', example: 'Ich lade euch ein.',  exampleEn: 'I invite you all.' },
      { de: 'anrufen',  en: 'to call (sep.)',   emoji: '📞', hint: 'Akk + separable · "Ich rufe dich an"', example: 'Ich rufe dich an.',     exampleEn: 'I call you.' },
      { de: 'verstehen', en: 'to understand',   emoji: '💡', hint: 'Akk · "Ich verstehe dich"',        example: 'Ich verstehe dich nicht.', exampleEn: 'I don\'t understand you.' },
    ],
    grammar: [
      { rule: '⭐ THE FULL AKKUSATIV-PRONOUN TABLE',
        body:
          '              Subject (Nom)   →   Direct object (Akk)\n' +
          '   1st sg     ich              →   mich\n' +
          '   2nd sg     du               →   dich\n' +
          '   3rd m      er               →   ihn      ⚠ big change\n' +
          '   3rd f      sie              →   sie      ✅ unchanged\n' +
          '   3rd n      es               →   es       ✅ unchanged\n' +
          '   1st pl     wir              →   uns\n' +
          '   2nd pl     ihr              →   euch\n' +
          '   3rd pl     sie / Sie        →   sie / Sie ✅ unchanged\n\n' +
          '🧠 Only FOUR forms actually change: ich→mich, du→dich, er→ihn, wir→uns, ihr→euch. The 3rd-person sie/es and formal Sie stay put.',
      },
      { rule: '⚖️ AKKUSATIV vs DATIV PRONOUNS — the table that prevents 90% of errors',
        body:
          'Put the two object-pronoun sets side by side. The VERB decides which column you need (Day 26 Dativ verbs → right column; normal verbs → left):\n\n' +
          '   Subject   Akkusativ      Dativ\n' +
          '   ich       mich           mir\n' +
          '   du        dich           dir\n' +
          '   er        ihn            ihm\n' +
          '   sie(she)  sie            ihr\n' +
          '   es        es             ihm\n' +
          '   wir       uns            uns    ✅ same\n' +
          '   ihr       euch           euch   ✅ same\n' +
          '   sie(they) sie            ihnen\n' +
          '   Sie       Sie            Ihnen\n\n' +
          '⚠ The killer pair is er: ihn (Akk) vs ihm (Dat). "Ich sehe ihn" (I see him) but "Ich helfe ihm" (I help him). uns and euch are identical in both — a freebie.',
      },
      { rule: '🎯 WHEN TO USE AKKUSATIV PRONOUNS',
        body:
          'Use them as the DIRECT object of a normal (Akkusativ) verb — sehen, haben, kaufen, lieben, treffen, besuchen, einladen, anrufen, verstehen…\n\n' +
          '  Wrong: „Ich sehe du!"        Right: „Ich sehe dich!"\n' +
          '  Wrong: „Er liebt ich."        Right: „Er liebt mich."\n' +
          '  Wrong: „Ich rufe er an."      Right: „Ich rufe ihn an."\n\n' +
          'The pronoun slots in exactly where the noun object would go. With separable verbs the prefix still flies to the end: "Ich rufe dich an", "Ich lade euch ein".',
      },
      { rule: '📍 WORD ORDER — where the object pronoun sits',
        body:
          'A pronoun object likes to come EARLY — right after the conjugated verb:\n\n' +
          '  Ich sehe ihn morgen.        (pronoun before the time word)\n' +
          '  Morgen sehe ich ihn.        (after V2 inversion, still early)\n' +
          '  Ich rufe dich später an.     (separable: stem-…-prefix)\n\n' +
          'If there are TWO objects and both are pronouns, Akkusativ comes BEFORE Dativ (the reverse of the noun order): "Ich gebe es dir." (it=Akk, dir=Dat). At A1 you\'ll mostly use one pronoun at a time — just keep it close to the verb.',
      },
      { rule: '🚦 PITFALLS — Akkusativ-pronoun traps',
        body:
          '• er → ihn (Akk), NOT ihm (that\'s Dativ). The #1 mix-up.\n' +
          '• sie, es, uns, euch, Sie do NOT change — don\'t invent forms like "sien".\n' +
          '• Don\'t use the subject form as an object: "Er liebt ich" ✗ → "Er liebt mich" ✓.\n' +
          '• Dativ verbs (helfen, danken, gefallen) still take the DATIV pronoun: "Ich helfe dir", not "dich".\n' +
          '• mich/dich are Akkusativ; mir/dir are Dativ — check the verb before you choose.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — Nom→Akk · Akk↔Dat contrast · changes vs no-change
      { type: 'match',
        pairs: [
          { de: 'ich → ?', en: 'mich' },
          { de: 'du → ?',  en: 'dich' },
          { de: 'er → ?',  en: 'ihn' },
          { de: 'wir → ?', en: 'uns' },
          { de: 'ihr → ?', en: 'euch' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'Er sieht ___ (me)',   en: 'mich (Akk)' },
          { de: 'Er hilft ___ (me)',   en: 'mir (Dat)' },
          { de: 'Ich sehe ___ (him)',  en: 'ihn (Akk)' },
          { de: 'Ich helfe ___ (him)', en: 'ihm (Dat)' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'ich (→mich)', en: '🔄 changes in Akk' },
          { de: 'er (→ihn)',   en: '🔄 changes in Akk' },
          { de: 'sie (her)',   en: '✅ no change' },
          { de: 'es',          en: '✅ no change' },
          { de: 'uns',         en: '✅ no change' },
        ],
      },

      // 🎯 6 AKKUSATIV-PRONOUN fill-blanks
      { type: 'fill-blank', sentence: '"He loves me." → Er liebt __.',               answer: 'mich' },
      { type: 'fill-blank', sentence: '"I call you (1 friend)." → Ich rufe __ an.',  answer: 'dich' },
      { type: 'fill-blank', sentence: '"She meets him." → Sie trifft __.',           answer: 'ihn' },
      { type: 'fill-blank', sentence: '"I visit her." → Ich besuche __.',            answer: 'sie' },
      { type: 'fill-blank', sentence: '"I buy it." → Ich kaufe __.',                 answer: 'es' },
      { type: 'fill-blank', sentence: '"We invite you (group)." → Wir laden __ ein.', answer: 'euch' },

      // ⚖️ 3 AKK-vs-DAT decide-the-case fill-blanks
      { type: 'fill-blank', sentence: '"I see him." (sehen = Akk) → Ich sehe __.',   answer: 'ihn' },
      { type: 'fill-blank', sentence: '"I help him." (helfen = Dativ) → Ich helfe __.', answer: 'ihm' },
      { type: 'fill-blank', sentence: '"He thanks me." (danken = Dativ) → Er dankt __.', answer: 'mir' },

      // ⚠ 4 SHAPE-SHIFT / TRAP MCQs
      { type: 'multiple-choice', q: '"He sees me." =',
        options: ['Er sieht ich.','Er sieht mir.','Er sieht mich.','Er sieht mein.'],
        answer: 'Er sieht mich.', explain: 'Subject er (Nom), object ich → mich (Akk).' },
      { type: 'multiple-choice', q: '⚠ "I see him." — correct Akkusativ:',
        options: ['Ich sehe ihm.','Ich sehe ihn.','Ich sehe er.','Ich sehe ihr.'],
        answer: 'Ich sehe ihn.', explain: 'sehen takes Akkusativ → er becomes ihn (ihm is Dativ).' },
      { type: 'multiple-choice', q: 'Which pronoun is the same in Nom and Akk?',
        options: ['ich','du','er','sie/es'], answer: 'sie/es',
        explain: 'sie (her/them) and es (it) keep the same form.' },
      { type: 'multiple-choice', q: 'Which pair is identical in BOTH Akkusativ and Dativ?',
        options: ['mich/mir','ihn/ihm','uns/uns','dich/dir'], answer: 'uns/uns',
        explain: 'uns (and euch) are the same in both cases.' },

      // 💬 Mini dialogue — Akk pronouns + the Akk/Dat contrast
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Triffst du Anna heute?',                  en: 'Are you meeting Anna today?' },
        { speaker: 'B', de: 'Ja, ich treffe sie um drei.',            en: 'Yes, I\'m meeting her at three.' },
        { speaker: 'A', de: 'Rufst du mich danach an?',               en: 'Will you call me afterwards?' },
        { speaker: 'B', de: 'Klar, ich rufe dich an.',                en: 'Sure, I\'ll call you.' },
        { speaker: 'A', de: 'Super. Und kannst du mir helfen?',       en: 'Great. And can you help me?' },
        { speaker: 'B', de: 'Natürlich helfe ich dir!',               en: 'Of course I\'ll help you!' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: '"She invites him." → Sie lädt __ ein.', answer: 'ihn' },
      { type: 'multiple-choice', q: 'Which pronoun is the same in Nom and Akk?',
        options: ['ich','du','er','sie/es'], answer: 'sie/es', explain: 'sie (her/them) and es (it) keep the same form.' },
      { type: 'fill-blank', sentence: '"He loves me." → Er liebt __.', answer: 'mich' },
      { type: 'multiple-choice', q: '⚠ "I help him." (helfen = Dativ) =',
        options: ['Ich helfe ihn.','Ich helfe ihm.','Ich helfe er.','Ich helfe ihr.'],
        answer: 'Ich helfe ihm.', explain: 'helfen takes Dativ → ihm, not ihn.' },
      { type: 'multiple-choice', q: 'Akkusativ of "er" is…',
        options: ['ihm','ihn','er','ihr'], answer: 'ihn' },
      { type: 'fill-blank', sentence: '"We invite you all." → Wir laden __ ein.', answer: 'euch' },
      { type: 'multiple-choice', q: 'Which is the same in Akkusativ AND Dativ?',
        options: ['ich','er','uns','du'], answer: 'uns' },
    ],
  },

  /* ----- Day 29: Dativ pronouns ----- */
  {
    id: 29, week: 5,
    vocabLayout: 'spotlight',
    title: 'Dativ pronouns',
    titleDe: 'Dativ-Pronomen',
    emoji: '🤲',
    objective: 'Master the Dativ pronoun set (mir · dir · ihm …) and deploy it after BOTH triggers — Dativ verbs and Dativ prepositions — plus learn the pronoun word-order rule in the give-sentence.',
    intro: 'Day 28 gave you the Akkusativ pronouns; today is their Dativ twin. The Dativ pronoun appears after the Day-26 Dativ verbs (helfen, danken, gehören, gefallen) AND after the Day-25 Dativ prepositions (mit, bei, zu …). ich → mir, du → dir, er → ihm. Lock the set, see how it pairs with an Akkusativ object in "Ich gebe dir das Buch", and crush the mir-vs-mich trap for good.',
    vocabulary: [
      // 🔄 THE SHAPE-SHIFTERS — change from Nominativ to Dativ
      { de: 'ich → mir', en: 'to/for me',          emoji: '🙋', hint: '🔄 ich becomes mir · Akk = mich',         example: 'Er hilft mir.',           exampleEn: 'He helps me.' },
      { de: 'du → dir',  en: 'to/for you (1 friend)', emoji: '👉', hint: '🔄 du becomes dir · Akk = dich',       example: 'Ich danke dir.',          exampleEn: 'I thank you.' },
      { de: 'er → ihm',  en: 'to/for him',         emoji: '👨', hint: '⭐ er becomes IHM · Akk = ihn (the trap!)', example: 'Ich gebe ihm das Buch.', exampleEn: 'I give him the book.' },
      { de: 'sie → ihr', en: 'to/for her',         emoji: '👩', hint: '⭐ sie(she) becomes IHR · Akk = sie',     example: 'Ich helfe ihr.',          exampleEn: 'I help her.' },
      { de: 'es → ihm',  en: 'to/for it',          emoji: '📦', hint: '🔄 es becomes ihm (same as er)',          example: 'Ich gebe ihm Wasser.',    exampleEn: 'I give it water.' },
      { de: 'sie → ihnen', en: 'to/for them',      emoji: '🧑‍🤝‍🧑', hint: '🔄 sie(they) becomes IHNEN',          example: 'Ich helfe ihnen.',        exampleEn: 'I help them.' },

      // ✅ THE NO-CHANGERS — identical to the subject form
      { de: 'uns = uns',  en: 'to/for us (NO change)',   emoji: '👥', hint: '✅ uns · same in Akk AND Dativ',     example: 'Er hilft uns.',           exampleEn: 'He helps us.' },
      { de: 'euch = euch', en: 'to/for you all (NO change)', emoji: '👨‍👩‍👧', hint: '✅ euch · same in Akk AND Dativ', example: 'Wir danken euch.',    exampleEn: 'We thank you all.' },
      { de: 'Sie → Ihnen', en: 'to/for you (formal)', emoji: '🤝', hint: '⭐ formal Sie → Ihnen · capital I',     example: 'Ich danke Ihnen.',        exampleEn: 'I thank you. (formal)' },

      // ⚖️ THE AKK-vs-DAT CONTRAST PAIRS — the mir-vs-mich trap
      { de: 'mir (Dat) ↔ mich (Akk)', en: 'me: to-me vs object', emoji: '⚖️', hint: '⭐ "Er hilft mir" vs "Er sieht mich"', example: 'Er hilft mir. / Er sieht mich.', exampleEn: 'He helps me. / He sees me.' },
      { de: 'ihm (Dat) ↔ ihn (Akk)',  en: 'him: to-him vs object', emoji: '⚖️', hint: '⭐ "Ich helfe ihm" vs "Ich sehe ihn"', example: 'Ich helfe ihm. / Ich sehe ihn.', exampleEn: 'I help him. / I see him.' },
      { de: 'ihr (Dat) ↔ sie (Akk)',  en: 'her: to-her vs object', emoji: '⚖️', hint: '⭐ "Ich danke ihr" vs "Ich sehe sie"', example: 'Ich danke ihr. / Ich sehe sie.', exampleEn: 'I thank her. / I see her.' },

      // 🅿️ THE TWO TRIGGERS — what forces a Dativ pronoun
      { de: 'mit / bei / zu …', en: 'after a Dativ preposition', emoji: '🅿️', hint: '🔁 Day 25 · "mit mir", "bei dir", "zu ihm"', example: 'Kommst du mit mir?',     exampleEn: 'Are you coming with me?' },
      { de: 'helfen / danken', en: 'after a Dativ verb',         emoji: '🤝', hint: '🔁 Day 26 · "Ich helfe dir"',          example: 'Ich danke dir.',          exampleEn: 'I thank you.' },
      { de: 'geben / zeigen',  en: 'give/show sb (Dat) sth (Akk)', emoji: '🎁', hint: '⭐ Dativ person + Akkusativ thing',  example: 'Ich gebe dir das Buch.',  exampleEn: 'I give you the book.' },
      { de: 'gehören / gefallen', en: 'belong to / please sb',   emoji: '🔄', hint: '🔁 Day 26 · "Das gehört mir", "gefällt mir"', example: 'Das gehört mir.',     exampleEn: 'That belongs to me.' },
    ],
    grammar: [
      { rule: '⭐ THE FULL DATIV-PRONOUN TABLE',
        body:
          '              Subject (Nom)   →   Indirect object (Dat)\n' +
          '   1st sg     ich              →   mir\n' +
          '   2nd sg     du               →   dir\n' +
          '   3rd m      er               →   ihm\n' +
          '   3rd f      sie              →   ihr\n' +
          '   3rd n      es               →   ihm     (same as er)\n' +
          '   1st pl     wir              →   uns     ✅ unchanged\n' +
          '   2nd pl     ihr              →   euch    ✅ unchanged\n' +
          '   3rd pl     sie              →   ihnen\n' +
          '   formal     Sie              →   Ihnen   (capital I)\n\n' +
          '🧠 Most singular forms end in -r (miR, diR, ihR) or -m (ihM). uns & euch don\'t change.',
      },
      { rule: '⚖️ DATIV vs AKKUSATIV — the mir/mich · ihm/ihn trap',
        body:
          'Both are object pronouns; the VERB (or preposition) decides which set you need. Day-26 Dativ verbs + Day-25 Dativ preps → Dativ; normal verbs → Akkusativ:\n\n' +
          '   Subject   Akkusativ      Dativ\n' +
          '   ich       mich           mir\n' +
          '   du        dich           dir\n' +
          '   er        ihn            ihm\n' +
          '   sie(she)  sie            ihr\n' +
          '   wir       uns            uns    ✅ same\n' +
          '   ihr       euch           euch   ✅ same\n' +
          '   sie(they) sie            ihnen\n\n' +
          'Worked contrast:\n' +
          '  Er SIEHT mich.   (sehen = Akk)   Er HILFT mir.   (helfen = Dat)\n' +
          '  Ich SEHE ihn.    (Akk)           Ich HELFE ihm.  (Dat)\n\n' +
          '⚠ The single most-tested pair: ihn (Akk) vs ihm (Dat).',
      },
      { rule: '🅿️ THE TWO TRIGGERS — when a pronoun goes Dativ',
        body:
          'A pronoun takes the Dativ in exactly two situations:\n\n' +
          '  1. After a DATIV VERB (Day 26):\n' +
          '     helfen · danken · gehören · gefallen · antworten · glauben · gratulieren\n' +
          '     "Ich helfe dir." · "Das gehört mir." · "Es gefällt ihr."\n\n' +
          '  2. After a DATIV PREPOSITION (Day 25):\n' +
          '     mit · bei · zu · von · nach · aus · seit · gegenüber\n' +
          '     "Kommst du mit mir?" · "Ich wohne bei ihr." · "Ich gehe zu ihm."\n\n' +
          '  Wrong: „Das Buch gehört ich!"   Right: „Das Buch gehört mir!"\n' +
          '  Wrong: „Er kommt mit du."        Right: „Er kommt mit dir."',
      },
      { rule: '🎁 THE GIVE-SENTENCE — Dativ person + Akkusativ thing',
        body:
          'Verbs like geben, zeigen, schenken, schicken take a PERSON (Dativ) and a THING (Akkusativ) at once:\n\n' +
          '  Ich gebe   dir       das Buch.\n' +
          '             └ Dat person └ Akk thing\n' +
          '  Sie zeigt  ihm        die Stadt.\n\n' +
          '⭐ The pronoun-order flip: with TWO noun objects it\'s Dativ-then-Akkusativ, but when the THING becomes a pronoun, Akkusativ jumps in FRONT of Dativ:\n' +
          '  Ich gebe dir das Buch.   →   Ich gebe es dir.\n' +
          '            (Dat → Akk)              (Akk → Dat)\n' +
          'Rule: a pronoun object comes before a noun object, and Akk-pronoun before Dat-pronoun.',
      },
      { rule: '🚦 PITFALLS — Dativ-pronoun traps',
        body:
          '• er → ihm (Dativ), NOT ihn (that\'s Akkusativ). The classic flip.\n' +
          '• sie (she) → ihr in the Dativ — don\'t leave it as sie.\n' +
          '• sie (they) → ihnen (lowercase); formal Sie → Ihnen (capital I).\n' +
          '• uns and euch are identical in Akk and Dativ — no change.\n' +
          '• After mit/bei/zu… always Dativ: "mit mir", never "mit mich".\n' +
          '• gefallen/gehören take Dativ: "Das gefällt mir" (not mich), "Das gehört mir" (not mich).',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — Nom→Dat · Akk↔Dat contrast · trigger→case
      { type: 'match',
        pairs: [
          { de: 'ich → ?', en: 'mir' },
          { de: 'du → ?',  en: 'dir' },
          { de: 'er → ?',  en: 'ihm' },
          { de: 'sie (she) → ?', en: 'ihr' },
          { de: 'sie (they) → ?', en: 'ihnen' },
          { de: 'Sie (formal) → ?', en: 'Ihnen' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'Er hilft ___ (me)',  en: 'mir (Dat)' },
          { de: 'Er sieht ___ (me)',  en: 'mich (Akk)' },
          { de: 'Ich helfe ___ (him)', en: 'ihm (Dat)' },
          { de: 'Ich sehe ___ (him)',  en: 'ihn (Akk)' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'mit / bei / zu', en: '🅿️ Dativ preposition → Dativ pronoun' },
          { de: 'helfen / danken', en: '🤝 Dativ verb → Dativ pronoun' },
          { de: 'sehen / lieben',  en: '🎯 Akkusativ verb → Akk pronoun' },
          { de: 'gehören / gefallen', en: '🔄 Dativ flip verb → Dativ pronoun' },
        ],
      },

      // 🤲 6 DATIV-PRONOUN fill-blanks (verbs + prepositions)
      { type: 'fill-blank', sentence: '"He helps me." → Er hilft __.',                     answer: 'mir' },
      { type: 'fill-blank', sentence: '"She gives him the book." → Sie gibt __ das Buch.', answer: 'ihm' },
      { type: 'fill-blank', sentence: '"I give her the book." → Ich gebe __ das Buch.',    answer: 'ihr' },
      { type: 'fill-blank', sentence: '"They give us a computer." → Sie geben __ einen Computer.', answer: 'uns' },
      { type: 'fill-blank', sentence: '"He comes with me." → Er kommt mit __.',            answer: 'mir' },
      { type: 'fill-blank', sentence: '"The book belongs to her." → Das Buch gehört __.',  answer: 'ihr' },

      // ⚖️ 3 AKK-vs-DAT decide-the-case fill-blanks
      { type: 'fill-blank', sentence: '"I help him." (helfen = Dativ) → Ich helfe __.',    answer: 'ihm' },
      { type: 'fill-blank', sentence: '"I see him." (sehen = Akk) → Ich sehe __.',         answer: 'ihn' },
      { type: 'fill-blank', sentence: '"I am thanking you (formal)." → Ich danke __.',     answer: 'Ihnen', hint: 'capital I — formal you' },

      // ⚠ 4 TRAP / CONTRAST MCQs
      { type: 'multiple-choice', q: 'Akk pronoun for "her" vs Dat pronoun for "her" — pick the Dativ one.',
        options: ['sie','ihr','ihn','ihnen'], answer: 'ihr',
        explain: 'Akk = sie (unchanged). Dativ = ihr.' },
      { type: 'multiple-choice', q: '⚠ "I help him." — correct Dativ:',
        options: ['Ich helfe ihn.','Ich helfe ihm.','Ich helfe er.','Ich helfe ihr.'],
        answer: 'Ich helfe ihm.', explain: 'helfen takes Dativ → ihm (ihn is Akkusativ).' },
      { type: 'multiple-choice', q: 'After "mit", the pronoun for "me" is…',
        options: ['mich','mir','ich','mein'], answer: 'mir',
        explain: 'mit is a Dativ preposition → mir.' },
      { type: 'multiple-choice', q: '"Ich gebe dir das Buch" → replace "das Buch" with a pronoun:',
        options: ['Ich gebe dir es.','Ich gebe es dir.','Ich gebe dir das.','Ich gebe ihm es.'],
        answer: 'Ich gebe es dir.',
        explain: 'When the thing is a pronoun, Akkusativ (es) comes BEFORE Dativ (dir).' },

      // 💬 Mini dialogue — Dativ pronouns after verbs + prepositions + the give-sentence
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Kannst du mir helfen?',                 en: 'Can you help me?' },
        { speaker: 'B', de: 'Klar, ich helfe dir gern.',            en: 'Sure, I\'ll gladly help you.' },
        { speaker: 'A', de: 'Gehört das Buch dir?',                  en: 'Does the book belong to you?' },
        { speaker: 'B', de: 'Nein, ich gebe es ihm zurück.',        en: 'No, I\'m giving it back to him.' },
        { speaker: 'A', de: 'Kommst du nachher mit mir ins Café?',  en: 'Are you coming with me to the café later?' },
        { speaker: 'B', de: 'Ja! Und das Café gefällt mir sehr.',   en: 'Yes! And I really like that café.' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: '"I am thanking you (formal)." → Ich danke __.', answer: 'Ihnen', hint: 'capital I — formal you' },
      { type: 'fill-blank', sentence: '"He helps me." → Er hilft __.', answer: 'mir' },
      { type: 'multiple-choice', q: 'Dativ of "er" is…',
        options: ['ihn','ihm','er','ihr'], answer: 'ihm' },
      { type: 'multiple-choice', q: '⚠ "He comes with me." — correct German:',
        options: ['Er kommt mit mich.','Er kommt mit mir.','Er kommt mit ich.','Er kommt mit mein.'],
        answer: 'Er kommt mit mir.', explain: 'mit is a Dativ preposition → mir.' },
      { type: 'fill-blank', sentence: '"I give her the book." → Ich gebe __ das Buch.', answer: 'ihr' },
      { type: 'multiple-choice', q: 'Which is the same in Akkusativ AND Dativ?',
        options: ['ich','er','uns','sie'], answer: 'uns' },
      { type: 'multiple-choice', q: '"Ich gebe dir das Buch" → with a pronoun thing:',
        options: ['Ich gebe dir es.','Ich gebe es dir.','Ich gebe dir das.','Ich gebe es dich.'],
        answer: 'Ich gebe es dir.', explain: 'Akk-pronoun (es) before Dat-pronoun (dir).' },
    ],
  },

  /* ----- Day 30: Akkusativ + Wechsel prepositions ----- */
  {
    id: 30, week: 5,
    vocabLayout: 'spotlight',
    title: 'More prepositions: Akk + Wechsel',
    titleDe: 'Mehr Präpositionen',
    emoji: '🧭',
    objective: 'Complete the preposition picture — the 4 always-Akkusativ prepositions AND the 9 two-way Wechselpräpositionen that switch case based on Wo? (Dativ) vs Wohin? (Akkusativ).',
    intro: 'Day 25 gave you the 8 always-Dativ prepositions. Today closes the loop: the always-Akkusativ ones (für · um · ohne · durch · gegen) and the trickiest group of all — the 9 Wechselpräpositionen (in, an, auf, über, unter, vor, hinter, neben, zwischen) which flip between Dativ and Akkusativ depending on ONE question: Wo? (location → Dativ) or Wohin? (movement → Akkusativ).',
    vocabulary: [
      // 🎯 ALWAYS-AKKUSATIV PREPOSITIONS
      { de: 'für',   en: 'for',              emoji: '🎁', hint: '🎯 always Akk · "für dich"',            example: 'Das Geschenk ist für dich.',     exampleEn: 'The gift is for you.' },
      { de: 'um',    en: 'at (time) / around', emoji: '🕐', hint: '🎯 always Akk · "um 8 Uhr"',          example: 'Ich esse um acht Uhr.',          exampleEn: 'I eat at eight o\'clock.' },
      { de: 'ohne',  en: 'without',          emoji: '🚫', hint: '🎯 always Akk · "ohne dich"',          example: 'Ich gehe ohne den Schlüssel.',   exampleEn: 'I go without the key.' },
      { de: 'durch', en: 'through',          emoji: '🚪', hint: '🎯 always Akk · "durch den Park"',      example: 'Wir gehen durch den Park.',      exampleEn: 'We walk through the park.' },
      { de: 'gegen', en: 'against / around (time)', emoji: '🥊', hint: '🎯 always Akk · "gegen die Wand"', example: 'Der Ball fliegt gegen die Wand.', exampleEn: 'The ball flies against the wall.' },

      // 🔀 THE 9 WECHSELPRÄPOSITIONEN — two-way (Wo?→Dat / Wohin?→Akk)
      { de: 'in',       en: 'in / into',          emoji: '📥', hint: '🔀 Wo?→Dat · Wohin?→Akk',          example: 'Ich bin in der Stadt. / Ich gehe in die Stadt.', exampleEn: 'I am in the city. / I go into the city.' },
      { de: 'an',       en: 'at / on (vertical)', emoji: '🖼️', hint: '🔀 walls, edges · Wo?→Dat / Wohin?→Akk', example: 'Das Bild hängt an der Wand. / Ich hänge es an die Wand.', exampleEn: 'The picture hangs on the wall. / I hang it on the wall.' },
      { de: 'auf',      en: 'on / onto (horizontal)', emoji: '🍽️', hint: '🔀 surfaces · Wo?→Dat / Wohin?→Akk', example: 'Das Buch ist auf dem Tisch. / Ich lege es auf den Tisch.', exampleEn: 'The book is on the table. / I put it on the table.' },
      { de: 'über',     en: 'over / above',       emoji: '🔝', hint: '🔀 Wo?→Dat / Wohin?→Akk',          example: 'Die Lampe hängt über dem Tisch.', exampleEn: 'The lamp hangs above the table.' },
      { de: 'unter',    en: 'under / below',      emoji: '🔻', hint: '🔀 Wo?→Dat / Wohin?→Akk',          example: 'Die Katze ist unter dem Tisch.',  exampleEn: 'The cat is under the table.' },
      { de: 'vor',      en: 'in front of / before', emoji: '⏮️', hint: '🔀 Wo?→Dat / Wohin?→Akk',         example: 'Ich warte vor dem Haus.',         exampleEn: 'I wait in front of the house.' },
      { de: 'hinter',   en: 'behind',             emoji: '⏭️', hint: '🔀 Wo?→Dat / Wohin?→Akk',          example: 'Der Garten ist hinter dem Haus.', exampleEn: 'The garden is behind the house.' },
      { de: 'neben',    en: 'next to / beside',   emoji: '↔️', hint: '🔀 Wo?→Dat / Wohin?→Akk',          example: 'Die Lampe steht neben dem Bett.', exampleEn: 'The lamp stands next to the bed.' },
      { de: 'zwischen', en: 'between',            emoji: '🔃', hint: '🔀 Wo?→Dat / Wohin?→Akk',          example: 'Das Auto ist zwischen den Häusern.', exampleEn: 'The car is between the houses.' },

      // 🔍 THE DECIDER QUESTIONS
      { de: 'Wo?',    en: 'Where (at)? → DATIV',   emoji: '📍', hint: '⭐ location · no movement → Dativ',  example: 'Wo bist du? — In der Stadt.',     exampleEn: 'Where are you? — In the city.' },
      { de: 'Wohin?', en: 'Where to? → AKKUSATIV', emoji: '➡️', hint: '⭐ movement / direction → Akkusativ', example: 'Wohin gehst du? — In die Stadt.', exampleEn: 'Where are you going? — Into the city.' },

      // 🔗 WECHSEL CONTRACTIONS (Akk: into · Dat: at the)
      { de: 'ins',  en: 'in + das (into the)',  emoji: '🔗', hint: '🔗 Akk · "ins Restaurant" = into the restaurant', example: 'Ich gehe ins Restaurant.',  exampleEn: 'I go into the restaurant.' },
      { de: 'ans',  en: 'an + das (to the)',    emoji: '🔗', hint: '🔗 Akk · "ans Fenster" = to the window',          example: 'Ich gehe ans Fenster.',    exampleEn: 'I go to the window.' },
      { de: 'im',   en: 'in + dem (in the)',    emoji: '🔗', hint: '🔗 Dat · "im Park" = in the park',                example: 'Ich bin im Park.',         exampleEn: 'I am in the park.' },
      { de: 'am',   en: 'an + dem (at the)',    emoji: '🔗', hint: '🔗 Dat · "am Fenster" = at the window',           example: 'Ich stehe am Fenster.',    exampleEn: 'I stand at the window.' },
    ],
    grammar: [
      { rule: '🎯 THE ALWAYS-AKKUSATIV PREPOSITIONS — memorise the block',
        body:
          'These prepositions ALWAYS take the Akkusativ — no thinking, just flip masculine to den/einen:\n\n' +
          '  für   — for          Das ist für den Mann.\n' +
          '  um    — at / around  Wir essen um acht Uhr.\n' +
          '  ohne  — without      Ich gehe ohne den Schlüssel.\n' +
          '  durch — through      Wir gehen durch den Park.\n' +
          '  gegen — against      Der Ball fliegt gegen die Wand.\n\n' +
          '🧠 Memory hook: "FUDGO" — Für · Um · Durch · Gegen · Ohne. Pair it against the Day-25 Dativ block (mit/bei/zu/von/nach/aus/seit/gegenüber) so you always know which case a preposition forces.',
      },
      { rule: '⭐ WECHSELPRÄPOSITIONEN — the Wo?/Wohin? switch',
        body:
          'Nine prepositions take EITHER case. One question decides:\n\n' +
          '  📍 Wo?    (location · NO movement)   → DATIV\n' +
          '  ➡️ Wohin? (movement · direction)      → AKKUSATIV\n\n' +
          '  Ich bin  IN DER Stadt.    (Wo? → Dativ — der)\n' +
          '  Ich gehe IN DIE Stadt.    (Wohin? → Akk — die)\n\n' +
          '  Das Bild hängt AN DER Wand.   (Wo? → Dativ)\n' +
          '  Ich hänge es AN DIE Wand.     (Wohin? → Akk)\n\n' +
          '  Das Buch ist AUF DEM Tisch.   (Wo? → Dativ)\n' +
          '  Ich lege es AUF DEN Tisch.    (Wohin? → Akk)\n\n' +
          '🧠 Trick: if the verb is a "where to / put / go" verb (gehen, legen, stellen, hängen-action), it\'s movement → Akkusativ. If it\'s a "stay / be / located" verb (sein, liegen, stehen, hängen-state), it\'s location → Dativ.',
      },
      { rule: '🔀 THE 9 WECHSEL PREPOSITIONS — the full set',
        body:
          'Learn them as one block (they\'re all about position):\n\n' +
          '  in       — in / into\n' +
          '  an       — at / on (vertical surface, edge)\n' +
          '  auf      — on / onto (horizontal surface)\n' +
          '  über     — over / above\n' +
          '  unter    — under / below\n' +
          '  vor      — in front of / before\n' +
          '  hinter   — behind\n' +
          '  neben    — next to\n' +
          '  zwischen — between\n\n' +
          '⚠ an vs auf: an = vertical contact / edges (an der Wand, am Fenster); auf = horizontal top surfaces (auf dem Tisch, auf dem Boden).',
      },
      { rule: '🔗 WECHSEL CONTRACTIONS — ins/ans (Akk) · im/am (Dat)',
        body:
          'The two-way prepositions contract with the article in BOTH cases:\n\n' +
          '  Movement (Akkusativ + das):\n' +
          '    in + das → ins    "Ich gehe ins Restaurant."\n' +
          '    an + das → ans    "Ich gehe ans Fenster."\n\n' +
          '  Location (Dativ + dem):\n' +
          '    in + dem → im     "Ich bin im Restaurant."\n' +
          '    an + dem → am     "Ich stehe am Fenster."\n\n' +
          '🧠 -s ending (ins/ans) signals MOVEMENT (Akk); -m ending (im/am) signals LOCATION (Dat). The little letter tells you the case.',
      },
      { rule: '🚦 PITFALLS — preposition-case traps',
        body:
          '• für/um/ohne/durch/gegen → ALWAYS Akkusativ (never Dativ).\n' +
          '• mit/bei/zu… → ALWAYS Dativ (Day 25) — don\'t mix the two blocks.\n' +
          '• Wechsel prepositions need the Wo?/Wohin? test EVERY time — there is no default.\n' +
          '• Movement → Akkusativ (in die Stadt); location → Dativ (in der Stadt). The verb usually tells you.\n' +
          '• ins/ans = movement (Akk); im/am = location (Dat). Don\'t say "Ich gehe im Restaurant" for "going into".\n' +
          '• an (vertical/edge) vs auf (horizontal top) — pick by the physical surface.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — prep→case group · Wo?/Wohin?→case · contraction→meaning
      { type: 'match',
        pairs: [
          { de: 'für / um / ohne / durch / gegen', en: '🎯 always Akkusativ' },
          { de: 'mit / bei / zu / von',            en: '🅿️ always Dativ (Day 25)' },
          { de: 'in / an / auf / über …',          en: '🔀 Wechsel (Wo?→Dat / Wohin?→Akk)' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'Wo? (location)',   en: '📍 → Dativ (der/dem)' },
          { de: 'Wohin? (movement)', en: '➡️ → Akkusativ (die/den)' },
          { de: 'Ich bin in der Stadt.',  en: '📍 Wo? · Dativ' },
          { de: 'Ich gehe in die Stadt.', en: '➡️ Wohin? · Akkusativ' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'ins', en: '🔗 in + das (movement → Akk)' },
          { de: 'ans', en: '🔗 an + das (movement → Akk)' },
          { de: 'im',  en: '🔗 in + dem (location → Dat)' },
          { de: 'am',  en: '🔗 an + dem (location → Dat)' },
        ],
      },

      // 🎯 3 ALWAYS-AKKUSATIV fill-blanks
      { type: 'fill-blank', sentence: 'Akk-only: Ich kaufe Kaffee für __ Freund. (the, masc.)', answer: 'den' },
      { type: 'fill-blank', sentence: 'Akk-only: Ich gehe ohne __ Schlüssel. (a, masc.)',       answer: 'einen' },
      { type: 'fill-blank', sentence: 'Akk-only: Wir gehen durch __ Park. (the, masc.)',         answer: 'den' },

      // 🔀 5 WECHSEL Wo?/Wohin? fill-blanks
      { type: 'fill-blank', sentence: 'Wechsel "wo?": Ich bin in __ Stadt. (the, fem. → Dat)',   answer: 'der' },
      { type: 'fill-blank', sentence: 'Wechsel "wohin?": Ich gehe in __ Stadt. (the, fem. → Akk)', answer: 'die' },
      { type: 'fill-blank', sentence: 'Wechsel "wo?": Das Buch ist auf __ Tisch. (the, masc. → Dat)', answer: 'dem' },
      { type: 'fill-blank', sentence: 'Wechsel "wohin?": Ich lege das Buch auf __ Tisch. (the, masc. → Akk)', answer: 'den' },
      { type: 'fill-blank', sentence: 'Wechsel "wo?": Die Katze ist unter __ Bett. (the, neut. → Dat)', answer: 'dem' },

      // 🔗 2 CONTRACTION fill-blanks
      { type: 'fill-blank', sentence: 'Movement: Ich gehe __ Restaurant. (in + das)',  answer: 'ins' },
      { type: 'fill-blank', sentence: 'Location: Ich bin __ Park. (in + dem)',          answer: 'im' },

      // ⚠ 4 CASE-DECISION / TRAP MCQs
      { type: 'multiple-choice', q: '"in / an / auf" choose the case based on…',
        options: ['Always Dativ','Always Akkusativ','The question (Wo? → Dat, Wohin? → Akk)','Whichever sounds better'],
        answer: 'The question (Wo? → Dat, Wohin? → Akk)' },
      { type: 'multiple-choice', q: 'Which preposition is NOT Akkusativ-only?',
        options: ['für','um','mit','ohne'], answer: 'mit',
        explain: '"mit" is in the always-Dativ group from Day 25.' },
      { type: 'multiple-choice', q: '⚠ "I am going INTO the city." — correct German:',
        options: ['Ich gehe in der Stadt.','Ich gehe in die Stadt.','Ich bin in die Stadt.','Ich gehe im Stadt.'],
        answer: 'Ich gehe in die Stadt.',
        explain: 'Movement (Wohin?) → Akkusativ → die Stadt.' },
      { type: 'multiple-choice', q: '⚠ "The book is ON the table." (location) — correct German:',
        options: ['Das Buch ist auf den Tisch.','Das Buch ist auf dem Tisch.','Das Buch ist auf der Tisch.','Das Buch ist auf das Tisch.'],
        answer: 'Das Buch ist auf dem Tisch.',
        explain: 'Location (Wo?) → Dativ → auf dem Tisch.' },

      // 💬 Mini dialogue — Akk-only + Wechsel both cases + contractions
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Wohin gehst du um acht Uhr?',             en: 'Where are you going at eight o\'clock?' },
        { speaker: 'B', de: 'Ich gehe ins Restaurant.',               en: 'I am going into the restaurant.' },
        { speaker: 'A', de: 'Und wo ist das Restaurant?',             en: 'And where is the restaurant?' },
        { speaker: 'B', de: 'Es ist im Zentrum, neben dem Park.',     en: 'It\'s in the centre, next to the park.' },
        { speaker: 'A', de: 'Gehst du ohne deinen Freund?',           en: 'Are you going without your friend?' },
        { speaker: 'B', de: 'Nein, ich kaufe das Essen für ihn und gehe mit ihm.', en: 'No, I\'m buying the food for him and going with him.' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: '"I work for the company." → Ich arbeite für __ Firma. (the, fem. — Akk fem = die)', answer: 'die' },
      { type: 'fill-blank', sentence: 'Wechsel "wohin?": Ich gehe in __ Stadt. (the, fem. → Akk)', answer: 'die' },
      { type: 'fill-blank', sentence: 'Wechsel "wo?": Das Bild hängt an __ Wand. (the, fem. → Dat)', answer: 'der' },
      { type: 'multiple-choice', q: 'für · um · ohne · durch · gegen all take which case?',
        options: ['Nominativ','Akkusativ','Dativ','It depends'], answer: 'Akkusativ' },
      { type: 'multiple-choice', q: 'Wechsel preposition + movement (Wohin?) →',
        options: ['Dativ','Akkusativ','Nominativ','no change'], answer: 'Akkusativ' },
      { type: 'fill-blank', sentence: 'Movement contraction: Ich gehe __ Fenster. (an + das)', answer: 'ans' },
      { type: 'multiple-choice', q: '⚠ "I am IN the restaurant." (location) =',
        options: ['Ich bin ins Restaurant.','Ich bin im Restaurant.','Ich gehe ins Restaurant.','Ich bin in den Restaurant.'],
        answer: 'Ich bin im Restaurant.', explain: 'Location (Wo?) → Dativ → im (in + dem).' },
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

/**
 * Case-system consolidation review covering Days 21-30 (Week 4 + early Week 5).
 * Not part of the `days` array — it lives on the /review/case-system route and a
 * dashboard card, so day-numbering, locking and saved progress are untouched.
 */
export const caseReview = {
  id: 'case-system',
  title: 'Case System Review — Days 21–30',
  titleDe: 'Wiederholung: Das Kasussystem',
  emoji: '🧩',
  objective: 'Consolidate everything from the case arc: Akkusativ (Days 21-24), the three-case decision (Day 27), Dativ prepositions & verbs (Days 25-26), Akk/Dat pronouns (Days 28-29) and the full preposition system incl. Wechsel (Day 30).',
  intro: 'Ten days, one system. This pulls the whole case arc together: 🟦 Nominativ → 🟩 Akkusativ → 🅿️ Dativ, plus the pronouns and the preposition groups that force each case. Read the keystones and recap cards, then take the mixed quiz that samples all of Days 21-30. Aim for ≥ 80% — that means the case system is genuinely yours.',
  vocabularyLayout: 'spotlight',
  vocabulary: [
    // ⚖️ THE THREE CASES
    { de: 'der Nominativ', en: 'subject (the DOER)',        emoji: '🟦', hint: '🔁 Day 27 · Wer? · der/die/das stay',  example: 'Der Mann schläft.',           exampleEn: 'The man sleeps.' },
    { de: 'der Akkusativ', en: 'direct object (RECEIVER)',  emoji: '🟩', hint: '🔁 Day 21-24 · Wen? · masc → den',     example: 'Ich sehe den Mann.',          exampleEn: 'I see the man.' },
    { de: 'der Dativ',     en: 'indirect object (TO whom)', emoji: '🅿️', hint: '🔁 Day 25-26 · Wem? · der→dem etc.',  example: 'Ich gebe dem Mann das Buch.', exampleEn: 'I give the man the book.' },

    // 🎭 THE ARTICLE TRANSFORMATIONS
    { de: 'der → den → dem', en: 'masc.: Nom → Akk → Dat',  emoji: '🎭', hint: '⭐ Day 21-27 · the only 3-form row',  example: 'Der Mann gibt dem Kind den Ball.', exampleEn: 'The man gives the child the ball.' },
    { de: 'die → die → der', en: 'fem.: Nom → Akk → Dat',   emoji: '🟥', hint: 'fem. only changes in Dativ → der',    example: 'Die Frau · die Frau · der Frau',   exampleEn: 'the woman (subj · obj · to her)' },
    { de: 'die → die → den', en: 'pl.: Nom → Akk → Dat (+n)', emoji: '🟨', hint: '🔁 Day 25 · plural Dativ adds -n',  example: 'die Kinder → den Kindern',         exampleEn: 'the children → to the children' },

    // 🔍 THE QUESTION TEST
    { de: 'Wer? / Wen? / Wem?', en: 'subject / object / to-whom', emoji: '🔍', hint: '🔁 Day 27 · the case-finder test', example: 'Wem gibt er das Buch? — Dem Kind.', exampleEn: 'To whom does he give the book? — The child.' },

    // 👤 THE PRONOUN PAIRS — Akk vs Dat
    { de: 'mich ↔ mir',  en: 'me: Akk ↔ Dat',   emoji: '⚖️', hint: '🔁 Day 28-29 · sehen mich / helfen mir',  example: 'Er sieht mich. / Er hilft mir.', exampleEn: 'He sees me. / He helps me.' },
    { de: 'ihn ↔ ihm',   en: 'him: Akk ↔ Dat',  emoji: '⚖️', hint: '⭐ the killer pair · ihn(Akk)/ihm(Dat)',  example: 'Ich sehe ihn. / Ich helfe ihm.', exampleEn: 'I see him. / I help him.' },
    { de: 'sie ↔ ihr',   en: 'her: Akk ↔ Dat',  emoji: '⚖️', hint: '🔁 Day 28-29 · sie(Akk)/ihr(Dat)',       example: 'Ich sehe sie. / Ich danke ihr.', exampleEn: 'I see her. / I thank her.' },

    // 🅿️ THE PREPOSITION GROUPS
    { de: 'mit · bei · zu · von · nach · aus · seit · gegenüber', en: 'the 8 always-Dativ prepositions', emoji: '🅿️', hint: '🔁 Day 25 · always Dativ', example: 'Ich fahre mit dem Bus.', exampleEn: 'I go by bus.' },
    { de: 'für · um · ohne · durch · gegen', en: 'the always-Akkusativ prepositions (FUDGO)', emoji: '🎯', hint: '🔁 Day 30 · always Akkusativ', example: 'Das ist für den Mann.', exampleEn: 'That is for the man.' },
    { de: 'in · an · auf · über · unter …', en: 'the 9 Wechsel (two-way) prepositions', emoji: '🔀', hint: '🔁 Day 30 · Wo?→Dat / Wohin?→Akk', example: 'Ich bin in der Stadt. / Ich gehe in die Stadt.', exampleEn: 'I am in the city. / I go into the city.' },

    // 🤝 THE DATIV VERBS + 🎁 THE GIVE-SENTENCE
    { de: 'helfen · danken · gehören · gefallen', en: 'the Dativ verbs', emoji: '🤝', hint: '🔁 Day 26 · take Dativ, not Akk', example: 'Ich helfe dem Mann.', exampleEn: 'I help the man.' },
    { de: 'geben / zeigen', en: 'give/show: Dat person + Akk thing', emoji: '🎁', hint: '🔁 Day 27 · Dativ before Akkusativ', example: 'Ich gebe dem Mann das Buch.', exampleEn: 'I give the man the book.' },
  ],
  grammar: [
    { rule: '⭐ THE MASTER ARTICLE GRID — all 12 + indefinite',
      body:
        '              masc.   fem.   neuter  plural\n' +
        '  Nominativ   der     die    das     die\n' +
        '  Akkusativ   den     die    das     die\n' +
        '  Dativ       dem     der    dem     den +n\n' +
        '  ─────────────────────────────────────────\n' +
        '  Indef. Nom. ein     eine   ein     —\n' +
        '  Indef. Akk. einen   eine   ein     —\n' +
        '  Indef. Dat. einem   einer  einem   —\n\n' +
        '🧠 Three shortcuts: (1) only MASCULINE changes in the Akkusativ; (2) masc. & neuter are identical in the Dativ (dem/einem); (3) plural Dativ adds -n to the noun (den Kindern).',
    },
    { rule: '🔍 THE QUESTION TEST + 🅿️ THE DECISION TREE',
      body:
        'Find any noun\'s case by asking the verb: Wer? → Nominativ · Wen? → Akkusativ · Wem? → Dativ.\n\n' +
        'Then the 5-step decision tree:\n' +
        '  1. Subject (who does it)?               → Nominativ\n' +
        '  2. Direct object (what is verbed)?       → Akkusativ\n' +
        '  3. After mit/bei/zu/von/nach/aus/seit/gegenüber? → Dativ\n' +
        '  4. After helfen/danken/gehören/gefallen/antworten/glauben? → Dativ\n' +
        '  5. None of the above?                    → default Akkusativ',
    },
    { rule: '🅿️ THE THREE PREPOSITION GROUPS',
      body:
        '  🅿️ ALWAYS DATIV (Day 25):  mit · bei · zu · von · nach · aus · seit · gegenüber\n' +
        '  🎯 ALWAYS AKKUSATIV (Day 30): für · um · ohne · durch · gegen  ("FUDGO")\n' +
        '  🔀 WECHSEL — two-way (Day 30): in · an · auf · über · unter · vor · hinter · neben · zwischen\n\n' +
        'For the Wechsel group, ONE question decides:\n' +
        '  📍 Wo? (location, no movement) → DATIV    Ich bin in der Stadt.\n' +
        '  ➡️ Wohin? (movement) → AKKUSATIV          Ich gehe in die Stadt.\n' +
        'Contractions: ins/ans signal movement (Akk); im/am signal location (Dat).',
    },
    { rule: '👤 THE PRONOUN TABLE — Akkusativ vs Dativ',
      body:
        '   Subject   Akkusativ   Dativ\n' +
        '   ich       mich        mir\n' +
        '   du        dich        dir\n' +
        '   er        ihn         ihm     ⚠ the killer pair\n' +
        '   sie(she)  sie         ihr\n' +
        '   es        es          ihm\n' +
        '   wir       uns         uns     ✅ same\n' +
        '   ihr       euch        euch    ✅ same\n' +
        '   sie(they) sie         ihnen\n' +
        '   Sie       Sie         Ihnen\n\n' +
        'The VERB or PREPOSITION decides the column. Day-26 Dativ verbs + Day-25 Dativ preps → Dativ; normal Akk verbs → Akkusativ.',
    },
    { rule: '🎁 THE GIVE-SENTENCE — Dativ + Akkusativ together',
      body:
        'geben, zeigen, schenken, schicken take a PERSON (Dativ) and a THING (Akkusativ):\n\n' +
        '  Ich gebe   dem Mann (Dat)   das Buch (Akk).\n\n' +
        'Default order: Dativ before Akkusativ. BUT when the thing becomes a pronoun, Akkusativ jumps to the front:\n' +
        '  Ich gebe dem Mann das Buch.  →  Ich gebe es dem Mann.  →  Ich gebe es ihm.',
    },
    { rule: '🎯 The 7 case mistakes to never make again',
      body:
        '1. "Ich sehe der Mann" ✗ → object → "den Mann." ✓\n' +
        '2. "Ich helfe den Mann" ✗ → helfen=Dativ → "dem Mann." ✓\n' +
        '3. "mit den Kinder" ✗ → plural Dativ +n → "mit den Kindern." ✓\n' +
        '4. "Ich helfe ihn" ✗ → Dativ pronoun → "ihm." ✓\n' +
        '5. "Das gefällt mich" ✗ → gefallen=Dativ → "mir." ✓\n' +
        '6. "Ich gehe in der Stadt" ✗ (movement) → "in die Stadt." ✓\n' +
        '7. "Ich bin ein Lehrer" — sein takes Nominativ, so this one is RIGHT (no flip). ✓',
    },
  ],
  // A comprehensive mixed quiz sampling every day from 21-30.
  quiz: [
    // Day 21-24 — Akkusativ
    { type: 'fill-blank', sentence: 'Day 21 · Akk masc.: Ich sehe __ Mann. (the)', answer: 'den' },
    { type: 'multiple-choice', q: 'Day 22 · "I eat a bread roll." (Brötchen = neuter)',
      options: ['einen Brötchen','ein Brötchen','eine Brötchen','den Brötchen'], answer: 'ein Brötchen',
      explain: 'Neuter ein stays ein — only masculine flips.' },
    { type: 'multiple-choice', q: 'Day 23 · In "Der Hund sieht den Mann", what is the Akkusativ?',
      options: ['Der Hund','sieht','den Mann','—'], answer: 'den Mann' },
    { type: 'multiple-choice', q: 'Day 24 · Which verb does NOT take an Akkusativ object?',
      options: ['kaufen','sehen','werden','brauchen'], answer: 'werden',
      explain: 'werden (to become) takes Nominativ.' },
    { type: 'fill-blank', sentence: 'Day 24 · es gibt is always Akk: Es gibt __ Supermarkt. (a, masc.)', answer: 'einen' },

    // Day 25 — Dativ prepositions
    { type: 'fill-blank', sentence: 'Day 25 · Dativ prep: Ich fahre mit __ Bus. (the, masc.)', answer: 'dem' },
    { type: 'multiple-choice', q: 'Day 25 · Plural Dativ for "die Bücher" =',
      options: ['die Bücher','der Bücher','dem Bücher','den Büchern'], answer: 'den Büchern',
      explain: 'den + noun adds -n.' },

    // Day 26 — Dativ verbs
    { type: 'multiple-choice', q: 'Day 26 · "I help him." (helfen = Dativ)',
      options: ['Ich helfe ihn.','Ich helfe ihm.','Ich helfe er.','Ich helfe ihr.'], answer: 'Ich helfe ihm.' },
    { type: 'fill-blank', sentence: 'Day 26 · The flip: "I like the city." → Die Stadt gefällt __.', answer: 'mir' },

    // Day 27 — three-case decision + give-sentence
    { type: 'fill-blank', sentence: 'Day 27 · Give-sentence: Ich gebe __ Mann das Buch. (the person, Dativ)', answer: 'dem' },
    { type: 'multiple-choice', q: 'Day 27 · Which question finds the indirect object?',
      options: ['Wer?','Wen?','Wem?','Was?'], answer: 'Wem?' },

    // Day 28 — Akkusativ pronouns
    { type: 'fill-blank', sentence: 'Day 28 · Akk pronoun: "He loves me." → Er liebt __.', answer: 'mich' },

    // Day 29 — Dativ pronouns
    { type: 'multiple-choice', q: 'Day 29 · Dativ of "er" is…',
      options: ['ihn','ihm','er','ihr'], answer: 'ihm' },

    // Day 30 — prepositions Akk + Wechsel
    { type: 'multiple-choice', q: 'Day 30 · für · um · ohne · durch · gegen all take which case?',
      options: ['Nominativ','Akkusativ','Dativ','It depends'], answer: 'Akkusativ' },
    { type: 'fill-blank', sentence: 'Day 30 · Wechsel "wohin?" (movement): Ich gehe in __ Stadt. (the, fem. → Akk)', answer: 'die' },
    { type: 'multiple-choice', q: 'Day 30 · "The book is ON the table." (location, Wo?)',
      options: ['auf den Tisch','auf dem Tisch','auf der Tisch','auf das Tisch'], answer: 'auf dem Tisch',
      explain: 'Location → Dativ → auf dem Tisch.' },
  ],
};
