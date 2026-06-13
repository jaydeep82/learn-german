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
      { de: 'ich',     en: 'I',        emoji: '🙋', hint: 'soft ch (after i / e / consonants): "ih" — like the h in "huge"', example: 'Ich bin müde.', exampleEn: 'I am tired.' },
      { de: 'nicht',   en: 'not',      emoji: '🚫', hint: 'soft ch: "niht" (h as in "huge")',  example: 'Das ist nicht schön.', exampleEn: 'That is not nice.' },
      { de: 'Milch',   en: 'milk',     emoji: '🥛', hint: 'soft ch: "milh" (h as in "huge")',  example: 'Das ist Milch.',      exampleEn: 'That is milk.' },
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
      { rule: '🔤 The four letter swaps — V · W · Z · J',
        summary: 'Four letters that sound different from English. Tap each word below to HEAR the swap.',
        table: {
          head: ['letter', 'sounds like', 'examples'],
          rows: [
            ['V', { t: 'English F', hl: true },      'Vater · Vogel · viel'],
            ['W', { t: 'soft English V', hl: true }, 'Wasser · Wein · was'],
            ['Z', { t: '"ts"', hl: true },           'Zeit · Zoo · zehn'],
            ['J', { t: 'English Y', hl: true },      'ja · Jahr · Junge'],
          ],
        },
        examples: [
          { de: 'Vater',  en: 'father', note: 'V → F' },
          { de: 'Wasser', en: 'water',  note: 'W → soft V' },
          { de: 'Zeit',   en: 'time',   note: 'Z → ts (never English Z)' },
          { de: 'ja',     en: 'yes',    note: 'J → Y (never English J)' },
        ],
      },
      { rule: '🌬️ ch / sch — the two airy sounds',
        summary: 'ch = airy throat sound · sch = plain English "sh".',
        examples: [
          { de: 'Bach',   en: 'stream',  note: 'ch — air from the throat' },
          { de: 'Schule', en: 'school',  note: 'sch = English sh' },
        ],
      },
      { rule: '🎭 Hard ch vs soft ch',
        summary: 'Same spelling, two sounds — the letter before the ch usually decides.',
        table: {
          head: ['after…', 'sound', 'examples'],
          rows: [
            ['a / o / u / au',       { t: 'HARD — back of throat, like Scottish "loch"', hl: true }, 'Bach · kochen · Buch'],
            ['e / i / ä / ö / ü / ei / eu / äu / consonants', { t: 'SOFT — front hiss near the roof of the mouth', hl: true }, 'ich · nicht · möchte · euch'],
          ],
        },
        examples: [
          { de: 'Buch', en: 'book', note: 'hard ch — after u' },
          { de: 'ich',  en: 'I',    note: 'soft ch — after i' },
        ],
        tip: 'Can\'t produce the hard ch yet? Totally normal — it sits deeper in the throat than any English sound. (One exception to file away: ch + s merges to "ks" — sechs, wachsen. Day 2 covers it.)',
      },
      { rule: '🐱 Unlocking the hard "ch"',
        summary: 'Six tricks to find the sound — try them in order:',
        bullets: [
          'Imagine a cat hissing — but deeper in the throat.',
          'A quiet "k" without closing the mouth — air flows, but no full "k".',
          'Pretend your glasses are dirty — breathe on them: "hhh…" then push it deeper.',
          'Like fogging up a mirror — long warm air, then stronger.',
          'Imagine a hair in your throat — soft clearing sound.',
          'Strong whisper — push the "h" backward.',
        ],
        examples: [
          { de: 'machen', en: 'to do / make', note: 'practise the hard ch here' },
        ],
      },
      { rule: '👄 Unlocking the "ö" — front-rounded vowel',
        summary: 'Say "e" (as in "bed"), then ROUND your lips — that\'s ö.',
        bullets: [
          'Think of English "bird" — similar, but shorter and clearer.',
          'Start with "e", then move your lips forward and round them.',
          'Tongue forward, as for "e" in "bed"; lips gently rounded (like "o", but softer).',
          'The sound sits in the front of your mouth — not deep in the throat.',
          'ö can be short (möchte) or long (schön, hören, Öl) — match the audio. Either way it is ONE clean vowel, never a glide.',
        ],
        examples: [
          { de: 'schön',  en: 'beautiful',  note: 'listen for the long ö' },
          { de: 'hören',  en: 'to hear',    note: 'one rounded ö — the -en ending is a relaxed, unrounded "uh"' },
          { de: 'möchte', en: 'would like', note: 'the politeness word — short ö in the middle' },
        ],
      },
      { rule: '🔡 Umlauts ä ö ü — typing them',
        summary: 'No umlaut keys? Type ae / oe / ue instead — always correct.',
        table: {
          head: ['umlaut', 'type as', 'example'],
          rows: [
            ['ä', { t: 'ae', hl: true }, 'Mädchen → Maedchen'],
            ['ö', { t: 'oe', hl: true }, 'schön → schoen'],
            ['ü', { t: 'ue', hl: true }, 'früh → frueh'],
          ],
        },
      },
      { rule: '🇬🇧 English loan words keep English sounds',
        summary: 'Imported words keep their English pronunciation — even inside compounds.',
        examples: [
          { de: 'Software', en: 'software', note: 'English "S" — not the German Z-sound' },
          { de: 'Computer', en: 'computer', note: 'sounds like English' },
          { de: 'Job',      en: 'job',      note: 'English-style J' },
        ],
        tip: 'In a compound like Softwareentwicklung, say the loan part as English and the rest as German.',
      },
      { rule: '🧱 Long compound words — break them up',
        summary: 'Don\'t say the whole word at once — chunk it. Stress lands on the FIRST chunk.',
        examples: [
          { de: 'Softwareentwicklung', en: 'software development', note: 'Soft·ware·ent·wick·lung' },
          { de: 'Wochenende',          en: 'weekend',              note: 'Wo·chen·en·de' },
          { de: 'Hausaufgabe',         en: 'homework',             note: 'Haus·auf·ga·be' },
          { de: 'Kühlschrank',         en: 'fridge',               note: 'Kühl·schrank — lit. "cool cupboard"' },
        ],
        tip: 'Prefixes like ver- / be- / ge- are never stressed — so Verkäufer is ver-KÄU-fer. The first-chunk stress rule is for noun+noun compounds.',
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
        q: 'Which letter combination appears ONLY in loanwords?',
        options: ['sch', 'ch', 'tsch', 'dsch'],
        answer: 'dsch',
        explain: 'sch = English "sh". ch = the air sound. tsch = English "ch" (Deutsch). dsch = English "j" — it only appears in loanwords like Dschungel (jungle).',
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
          { speaker: 'ö-text',  de: 'Die Bäckerei ist schön und ich spreche mit dem Verkäufer.', en: 'The bakery is beautiful and I speak with the salesperson.' },
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
        q: 'How many UMLAUT spellings (ä, ö, ü — including äu) appear in: „Der Verkäufer ist höflich"?',
        options: ['0', '1', '2', '3'],
        answer: '2',
        explain: 'Verkäufer (äu — the diphthong that sounds like English "oy") · höflich (ö — the pure front-rounded vowel). Two umlaut spellings, but only höflich has the true ö sound.',
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
      { de: 'zwei',   en: '2',  emoji: '✌️', hint: 'tsv-eye — Germans often say "zwo" on the phone (and in announcements) to avoid confusion with drei', example: 'Ich habe zwei Hände.', exampleEn: 'I have two hands.' },
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
      { rule: '🧱 Three building blocks for any 0-29 number',
        summary: 'Memorise 0-12, build 13-19, flip 21-29 — that\'s the whole system.',
        table: {
          head: ['range', 'rule', 'example'],
          rows: [
            ['0–12',  'unique words — just memorise',                'drei · sieben · zwölf'],
            ['13–19', { t: 'UNIT + zehn (one word)', hl: true },     'drei·zehn → dreizehn'],
            ['21–29', { t: 'UNIT + und + zwanzig (the FLIP)', hl: true }, 'ein·und·zwanzig'],
          ],
        },
        examples: [
          { de: 'dreizehn',       en: '13', note: 'drei + zehn — one word' },
          { de: 'einundzwanzig',  en: '21', note: 'the flip: one-and-twenty' },
        ],
        warn: '21 drops the -s of "eins": ein-und-zwanzig, never eins-und-zwanzig.',
      },
      { rule: '🎯 Pronunciation traps in numbers',
        summary: 'Four little traps — tap each word to hear it right.',
        table: {
          head: ['number', 'form', 'what happens'],
          rows: [
            ['16', { t: 'sechzehn', hl: true },        'drops the -s of sechs'],
            ['26', 'sechsundzwanzig',                  'keeps the FULL sechs'],
            ['17', { t: 'siebzehn', hl: true },        'drops the -en of sieben'],
            ['27', 'siebenundzwanzig',                 'keeps the FULL sieben'],
          ],
        },
        examples: [
          { de: 'sechs',    en: '6',  note: 'chs = "ks" → "zeks", not "zekh-s"' },
          { de: 'sechzehn', en: '16', note: 'sech-zehn — the s is gone' },
          { de: 'siebzehn', en: '17', note: 'sieb-zehn — the -en is gone' },
          { de: 'zehn',     en: '10', note: 'silent h lengthens the e: "tsayn"' },
        ],
        tip: '-ig endings: zwanzig = "TSVAN-tsikh" (soft ich-sound) in standard/northern German, "TSVAN-tsik" (hard k) in the south. Both are understood everywhere.',
      },
      { rule: '🗓️ Where you\'ll use these every day',
        summary: 'Age, phone numbers — and soon prices and time.',
        examples: [
          { de: 'Ich bin fünfundzwanzig Jahre alt.', en: 'I am 25 years old.',            note: 'age — the most common use' },
          { de: 'null eins fünf eins',               en: '0151 (phone prefix)',            note: 'phone numbers are read digit by digit' },
        ],
        tip: 'Prices and clock times build on these — they arrive on Days 18-19.',
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
        explain: 'In German, "chs" inside a word root merges to [ks]. Sechs, wachsen, Fuchs all use this rule. (Watch out: when the s is an ending — du machst, nächste — the ch keeps its own sound.)',
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
    intro: 'German has more pronouns than English: THREE ways to say "you" (du for one friend, ihr for a group, formal Sie), and the same word "sie" means three different things (she / they / formal you) — the verb form and context tell them apart. Master these eight today and every sentence in the rest of Week 1 falls into place.',
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
      { rule: '👥 The 6 grammatical persons',
        summary: 'Three singular + three plural — every verb conjugates across all six.',
        table: {
          head: ['person', 'pronoun', 'English'],
          rows: [
            ['1st singular', 'ich',        'I'],
            ['2nd singular', 'du',         'you (one friend)'],
            ['3rd singular', 'er/sie/es',  'he / she / it'],
            ['1st plural',   'wir',        'we'],
            ['2nd plural',   'ihr',        'you all (group of friends)'],
            ['3rd plural',   'sie',        'they'],
            ['formal',       { t: 'Sie', hl: true }, 'you (always capital — same verb form as "they")'],
          ],
        },
      },
      { rule: '⚠ The three "sies" — verb + context decode them',
        summary: 'The verb splits "she" from the two plurals; context splits "they" from formal "you" (capital S marks it in writing).',
        table: {
          head: ['you hear/read…', 'cue', 'meaning'],
          rows: [
            ['sie ist …',   'singular verb', { t: 'she', hl: true }],
            ['sie sind …',  'plural verb',   { t: 'they', hl: true }],
            ['Sie sind …',  'plural verb — you are being addressed (capital S in writing)', { t: 'you (formal)', hl: true }],
          ],
        },
        examples: [
          { de: 'Sie ist Lehrerin.',        en: 'She is a teacher.',          note: 'ist (singular) → she' },
          { de: 'Sie sind Kollegen.',       en: 'They are colleagues.',       note: 'sind (plural) → they — or formal you; context decides' },
          { de: 'Haben Sie einen Termin?',  en: 'Do you have an appointment?', note: 'plural verb + addressing someone → formal you' },
        ],
        tip: 'Mid-sentence, a capital S reliably marks formal you (Wie heißen Sie?). At the START of a sentence every word is capitalised — there, rely on the verb (ist = she) and context.',
      },
      { rule: '🤝 du vs Sie — choosing the register',
        summary: 'du = close & casual · Sie = distant & formal.',
        bullets: [
          'du — family, close friends, children, animals, between students and young colleagues, most social media.',
          'Sie — strangers, customer service, doctors, professors (until invited otherwise), formal business.',
        ],
        tip: 'Switching from Sie to du is a small ceremony — let the older or more senior person offer it first: "Wir können uns duzen."',
      },
      { rule: '🪪 er / sie / es match the noun\'s ARTICLE — not its meaning',
        summary: 'Read the article, not real life: der → er · die → sie · das → es · plural → sie.',
        examples: [
          { de: 'Der Laptop ist neu. → Er ist neu.',     en: 'The laptop is new. → It is new.',   note: 'der → er' },
          { de: 'Die Tasche ist groß. → Sie ist groß.',  en: 'The bag is big. → It is big.',      note: 'die → sie' },
          { de: 'Das Mädchen ist nett. → Es ist nett.',  en: 'The girl is nice. → She is nice.',  note: '⚠ das Mädchen → es — the article wins!' },
          { de: 'Die Bücher sind alt. → Sie sind alt.',  en: 'The books are old. → They are old.', note: 'plural → sie' },
        ],
        warn: 'das Mädchen (the girl) takes es because -chen makes every noun neuter — the German article beats real-life logic.',
      },
      { rule: '🔠 Capitalised Sie',
        summary: 'Formal Sie — and its Ihr / Ihnen — keep the capital everywhere.',
        examples: [
          { de: 'Wie heißen Sie?',          en: 'What is your name? (formal)', note: 'capital S mid-sentence = formal you' },
          { de: 'Können Sie mir helfen?',   en: 'Can you help me? (formal)',   note: 'your reliable formality cue' },
        ],
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
      { type: 'fill-blank', sentence: '____ sind Lehrerin. (formal you)', answer: 'Sie' },
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
      { rule: '🗂️ The four article slots',
        summary: 'Every noun picks ONE article from each row, by gender.',
        table: {
          head: ['', 'masc.', 'fem.', 'neut.', 'plural'],
          rows: [
            ['the (definite)', 'der', 'die', 'das', 'die'],
            ['a (indefinite)', 'ein', 'eine', 'ein', '—'],
          ],
        },
        tip: 'In the dative & accusative cases these forms change — that\'s Week 4. Today, just learn the four basic slots.',
      },
      { rule: 'Iron rule — learn the article WITH the noun',
        body:
          'Memorise "der Tisch", not "Tisch". Memorise "die Tasche", not "Tasche".\n' +
          'In flashcards, write the article in the SAME COLOUR as the noun — they belong together.\n' +
          'When you guess the article wrong, fix the WHOLE pair in your mind, not just the article.',
      },
      { rule: '🔁 Article → pronoun map',
        body:
          'Replace any noun with its pronoun by reading the article:\n' +
          '• der → er  ·  die → sie  ·  das → es  ·  die (pl) → sie',
        examples: [
          { de: 'Der Laptop ist neu. → Er ist neu.',   en: 'The laptop is new. → It is new.',   note: 'der → er' },
          { de: 'Die Tasche ist groß. → Sie ist groß.', en: 'The bag is big. → It is big.',      note: 'die → sie' },
          { de: 'Das Buch ist gut. → Es ist gut.',     en: 'The book is good. → It is good.',    note: 'das → es' },
          { de: 'Die Bücher sind neu. → Sie sind neu.', en: 'The books are new. → They are new.', note: 'die (pl) → sie' },
        ],
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
      { rule: '⚠ Trust the article, not real-life logic',
        body:
          'When the German word\'s gender disagrees with English logic, the GERMAN gender wins for grammar.',
        examples: [
          { de: 'das Mädchen', en: 'the girl',   note: 'NEUTER — the -chen suffix forces das, even though a girl is female in life' },
          { de: 'die Person',  en: 'the person', note: 'FEMININE — any person, any gender, is die Person' },
        ],
      },
      { rule: '🔢 Plurals collapse to "die"',
        body:
          'No matter the singular gender, every plural noun uses "die" + a plural pronoun "sie".',
        examples: [
          { de: 'der Tisch → die Tische',  en: 'the table → the tables',  note: 'masc → die' },
          { de: 'die Tasche → die Taschen', en: 'the bag → the bags',     note: 'fem → die' },
          { de: 'das Buch → die Bücher',   en: 'the book → the books',    note: 'neuter → die' },
        ],
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
      { rule: '🟦 sein — full conjugation table',
        summary: 'sein is fully irregular — none of the forms look like the infinitive, so memorise all six.',
        table: {
          head: ['person', 'form', 'English'],
          rows: [
            ['ich',        { t: 'bin',  hl: true }, 'I am'],
            ['du',         { t: 'bist', hl: true }, 'you are (1 friend)'],
            ['er/sie/es',  { t: 'ist',  hl: true }, 'he / she / it is'],
            ['wir',        { t: 'sind', hl: true }, 'we are'],
            ['ihr',        { t: 'seid', hl: true }, 'you all are'],
            ['sie / Sie',  { t: 'sind', hl: true }, 'they / formal you are'],
          ],
        },
      },
      { rule: '🧩 Three patterns you can already build',
        summary: 'sein links the subject to a state, a profession, or a place/origin.',
        examples: [
          { de: 'Ich bin müde.',                en: 'I am tired.',              note: 'STATE / FEELING: subject + sein + adjective' },
          { de: 'Ich bin Lehrer.',              en: 'I am a teacher.',          note: 'PROFESSION: no article!' },
          { de: 'Ich bin aus Indien.',          en: 'I am from India.',         note: 'ORIGIN: sein + aus + country' },
          { de: 'Wir sind in Berlin.',          en: 'We are in Berlin.',        note: 'PLACE: sein + in + city' },
        ],
      },
      { rule: '📍 Verb in slot 2',
        summary: 'In a main sentence the conjugated verb ALWAYS sits in position 2.',
        examples: [
          { de: 'Ich bin müde.',       en: 'I am tired.',          note: 'subject (1) + verb (2) + rest' },
          { de: 'Heute bin ich müde.', en: 'Today I am tired.',    note: 'time (1) + verb (2) → subject moves to slot 3' },
        ],
      },
      { rule: '⚠ sein vs haben for body states',
        summary: 'English "to be" for hunger/thirst/fear becomes haben in German.',
        examples: [
          { de: 'Ich habe Hunger.',  en: 'I am hungry. (lit. I have hunger)', note: 'haben, NOT sein — Day 6' },
          { de: 'Ich bin müde.',     en: 'I am tired.',                        note: 'but tired / sick / happy / ready keep sein' },
        ],
        warn: 'Don\'t say "Ich bin Hunger" — hunger/thirst/fear use haben: "Ich habe Hunger / Durst / Angst".',
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
      { rule: '🟩 haben — full conjugation table',
        summary: 'du and er/sie/es DROP the "b": du HAST (not habst), er HAT (not habt).',
        table: {
          head: ['person', 'form', 'English'],
          rows: [
            ['ich',       'habe',                 'I have'],
            ['du',        { t: 'hast', hl: true }, 'you have (1 friend)'],
            ['er/sie/es', { t: 'hat',  hl: true }, 'he / she / it has'],
            ['wir',       'haben',                'we have'],
            ['ihr',       { t: 'habt', hl: true }, 'you all have'],
            ['sie / Sie', 'haben',                'they / formal you have'],
          ],
        },
        tip: 'Whisper "ha-st, ha-t, ha-ben" three times — the dropped b sticks.',
      },
      { rule: '⚠ haben (not sein!) for body states',
        summary: 'English "I am hungry/thirsty/afraid" → German uses haben + a noun you POSSESS.',
        examples: [
          { de: 'Ich habe Hunger.', en: 'I am hungry.',  note: '✓ habe Hunger — NOT "bin Hunger"' },
          { de: 'Ich habe Durst.',  en: 'I am thirsty.', note: '✓ habe Durst' },
          { de: 'Ich habe Angst.',  en: 'I am afraid.',  note: '✓ habe Angst' },
        ],
        warn: 'Hunger / Durst / Angst are nouns you HAVE. You can say "Ich bin hungrig/durstig" (sein + adjective), but the haben-noun version is far more natural.',
      },
      { rule: '🧩 Common haben patterns',
        summary: 'Possession, abstract nouns, and questions.',
        examples: [
          { de: 'Ich habe ein Buch.',          en: 'I have a book.',                 note: 'POSSESSION: haben + ein/einen/eine + noun' },
          { de: 'Wir haben Zeit.',             en: 'We have time.',                  note: 'ABSTRACT: often a bare noun, no article' },
          { de: 'Hast du Zeit am Wochenende?', en: 'Do you have time at the weekend?', note: 'QUESTION: verb first (Hast du …? / Haben Sie …?)' },
        ],
      },
      {
        rule: '⚠ The three "sies" — don\'t panic',
        summary: 'Three words spelled sie/Sie — the verb form tells you which.',
        table: {
          head: ['form', 'meaning', 'example'],
          rows: [
            ['sie + hat/ist',      'she (singular)',      'Sie hat Zeit.'],
            ['sie + haben/sind',   'they (plural)',       'Sie haben Zeit.'],
            ['Sie + haben/sind',   'you (formal, capital S)', 'Haben Sie Zeit?'],
          ],
        },
        tip: 'Singular ending (hat/ist) → "she". Plural ending (haben/sind) → "they" or formal "you" — context decides.',
      },
      {
        rule: '🗺️ Quick pronoun map',
        summary: 'The six persons at a glance.',
        bullets: [
          'ich = I · du = you (1 friend) · er = he · sie = she · es = it',
          'wir = we · ihr = you all · sie = they · Sie = you (formal)',
        ],
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
      { rule: '🟨 werden — full conjugation (vowel changes in singular)',
        summary: 'e → i ONLY in the singular du/er/sie/es. Plural goes back to e.',
        table: {
          head: ['person', 'form', 'English'],
          rows: [
            ['ich',       'werde',                 'I become'],
            ['du',        { t: 'wirst', hl: true }, 'you become  (e → i)'],
            ['er/sie/es', { t: 'wird',  hl: true }, 'he/she/it becomes  (e → i)'],
            ['wir',       'werden',                'we become'],
            ['ihr',       'werdet',                'you all become'],
            ['sie / Sie', 'werden',                'they / formal you become'],
          ],
        },
      },
      { rule: '🔄 What werden actually means at A1',
        summary: 'Three jobs: change of state, profession-in-training, and (later) the future.',
        examples: [
          { de: 'Es wird kalt.',          en: 'It is getting cold.',     note: 'CHANGE OF STATE — the everyday use today' },
          { de: 'Ich werde Arzt.',        en: 'I am becoming a doctor.', note: 'PROFESSION you train towards (no article)' },
          { de: 'Ich werde morgen lernen.', en: 'I will study tomorrow.', note: 'FUTURE (preview, Day 45) — but "Morgen lerne ich" is more natural in speech' },
        ],
      },
      { rule: '⚖️ sein vs werden — STATE vs BECOMING',
        summary: 'sein = a state right now · werden = changing towards a state.',
        examples: [
          { de: 'Es ist kalt.',   en: 'It is cold (now).',       note: 'sein — current state' },
          { de: 'Es wird kalt.',  en: 'It is getting cold.',     note: 'werden — change towards' },
          { de: 'Ich bin müde.',  en: 'I am tired.',             note: 'sein' },
          { de: 'Ich werde müde.', en: 'I am getting tired.',    note: 'werden — was fresh five minutes ago' },
        ],
      },
      { rule: '⭐ Iron rule 1 — the conjugated verb sits in position 2',
        summary: 'Even if time/place/object leads, the verb stays in slot 2.',
        examples: [
          { de: 'Ich werde müde.',       en: 'I am getting tired.',  note: 'slot 1 = ich, slot 2 = werde' },
          { de: 'Heute werde ich müde.', en: 'Today I am getting tired.', note: 'time leads → subject moves to slot 3' },
        ],
        warn: 'NEVER "Heute ich werde müde" — that puts the verb in slot 3 and is wrong.',
      },
      { rule: '⭐ Iron rule 2 — every noun starts with a capital letter',
        summary: 'Every noun, anywhere in the sentence, is capitalised.',
        examples: [
          { de: 'Ich habe Hunger.',        en: 'I am hungry.',           note: 'Hunger capitalised' },
          { de: 'Heute werde ich Lehrer.', en: 'Today I become a teacher.', note: 'Lehrer capitalised' },
          { de: 'Wir kaufen das Buch.',    en: 'We are buying the book.', note: 'Buch capitalised' },
        ],
      },
      { rule: '🏁 Week 1 recap — three aux verbs side by side',
        summary: 'sein = state + identity · haben = possession + body needs · werden = becoming + future.',
        table: {
          head: ['person', 'sein', 'haben', 'werden'],
          rows: [
            ['ich',       'bin',  'habe',  'werde'],
            ['du',        'bist', 'hast',  'wirst'],
            ['er/sie/es', 'ist',  'hat',   'wird'],
            ['wir',       'sind', 'haben', 'werden'],
            ['ihr',       'seid', 'habt',  'werdet'],
            ['sie / Sie', 'sind', 'haben', 'werden'],
          ],
        },
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
      { rule: '🎯 Three spelling oddities you must memorise',
        summary: 'Three tens break the normal pattern — but the unit side stays full.',
        table: {
          head: ['number', 'spelling', 'why it\'s odd'],
          rows: [
            ['30', { t: 'dreißig', hl: true }, 'ß instead of -zig (not "dreizig")'],
            ['60', { t: 'sechzig', hl: true }, 'sechs LOSES its -s'],
            ['70', { t: 'siebzig', hl: true }, 'sieben LOSES its -en'],
          ],
        },
        examples: [
          { de: 'sechsundsechzig', en: '66', note: 'full sechs on the unit side, dropped-s sechzig on the tens side' },
          { de: 'siebenundsiebzig', en: '77', note: 'full sieben on the unit side, dropped-en siebzig' },
        ],
      },
      { rule: '🔄 The flip rule keeps working — units before tens',
        summary: 'Every two-digit number 21-99: UNIT + und + tens, written as ONE word.',
        examples: [
          { de: 'einunddreißig', en: '31', note: 'no -s of eins' },
          { de: 'zweiundvierzig', en: '42', note: 'two-and-forty' },
          { de: 'siebenundsechzig', en: '67', note: 'seven-and-sixty' },
          { de: 'neunundneunzig', en: '99', note: 'nine-and-ninety' },
        ],
        tip: 'It feels backwards because English reads tens first ("sixty-seven"); German reads units first ("seven-and-sixty"). Your brain re-wires after about 50 reps.',
      },
      { rule: '🔊 -ig endings sound like soft ich',
        summary: 'Final -ig = the soft ch in "ich" ("ikh") in standard German.',
        examples: [
          { de: 'zwanzig', en: '20', note: '"TSVAN-tsikh"' },
          { de: 'fünfzig', en: '50', note: '"FUENF-tsikh"' },
          { de: 'hungrig', en: 'hungry', note: '"HOON-grikh"' },
        ],
        tip: 'In the south (and Austria/Switzerland) it\'s often a hard "k" ("TSVAN-tsik"). Both are understood; the soft ich-sound is the codified A1 standard.',
      },
      { rule: '💯 hundert: with or without "ein"',
        summary: '100 = hundert OR einhundert — both correct.',
        examples: [
          { de: 'einhundert', en: '100', note: 'the safer form on the phone (harder to mishear)' },
          { de: 'einhundertfünfundzwanzig', en: '125', note: 'hundert + the flipped 2-digit suffix' },
          { de: 'dreihundertfünfundsechzig', en: '365', note: 'three-hundred + five-and-sixty' },
        ],
        tip: 'These bigger 3-digit numbers come back on Day 18 (Numbers 100-1000).',
      },
      { rule: '🗓️ Where you\'ll use these every day',
        summary: 'Age, years, prices and phone numbers.',
        examples: [
          { de: 'Ich bin fünfunddreißig Jahre alt.', en: 'I am 35 years old.', note: 'age — the most common use' },
          { de: 'neunzehnhunderteinundneunzig', en: '1991 (birth year)', note: 'years up to 1999 read as "nineteen-hundred + flip", no und between hundred and the rest' },
          { de: 'sechzig Euro', en: '60 euros', note: 'prices — full pattern on Day 19' },
        ],
        tip: 'Phone numbers: speak each digit or each pair. "0151" → "null eins fünf eins".',
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
      { rule: '🎨 The three sentence roles',
        summary: 'Subject does it · Verb is the action · Object receives it.',
        table: {
          head: ['role', 'job', 'in "Der Student schreibt den Satz"'],
          rows: [
            ['🟦 Subject', 'who/what does the action', 'der Student'],
            ['🟧 Verb',    'the action, matched to the subject', 'schreibt'],
            ['🟩 Object',  'who/what receives it', 'den Satz'],
          ],
        },
        examples: [
          { de: 'Der Student schreibt den Satz.', en: 'The student writes the sentence.', note: '🟦 subject · 🟧 verb · 🟩 object' },
        ],
      },
      { rule: '⭐ The two-question test — find S and O in 5 seconds',
        summary: 'Wer/Was [verb]? → subject. Wen/Was [verb] der Subjekt? → object.',
        examples: [
          { de: 'Der Lehrer erklärt das Wort.', en: 'The teacher explains the word.', note: 'Wer erklärt? → der Lehrer (subject). Was erklärt er? → das Wort (object).' },
        ],
        tip: 'Step 1: find the verb. Step 2: "Wer/Was?" finds the subject. Step 3: "Wen/Was?" finds the object.',
      },
      { rule: '⭐ The verb is GLUED to slot 2',
        summary: 'Whatever leads the sentence, the conjugated verb stays in position 2 (the V2 rule).',
        table: {
          head: ['slot 1', 'slot 2 (verb)', 'slot 3+'],
          rows: [
            ['Ich',       { t: 'lerne', hl: true }, 'Deutsch.'],
            ['Heute',     { t: 'lerne', hl: true }, 'ich Deutsch.'],
            ['In Berlin', { t: 'lernt', hl: true }, 'er Deutsch.'],
            ['Deutsch',   { t: 'lerne', hl: true }, 'ich heute.'],
          ],
        },
        tip: 'When time/place/object leads, the subject moves to slot 3 — but the verb never leaves slot 2. This is the single most important word-order law in German.',
      },
      { rule: '🔵 Not every sentence has an object',
        summary: 'Some verbs need no receiver — just subject + verb (+ maybe an adjective or time).',
        examples: [
          { de: 'Ich bin müde.',      en: 'I am tired.',        note: '🟦 ich · 🟧 bin · adjective — no object' },
          { de: 'Wir arbeiten heute.', en: 'We work today.',    note: '🟦 wir · 🟧 arbeiten · time — no object' },
        ],
        tip: 'The Wer/Was test still finds the subject; there\'s simply no Wen/Was answer.',
      },
      { rule: '🚦 Common pitfalls',
        summary: 'The classic V2 and double-time mistakes.',
        examples: [
          { de: 'Heute lerne ich Deutsch.', en: 'Today I learn German.', note: '✓ verb slot 2 (NOT "Heute ich lerne")' },
          { de: 'Ich lerne heute Deutsch und arbeite viel.', en: 'I learn German today and work a lot.', note: '✓ shared subject → drop the second "ich"' },
        ],
        warn: 'NEVER "Heute ich lerne Deutsch" — that puts the verb in slot 3 and is wrong.',
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
        summary: 'Infinitive → drop -en → read the pronoun → glue on the ending.',
        bullets: [
          '1️⃣  Start with the infinitive: machen',
          '2️⃣  Drop the final -en (sometimes just -n): mach-',
          '3️⃣  Look at the subject pronoun: ich',
          '4️⃣  Glue on the matching ending: mache',
        ],
        tip: 'That\'s it — the same recipe works for hundreds of verbs.',
      },
      { rule: '📋 The 6 endings cheat-sheet',
        summary: 'Learn these six endings once and every regular verb conjugates itself.',
        table: {
          head: ['pronoun', 'ending', 'machen →'],
          rows: [
            ['ich',       { t: '-e', hl: true },  'mache'],
            ['du',        { t: '-st', hl: true }, 'machst'],
            ['er/sie/es', { t: '-t', hl: true },  'macht'],
            ['wir',       { t: '-en', hl: true }, 'machen'],
            ['ihr',       { t: '-t', hl: true },  'macht'],
            ['sie / Sie', { t: '-en', hl: true }, 'machen'],
          ],
        },
        tip: 'wir = the infinitive (machen). ihr = the er-form (macht). Two freebies.',
      },
      { rule: '⚠ Stem ends in -t or -d? Sneak in an extra e',
        summary: 'arbeiten / finden insert an -e- before -st and -t so the cluster is sayable.',
        examples: [
          { de: 'du arbeitest', en: 'you work', note: 'arbeit + e + st (NOT arbeitst)' },
          { de: 'er arbeitet',  en: 'he works', note: 'arbeit + e + t (NOT arbeitt)' },
          { de: 'er findet',    en: 'he finds', note: 'find + e + t — same -d rule' },
        ],
        tip: 'The wir / sie / ich forms don\'t need it: arbeite, arbeiten.',
      },
      { rule: '⭐ Where the conjugated verb sits — same V2 rule',
        summary: 'Whatever verb you build, it lands in slot 2 of a main sentence.',
        examples: [
          { de: 'Ich lerne Deutsch.',     en: 'I learn German.',       note: 'subject + verb' },
          { de: 'Heute lerne ich Deutsch.', en: 'Today I learn German.', note: 'time leads → subject to slot 3' },
          { de: 'In Berlin wohnen wir.',  en: 'We live in Berlin.',    note: 'place leads → subject to slot 3' },
        ],
      },
      { rule: '🔮 Regular vs irregular — a quick preview',
        summary: 'Most verbs are regular; a small irregular group needs memorising.',
        bullets: [
          'sein / haben / werden — drilled on Days 5-7. Memorise the tables.',
          'Stem-changers — look regular EXCEPT du and er/sie/es, where the vowel shifts (essen → du isst, sehen → er sieht). You meet these tomorrow, Day 11.',
        ],
        tip: 'Until tomorrow, assume any new verb is regular — you\'ll be right ~80% of the time.',
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
      { rule: '⭐ The stem-change patterns',
        summary: 'Three main vowel swaps (e→i, e→ie, a→ä) cover ~90%, plus one au→äu verb.',
        table: {
          head: ['pattern', 'example', 'others'],
          rows: [
            ['🔁 e → i',  { t: 'essen → du isst', hl: true },   'sprechen · nehmen · geben · helfen'],
            ['🔁 e → ie', { t: 'sehen → er sieht', hl: true },  'lesen'],
            ['🔁 a → ä',  { t: 'fahren → du fährst', hl: true }, 'schlafen · tragen'],
            ['🔁 au → äu', { t: 'laufen → er läuft', hl: true },  'the one au-verb — NOT a→ä'],
          ],
        },
        examples: [
          { de: 'Du isst Pizza.',       en: 'You eat pizza.',      note: 'e → i' },
          { de: 'Er sieht ein Bild.',   en: 'He sees a picture.',  note: 'e → ie' },
          { de: 'Sie fährt nach Berlin.', en: 'She drives to Berlin.', note: 'a → ä' },
        ],
        tip: 'You can\'t predict the pattern from the infinitive — memorise it with the verb. But once known, it\'s rock-solid.',
      },
      { rule: '⭐ The change happens in TWO forms only',
        summary: 'Only du and er/sie/es switch the vowel; the other four stay regular.',
        table: {
          head: ['pronoun', 'essen', 'change?'],
          rows: [
            ['ich',       'esse',                 '✓ no change'],
            ['du',        { t: 'isst', hl: true }, '🔁 e → i'],
            ['er/sie/es', { t: 'isst', hl: true }, '🔁 e → i'],
            ['wir',       'essen',                '✓ no change'],
            ['ihr',       'esst',                 '✓ no change'],
            ['sie / Sie', 'essen',                '✓ no change'],
          ],
        },
        warn: 'So "ich isse" or "wir issen" is wrong — only du / er-sie-es flip the vowel.',
      },
      { rule: '⚠ Two extra-quirk verbs',
        summary: 'nehmen and lesen add a spelling twist on top of the vowel change.',
        examples: [
          { de: 'du nimmst', en: 'you take', note: 'nehmen: e→i AND the consonant doubles — the h disappears' },
          { de: 'du liest',  en: 'you read', note: 'lesen: stem ends in -s, so s + st merges to just -st (not "liesst")' },
        ],
      },
      { rule: '📍 Same V2 word-order rule',
        summary: 'Stem-changers still obey slot 2.',
        examples: [
          { de: 'Heute isst er Pizza.',         en: 'Today he eats pizza.',         note: 'time leads → verb still slot 2' },
          { de: 'Am Morgen fährt sie nach Berlin.', en: 'In the morning she drives to Berlin.', note: 'verb in slot 2' },
        ],
      },
      { rule: '🔎 How to spot one — the honest answer',
        summary: 'You can\'t tell from the infinitive — so learn the du-form alongside every new verb.',
        tip: 'If the du-form breaks the regular pattern, flag the verb as a stem-changer in your flashcards. Most are everyday verbs (eat, sleep, drive, see, speak) — by Day 20 you\'ll know them all.',
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
    intro: 'You can already build S-V-O sentences. Today you add three more "spice" words: 🕒 WHEN (heute, morgen, jeden Tag), 🔄 HOW OFTEN (oft, manchmal, immer, nie) and ❤️ HOW MUCH YOU LIKE IT (gerne, sehr gerne). They go in a fixed order: 🕒 → 🔄 → ❤️ → 🎯 object. So "In my free time I often like to listen to music" becomes: "Ich höre in meiner Freizeit oft gerne Musik." Memorise the chain TFP-O — it unlocks every hobby sentence, every routine, every weekend plan.',
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
        summary: 'Subject + Verb + 🕒 Time + 🔄 Frequency + ❤️ Preference + 🎯 Object.',
        table: {
          head: ['subject', 'verb', '🕒 time', '🔄 freq', '❤️ pref', '🎯 object'],
          rows: [
            ['Ich', 'höre',    'in meiner Freizeit', 'oft',   'gerne',      'Musik.'],
            ['Wir', 'spielen', 'am Wochenende',   'manchmal', 'gerne',      'Fußball.'],
            ['Du',  'liest',   'nach der Arbeit', 'immer',    'sehr gerne', 'Bücher.'],
          ],
        },
        examples: [
          { de: 'Ich höre in meiner Freizeit oft gerne Musik.', en: 'In my free time I often like to listen to music.', note: 'all four slots filled, in order' },
        ],
        tip: 'Not every slot must be filled — drop what you don\'t need. But when two or three appear together, this is the order.',
      },
      { rule: '⚠ V2 still wins — if 🕒 time leads, the subject moves',
        summary: 'Put a time word in slot 1 and the verb stays slot 2 → subject jumps to slot 3.',
        examples: [
          { de: 'Heute höre ich Musik.',           en: 'Today I listen to music.',         note: 'time leads → ich after the verb' },
          { de: 'Am Wochenende spielen wir Fußball.', en: 'At the weekend we play football.', note: 'verb still slot 2' },
        ],
        tip: 'Same V2 rule from Day 9 — it never sleeps.',
      },
      { rule: '🔄 The frequency scale — picture it',
        summary: 'From always (100%) to never (0%), the frequency word sits between time and preference.',
        table: {
          head: ['%', 'word', 'English'],
          rows: [
            ['100%', { t: 'immer', hl: true },    'always'],
            ['~80%', { t: 'oft', hl: true },      'often'],
            ['~40%', { t: 'manchmal', hl: true }, 'sometimes'],
            ['~10%', { t: 'selten', hl: true },   'rarely'],
            ['0%',   { t: 'nie', hl: true },      'never'],
          ],
        },
        examples: [
          { de: 'Manchmal höre ich Musik.', en: 'Sometimes I listen to music.', note: 'frequency in slot 1 → subject moves (V2)' },
        ],
      },
      { rule: '❤️ "gerne" — the most-loved A1 word',
        summary: 'gerne (or "gern") = enjoyment. It sits BEFORE the object.',
        examples: [
          { de: 'Ich trinke gerne Kaffee.',  en: 'I like drinking coffee.',   note: 'gerne before the object' },
          { de: 'Du liest sehr gerne Bücher.', en: 'You really like reading books.', note: 'sehr gerne = really like' },
          { de: 'Am liebsten esse ich Pizza.', en: 'Most of all I eat pizza.', note: 'am liebsten = most of all (the top of the scale)' },
        ],
        warn: 'gerne normally comes BEFORE the object — "Ich trinke gerne Kaffee" is the natural default. ("Ich trinke Kaffee gern" is also correct, just less neutral.) Escalation: gerne → sehr gerne → am liebsten.',
      },
      { rule: '🔮 TeKaMoLo — the full grown-up rule (preview)',
        summary: 'When place joins too, the order is Te-Ka-Mo-Lo.',
        bullets: [
          'Te = TEmporal (when) · Ka = KAusal (why) · Mo = MOdal (how/preference) · Lo = LOkal (where)',
          'Example: "Ich fahre heute / wegen der Arbeit / mit dem Bus / nach Berlin."',
        ],
        tip: 'For Week 2 you only need TFP-O. Full TeKaMoLo arrives once you have prepositions of place.',
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
        sentence: '🛠 Ich + hören + 🕒 in meiner Freizeit + 🔄 oft + ❤️ gerne + 🎯 Musik → __',
        answer: 'Ich höre in meiner Freizeit oft gerne Musik' },
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
          'Ich höre in meiner Freizeit oft gerne Musik.',
          'Ich höre Musik in meiner Freizeit oft gerne.',
          'Heute höre ich Musik.',
          'Wir spielen am Wochenende Fußball.',
        ],
        answer: 'Ich höre Musik in meiner Freizeit oft gerne.',
        explain: 'The 🎯 object goes LAST. Time / frequency / preference all come BEFORE the object.',
      },
      {
        type: 'multiple-choice',
        q: '⚠ Which sentence is WRONG?',
        options: [
          'Ich trinke gerne Kaffee.',
          'Ich gerne trinke Kaffee.',
          'Wir essen am Wochenende oft gerne Pizza.',
          'Heute kocht sie sehr gerne.',
        ],
        answer: 'Ich gerne trinke Kaffee.',
        explain: 'The verb must stay in slot 2. "gerne" comes AFTER the verb (and before the object): "Ich trinke gerne Kaffee."',
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
          'Ich Musik höre in meiner Freizeit oft gerne.',
          'Ich höre in meiner Freizeit oft gerne Musik.',
          'In meiner Freizeit oft gerne Musik ich höre.',
          'Ich höre Musik in meiner Freizeit oft gerne.',
        ],
        answer: 'Ich höre in meiner Freizeit oft gerne Musik.',
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
        { speaker: 'A', de: 'Ich höre in meiner Freizeit oft gerne Musik. Reist du gerne?',   en: 'In my free time I often like to listen to music. Do you like to travel?' },
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
    intro: 'You now own enough verbs and structure to TALK ABOUT YOURSELF in German. The trick is a recipe — six blocks in a reliable order: 👋 greeting → 🪪 name → 🎂 age → 🌍 origin → 🏠 residence → 💼 profession (+ optional 🎮 hobby). Today you assemble the blocks, in BOTH the du-form (friends) and the Sie-form (strangers / professors / customer service), and finish with a personalised mini-speech.',
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
        summary: 'Greeting → name → age → origin → residence → profession (+ bonus hobby).',
        table: {
          head: ['#', 'block', 'say it like'],
          rows: [
            ['1', '👋 greeting',   'Hallo · Guten Tag · Guten Morgen'],
            ['2', '🪪 name',       'Ich heiße … / Mein Name ist …'],
            ['3', '🎂 age',        'Ich bin … Jahre alt.'],
            ['4', '🌍 origin',     'Ich komme aus … (country)'],
            ['5', '🏠 residence',  'Ich wohne in … (city)'],
            ['6', '💼 profession', 'Ich bin … / Ich arbeite als … / Ich studiere …'],
          ],
        },
        examples: [
          { de: 'Hallo! Ich heiße Anna. Ich bin 25 Jahre alt. Ich komme aus Indien und wohne in Berlin. Ich bin Lehrerin.', en: 'Hi! My name is Anna. I am 25. I come from India and live in Berlin. I am a teacher.', note: 'the whole recipe in one breath' },
        ],
        tip: 'Order is flexible after the greeting+name pair, but top-to-bottom always sounds natural. Bonus: 🎮 "In meiner Freizeit …" + a hobby (Day 13).',
      },
      { rule: '👤 The two registers — du vs Sie',
        summary: 'Same recipe, two voicings — pick before you open your mouth.',
        bullets: [
          'du — a friend, classmate, child, casual chat, social media.',
          'Sie — your boss, a stranger, doctor, professor, shop/customer service.',
        ],
        table: {
          head: ['du-form', 'Sie-form'],
          rows: [
            ['Wie heißt du?',    { t: 'Wie heißen Sie?', hl: true }],
            ['Woher kommst du?', { t: 'Woher kommen Sie?', hl: true }],
            ['Wo wohnst du?',    { t: 'Wo wohnen Sie?', hl: true }],
            ['Wie alt bist du?', { t: 'Wie alt sind Sie?', hl: true }],
          ],
        },
      },
      { rule: '⚠ Woher vs Wo — the killer pair',
        summary: 'Both mean "where" but point opposite ways: woher = FROM, wo = located.',
        examples: [
          { de: 'Woher kommst du? — Ich komme aus Indien.', en: 'Where are you from? — I come from India.', note: 'woher … aus (origin)' },
          { de: 'Wo wohnst du? — Ich wohne in Berlin.',     en: 'Where do you live? — I live in Berlin.',  note: 'wo … in (location)' },
        ],
        tip: 'Pair the question word with the right preposition: woher … aus / wo … in. (There\'s also wohin = where TO — Day 17.)',
      },
      { rule: '💼 Professions — no article!',
        summary: 'State your job with NO article: "Ich bin Lehrer" (not "ein Lehrer").',
        examples: [
          { de: 'Ich bin Lehrer.',     en: 'I am a teacher.',   note: '✓ no article (not "ein Lehrer")' },
          { de: 'Sie ist Ärztin.',     en: 'She is a doctor.',  note: 'female form adds -in: Arzt → Ärztin' },
          { de: 'Wir sind Studenten.', en: 'We are students.',  note: 'plural, still no article' },
        ],
        tip: 'Female forms add -in: Lehrer → Lehrerin · Arzt → Ärztin · Student → Studentin · Verkäufer → Verkäuferin.',
      },
      { rule: '🤝 Closing the introduction',
        summary: 'They reply "Sehr angenehm" / "Es freut mich"; you sign off.',
        examples: [
          { de: 'Tschüss!',         en: 'Bye! (informal)',          note: 'casual goodbye' },
          { de: 'Auf Wiedersehen!', en: 'Goodbye. (formal/neutral)', note: 'the safe formal sign-off' },
          { de: 'Bis bald!',        en: 'See you soon!',            note: 'Bis morgen = see you tomorrow' },
        ],
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
        summary: 'Sounds, numbers, pronouns, articles and the three auxiliaries.',
        bullets: [
          '🔤 Sounds: V→F · W→soft V · Z→ts · J→Y · ch (hard/soft) · sch→sh · ä/ö/ü · chs→ks.',
          '🔢 Numbers: 0-12 unique · 13-19 = unit+zehn · 21-99 FLIP (einundzwanzig). 30 dreißig · 60 sechzig · 70 siebzig.',
          '👤 Pronouns: ich · du · er/sie/es · wir · ihr · sie/Sie. Three "sies" — the verb form tells them apart.',
          '🪪 Articles: der (m) · die (f) · das (n) · die (pl). Always learn the article WITH the noun.',
        ],
        table: {
          head: ['pron.', 'sein 🟦', 'haben 🟩', 'werden 🟨'],
          rows: [
            ['ich',       'bin',  'habe',  'werde'],
            ['du',        'bist', 'hast',  'wirst'],
            ['er/sie/es', 'ist',  'hat',   'wird'],
            ['wir',       'sind', 'haben', 'werden'],
            ['ihr',       'seid', 'habt',  'werdet'],
            ['sie/Sie',   'sind', 'haben', 'werden'],
          ],
        },
        tip: 'Body states (Hunger, Durst, Angst) use HABEN, not sein: "Ich habe Hunger."',
      },
      { rule: '✅ Week 2 recap — building sentences',
        summary: 'Three verb types and the word-order rules that hold a German sentence together.',
        bullets: [
          '🔁 Regular verbs: stem + -e / -st / -t / -en / -t / -en. Stem ending in -t/-d adds an extra e (du arbeitest).',
          '⚡ Stem-changers: e→i (essen→isst) · e→ie (sehen→sieht) · a→ä (fahren→fährt). Only du + er/sie/es change.',
          '🧩 Separable verbs: stem in slot 2, prefix flies to the END (Ich stehe um 7 Uhr AUF). Re-glues after a modal.',
          '📍 V2 rule: the conjugated verb is ALWAYS in position 2. If time or place leads, the subject moves to slot 3.',
          '🕒 TFP-O order: Time → Frequency → Preference → Object (Ich höre in meiner Freizeit oft gerne Musik).',
          '👋 Self-intro: greeting → name → age → origin (aus) → residence (in) → profession (no article!).',
        ],
      },
      { rule: '🎯 The 5 mistakes to never make again',
        summary: 'The Week 1-2 errors to leave behind for good.',
        table: {
          head: ['✗ wrong', '✓ right', 'why'],
          rows: [
            ['Ich bin Hunger.',     { t: 'Ich habe Hunger.', hl: true },  'body states use haben'],
            ['Ich isse.',           { t: 'Ich esse.', hl: true },          'only du/er/sie/es stem-change'],
            ['Ich aufstehe.',       { t: 'Ich stehe … auf.', hl: true },   'prefix to the end'],
            ['Heute ich lerne.',    { t: 'Heute lerne ich.', hl: true },   'V2 — verb stays slot 2'],
            ['Ich bin ein Lehrer.', { t: 'Ich bin Lehrer.', hl: true },    'no article with profession'],
          ],
        },
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
      { type: 'fill-blank', sentence: '🛠 Ich + hören + 🕒 in meiner Freizeit + 🔄 oft + ❤️ gerne + 🎯 Musik → __',
        answer: 'Ich höre in meiner Freizeit oft gerne Musik' },
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
      { rule: '⭐ The 3-digit formula — one Lego rule for every 3-digit number',
        summary: 'multiplier-hundert + (units-UND-tens), all glued into ONE word.',
        table: {
          head: ['number', 'Lego seams', 'one word'],
          rows: [
            ['125', 'einhundert + fünfundzwanzig',  { t: 'hundertfünfundzwanzig', hl: true }],
            ['234', 'zweihundert + vierunddreißig', { t: 'zweihundertvierunddreißig', hl: true }],
            ['365', 'dreihundert + fünfundsechzig', { t: 'dreihundertfünfundsechzig', hl: true }],
            ['678', 'sechshundert + achtundsiebzig', { t: 'sechshundertachtundsiebzig', hl: true }],
            ['999', 'neunhundert + neunundneunzig', { t: 'neunhundertneunundneunzig', hl: true }],
          ],
        },
        tip: 'Read biggest unit first and glue it into one word — no spaces, no hyphens.',
        warn: 'The "und" appears ONLY inside the tens-units flip (fünfUNDzwanzig). NEVER between the hundreds and the rest: hundertfünfundzwanzig ✓, hundert und fünfundzwanzig ✗.',
      },
      { rule: '⭐ Hundreds & thousands — same rule, all one word',
        summary: 'Multiplier + hundert (or + tausend). Thousands work exactly like hundreds.',
        table: {
          head: ['number', 'one word', 'note'],
          rows: [
            ['100',    '(ein)hundert', 'ein- is optional'],
            ['200',    'zweihundert', ''],
            ['600',    'sechshundert', '⚠ keeps the full -s'],
            ['700',    'siebenhundert', '⚠ keeps the full -en'],
            ['1 000',  '(ein)tausend', 'ein- is optional'],
            ['10 000', 'zehntausend', ''],
            ['1 234',  'eintausendzweihundertvierunddreißig', 'tausend + hundert + flip'],
          ],
        },
        warn: 'Spelling traps: 16 (sechzehn) and 60 (sechzig) drop the -s of sechs, but 600 (sechshundert) brings it back. 17 (siebzehn) / 70 (siebzig) drop the -en, but 700 (siebenhundert) keeps it.',
      },
      { rule: '⭐ Reading years — the German shortcut',
        summary: 'Two ways, by century: 1100–1999 read as hundreds; 2000+ read as thousands.',
        table: {
          head: ['year', 'read as', 'spoken'],
          rows: [
            ['1989', 'neunzehnhundert + 89', { t: 'neunzehnhundertneunundachtzig', hl: true }],
            ['1492', 'vierzehnhundert + 92', 'vierzehnhundertzweiundneunzig'],
            ['1900', 'neunzehnhundert',      'neunzehnhundert'],
            ['2000', 'zweitausend',          'zweitausend'],
            ['2024', 'zweitausend + 24',     { t: 'zweitausendvierundzwanzig', hl: true }],
            ['2026', 'zweitausend + 26',     'zweitausendsechsundzwanzig'],
          ],
        },
        warn: 'The neunzehnhundert trick is only for years starting 11–19. From 2000 on, use the thousands form — never "zwanzig vierundzwanzig" for 2024.',
      },
      { rule: '💶 Prices — putting big numbers to work',
        summary: 'Ask with "Wie viel kostet das?", answer with "Das kostet …" or "Das macht …".',
        table: {
          head: ['phrase', 'register', 'example'],
          rows: [
            ['Wie viel kostet das?', 'neutral / standard', 'the everyday ask'],
            ['Was kostet das?',      'casual',           'shorter'],
            ['Das kostet …',         'answer',           'Das kostet 199 Euro.'],
            ['Das macht …',          'at checkout',      'Das macht 25 Euro fünfzig.'],
          ],
        },
        examples: [
          { de: 'Das kostet hundertneunundneunzig Euro.', en: 'That costs 199 euros.',        note: '199 = hundert + neunundneunzig' },
          { de: 'Das macht fünfundzwanzig Euro fünfzig.', en: 'That comes to 25.50 euros.',   note: 'cents said after Euro; the word "Cent" is optional' },
        ],
        tip: 'Cents at ,00 are dropped. Soften or harden with ungefähr (about), genau (exactly), or ca. (circa, in writing).',
      },
      { rule: '🚦 Pitfalls & spoken shortcuts',
        summary: 'The number traps to avoid.',
        bullets: [
          'ONE WORD always: zweihundertvierunddreißig — no spaces, no hyphens.',
          '"ein" is optional on round hundreds/thousands: hundert ≈ einhundert. Speech drops it; writing or phone-clarity keeps einhundert / eintausend.',
          'Never insert "und" between the hundreds and the rest: hundert und fünf ✗ → hundertfünf ✓.',
          '16 / 60 drop the -s of sechs, but 600 (sechshundert) keeps it. Same for 17 / 70 vs 700.',
          'German swaps the separators: "," is the decimal and "." is the thousands mark — 1.234,56 €.',
          'Phone / room / house = die Nummer, not die Zahl: "Welche Nummer hast du?".',
        ],
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
    intro: 'Welcome to the German case system! Until now articles never changed. From here, the article shows a noun\'s JOB in the sentence. The good news for the Akkusativ (the "receiving" case): only the MASCULINE article flips — der → den, ein → einen. Feminine, neuter and plural look exactly the same as before. Learn this one flip — der → den, ein → einen — and you have the core of the accusative article system.',
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
      { rule: '⭐ What is the Akkusativ? — the "receiving" case',
        summary: 'The article marks each noun by its JOB: Nominativ = the doer (subject); Akkusativ = what receives the action (object).',
        table: {
          head: ['role', 'job', 'example'],
          rows: [
            [{ t: 'Nominativ', hl: true }, 'the DOER (subject)',              'Der Mann sieht …'],
            [{ t: 'Akkusativ', hl: true }, 'what RECEIVES the action (object)', '… sieht den Hund.'],
          ],
        },
        examples: [
          { de: 'Der Mann sieht den Hund.', en: 'The man sees the dog.', note: 'Mann = subject (der), Hund = object (der → den)' },
          { de: 'Den Mann sieht der Hund.', en: 'The dog sees the man.', note: 'flip the articles → flip who does what' },
        ],
        tip: 'The doer stays der; the receiver flips der → den. Word order can move, but the articles tell you who does what.',
      },
      { rule: '⭐ The one rule — only MASCULINE changes',
        summary: 'In the Akkusativ ONLY the masculine article changes. Feminine, neuter and plural stay identical.',
        table: {
          head: ['gender', 'Nominativ', 'Akkusativ', 'note'],
          rows: [
            ['m',  'der / ein', { t: 'den / einen', hl: true }, '⭐ changes'],
            ['f',  'die / eine', 'die / eine',                  '✅ same'],
            ['n',  'das / ein',  'das / ein',                   '✅ same'],
            ['pl', 'die',        'die',                         '✅ same'],
          ],
        },
        tip: 'Memory hook: "der → den, ein → einen — everything else stays the same." Feminine, neuter and plural are a free pass.',
      },
      { rule: '⭐ The 5-second test — Wer/Was vs Wen/Was',
        summary: 'Ask the verb a question: WER/WAS finds the subject; WEN/WAS finds the object.',
        table: {
          head: ['question', 'finds', 'case'],
          rows: [
            ['Wer / Was + verb?', 'the subject', 'Nominativ'],
            ['Wen / Was + verb?', 'the object',  { t: 'Akkusativ', hl: true }],
          ],
        },
        examples: [
          { de: 'Ich kaufe den Tisch.', en: 'I am buying the table.', note: 'Wer kauft? → ich. Wen/Was? → den Tisch (Akk)' },
        ],
        tip: '"Wen" means "whom" — German kept the -n ending English mostly dropped. If "whom/what" fits the slot, that noun is Akkusativ.',
      },
      { rule: '🚫 kein / mein / dein all follow "ein"',
        summary: 'Every "ein-word" takes the same masculine -en ending in the Akkusativ.',
        table: {
          head: ['word', 'Akk masc', 'example'],
          rows: [
            ['ein',  { t: 'einen', hl: true },  'Ich habe einen Hund.'],
            ['kein', { t: 'keinen', hl: true }, 'Ich habe keinen Hund.'],
            ['mein', { t: 'meinen', hl: true }, 'Ich besuche meinen Bruder.'],
            ['dein', { t: 'deinen', hl: true }, 'Ich sehe deinen Vater.'],
            ['sein / ihr / unser', 'seinen / ihren / unseren', 'all add -en'],
          ],
        },
        tip: 'Learn the ein → einen flip and every ein-word comes free. Their feminine / neuter / plural forms stay unchanged (meine / mein / meine).',
      },
      { rule: '🎬 Which verbs trigger it? — action-on-a-thing verbs',
        summary: 'Many common action verbs take an Akkusativ object. Linking verbs (sein, werden, bleiben) take Nominativ on both sides; a few verbs take other cases you will meet later.',
        bullets: [
          'Akk verbs: sehen (see) · haben (have) · kaufen (buy) · brauchen (need) · besuchen (visit) · essen (eat) · trinken (drink) · nehmen (take) · lesen (read) · suchen (look for) · finden (find) · machen (do).',
        ],
        examples: [
          { de: 'Er hat einen Hund.', en: 'He has a dog.',    note: 'haben → Akkusativ (einen)' },
          { de: 'Das ist ein Hund.',  en: 'That is a dog.',   note: 'sein → Nominativ (ein, NOT einen)' },
        ],
        warn: 'sein (to be) takes NO object — it is an equals-sign: "Er ist ein Lehrer" (NOT einen). Compare haben (Akk) with sein (Nom).',
      },
      { rule: '🚦 Pitfalls — the masculine traps',
        summary: 'The traps that come with the very first case.',
        bullets: [
          'The flip is INVISIBLE on f / n / pl: "Ich sehe die Frau / das Kind / die Kinder" never change — do not over-correct them.',
          'It only hits the OBJECT. A masculine subject stays der: "Der Hund sieht den Mann."',
          'The -en ending is the masculine Akk fingerprint: einen / keinen / meinen / deinen.',
          'sein is the big exception: "Ich bin ein Mann" (Nom), never "einen".',
          'Weak masculine nouns also add -n/-en to the NOUN itself: den Studenten · den Jungen · den Herrn · den Kollegen. (A small group — just notice it for now.)',
        ],
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
    vocabLayout: 'spotlight',
    title: 'Family',
    titleDe: 'Die Familie',
    emoji: '👨‍👩‍👧',
    objective: 'Name every family member, master the 8 possessives (mein · dein · sein · ihr …), and decline them like "ein" across Nominativ, Akkusativ and Dativ.',
    intro: 'Family is one of the most useful topics to talk about — and it\'s the perfect home for the possessives. Today you learn the family nouns AND the 8 possessive words (mein = my, dein = your, sein = his, ihr = her …). The magic: every possessive declines EXACTLY like "ein", so once you know einen/eine/einem you already know meinen/meine/meinem.',
    vocabulary: [
      // 👨‍👩‍👧 CORE FAMILY — the household
      { de: 'die Familie',    en: 'the family',        emoji: '👨‍👩‍👧', hint: 'fem · "meine Familie"',                example: 'Meine Familie ist groß.',     exampleEn: 'My family is big.' },
      { de: 'die Eltern',     en: 'the parents (pl)',  emoji: '👫', hint: 'plural only · "meine Eltern"',          example: 'Meine Eltern wohnen in Berlin.', exampleEn: 'My parents live in Berlin.' },
      { de: 'der Vater',      en: 'the father',        emoji: '👨', hint: 'masc · informal: Papa',                 example: 'Mein Vater ist Lehrer.',      exampleEn: 'My father is a teacher.' },
      { de: 'die Mutter',     en: 'the mother',        emoji: '👩', hint: 'fem · informal: Mama',                  example: 'Meine Mutter heißt Anna.',    exampleEn: 'My mother\'s name is Anna.' },
      { de: 'der Bruder',     en: 'the brother',       emoji: '👦', hint: 'masc · pl: die Brüder',                 example: 'Mein Bruder spielt Fußball.', exampleEn: 'My brother plays football.' },
      { de: 'die Schwester',  en: 'the sister',        emoji: '👧', hint: 'fem · pl: die Schwestern',             example: 'Meine Schwester wohnt in Köln.', exampleEn: 'My sister lives in Cologne.' },
      { de: 'die Geschwister', en: 'siblings (pl)',    emoji: '🧒', hint: 'plural only · brothers & sisters',      example: 'Ich habe zwei Geschwister.',  exampleEn: 'I have two siblings.' },

      // 👶 CHILDREN & GRANDPARENTS
      { de: 'der Sohn',       en: 'the son',           emoji: '👦', hint: 'masc · pl: die Söhne',                  example: 'Ihr Sohn lernt Deutsch.',     exampleEn: 'Her son is learning German.' },
      { de: 'die Tochter',    en: 'the daughter',      emoji: '👧', hint: 'fem · pl: die Töchter',                example: 'Sein Tochter… → Seine Tochter ist klein.', exampleEn: 'His daughter is little.' },
      { de: 'das Kind',       en: 'the child',         emoji: '🧒', hint: 'neuter! · "mein Kind"',                 example: 'Mein Kind spielt im Garten.', exampleEn: 'My child plays in the garden.' },
      { de: 'die Großeltern', en: 'the grandparents (pl)', emoji: '👴', hint: 'plural · Opa + Oma',               example: 'Meine Großeltern sind nett.', exampleEn: 'My grandparents are kind.' },
      { de: 'der Opa',        en: 'grandpa',           emoji: '👴', hint: 'informal · der Großvater = formal',     example: 'Mein Opa ist achtzig.',       exampleEn: 'My grandpa is eighty.' },
      { de: 'die Oma',        en: 'grandma',           emoji: '👵', hint: 'informal · die Großmutter = formal',    example: 'Meine Oma kocht gern.',       exampleEn: 'My grandma likes to cook.' },

      // 🔑 THE 8 POSSESSIVES — one per person
      { de: 'mein',  en: 'my (ich)',               emoji: '🙋', hint: '⭐ declines like ein · meinen/meine/meinem', example: 'Das ist mein Vater.',     exampleEn: 'That is my father.' },
      { de: 'dein',  en: 'your (du · 1 friend)',   emoji: '👉', hint: '⭐ deinen/deine/deinem',                   example: 'Wo ist dein Bruder?',      exampleEn: 'Where is your brother?' },
      { de: 'sein',  en: 'his / its (er / es)',    emoji: '👨', hint: '⚠ er→sein AND es→sein',                   example: 'Sein Sohn ist klein.',     exampleEn: 'His son is little.' },
      { de: 'ihr',   en: 'her (sie)',              emoji: '👩', hint: '⚠ sie(she)→ihr · don\'t confuse with Dativ ihr', example: 'Ihr Mann heißt Tom.',  exampleEn: 'Her husband is called Tom.' },
      { de: 'unser', en: 'our (wir)',              emoji: '👥', hint: 'unseren/unsere/unserem',                  example: 'Unsere Familie ist groß.', exampleEn: 'Our family is big.' },
      { de: 'euer',  en: 'your (ihr · group)',     emoji: '👨‍👩‍👧', hint: '⚠ drops the e before endings: eure, euren', example: 'Wo sind eure Eltern?',  exampleEn: 'Where are your parents?' },
      { de: 'ihr',   en: 'their (sie pl)',         emoji: '🧑‍🤝‍🧑', hint: '⚠ sie(they)→ihr · same word as "her"',  example: 'Ihr Haus ist groß.',       exampleEn: 'Their house is big.' },
      { de: 'Ihr',   en: 'your (Sie · formal)',    emoji: '🤝', hint: '⚠ formal · ALWAYS capital I',             example: 'Ist das Ihr Auto?',        exampleEn: 'Is that your car? (formal)' },
    ],
    grammar: [
      { rule: '⭐ THE 8 POSSESSIVES — one per person',
        body:
          'Every subject pronoun has its own possessive word:\n\n' +
          '  ich → mein   (my)            wir → unser  (our)\n' +
          '  du  → dein   (your, friend)  ihr → euer   (your, group)\n' +
          '  er  → sein   (his)           sie → ihr    (their)\n' +
          '  es  → sein   (its)           Sie → Ihr    (your, formal · capital)\n' +
          '  sie → ihr    (her)\n\n' +
          '⚠ Two traps to watch: (1) er AND es both → sein. (2) ihr means BOTH "her" (sie=she) AND "their" (sie=they) — context decides. Formal "Ihr" is always capitalised.',
      },
      { rule: '⭐ THEY ALL DECLINE LIKE "EIN" — that\'s the whole rule',
        body:
          'A possessive takes the SAME endings as ein/eine. Learn the masculine row and you know the system:\n\n' +
          '            masc.     fem.      neut.     plural\n' +
          '  Nom.      mein      meine     mein      meine\n' +
          '  Akk.      meinen    meine     mein      meine\n' +
          '  Dat.      meinem    meiner    meinem    meinen +(-n)\n\n' +
          '  "Mein Bruder ist hier."        (Nom. masc.)\n' +
          '  "Ich sehe meinen Bruder."      (Akk. masc. → -en)\n' +
          '  "Ich helfe meinem Bruder."     (Dat. masc. → -em)\n\n' +
          'Swap the stem (mein → dein/sein/ihr/unser/euer/Ihr) and the SAME endings apply. So "deinen", "seinem", "ihre", "unseren" all follow the ein-pattern.',
      },
      { rule: '⚠ EUER — the e-dropping irregular',
        body:
          'euer (your, group) is the one odd stem: when it takes an ending, the middle -e- drops:\n\n' +
          '  euer  → eure  (not "euere")     "eure Familie"\n' +
          '  euer  → euren (not "eueren")    "euren Bruder" (Akk.)\n' +
          '  euer  → eurem                   "eurem Vater" (Dat.)\n\n' +
          'Only the bare Nominativ-masc/neuter form stays "euer" (euer Vater, euer Kind). Everywhere else it\'s eur-.',
      },
      { rule: '⚠ ihr — the triple-meaning word',
        body:
          'The little word "ihr" wears three hats — keep them apart by role:\n\n' +
          '  ihr  = "her"          (possessive, sie=she):  Ihr Mann → her husband\n' +
          '  ihr  = "their"        (possessive, sie=they): Ihr Haus → their house\n' +
          '  ihr  = "you (group)"  (subject pronoun):      Ihr seid nett → you are nice\n' +
          '  Ihr  = "your" formal  (capital I):            Ihr Auto → your car\n\n' +
          'Plus the Dativ pronoun "ihr" = "to her" (Day 29). Context and capitalisation are your guides.',
      },
      { rule: '🚦 PITFALLS — possessive traps',
        body:
          '• das Kind is NEUTER → "mein Kind" (not meine), "meinem Kind" in Dativ.\n' +
          '• er and es both take sein; only sie (she) takes ihr.\n' +
          '• euer drops its -e- before endings: eure / euren / eurem.\n' +
          '• Possessive endings = ein endings: masc Akk adds -en (meinen Bruder).\n' +
          '• Eltern, Geschwister, Großeltern are PLURAL-only — always meine/deine + plural verb.\n' +
          '• Formal "Ihr" is capitalised; "ihr" (her/their/you-group) is not.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — person→possessive · family word→meaning · ein-endings
      { type: 'match',
        pairs: [
          { de: 'ich → ?',  en: 'mein' },
          { de: 'du → ?',   en: 'dein' },
          { de: 'er → ?',   en: 'sein' },
          { de: 'sie (she) → ?', en: 'ihr' },
          { de: 'wir → ?',  en: 'unser' },
          { de: 'ihr (group) → ?', en: 'euer' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'der Vater',     en: '👨 father' },
          { de: 'die Mutter',    en: '👩 mother' },
          { de: 'die Schwester', en: '👧 sister' },
          { de: 'die Eltern',    en: '👫 parents (pl)' },
          { de: 'das Kind',      en: '🧒 child (neuter!)' },
          { de: 'die Großeltern', en: '👴 grandparents (pl)' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'mein Bruder (Nom.)',     en: 'subject → mein' },
          { de: 'Ich sehe ___ Bruder (Akk.)', en: 'meinen' },
          { de: 'Ich helfe ___ Bruder (Dat.)', en: 'meinem' },
          { de: 'meine Schwester (Akk.)', en: 'fem → meine (no change)' },
        ],
      },

      // 🔑 5 PERSON→POSSESSIVE fill-blanks (one per person)
      { type: 'fill-blank', sentence: '__ Vater ist Lehrer. (my)',                  answer: 'Mein' },
      { type: 'fill-blank', sentence: '__ Bruder spielt Fußball. (your, 1 friend)', answer: 'Dein' },
      { type: 'fill-blank', sentence: '__ Schwester wohnt in Berlin. (his)',        answer: 'Seine' },
      { type: 'fill-blank', sentence: '__ Vater arbeitet in der Firma. (her)',      answer: 'Ihr' },
      { type: 'fill-blank', sentence: '__ Familie ist groß. (our)',                 answer: 'Unsere' },

      // ⭐ 4 DECLINE-LIKE-EIN fill-blanks (Nom/Akk/Dat)
      { type: 'fill-blank', sentence: 'Akk masc.: Ich sehe __ Bruder. (my)',        answer: 'meinen' },
      { type: 'fill-blank', sentence: 'Nom. fem.: __ Mutter heißt Anna. (my)',      answer: 'Meine' },
      { type: 'fill-blank', sentence: 'Dat masc.: Ich helfe __ Vater. (my)',        answer: 'meinem', hint: 'Dativ masc → -em' },
      { type: 'fill-blank', sentence: 'Neuter: __ Kind spielt. (my — das Kind!)',   answer: 'Mein' },

      // ⚠ 2 EUER-drop fill-blanks
      { type: 'fill-blank', sentence: '__ Eltern sind nett. (your, group)',          answer: 'Eure', hint: 'euer drops the e: eure' },
      { type: 'fill-blank', sentence: 'Akk: Ich besuche __ Bruder. (your, group)',   answer: 'euren', hint: 'euer → euren' },

      // ⚠ 3 TRAP MCQs (Akk fem · register · neuter Kind)
      { type: 'multiple-choice', q: '"Ich liebe __ Schwester." (my, Akk.)',
        options: ['mein','meinen','meine','meiner'], answer: 'meine',
        explain: 'Schwester is fem → meine (no change in Akk).' },
      { type: 'multiple-choice', q: '"Where is YOUR coffee?" (1 friend, masc.)',
        options: ['mein','dein','sein','euer'], answer: 'dein' },
      { type: 'multiple-choice', q: '⚠ "my child" (das Kind = neuter):',
        options: ['meine Kind','meinen Kind','mein Kind','meiner Kind'], answer: 'mein Kind',
        explain: 'Neuter takes mein (like ein), no ending in Nom/Akk.' },

      // 💬 Mini dialogue — family + possessives in real chat
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Ist deine Familie groß?',                 en: 'Is your family big?' },
        { speaker: 'B', de: 'Ja! Ich habe zwei Geschwister.',          en: 'Yes! I have two siblings.' },
        { speaker: 'A', de: 'Was macht dein Bruder?',                  en: 'What does your brother do?' },
        { speaker: 'B', de: 'Mein Bruder ist Arzt, und meine Schwester studiert.', en: 'My brother is a doctor, and my sister studies.' },
        { speaker: 'A', de: 'Und wo wohnen eure Eltern?',             en: 'And where do your parents live?' },
        { speaker: 'B', de: 'Unsere Eltern wohnen bei meiner Oma.',    en: 'Our parents live at my grandma\'s.' },
      ]},
    ],
    quiz: [
      { type: 'multiple-choice', q: '"Ich liebe __ Schwester." (my, Akk.)',
        options: ['mein','meinen','meine','meiner'], answer: 'meine' },
      { type: 'multiple-choice', q: '"Where is YOUR coffee?" (1 friend, masc.)',
        options: ['mein','dein','sein','euer'], answer: 'dein' },
      { type: 'fill-blank', sentence: 'Akk masc.: Ich sehe __ Bruder. (my)', answer: 'meinen' },
      { type: 'multiple-choice', q: 'er and es both take which possessive?',
        options: ['ihr','sein','mein','euer'], answer: 'sein',
        explain: 'er → sein (his), es → sein (its).' },
      { type: 'fill-blank', sentence: 'Dat masc.: Ich helfe __ Vater. (my)', answer: 'meinem' },
      { type: 'multiple-choice', q: '⚠ "your parents" (group of friends):',
        options: ['euer Eltern','euere Eltern','eure Eltern','euren Eltern'], answer: 'eure Eltern',
        explain: 'euer drops the e before an ending → eure.' },
      { type: 'multiple-choice', q: '"my child" (das Kind = neuter):',
        options: ['meine Kind','mein Kind','meinen Kind','meinem Kind'], answer: 'mein Kind' },
    ],
  },

  {
    id: 32, week: 5,
    vocabLayout: 'spotlight',
    title: 'Daily routine',
    titleDe: 'Der Tagesablauf',
    emoji: '🌅',
    objective: 'Narrate a full day in order — wake to sleep — using routine verbs (many separable), time-of-day markers, clock times, and the time-first V2 inversion.',
    intro: 'Today everything comes together: the separable verbs from Day 12, the V2 word-order rule, and time words combine to describe a real day. You\'ll learn the routine verbs in sequence (aufstehen → frühstücken → arbeiten → … → schlafen), the time-of-day markers (morgens · mittags · abends), how to tell the clock, and the key move — when a time word leads, the verb STAYS in slot 2 and the subject jumps behind it.',
    vocabulary: [
      // 🌅 THE ROUTINE — verbs in daily order (★ = separable)
      { de: 'aufstehen',        en: 'to get up ★',          emoji: '⏰', hint: '★ separable · "Ich stehe um 7 auf"',        example: 'Ich stehe um sieben Uhr auf.',     exampleEn: 'I get up at seven.' },
      { de: 'aufwachen',        en: 'to wake up ★',         emoji: '😴', hint: '★ separable · before getting up',           example: 'Ich wache früh auf.',              exampleEn: 'I wake up early.' },
      { de: 'sich duschen',     en: 'to shower',            emoji: '🚿', hint: 'reflexive · "Ich dusche mich"',             example: 'Ich dusche mich am Morgen.',       exampleEn: 'I shower in the morning.' },
      { de: 'frühstücken',      en: 'to have breakfast',    emoji: '🍳', hint: 'regular · das Frühstück = breakfast',       example: 'Ich frühstücke um acht Uhr.',      exampleEn: 'I have breakfast at eight.' },
      { de: 'zur Arbeit fahren', en: 'to go to work',       emoji: '🚌', hint: 'fahren + zur Arbeit (Dativ)',               example: 'Ich fahre mit dem Bus zur Arbeit.', exampleEn: 'I go to work by bus.' },
      { de: 'arbeiten',         en: 'to work',              emoji: '💼', hint: 'regular · -t stem → du arbeitest',          example: 'Ich arbeite von neun bis fünf.',   exampleEn: 'I work from nine to five.' },
      { de: 'zu Mittag essen',  en: 'to have lunch',        emoji: '🍽️', hint: 'essen + zu Mittag · das Mittagessen',      example: 'Ich esse um halb eins zu Mittag.', exampleEn: 'I have lunch at half past twelve.' },
      { de: 'nach Hause gehen', en: 'to go home',           emoji: '🏠', hint: 'nach Hause = (to) home · fixed phrase',     example: 'Ich gehe um sechs nach Hause.',    exampleEn: 'I go home at six.' },
      { de: 'einkaufen',        en: 'to shop ★',            emoji: '🛒', hint: '★ separable · "Ich kaufe ein"',             example: 'Ich kaufe am Abend ein.',          exampleEn: 'I shop in the evening.' },
      { de: 'kochen',           en: 'to cook',              emoji: '🍲', hint: 'regular · das Abendessen = dinner',         example: 'Ich koche das Abendessen.',        exampleEn: 'I cook dinner.' },
      { de: 'fernsehen',        en: 'to watch TV ★',        emoji: '📺', hint: '★ separable · "Ich sehe fern"',             example: 'Ich sehe am Abend fern.',          exampleEn: 'I watch TV in the evening.' },
      { de: 'ins Bett gehen',   en: 'to go to bed',         emoji: '🛏️', hint: 'ins Bett = to bed (Akk · movement)',        example: 'Ich gehe um elf ins Bett.',        exampleEn: 'I go to bed at eleven.' },
      { de: 'schlafen',         en: 'to sleep',             emoji: '💤', hint: 'stem-changer a→ä · du schläfst',            example: 'Ich schlafe acht Stunden.',        exampleEn: 'I sleep eight hours.' },

      // 🕐 TIME-OF-DAY MARKERS (the -s adverbs)
      { de: 'morgens',  en: 'in the morning(s)',   emoji: '🌅', hint: 'time adverb · often leads → V2 inversion',  example: 'Morgens trinke ich Kaffee.',  exampleEn: 'In the mornings I drink coffee.' },
      { de: 'mittags',  en: 'at midday',           emoji: '🌞', hint: 'around noon',                              example: 'Mittags esse ich wenig.',     exampleEn: 'At midday I eat little.' },
      { de: 'nachmittags', en: 'in the afternoon', emoji: '🌤️', hint: 'after noon',                               example: 'Nachmittags arbeite ich.',    exampleEn: 'In the afternoon I work.' },
      { de: 'abends',   en: 'in the evening(s)',   emoji: '🌆', hint: 'time adverb · leads → V2 inversion',        example: 'Abends sehe ich fern.',       exampleEn: 'In the evenings I watch TV.' },
      { de: 'nachts',   en: 'at night',            emoji: '🌙', hint: 'during the night',                         example: 'Nachts schlafe ich tief.',    exampleEn: 'At night I sleep deeply.' },

      // 🕐 CLOCK TIME
      { de: 'um … Uhr',     en: 'at … o\'clock',     emoji: '🕐', hint: '⭐ um + number + Uhr · "um 7 Uhr"',     example: 'Ich stehe um sieben Uhr auf.', exampleEn: 'I get up at seven o\'clock.' },
      { de: 'halb …',       en: 'half past (the hour BEFORE)', emoji: '🕜', hint: '⚠ halb acht = 7:30 (half TO eight!)', example: 'Ich frühstücke um halb acht.', exampleEn: 'I have breakfast at 7:30.' },
      { de: 'Viertel nach', en: 'quarter past',      emoji: '🕒', hint: 'Viertel nach drei = 3:15',              example: 'Viertel nach drei.',           exampleEn: 'Quarter past three.' },
      { de: 'Viertel vor',  en: 'quarter to',        emoji: '🕘', hint: 'Viertel vor vier = 3:45',              example: 'Viertel vor vier.',            exampleEn: 'Quarter to four.' },

      // 🔗 SEQUENCE CONNECTORS
      { de: 'zuerst',  en: 'first',          emoji: '1️⃣', hint: 'opens a sequence · leads → V2',  example: 'Zuerst stehe ich auf.',       exampleEn: 'First I get up.' },
      { de: 'dann',    en: 'then',           emoji: '➡️', hint: 'next step · leads → V2',          example: 'Dann frühstücke ich.',        exampleEn: 'Then I have breakfast.' },
      { de: 'danach',  en: 'after that',     emoji: '⏩', hint: 'after that · leads → V2',         example: 'Danach fahre ich zur Arbeit.', exampleEn: 'After that I go to work.' },
      { de: 'schließlich', en: 'finally',    emoji: '🔚', hint: 'last step · leads → V2',          example: 'Schließlich gehe ich ins Bett.', exampleEn: 'Finally I go to bed.' },
    ],
    grammar: [
      { rule: '⭐ TIME-FIRST → V2 INVERSION (the key move)',
        body:
          'When a time word OPENS the sentence, the conjugated verb STILL keeps slot 2 — so the subject jumps to slot 3, right after the verb:\n\n' +
          '  Slot 1        Slot 2   Slot 3   …\n' +
          '  ──────        ──────   ──────   ─────\n' +
          '  Ich           stehe    —        um 7 Uhr auf.   (normal)\n' +
          '  Morgens       stehe    ich      um 7 Uhr auf.   (time leads → ich moves)\n' +
          '  Um 7 Uhr      stehe    ich      auf.\n' +
          '  Dann          frühstücke ich.\n\n' +
          '⚠ NOT "Morgens ich stehe auf" ✗. The verb is glued to position 2; only the subject moves. This is the same V2 rule from Day 9/13 — now applied to time openers.',
      },
      { rule: '★ SEPARABLE ROUTINE VERBS — stem in 2, prefix at the end',
        body:
          'Many routine verbs are separable (Day 12). The stem takes slot 2, the prefix flies to the very end:\n\n' +
          '  aufstehen  → Ich stehe um 7 Uhr AUF.\n' +
          '  aufwachen  → Ich wache früh AUF.\n' +
          '  einkaufen  → Ich kaufe am Abend EIN.\n' +
          '  fernsehen  → Ich sehe abends FERN.\n\n' +
          'With a time opener BOTH rules stack: "Abends sehe ich FERN." — abends (slot 1), sehe (slot 2), ich (slot 3), fern (end).',
      },
      { rule: '🕐 TELLING THE TIME — um, halb, Viertel',
        body:
          'AT a clock time: um + number + Uhr → "um sieben Uhr" (at 7).\n\n' +
          '  halb        → ⚠ counts to the NEXT hour:\n' +
          '                 halb acht = 7:30 (half-way TO eight, not "half eight"!)\n' +
          '  Viertel nach → quarter past: "Viertel nach drei" = 3:15\n' +
          '  Viertel vor  → quarter to:   "Viertel vor vier"  = 3:45\n\n' +
          'The "halb" trap is the #1 beginner mistake: German halb looks AHEAD to the coming hour. halb neun = 8:30.',
      },
      { rule: '🌅 TIME-OF-DAY ADVERBS — the -s words',
        body:
          'Add -s to a part of the day to mean "(habitually) during that time":\n\n' +
          '  der Morgen   → morgens   (in the mornings)\n' +
          '  der Mittag   → mittags   (at midday)\n' +
          '  der Nachmittag → nachmittags (afternoons)\n' +
          '  der Abend    → abends    (in the evenings)\n' +
          '  die Nacht    → nachts    (at night)\n\n' +
          'These are adverbs (lowercase, no article) and they love to lead the sentence → V2 inversion: "Abends koche ich."',
      },
      { rule: '🔗 SEQUENCING A DAY — zuerst · dann · danach · schließlich',
        body:
          'Chain the steps of your day with sequence words. Each one leads the clause → verb stays in slot 2:\n\n' +
          '  Zuerst stehe ich auf.\n' +
          '  Dann frühstücke ich.\n' +
          '  Danach fahre ich zur Arbeit.\n' +
          '  Am Abend koche ich.\n' +
          '  Schließlich gehe ich ins Bett.\n\n' +
          'Notice every one triggers the inversion — subject after the verb. String them together and you have a complete spoken day.',
      },
      { rule: '🚦 PITFALLS — daily-routine traps',
        body:
          '• Time leads → verb still slot 2, subject slot 3: "Morgens stehe ICH auf." (not "Morgens ich stehe").\n' +
          '• Separable prefix goes to the END: "Ich sehe abends fern" (not "Ich fernsehe").\n' +
          '• halb acht = 7:30, NOT 8:30 — German counts to the next hour.\n' +
          '• "nach Hause" (going home) vs "zu Hause" (being at home) — movement vs location.\n' +
          '• arbeiten has a -t stem → "du arbeitest, er arbeitet" (extra -e-).\n' +
          '• schlafen is a stem-changer a→ä → "du schläfst, er schläft".',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — verb→meaning · time marker→part of day · clock
      { type: 'match',
        pairs: [
          { de: 'aufstehen',  en: '⏰ to get up' },
          { de: 'frühstücken', en: '🍳 to have breakfast' },
          { de: 'arbeiten',    en: '💼 to work' },
          { de: 'einkaufen',   en: '🛒 to shop' },
          { de: 'fernsehen',   en: '📺 to watch TV' },
          { de: 'schlafen',    en: '💤 to sleep' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'morgens',  en: '🌅 in the morning' },
          { de: 'mittags',  en: '🌞 at midday' },
          { de: 'abends',   en: '🌆 in the evening' },
          { de: 'nachts',   en: '🌙 at night' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'um sieben Uhr',   en: '7:00' },
          { de: 'halb acht',       en: '7:30 (half TO eight!)' },
          { de: 'Viertel nach drei', en: '3:15' },
          { de: 'Viertel vor vier', en: '3:45' },
        ],
      },

      // ★ 4 SEPARABLE-VERB routine fill-blanks
      { type: 'fill-blank', sentence: 'Ich __ um sieben Uhr auf. (aufstehen — stem)', answer: 'stehe' },
      { type: 'fill-blank', sentence: 'Ich sehe am Abend __ . (fernsehen — prefix)', answer: 'fern' },
      { type: 'fill-blank', sentence: 'Ich kaufe am Nachmittag __ . (einkaufen — prefix)', answer: 'ein' },
      { type: 'fill-blank', sentence: 'Ich wache früh __ . (aufwachen — prefix)', answer: 'auf' },

      // ⭐ 4 TIME-FIRST V2-INVERSION fill-blanks (subject after verb)
      { type: 'fill-blank', sentence: 'V2: "Morgens __ ich Kaffee." (trinken)', answer: 'trinke' },
      { type: 'fill-blank', sentence: 'V2: "Abends __ ich fern." (fernsehen — stem in slot 2)', answer: 'sehe' },
      { type: 'fill-blank', sentence: 'V2 order: "Dann __ ich." (frühstücken)', answer: 'frühstücke' },
      { type: 'fill-blank', sentence: 'V2: "Um sieben Uhr __ ich auf." (aufstehen — stem)', answer: 'stehe' },

      // 🕐 2 CLOCK MCQs (the halb trap)
      { type: 'multiple-choice', q: '⚠ "halb acht" means…',
        options: ['8:30','7:30','8:15','7:45'], answer: '7:30',
        explain: 'German halb counts to the NEXT hour: halb acht = half-way TO eight = 7:30.' },
      { type: 'multiple-choice', q: '"Viertel vor vier" =',
        options: ['4:15','3:45','4:45','3:15'], answer: '3:45',
        explain: 'Viertel vor = quarter to → 3:45.' },

      // ⚠ 3 WORD-ORDER / TRAP MCQs
      { type: 'multiple-choice', q: '⚠ Which word order is CORRECT?',
        options: ['Morgens ich stehe auf.','Morgens stehe ich auf.','Ich morgens stehe auf.','Morgens auf ich stehe.'],
        answer: 'Morgens stehe ich auf.',
        explain: 'Time leads → verb stays slot 2, subject moves to slot 3.' },
      { type: 'multiple-choice', q: '⚠ Correct separable-verb sentence:',
        options: ['Ich fernsehe am Abend.','Ich sehe am Abend fern.','Ich am Abend fern sehe.','Ich sehe fern am Abend nicht.'],
        answer: 'Ich sehe am Abend fern.',
        explain: 'Stem (sehe) in slot 2, prefix (fern) at the end.' },
      { type: 'multiple-choice', q: '"going home" vs "at home" — "I go ___":',
        options: ['zu Hause','nach Hause','in Hause','am Hause'], answer: 'nach Hause',
        explain: 'nach Hause = movement home; zu Hause = being at home.' },

      // 💬 Mini dialogue — a full day in sequence
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Wie sieht dein Tag aus?',                    en: 'What does your day look like?' },
        { speaker: 'B', de: 'Zuerst stehe ich um sieben Uhr auf.',        en: 'First I get up at seven.' },
        { speaker: 'A', de: 'Und dann?',                                  en: 'And then?' },
        { speaker: 'B', de: 'Dann frühstücke ich und fahre zur Arbeit.',  en: 'Then I have breakfast and go to work.' },
        { speaker: 'A', de: 'Was machst du am Abend?',                    en: 'What do you do in the evening?' },
        { speaker: 'B', de: 'Abends koche ich und sehe fern.',            en: 'In the evening I cook and watch TV.' },
        { speaker: 'A', de: 'Und wann gehst du ins Bett?',                en: 'And when do you go to bed?' },
        { speaker: 'B', de: 'Schließlich gehe ich um elf ins Bett.',      en: 'Finally I go to bed at eleven.' },
      ]},
    ],
    quiz: [
      { type: 'multiple-choice', q: '"Morgens __ ich Kaffee." (drink)',
        options: ['trinke','trinkst','trinkt','trinken'], answer: 'trinke' },
      { type: 'multiple-choice', q: '⚠ Which word order is CORRECT?',
        options: ['Abends ich sehe fern.','Abends sehe ich fern.','Abends fern ich sehe.','Ich abends fern sehe.'],
        answer: 'Abends sehe ich fern.', explain: 'Time leads → verb slot 2, subject slot 3, prefix at end.' },
      { type: 'multiple-choice', q: '⚠ "halb neun" means…',
        options: ['9:30','8:30','9:15','8:45'], answer: '8:30',
        explain: 'halb counts to the next hour → halb neun = 8:30.' },
      { type: 'fill-blank', sentence: 'Separable: "Ich __ um sieben Uhr auf." (aufstehen — stem)', answer: 'stehe' },
      { type: 'fill-blank', sentence: 'Sequence: "__ frühstücke ich." (then)', answer: 'Dann' },
      { type: 'multiple-choice', q: '"I go home" =',
        options: ['Ich gehe zu Hause.','Ich gehe nach Hause.','Ich gehe im Hause.','Ich gehe Hause.'],
        answer: 'Ich gehe nach Hause.' },
      { type: 'fill-blank', sentence: 'Separable prefix: "Ich kaufe am Abend __ ." (einkaufen)', answer: 'ein' },
    ],
  },

  /* ===================== WEEK 4: modals + scenarios ===================== */
  {
    id: 35, week: 5,
    vocabLayout: 'spotlight',
    title: 'Modals: können · müssen · wollen',
    titleDe: 'Modalverben I',
    emoji: '🛠️',
    objective: 'Express ability (können), obligation (müssen) and desire (wollen) — master the sandwich rule (modal in slot 2, infinitive at the end), the singular vowel-change, and the polite möchten alternative to blunt wollen.',
    intro: 'Modal verbs are a game-changer: they let you say what you CAN, MUST and WANT to do. They work as a duo — the modal takes slot 2 and a SECOND verb flies to the end in its infinitive form ("Ich KANN heute Deutsch LERNEN"). Watch the singular vowel-change (ich kann/muss/will) and reach for the polite "möchten" instead of blunt "wollen" with strangers.',
    vocabulary: [
      // 🛠️ THE THREE MODALS — ability / obligation / desire
      { de: 'können', en: 'can / be able to',  emoji: '💪', hint: '⭐ ability · ich KANN (vowel change)',       example: 'Ich kann gut schwimmen.',         exampleEn: 'I can swim well.' },
      { de: 'müssen', en: 'must / have to',    emoji: '⏰', hint: '⭐ obligation · ich MUSS',                  example: 'Ich muss heute arbeiten.',        exampleEn: 'I have to work today.' },
      { de: 'wollen', en: 'to want to',        emoji: '🎯', hint: '⭐ strong desire · ich WILL (not "will"=future!)', example: 'Ich will Deutsch lernen.',   exampleEn: 'I want to learn German.' },

      // 🔤 THE SINGULAR FORMS — the vowel-change to memorise
      { de: 'ich kann',  en: 'I can',          emoji: '🟦', hint: 'können → kann (ö→a) · no -e ending!',       example: 'Ich kann Auto fahren.',           exampleEn: 'I can drive a car.' },
      { de: 'du kannst', en: 'you can',        emoji: '👉', hint: 'kann + st',                                example: 'Kannst du mir helfen?',           exampleEn: 'Can you help me?' },
      { de: 'ich muss',  en: 'I must',         emoji: '🟥', hint: 'müssen → muss (ü→u) · no -e ending!',       example: 'Ich muss jetzt gehen.',           exampleEn: 'I must go now.' },
      { de: 'ich will',  en: 'I want to',      emoji: '🟨', hint: 'wollen → will (o→i) · ⚠ NOT English "will"', example: 'Ich will nach Hause.',            exampleEn: 'I want to go home.' },

      // 🙏 THE POLITE ALTERNATIVE — möchten
      { de: 'möchten',   en: 'would like to',  emoji: '🙏', hint: '⭐ polite form of wollen · ich möchte',     example: 'Ich möchte einen Kaffee.',        exampleEn: 'I would like a coffee.' },
      { de: 'ich möchte', en: 'I would like',  emoji: '☕', hint: 'polite · no -e→ no, IT KEEPS -e: möchte',   example: 'Ich möchte bezahlen.',            exampleEn: 'I would like to pay.' },

      // 🎬 COMMON INFINITIVES — the second verb that flies to the end
      { de: 'arbeiten',  en: 'to work',        emoji: '💼', hint: 'goes to the END after a modal',            example: 'Ich muss heute arbeiten.',        exampleEn: 'I have to work today.' },
      { de: 'schwimmen', en: 'to swim',        emoji: '🏊', hint: 'goes to the END',                          example: 'Kannst du schwimmen?',            exampleEn: 'Can you swim?' },
      { de: 'lernen',    en: 'to learn',       emoji: '📚', hint: 'goes to the END',                          example: 'Ich will Deutsch lernen.',        exampleEn: 'I want to learn German.' },
      { de: 'bezahlen',  en: 'to pay',         emoji: '💳', hint: 'goes to the END',                          example: 'Ich möchte bezahlen.',            exampleEn: 'I would like to pay.' },
      { de: 'schlafen',  en: 'to sleep',       emoji: '💤', hint: 'goes to the END',                          example: 'Ich will jetzt schlafen.',        exampleEn: 'I want to sleep now.' },

      // 🧩 SANDWICH-RULE LABELS
      { de: 'das Modalverb', en: 'the modal verb (slot 2)', emoji: '🥪', hint: 'the conjugated half · stays in slot 2', example: 'Das Modalverb ist „kann".',   exampleEn: 'The modal verb is "can".' },
      { de: 'der Infinitiv', en: 'the infinitive (at the END)', emoji: '🔚', hint: 'the second verb · flies to the end · -en form', example: 'Der Infinitiv ist „lernen".', exampleEn: 'The infinitive is "to learn".' },
    ],
    grammar: [
      { rule: '⭐ THE SANDWICH RULE — modal in slot 2, infinitive at the END',
        body:
          'A modal verb almost always pairs with a SECOND verb. The modal is conjugated in slot 2; the second verb goes to the very END as an infinitive (-en form):\n\n' +
          '  Slot 1   Slot 2(modal)   …middle…        END(infinitive)\n' +
          '  ──────   ─────────────   ────────        ───────────────\n' +
          '  Ich      kann            heute Deutsch   lernen.\n' +
          '  Ich      muss            morgen früh     arbeiten.\n' +
          '  Wir      wollen          am Wochenende   schwimmen.\n\n' +
          '⚠ NOT "Ich will lernen Deutsch" ✗ — the infinitive MUST be last: "Ich will Deutsch lernen" ✓. Everything else (time, object) sits in the middle.',
      },
      { rule: '⭐ THE SINGULAR VOWEL-CHANGE + no -e/-t endings',
        body:
          'Modals change their vowel in the singular (ich/du/er-sie-es), and ich/er take NO ending:\n\n' +
          '           können    müssen    wollen\n' +
          '  ich      kann      muss      will      ← vowel change, no -e\n' +
          '  du       kannst    musst     willst\n' +
          '  er/sie   kann      muss      will      ← no -t\n' +
          '  wir      können    müssen    wollen    ← back to infinitive\n' +
          '  ihr      könnt     müsst     wollt\n' +
          '  sie/Sie  können    müssen    wollen\n\n' +
          '🧠 Two quirks: (1) ich and er/sie/es are IDENTICAL (kann / muss / will). (2) the plural forms (wir/sie/Sie) = the infinitive. The vowel only changes in the three singular forms.',
      },
      { rule: '⚠ "ich will" ≠ English "I will"',
        body:
          'The biggest false friend in German modals:\n\n' +
          '  Ich will …  = I WANT to …   (present desire, NOT future!)\n' +
          '  "Ich will Deutsch lernen."  = I want to learn German.\n\n' +
          'To say English "I will" (future), German uses werden: "Ich werde Deutsch lernen." So never read "will" as future — it always means "want".',
      },
      { rule: '🙏 möchten — the polite "would like"',
        body:
          'wollen ("want") can sound blunt or demanding to strangers. The polite version is möchten ("would like"):\n\n' +
          '  ich möchte      wir möchten\n' +
          '  du möchtest     ihr möchtet\n' +
          '  er/sie möchte   sie/Sie möchten\n\n' +
          '  Blunt:  "Ich will einen Kaffee."   (I want a coffee)\n' +
          '  Polite: "Ich möchte einen Kaffee." (I would like a coffee)\n\n' +
          'It follows the same sandwich rule ("Ich möchte jetzt bezahlen") and can also stand alone with a noun ("Ich möchte einen Tee"). Use möchten in shops, restaurants and with people you don\'t know.',
      },
      { rule: '🚦 PITFALLS — modal traps',
        body:
          '• Infinitive goes to the END: "Ich muss heute arbeiten" (not "Ich muss arbeiten heute").\n' +
          '• ich/er take NO ending: "er kann" (not "er kannt"), "ich muss" (not "ich musse").\n' +
          '• "ich will" = I want, NOT I will. Future = werden.\n' +
          '• Use möchten (not wollen) to be polite with strangers.\n' +
          '• The vowel change is singular-only: wir/sie/Sie keep the full infinitive (können/müssen/wollen).\n' +
          '• A modal can stand alone if the meaning is clear: "Ich kann Deutsch" (I know German), "Ich muss nach Hause" (I must go home).',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 2 INTERACTIVE MATCHES — modal→meaning · singular forms
      { type: 'match',
        pairs: [
          { de: 'können',  en: '💪 can / ability' },
          { de: 'müssen',  en: '⏰ must / obligation' },
          { de: 'wollen',  en: '🎯 want to / desire' },
          { de: 'möchten', en: '🙏 would like (polite)' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'ich kann',  en: 'I can' },
          { de: 'ich muss',  en: 'I must' },
          { de: 'ich will',  en: 'I want to' },
          { de: 'ich möchte', en: 'I would like' },
        ],
      },

      // 📊 3 CONJUGATION TABLES (preserved — können / müssen / wollen)
      conjEx('können', 'can'),
      conjEx('müssen', 'must'),
      conjEx('wollen', 'want to'),

      // 🛠️ 5 MODAL fill-blanks (the right singular form)
      { type: 'fill-blank', sentence: 'Ich __ heute Deutsch lernen. (must)',  answer: 'muss' },
      { type: 'fill-blank', sentence: 'Du __ schwimmen. (can)',               answer: 'kannst' },
      { type: 'fill-blank', sentence: 'Er __ nach Hause gehen. (wants to)',   answer: 'will' },
      { type: 'fill-blank', sentence: 'Wir __ am Wochenende arbeiten. (must — plural!)', answer: 'müssen' },
      { type: 'fill-blank', sentence: 'Polite: Ich __ einen Kaffee. (would like)', answer: 'möchte' },

      // 🧩 3 SANDWICH-RULE build / order
      { type: 'fill-blank', sentence: 'Sandwich: put the infinitive last → "Ich will heute Deutsch __." (lernen)', answer: 'lernen' },
      { type: 'multiple-choice', q: 'Which word order is correct?',
        options: ['Ich will Deutsch lernen heute.','Heute ich will Deutsch lernen.','Ich will heute Deutsch lernen.','Ich Deutsch lernen will heute.'],
        answer: 'Ich will heute Deutsch lernen.',
        explain: 'Modal in slot 2, infinitive at the very end.' },
      { type: 'multiple-choice', q: '⚠ Which is CORRECT?',
        options: ['Ich muss arbeiten heute.','Ich muss heute arbeiten.','Heute ich muss arbeiten.','Ich heute muss arbeiten.'],
        answer: 'Ich muss heute arbeiten.',
        explain: 'Infinitive (arbeiten) goes to the end.' },

      // ⚠ 3 TRAP MCQs (will=want · no -t · polite)
      { type: 'multiple-choice', q: '⚠ "Ich will einen Kaffee" means…',
        options: ['I will have a coffee (future)','I want a coffee (now)','I would like a coffee','I can have a coffee'],
        answer: 'I want a coffee (now)',
        explain: '"will" = want, NOT English future. Future would be "Ich werde …".' },
      { type: 'multiple-choice', q: '⚠ Correct 3rd-person form: "Er ___ schwimmen."',
        options: ['kannt','kann','kanns','kannst'], answer: 'kann',
        explain: 'er/sie/es take NO ending on a modal → er kann.' },
      { type: 'multiple-choice', q: 'Politest way to order in a café:',
        options: ['Ich will einen Tee.','Ich möchte einen Tee.','Ich muss einen Tee.','Gib mir Tee.'],
        answer: 'Ich möchte einen Tee.',
        explain: 'möchten is the polite "would like".' },

      // 💬 Mini dialogue — all three modals + möchten + sandwich rule
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Was möchtest du heute machen?',            en: 'What would you like to do today?' },
        { speaker: 'B', de: 'Ich will schwimmen gehen, aber ich muss arbeiten.', en: 'I want to go swimming, but I have to work.' },
        { speaker: 'A', de: 'Kannst du am Abend?',                      en: 'Can you in the evening?' },
        { speaker: 'B', de: 'Ja, am Abend kann ich. Möchtest du mitkommen?', en: 'Yes, in the evening I can. Would you like to come along?' },
        { speaker: 'A', de: 'Gerne! Ich möchte auch schwimmen.',        en: 'Gladly! I would also like to swim.' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Du __ schwimmen. (can)', answer: 'kannst' },
      { type: 'fill-blank', sentence: 'Ich __ heute arbeiten. (must)', answer: 'muss' },
      { type: 'multiple-choice', q: '⚠ "Ich will Deutsch lernen" means…',
        options: ['I will learn German (future)','I want to learn German','I can learn German','I must learn German'],
        answer: 'I want to learn German', explain: 'will = want, not future.' },
      { type: 'multiple-choice', q: 'Correct word order:',
        options: ['Ich kann lernen Deutsch.','Ich kann Deutsch lernen.','Lernen ich kann Deutsch.','Ich Deutsch kann lernen.'],
        answer: 'Ich kann Deutsch lernen.', explain: 'Infinitive at the end.' },
      { type: 'multiple-choice', q: '3rd-person singular: "Sie ___ gut kochen." (can)',
        options: ['kannt','kann','kannst','könnt'], answer: 'kann' },
      { type: 'multiple-choice', q: 'Polite "I would like a coffee":',
        options: ['Ich will einen Kaffee.','Ich möchte einen Kaffee.','Ich muss einen Kaffee.','Ich kann einen Kaffee.'],
        answer: 'Ich möchte einen Kaffee.' },
      { type: 'fill-blank', sentence: 'Plural: "Wir __ nach Berlin fahren." (want to)', answer: 'wollen' },
    ],
  },

  {
    id: 36, week: 6,
    vocabLayout: 'spotlight',
    title: 'Modals: dürfen · sollen · mögen',
    titleDe: 'Modalverben II',
    emoji: '🧰',
    objective: 'Complete the modal set — dürfen (permission), sollen (advice/obligation), mögen (liking) and möchten (polite would-like) — and climb the café/restaurant politeness ladder.',
    intro: 'Day 35 gave you können/müssen/wollen. Today finishes the family: dürfen = be allowed (permission), sollen = should (advice or someone else\'s instruction), mögen = like (a thing), and möchten = would like (the polite ordering verb). Same sandwich rule, same singular vowel-change — plus the real-world politeness ladder for cafés and shops.',
    vocabulary: [
      // 🧰 THE THREE NEW MODALS + möchten
      { de: 'dürfen',  en: 'to be allowed to',  emoji: '✅', hint: '⭐ permission · ich DARF (rf→r)',           example: 'Darf ich hier rauchen?',        exampleEn: 'May I smoke here?' },
      { de: 'sollen',  en: 'should / ought to',  emoji: '📋', hint: '⭐ advice / instruction · ich SOLL (no vowel change!)', example: 'Du sollst mehr schlafen.', exampleEn: 'You should sleep more.' },
      { de: 'mögen',   en: 'to like (a thing)',  emoji: '😍', hint: '⭐ liking · ich MAG · usually + NOUN, no 2nd verb', example: 'Ich mag Kaffee.',           exampleEn: 'I like coffee.' },
      { de: 'möchten', en: 'would like (polite)', emoji: '🙏', hint: '🔁 Day 35 · polite form of mögen/wollen', example: 'Ich möchte einen Tee.',         exampleEn: 'I would like a tea.' },

      // 🔤 THE SINGULAR FORMS — the vowel-change (and the sollen exception)
      { de: 'ich darf',  en: 'I may / am allowed', emoji: '🟦', hint: 'dürfen → darf (ü→a) · no -e',           example: 'Ich darf heute früher gehen.',  exampleEn: 'I may leave earlier today.' },
      { de: 'du darfst', en: 'you may',            emoji: '👉', hint: 'darf + st',                            example: 'Du darfst hier parken.',        exampleEn: 'You may park here.' },
      { de: 'ich soll',  en: 'I should',           emoji: '🟥', hint: '⚠ NO vowel change · soll (not "sull")', example: 'Was soll ich machen?',         exampleEn: 'What should I do?' },
      { de: 'ich mag',   en: 'I like',             emoji: '🟨', hint: 'mögen → mag (ö→a) · no -e',            example: 'Ich mag Schokolade.',           exampleEn: 'I like chocolate.' },

      // 🚫 PERMISSION / PROHIBITION (dürfen + nicht)
      { de: 'nicht dürfen', en: 'not be allowed / must not', emoji: '🚫', hint: '⚠ "darf nicht" = forbidden, NOT "don\'t have to"', example: 'Du darfst nicht rauchen.', exampleEn: 'You must not smoke.' },
      { de: 'Darf ich …?',  en: 'May I …?',         emoji: '🙋', hint: 'asking permission politely',          example: 'Darf ich das Fenster öffnen?',  exampleEn: 'May I open the window?' },

      // ☕ THE POLITENESS LADDER — café/restaurant ordering
      { de: 'Ich möchte …',        en: 'I would like … (basic polite)', emoji: '1️⃣', hint: 'the standard polite order',       example: 'Ich möchte einen Kaffee.',          exampleEn: 'I would like a coffee.' },
      { de: 'Ich möchte gerne …',  en: 'I would gladly like … (warmer)', emoji: '2️⃣', hint: 'gerne adds warmth',              example: 'Ich möchte gerne einen Kaffee.',    exampleEn: 'I\'d gladly have a coffee.' },
      { de: 'Ich hätte gerne …',   en: 'I would like to have … (most natural)', emoji: '⭐', hint: '⭐ THE restaurant phrase · hätte gerne', example: 'Ich hätte gerne einen Kaffee, bitte.', exampleEn: 'I\'d like a coffee, please.' },
      { de: 'bitte',               en: 'please',     emoji: '🙏', hint: 'add anywhere · always softens',       example: 'Einen Tee, bitte.',                 exampleEn: 'A tea, please.' },
      { de: 'bestellen',           en: 'to order',   emoji: '📝', hint: 'the café/restaurant verb',           example: 'Ich möchte bestellen.',             exampleEn: 'I would like to order.' },

      // 🧩 SANDWICH RULE (recap label)
      { de: 'Modal + Infinitiv', en: 'modal slot 2, infinitive at END', emoji: '🥪', hint: '🔁 Day 35 · same rule for all 6 modals', example: 'Ich darf heute früher gehen.', exampleEn: 'I may leave earlier today.' },
    ],
    grammar: [
      { rule: '⭐ THE SIX MODALS — what each one means',
        body:
          'Day 35 gave you three; here are the other three (+ möchten). Each has a distinct job:\n\n' +
          '  können  — can / ability        (Day 35)\n' +
          '  müssen  — must / obligation    (Day 35)\n' +
          '  wollen  — want / desire        (Day 35)\n' +
          '  dürfen  — be ALLOWED / permission   "Darf ich …?"\n' +
          '  sollen  — SHOULD / advice or instruction   "Du sollst …"\n' +
          '  mögen   — to LIKE (usually + a noun)   "Ich mag Kaffee."\n' +
          '  möchten — would LIKE (polite)   "Ich möchte …"\n\n' +
          'All seven follow the SAME sandwich rule: conjugated modal in slot 2, any second verb to the END as an infinitive.',
      },
      { rule: '⭐ THE SINGULAR VOWEL-CHANGE (and sollen\'s exception)',
        body:
          '           dürfen    sollen    mögen\n' +
          '  ich      darf      soll      mag       ← darf/mag change vowel; soll does NOT\n' +
          '  du       darfst    sollst    magst\n' +
          '  er/sie   darf      soll      mag       ← no -t\n' +
          '  wir      dürfen    sollen    mögen\n' +
          '  ihr      dürft     sollt     mögt\n' +
          '  sie/Sie  dürfen    sollen    mögen\n\n' +
          '🧠 dürfen (ü→a) and mögen (ö→a) change their vowel in the singular — but ⚠ sollen does NOT (ich soll, not "süll"). As always, ich = er/sie (no ending), and the plural = the infinitive.',
      },
      { rule: '⚠ dürfen vs müssen in the NEGATIVE — a key safety trap',
        body:
          'In the negative these two are NOT the same — getting it wrong can be dangerous:\n\n' +
          '  nicht dürfen  = MUST NOT / forbidden\n' +
          '     "Du darfst hier nicht rauchen." = You are NOT allowed to smoke here.\n' +
          '  nicht müssen  = don\'t HAVE to (but you may)\n' +
          '     "Du musst nicht kommen." = You don\'t have to come (optional).\n\n' +
          'So "darf nicht" = prohibition; "muss nicht" = no obligation. English "must not" maps to darf nicht, NOT muss nicht.',
      },
      { rule: '😍 mögen vs möchten — like vs would-like',
        body:
          'Same root, different jobs:\n\n' +
          '  mögen   = to LIKE something (a standing preference, usually + noun, no second verb):\n' +
          '            "Ich mag Kaffee." · "Magst du Pizza?"\n' +
          '  möchten = would LIKE (a polite request / wish, right now):\n' +
          '            "Ich möchte einen Kaffee." · "Ich möchte bezahlen."\n\n' +
          'Rule of thumb: mögen describes taste in general; möchten places an order or states a wish for now. (Grammatically möchten is the Konjunktiv II of mögen — the polite "would" form.)',
      },
      { rule: '☕ THE POLITENESS LADDER — ordering like a local',
        body:
          'Climb the ladder to sound natural in cafés, shops and offices:\n\n' +
          '  1. Ich möchte einen Kaffee.                  (basic polite)\n' +
          '  2. Ich möchte gerne einen Kaffee.            (warmer — "gladly")\n' +
          '  3. Ich möchte gerne einen Kaffee, bitte.     (very polite)\n' +
          '  4. Ich möchte einen Kaffee mit Milch, bitte. (specifying)\n' +
          '  5. Ich hätte gerne einen Kaffee mit Milch.   (⭐ most natural in restaurants)\n\n' +
          '"Ich hätte gerne …" (lit. "I would have gladly") is what waiters hear most. Add "bitte" anywhere — it always softens. AVOID "Ich will …" with strangers — it sounds demanding.\n\n' +
          'Bonus — den vs einen: "Ich möchte EINEN Fisch" = any fish (you choose); "Ich möchte DEN Fisch" = the specific fish (pointing at the menu). Both correct — meaning shifts.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 2 INTERACTIVE MATCHES — modal→meaning · politeness ladder
      { type: 'match',
        pairs: [
          { de: 'dürfen',  en: '✅ be allowed (permission)' },
          { de: 'sollen',  en: '📋 should (advice)' },
          { de: 'mögen',   en: '😍 to like (a thing)' },
          { de: 'möchten', en: '🙏 would like (polite)' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'Ich will einen Kaffee.',          en: '😠 demanding (avoid)' },
          { de: 'Ich möchte einen Kaffee.',         en: '🙂 basic polite' },
          { de: 'Ich möchte gerne einen Kaffee.',   en: '😊 warmer' },
          { de: 'Ich hätte gerne einen Kaffee, bitte.', en: '⭐ most natural' },
        ],
      },

      // 📊 3 CONJUGATION TABLES (preserved — dürfen / sollen / mögen)
      conjEx('dürfen', 'be allowed'),
      conjEx('sollen', 'should'),
      conjEx('mögen', 'to like'),

      // 🧰 5 MODAL fill-blanks (right singular form)
      { type: 'fill-blank', sentence: 'Ich __ ein Bier, bitte. (would like)',        answer: 'möchte' },
      { type: 'fill-blank', sentence: 'Du __ hier nicht rauchen. (be allowed, neg.)', answer: 'darfst' },
      { type: 'fill-blank', sentence: 'Du __ mehr schlafen. (should)',               answer: 'sollst' },
      { type: 'fill-blank', sentence: 'Ich __ Schokolade sehr. (like)',              answer: 'mag' },
      { type: 'fill-blank', sentence: '__ ich das Fenster öffnen? (May I …?)',       answer: 'Darf' },

      // ☕ 4 POLITENESS-LADDER fill-blanks (preserved + extended)
      { type: 'fill-blank', sentence: 'Ich möchte __ einen Kaffee bestellen. (gladly)', answer: 'gerne' },
      { type: 'fill-blank', sentence: 'Ich möchte einen Kaffee __ Milch, bitte. (with)', answer: 'mit' },
      { type: 'fill-blank', sentence: 'Ich __ gerne einen Kaffee mit Milch. (most natural restaurant phrasing)', answer: 'hätte', hint: '"hätte gerne" = "would like to have"' },
      { type: 'fill-blank', sentence: 'Soften any request: add "__" at the end.',   answer: 'bitte' },

      // ⚠ 3 TRAP MCQs (dürfen-nicht vs müssen-nicht · sollen-no-vowel · mögen-vs-möchten)
      { type: 'multiple-choice', q: '⚠ "You must not smoke here." (prohibition) =',
        options: ['Du musst hier nicht rauchen.','Du darfst hier nicht rauchen.','Du sollst hier rauchen.','Du magst hier nicht rauchen.'],
        answer: 'Du darfst hier nicht rauchen.',
        explain: '"must not" = darf nicht (forbidden). "muss nicht" would mean "don\'t have to".' },
      { type: 'multiple-choice', q: '⚠ 1st-person of sollen: "Ich ___ mehr lernen."',
        options: ['sull','söll','soll','sölle'], answer: 'soll',
        explain: 'sollen does NOT change its vowel → ich soll.' },
      { type: 'multiple-choice', q: 'Standing preference for a thing: "Ich ___ Pizza." (I like pizza)',
        options: ['möchte','will','mag','soll'], answer: 'mag',
        explain: 'mögen = to like a thing in general; möchten = would like right now.' },

      // 💬 1 restaurant order MCQ (preserved)
      { type: 'multiple-choice', q: 'Most natural restaurant order:',
        options: ['Ich will einen Kaffee.', 'Gib mir einen Kaffee.', 'Ich hätte gerne einen Kaffee, bitte.', 'Kaffee jetzt!'],
        answer: 'Ich hätte gerne einen Kaffee, bitte.' },

      // 💬 Mini dialogue — permission + advice + ordering
      { type: 'dialogue', lines: [
        { speaker: 'Gast',    de: 'Entschuldigung, darf ich hier sitzen?',          en: 'Excuse me, may I sit here?' },
        { speaker: 'Kellner', de: 'Natürlich! Was möchten Sie bestellen?',          en: 'Of course! What would you like to order?' },
        { speaker: 'Gast',    de: 'Ich hätte gerne einen Kaffee mit Milch, bitte.', en: 'I\'d like a coffee with milk, please.' },
        { speaker: 'Kellner', de: 'Möchten Sie auch etwas essen?',                  en: 'Would you also like something to eat?' },
        { speaker: 'Gast',    de: 'Ich mag Kuchen — ich nehme ein Stück.',          en: 'I like cake — I\'ll take a piece.' },
        { speaker: 'Kellner', de: 'Sie sollten den Apfelkuchen probieren!',          en: 'You should try the apple cake!' },
      ]},
    ],
    quiz: [
      { type: 'multiple-choice', q: 'Polite restaurant order:',
        options: ['Ich will eine Pizza.','Ich möchte eine Pizza.','Ich muss eine Pizza.','Ich kann eine Pizza.'], answer: 'Ich möchte eine Pizza.' },
      { type: 'fill-blank', sentence: '"May I …?" → __ ich hier parken?', answer: 'Darf' },
      { type: 'multiple-choice', q: '⚠ "You must not smoke" (forbidden) =',
        options: ['Du musst nicht rauchen.','Du darfst nicht rauchen.','Du sollst rauchen.','Du magst nicht rauchen.'],
        answer: 'Du darfst nicht rauchen.', explain: 'darf nicht = forbidden; muss nicht = don\'t have to.' },
      { type: 'fill-blank', sentence: 'Advice: "Du __ mehr Wasser trinken." (should)', answer: 'sollst' },
      { type: 'multiple-choice', q: '"I like coffee" (general taste) =',
        options: ['Ich möchte Kaffee.','Ich mag Kaffee.','Ich soll Kaffee.','Ich darf Kaffee.'], answer: 'Ich mag Kaffee.' },
      { type: 'multiple-choice', q: '1st-person of sollen is…',
        options: ['sull','soll','söll','solle'], answer: 'soll', explain: 'sollen keeps its vowel.' },
      { type: 'fill-blank', sentence: 'Most natural: "Ich __ gerne einen Tee, bitte." (would like to have)', answer: 'hätte' },
    ],
  },

  {
    id: 39, week: 6,
    vocabLayout: 'spotlight',
    title: 'At the restaurant',
    titleDe: 'Im Restaurant',
    emoji: '🍽️',
    objective: 'Handle a full restaurant visit — arrive, read the menu, order politely, eat, and pay — combining articles, Akkusativ, modals and the politeness ladder.',
    intro: 'The big real-world scenario! A restaurant visit ties together everything: greetings, "Ich hätte gerne …" + Akkusativ, food & drink vocab, asking the price, and paying (bar oder mit Karte). Follow the arc — ankommen → bestellen → essen → bezahlen — and you can confidently eat out in German.',
    vocabulary: [
      // 🪑 ARRIVING
      { de: 'einen Tisch reservieren', en: 'to reserve a table', emoji: '🪑', hint: 'arrival · "Ich möchte einen Tisch reservieren"', example: 'Ich möchte einen Tisch für zwei.', exampleEn: 'I would like a table for two.' },
      { de: 'die Speisekarte', en: 'the menu',          emoji: '📋', hint: 'ask: "Die Speisekarte, bitte"',          example: 'Die Speisekarte, bitte.',        exampleEn: 'The menu, please.' },
      { de: 'der Kellner / die Kellnerin', en: 'waiter / waitress', emoji: '🧑‍🍳', hint: 'who serves you',           example: 'Der Kellner kommt gleich.',      exampleEn: 'The waiter is coming soon.' },

      // 📝 ORDERING — the polite phrases
      { de: 'Ich hätte gerne …', en: 'I would like … (most natural)', emoji: '⭐', hint: '🔁 Day 36 · THE restaurant phrase', example: 'Ich hätte gerne eine Pizza.', exampleEn: 'I would like a pizza.' },
      { de: 'Ich möchte …',    en: 'I would like …',     emoji: '🙏', hint: 'polite order · + Akkusativ',           example: 'Ich möchte einen Kaffee.',       exampleEn: 'I would like a coffee.' },
      { de: 'bestellen',       en: 'to order',           emoji: '✍️', hint: 'the ordering verb',                    example: 'Ich möchte bestellen.',          exampleEn: 'I would like to order.' },
      { de: 'Noch etwas?',     en: 'Anything else?',     emoji: '➕', hint: 'waiter\'s question',                    example: 'Noch etwas? — Nein, danke.',     exampleEn: 'Anything else? — No, thanks.' },
      { de: 'als Vorspeise / Hauptgericht', en: 'as a starter / main course', emoji: '🍲', hint: 'menu sections',     example: 'Als Hauptgericht nehme ich Fisch.', exampleEn: 'As a main I\'ll have fish.' },

      // 🍽️ FOOD
      { de: 'die Suppe',       en: 'soup',               emoji: '🍲', hint: 'fem · eine Suppe',                     example: 'Ich nehme eine Suppe.',          exampleEn: 'I\'ll have a soup.' },
      { de: 'der Salat',       en: 'salad',              emoji: '🥗', hint: 'masc · einen Salat (Akk!)',            example: 'Ich möchte einen Salat.',        exampleEn: 'I would like a salad.' },
      { de: 'die Pizza',       en: 'pizza',              emoji: '🍕', hint: 'fem · eine Pizza',                     example: 'Die Pizza ist lecker.',          exampleEn: 'The pizza is delicious.' },
      { de: 'der Fisch',       en: 'fish',               emoji: '🐟', hint: 'masc · einen/den Fisch',              example: 'Ich nehme den Fisch.',           exampleEn: 'I\'ll have the fish.' },
      { de: 'das Fleisch',     en: 'meat',               emoji: '🥩', hint: 'neuter · das Fleisch',                example: 'Ich esse kein Fleisch.',         exampleEn: 'I don\'t eat meat.' },
      { de: 'der Nachtisch',   en: 'dessert',            emoji: '🍰', hint: 'masc · "als Nachtisch"',              example: 'Als Nachtisch möchte ich Kuchen.', exampleEn: 'For dessert I\'d like cake.' },

      // 🥤 DRINKS
      { de: 'das Wasser',      en: 'water',              emoji: '💧', hint: 'still/sparkling: ohne/mit Kohlensäure', example: 'Ein Wasser, bitte.',            exampleEn: 'A water, please.' },
      { de: 'der Kaffee',      en: 'coffee',             emoji: '☕', hint: 'masc · einen Kaffee (Akk!)',           example: 'Ich hätte gerne einen Kaffee.',  exampleEn: 'I would like a coffee.' },
      { de: 'das Bier',        en: 'beer',               emoji: '🍺', hint: 'neuter · ein Bier',                   example: 'Ein Bier, bitte.',               exampleEn: 'A beer, please.' },
      { de: 'der Wein',        en: 'wine',               emoji: '🍷', hint: 'masc · einen Wein',                   example: 'Ich möchte einen Rotwein.',      exampleEn: 'I would like a red wine.' },

      // 💳 PAYING
      { de: 'die Rechnung',    en: 'the bill',           emoji: '🧾', hint: '"Die Rechnung, bitte"',               example: 'Die Rechnung, bitte.',           exampleEn: 'The bill, please.' },
      { de: 'Zahlen, bitte.',  en: 'I\'d like to pay.',  emoji: '💶', hint: '⭐ the standard "check, please"',       example: 'Zahlen, bitte!',                 exampleEn: 'The bill, please!' },
      { de: 'Getrennt oder zusammen?', en: 'Separately or together?', emoji: '👥', hint: 'the waiter\'s paying question', example: 'Getrennt oder zusammen?', exampleEn: 'Separately or together?' },
      { de: 'Stimmt so.',      en: 'Keep the change.',   emoji: '🪙', hint: '🔁 Day 19 · tipping phrase',            example: 'Das stimmt so, danke.',          exampleEn: 'Keep the change, thanks.' },
      { de: 'lecker',          en: 'delicious',          emoji: '😋', hint: 'compliment the food',                  example: 'Das Essen ist sehr lecker!',     exampleEn: 'The food is very delicious!' },
      { de: 'Guten Appetit!',  en: 'Enjoy your meal!',   emoji: '🍴', hint: 'said before eating',                  example: 'Guten Appetit!',                 exampleEn: 'Enjoy your meal!' },
    ],
    grammar: [
      { rule: '⭐ THE RESTAURANT ARC — arrive → order → eat → pay',
        body:
          'A typical visit follows four steps. Learn one phrase for each and you\'re covered:\n\n' +
          '  🪑 ARRIVE:  "Einen Tisch für zwei, bitte." · "Die Speisekarte, bitte."\n' +
          '  📝 ORDER:   "Ich hätte gerne …" / "Ich möchte … bestellen."\n' +
          '  🍽️ EAT:     "Guten Appetit!" · "Das ist lecker."\n' +
          '  💳 PAY:     "Zahlen, bitte." / "Die Rechnung, bitte." · "Stimmt so."\n\n' +
          'The waiter\'s lines to recognise: "Was möchten Sie?" (what would you like?) · "Noch etwas?" (anything else?) · "Getrennt oder zusammen?" (separately or together?).',
      },
      { rule: '⭐ ORDERING = möchte / hätte gerne + AKKUSATIV',
        body:
          'Whatever you order is a direct object → Akkusativ. Masculine flips to einen/den; fem/neuter stay:\n\n' +
          '  Ich hätte gerne EINEN Kaffee.   (m → einen)\n' +
          '  Ich möchte EINEN Salat.          (m → einen)\n' +
          '  Ich hätte gerne EINE Pizza.      (f → eine)\n' +
          '  Ich möchte EIN Wasser.           (n → ein)\n\n' +
          '⚠ The masculine trap bites here: "einen Kaffee", "einen Salat", "einen Wein" — NOT "ein Kaffee". "Ich hätte gerne …" is the most natural restaurant opener (Day 36 ladder).',
      },
      { rule: '💳 PAYING — the phrases and the tip',
        body:
          'To pay, get the waiter\'s attention and say:\n\n' +
          '  "Zahlen, bitte."         — I\'d like to pay. (most common)\n' +
          '  "Die Rechnung, bitte."   — The bill, please.\n\n' +
          'The waiter may ask "Getrennt oder zusammen?" (separately or together?). Tipping: round up and say the total you want to pay, or just "Stimmt so" (keep the change). Cash or card: "Bar oder mit Karte?" → "Mit Karte, bitte."',
      },
      { rule: '🍽️ MENU SECTIONS & "kein" for diets',
        body:
          'A German menu (die Speisekarte) is organised into:\n\n' +
          '  die Vorspeise   — starter\n' +
          '  das Hauptgericht — main course\n' +
          '  der Nachtisch   — dessert\n' +
          '  die Getränke    — drinks\n\n' +
          'Say what you DON\'T eat with kein (the Akkusativ negative article): "Ich esse KEIN Fleisch" (no meat), "Ich trinke KEINEN Alkohol" (no alcohol — masc → keinen). "Ich bin Vegetarier(in)" = I\'m vegetarian.',
      },
      { rule: '🚦 PITFALLS — restaurant traps',
        body:
          '• Order in the Akkusativ: masc → einen (einen Kaffee/Salat/Wein), not "ein".\n' +
          '• "Ich hätte gerne …" / "Ich möchte …" — avoid blunt "Ich will …" with the waiter.\n' +
          '• "Zahlen, bitte" or "Die Rechnung, bitte" — not "Ich will Geld geben".\n' +
          '• "kein" for foods you don\'t eat: "kein Fleisch" (n), "keinen Alkohol" (m).\n' +
          '• "lecker" describes food/taste; "schön" is for things/places — don\'t mix.\n' +
          '• "Guten Appetit!" is said BEFORE eating, by anyone at the table.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — arc step · food/drink → emoji · waiter line → meaning
      { type: 'match',
        pairs: [
          { de: 'Die Speisekarte, bitte.', en: '🪑 arriving' },
          { de: 'Ich hätte gerne …',       en: '📝 ordering' },
          { de: 'Guten Appetit!',          en: '🍽️ eating' },
          { de: 'Zahlen, bitte.',          en: '💳 paying' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'die Suppe',   en: '🍲 soup' },
          { de: 'der Salat',   en: '🥗 salad' },
          { de: 'der Fisch',   en: '🐟 fish' },
          { de: 'der Kaffee',  en: '☕ coffee' },
          { de: 'das Bier',    en: '🍺 beer' },
          { de: 'der Nachtisch', en: '🍰 dessert' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'Was möchten Sie?',          en: 'What would you like?' },
          { de: 'Noch etwas?',                en: 'Anything else?' },
          { de: 'Getrennt oder zusammen?',    en: 'Separately or together?' },
          { de: 'Stimmt so.',                 en: 'Keep the change.' },
        ],
      },

      // ⭐ 3 ORDERING + Akkusativ fill-blanks (the masc trap)
      { type: 'fill-blank', sentence: 'Ich __ einen Kaffee, bitte. (would like)', answer: 'möchte' },
      { type: 'fill-blank', sentence: 'Akk masc: "Ich hätte gerne __ Salat." (a)', answer: 'einen' },
      { type: 'fill-blank', sentence: 'Akk neuter: "Ich möchte __ Wasser." (a)',  answer: 'ein' },

      // 🍽️ Full restaurant dialogue (preserved + extended)
      { type: 'dialogue', lines: [
        { speaker: 'Kellner', de: 'Guten Tag! Möchten Sie die Speisekarte?',   en: 'Good day! Would you like the menu?' },
        { speaker: 'Gast',    de: 'Ja, bitte. … Ich hätte gerne eine Pizza und ein Wasser.', en: 'Yes, please. … I\'d like a pizza and a water.' },
        { speaker: 'Kellner', de: 'Sehr gerne. Noch etwas?',                   en: 'Gladly. Anything else?' },
        { speaker: 'Gast',    de: 'Als Nachtisch möchte ich einen Kuchen.',    en: 'For dessert I\'d like a cake.' },
        { speaker: 'Kellner', de: 'Guten Appetit!',                            en: 'Enjoy your meal!' },
        { speaker: 'Gast',    de: 'Danke. … Das war lecker. Zahlen, bitte.',   en: 'Thanks. … That was delicious. The bill, please.' },
        { speaker: 'Kellner', de: 'Getrennt oder zusammen? Das macht zwölf Euro fünfzig.', en: 'Separately or together? That\'s twelve euros fifty.' },
        { speaker: 'Gast',    de: 'Zusammen, mit Karte. Stimmt so.',           en: 'Together, by card. Keep the change.' },
      ]},

      // 📝 Restaurant translation challenge (preserved)
      { type: 'fill-blank', sentence: '"I come from India and work in a company." → Ich __ aus Indien und arbeite in einer Firma.', answer: 'komme' },
      { type: 'fill-blank', sentence: '"I would like to order a coffee with milk." → Ich möchte einen Kaffee __ Milch bestellen.', answer: 'mit' },
      { type: 'fill-blank', sentence: '"I see the waiter and I speak with him." → Ich sehe den Kellner und ich __ mit ihm.', answer: 'spreche' },
      { type: 'fill-blank', sentence: '"I must work today, but I want to eat in the restaurant." → Ich muss heute arbeiten, __ ich will im Restaurant essen.', answer: 'aber' },
      { type: 'fill-blank', sentence: '"I would like a table, please." → Ich __ gerne einen Tisch, bitte.', answer: 'hätte' },
      { type: 'fill-blank', sentence: '"How much does that cost?" → Wie viel __ das?', answer: 'kostet' },
      { type: 'fill-blank', sentence: '"I would like to pay, please." → Ich möchte __, bitte.', answer: 'zahlen' },
      { type: 'fill-blank', sentence: '"I read the menu and I order a soup." → Ich lese die Speisekarte und ich __ eine Suppe.', answer: 'bestelle' },

      // ⚠ 2 DIET / PHRASE MCQs
      { type: 'multiple-choice', q: '⚠ "I don\'t eat meat." (Fleisch = neuter)',
        options: ['Ich esse nicht Fleisch.','Ich esse kein Fleisch.','Ich esse keinen Fleisch.','Ich esse keine Fleisch.'],
        answer: 'Ich esse kein Fleisch.',
        explain: 'Use kein for nouns; neuter Fleisch → kein.' },
      { type: 'multiple-choice', q: 'When is "Guten Appetit!" said?',
        options: ['when paying','before eating','when leaving','when ordering'], answer: 'before eating' },
    ],
    quiz: [
      { type: 'multiple-choice', q: 'How do you ask for the bill?',
        options: ['Was kostet das?','Wo ist die Toilette?','Zahlen, bitte.','Guten Appetit!'], answer: 'Zahlen, bitte.' },
      { type: 'fill-blank', sentence: 'Order politely: "Ich __ gerne einen Kaffee." (would like to have)', answer: 'hätte' },
      { type: 'fill-blank', sentence: 'Akk masc: "Ich möchte __ Salat." (a)', answer: 'einen' },
      { type: 'multiple-choice', q: '⚠ "I don\'t drink alcohol." (Alkohol = masc)',
        options: ['Ich trinke kein Alkohol.','Ich trinke keinen Alkohol.','Ich trinke nicht Alkohol.','Ich trinke keine Alkohol.'],
        answer: 'Ich trinke keinen Alkohol.', explain: 'masc kein → keinen.' },
      { type: 'multiple-choice', q: 'The waiter asks "Getrennt oder zusammen?" — it means…',
        options: ['Cash or card?','Starter or main?','Separately or together?','Here or to go?'], answer: 'Separately or together?' },
      { type: 'fill-blank', sentence: 'Compliment the food: "Das Essen ist sehr __." (delicious)', answer: 'lecker' },
      { type: 'multiple-choice', q: 'Most natural way to order:',
        options: ['Gib mir eine Pizza.','Ich will eine Pizza.','Ich hätte gerne eine Pizza.','Pizza!'], answer: 'Ich hätte gerne eine Pizza.' },
    ],
  },

  {
    id: 40, week: 6,
    vocabLayout: 'spotlight',
    title: 'Shopping',
    titleDe: 'Einkaufen',
    emoji: '🛒',
    objective: 'Navigate any shop — browse, ask price and size, try things on, decide, and pay — combining numbers, Akkusativ and the polite phrases.',
    intro: 'Shopping ties together numbers/prices (Days 18-19), Akkusativ (what you buy), and polite requests. Follow the arc — browse → ask price & size → try on → decide → pay — with the right words for clothes shops AND supermarkets, plus the polite "Ich suche …" / "Kann ich … anprobieren?" phrases.',
    vocabulary: [
      // 🏬 PLACES & PEOPLE
      { de: 'das Geschäft',    en: 'shop / store',     emoji: '🏬', hint: 'general shop · also der Laden',          example: 'Das Geschäft ist um die Ecke.',  exampleEn: 'The shop is around the corner.' },
      { de: 'der Supermarkt',  en: 'supermarket',      emoji: '🛒', hint: 'groceries · masc',                      example: 'Ich gehe in den Supermarkt.',    exampleEn: 'I am going to the supermarket.' },
      { de: 'der Verkäufer / die Verkäuferin', en: 'salesperson', emoji: '🧑‍💼', hint: 'who serves you',           example: 'Der Verkäufer ist nett.',        exampleEn: 'The salesperson is nice.' },
      { de: 'die Kasse',       en: 'the till / checkout', emoji: '💳', hint: 'where you pay · "an der Kasse"',       example: 'Bitte zahlen Sie an der Kasse.', exampleEn: 'Please pay at the checkout.' },

      // 🔎 BROWSING / ASKING — the polite phrases
      { de: 'Ich suche …',     en: 'I\'m looking for …', emoji: '🔎', hint: '⭐ the browsing opener · + Akkusativ', example: 'Ich suche eine Hose.',           exampleEn: 'I\'m looking for trousers.' },
      { de: 'Ich schaue nur.', en: 'I\'m just looking.', emoji: '👀', hint: 'polite brush-off to "Kann ich helfen?"', example: 'Danke, ich schaue nur.',        exampleEn: 'Thanks, I\'m just looking.' },
      { de: 'Haben Sie …?',    en: 'Do you have …?',   emoji: '🙋', hint: 'asking availability · + Akkusativ',     example: 'Haben Sie das in Blau?',         exampleEn: 'Do you have this in blue?' },
      { de: 'anprobieren',     en: 'to try on ★',      emoji: '👕', hint: '★ separable · "Kann ich … anprobieren?"', example: 'Kann ich die Hose anprobieren?', exampleEn: 'Can I try on the trousers?' },

      // 👕 CLOTHES
      { de: 'die Hose',        en: 'trousers',         emoji: '👖', hint: 'fem (singular in German!) · eine Hose', example: 'Die Hose ist zu groß.',          exampleEn: 'The trousers are too big.' },
      { de: 'das T-Shirt',     en: 't-shirt',          emoji: '👕', hint: 'neuter · ein T-Shirt',                 example: 'Ich kaufe ein T-Shirt.',         exampleEn: 'I am buying a t-shirt.' },
      { de: 'das Kleid',       en: 'dress',            emoji: '👗', hint: 'neuter · ein Kleid',                   example: 'Das Kleid ist schön.',           exampleEn: 'The dress is beautiful.' },
      { de: 'die Schuhe',      en: 'shoes (pl)',       emoji: '👟', hint: 'plural · die Schuhe',                  example: 'Die Schuhe sind günstig.',       exampleEn: 'The shoes are good value.' },
      { de: 'die Größe',       en: 'the size',         emoji: '📏', hint: '"Welche Größe?" = what size?',          example: 'Welche Größe haben Sie?',        exampleEn: 'What size do you take?' },

      // 🥖 GROCERIES
      { de: 'das Brot',        en: 'bread',            emoji: '🍞', hint: 'neuter · das Brot',                    example: 'Ich kaufe ein Brot.',            exampleEn: 'I am buying a bread (loaf).' },
      { de: 'die Milch',       en: 'milk',             emoji: '🥛', hint: 'fem · die Milch',                      example: 'Die Milch kostet einen Euro.',   exampleEn: 'The milk costs one euro.' },
      { de: 'der Apfel',       en: 'apple',            emoji: '🍎', hint: 'masc · einen Apfel (Akk!) · pl Äpfel',  example: 'Ich nehme einen Apfel.',         exampleEn: 'I\'ll take an apple.' },
      { de: 'das Obst',        en: 'fruit',            emoji: '🍇', hint: 'neuter · uncountable · das Obst',       example: 'Obst ist gesund.',               exampleEn: 'Fruit is healthy.' },

      // 💶 PRICE & DECISION (recap Day 19 register)
      { de: 'teuer',           en: 'expensive',        emoji: '💸', hint: '🔁 Day 19 · neutral',                  example: 'Das ist zu teuer.',              exampleEn: 'That is too expensive.' },
      { de: 'günstig',         en: 'good value',       emoji: '👍', hint: '🔁 Day 19 · polite "cheap"',           example: 'Die Schuhe sind günstig.',       exampleEn: 'The shoes are good value.' },
      { de: 'im Angebot',      en: 'on sale',          emoji: '🏷️', hint: '🔁 Day 19 · "on offer"',               example: 'Heute ist alles im Angebot.',    exampleEn: 'Today everything is on sale.' },
      { de: 'Ich nehme …',     en: 'I\'ll take …',     emoji: '✅', hint: '⭐ the decision phrase · + Akkusativ',  example: 'Gut, ich nehme das T-Shirt.',    exampleEn: 'OK, I\'ll take the t-shirt.' },
      { de: 'Wie viel kostet …?', en: 'How much is …?', emoji: '💶', hint: '🔁 Day 18-19 · the price question',   example: 'Wie viel kostet das Kleid?',     exampleEn: 'How much is the dress?' },
    ],
    grammar: [
      { rule: '⭐ THE SHOPPING ARC — browse → ask → try → decide → pay',
        body:
          'A shop visit follows five steps — one phrase each:\n\n' +
          '  🔎 BROWSE: "Ich suche eine Hose." / "Danke, ich schaue nur."\n' +
          '  ❓ ASK:    "Haben Sie das in Größe M?" · "Wie viel kostet das?"\n' +
          '  👕 TRY:    "Kann ich das anprobieren?"\n' +
          '  ✅ DECIDE: "Gut, ich nehme es." / "Das ist zu teuer."\n' +
          '  💳 PAY:    "An der Kasse, bitte." · "Bar oder mit Karte?"\n\n' +
          'The salesperson\'s opener: "Kann ich Ihnen helfen?" (Can I help you?) → reply "Ja, ich suche …" or "Danke, ich schaue nur."',
      },
      { rule: '⭐ BUYING = kaufen / nehmen / suchen + AKKUSATIV',
        body:
          'What you buy, take or look for is a direct object → Akkusativ. Masculine flips to einen/den:\n\n' +
          '  Ich kaufe EINEN Apfel.    (m → einen)\n' +
          '  Ich nehme DEN Pullover.   (m → den)\n' +
          '  Ich suche EINE Hose.      (f → eine)\n' +
          '  Ich kaufe EIN T-Shirt.    (n → ein)\n' +
          '  Ich nehme DIE Schuhe.     (pl → die)\n\n' +
          '⚠ "der Apfel" → "einen Apfel"; "der Pullover" → "den Pullover". The masculine trap again — fem/neuter/plural stay unchanged.',
      },
      { rule: '📏 SIZES & "in" + colour',
        body:
          'Asking about size and colour:\n\n' +
          '  "Welche Größe haben Sie?"   — What size do you take?\n' +
          '  "Ich habe Größe 40."        — I\'m a size 40.\n' +
          '  "Haben Sie das in Blau?"    — Do you have this in blue?\n' +
          '  "Haben Sie das eine Nummer größer / kleiner?" — a size bigger/smaller?\n\n' +
          'Fit words: "zu groß" (too big) · "zu klein" (too small) · "Es passt" (it fits) · "Es passt nicht" (it doesn\'t fit).',
      },
      { rule: '💶 PRICE & THE billig/günstig REGISTER (recap)',
        body:
          'Asking & reacting to prices (Day 18-19):\n\n' +
          '  "Wie viel kostet das?" / "Was kostet das?"\n' +
          '  "Das ist (zu) teuer."     — that\'s (too) expensive\n' +
          '  "Das ist günstig."        — that\'s good value (polite)\n' +
          '  "Das ist im Angebot."     — that\'s on sale\n\n' +
          '⚠ Prefer günstig over billig — "billig" can imply cheap QUALITY. To say it\'s too much: "Das ist mir zu teuer."',
      },
      { rule: '🚦 PITFALLS — shopping traps',
        body:
          '• Buy in the Akkusativ: masc → einen/den (einen Apfel, den Pullover).\n' +
          '• "die Hose" is SINGULAR in German (trousers = eine Hose), but "die Schuhe" is plural.\n' +
          '• anprobieren is separable: "Ich probiere die Hose an" / "Kann ich … anprobieren?"\n' +
          '• günstig (good value) is politer than billig (can imply poor quality).\n' +
          '• Pay "an der Kasse" (Dativ — location); "in den Supermarkt" gehen (Akk — movement).\n' +
          '• "Ich nehme …" (I\'ll take it) is the natural decision phrase, not "Ich will es kaufen".',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — arc step · clothes/grocery → emoji · phrase → meaning
      { type: 'match',
        pairs: [
          { de: 'Ich suche eine Hose.',     en: '🔎 browse' },
          { de: 'Wie viel kostet das?',     en: '❓ ask price' },
          { de: 'Kann ich das anprobieren?', en: '👕 try on' },
          { de: 'Ich nehme es.',            en: '✅ decide' },
          { de: 'An der Kasse, bitte.',     en: '💳 pay' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'die Hose',    en: '👖 trousers' },
          { de: 'das T-Shirt', en: '👕 t-shirt' },
          { de: 'die Schuhe',  en: '👟 shoes' },
          { de: 'das Brot',    en: '🍞 bread' },
          { de: 'die Milch',   en: '🥛 milk' },
          { de: 'der Apfel',   en: '🍎 apple' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'teuer',       en: '💸 expensive' },
          { de: 'günstig',     en: '👍 good value' },
          { de: 'im Angebot',  en: '🏷️ on sale' },
          { de: 'die Größe',   en: '📏 size' },
        ],
      },

      // 🛒 4 BUYING + Akkusativ fill-blanks (the masc trap)
      { type: 'fill-blank', sentence: 'Ich kaufe __ Apfel. (an, masc.)',          answer: 'einen' },
      { type: 'fill-blank', sentence: 'Ich nehme __ Pullover. (the, masc.)',      answer: 'den' },
      { type: 'fill-blank', sentence: 'Ich suche __ Hose. (a, fem.)',             answer: 'eine' },
      { type: 'fill-blank', sentence: 'Ich kaufe __ T-Shirt. (a, neuter)',        answer: 'ein' },

      // 💶 3 PRICE / PHRASE fill-blanks
      { type: 'fill-blank', sentence: 'Wie viel __ die Milch? (cost)',            answer: 'kostet' },
      { type: 'fill-blank', sentence: 'Try on (separable): "Kann ich die Hose __?" (anprobieren)', answer: 'anprobieren' },
      { type: 'fill-blank', sentence: 'Decide: "Gut, ich __ das Kleid." (take)',  answer: 'nehme' },

      // ⚠ 3 TRAP / REGISTER MCQs
      { type: 'multiple-choice', q: 'Which means cheap (good value, polite)?',
        options: ['teuer','günstig','lecker','schnell'], answer: 'günstig',
        explain: 'günstig = good value; billig can imply poor quality.' },
      { type: 'multiple-choice', q: '⚠ "I\'ll take the apple." (der Apfel)',
        options: ['Ich nehme der Apfel.','Ich nehme den Apfel.','Ich nehme dem Apfel.','Ich nehme ein Apfel.'],
        answer: 'Ich nehme den Apfel.',
        explain: 'nehmen → Akkusativ; masc der → den.' },
      { type: 'multiple-choice', q: 'Polite reply to "Kann ich Ihnen helfen?" when browsing:',
        options: ['Ich will kaufen.','Danke, ich schaue nur.','Gib mir das.','Nein.'],
        answer: 'Danke, ich schaue nur.' },

      // 💬 Full shopping dialogue — browse → size → price → decide → pay
      { type: 'dialogue', lines: [
        { speaker: 'Verkäufer', de: 'Guten Tag! Kann ich Ihnen helfen?',          en: 'Good day! Can I help you?' },
        { speaker: 'Kunde',     de: 'Ja, ich suche ein T-Shirt in Blau.',          en: 'Yes, I\'m looking for a t-shirt in blue.' },
        { speaker: 'Verkäufer', de: 'Welche Größe haben Sie?',                     en: 'What size do you take?' },
        { speaker: 'Kunde',     de: 'Größe M. Kann ich es anprobieren?',           en: 'Size M. Can I try it on?' },
        { speaker: 'Verkäufer', de: 'Natürlich. … Es passt gut! Es kostet zwanzig Euro.', en: 'Of course. … It fits well! It costs twenty euros.' },
        { speaker: 'Kunde',     de: 'Das ist günstig. Gut, ich nehme es.',         en: 'That\'s good value. OK, I\'ll take it.' },
        { speaker: 'Verkäufer', de: 'Sehr gerne. Zahlen Sie bar oder mit Karte?',  en: 'Gladly. Are you paying cash or by card?' },
        { speaker: 'Kunde',     de: 'Mit Karte, bitte.',                           en: 'By card, please.' },
      ]},
    ],
    quiz: [
      { type: 'multiple-choice', q: 'Which means cheap?',
        options: ['teuer','billig','lecker','schnell'], answer: 'billig' },
      { type: 'fill-blank', sentence: 'Akk masc: "Ich kaufe __ Apfel." (an)', answer: 'einen' },
      { type: 'fill-blank', sentence: 'Decide: "Ich __ das T-Shirt." (take)', answer: 'nehme' },
      { type: 'multiple-choice', q: 'Polite "good value" (not "cheap quality"):',
        options: ['billig','teuer','günstig','schlecht'], answer: 'günstig' },
      { type: 'fill-blank', sentence: 'Try on (separable): "Kann ich die Schuhe __?"', answer: 'anprobieren' },
      { type: 'multiple-choice', q: '"die Hose" (trousers) in German is…',
        options: ['always plural','singular','neuter','uncountable'], answer: 'singular',
        explain: 'eine Hose = one pair of trousers (singular); die Schuhe is plural.' },
      { type: 'fill-blank', sentence: 'Ask the price: "Wie viel __ das Kleid?"', answer: 'kostet' },
    ],
  },

  {
    id: 42, week: 6,
    vocabLayout: 'spotlight',
    title: 'Negation: nicht & kein',
    titleDe: 'Verneinung',
    emoji: '🚫',
    objective: 'Negate anything correctly — choose kein (for nouns with ein/no article) vs nicht (for everything else), decline kein like ein, and place nicht in the right spot.',
    intro: 'German has TWO ways to say "not". The 5-second rule: if the thing you\'re negating is a noun that would take ein/eine (or no article), use kein; for everything else — verbs, adjectives, names, specific der/die/das nouns — use nicht. Then kein declines exactly like ein, and nicht has its own position rules. Master both and you can negate any sentence.',
    vocabulary: [
      // 🚫 THE TWO NEGATORS
      { de: 'nicht',  en: 'not',                emoji: '❌', hint: '⭐ negates verbs, adjectives, names, der/die/das nouns', example: 'Ich arbeite heute nicht.',   exampleEn: 'I am not working today.' },
      { de: 'kein',   en: 'no / not a (m/n)',   emoji: '🚫', hint: '⭐ negates ein-nouns · declines like ein',          example: 'Ich habe kein Auto.',        exampleEn: 'I have no car.' },

      // 🔢 THE KEIN DECLENSION — all four genders (Akkusativ)
      { de: 'keinen', en: 'no … (masc. Akk.)',  emoji: '🟦', hint: '⚠ masc Akk → keinen (like einen)',    example: 'Ich habe keinen Hund.',      exampleEn: 'I have no dog.' },
      { de: 'keine (f)', en: 'no … (feminine)', emoji: '🟥', hint: 'fem → keine',                          example: 'Ich habe keine Zeit.',       exampleEn: 'I have no time.' },
      { de: 'kein (n)',  en: 'no … (neuter)',   emoji: '🟩', hint: 'neuter → kein (no ending)',           example: 'Ich trinke kein Bier.',      exampleEn: 'I drink no beer.' },
      { de: 'keine (pl)', en: 'no … (plural)',  emoji: '🟨', hint: 'plural → keine',                       example: 'Ich habe keine Freunde.',    exampleEn: 'I have no friends.' },
      { de: 'keinem', en: 'no … (m/n Dativ)',   emoji: '🅿️', hint: 'Dativ → keinem (like einem)',         example: 'Ich helfe keinem Kind.',     exampleEn: 'I help no child.' },

      // ✅ NICHT IN ACTION — what it negates
      { de: 'nicht (verb)',     en: 'negate a verb',       emoji: '🏃', hint: 'goes near the END · "arbeite … nicht"', example: 'Ich arbeite nicht.',      exampleEn: 'I do not work.' },
      { de: 'nicht (adjective)', en: 'negate an adjective', emoji: '😐', hint: 'goes BEFORE the adjective',           example: 'Das Buch ist nicht gut.',  exampleEn: 'The book is not good.' },
      { de: 'nicht (specific noun)', en: 'negate a der/die/das noun', emoji: '👉', hint: 'definite noun → nicht, NOT kein', example: 'Ich kaufe das Buch nicht.', exampleEn: 'I am not buying the book.' },
      { de: 'nicht (name/place)', en: 'negate a name/place', emoji: '🗺️', hint: 'proper nouns → nicht',             example: 'Ich wohne nicht in Berlin.', exampleEn: 'I don\'t live in Berlin.' },

      // 🔁 ANSWER PARTICLES (negation recap)
      { de: 'nein',   en: 'no (answer)',        emoji: '⛔', hint: '🔁 Day 16 · answer to a question',     example: 'Bist du müde? — Nein.',      exampleEn: 'Are you tired? — No.' },
      { de: 'doch',   en: 'yes! (contradicting a negative)', emoji: '🔄', hint: '🔁 Day 16 · contradicts a nicht/kein question', example: 'Hast du kein Auto? — Doch!', exampleEn: 'Have you no car? — Yes I do!' },
      { de: 'gar nicht', en: 'not at all',      emoji: '🚷', hint: 'reinforced nicht',                     example: 'Das gefällt mir gar nicht.', exampleEn: 'I don\'t like that at all.' },
      { de: 'nichts', en: 'nothing',            emoji: '🕳️', hint: '🔁 Day 38 · "nothing" (pronoun)',      example: 'Ich verstehe nichts.',       exampleEn: 'I understand nothing.' },
      { de: 'noch nicht', en: 'not yet',        emoji: '⏳', hint: 'time-negation phrase',                example: 'Ich bin noch nicht fertig.', exampleEn: 'I am not finished yet.' },
      { de: 'nicht mehr', en: 'no longer / not anymore', emoji: '🔚', hint: 'time-negation phrase',        example: 'Ich rauche nicht mehr.',     exampleEn: 'I don\'t smoke anymore.' },
    ],
    grammar: [
      { rule: '⭐ THE 5-SECOND DECISION — kein or nicht?',
        body:
          'Ask ONE question: is the thing you\'re negating a noun that has ein/eine OR no article?\n\n' +
          '  YES → use kein:\n' +
          '     "Ich habe ein Auto."  → "Ich habe KEIN Auto."\n' +
          '     "Ich trinke Kaffee."  → "Ich trinke KEINEN Kaffee."  (no article → still kein)\n\n' +
          '  NO → use nicht (verbs, adjectives, names, places, and der/die/das nouns):\n' +
          '     "Ich arbeite."         → "Ich arbeite NICHT."\n' +
          '     "Das ist gut."         → "Das ist NICHT gut."\n' +
          '     "Ich kaufe DAS Buch."  → "Ich kaufe das Buch NICHT."  (specific → nicht)\n\n' +
          '🧠 Rule of thumb: ein/no-article → kein; der/die/das or not-a-noun → nicht.',
      },
      { rule: '⭐ kein DECLINES EXACTLY LIKE ein (+ a plural)',
        body:
          'kein takes the same endings as ein — and unlike ein, it HAS a plural:\n\n' +
          '            masc.     fem.     neut.    plural\n' +
          '  Nom.      kein      keine    kein     keine\n' +
          '  Akk.      keinen    keine    kein     keine\n' +
          '  Dat.      keinem    keiner   keinem   keinen +(-n)\n\n' +
          '  "Ich habe KEINEN Hund."   (m Akk → keinen)\n' +
          '  "Ich habe KEINE Zeit."    (f → keine)\n' +
          '  "Ich trinke KEIN Bier."   (n → kein)\n' +
          '  "Ich habe KEINE Freunde." (pl → keine)\n\n' +
          '🧠 If you know einen/eine/ein/einem, you already know keinen/keine/kein/keinem — just add "k-".',
      },
      { rule: '⭐ WHERE DOES "nicht" GO? — position rules',
        body:
          'nicht sits in different spots depending on WHAT it negates:\n\n' +
          '  • Whole sentence / the verb → at the END:\n' +
          '     "Ich arbeite heute NICHT."\n' +
          '  • BEFORE an adjective, adverb or place:\n' +
          '     "Das ist NICHT gut." · "Ich wohne NICHT in Berlin."\n' +
          '  • BEFORE a separable prefix / infinitive at the end:\n' +
          '     "Ich rufe dich NICHT an." · "Ich kann NICHT kommen."\n\n' +
          'General guide: nicht comes as late as possible, but right BEFORE the specific element it negates.',
      },
      { rule: '⚠ kein vs "nicht ein" — never say "nicht ein"',
        body:
          'A classic beginner error: negating an ein-noun with "nicht ein". German contracts this into kein:\n\n' +
          '  "Ich habe nicht ein Auto." ✗\n' +
          '  "Ich habe kein Auto."       ✓\n\n' +
          '  "Ich habe nicht eine Idee." ✗\n' +
          '  "Ich habe keine Idee."       ✓\n\n' +
          'Whenever you\'re tempted to write "nicht ein/eine", merge it into kein/keine instead.',
      },
      { rule: '🔄 NEGATIVE QUESTIONS → answer with DOCH',
        body:
          'When someone asks a NEGATIVE question (with nicht or kein) and you want to contradict it, answer "Doch!" not "Ja!" (Day 16):\n\n' +
          '  "Hast du KEIN Auto?"  — Doch! (= yes, I DO have one)\n' +
          '  "Bist du NICHT müde?" — Doch! (= yes, I am)\n\n' +
          'A plain agreement uses nein: "Hast du kein Auto?" — "Nein." (= correct, I don\'t). Useful time-negators: noch nicht (not yet), nicht mehr (not anymore), gar nicht (not at all).',
      },
      { rule: '🚦 PITFALLS — negation traps',
        body:
          '• ein-noun or no-article noun → kein (kein/keinen/keine/kein).\n' +
          '• der/die/das (specific) noun → nicht ("Ich kaufe das Buch nicht").\n' +
          '• Verb / adjective / name / place → nicht.\n' +
          '• NEVER "nicht ein/eine" → always kein/keine.\n' +
          '• kein masc Akk → keinen ("Ich habe keinen Hund").\n' +
          '• Contradict a negative question with DOCH, not Ja.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — kein-or-nicht trigger · kein endings · negation phrases
      { type: 'match',
        pairs: [
          { de: 'ein Auto (→ negate)',      en: '🚫 kein' },
          { de: 'Kaffee, no article (→ negate)', en: '🚫 kein' },
          { de: 'das Buch (specific →)',     en: '❌ nicht' },
          { de: 'arbeiten (verb →)',         en: '❌ nicht' },
          { de: 'gut (adjective →)',          en: '❌ nicht' },
          { de: 'in Berlin (place →)',        en: '❌ nicht' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'masc. Akk (kein + Hund)',  en: 'keinen' },
          { de: 'fem. (kein + Zeit)',        en: 'keine' },
          { de: 'neuter (kein + Bier)',      en: 'kein' },
          { de: 'plural (kein + Freunde)',   en: 'keine' },
          { de: 'masc. Dativ (kein + Kind)', en: 'keinem' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'gar nicht',  en: 'not at all' },
          { de: 'noch nicht', en: 'not yet' },
          { de: 'nicht mehr', en: 'no longer' },
          { de: 'nichts',     en: 'nothing' },
          { de: 'doch',       en: 'yes! (contradicting)' },
        ],
      },

      // 🚫 4 KEIN declension fill-blanks (all genders)
      { type: 'fill-blank', sentence: 'Ich habe __ Zeit. (no, fem.)',     answer: 'keine' },
      { type: 'fill-blank', sentence: 'Er trinkt __ Bier. (no, neuter)',  answer: 'kein' },
      { type: 'fill-blank', sentence: 'Ich habe __ Hund. (no, masc. Akk.)', answer: 'keinen' },
      { type: 'fill-blank', sentence: 'Ich habe __ Freunde. (no, plural)', answer: 'keine' },

      // ❌ 3 NICHT placement / use fill-blanks
      { type: 'fill-blank', sentence: 'Negate the verb: "Wir arbeiten heute __."', answer: 'nicht' },
      { type: 'fill-blank', sentence: 'Negate the adjective: "Das Buch ist __ gut."', answer: 'nicht' },
      { type: 'fill-blank', sentence: 'Specific noun: "Ich kaufe das Buch __."', answer: 'nicht' },

      // ⚖️ 4 KEIN-vs-NICHT decision MCQs
      { type: 'multiple-choice', q: 'Which is WRONG?',
        options: ['Ich habe keine Idee.','Ich habe nicht eine Idee.','Ich bin nicht müde.','Ich kaufe das Buch nicht.'],
        answer: 'Ich habe nicht eine Idee.',
        explain: 'Never "nicht eine" → use "keine Idee".' },
      { type: 'multiple-choice', q: '"I have no car." (ein Auto →)',
        options: ['Ich habe nicht ein Auto.','Ich habe kein Auto.','Ich habe nicht Auto.','Ich habe keinen Auto.'],
        answer: 'Ich habe kein Auto.',
        explain: 'ein-noun → kein; Auto is neuter → kein.' },
      { type: 'multiple-choice', q: '"I am not buying THE book." (das Buch, specific →)',
        options: ['Ich kaufe kein Buch.','Ich kaufe das Buch nicht.','Ich kaufe nicht das Buch.','Ich kaufe keinen Buch.'],
        answer: 'Ich kaufe das Buch nicht.',
        explain: 'Specific der/die/das noun → nicht (at the end).' },
      { type: 'multiple-choice', q: '"I don\'t live in Berlin." (place →)',
        options: ['Ich wohne kein Berlin.','Ich wohne nicht in Berlin.','Ich wohne in Berlin nicht kein.','Ich wohne keine Berlin.'],
        answer: 'Ich wohne nicht in Berlin.',
        explain: 'Place/name → nicht.' },

      // 🔄 2 DOCH / negative-question MCQs
      { type: 'multiple-choice', q: '"Hast du kein Auto?" — Yes, I DO. Pick the answer.',
        options: ['Ja!','Nein!','Doch!','Kein!'], answer: 'Doch!',
        explain: 'Contradict a negative (kein) question with Doch.' },
      { type: 'multiple-choice', q: '"not anymore" =',
        options: ['noch nicht','nicht mehr','gar nicht','nichts'], answer: 'nicht mehr' },

      // 📝 Restaurant kein dialog drills (preserved from slide 271)
      { type: 'fill-blank', sentence: 'Kellner: „Möchtest du einen Kaffee?" Du: „Nein, ich möchte __ Kaffee."', answer: 'keinen' },
      { type: 'fill-blank', sentence: 'Kellner: „Möchtest du Milch?" Du: „Nein, ich möchte __ Milch."', answer: 'keine' },
      { type: 'fill-blank', sentence: 'Kellner: „Möchtest du ein Glas Wasser?" Du: „Nein, ich möchte __ Glas Wasser."', answer: 'kein' },

      // 📝 Challenge fill-blanks (preserved from slide 272)
      { type: 'fill-blank', sentence: 'Ich habe __ Schwester. (kein, fem.)', answer: 'keine' },
      { type: 'fill-blank', sentence: 'Ich kaufe __ Brot. (kein, neuter)', answer: 'kein' },
      { type: 'fill-blank', sentence: 'Ich sehe __ Hund. (kein, masc. Akk.)', answer: 'keinen' },

      // 💬 Mini dialogue — kein + nicht + doch in conversation
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Hast du heute Zeit?',                   en: 'Do you have time today?' },
        { speaker: 'B', de: 'Nein, heute habe ich keine Zeit.',      en: 'No, today I have no time.' },
        { speaker: 'A', de: 'Trinkst du einen Kaffee?',              en: 'Will you have a coffee?' },
        { speaker: 'B', de: 'Nein danke, ich trinke keinen Kaffee.', en: 'No thanks, I don\'t drink coffee.' },
        { speaker: 'A', de: 'Magst du das Café hier nicht?',         en: 'Don\'t you like this café?' },
        { speaker: 'B', de: 'Doch! Aber ich bin noch nicht fertig mit der Arbeit.', en: 'Yes I do! But I\'m not done with work yet.' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Ich habe __ Hund. (no, masc. Akk.)', answer: 'keinen' },
      { type: 'multiple-choice', q: '"I have no time." (Zeit, fem.)',
        options: ['Ich habe nicht Zeit.','Ich habe keine Zeit.','Ich habe kein Zeit.','Ich habe nicht eine Zeit.'],
        answer: 'Ich habe keine Zeit.' },
      { type: 'fill-blank', sentence: 'Negate the verb: "Ich arbeite heute __."', answer: 'nicht' },
      { type: 'multiple-choice', q: '⚠ Which is WRONG?',
        options: ['Ich habe kein Auto.','Ich habe nicht ein Auto.','Das ist nicht gut.','Ich kaufe das Buch nicht.'],
        answer: 'Ich habe nicht ein Auto.', explain: 'Never "nicht ein" → kein Auto.' },
      { type: 'multiple-choice', q: 'Negate the SPECIFIC noun "das Buch":',
        options: ['Ich kaufe kein Buch.','Ich kaufe das Buch nicht.','Ich kaufe nicht ein Buch.','Ich kaufe keinen Buch.'],
        answer: 'Ich kaufe das Buch nicht.', explain: 'Specific der/die/das noun → nicht.' },
      { type: 'multiple-choice', q: '"Bist du nicht müde?" — Yes I am! →',
        options: ['Ja','Nein','Doch','Kein'], answer: 'Doch' },
      { type: 'fill-blank', sentence: 'Ich trinke __ Bier. (no, neuter)', answer: 'kein' },
    ],
  },

  {
    id: 41, week: 6,
    vocabLayout: 'spotlight',
    title: 'Travel',
    titleDe: 'Reisen',
    emoji: '✈️',
    objective: 'Travel confidently — take transport, buy a ticket, ask for and understand directions, and check into a hotel — reusing wo/wohin and the Dativ "mit dem Bus".',
    intro: 'The travel scenario pulls together transport vocab, the wo/wohin direction split (Day 17), Dativ prepositions ("mit dem Zug", Day 25) and polite questions. Follow the arc — get around → buy a ticket → ask directions → check in — and you can handle a German train station, airport or hotel.',
    vocabulary: [
      // 🚉 PLACES
      { de: 'der Bahnhof',     en: 'train station',    emoji: '🚉', hint: 'masc · "zum Bahnhof"',                 example: 'Wo ist der Bahnhof?',            exampleEn: 'Where is the train station?' },
      { de: 'der Flughafen',   en: 'airport',          emoji: '✈️', hint: 'masc · "zum Flughafen"',               example: 'Ich fahre zum Flughafen.',       exampleEn: 'I am going to the airport.' },
      { de: 'das Hotel',       en: 'hotel',            emoji: '🏨', hint: 'neuter · cognate',                     example: 'Das Hotel ist im Zentrum.',      exampleEn: 'The hotel is in the centre.' },
      { de: 'die Haltestelle', en: 'the (bus/tram) stop', emoji: '🚏', hint: 'where the bus stops',               example: 'Die Haltestelle ist dort.',      exampleEn: 'The stop is over there.' },

      // 🚌 TRANSPORT (all take "mit dem/der" — Dativ)
      { de: 'der Zug',         en: 'train',            emoji: '🚆', hint: 'mit dem Zug = by train',               example: 'Ich fahre mit dem Zug.',         exampleEn: 'I go by train.' },
      { de: 'der Bus',        en: 'bus',              emoji: '🚌', hint: 'mit dem Bus = by bus',                 example: 'Der Bus kommt um acht.',         exampleEn: 'The bus comes at eight.' },
      { de: 'die U-Bahn',      en: 'underground / metro', emoji: '🚇', hint: 'mit der U-Bahn (fem!)',             example: 'Ich nehme die U-Bahn.',          exampleEn: 'I take the metro.' },
      { de: 'das Flugzeug',    en: 'airplane',         emoji: '🛫', hint: 'mit dem Flugzeug = by plane',           example: 'Wir fliegen mit dem Flugzeug.',  exampleEn: 'We travel by plane.' },
      { de: 'das Taxi',        en: 'taxi',             emoji: '🚕', hint: 'mit dem Taxi',                         example: 'Ich nehme ein Taxi.',            exampleEn: 'I take a taxi.' },

      // 🎫 TICKETS & TRIP
      { de: 'die Fahrkarte',   en: 'ticket (train/bus)', emoji: '🎫', hint: 'also: das Ticket',                  example: 'Eine Fahrkarte nach Berlin, bitte.', exampleEn: 'A ticket to Berlin, please.' },
      { de: 'einfach / hin und zurück', en: 'one-way / return', emoji: '🔁', hint: 'ticket type at the counter',  example: 'Einfach oder hin und zurück?',   exampleEn: 'One-way or return?' },
      { de: 'der Bahnsteig / das Gleis', en: 'platform / track', emoji: '🛤️', hint: '"Gleis 7" = platform 7',     example: 'Der Zug fährt von Gleis 7.',     exampleEn: 'The train leaves from platform 7.' },
      { de: 'abfahren / ankommen', en: 'to depart / to arrive', emoji: '🕐', hint: '★ both separable · Day 12',    example: 'Der Zug fährt um neun ab.',      exampleEn: 'The train departs at nine.' },

      // 🧭 DIRECTIONS
      { de: 'links',           en: 'left',             emoji: '⬅️', hint: '"nach links" = to the left',           example: 'Gehen Sie nach links.',          exampleEn: 'Go to the left.' },
      { de: 'rechts',          en: 'right',            emoji: '➡️', hint: '"nach rechts" = to the right',          example: 'Dann nach rechts.',              exampleEn: 'Then to the right.' },
      { de: 'geradeaus',       en: 'straight on',      emoji: '⬆️', hint: 'keep going straight',                  example: 'Gehen Sie geradeaus.',           exampleEn: 'Go straight on.' },
      { de: 'die Ecke',        en: 'the corner',       emoji: '📐', hint: '"an der Ecke" = at the corner',         example: 'Es ist an der Ecke.',            exampleEn: 'It\'s at the corner.' },
      { de: 'in der Nähe',     en: 'nearby',           emoji: '📍', hint: '"in der Nähe" = close by',              example: 'Ist ein Hotel in der Nähe?',     exampleEn: 'Is there a hotel nearby?' },

      // 🧭 KEY QUESTIONS + 🏨 HOTEL
      { de: 'Wo ist …?',       en: 'Where is …?',      emoji: '❓', hint: '🔁 Day 17 · location → Dativ answer',   example: 'Wo ist das Hotel?',              exampleEn: 'Where is the hotel?' },
      { de: 'Wie komme ich zu …?', en: 'How do I get to …?', emoji: '🧭', hint: '⭐ the directions opener · zu + Dativ', example: 'Wie komme ich zum Bahnhof?', exampleEn: 'How do I get to the station?' },
      { de: 'ein Zimmer reservieren', en: 'to book a room', emoji: '🛏️', hint: 'hotel check-in',                   example: 'Ich möchte ein Zimmer reservieren.', exampleEn: 'I would like to book a room.' },
      { de: 'die Reise',       en: 'the trip / journey', emoji: '🧳', hint: 'reisen = to travel',                  example: 'Gute Reise!',                    exampleEn: 'Have a good trip!' },
    ],
    grammar: [
      { rule: '⭐ THE TRAVEL ARC — get around → ticket → directions → hotel',
        body:
          'A travel situation runs through four steps — one phrase each:\n\n' +
          '  🚌 GET AROUND: "Ich fahre mit dem Zug / Bus." (mit + Dativ)\n' +
          '  🎫 TICKET:     "Eine Fahrkarte nach Berlin, bitte. Hin und zurück."\n' +
          '  🧭 DIRECTIONS: "Wie komme ich zum Bahnhof?" → "Geradeaus, dann links."\n' +
          '  🏨 HOTEL:      "Ich möchte ein Zimmer reservieren."\n\n' +
          'Open any stranger-question with "Entschuldigung, …" and close with "Vielen Dank!".',
      },
      { rule: '⭐ TRANSPORT = "mit" + DATIV (by train, by bus)',
        body:
          'To say HOW you travel, use mit + the Dativ (Day 25). Masculine/neuter → dem, feminine → der:\n\n' +
          '  mit dem Zug      (by train · der → dem)\n' +
          '  mit dem Bus      (by bus)\n' +
          '  mit dem Flugzeug (by plane · das → dem)\n' +
          '  mit dem Taxi     (by taxi)\n' +
          '  mit der U-Bahn   (by metro · die → der)\n\n' +
          '⚠ Two exceptions on foot/bike: "zu Fuß" (on foot) and "mit dem Fahrrad" / "mit dem Rad". And "Ich fliege" (I fly) needs no "mit" at all.',
      },
      { rule: '🧭 wo? vs wohin? — and "Wie komme ich zu …?"',
        body:
          'Two ways to ask directions (Day 17 recap):\n\n' +
          '  Wo ist …?         — Where IS …? (location → answer in Dativ)\n' +
          '     "Wo ist der Bahnhof?" — "Er ist in der Nähe."\n' +
          '  Wie komme ich zu …? — How do I GET TO …? (movement → zu + Dativ)\n' +
          '     "Wie komme ich zum Bahnhof?" (zu + dem → zum)\n' +
          '     "Wie komme ich zur Apotheke?" (zu + der → zur)\n\n' +
          'Answers use direction words: "Gehen Sie geradeaus, dann nach links / rechts." · "Es ist an der Ecke / in der Nähe."',
      },
      { rule: '🎫 BUYING A TICKET — the counter phrases',
        body:
          'At the ticket counter (der Schalter) or machine:\n\n' +
          '  "Eine Fahrkarte nach Berlin, bitte."   (nach + city, no article)\n' +
          '  "Einfach oder hin und zurück?"          — one-way or return?\n' +
          '  "Von welchem Gleis fährt der Zug?"      — which platform?\n' +
          '  "Wann fährt der nächste Zug ab?"        — when does the next train leave? (abfahren — separable)\n\n' +
          'Remember "nach" for cities/countries (nach Berlin, nach Deutschland) and the separable verbs abfahren (depart) / ankommen (arrive): "Der Zug fährt um 9 Uhr AB."',
      },
      { rule: '🚦 PITFALLS — travel traps',
        body:
          '• Transport uses mit + Dativ: "mit dem Zug" (not "mit den Zug").\n' +
          '• "die U-Bahn" is feminine → "mit der U-Bahn".\n' +
          '• Cities/countries take "nach" (nach Berlin), not "zu".\n' +
          '• "Wie komme ich zu …?" uses zu + Dativ → zum (m/n) / zur (f).\n' +
          '• abfahren / ankommen are separable: prefix to the end ("Der Zug kommt um 10 an").\n' +
          '• "zu Fuß" = on foot (fixed phrase, no mit); "Ich fliege" needs no mit.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — arc step · transport → emoji · directions
      { type: 'match',
        pairs: [
          { de: 'mit dem Zug fahren',        en: '🚌 get around' },
          { de: 'Eine Fahrkarte, bitte.',     en: '🎫 buy a ticket' },
          { de: 'Wie komme ich zum Bahnhof?', en: '🧭 ask directions' },
          { de: 'ein Zimmer reservieren',     en: '🏨 hotel' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'der Zug',     en: '🚆 train' },
          { de: 'der Bus',     en: '🚌 bus' },
          { de: 'die U-Bahn',  en: '🚇 metro' },
          { de: 'das Flugzeug', en: '🛫 plane' },
          { de: 'das Taxi',    en: '🚕 taxi' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'links',     en: '⬅️ left' },
          { de: 'rechts',    en: '➡️ right' },
          { de: 'geradeaus', en: '⬆️ straight on' },
          { de: 'in der Nähe', en: '📍 nearby' },
        ],
      },

      // ⭐ 4 TRANSPORT = mit + Dativ fill-blanks
      { type: 'fill-blank', sentence: 'By train: "Ich fahre mit __ Zug." (the, masc.)',     answer: 'dem' },
      { type: 'fill-blank', sentence: 'By metro: "Ich fahre mit __ U-Bahn." (the, fem.)',   answer: 'der' },
      { type: 'fill-blank', sentence: 'By plane: "Wir fahren mit __ Flugzeug." (the, neut.)', answer: 'dem' },
      { type: 'fill-blank', sentence: 'To the station: "Wie komme ich __ Bahnhof?" (zu + dem)', answer: 'zum' },

      // 🎫 3 TICKET / DIRECTION fill-blanks
      { type: 'fill-blank', sentence: 'Ticket to Berlin: "Eine Fahrkarte __ Berlin, bitte." (to a city)', answer: 'nach' },
      { type: 'fill-blank', sentence: 'Separable: "Der Zug fährt um neun __." (abfahren — prefix)', answer: 'ab' },
      { type: 'fill-blank', sentence: 'Directions: "Gehen Sie __, dann nach links." (straight on)', answer: 'geradeaus' },

      // ⚠ 3 TRAP / CONCEPT MCQs
      { type: 'multiple-choice', q: '"Wo ist das Hotel?" — what does it ask?',
        options: ['How is the hotel?','Where is the hotel?','What is the hotel?','When is the hotel?'], answer: 'Where is the hotel?' },
      { type: 'multiple-choice', q: '⚠ "by metro" (die U-Bahn) =',
        options: ['mit dem U-Bahn','mit der U-Bahn','mit die U-Bahn','mit den U-Bahn'],
        answer: 'mit der U-Bahn', explain: 'U-Bahn is feminine → mit der.' },
      { type: 'multiple-choice', q: '⚠ "I\'m going to Berlin." — pick the preposition:',
        options: ['zu Berlin','nach Berlin','bei Berlin','in Berlin'],
        answer: 'nach Berlin', explain: 'Cities/countries take nach.' },

      // 💬 Directions + travel dialogue (preserved opener + extended)
      { type: 'dialogue', lines: [
        { speaker: 'Tourist', de: 'Entschuldigung, wie komme ich zum Bahnhof?', en: 'Excuse me, how do I get to the station?' },
        { speaker: 'Person',  de: 'Gehen Sie geradeaus und dann nach links.',   en: 'Go straight on and then to the left.' },
        { speaker: 'Tourist', de: 'Ist es weit?',                               en: 'Is it far?' },
        { speaker: 'Person',  de: 'Nein, es ist in der Nähe, an der Ecke.',     en: 'No, it\'s nearby, at the corner.' },
        { speaker: 'Tourist', de: 'Vielen Dank! Fährt ein Bus zum Flughafen?',  en: 'Many thanks! Does a bus go to the airport?' },
        { speaker: 'Person',  de: 'Ja, die Haltestelle ist dort. Gute Reise!',  en: 'Yes, the stop is over there. Have a good trip!' },
      ]},
    ],
    quiz: [
      { type: 'multiple-choice', q: '"Wo ist das Hotel?" — what does it ask?',
        options: ['How is the hotel?','Where is the hotel?','What is the hotel?','When is the hotel?'], answer: 'Where is the hotel?' },
      { type: 'fill-blank', sentence: 'By bus: "Ich fahre mit __ Bus." (the, masc.)', answer: 'dem' },
      { type: 'fill-blank', sentence: 'To the station: "Wie komme ich __ Bahnhof?" (zu + dem)', answer: 'zum' },
      { type: 'multiple-choice', q: '"by metro" (die U-Bahn) =',
        options: ['mit dem U-Bahn','mit der U-Bahn','mit die U-Bahn','mit U-Bahn'], answer: 'mit der U-Bahn' },
      { type: 'fill-blank', sentence: 'Ticket to a city: "Eine Fahrkarte __ Berlin, bitte."', answer: 'nach' },
      { type: 'multiple-choice', q: 'Which means "straight on"?',
        options: ['links','rechts','geradeaus','in der Nähe'], answer: 'geradeaus' },
      { type: 'fill-blank', sentence: 'Separable: "Der Zug kommt um zehn __." (ankommen — prefix)', answer: 'an' },
    ],
  },

  {
    id: 43, week: 7,
    vocabLayout: 'spotlight',
    title: 'Week 4-6 review',
    titleDe: 'Wiederholung Woche 4-6',
    emoji: '📚',
    objective: 'Prove you own three big weeks at once — the case system (Akk/Dat + pronouns), the modal sandwich rule, connectors, the real-life scenarios, and negation — before the past tenses begin.',
    intro: 'Milestone checkpoint! This pulls Weeks 4-6 together: 🟩 Akkusativ & 🅿️ Dativ (articles + pronouns + prepositions) → 🛠️ all six modals + the sandwich rule → 🔗 connectors (verb-stays / verb-to-end / inversion) → 🍽️🛒✈️ restaurant/shopping/travel → 🚫 negation (kein vs nicht). Scroll the keystones, read the recap cards, then aim for ≥ 80% on the mixed drills — that means you are ready for Week 7\'s past tenses.',
    vocabulary: [
      // 🟩🅿️ THE CASE SYSTEM (Week 4)
      { de: 'den / dem',        en: 'masc. Akk / Dat',          emoji: '🎭', hint: '🔁 W4 · der→den (Akk) →dem (Dat)',      example: 'Ich sehe den Mann. / Ich helfe dem Mann.', exampleEn: 'I see the man. / I help the man.' },
      { de: 'mich ↔ mir',       en: 'me: Akk ↔ Dat',            emoji: '⚖️', hint: '🔁 W4-5 · sehen mich / helfen mir',     example: 'Er sieht mich. / Er hilft mir.',  exampleEn: 'He sees me. / He helps me.' },
      { de: 'ihn ↔ ihm',        en: 'him: Akk ↔ Dat',           emoji: '⚖️', hint: '🔁 W4-5 · the killer pronoun pair',     example: 'Ich sehe ihn. / Ich helfe ihm.',  exampleEn: 'I see him. / I help him.' },
      { de: 'mit / bei / zu',   en: 'always-Dativ prepositions', emoji: '🅿️', hint: '🔁 W4 · + für/um/ohne always-Akk',     example: 'Ich fahre mit dem Bus.',          exampleEn: 'I go by bus.' },
      { de: 'in (Wo?/Wohin?)',  en: 'Wechsel: Dat / Akk',       emoji: '🔀', hint: '🔁 W5 · location→Dat, movement→Akk',    example: 'Ich bin in der Stadt. / Ich gehe in die Stadt.', exampleEn: 'I am in the city. / I go into the city.' },

      // 🔑 POSSESSIVES + ROUTINE (Week 5)
      { de: 'mein / dein / sein / ihr', en: 'possessives (decline like ein)', emoji: '👪', hint: '🔁 W5 · meinen/meine/meinem', example: 'Das ist mein Bruder.',          exampleEn: 'That is my brother.' },
      { de: 'morgens / abends', en: 'time-of-day adverbs',      emoji: '🌅', hint: '🔁 W5 · lead → V2 inversion',           example: 'Morgens trinke ich Kaffee.',      exampleEn: 'In the mornings I drink coffee.' },

      // 🛠️ MODALS (Week 5-6)
      { de: 'kann / muss / will', en: 'können/müssen/wollen',   emoji: '🛠️', hint: '🔁 W5 · ability/obligation/desire',    example: 'Ich muss heute arbeiten.',        exampleEn: 'I have to work today.' },
      { de: 'darf / soll / mag', en: 'dürfen/sollen/mögen',     emoji: '🧰', hint: '🔁 W6 · permission/advice/liking',      example: 'Darf ich hier rauchen?',          exampleEn: 'May I smoke here?' },
      { de: 'Modal + Infinitiv', en: 'the sandwich rule',       emoji: '🥪', hint: '🔁 W5-6 · modal slot 2, infinitive END', example: 'Ich kann heute Deutsch lernen.',  exampleEn: 'I can learn German today.' },
      { de: 'Ich hätte gerne …', en: 'I would like … (polite)', emoji: '🙏', hint: '🔁 W6 · café/restaurant',              example: 'Ich hätte gerne einen Kaffee.',   exampleEn: 'I would like a coffee.' },

      // 🔗 CONNECTORS (Week 6)
      { de: 'und / aber / denn', en: 'verb stays slot 2',       emoji: '🟢', hint: '🔁 W6 · coordinating',                 example: 'Ich gehe, denn ich bin müde.',    exampleEn: 'I am going, because I am tired.' },
      { de: 'weil / dass / wenn', en: 'verb to the END',        emoji: '🔴', hint: '🔁 W6 · subordinating',                example: 'Ich bleibe, weil es regnet.',     exampleEn: 'I stay because it is raining.' },
      { de: 'deshalb / dann',   en: 'V2 inversion',             emoji: '🟡', hint: '🔁 W6 · adverb-connectors',           example: 'Ich bin müde, deshalb gehe ich.', exampleEn: 'I am tired, so I am going.' },

      // 🍽️🛒✈️ SCENARIOS + 🚫 NEGATION (Week 6)
      { de: 'Zahlen, bitte.',   en: 'The bill, please.',        emoji: '🍽️', hint: '🔁 W6 · restaurant',                  example: 'Zahlen, bitte!',                  exampleEn: 'The bill, please!' },
      { de: 'Wie komme ich zu …?', en: 'How do I get to …?',    emoji: '✈️', hint: '🔁 W6 · travel · zu + Dativ',          example: 'Wie komme ich zum Bahnhof?',      exampleEn: 'How do I get to the station?' },
      { de: 'kein / nicht',     en: 'no/none vs not',           emoji: '🚫', hint: '🔁 W6 · ein-noun→kein, else→nicht',    example: 'Ich habe keine Zeit.',            exampleEn: 'I have no time.' },
    ],
    grammar: [
      { rule: '✅ Week 4 recap — the case system',
        body:
          '🟦 Nominativ (subject) · 🟩 Akkusativ (object) · 🅿️ Dativ (to/for whom).\n' +
          '  Articles:  der→den→dem · die→die→der · das→das→dem · die→die→den+n.\n' +
          '  Test: Wer? (Nom) · Wen? (Akk) · Wem? (Dat).\n' +
          '  Pronouns: ich→mich/mir · er→ihn/ihm · sie→sie/ihr.\n' +
          '  Prepositions: mit/bei/zu/von/nach/aus/seit/gegenüber → always Dativ.',
      },
      { rule: '✅ Week 5 recap — pronouns, prepositions, people',
        body:
          '👤 Dativ pronouns: mir·dir·ihm·ihr·uns·euch·ihnen·Ihnen.\n' +
          '🔀 Wechselpräpositionen (in·an·auf…): Wo? → Dativ · Wohin? → Akkusativ.\n' +
          '👪 Possessives (mein/dein/sein/ihr/unser/euer) decline like ein.\n' +
          '🌅 Daily routine: time-of-day leads → V2 inversion ("Morgens stehe ich auf").\n' +
          '🛠️ Modals I: können/müssen/wollen — modal slot 2, infinitive at the end.',
      },
      { rule: '✅ Week 6 recap — modals II, glue, scenarios, negation',
        body:
          '🧰 Modals II: dürfen (allowed) · sollen (should) · mögen (like) · möchten (polite).\n' +
          '🔗 Connectors: 🟢 und/aber/denn (no change) · 🔴 weil/dass/wenn (verb to END) · 🟡 deshalb/dann (V2 inversion).\n' +
          '🍽️🛒✈️ Scenarios: "Ich hätte gerne …" · "Wie komme ich zu …?" · "Zahlen, bitte."\n' +
          '🚫 Negation: ein-noun → kein (declines like ein); verb/adj/specific noun → nicht.',
      },
      { rule: '⭐ THE SANDWICH + V2 RULES (the word-order core)',
        body:
          'Two rules run through everything in these weeks:\n\n' +
          '  📍 V2: the conjugated verb is ALWAYS in slot 2. If time/place leads, the subject moves to slot 3.\n' +
          '     "Heute arbeite ich." · "Am Wochenende esse ich im Restaurant."\n\n' +
          '  🥪 SANDWICH: a modal (or separable stem) sits in slot 2, the infinitive/prefix flies to the END.\n' +
          '     "Ich will heute im Restaurant essen." · "Ich rufe dich heute an."',
      },
      { rule: '🎯 The 6 mistakes to never make again',
        body:
          '1. "Ich helfe ihn" ✗ → helfen=Dativ → "ihm." ✓\n' +
          '2. "mit den Kinder" ✗ → plural Dativ +n → "mit den Kindern." ✓\n' +
          '3. "Ich gehe in der Stadt" ✗ (movement) → "in die Stadt." ✓\n' +
          '4. "Wir heute wollen essen" ✗ → modal slot 2 → "Wir wollen heute essen." ✓\n' +
          '5. "Ich rufe an dich" ✗ → prefix to END → "Ich rufe dich an." ✓\n' +
          '6. "Ich habe nicht ein Auto" ✗ → "kein Auto." ✓',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — sweep cases, connectors, scenarios
      { type: 'match',
        pairs: [
          { de: 'Wer?',  en: '🟦 Nominativ (subject)' },
          { de: 'Wen?',  en: '🟩 Akkusativ (object)' },
          { de: 'Wem?',  en: '🅿️ Dativ (to whom)' },
          { de: 'mit / bei / zu', en: '🅿️ always Dativ' },
          { de: 'für / um / ohne', en: '🟩 always Akkusativ' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'und / aber / denn', en: '🟢 verb stays slot 2' },
          { de: 'weil / dass / wenn', en: '🔴 verb to the END' },
          { de: 'deshalb / dann',     en: '🟡 V2 inversion' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'Ich hätte gerne …',    en: '🍽️ restaurant order' },
          { de: 'Wie komme ich zu …?',  en: '✈️ asking directions' },
          { de: 'Ich suche …',          en: '🛒 shopping' },
          { de: 'Ich habe keine Zeit.', en: '🚫 negation' },
        ],
      },

      // 🟩🅿️ 3 case fill-blanks
      { type: 'fill-blank', sentence: 'Wir kaufen __ Brot. (the, neuter)',  answer: 'das' },
      { type: 'fill-blank', sentence: 'Akk vs Dat: "Ich helfe __ Mann." (the, masc. — helfen=Dativ)', answer: 'dem' },
      { type: 'fill-blank', sentence: 'Wechsel movement: "Ich gehe in __ Stadt." (the, fem. → Akk)', answer: 'die' },

      // 🛠️ 3 modal + negation fill-blanks
      { type: 'fill-blank', sentence: 'Ich __ heute arbeiten. (must)', answer: 'muss' },
      { type: 'fill-blank', sentence: 'Sie hat __ Zeit. (no, fem.)',   answer: 'keine' },
      { type: 'fill-blank', sentence: 'Pronoun: "Ich danke __." (you, formal)', answer: 'Ihnen' },

      // 🛠️ 2 concept MCQs (preserved)
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
    quiz: [
      { type: 'fill-blank', sentence: 'Akk vs Dat: "Ich helfe __ Mann." (the, masc. — helfen=Dativ)', answer: 'dem' },
      { type: 'fill-blank', sentence: 'Negation: "Ich habe __ Hund." (no, masc. Akk.)', answer: 'keinen' },
      { type: 'multiple-choice', q: 'Modal word order — which is correct?',
        options: ['Wir heute wollen essen.','Wir wollen heute essen.','Heute wir wollen essen.','Wir wollen essen heute.'],
        answer: 'Wir wollen heute essen.', explain: 'Modal in slot 2, infinitive at the end.' },
      { type: 'multiple-choice', q: 'After "weil", the verb goes…',
        options: ['to slot 1','to slot 2','to the END','nowhere'], answer: 'to the END' },
      { type: 'fill-blank', sentence: 'Wechsel movement: "Ich gehe in __ Stadt." (the, fem. → Akk)', answer: 'die' },
      { type: 'multiple-choice', q: 'Pronoun: "Ich sehe __." (him — Akkusativ)',
        options: ['ihm','ihn','er','ihr'], answer: 'ihn' },
      { type: 'multiple-choice', q: 'Polite restaurant order:',
        options: ['Ich will eine Pizza.','Ich hätte gerne eine Pizza.','Gib mir Pizza.','Pizza jetzt.'], answer: 'Ich hätte gerne eine Pizza.' },
    ],
  },

  /* ===================== WEEK 7: review + final ===================== */
  {
    id: 49, week: 8,
    vocabLayout: 'spotlight',
    title: 'Mega review · Say it back',
    titleDe: 'Großes Review · Mündlich',
    emoji: '🧠',
    objective: 'Recall every grammar pillar of the whole course aloud, then drill the high-frequency patterns one last time before the final exam.',
    intro: 'The grand recall! This is the everything-at-once checkpoint: 🔑 the course\'s grammar pillars as keystones → 📖 a master recap of all 8 weeks → 🗣️ 35 oral "say it back" prompts (say the answer aloud and self-grade) → ✍️ a written drill of the most-used patterns. The more you speak, the more it sticks. Aim to answer every oral prompt without peeking.',
    vocabulary: [
      // 🔑 THE COURSE PILLARS — one keystone per big idea
      { de: 'der/die/das',     en: 'the 3 genders + plural die', emoji: '🪪', hint: '🔁 W1 · learn the article WITH the noun', example: 'der Tisch · die Lampe · das Buch', exampleEn: 'the table · the lamp · the book' },
      { de: 'Verb in slot 2',  en: 'the V2 rule',               emoji: '📍', hint: '🔁 W2 · conjugated verb always position 2', example: 'Heute lerne ich Deutsch.',   exampleEn: 'Today I am learning German.' },
      { de: 'der → den → dem', en: 'Nom → Akk → Dat (masc.)',   emoji: '🎭', hint: '🔁 W4 · the case system in one row', example: 'Ich gebe dem Mann den Ball.', exampleEn: 'I give the man the ball.' },
      { de: 'mich / mir',      en: 'Akk / Dat pronouns',        emoji: '⚖️', hint: '🔁 W4-5 · sehen mich / helfen mir',  example: 'Er sieht mich. / Er hilft mir.', exampleEn: 'He sees me. / He helps me.' },
      { de: 'mit + Dativ',     en: 'preposition cases',         emoji: '🅿️', hint: '🔁 W4-6 · mit/bei/zu→Dat · für/um/ohne→Akk · Wechsel', example: 'Ich fahre mit dem Bus.', exampleEn: 'I go by bus.' },
      { de: 'Modal + Infinitiv', en: 'the sandwich rule',       emoji: '🥪', hint: '🔁 W5-6 · modal slot 2, infinitive END', example: 'Ich kann Deutsch sprechen.', exampleEn: 'I can speak German.' },
      { de: 'Präfix … ans Ende', en: 'separable verbs',         emoji: '🧩', hint: '🔁 W2 · prefix flies to the end',   example: 'Ich stehe um 7 Uhr auf.',    exampleEn: 'I get up at 7.' },
      { de: 'weil → Verb ans Ende', en: 'connectors',           emoji: '🔗', hint: '🔁 W6 · und/aber stay · weil/dass→end · deshalb→V2', example: 'Ich bleibe, weil es regnet.', exampleEn: 'I stay because it is raining.' },
      { de: 'haben/sein + Partizip II', en: 'the Perfekt (past)', emoji: '⏪', hint: '🔁 W7 · helper slot 2, participle END', example: 'Ich habe gelernt. / Ich bin gegangen.', exampleEn: 'I learned. / I went.' },
      { de: 'war / hatte',     en: 'Präteritum of sein/haben',  emoji: '📜', hint: '🔁 W7 · the spoken-past exceptions', example: 'Ich war müde. Ich hatte Zeit.', exampleEn: 'I was tired. I had time.' },
      { de: 'kein / nicht',    en: 'the two negators',          emoji: '🚫', hint: '🔁 W6 · ein-noun→kein, else→nicht', example: 'Ich habe keine Zeit.',       exampleEn: 'I have no time.' },
      { de: 'möchte / hätte gern', en: 'polite Konjunktiv II',  emoji: '🙏', hint: '🔁 W7 · would-like / would',        example: 'Ich hätte gern einen Kaffee.', exampleEn: 'I would like a coffee.' },
      { de: 'Komm! / Kommen Sie!', en: 'the Imperativ',         emoji: '📣', hint: '🔁 W7 · du / ihr / Sie commands',   example: 'Komm her! / Kommen Sie herein!', exampleEn: 'Come here! / Come in!' },
      { de: 'Ich hätte gern …', en: 'the politeness ladder',    emoji: '☕', hint: '🔁 W6 · order/request politely',     example: 'Ich hätte gern die Rechnung, bitte.', exampleEn: 'I would like the bill, please.' },
    ],
    grammar: [
      { rule: '📖 THE WHOLE COURSE ON ONE CARD — Weeks 1-7',
        body:
          '🔤 W1 Foundations: V→F, W→soft-V, Z→ts · numbers (flip: einundzwanzig) · pronouns · der/die/das · sein/haben/werden.\n' +
          '🧱 W2 Sentences: V2 rule (verb slot 2) · regular endings -e/-st/-t/-en · stem-changers · separable verbs (prefix to END) · TFP order · self-intro.\n' +
          '❓ W3 Questions: yes/no (verb first) · W-words · wo/wohin/woher · numbers to 1 000 000 · prices.\n' +
          '🎭 W4 Cases: Nom (Wer?) · Akk (Wen?, der→den) · Dat (Wem?, →dem) · Akk pronouns.\n' +
          '👤 W5 Pronouns & people: Dat pronouns · Wechsel (Wo?/Wohin?) · possessives · routine · modals I.\n' +
          '🧰 W6 Modals & glue: modals II · connectors (3 groups) · scenarios · negation (kein/nicht).\n' +
          '⏪ W7 Past & polite: Perfekt (haben/sein) · Präteritum (war/hatte) · Konjunktiv II · Imperativ.',
      },
      { rule: '⭐ THE 6 IRON RULES (never break these)',
        body:
          '1. Verb in SLOT 2 — even when time/place leads ("Heute lerne ich").\n' +
          '2. Capitalise EVERY noun, mid-sentence too ("Ich habe Hunger").\n' +
          '3. Modal/separable: the second piece flies to the END (infinitive / prefix).\n' +
          '4. The case follows the verb/preposition: helfen→Dativ, für→Akkusativ.\n' +
          '5. Perfekt = helper (haben/sein) in slot 2 + Partizip II at the END.\n' +
          '6. weil/dass send the verb to the END; und/aber/denn don\'t.',
      },
      { rule: '🎯 THE TOP 10 MISTAKES — a final checklist',
        body:
          '1. "Heute ich lerne" ✗ → "Heute lerne ich" ✓ (V2).\n' +
          '2. "Ich bin Hunger" ✗ → "Ich habe Hunger" ✓.\n' +
          '3. "Ich sehe der Mann" ✗ → "den Mann" ✓.\n' +
          '4. "Ich helfe den Mann" ✗ → "dem Mann" ✓ (Dativ verb).\n' +
          '5. "mit den Kinder" ✗ → "mit den Kindern" ✓ (plural Dativ +n).\n' +
          '6. "Ich gehe in der Stadt" (movement) ✗ → "in die Stadt" ✓.\n' +
          '7. "Ich will lernen Deutsch" ✗ → "Ich will Deutsch lernen" ✓.\n' +
          '8. "Ich habe nicht ein Auto" ✗ → "kein Auto" ✓.\n' +
          '9. "Ich habe gegangen" ✗ → "Ich bin gegangen" ✓ (motion → sein).\n' +
          '10. "Ich bin müde gewesen" (speech) ✗ → "Ich war müde" ✓ (Präteritum).',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
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
    quiz: [
      { type: 'multiple-choice', q: 'Where is the conjugated verb in a normal sentence?',
        options: ['slot 1','slot 2','at the END','anywhere'], answer: 'slot 2' },
      { type: 'fill-blank', sentence: 'Akk masc: "Ich sehe __ Mann." (the)', answer: 'den' },
      { type: 'fill-blank', sentence: '⚠ Dativ verb: "Ich helfe __ Mann." (the, masc.)', answer: 'dem' },
      { type: 'fill-blank', sentence: 'Perfekt (motion): "Ich __ nach Hause __." (gehen)', answer: 'bin gegangen' },
      { type: 'multiple-choice', q: 'Modal word order — which is correct?',
        options: ['Ich kann Deutsch lerne.','Ich kann Deutsch lernen.','Ich kann lernen Deutsch.','Ich Deutsch lernen kann.'],
        answer: 'Ich kann Deutsch lernen.', explain: 'Modal slot 2, infinitive at the END.' },
      { type: 'fill-blank', sentence: 'Negation: "Ich habe __ Zeit." (no, fem.)', answer: 'keine' },
      { type: 'multiple-choice', q: 'Polite café order:',
        options: ['Ich will einen Kaffee.','Ich hätte gern einen Kaffee.','Gib mir Kaffee.','Kaffee!'], answer: 'Ich hätte gern einen Kaffee.' },
    ],
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
        summary: 'Stem in slot 2, everything in the middle, prefix at the very end.',
        table: {
          head: ['slot 1', 'slot 2 (stem)', 'middle', 'end (prefix)'],
          rows: [
            ['Ich', { t: 'stehe', hl: true },  'um 7 Uhr',       { t: 'auf', hl: true }],
            ['Wir', { t: 'kaufen', hl: true }, 'am Samstag',     { t: 'ein', hl: true }],
            ['Er',  { t: 'ruft', hl: true },   'seine Freundin', { t: 'an', hl: true }],
            ['Ich', { t: 'hole', hl: true },   'dich am Bahnhof', { t: 'ab', hl: true }],
          ],
        },
        examples: [
          { de: 'Ich stehe um 7 Uhr auf.', en: 'I get up at 7.',       note: 'aufstehen splits: stehe … auf' },
          { de: 'Wir kaufen am Samstag ein.', en: 'We shop on Saturday.', note: 'einkaufen splits: kaufen … ein' },
        ],
        tip: 'The longer the sentence, the wider the sandwich.',
      },
      { rule: '🧩 Common separable prefixes — and their meanings',
        summary: 'Most separable prefixes are little German words in their own right.',
        table: {
          head: ['prefix', 'meaning', 'verbs'],
          rows: [
            ['auf-', 'up / open',    'aufstehen · aufmachen · aufwachen'],
            ['ein-', 'in / into',    'einkaufen · einladen · einsteigen'],
            ['aus-', 'out',          'ausgehen · ausfüllen · aussteigen'],
            ['ab-',  'off / away',   'abholen · abfahren'],
            ['an-',  'on / at',      'anrufen · anfangen · ankommen'],
            ['mit-', 'along / with', 'mitkommen · mitnehmen'],
            ['zu-',  'to / closed',  'zumachen · zuhören'],
            ['fern-','TV',           'fernsehen'],
          ],
        },
      },
      { rule: '⭐ Spot a separable verb — the 3-second test',
        summary: 'Stress on the prefix + a stand-alone prefix word = it separates.',
        bullets: [
          'STRESS — the prefix is stressed: AUFstehen, EINkaufen, ANrufen. (Non-separable: beSUchen, verSTEhen — stress on the stem.)',
          'PREFIX — separable prefixes (auf, an, mit, aus) are common little words. Non-separable ones (be-, ver-, ent-, er-, zer-, ge-) are not.',
        ],
        tip: 'Rule of thumb: if the prefix can stand alone as a German word, it usually separates.',
      },
      { rule: '⚠ With a modal verb, the prefix RE-GLUES',
        summary: 'After a modal, the separable verb goes to the end as ONE infinitive — no split.',
        examples: [
          { de: 'Ich stehe um 7 Uhr auf.',   en: 'I get up at 7.',         note: 'present → splits (stehe … auf)' },
          { de: 'Ich muss um 7 Uhr aufstehen.', en: 'I have to get up at 7.', note: 'modal → glued at the end (aufstehen)' },
          { de: 'Stehst du um 7 Uhr auf?',   en: 'Do you get up at 7?',    note: 'yes/no question → stem leads, prefix still at end' },
          { de: 'Ich rufe dich heute nicht an.', en: 'I am not calling you today.', note: 'negation → nicht right before the prefix' },
        ],
      },
      { rule: '🚦 Common pitfalls',
        summary: 'The three classic separable-verb mistakes.',
        examples: [
          { de: 'Ich stehe um 7 Uhr auf.',     en: 'I get up at 7.',          note: '✓ NOT "Ich aufstehe …" (prefix glued) and NOT "Ich stehe auf um 7 Uhr" (prefix not last)' },
          { de: 'Ich muss um 7 Uhr aufstehen.', en: 'I have to get up at 7.', note: '✓ infinitive at the very end after a modal' },
        ],
        warn: '"Ich aufstehe um 7 Uhr" ✗ and "Ich muss aufstehen um 7 Uhr" ✗ — the prefix/infinitive must land last.',
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
        { speaker: 'A', de: 'Ich rufe dich morgen früh an. Siehst du gerade fern?',    en: 'I will call you tomorrow morning. Are you watching TV right now?' },
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
      { rule: '⭐ The verb-first flip — yes/no questions in one rule',
        summary: 'To ask yes/no, move the conjugated verb to slot 1. Subject and verb just swap — no "do" helper.',
        table: {
          head: ['statement', 'yes/no question'],
          rows: [
            ['Du bist müde.',          { t: 'Bist du müde?', hl: true }],
            ['Sie hat Hunger.',        { t: 'Hat sie Hunger?', hl: true }],
            ['Wir wohnen in Berlin.',  { t: 'Wohnen wir in Berlin?', hl: true }],
            ['Er kommt aus Indien.',   { t: 'Kommt er aus Indien?', hl: true }],
            ['Sie sprechen Deutsch.',  { t: 'Sprechen Sie Deutsch?', hl: true }],
          ],
        },
        examples: [
          { de: 'Bist du müde?',        en: 'Are you tired?',       note: 'sein flips to slot 1' },
          { de: 'Sprichst du Deutsch?', en: 'Do you speak German?', note: 'main verb leads — no "do"' },
        ],
        tip: 'German never uses "do" as a helper — there is no "Tust du …?". The conjugated verb in slot 1 does all the work.',
      },
      { rule: '⭐ Three answer particles — ja · nein · doch',
        summary: 'ja answers a positive question; nein is any no; DOCH contradicts a NEGATIVE question.',
        table: {
          head: ['particle', 'use', 'example'],
          rows: [
            ['ja',                    'yes — to a positive question',              'Bist du müde? — Ja.'],
            ['nein',                  'no — to any question',                      'Bist du müde? — Nein.'],
            [{ t: 'doch', hl: true }, 'YES — contradicts a nicht/kein question',   'Bist du nicht müde? — Doch!'],
          ],
        },
        examples: [
          { de: 'Bist du nicht müde? — Doch!', en: 'Are you not tired? — Yes I am!',  note: 'nicht in the question → DOCH' },
          { de: 'Hast du kein Geld? — Doch!',  en: 'Do you have no money? — Yes I do!', note: 'kein in the question → DOCH' },
        ],
        warn: 'English has no single word for doch. Answering "ja" to a negative question confuses Germans — a nicht or kein in the question means reach for DOCH.',
      },
      { rule: '⚠ Separable verbs — the prefix STILL flies to the end',
        summary: 'In a question the stem leads (slot 1) but the prefix still lands at the very end.',
        table: {
          head: ['statement', 'yes/no question'],
          rows: [
            ['Du stehst um 7 Uhr auf.',    { t: 'Stehst du um 7 Uhr auf?', hl: true }],
            ['Wir kaufen am Samstag ein.', { t: 'Kaufen wir am Samstag ein?', hl: true }],
            ['Sie ruft mich heute an.',    { t: 'Ruft sie mich heute an?', hl: true }],
            ['Er fängt um 8 Uhr an.',      { t: 'Fängt er um 8 Uhr an?', hl: true }],
          ],
        },
        tip: 'Stem at the front, prefix at the back, everything else in the middle — the Day 12 sandwich still works.',
      },
      { rule: '⭐ Polite yes/no questions — möchten · können · mögen',
        summary: 'Three modal verbs make a yes/no question polite — ready-made phrases you can use now.',
        table: {
          head: ['ask', 'meaning', 'example'],
          rows: [
            ['Möchtest du …?', 'Would you like …? (invitation)', 'Möchtest du einen Kaffee?'],
            ['Möchten Sie …?', 'Would you like …? (formal)',     'Möchten Sie einen Tee?'],
            ['Kannst du …?',   'Can you …? (favour)',            'Kannst du mir helfen?'],
            ['Magst du …?',    'Do you like …?',                 'Magst du Pizza?'],
          ],
        },
        examples: [
          { de: 'Möchtest du einen Kaffee?', en: 'Would you like a coffee?', note: 'the politest invitation' },
        ],
        tip: '"Möchtest du …?" never offends. "Willst du …?" (do you want) sounds blunt — save it for close friends.',
      },
      { rule: '🚦 Answer menu — pick the right register',
        summary: 'Match the energy of the question, from enthusiastic yes to absolute no.',
        table: {
          head: ['register', 'answers'],
          rows: [
            ['Strong yes',  'Natürlich! · Klar! · Sicher!'],
            ['Neutral yes', 'Ja.'],
            ['Polite yes',  'Ja, gerne. · Ja, bitte.'],
            ['Hedged',      'Vielleicht. · Ich denke ja. · Ich glaube nicht.'],
            ['Neutral no',  'Nein.'],
            ['Polite no',   'Nein, danke. · Leider nicht.'],
            ['Strong no',   'Gar nicht. · Auf keinen Fall.'],
            [{ t: 'Contradict a "no"', hl: true }, { t: 'Doch!', hl: true }],
          ],
        },
        tip: 'In everyday speech Germans often reply with the particle alone ("Ja." / "Doch." / "Nein.") and trust context. The full sentence is polite but optional.',
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
    intro: 'A W-question starts with a question word in slot 1, then the verb in slot 2, then the subject and everything else. "Wo wohnst du? Wann kommst du?" The verb-2 rule from Day 9 still rules — the W-word just fills slot 1. One exception: when wer or was IS the subject ("Wer ist das?"), no extra subject follows.',
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
      { rule: '⭐ The W-question pattern — W-word · verb · subject · …',
        summary: 'Slot 1 = W-word, slot 2 = conjugated verb, then the subject and the rest. The Day 9 V2 rule still rules.',
        table: {
          head: ['slot 1 · W-word', 'slot 2 · verb', 'slot 3 · …'],
          rows: [
            ['Wer',      { t: 'ist', hl: true },    'das?'],
            ['Was',      { t: 'machst', hl: true }, 'du heute?'],
            ['Wo',       { t: 'wohnst', hl: true }, 'du?'],
            ['Wann',     { t: 'kommst', hl: true }, 'du nach Hause?'],
            ['Warum',    { t: 'lernst', hl: true }, 'du Deutsch?'],
            ['Wie viel', { t: 'kostet', hl: true }, 'das?'],
          ],
        },
        examples: [
          { de: 'Wo wohnst du?',   en: 'Where do you live?',   note: 'verb glued to slot 2' },
          { de: 'Wann kommst du?', en: 'When are you coming?', note: 'W-word, then verb, then subject' },
        ],
        tip: 'No "do" helper — German never says "Was tust du machen?". The conjugated verb does all the work.',
        warn: 'Subject-question exception: when wer or was IS the subject, it already fills slot 1 — no extra subject follows. "Wer ist das?", "Was passiert?", "Wie viel kostet das?".',
      },
      { rule: '⭐ ⚠ The wo-triple — wo · wohin · woher',
        summary: 'English "where" splits three ways in German, depending on movement.',
        table: {
          head: ['word', 'meaning', 'pairs with', 'example'],
          rows: [
            [{ t: 'wo', hl: true },    'where (AT, no movement)', 'in / an / auf · sein, wohnen',   'Wo wohnst du?'],
            [{ t: 'wohin', hl: true }, 'where TO (destination)',  'nach / zu / in · gehen, fahren', 'Wohin gehst du?'],
            [{ t: 'woher', hl: true }, 'where FROM (origin)',     'aus …',                          'Woher kommst du?'],
          ],
        },
        examples: [
          { de: 'Wohin gehst du? — Ich gehe nach Hause.',   en: 'Where are you going? — I am going home.', note: 'movement → wohin … nach' },
          { de: 'Woher kommst du? — Ich komme aus Indien.', en: 'Where are you from? — I come from India.', note: 'origin → woher … aus' },
        ],
        warn: 'Bare "Wo gehst du?" ✗ — a motion verb needs a direction. Use wohin/woher merged ("Wohin gehst du?", "Woher kommst du?") OR the very common split form "Wo gehst du hin?" / "Wo kommst du her?" ✓. What is wrong is wo with NO hin/her, not wo itself.',
      },
      { rule: '🔵 welcher — the gender-matched "which"',
        summary: 'welcher is the only W-word that changes shape — it copies the ending of the article it replaces.',
        table: {
          head: ['gender', 'article', 'which-form', 'example'],
          rows: [
            ['m',  'der', { t: 'welcher', hl: true }, 'Welcher Tisch ist neu?'],
            ['f',  'die', { t: 'welche', hl: true },  'Welche Tasche ist neu?'],
            ['n',  'das', { t: 'welches', hl: true }, 'Welches Buch liest du?'],
            ['pl', 'die', { t: 'welche', hl: true },  'Welche Bücher liest du?'],
          ],
        },
        tip: 'welcher rhymes with der · welches with das · welche with die. Same endings as the article — that is the whole rule.',
      },
      { rule: '⚠ was für vs welcher — kind vs which-specific',
        summary: 'welcher asks WHICH one from a known set; was für asks what KIND / type.',
        examples: [
          { de: 'Welches Buch liest du?',     en: 'Which book are you reading?',        note: 'welcher → pick one from a known set' },
          { de: 'Was für ein Buch liest du?', en: 'What kind of book are you reading?', note: 'was für → describe the type / genre' },
        ],
        tip: '"Was für" itself does not change; the "ein" inside it follows normal article rules. Use it when you want a description, not a choice.',
      },
      { rule: '🚦 Common pitfalls & spoken shortcuts',
        summary: 'The traps that trip up beginners — and the shortcuts natives actually use.',
        bullets: [
          'wer (WHO) ≠ was (WHAT): "Wer ist das?" for people, "Was ist das?" for things.',
          '"Wie heißt du?" is the natural way to ask a name — "Wie ist dein Name?" is correct but stiff.',
          'In casual speech "Wieso?" replaces "Warum?" all the time — same meaning.',
          '"Warum nicht?" is a one-word polite yes: Möchtest du …? — Warum nicht?',
          'The verb stays in slot 2 even after a long W-phrase: "Wie viel kostet das?" — wie viel is ONE unit in slot 1.',
          'German has no "do" helper: "Was machst du?" ✓, "Was tust du machen?" ✗.',
        ],
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
      { rule: '⭐ Big numbers — same Lego rule, more bricks',
        summary: 'multiplier·tausend + multiplier·hundert + units-UND-tens, all one word.',
        table: {
          head: ['number', 'Lego seams', 'one word'],
          rows: [
            ['1 234',  'eintausend + zweihundert + vierunddreißig',          { t: 'eintausendzweihundertvierunddreißig', hl: true }],
            ['9 876',  'neuntausend + achthundert + sechsundsiebzig',        { t: 'neuntausendachthundertsechsundsiebzig', hl: true }],
            ['24 499', 'vierundzwanzigtausend + vierhundert + neunundneunzig', { t: 'vierundzwanzigtausendvierhundertneunundneunzig', hl: true }],
          ],
        },
        tip: 'Chunk the digits from the right in 3s (24 499 → 24 | 499) and read each chunk with its label (tausend / hundert / —).',
        warn: 'The twist at 21 000+: the multiplier before "tausend" itself flips. 24 000 = vierundzwanzigtausend ✓ (not "zwanzigviertausend"); 73 000 = dreiundsiebzigtausend.',
      },
      { rule: '⭐ Million & Milliarde — the false-friend billion trap',
        summary: 'Million and Milliarde are feminine NOUNS, not suffixes — and Milliarde = the English billion.',
        table: {
          head: ['feature', 'rule', 'example'],
          rows: [
            ['gender',  'feminine → eine (not ein)',     'eine Million Euro'],
            ['spacing', 'separate, capitalised word',    'eine Million Euro'],
            ['plural',  'Millionen / Milliarden',        'drei Millionen Euro'],
          ],
        },
        examples: [
          { de: 'Eine Million Menschen leben hier.', en: 'One million people live here.', note: 'eine, not ein' },
          { de: 'Eine Milliarde Sterne.',            en: 'A billion stars.',              note: 'Milliarde = the English billion' },
        ],
        warn: 'False-friend trap: English BILLION (a thousand million) = German MILLIARDE; English TRILLION (a million million) = German BILLION. Use Milliarde for the English billion — getting it wrong is a factor of 1000.',
      },
      { rule: '⭐ Decimals & thousands — German swaps the . and ,',
        summary: 'German uses "," for decimals and "." for thousands — the opposite of English.',
        table: {
          head: ['German', 'English', 'note'],
          rows: [
            ['1.234,56 €', '1,234.56', 'separators swapped'],
            ['3,14',       '3.14',     'Pi'],
            ['1.000',      '1,000',    'thousands dot'],
          ],
        },
        examples: [
          { de: 'drei Komma eins vier',     en: '3.14 (three point one four)', note: 'spoken decimals use "Komma"' },
          { de: 'neun Euro neunundneunzig', en: '9.99 euros',                  note: 'price shortcut — "Cent" dropped' },
        ],
        tip: 'Written 12,50 € → spoken "zwölf Euro fünfzig" (Cent usually dropped); formal "zwölf Euro fünfzig Cent".',
      },
      { rule: '💶 Prices — ask, answer, pay',
        summary: 'The full checkout script — asking, answering and paying.',
        table: {
          head: ['stage', 'German', 'English'],
          rows: [
            ['ask',          'Wie viel kostet das?',      'How much is this?'],
            ['ask (formal)', 'Was ist der Preis?',        'What is the price?'],
            ['answer',       'Das macht 25 Euro fünfzig.', 'That comes to 25.50.'],
            ['pay',          'Bar oder mit Karte?',        'Cash or card?'],
            ['pay',          'Mit Karte, bitte.',          'Card, please.'],
          ],
        },
        tip: '"Stimmt so!" = "Keep the change!" — one of the most-used checkout phrases. "inkl. MwSt" (incl. VAT) is on every receipt.',
      },
      { rule: '🏷️ Describing prices — pick the right word (it is social!)',
        summary: 'teuer / billig / günstig is a register choice, not just translation.',
        table: {
          head: ['word', 'meaning', 'use it for'],
          rows: [
            ['teuer',                    'expensive',                    'a neutral observation'],
            [{ t: 'billig', hl: true },  'cheap (often = poor quality)', 'only when you mean shoddy'],
            [{ t: 'günstig', hl: true }, 'affordable / good value',      'the polite default'],
          ],
        },
        examples: [
          { de: 'Die Wohnung ist sehr günstig.', en: 'The apartment is very good value.', note: 'günstig = well-priced, polite' },
          { de: 'Die Tasche ist billig.',        en: 'The bag is cheap.',                 note: 'sounds dismissive — implies low quality' },
        ],
        bullets: [
          'im Angebot — on sale / on offer (the shop-window magic word).',
          'X % Rabatt — X % off (Rabatt = discount).',
          'reduziert — reduced ("alles reduziert").',
        ],
        warn: 'Do not say "kostet teuer" — it is "ist teuer" or "kostet viel". And do not call a gift "billig"; say "günstig" to stay polite.',
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
        summary: 'Yes/no flips, the doch particle, and W-questions.',
        bullets: [
          '❓ Yes/no question = conjugated verb to SLOT 1: "Du bist müde." → "Bist du müde?" (no "do" helper). Separable verb? the prefix STILL lands at the end: "Stehst du um 7 auf?".',
          '🔁 Answer particles: ja (yes) · nein (no) · DOCH (yes — to contradict a nicht/kein question). "Bist du nicht müde?" — Doch!',
          '🔍 W-question = W-word (slot 1) + verb (slot 2), then the subject and the rest: "Wo wohnst du?" · "Wann kommst du?". When wer/was IS the subject, no extra subject follows ("Wer ist das?").',
          '🔵 welcher / welche / welches matches the noun gender.',
        ],
      },
      { rule: '✅ Week 3 recap — the wo-triple',
        summary: 'English "where" splits three ways in German, by movement.',
        table: {
          head: ['word', 'meaning', 'verbs', 'example'],
          rows: [
            [{ t: 'wo', hl: true },    'where (AT, no movement)', 'sein, wohnen, bleiben',  'Wo ist der Bahnhof?'],
            [{ t: 'wohin', hl: true }, 'where TO (destination)',  'gehen, fahren, fliegen', 'Wohin gehst du?'],
            [{ t: 'woher', hl: true }, 'where FROM (origin)',     'pairs with aus …',       'Woher kommst du?'],
          ],
        },
        warn: 'A motion verb needs a direction: wohin/woher merged, or the common split form "Wo gehst du hin?" / "Wo kommst du her?". Only bare "Wo gehst du?" with no hin/her is wrong.',
      },
      { rule: '✅ Week 3 recap — numbers as Lego',
        summary: 'Every German number is Lego — biggest unit first, all one word.',
        bullets: [
          '🔢 0-12 unique · 13-19 = unit+zehn · 21-99 = units-UND-tens flip (einundzwanzig).',
          '🧮 3-digit: multiplier-hundert + flip → 365 = dreihundertfünfundsechzig.',
          '🔟 Thousands: multiplier-tausend (the multiplier itself flips at 21 000+ → vierundzwanzigtausend).',
          '🪙 eine Million / eine Milliarde — feminine, separate word, capital letter. ⚠ Milliarde = the English billion.',
          'Below a million it is all one word, no spaces (vierundzwanzigtausend). From eine Million up, the unit is a separate capitalized noun (eine Million dreihunderttausend). "und" lives ONLY inside the tens-units flip.',
        ],
      },
      { rule: '✅ Week 3 recap — prices & politeness',
        summary: 'Shop, pay and stay polite.',
        bullets: [
          '💶 Ask: "Wie viel kostet das?" / "Was macht das?" (at the checkout).',
          '💶 German money writes 1.234,56 € — "." for thousands, "," for decimals (the opposite of English).',
          '🏷️ Describe: teuer (expensive) · günstig (affordable — polite) · billig (cheap — often = poor quality!).',
          '💳 Pay: "Bar oder mit Karte?" · "Stimmt so!" (keep the change).',
          '🙏 Politeness: bitte · danke · Entschuldigung — open every stranger-question with Entschuldigung.',
        ],
      },
      { rule: '🎯 The 5 Week-3 mistakes to never make again',
        summary: 'The Week 3 errors to leave behind.',
        table: {
          head: ['✗ wrong', '✓ right', 'why'],
          rows: [
            ['Du kommst aus Berlin?',     { t: 'Kommst du aus Berlin?', hl: true }, 'yes/no needs the flip'],
            ['Bist du nicht müde? — Ja!', { t: '… — Doch!', hl: true },             'contradict a negative with doch'],
            ['Wo gehst du?',              { t: 'Wohin gehst du?', hl: true },        'movement needs wohin'],
            ['hundert und fünf',          { t: 'hundertfünf', hl: true },            'no und between hundreds & rest'],
            ['ein Million',               { t: 'eine Million', hl: true },           'Million is feminine'],
          ],
        },
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
    vocabLayout: 'spotlight',
    title: 'Hobbies & free time',
    titleDe: 'Hobbys & Freizeit',
    emoji: '🎮',
    objective: 'Talk about what you do for fun — build natural sentences with the right verb, frequency and preference words, and use spielen vs machen vs gehen correctly.',
    intro: 'You met the hobby vocab on Day 13 and the TFP word order there too. Today you turn it into real conversation: a big set of free-time verbs, the three "do a hobby" patterns (spielen + game · X machen · X-en gehen), the gerne/lieber/am liebsten preference ladder, and a 60-second free-time chat.',
    vocabulary: [
      // 🎮 THE NOUNS — free time itself
      { de: 'das Hobby',    en: 'hobby',         emoji: '🎯', hint: 'pl: die Hobbys',                  example: 'Mein Hobby ist Lesen.',        exampleEn: 'My hobby is reading.' },
      { de: 'die Freizeit', en: 'free time',     emoji: '🛋️', hint: '"in meiner Freizeit" = in my free time', example: 'In meiner Freizeit koche ich.', exampleEn: 'In my free time I cook.' },

      // ⚽ SPIELEN + game/sport/instrument
      { de: 'Fußball spielen', en: 'to play football', emoji: '⚽', hint: 'spielen + sport (no article)',  example: 'Ich spiele am Wochenende Fußball.', exampleEn: 'I play football at the weekend.' },
      { de: 'Tennis spielen',  en: 'to play tennis',   emoji: '🎾', hint: 'spielen + sport',               example: 'Wir spielen oft Tennis.',          exampleEn: 'We often play tennis.' },
      { de: 'Gitarre spielen', en: 'to play guitar',   emoji: '🎸', hint: 'spielen + instrument',          example: 'Er spielt gut Gitarre.',           exampleEn: 'He plays guitar well.' },
      { de: 'Videospiele spielen', en: 'to play video games', emoji: '🎮', hint: 'spielen + games',        example: 'Ich spiele gerne Videospiele.',    exampleEn: 'I like playing video games.' },

      // 🧘 X MACHEN — do an activity
      { de: 'Sport machen',  en: 'to do sport',  emoji: '🏃', hint: 'machen + activity',               example: 'Ich mache dreimal pro Woche Sport.', exampleEn: 'I do sport three times a week.' },
      { de: 'Yoga machen',   en: 'to do yoga',   emoji: '🧘', hint: 'machen + activity',               example: 'Sie macht jeden Morgen Yoga.',     exampleEn: 'She does yoga every morning.' },
      { de: 'Musik machen',  en: 'to make music', emoji: '🎵', hint: 'machen + activity',              example: 'Wir machen zusammen Musik.',       exampleEn: 'We make music together.' },

      // 🚶 X-EN GEHEN — go do an activity
      { de: 'schwimmen gehen', en: 'to go swimming', emoji: '🏊', hint: 'infinitive + gehen',          example: 'Ich gehe am Samstag schwimmen.',   exampleEn: 'I go swimming on Saturday.' },
      { de: 'tanzen gehen',    en: 'to go dancing',  emoji: '💃', hint: 'infinitive + gehen',          example: 'Wir gehen abends tanzen.',         exampleEn: 'We go dancing in the evening.' },
      { de: 'spazieren gehen', en: 'to go for a walk', emoji: '🚶', hint: 'infinitive + gehen',        example: 'Ich gehe gerne spazieren.',        exampleEn: 'I like going for a walk.' },

      // 🎨 STANDALONE HOBBY VERBS
      { de: 'reisen',        en: 'to travel',       emoji: '✈️', hint: 'regular',                       example: 'Ich reise gerne nach Italien.',    exampleEn: 'I like travelling to Italy.' },
      { de: 'kochen',        en: 'to cook',         emoji: '🍳', hint: 'regular',                       example: 'Am Wochenende koche ich gern.',    exampleEn: 'At weekends I like to cook.' },
      { de: 'lesen',         en: 'to read',         emoji: '📖', hint: 'stem-changer e→ie · du liest',   example: 'Ich lese jeden Abend.',            exampleEn: 'I read every evening.' },
      { de: 'singen',        en: 'to sing',         emoji: '🎤', hint: 'regular',                       example: 'Sie singt sehr gut.',              exampleEn: 'She sings very well.' },
      { de: 'malen',         en: 'to paint/draw',   emoji: '🎨', hint: 'regular',                       example: 'Ich male gerne Bilder.',           exampleEn: 'I like painting pictures.' },
      { de: 'fotografieren', en: 'to take photos',  emoji: '📷', hint: '-ieren verb · no ge- in Perfekt', example: 'Er fotografiert die Stadt.',     exampleEn: 'He photographs the city.' },
      { de: 'wandern',       en: 'to hike',         emoji: '🥾', hint: 'regular · wir wandern',          example: 'Wir wandern im Sommer oft.',       exampleEn: 'We often hike in summer.' },
      { de: 'Fahrrad fahren', en: 'to ride a bike', emoji: '🚴', hint: 'fahren stem-changer a→ä · du fährst', example: 'Ich fahre gern Fahrrad.',     exampleEn: 'I like riding a bike.' },

      // ❤️ PREFERENCE LADDER + 🔁 FREQUENCY (recap from Day 13)
      { de: 'gerne',        en: 'gladly / like to',  emoji: '❤️', hint: '🔁 Day 13 · "Ich koche gerne"',  example: 'Ich koche gerne.',            exampleEn: 'I like to cook.' },
      { de: 'lieber',       en: 'prefer to',         emoji: '🆚', hint: '🔁 Day 13 · comparative of gerne', example: 'Ich tanze lieber.',          exampleEn: 'I prefer to dance.' },
      { de: 'am liebsten',  en: 'most of all',       emoji: '🏆', hint: '🔁 Day 13 · the top preference',  example: 'Am liebsten reise ich.',      exampleEn: 'Most of all I like to travel.' },
      { de: 'jeden Tag',    en: 'every day',         emoji: '📆', hint: '🔁 Day 13 · frequency',          example: 'Ich lese jeden Tag.',         exampleEn: 'I read every day.' },
      { de: 'am Wochenende', en: 'at the weekend',   emoji: '🏖️', hint: 'time phrase · often leads → V2', example: 'Am Wochenende spiele ich Fußball.', exampleEn: 'At the weekend I play football.' },
    ],
    grammar: [
      { rule: '⭐ THE THREE "DO A HOBBY" PATTERNS — spielen · machen · gehen',
        body:
          'German picks a different verb depending on the hobby:\n\n' +
          '  ⚽ spielen + GAME / SPORT / INSTRUMENT (no article)\n' +
          '     Ich spiele Fußball / Tennis / Gitarre / Videospiele.\n\n' +
          '  🧘 [Activity] + machen\n' +
          '     Ich mache Sport / Yoga / Musik.\n\n' +
          '  🚶 [Infinitive] + gehen  (go and do it)\n' +
          '     Ich gehe schwimmen / tanzen / spazieren.\n\n' +
          '🧠 Rule of thumb: a ball game or instrument → spielen; a named activity → machen; "go do X" → X-infinitive + gehen. Many hobbies also have their own verb (reisen, kochen, lesen, malen) — just conjugate those normally.',
      },
      { rule: '⭐ TFP-O WORD ORDER — Time · Frequency · Preference · Object',
        body:
          'After the verb, modifiers line up in a fixed order (recap from Day 13):\n\n' +
          '  Subject + Verb + TIME + FREQUENCY + PREFERENCE + OBJECT\n' +
          '  Ich       höre   am Wochenende  oft   gerne   Musik.\n' +
          '  Wir       spielen jeden Tag    manchmal  —    Fußball.\n\n' +
          '⚠ "gerne" comes right BEFORE the object: "Ich koche gerne indisches Essen." If a TIME phrase leads the sentence, the verb still keeps slot 2 → "Am Wochenende spiele ich Fußball."',
      },
      { rule: '❤️ THE PREFERENCE LADDER — gerne · lieber · am liebsten',
        body:
          'Express how much you like an activity by escalating:\n\n' +
          '  gerne        — I like to …        Ich koche gerne.\n' +
          '  lieber       — I prefer to …      Ich koche lieber. (rather than X)\n' +
          '  am liebsten  — most of all …      Am liebsten koche ich.\n\n' +
          'Use "lieber" to compare two hobbies: "Ich spiele gern Tennis, aber ich schwimme lieber." (I like tennis, but I prefer swimming.) "am liebsten" names your absolute favourite.',
      },
      { rule: '🔁 FREQUENCY — how often',
        body:
          'Common free-time frequency markers (from Day 13\'s scale + time phrases):\n\n' +
          '  immer (always) · oft (often) · manchmal (sometimes) · selten (rarely) · nie (never)\n' +
          '  jeden Tag (every day) · einmal/zweimal pro Woche (once/twice a week)\n' +
          '  am Wochenende (at the weekend) · in meiner Freizeit (in my free time)\n\n' +
          'These sit in the FREQUENCY/TIME slots: "Ich mache zweimal pro Woche Sport." A time phrase can also lead → V2 inversion.',
      },
      { rule: '🚦 PITFALLS — hobby-talk traps',
        body:
          '• Ball games & instruments use spielen (Fußball spielen, Gitarre spielen) — NOT machen.\n' +
          '• "go swimming" = schwimmen gehen (infinitive + gehen), not "gehen schwimmen".\n' +
          '• gerne goes before the object: "Ich höre gerne Musik" (not "Ich höre Musik gerne" — acceptable but gerne-first is cleaner).\n' +
          '• Sports take NO article after spielen: "Ich spiele Fußball" (not "den Fußball").\n' +
          '• Time leads → verb slot 2: "Am Wochenende gehe ich schwimmen."\n' +
          '• lesen (e→ie: du liest) and Fahrrad fahren (a→ä: du fährst) are stem-changers.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — hobby→verb pattern · verb→meaning · preference ladder
      { type: 'match',
        pairs: [
          { de: 'Fußball …',  en: '⚽ spielen' },
          { de: 'Gitarre …',  en: '🎸 spielen' },
          { de: 'Yoga …',     en: '🧘 machen' },
          { de: 'Sport …',    en: '🏃 machen' },
          { de: 'schwimmen …', en: '🏊 gehen' },
          { de: 'tanzen …',   en: '💃 gehen' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'reisen',        en: '✈️ to travel' },
          { de: 'kochen',        en: '🍳 to cook' },
          { de: 'malen',         en: '🎨 to paint' },
          { de: 'wandern',       en: '🥾 to hike' },
          { de: 'fotografieren', en: '📷 to take photos' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'gerne',       en: '❤️ I like to' },
          { de: 'lieber',      en: '🆚 I prefer to' },
          { de: 'am liebsten', en: '🏆 most of all' },
          { de: 'jeden Tag',   en: '📆 every day' },
        ],
      },

      // ⚽ 4 PATTERN fill-blanks (spielen/machen/gehen choice)
      { type: 'fill-blank', sentence: 'Ball game: Ich __ am Wochenende Fußball. (spielen)', answer: 'spiele' },
      { type: 'fill-blank', sentence: 'Activity: Sie __ jeden Morgen Yoga. (machen)',        answer: 'macht' },
      { type: 'fill-blank', sentence: 'Go do it: Ich __ am Samstag schwimmen. (gehen)',      answer: 'gehe' },
      { type: 'fill-blank', sentence: 'Instrument: Er __ gut Gitarre. (spielen)',            answer: 'spielt' },

      // 🎨 4 HOBBY-VERB conjugation fill-blanks
      { type: 'fill-blank', sentence: 'In meiner Freizeit __ ich gerne. (cook)', answer: 'koche' },
      { type: 'fill-blank', sentence: 'Wir __ am Wochenende oft. (hike)',         answer: 'wandern' },
      { type: 'fill-blank', sentence: 'Sie (she) __ jeden Tag. (sing)',           answer: 'singt' },
      { type: 'fill-blank', sentence: 'Du __ in deiner Freizeit Bücher. (read — e→ie)', answer: 'liest' },

      // ❤️ 2 PREFERENCE fill-blanks
      { type: 'fill-blank', sentence: 'Top favourite: "__ reise ich." (most of all)', answer: 'Am liebsten' },
      { type: 'fill-blank', sentence: 'Compare: "Ich spiele gern Tennis, aber ich schwimme __." (prefer)', answer: 'lieber' },

      // ⚠ 3 WORD-ORDER / PATTERN MCQs
      { type: 'multiple-choice', q: '"In my free time, I gladly travel." Pick the order.',
        options: [
          'Ich reise in meiner Freizeit gerne.',
          'In meiner Freizeit ich reise gerne.',
          'Reise ich in meiner Freizeit gerne.',
          'Gerne ich reise in meiner Freizeit.',
        ],
        answer: 'Ich reise in meiner Freizeit gerne.' },
      { type: 'multiple-choice', q: '⚠ "I go swimming on Saturday." — correct German:',
        options: ['Ich schwimme gehen am Samstag.','Ich gehe am Samstag schwimmen.','Ich gehe schwimmen am Samstag nicht.','Am Samstag ich gehe schwimmen.'],
        answer: 'Ich gehe am Samstag schwimmen.',
        explain: 'Pattern is [infinitive] + gehen; verb in slot 2, schwimmen at the end.' },
      { type: 'multiple-choice', q: '⚠ "to play football" =',
        options: ['Fußball machen','Fußball spielen','Fußball gehen','Fußball fahren'],
        answer: 'Fußball spielen',
        explain: 'Ball games & instruments use spielen.' },

      // 💬 Mini dialogue — free-time chat with all three patterns
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Was machst du in deiner Freizeit?',           en: 'What do you do in your free time?' },
        { speaker: 'B', de: 'Ich spiele gerne Videospiele und ich koche.', en: 'I like playing video games and I cook.' },
        { speaker: 'A', de: 'Machst du auch Sport?',                       en: 'Do you do sport too?' },
        { speaker: 'B', de: 'Ja, zweimal pro Woche gehe ich schwimmen.',   en: 'Yes, twice a week I go swimming.' },
        { speaker: 'A', de: 'Und am Wochenende?',                          en: 'And at the weekend?' },
        { speaker: 'B', de: 'Am liebsten reise ich oder ich gehe wandern.', en: 'Most of all I travel or I go hiking.' },
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
      { type: 'multiple-choice', q: '"to play guitar" =',
        options: ['Gitarre machen','Gitarre spielen','Gitarre gehen','Gitarre fahren'], answer: 'Gitarre spielen' },
      { type: 'multiple-choice', q: '"to do yoga" =',
        options: ['Yoga spielen','Yoga machen','Yoga gehen','Yoga fahren'], answer: 'Yoga machen' },
      { type: 'fill-blank', sentence: 'Go do it: "Ich __ am Samstag tanzen." (gehen)', answer: 'gehe' },
      { type: 'fill-blank', sentence: 'Top favourite: "__ koche ich." (most of all)', answer: 'Am liebsten' },
      { type: 'multiple-choice', q: '⚠ "I go swimming" pattern is…',
        options: ['gehen + infinitive at end','infinitive + gehen at end','machen + noun','spielen + noun'],
        answer: 'gehen + infinitive at end', explain: 'schwimmen gehen → "Ich gehe … schwimmen."' },
      { type: 'fill-blank', sentence: 'Compare two hobbies: "Ich male gern, aber ich fotografiere __." (prefer)', answer: 'lieber' },
    ],
  },

  /* ----- Day 31: Reading practice (slides 111, 146-147, 183) ----- */
  {
    id: 34, week: 5,
    vocabLayout: 'spotlight',
    title: 'Reading practice',
    titleDe: 'Leseverständnis',
    emoji: '📖',
    objective: 'Read short German paragraphs with a strategy — spot cognates, find the verb, follow the signal words — then answer comprehension questions (in English AND in German).',
    intro: 'You now have enough vocabulary and grammar to read real beginner-level paragraphs. The skill today isn\'t new grammar — it\'s a READING STRATEGY: read for gist first, lean on cognates, find the verb to see who-does-what, and let signal words (und, aber, dann, weil) map the logic. Read each text aloud with the 🔊, then answer.',
    vocabulary: [
      // 📖 COMPREHENSION TOOLKIT — words to talk about a text
      { de: 'der Text',        en: 'the text',           emoji: '📄', hint: 'a passage · pl: die Texte',          example: 'Lies den Text laut.',          exampleEn: 'Read the text aloud.' },
      { de: 'der Absatz',      en: 'the paragraph',      emoji: '¶', hint: 'a block of text',                    example: 'Der erste Absatz ist kurz.',   exampleEn: 'The first paragraph is short.' },
      { de: 'der Satz',        en: 'the sentence',       emoji: '📝', hint: '🔁 Day 9 · pl: die Sätze',           example: 'Jeder Satz hat ein Verb.',     exampleEn: 'Every sentence has a verb.' },
      { de: 'das Wort',        en: 'the word',           emoji: '🔤', hint: 'pl: die Wörter',                     example: 'Ich verstehe dieses Wort nicht.', exampleEn: 'I don\'t understand this word.' },
      { de: 'die Frage',       en: 'the question',       emoji: '❓', hint: 'pl: die Fragen',                     example: 'Beantworte die Frage.',        exampleEn: 'Answer the question.' },
      { de: 'die Antwort',     en: 'the answer',         emoji: '✅', hint: 'antworten = to answer',              example: 'Die Antwort ist richtig.',     exampleEn: 'The answer is correct.' },
      { de: 'die Geschichte',  en: 'the story',          emoji: '📚', hint: 'also = "history"',                   example: 'Das ist eine schöne Geschichte.', exampleEn: 'That is a nice story.' },

      // 🧠 READING VERBS
      { de: 'lesen',           en: 'to read',            emoji: '👀', hint: 'stem-changer e→ie · du liest',       example: 'Ich lese den Text zweimal.',   exampleEn: 'I read the text twice.' },
      { de: 'verstehen',       en: 'to understand',      emoji: '💡', hint: 'understand WHAT? → Akk',             example: 'Ich verstehe die Geschichte.', exampleEn: 'I understand the story.' },
      { de: 'bedeuten',        en: 'to mean',            emoji: '🟰', hint: '"Was bedeutet …?" = what does … mean?', example: 'Was bedeutet dieses Wort?',  exampleEn: 'What does this word mean?' },
      { de: 'wiederholen',     en: 'to repeat',          emoji: '🔁', hint: 'inseparable · no split',             example: 'Ich wiederhole den Satz.',     exampleEn: 'I repeat the sentence.' },
      { de: 'beantworten',     en: 'to answer (a question)', emoji: '🙋', hint: 'beantworten + die Frage (Akk)',  example: 'Beantworte die Fragen.',       exampleEn: 'Answer the questions.' },

      // 🔗 SIGNAL WORDS — the logic map of any text
      { de: 'und',     en: 'and',          emoji: '➕', hint: '🔗 adds info · no word-order change',      example: 'Er liest und schreibt.',       exampleEn: 'He reads and writes.' },
      { de: 'aber',    en: 'but',          emoji: '↔️', hint: '🔗 contrast · no word-order change',       example: 'Es ist klein, aber schön.',    exampleEn: 'It is small but nice.' },
      { de: 'denn',    en: 'because (reason)', emoji: '💬', hint: '🔗 reason · keeps normal order',        example: 'Ich bleibe, denn es regnet.',  exampleEn: 'I stay, because it is raining.' },
      { de: 'weil',    en: 'because',      emoji: '🧩', hint: '⚠ verb goes to the END after weil',         example: 'Ich bleibe, weil es regnet.',  exampleEn: 'I stay because it is raining.' },
      { de: 'dann',    en: 'then',         emoji: '➡️', hint: '🔁 Day 32 · sequence · leads → V2',         example: 'Dann geht er nach Hause.',     exampleEn: 'Then he goes home.' },
      { de: 'danach',  en: 'after that',   emoji: '⏩', hint: 'sequence · leads → V2',                    example: 'Danach trinkt er Kaffee.',     exampleEn: 'After that he drinks coffee.' },
      { de: 'zuerst',  en: 'first',        emoji: '1️⃣', hint: 'opens a sequence',                         example: 'Zuerst liest sie den Text.',   exampleEn: 'First she reads the text.' },

      // 🆓 COGNATES — free words (look/sound like English)
      { de: 'die Firma',       en: 'the firm / company', emoji: '🏢', hint: '🆓 cognate-ish · "firm"',          example: 'Sie arbeitet in einer Firma.', exampleEn: 'She works at a company.' },
      { de: 'das Restaurant',  en: 'the restaurant',     emoji: '🍽️', hint: '🆓 identical to English',          example: 'Wir gehen ins Restaurant.',    exampleEn: 'We go to the restaurant.' },
      { de: 'der Kaffee',      en: 'the coffee',         emoji: '☕', hint: '🆓 near-identical · "coffee"',      example: 'Ich trinke einen Kaffee.',     exampleEn: 'I drink a coffee.' },
    ],
    grammar: [
      { rule: '⭐ THE 4-STEP READING STRATEGY',
        body:
          '1. GIST FIRST — read the whole paragraph once without stopping. Do NOT translate every word.\n' +
          '2. FIND THE VERBS — they tell you who does what. The conjugated verb is in slot 2 (or slot 1 in a question).\n' +
          '3. SECOND READ — now look up ONLY the words you genuinely need for meaning.\n' +
          '4. ANSWER — answer in German when you can, reusing words and grammar straight from the text.',
      },
      { rule: '🆓 LEAN ON COGNATES — free vocabulary',
        body:
          'Hundreds of German words look or sound like English. Recognise them and you read faster:\n\n' +
          '  Restaurant · Kaffee · Computer · Telefon · Firma · Information · Musik · Familie ·\n' +
          '  Hotel · Bus · Park · Problem · Student · Adresse · Supermarkt · Apartment\n\n' +
          '⚠ Watch the "false friends": "bekommen" = to RECEIVE (not become), "also" = therefore (not also), "Gift" = poison. But true cognates far outnumber the traps — guess first, verify if it matters.',
      },
      { rule: '🔍 FIND THE VERB = find the meaning',
        body:
          'German can move things around, but the conjugated verb is anchored:\n\n' +
          '  • Statement → verb in SLOT 2:  "Heute arbeitet er in der Firma." (arbeitet)\n' +
          '  • Yes/No question → verb in SLOT 1: "Kommt Anna aus Indien?"\n' +
          '  • After weil/dass → verb at the END: "…, weil sie arbeiten muss."\n\n' +
          'Find that verb, ask "Wer?" (who does it → subject) and "Wen/Was?" (what is affected → object), and the sentence unlocks — even if you don\'t know every word.',
      },
      { rule: '🔗 SIGNAL WORDS MAP THE LOGIC',
        body:
          'Little connecting words tell you HOW ideas relate — they\'re sign-posts:\n\n' +
          '  und (and) · aber (but) · oder (or)        → add / contrast / choose\n' +
          '  denn / weil (because)                      → a REASON follows\n' +
          '  zuerst → dann → danach → schließlich      → SEQUENCE / order of events\n' +
          '  heute · jetzt · am Wochenende             → WHEN it happens\n\n' +
          '⚠ "weil" sends its verb to the END of the clause; "denn" keeps normal order. Both mean "because".',
      },
      { rule: '🙋 ANSWERING IN GERMAN — recycle the text',
        body:
          'When a question asks "Woher kommt Anna?", build the answer from the text\'s own words:\n\n' +
          '  Q: Woher kommt Anna?      Text: "Anna kommt aus Indien."\n' +
          '  A: Anna kommt aus Indien. / Aus Indien.\n\n' +
          'Match the W-word to the case (Day 17): Wer→subject, Wen→Akk object, Wo→location, Wann→time, Warum→reason (answer with weil). You rarely need new vocabulary — the answer is usually hiding in the sentence.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 2 INTERACTIVE MATCHES — comprehension words · signal words
      { type: 'match',
        pairs: [
          { de: 'der Text',       en: '📄 the text' },
          { de: 'der Satz',       en: '📝 the sentence' },
          { de: 'das Wort',       en: '🔤 the word' },
          { de: 'die Frage',      en: '❓ the question' },
          { de: 'die Antwort',    en: '✅ the answer' },
          { de: 'die Geschichte', en: '📚 the story' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'und',    en: '➕ and (adds)' },
          { de: 'aber',   en: '↔️ but (contrast)' },
          { de: 'weil',   en: '🧩 because (verb to end)' },
          { de: 'dann',   en: '➡️ then (sequence)' },
          { de: 'zuerst', en: '1️⃣ first (opens sequence)' },
        ],
      },

      // 📖 TEXT 1 + comprehension (EN) + answer-in-German
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
      { type: 'fill-blank', sentence: 'Text 1 · answer in German: "Wie alt ist der Student?" → Er ist __ Jahre alt.', answer: 'dreiundzwanzig', hint: 'write the number as a word' },

      // 📖 TEXT 2 + comprehension (EN) + answer-in-German
      { type: 'dialogue', lines: [
        { speaker: 'Text 2', de: 'Anna kommt aus Indien und wohnt jetzt in Berlin.', en: 'Anna comes from India and lives now in Berlin.' },
        { speaker: 'Text 2', de: 'Sie ist Softwareentwicklerin und arbeitet in einer Firma.', en: 'She is a software developer and works in a company.' },
        { speaker: 'Text 2', de: 'Am Wochenende kocht Anna gerne und besucht ihre Freunde.', en: 'On the weekend, Anna likes to cook and visits her friends.' },
        { speaker: 'Text 2', de: 'Heute hat sie keine Zeit — sie muss arbeiten.', en: 'Today she has no time — she has to work.' },
      ]},
      { type: 'multiple-choice', q: 'Text 2: Where is Anna from?', options: ['Berlin', 'Germany', 'India', 'Frankfurt'], answer: 'India' },
      { type: 'multiple-choice', q: 'Text 2: What is Anna\'s profession?', options: ['teacher', 'software developer', 'cook', 'doctor'], answer: 'software developer' },
      { type: 'multiple-choice', q: 'Text 2: Why does Anna have no time today?', options: ['She is sick.', 'She has to work.', 'She is travelling.', 'She is cooking.'], answer: 'She has to work.' },
      { type: 'fill-blank', sentence: 'Text 2 · answer in German: "Wo wohnt Anna jetzt?" → Sie wohnt in __.', answer: 'Berlin' },

      // 📖 TEXT 3 + comprehension (EN) + answer-in-German
      { type: 'dialogue', lines: [
        { speaker: 'Text 3', de: 'Im Restaurant bestellt Tom einen Kaffee mit Milch und eine Suppe.', en: 'At the restaurant Tom orders a coffee with milk and a soup.' },
        { speaker: 'Text 3', de: 'Der Kellner bringt das Essen schnell.', en: 'The waiter brings the food quickly.' },
        { speaker: 'Text 3', de: 'Tom isst und liest ein Buch.', en: 'Tom eats and reads a book.' },
        { speaker: 'Text 3', de: 'Danach fragt er: „Wie viel kostet das?" — und zahlt mit Karte.', en: 'Afterwards he asks: "How much does that cost?" — and pays with card.' },
      ]},
      { type: 'multiple-choice', q: 'Text 3: What does Tom order?', options: ['tea and a salad', 'coffee with milk and a soup', 'water and bread', 'beer and pizza'], answer: 'coffee with milk and a soup' },
      { type: 'multiple-choice', q: 'Text 3: How does Tom pay?', options: ['cash', 'card', 'phone', 'cheque'], answer: 'card' },
      { type: 'fill-blank', sentence: 'Text 3 · answer in German: "Womit zahlt Tom?" → Er zahlt mit __.', answer: 'Karte' },

      // 📖 TEXT 4 (NEW) — uses weil/aber + a daily routine, with EN + DE questions
      { type: 'dialogue', lines: [
        { speaker: 'Text 4', de: 'Max steht um sechs Uhr auf, denn er fährt früh zur Arbeit.', en: 'Max gets up at six, because he goes to work early.' },
        { speaker: 'Text 4', de: 'Er frühstückt schnell und nimmt den Bus.', en: 'He has breakfast quickly and takes the bus.' },
        { speaker: 'Text 4', de: 'Heute ist er müde, aber er muss arbeiten.', en: 'Today he is tired, but he has to work.' },
        { speaker: 'Text 4', de: 'Am Abend geht er nicht aus, weil er schlafen will.', en: 'In the evening he does not go out, because he wants to sleep.' },
      ]},
      { type: 'multiple-choice', q: 'Text 4: When does Max get up?', options: ['at five', 'at six', 'at seven', 'at eight'], answer: 'at six' },
      { type: 'multiple-choice', q: 'Text 4: How does he get to work?', options: ['by car', 'by bike', 'by bus', 'on foot'], answer: 'by bus' },
      { type: 'multiple-choice', q: 'Text 4: Why doesn\'t he go out in the evening?', options: ['He is sick.', 'He wants to sleep.', 'He has no money.', 'He is cooking.'], answer: 'He wants to sleep.' },
      { type: 'fill-blank', sentence: 'Text 4 · signal word: "Heute ist er müde, __ er muss arbeiten." (but)', answer: 'aber' },

      // 🆓 1 cognate match
      { type: 'match',
        pairs: [
          { de: 'die Firma',      en: 'company / firm' },
          { de: 'das Restaurant', en: 'restaurant' },
          { de: 'der Kaffee',     en: 'coffee' },
          { de: 'der Bus',        en: 'bus' },
        ],
      },
    ],
    quiz: [
      { type: 'multiple-choice', q: 'Reading strategy: what do you do FIRST with a new text?',
        options: ['Translate every word','Read for the gist without stopping','Look up all nouns','Answer the questions'], answer: 'Read for the gist without stopping' },
      { type: 'multiple-choice', q: 'In a statement, the conjugated verb is usually in…',
        options: ['slot 1','slot 2','the last position','any position'], answer: 'slot 2' },
      { type: 'multiple-choice', q: '⚠ After "weil", the verb goes…',
        options: ['to slot 1','to slot 2','to the END of the clause','nowhere — weil has no verb'], answer: 'to the END of the clause' },
      { type: 'multiple-choice', q: 'Which word signals a REASON is coming?',
        options: ['aber','und','weil','dann'], answer: 'weil' },
      { type: 'fill-blank', sentence: 'Answer in German: "Woher kommt Anna?" → Anna kommt __ Indien.', answer: 'aus' },
      { type: 'multiple-choice', q: '"Was bedeutet das Wort?" means…',
        options: ['Where is the word?','What does the word mean?','How many words?','Who said the word?'], answer: 'What does the word mean?' },
      { type: 'multiple-choice', q: 'A reliable cognate (free word) is…',
        options: ['bekommen','also','das Restaurant','das Gift'], answer: 'das Restaurant',
        explain: 'Restaurant is a true cognate. bekommen=receive, also=therefore, Gift=poison are false friends.' },
    ],
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
    vocabLayout: 'spotlight',
    title: 'Sentence connections',
    titleDe: 'Konnektoren',
    emoji: '🔗',
    objective: 'Glue clauses together and know the word-order each connector demands — verb stays in slot 2 (und/aber/denn), verb jumps to the END (weil/wenn/dass), or verb-first inversion (deshalb/dann).',
    intro: 'Connectors turn short sentences into real German. There are THREE behaviours: (1) coordinating connectors (und · oder · aber · denn · sondern) leave word order untouched; (2) subordinating connectors (weil · wenn · dass · obwohl) push the conjugated verb to the very END; (3) adverb-connectors (deshalb · dann · trotzdem) trigger V2 inversion — verb second, subject third. Learn which group a word is in and your sentences click into place.',
    vocabulary: [
      // 🟢 GROUP 1 — COORDINATING (verb stays in slot 2, no change)
      { de: 'und',     en: 'and',                emoji: '➕', hint: '🟢 coordinating · no word-order change',   example: 'Ich lerne Deutsch und ich arbeite.', exampleEn: 'I learn German and I work.' },
      { de: 'oder',    en: 'or',                 emoji: '🔀', hint: '🟢 coordinating · offers a choice',        example: 'Trinkst du Kaffee oder Tee?',        exampleEn: 'Do you drink coffee or tea?' },
      { de: 'aber',    en: 'but',                emoji: '↔️', hint: '🟢 coordinating · contrast',               example: 'Es ist klein, aber schön.',          exampleEn: 'It is small but nice.' },
      { de: 'denn',    en: 'because (verb stays slot 2)', emoji: '💬', hint: '🟢 coordinating "because" · normal order', example: 'Ich gehe, denn ich bin müde.', exampleEn: 'I am going, because I am tired.' },
      { de: 'sondern', en: 'but rather',         emoji: '🔄', hint: '🟢 "but" AFTER a negative · nicht X, sondern Y', example: 'Nicht Tee, sondern Kaffee.',     exampleEn: 'Not tea, but rather coffee.' },

      // 🔴 GROUP 2 — SUBORDINATING (verb JUMPS to the end)
      { de: 'weil',    en: 'because (verb to END)', emoji: '🧩', hint: '🔴 subordinating · verb at the end',     example: 'Ich gehe, weil ich müde bin.',       exampleEn: 'I am going because I am tired.' },
      { de: 'wenn',    en: 'if / when',          emoji: '🔁', hint: '🔴 subordinating · condition · verb to END', example: 'Ich komme, wenn ich Zeit habe.',     exampleEn: 'I come if I have time.' },
      { de: 'dass',    en: 'that',               emoji: '📎', hint: '🔴 subordinating · reported speech · verb to END', example: 'Ich denke, dass er müde ist.', exampleEn: 'I think that he is tired.' },
      { de: 'obwohl',  en: 'although',           emoji: '🤷', hint: '🔴 subordinating · concession · verb to END', example: 'Ich gehe, obwohl es regnet.',      exampleEn: 'I go although it is raining.' },
      { de: 'ob',      en: 'whether',            emoji: '❓', hint: '🔴 subordinating · indirect yes/no · verb to END', example: 'Ich weiß nicht, ob er kommt.', exampleEn: 'I don\'t know whether he is coming.' },

      // 🟡 GROUP 3 — ADVERB-CONNECTORS (V2 inversion: verb 2nd, subject 3rd)
      { de: 'deshalb', en: 'therefore / so',     emoji: '➡️', hint: '🟡 adverb · V2 inversion · "deshalb gehe ich"', example: 'Ich bin müde, deshalb gehe ich.',  exampleEn: 'I am tired, so I am going.' },
      { de: 'dann',    en: 'then',               emoji: '⏭️', hint: '🟡 adverb · sequence · V2 inversion',       example: 'Zuerst esse ich, dann schlafe ich.', exampleEn: 'First I eat, then I sleep.' },
      { de: 'trotzdem', en: 'nevertheless',      emoji: '💪', hint: '🟡 adverb · V2 inversion · "still / anyway"', example: 'Es regnet, trotzdem gehe ich.',     exampleEn: 'It is raining; nevertheless I go.' },

      // 🧩 STRUCTURE LABELS
      { de: 'der Hauptsatz', en: 'main clause (verb slot 2)', emoji: '1️⃣', hint: 'a complete sentence on its own', example: 'Ich bin müde.',                exampleEn: 'I am tired.' },
      { de: 'der Nebensatz', en: 'subordinate clause (verb at END)', emoji: '2️⃣', hint: 'depends on a main clause · weil/dass…', example: '…, weil ich müde bin.',  exampleEn: '…, because I am tired.' },
    ],
    grammar: [
      { rule: '🟢 GROUP 1 — COORDINATING (verb stays in slot 2)',
        body:
          'und · oder · aber · denn · sondern — these join two equal main clauses and leave word order ALONE (they sit in "position 0", not counted):\n\n' +
          '  Ich lerne Deutsch UND ich arbeite viel.\n' +
          '  Trinkst du Kaffee ODER (trinkst du) Tee?\n' +
          '  Das ist lecker, ABER es ist teuer.\n' +
          '  Ich gehe ins Restaurant, DENN ich bin hungrig.\n' +
          '  Ich will keinen Tee, SONDERN Kaffee.   (sondern = "but rather", only after a negative)\n\n' +
          '🧠 Memory aid: the German "ADUSO" set (Aber · Denn · Und · Sondern · Oder) never changes word order.',
      },
      { rule: '🔴 GROUP 2 — SUBORDINATING (verb JUMPS to the end)',
        body:
          'weil · wenn · dass · obwohl · ob — these open a Nebensatz (subordinate clause) and kick the conjugated verb to the VERY END:\n\n' +
          '  Ich lerne Deutsch, WEIL ich in Deutschland ARBEITE.\n' +
          '  Ich komme, WENN ich Zeit HABE.\n' +
          '  Ich denke, DASS er müde IST.\n' +
          '  Ich gehe, OBWOHL es REGNET.\n' +
          '  Ich weiß nicht, OB er KOMMT.\n\n' +
          '⚠ Always a COMMA before the connector, and the conjugated verb lands last. With a modal, the modal goes last: "…, weil ich arbeiten MUSS."',
      },
      { rule: '🟡 GROUP 3 — ADVERB-CONNECTORS (V2 inversion)',
        body:
          'deshalb · dann · trotzdem · danach · sonst are ADVERBS, not real conjunctions. When they lead the second clause they fill slot 1, so the verb stays in slot 2 and the SUBJECT moves to slot 3:\n\n' +
          '  Ich bin müde, DESHALB gehe ICH nach Hause.\n' +
          '  Zuerst esse ich, DANN schlafe ICH.\n' +
          '  Es regnet, TROTZDEM gehe ICH spazieren.\n\n' +
          '⚠ NOT "deshalb ich gehe" ✗. These behave like any time/place word that leads a sentence (the Day-9/32 V2 rule): verb second, subject right after.',
      },
      { rule: '⚖️ denn vs weil — same meaning, different word order',
        body:
          'Both mean "because" — choose by the word order you want:\n\n' +
          '  Ich gehe, DENN ich bin müde.   (Group 1 · verb stays slot 2)\n' +
          '  Ich gehe, WEIL ich müde bin.   (Group 2 · verb to the end)\n\n' +
          'Same idea: deshalb is the "flip side" — it states the RESULT, not the reason:\n' +
          '  Ich bin müde, DESHALB gehe ich. (I am tired, therefore I go.)\n\n' +
          'Modern spoken German uses "weil" most; "denn" sounds a touch more formal/written.',
      },
      { rule: '🚦 PITFALLS — connector traps',
        body:
          '• und/oder/aber/denn/sondern → word order UNCHANGED (no verb movement).\n' +
          '• weil/wenn/dass/obwohl/ob → conjugated verb to the END, comma before.\n' +
          '• deshalb/dann/trotzdem → V2 inversion: verb 2nd, subject 3rd (NOT "deshalb ich…").\n' +
          '• "denn" (because) ≠ "dann" (then) — one letter, totally different jobs.\n' +
          '• sondern only after a negative ("nicht X, sondern Y"); otherwise use aber.\n' +
          '• With a modal in a weil-clause, the MODAL goes last: "…, weil ich gehen muss."',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — connector→group · group→behaviour · denn/dann
      { type: 'match',
        pairs: [
          { de: 'und / aber / denn', en: '🟢 verb stays in slot 2' },
          { de: 'weil / dass / wenn', en: '🔴 verb jumps to the END' },
          { de: 'deshalb / dann / trotzdem', en: '🟡 V2 inversion (verb 2nd, subject 3rd)' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'weil',    en: '🧩 because (verb to end)' },
          { de: 'wenn',    en: '🔁 if / when' },
          { de: 'dass',    en: '📎 that (reported speech)' },
          { de: 'obwohl',  en: '🤷 although' },
          { de: 'ob',      en: '❓ whether' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'denn',    en: 'because (reason)' },
          { de: 'dann',    en: 'then (sequence)' },
          { de: 'deshalb', en: 'therefore (result)' },
          { de: 'sondern', en: 'but rather (after negative)' },
        ],
      },

      // 🟢 4 GROUP-1 fill-blanks (no word-order change)
      { type: 'fill-blank', sentence: 'Ich lerne Deutsch __ ich arbeite viel. (and)',          answer: 'und' },
      { type: 'fill-blank', sentence: 'Trinkst du Kaffee __ Tee? (or)',                         answer: 'oder' },
      { type: 'fill-blank', sentence: 'Das ist lecker, __ es ist teuer. (but)',                 answer: 'aber' },
      { type: 'fill-blank', sentence: 'Ich gehe ins Restaurant, __ ich bin hungrig. (because — verb stays slot 2)', answer: 'denn' },

      // 🔴 4 GROUP-2 verb-to-END fill-blanks
      { type: 'fill-blank', sentence: 'Ich lerne Deutsch, weil ich in Deutschland __. (arbeiten — verb at END)', answer: 'arbeite' },
      { type: 'fill-blank', sentence: 'Ich komme, wenn ich Zeit __. (haben — verb at END)',     answer: 'habe' },
      { type: 'fill-blank', sentence: 'Ich denke, dass er müde __. (sein — verb at END)',        answer: 'ist' },
      { type: 'fill-blank', sentence: 'Ich gehe, obwohl es __. (regnen — verb at END)',          answer: 'regnet' },

      // 🟡 2 GROUP-3 V2-inversion fill-blanks (subject after verb)
      { type: 'fill-blank', sentence: 'Ich bin müde, deshalb __ ich nach Hause. (gehen — V2!)',  answer: 'gehe' },
      { type: 'fill-blank', sentence: 'Zuerst esse ich, dann __ ich. (schlafen — V2!)',          answer: 'schlafe' },

      // ⚠ 4 WORD-ORDER / GROUP MCQs
      { type: 'multiple-choice', q: 'Which conjunction sends the verb to the END?',
        options: ['und','aber','denn','weil'], answer: 'weil',
        explain: 'weil/wenn/dass/obwohl/ob are subordinating — verb to the end.' },
      { type: 'multiple-choice', q: 'Pick the correct word order:',
        options: [
          'Ich bin müde, weil ich arbeite viel.',
          'Ich bin müde, weil ich viel arbeite.',
          'Ich bin müde, weil arbeite ich viel.',
          'Ich bin müde, viel weil ich arbeite.',
        ],
        answer: 'Ich bin müde, weil ich viel arbeite.',
        explain: 'After "weil", the conjugated verb (arbeite) goes to the very end.' },
      { type: 'multiple-choice', q: '⚠ "I am tired, so I am going home." — correct German:',
        options: ['Ich bin müde, deshalb ich gehe nach Hause.','Ich bin müde, deshalb gehe ich nach Hause.','Ich bin müde, deshalb nach Hause ich gehe.','Ich bin müde, gehe ich deshalb nach Hause.'],
        answer: 'Ich bin müde, deshalb gehe ich nach Hause.',
        explain: 'deshalb triggers V2 inversion: verb 2nd, subject 3rd.' },
      { type: 'multiple-choice', q: '⚠ "denn" vs "dann" — which means "because"?',
        options: ['dann','denn','both','neither'], answer: 'denn',
        explain: 'denn = because; dann = then. One letter apart.' },

      // 💬 Mini dialogue — all three groups in conversation
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Kommst du heute Abend?',                       en: 'Are you coming this evening?' },
        { speaker: 'B', de: 'Ich möchte gerne, aber ich muss arbeiten.',    en: 'I\'d like to, but I have to work.' },
        { speaker: 'A', de: 'Warum?',                                       en: 'Why?' },
        { speaker: 'B', de: 'Weil mein Chef krank ist.',                    en: 'Because my boss is sick.' },
        { speaker: 'A', de: 'Schade. Ich denke, dass wir nächste Woche Zeit haben.', en: 'Too bad. I think that we\'ll have time next week.' },
        { speaker: 'B', de: 'Ja! Ich bin dann frei, deshalb treffen wir uns.', en: 'Yes! I\'m free then, so let\'s meet.' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: '"I think that he is tired." → Ich denke, dass er müde __.', answer: 'ist' },
      { type: 'multiple-choice', q: 'Which group leaves word order UNCHANGED?',
        options: ['weil / dass','deshalb / dann','und / aber / denn','wenn / obwohl'], answer: 'und / aber / denn' },
      { type: 'fill-blank', sentence: 'Verb to END: "Ich bleibe, weil es __." (regnen)', answer: 'regnet' },
      { type: 'multiple-choice', q: '⚠ Correct after "deshalb":',
        options: ['deshalb ich gehe','deshalb gehe ich','deshalb gehen ich','ich deshalb gehe'],
        answer: 'deshalb gehe ich', explain: 'V2 inversion: verb 2nd, subject 3rd.' },
      { type: 'multiple-choice', q: '"because" with the verb staying in slot 2 is…',
        options: ['weil','denn','dass','obwohl'], answer: 'denn' },
      { type: 'fill-blank', sentence: 'Sequence + V2: "Zuerst lerne ich, dann __ ich." (schlafen)', answer: 'schlafe' },
      { type: 'multiple-choice', q: '"not X but rather Y" (after a negative) uses…',
        options: ['aber','sondern','oder','denn'], answer: 'sondern' },
    ],
  },

  /* ----- Day 38: Demonstrative articles + Indefinite pronouns ----- */
  {
    id: 38, week: 6,
    vocabLayout: 'spotlight',
    title: 'Demonstratives & indefinites',
    titleDe: 'Demonstrativ + Indefinit',
    emoji: '👉',
    objective: 'Point at "this one" with dieser/diese/dieses (declined like der/die/das), and talk about people and things in general — someone, nobody, something, nothing, everything, and the super-useful "man".',
    intro: 'Two small but high-frequency word groups. "dieser" replaces der/die/das to mean "THIS particular one" — and it takes the EXACT same endings as the definite article you already know. Indefinite pronouns (jemand · niemand · etwas · nichts · alles · man) let you talk about people and things without naming them: "someone is here", "nobody knows", "one works a lot".',
    vocabulary: [
      // 👉 DEMONSTRATIVES — "this one" (declines like der/die/das)
      { de: 'dieser',  en: 'this (m · der-words)', emoji: '👨', hint: '⭐ der → dieser · same endings as der',     example: 'Dieser Mann arbeitet hier.',     exampleEn: 'This man works here.' },
      { de: 'diese',   en: 'this (f) / these (pl)', emoji: '👩', hint: '⭐ die → diese',                          example: 'Diese Frau kocht gut.',          exampleEn: 'This woman cooks well.' },
      { de: 'dieses',  en: 'this (n · das-words)', emoji: '🧒', hint: '⭐ das → dieses',                          example: 'Dieses Kind ist müde.',          exampleEn: 'This child is tired.' },
      { de: 'diesen',  en: 'this (m · Akkusativ)', emoji: '➡️', hint: '⚠ Akk masc → diesen (den → diesen)',      example: 'Ich kaufe diesen Tisch.',        exampleEn: 'I am buying this table.' },
      { de: 'diesem',  en: 'this (m/n · Dativ)',   emoji: '🅿️', hint: '⚠ Dativ → diesem (dem → diesem)',         example: 'Ich helfe diesem Mann.',         exampleEn: 'I help this man.' },
      { de: 'jeder',   en: 'every / each (m)',     emoji: '🔄', hint: 'declines like dieser · jede/jedes',        example: 'Jeder Tag ist anders.',          exampleEn: 'Every day is different.' },
      { de: 'welcher', en: 'which? (m)',           emoji: '❓', hint: '🔁 Day 17 · same dieser-endings',           example: 'Welcher Tisch ist neu?',         exampleEn: 'Which table is new?' },

      // 🙋 INDEFINITE PRONOUNS — PEOPLE
      { de: 'jemand',  en: 'someone',              emoji: '🙋', hint: 'Nom · "Jemand ist hier" · Akk → jemanden',  example: 'Jemand ist an der Tür.',         exampleEn: 'Someone is at the door.' },
      { de: 'niemand', en: 'nobody',               emoji: '🚷', hint: 'Nom · "Niemand ist da" · Akk → niemanden',  example: 'Niemand ist zu Hause.',          exampleEn: 'Nobody is home.' },
      { de: 'jemanden', en: 'someone (Akkusativ)', emoji: '➡️', hint: '⚠ Akk adds -en · "Ich sehe jemanden"',     example: 'Ich sehe jemanden.',             exampleEn: 'I see someone.' },
      { de: 'man',     en: 'one / people / you (general)', emoji: '👥', hint: '⭐ impersonal subject · takes er/sie/es verb', example: 'Man arbeitet hier viel.', exampleEn: 'People work a lot here.' },

      // 📦 INDEFINITE PRONOUNS — THINGS (no change)
      { de: 'etwas',   en: 'something',            emoji: '📦', hint: 'no change · "Hast du etwas?" · short: was',  example: 'Möchtest du etwas trinken?',     exampleEn: 'Would you like something to drink?' },
      { de: 'nichts',  en: 'nothing',              emoji: '🚫', hint: 'no change · "Ich habe nichts"',             example: 'Ich verstehe nichts.',           exampleEn: 'I understand nothing.' },
      { de: 'alles',   en: 'everything',           emoji: '🌍', hint: 'no change · "Alles ist gut"',              example: 'Alles ist in Ordnung.',          exampleEn: 'Everything is fine.' },
      { de: 'etwas / nichts + Adjektiv', en: 'something/nothing + -es adj.', emoji: '✨', hint: '⚠ "etwas Gutes", "nichts Neues" (capital, -es)', example: 'Ich esse etwas Gutes.', exampleEn: 'I am eating something good.' },

      // 🌍 EVERYBODY / SOMEWHERE — handy extras
      { de: 'alle',    en: 'everybody / all (pl)', emoji: '👨‍👩‍👧‍👦', hint: 'plural · takes a plural verb · "Alle sind da"', example: 'Alle sind hier.',          exampleEn: 'Everybody is here.' },
      { de: 'irgendwo', en: 'somewhere',           emoji: '📍', hint: 'irgend- = some- · irgendwann/irgendwer',   example: 'Mein Schlüssel ist irgendwo.',   exampleEn: 'My key is somewhere.' },
    ],
    grammar: [
      { rule: '⭐ DEMONSTRATIVES — dieser declines exactly like der/die/das',
        body:
          '"dieser" = "this (particular) one". Swap the "d-" of the article for "dies-" and keep the SAME ending:\n\n' +
          '            der → dieser     dieser Mann\n' +
          '            die → diese      diese Frau\n' +
          '            das → dieses     dieses Kind\n' +
          '     plural die → diese      diese Leute\n\n' +
          'Across the cases it mirrors der/die/das exactly:\n' +
          '  Nom. m  dieser   ·  Akk. m  diesen  ·  Dat. m/n  diesem  ·  Dat. f  dieser\n' +
          '  "Dieser Tisch ist neu." → "Ich kaufe diesen Tisch." → "auf diesem Tisch."\n\n' +
          '🧠 jeder (every), welcher (which) and jener (that) follow the IDENTICAL ending pattern — learn one, get four.',
      },
      { rule: '🙋 INDEFINITE PRONOUNS — people (jemand · niemand · man)',
        body:
          'These stand in for a person you don\'t name:\n\n' +
          '  jemand   = someone   "Jemand ist hier."     Akk → jemanden ("Ich sehe jemanden.")\n' +
          '  niemand  = nobody    "Niemand ist da."      Akk → niemanden\n' +
          '  man      = one / people / you-in-general  (ALWAYS the subject)\n\n' +
          '⭐ "man" is the workhorse: it expresses what people generally do, and takes the er/sie/es verb form:\n' +
          '  "Man arbeitet hier viel."  (People work a lot here.)\n' +
          '  "Wie sagt man das?"        (How does one say that?)\n' +
          '⚠ Don\'t confuse "man" (one/people) with "der Mann" (the man) — one n vs two.',
      },
      { rule: '📦 INDEFINITE PRONOUNS — things (etwas · nichts · alles)',
        body:
          'For unnamed things — these never change form:\n\n' +
          '  etwas   = something   "Möchtest du etwas?"\n' +
          '  nichts  = nothing     "Ich habe nichts."\n' +
          '  alles   = everything  "Alles ist gut."\n\n' +
          '⚠ With an adjective they take a capitalised -es noun-form: "etwas Gutes" (something good), "nichts Neues" (nothing new), "alles Gute" (all the best). The adjective becomes a neuter noun.',
      },
      { rule: '⚠ jemand / niemand — the -en in the Akkusativ',
        body:
          'jemand and niemand optionally add -en in the Akkusativ and -em in the Dativ:\n\n' +
          '  Nom: Jemand klopft.            (someone is knocking)\n' +
          '  Akk: Ich sehe jemanden.         (I see someone)  ← +en\n' +
          '  Dat: Ich gebe es jemandem.      (I give it to someone)  ← +em\n\n' +
          'In everyday speech you\'ll hear the bare form too ("Ich sehe jemand"), but the -en/-em forms are the textbook-correct ones. niemand works identically (niemanden / niemandem).',
      },
      { rule: '🚦 PITFALLS — demonstrative & indefinite traps',
        body:
          '• dieser takes the SAME ending as der/die/das in every case (dieser/diese/dieses/diesen/diesem).\n' +
          '• "man" ≠ "Mann": man = one/people (impersonal subject), der Mann = the man.\n' +
          '• "man" always uses the er/sie/es verb: "man macht", "man kann".\n' +
          '• jemand/niemand add -en in Akkusativ: "Ich sehe niemanden."\n' +
          '• etwas/nichts/alles never decline — but add a capital -es adjective: "etwas Schönes".\n' +
          '• "alle" (everybody, plural) takes a PLURAL verb: "Alle sind da" (not "ist").',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — demonstrative gender · people pronouns · things pronouns
      { type: 'match',
        pairs: [
          { de: 'dieser (Nom. m)', en: 'der → dieser' },
          { de: 'diese (Nom. f)',  en: 'die → diese' },
          { de: 'dieses (Nom. n)', en: 'das → dieses' },
          { de: 'diesen (Akk. m)', en: 'den → diesen' },
          { de: 'diesem (Dat. m)', en: 'dem → diesem' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'jemand',  en: '🙋 someone' },
          { de: 'niemand', en: '🚷 nobody' },
          { de: 'man',     en: '👥 one / people (general)' },
          { de: 'alle',    en: '👨‍👩‍👧‍👦 everybody (plural)' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'etwas',  en: '📦 something' },
          { de: 'nichts', en: '🚫 nothing' },
          { de: 'alles',  en: '🌍 everything' },
          { de: 'irgendwo', en: '📍 somewhere' },
        ],
      },

      // 👉 5 DEMONSTRATIVE fill-blanks (Nom genders + Akk/Dat)
      { type: 'fill-blank', sentence: '__ Mann arbeitet heute. (this, masc. Nom.)',       answer: 'Dieser' },
      { type: 'fill-blank', sentence: '__ Frau kocht sehr gut. (this, fem.)',             answer: 'Diese' },
      { type: 'fill-blank', sentence: '__ Restaurant ist sehr gut. (this, neuter)',        answer: 'Dieses' },
      { type: 'fill-blank', sentence: 'Ich kaufe __ Tisch. (this, masc. Akk.)',           answer: 'diesen' },
      { type: 'fill-blank', sentence: 'Ich helfe __ Mann. (this, masc. Dat.)',            answer: 'diesem' },

      // 🙋 5 INDEFINITE fill-blanks (people + things)
      { type: 'fill-blank', sentence: 'Indef: __ ist hier. (someone)',                    answer: 'Jemand' },
      { type: 'fill-blank', sentence: 'Indef: Ich sehe __. (someone — Akk gets +en)',     answer: 'jemanden' },
      { type: 'fill-blank', sentence: 'Indef: __ ist zu Hause. (nobody)',                 answer: 'Niemand' },
      { type: 'fill-blank', sentence: 'Indef: Ich habe __. (nothing)',                    answer: 'nichts' },
      { type: 'fill-blank', sentence: 'Indef: __ arbeitet viel. (one / people)',          answer: 'Man' },

      // ⚠ 4 TRAP / CONCEPT MCQs
      { type: 'multiple-choice', q: '"man" takes which verb form?',
        options: ['1st singular (ich)','2nd singular (du)','3rd singular (er/sie/es)','plural (wir)'],
        answer: '3rd singular (er/sie/es)',
        explain: 'man arbeitet, man trinkt, man sagt — like er/sie/es.' },
      { type: 'multiple-choice', q: '⚠ "man" vs "Mann" — "people work a lot" =',
        options: ['Mann arbeitet viel.','Man arbeitet viel.','Der Mann arbeiten viel.','Man arbeiten viel.'],
        answer: 'Man arbeitet viel.',
        explain: 'man (one n) = people/one; takes the er/sie/es form.' },
      { type: 'multiple-choice', q: 'Akkusativ of "jemand":',
        options: ['jemand','jemanden','jemandem','jemands'], answer: 'jemanden',
        explain: 'jemand adds -en in the Akkusativ.' },
      { type: 'multiple-choice', q: '"something good" =',
        options: ['etwas gut','etwas Gutes','etwas gute','gut etwas'], answer: 'etwas Gutes',
        explain: 'etwas + capitalised -es adjective → etwas Gutes.' },

      // 💬 Mini dialogue — demonstratives + indefinites in conversation
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Möchtest du etwas trinken?',                 en: 'Would you like something to drink?' },
        { speaker: 'B', de: 'Nein danke, ich brauche nichts.',           en: 'No thanks, I need nothing.' },
        { speaker: 'A', de: 'Kennst du diesen Mann dort?',               en: 'Do you know this man over there?' },
        { speaker: 'B', de: 'Nein, niemand kennt ihn.',                  en: 'No, nobody knows him.' },
        { speaker: 'A', de: 'In dieser Stadt arbeitet man viel.',        en: 'In this city people work a lot.' },
        { speaker: 'B', de: 'Ja, aber alles ist hier sehr schön!',       en: 'Yes, but everything here is very nice!' },
      ]},
    ],
    quiz: [
      { type: 'multiple-choice', q: '"This child" — pick the article.',
        options: ['dieser','diese','dieses','das'], answer: 'dieses' },
      { type: 'fill-blank', sentence: 'Akk masc.: "Ich kaufe __ Tisch." (this)', answer: 'diesen' },
      { type: 'multiple-choice', q: '"man" uses which verb form?',
        options: ['ich-form','du-form','er/sie/es-form','wir-form'], answer: 'er/sie/es-form' },
      { type: 'fill-blank', sentence: 'Akkusativ: "Ich sehe __." (someone)', answer: 'jemanden' },
      { type: 'multiple-choice', q: '"nothing" =',
        options: ['etwas','nichts','alles','niemand'], answer: 'nichts' },
      { type: 'multiple-choice', q: '⚠ "everybody is here" (plural) =',
        options: ['Alle ist hier.','Alle sind hier.','Alles sind hier.','Man sind hier.'],
        answer: 'Alle sind hier.', explain: 'alle (plural) takes a plural verb → sind.' },
      { type: 'fill-blank', sentence: '"something good" → etwas __', answer: 'Gutes', hint: 'capital, -es ending' },
    ],
  },

  /* ----- Day 44: A2 mid-review ----- */
  {
    id: 44, week: 7,
    vocabLayout: 'spotlight',
    title: 'A2 mid-review',
    titleDe: 'A2 Zwischenwiederholung',
    emoji: '🎯',
    objective: 'Lock in everything new from Days 28-38 — Akk/Dat pronouns, the Wechsel prepositions, the three connector groups, and demonstratives/indefinites — before the past tenses begin.',
    intro: 'A focused A2 checkpoint on the second half of the case-and-glue stretch: 👤 Akkusativ vs Dativ pronouns → 🔀 Wechselpräpositionen (Wo?/Wohin?) → 🔗 connectors (verb-stays / verb-to-end / inversion) → 👉 demonstratives (dieser) & indefinites (jemand/man/etwas). Scroll the keystones, read the recap cards, then aim for ≥ 80% — that means you are ready for Perfekt and the past tenses.',
    vocabulary: [
      // 👤 PRONOUNS — Akkusativ vs Dativ (Days 28-29)
      { de: 'mich ↔ mir',  en: 'me: Akk ↔ Dat',    emoji: '⚖️', hint: '🔁 Day 28-29 · sehen mich / helfen mir',  example: 'Er sieht mich. / Er hilft mir.',   exampleEn: 'He sees me. / He helps me.' },
      { de: 'dich ↔ dir',  en: 'you: Akk ↔ Dat',   emoji: '⚖️', hint: '🔁 Day 28-29 · lieben dich / danken dir', example: 'Ich liebe dich. / Ich danke dir.', exampleEn: 'I love you. / I thank you.' },
      { de: 'ihn ↔ ihm',   en: 'him: Akk ↔ Dat',   emoji: '⚖️', hint: '⭐ the killer pair · ihn(Akk)/ihm(Dat)',  example: 'Ich sehe ihn. / Ich helfe ihm.',  exampleEn: 'I see him. / I help him.' },
      { de: 'sie ↔ ihr',   en: 'her: Akk ↔ Dat',   emoji: '⚖️', hint: '🔁 Day 28-29 · sie(Akk)/ihr(Dat)',       example: 'Ich sehe sie. / Ich danke ihr.',  exampleEn: 'I see her. / I thank her.' },

      // 🔀 WECHSEL PREPOSITIONS (Day 30)
      { de: 'in (Wo? → Dat)',  en: 'in (location → Dativ)',  emoji: '📍', hint: '🔁 Day 30 · no movement',         example: 'Ich bin in der Stadt.',           exampleEn: 'I am in the city.' },
      { de: 'in (Wohin? → Akk)', en: 'into (movement → Akk)', emoji: '➡️', hint: '🔁 Day 30 · movement',           example: 'Ich gehe in die Stadt.',          exampleEn: 'I go into the city.' },
      { de: 'ins / im',    en: 'in+das (Akk) / in+dem (Dat)', emoji: '🔗', hint: '🔁 Day 30 · -s=movement, -m=location', example: 'Ich gehe ins Kino. / Ich bin im Kino.', exampleEn: 'I go into the cinema. / I am in the cinema.' },
      { de: 'für / um / ohne', en: 'always-Akkusativ preps', emoji: '🎯', hint: '🔁 Day 30 · FUDGO',               example: 'Das ist für dich.',               exampleEn: 'That is for you.' },

      // 🔗 CONNECTORS — the three groups (Day 37)
      { de: 'und / aber / denn', en: 'verb stays slot 2',   emoji: '🟢', hint: '🔁 Day 37 · coordinating',         example: 'Ich lerne, denn ich will reisen.', exampleEn: 'I learn, because I want to travel.' },
      { de: 'weil / dass / wenn', en: 'verb to the END',    emoji: '🔴', hint: '🔁 Day 37 · subordinating',        example: 'Ich lerne, weil ich reisen will.', exampleEn: 'I learn because I want to travel.' },
      { de: 'deshalb / dann',   en: 'V2 inversion',         emoji: '🟡', hint: '🔁 Day 37 · adverb-connectors',    example: 'Ich bin müde, deshalb gehe ich.', exampleEn: 'I am tired, so I am going.' },

      // 👉 DEMONSTRATIVES & INDEFINITES (Day 38)
      { de: 'dieser / diese / dieses', en: 'this (declines like der)', emoji: '👉', hint: '🔁 Day 38 · same endings as der/die/das', example: 'Dieses Buch ist gut.',     exampleEn: 'This book is good.' },
      { de: 'jemand / niemand', en: 'someone / nobody',     emoji: '🙋', hint: '🔁 Day 38 · Akk → jemanden',        example: 'Niemand ist hier.',               exampleEn: 'Nobody is here.' },
      { de: 'man',         en: 'one / people (general)',    emoji: '👥', hint: '🔁 Day 38 · takes er/sie/es verb',  example: 'Man arbeitet hier viel.',         exampleEn: 'People work a lot here.' },
      { de: 'etwas / nichts', en: 'something / nothing',    emoji: '📦', hint: '🔁 Day 38 · no change',             example: 'Ich habe nichts.',               exampleEn: 'I have nothing.' },
      { de: 'kein / nicht', en: 'no/none vs not',           emoji: '🚫', hint: '🔁 Day 42 · ein-noun→kein, else→nicht', example: 'Ich habe keine Zeit.',        exampleEn: 'I have no time.' },
    ],
    grammar: [
      { rule: '✅ Pronouns recap — Akkusativ vs Dativ',
        body:
          '   Subject   Akkusativ   Dativ\n' +
          '   ich       mich        mir\n' +
          '   du        dich        dir\n' +
          '   er        ihn         ihm     ⚠ the killer pair\n' +
          '   sie(she)  sie         ihr\n' +
          '   wir       uns         uns     ✅ same\n' +
          '   ihr       euch        euch    ✅ same\n' +
          '   sie/Sie   sie/Sie     ihnen/Ihnen\n\n' +
          'The VERB or PREPOSITION decides the case: normal Akk verbs → left column; Dativ verbs (helfen/danken) + Dativ preps → right column.',
      },
      { rule: '✅ Wechselpräpositionen recap — Wo? vs Wohin?',
        body:
          'in · an · auf · über · unter · vor · hinter · neben · zwischen take EITHER case:\n\n' +
          '  📍 Wo? (location, no movement) → DATIV    "Ich bin in der Stadt."\n' +
          '  ➡️ Wohin? (movement)           → AKKUSATIV "Ich gehe in die Stadt."\n\n' +
          'Contractions: ins/ans = movement (Akk) · im/am = location (Dat). Also recall: mit/bei/zu… = always Dativ; für/um/ohne/durch/gegen = always Akkusativ.',
      },
      { rule: '✅ Connectors recap — three word-order groups',
        body:
          '🟢 und · oder · aber · denn · sondern → word order UNCHANGED (verb stays slot 2).\n' +
          '🔴 weil · dass · wenn · obwohl · ob → conjugated verb JUMPS to the END.\n' +
          '🟡 deshalb · dann · trotzdem → V2 inversion (verb 2nd, subject 3rd).\n\n' +
          '  "Ich lerne, DENN ich will reisen." (denn → normal)\n' +
          '  "Ich lerne, WEIL ich reisen will." (weil → verb to end)\n' +
          '  "Ich bin müde, DESHALB gehe ich." (deshalb → inversion)',
      },
      { rule: '✅ Demonstratives & indefinites recap',
        body:
          '👉 dieser/diese/dieses ("this") declines exactly like der/die/das: dieser→diesen→diesem.\n' +
          '🙋 jemand (someone) · niemand (nobody) → add -en in Akk (jemanden/niemanden).\n' +
          '👥 man (one/people) → always subject, takes the er/sie/es verb form.\n' +
          '📦 etwas (something) · nichts (nothing) · alles (everything) → never change.\n' +
          '🚫 Negation: ein-noun → kein (declines like ein); verb/adj/specific noun → nicht.',
      },
      { rule: '🎯 The 5 A2 mistakes to never make again',
        body:
          '1. "Ich helfe ihn" ✗ → Dativ verb → "ihm." ✓\n' +
          '2. "Ich gehe in der Stadt" ✗ (movement) → "in die Stadt." ✓\n' +
          '3. "Ich lerne, weil ich will reisen" ✗ → verb to END → "…weil ich reisen will." ✓\n' +
          '4. "Man arbeiten viel" ✗ → man takes er-form → "Man arbeitet viel." ✓\n' +
          '5. "Ich habe nicht ein Auto" ✗ → "kein Auto." ✓',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — pronoun pairs · connector groups · Wechsel
      { type: 'match',
        pairs: [
          { de: 'sehen / lieben', en: '🟩 Akkusativ pronoun (mich/ihn)' },
          { de: 'helfen / danken', en: '🅿️ Dativ pronoun (mir/ihm)' },
          { de: 'mit / bei / zu', en: '🅿️ always-Dativ prepositions' },
          { de: 'für / um / ohne', en: '🎯 always-Akkusativ prepositions' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'und / aber / denn', en: '🟢 verb stays slot 2' },
          { de: 'weil / dass / wenn', en: '🔴 verb to the END' },
          { de: 'deshalb / dann',     en: '🟡 V2 inversion' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'Wo? (location)',   en: '📍 → Dativ (in der Stadt)' },
          { de: 'Wohin? (movement)', en: '➡️ → Akkusativ (in die Stadt)' },
          { de: 'ins / ans',         en: '🔗 movement contraction (Akk)' },
          { de: 'im / am',           en: '🔗 location contraction (Dat)' },
        ],
      },

      // Mixed-skills fill-blanks + MCQs (preserved from the original)
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

      // ⭐ NEW reinforcing items
      { type: 'fill-blank', sentence: '⚠ Dativ verb: "Ich helfe __." (him)', answer: 'ihm' },
      { type: 'fill-blank', sentence: 'man + verb: "__ arbeitet hier viel." (one/people)', answer: 'Man' },
      { type: 'multiple-choice', q: '⚠ "I am going INTO the city" =',
        options: ['Ich gehe in der Stadt.','Ich gehe in die Stadt.','Ich bin in die Stadt.','Ich gehe im Stadt.'],
        answer: 'Ich gehe in die Stadt.', explain: 'Movement (Wohin?) → Akkusativ.' },
      { type: 'multiple-choice', q: 'After "weil", the verb goes…',
        options: ['to slot 1','to slot 2','to the END','nowhere'], answer: 'to the END' },

      // 💬 Mini dialogue — pronouns + connectors + man
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Kennst du diesen Mann?',                 en: 'Do you know this man?' },
        { speaker: 'B', de: 'Ja, ich sehe ihn oft, aber ich kenne ihn nicht gut.', en: 'Yes, I see him often, but I don\'t know him well.' },
        { speaker: 'A', de: 'Hilfst du ihm manchmal?',               en: 'Do you help him sometimes?' },
        { speaker: 'B', de: 'Ja, weil er neu in der Stadt ist.',     en: 'Yes, because he is new in the city.' },
        { speaker: 'A', de: 'Schön! Hier hilft man einander.',       en: 'Nice! Here people help one another.' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Akk pronoun: "She loves him." → Sie liebt __.', answer: 'ihn' },
      { type: 'fill-blank', sentence: '⚠ Dat pronoun: "I help him." → Ich helfe __.', answer: 'ihm' },
      { type: 'multiple-choice', q: '⚠ "I am going into the city" →',
        options: ['in der Stadt','in die Stadt','im Stadt','zur Stadt'], answer: 'in die Stadt' },
      { type: 'multiple-choice', q: 'Which connector sends the verb to the END?',
        options: ['denn','und','weil','deshalb'], answer: 'weil' },
      { type: 'fill-blank', sentence: 'Demonstrativ: __ Buch ist gut. (this, neuter)', answer: 'Dieses' },
      { type: 'multiple-choice', q: '"man" takes which verb form?',
        options: ['ich-form','du-form','er/sie/es-form','wir-form'], answer: 'er/sie/es-form' },
      { type: 'multiple-choice', q: 'Which preposition is always Akkusativ?',
        options: ['mit','für','bei','zu'], answer: 'für' },
    ],
  },

  /* ----- Day 45: Perfekt I — haben + Partizip II ----- */
  {
    id: 45, week: 7,
    vocabLayout: 'spotlight',
    title: 'Perfekt I — haben + Partizip II',
    titleDe: 'Perfekt I (haben)',
    emoji: '⏪',
    objective: 'Talk about the past the everyday way — haben (slot 2) + Partizip II (at the end) — and build the participle for regular (ge-…-t), irregular (ge-…-en), -ieren and separable verbs.',
    intro: 'The Perfekt is THE spoken past tense in German — you use it for almost everything you\'d say in English past tense. Two ingredients: a conjugated form of haben in slot 2, plus the Partizip II (past participle) at the very END. Today: master the haben-Perfekt and the four participle-building patterns (regular ge-t, irregular ge-en, -ieren without ge-, and separable verbs).',
    vocabulary: [
      // 🔧 THE HELPER (slot 2)
      { de: 'haben (Perfekt-Helfer)', en: 'have (the Perfekt auxiliary)', emoji: '🔧', hint: '⭐ conjugate in slot 2 · habe/hast/hat/haben/habt/haben', example: 'Ich habe gelernt.', exampleEn: 'I have learned / I learned.' },

      // ✅ REGULAR PARTIZIP II — ge + stem + t
      { de: 'gemacht',     en: 'done (machen)',     emoji: '✅', hint: '✅ regular · ge + mach + t',          example: 'Ich habe das gemacht.',          exampleEn: 'I did that.' },
      { de: 'gelernt',     en: 'learned (lernen)',  emoji: '✅', hint: '✅ regular · ge + lern + t',          example: 'Ich habe Deutsch gelernt.',      exampleEn: 'I learned German.' },
      { de: 'gespielt',    en: 'played (spielen)',  emoji: '✅', hint: '✅ regular · ge + spiel + t',         example: 'Wir haben Fußball gespielt.',    exampleEn: 'We played football.' },
      { de: 'gekauft',     en: 'bought (kaufen)',   emoji: '✅', hint: '✅ regular · ge + kauf + t',          example: 'Sie hat ein Brot gekauft.',      exampleEn: 'She bought a bread.' },
      { de: 'gearbeitet',  en: 'worked (arbeiten)', emoji: '✅', hint: '⚠ -t stem → ge + arbeit + ET',        example: 'Ich habe viel gearbeitet.',      exampleEn: 'I worked a lot.' },

      // ⚡ IRREGULAR PARTIZIP II — ge + (changed stem) + en
      { de: 'getrunken',   en: 'drunk (trinken)',   emoji: '⚡', hint: '⚡ irregular · vowel change · ge…en',  example: 'Wir haben Kaffee getrunken.',    exampleEn: 'We drank coffee.' },
      { de: 'gegessen',    en: 'eaten (essen)',     emoji: '⚡', hint: '⚡ irregular · ge + gess + en',        example: 'Ich habe Pizza gegessen.',       exampleEn: 'I ate pizza.' },
      { de: 'gelesen',     en: 'read (lesen)',      emoji: '⚡', hint: '⚡ irregular · ge + les + en',         example: 'Du hast ein Buch gelesen.',      exampleEn: 'You read a book.' },
      { de: 'gesehen',     en: 'seen (sehen)',      emoji: '⚡', hint: '⚡ irregular · ge + seh + en',         example: 'Ich habe den Film gesehen.',     exampleEn: 'I saw the film.' },
      { de: 'geschrieben', en: 'written (schreiben)', emoji: '⚡', hint: '⚡ irregular · ge + schrieb + en',  example: 'Er hat einen Brief geschrieben.', exampleEn: 'He wrote a letter.' },
      { de: 'gesprochen',  en: 'spoken (sprechen)', emoji: '⚡', hint: '⚡ irregular · vowel change · ge…en',  example: 'Ich habe mit ihm gesprochen.',   exampleEn: 'I spoke with him.' },
      { de: 'genommen',    en: 'taken (nehmen)',    emoji: '⚡', hint: '⚡ irregular · ge + nomm + en',        example: 'Ich habe den Bus genommen.',     exampleEn: 'I took the bus.' },

      // 🌍 -IEREN VERBS — NO ge-
      { de: 'studiert',    en: 'studied (studieren)', emoji: '🌍', hint: '⚠ -ieren → NO ge- · just …iert',    example: 'Ich habe Informatik studiert.',  exampleEn: 'I studied computer science.' },
      { de: 'telefoniert', en: 'phoned (telefonieren)', emoji: '🌍', hint: '⚠ -ieren → NO ge-',               example: 'Ich habe mit Anna telefoniert.', exampleEn: 'I phoned Anna.' },

      // 🧩 SEPARABLE — ge goes in the MIDDLE
      { de: 'eingekauft',  en: 'shopped (einkaufen)', emoji: '🧩', hint: '⚠ separable · prefix + GE + stem + t', example: 'Ich habe im Supermarkt eingekauft.', exampleEn: 'I shopped at the supermarket.' },
      { de: 'aufgeräumt',  en: 'tidied up (aufräumen)', emoji: '🧩', hint: '⚠ separable · auf + GE + räum + t', example: 'Ich habe mein Zimmer aufgeräumt.', exampleEn: 'I tidied my room.' },

      // 🕐 TIME MARKERS for the past
      { de: 'gestern',     en: 'yesterday',         emoji: '📅', hint: 'time word · often leads → V2',         example: 'Gestern habe ich gearbeitet.',   exampleEn: 'Yesterday I worked.' },
      { de: 'letzte Woche', en: 'last week',        emoji: '🗓️', hint: 'past time phrase',                     example: 'Letzte Woche habe ich Anna gesehen.', exampleEn: 'Last week I saw Anna.' },
      { de: 'schon',       en: 'already',           emoji: '✔️', hint: '"Hast du schon gegessen?"',            example: 'Ich habe schon gegessen.',       exampleEn: 'I have already eaten.' },
    ],
    grammar: [
      { rule: '⭐ THE PERFEKT FORMULA — haben (slot 2) + Partizip II (END)',
        body:
          'Two ingredients: conjugated haben in slot 2, past participle at the very END.\n\n' +
          '  Subject   haben   … middle …        Partizip II (END)\n' +
          '  Ich       habe    gestern Deutsch   GELERNT.\n' +
          '  Wir       haben   viel Kaffee       GETRUNKEN.\n' +
          '  Du        hast    das Buch          GELESEN.\n\n' +
          '🧠 The Perfekt = English "I have done" AND simple past "I did" — German uses it for both in speech. The participle ALWAYS lands last, no matter how long the sentence.',
      },
      { rule: '✅ REGULAR Partizip II — ge + stem + t',
        body:
          'Most verbs are regular ("weak"): ge + verb-stem + t.\n\n' +
          '  machen  → ge + mach + t  → gemacht\n' +
          '  lernen  → ge + lern + t  → gelernt\n' +
          '  spielen → ge + spiel + t → gespielt\n' +
          '  kaufen  → ge + kauf + t  → gekauft\n\n' +
          '⚠ Stems ending in -t or -d add an extra -e- (like the present tense): arbeiten → ge-arbeit-ET, regnen → ge-regn-ET.',
      },
      { rule: '⚡ IRREGULAR Partizip II — ge + (changed stem) + en',
        body:
          '"Strong" verbs end in -EN (not -t) and often change their stem vowel — memorise them with the verb:\n\n' +
          '  trinken  → getrunken      essen    → gegessen\n' +
          '  lesen    → gelesen        sehen    → gesehen\n' +
          '  sprechen → gesprochen     nehmen   → genommen\n' +
          '  schreiben → geschrieben   finden   → gefunden\n\n' +
          'No reliable rule — but they\'re high-frequency, so they stick fast with use. (Flashcards above drill the top ones.)',
      },
      { rule: '⚠ TWO NO-ge / split-ge groups — -ieren & separable',
        body:
          'Two important exceptions to the ge- prefix:\n\n' +
          '  🌍 -ieren verbs take NO ge- (they\'re loan-words):\n' +
          '     studieren → studiert · telefonieren → telefoniert · fotografieren → fotografiert\n\n' +
          '  🧩 SEPARABLE verbs put -ge- in the MIDDLE (between prefix and stem):\n' +
          '     einkaufen → ein-GE-kauft → eingekauft\n' +
          '     aufräumen → auf-GE-räumt → aufgeräumt\n' +
          '     anrufen   → an-GE-rufen → angerufen\n\n' +
          '⚠ Also: inseparable prefixes (be-, ver-, er-, ent-) take NO ge-: besuchen → besucht, verstehen → verstanden.',
      },
      { rule: '🕐 WORD ORDER with time words',
        body:
          'The participle stays at the END even when a time word leads (V2 rule still applies — the subject moves after haben):\n\n' +
          '  Ich habe gestern gearbeitet.\n' +
          '  GESTERN habe ich gearbeitet.   (time leads → "ich" after habe)\n' +
          '  Letzte Woche haben wir Anna gesehen.\n\n' +
          'Question form: haben to slot 1 → "HAST du schon gegessen?" (Have you eaten yet?) — participle still last.',
      },
      { rule: '🚦 PITFALLS — Perfekt traps',
        body:
          '• Participle ALWAYS at the end: "Ich habe Deutsch gelernt" (not "Ich habe gelernt Deutsch").\n' +
          '• Regular = ge…t; irregular = ge…en (memorise the strong ones).\n' +
          '• -ieren verbs: NO ge- (studiert, not gestudiert).\n' +
          '• Separable: -ge- in the middle (eingekauft, not geeinkauft).\n' +
          '• Inseparable be-/ver-/er-/ent-: NO ge- (besucht, verstanden).\n' +
          '• -t/-d stems add extra -e-: gearbeitet, not gearbeitt.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — verb→participle · pattern sort · participle→meaning
      { type: 'match',
        pairs: [
          { de: 'machen',   en: 'gemacht (ge…t)' },
          { de: 'trinken',  en: 'getrunken (ge…en)' },
          { de: 'studieren', en: 'studiert (no ge-)' },
          { de: 'einkaufen', en: 'eingekauft (ge in middle)' },
          { de: 'besuchen', en: 'besucht (no ge-)' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'gespielt',   en: '✅ regular ge…t' },
          { de: 'gelesen',    en: '⚡ irregular ge…en' },
          { de: 'telefoniert', en: '🌍 -ieren, no ge-' },
          { de: 'aufgeräumt', en: '🧩 separable, ge in middle' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'getrunken',   en: 'drunk' },
          { de: 'gegessen',    en: 'eaten' },
          { de: 'gesehen',     en: 'seen' },
          { de: 'geschrieben', en: 'written' },
          { de: 'genommen',    en: 'taken' },
        ],
      },

      // ⭐ 6 FULL-PERFEKT fill-blanks (helper + participle) — preserved + extended
      { type: 'fill-blank', sentence: 'Ich __ gestern __. (regular: arbeiten → present perfect)', answer: 'habe gearbeitet', hint: 'two words: helper + participle' },
      { type: 'fill-blank', sentence: 'Wir __ Kaffee __. (irregular: trinken)',                   answer: 'haben getrunken' },
      { type: 'fill-blank', sentence: 'Du __ ein Buch __. (irregular: lesen)',                    answer: 'hast gelesen' },
      { type: 'fill-blank', sentence: 'Sie (she) __ ein Brot __. (regular: kaufen)',              answer: 'hat gekauft' },
      { type: 'fill-blank', sentence: 'Ihr __ Pizza __. (irregular: essen)',                      answer: 'habt gegessen' },
      { type: 'fill-blank', sentence: 'Ich __ mit Anna __. (no-ge: telefonieren)',                answer: 'habe telefoniert' },

      // 🧩 2 PARTICIPLE-BUILDING fill-blanks (-ieren + separable)
      { type: 'fill-blank', sentence: 'Build the participle: studieren → "Ich habe Informatik __."', answer: 'studiert', hint: '-ieren takes no ge-' },
      { type: 'fill-blank', sentence: 'Build the participle: einkaufen → "Ich habe __." ', answer: 'eingekauft', hint: 'separable: -ge- in the middle' },

      // ⚠ 4 PATTERN MCQs
      { type: 'multiple-choice', q: 'Where does the Partizip II go?',
        options: ['Position 1','Position 2','Right after the helper','At the very end of the sentence'],
        answer: 'At the very end of the sentence' },
      { type: 'multiple-choice', q: 'Pick the right Partizip II for "spielen".',
        options: ['gespielen','gespielt','spielt','spielen'], answer: 'gespielt',
        explain: 'Regular verb → ge + stem + t.' },
      { type: 'multiple-choice', q: '⚠ Partizip II of "studieren":',
        options: ['gestudiert','studiert','gestudieren','studieren'], answer: 'studiert',
        explain: '-ieren verbs take NO ge-.' },
      { type: 'multiple-choice', q: '⚠ Partizip II of "einkaufen" (separable):',
        options: ['geeinkauft','eingekauft','einkauft','gekaufein'], answer: 'eingekauft',
        explain: 'Separable → prefix + ge + stem + t.' },

      // 💬 Mini dialogue — talking about yesterday in the Perfekt
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Was hast du gestern gemacht?',            en: 'What did you do yesterday?' },
        { speaker: 'B', de: 'Ich habe gearbeitet und Deutsch gelernt.', en: 'I worked and learned German.' },
        { speaker: 'A', de: 'Hast du auch eingekauft?',                en: 'Did you also go shopping?' },
        { speaker: 'B', de: 'Ja, und ich habe mit Anna telefoniert.',  en: 'Yes, and I phoned Anna.' },
        { speaker: 'A', de: 'Habt ihr zusammen gegessen?',             en: 'Did you eat together?' },
        { speaker: 'B', de: 'Nein, aber wir haben Kaffee getrunken.',  en: 'No, but we drank coffee.' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: '"I have spoken German." → Ich habe Deutsch __.', answer: 'gesprochen' },
      { type: 'fill-blank', sentence: 'Full Perfekt: "We drank coffee." → Wir __ Kaffee __.', answer: 'haben getrunken' },
      { type: 'multiple-choice', q: 'Partizip II of "machen":',
        options: ['gemacht','gemachen','macht','gemakt'], answer: 'gemacht' },
      { type: 'multiple-choice', q: '⚠ Partizip II of "telefonieren":',
        options: ['getelefoniert','telefoniert','getelefonieren','telefoniert'], answer: 'telefoniert',
        explain: '-ieren → no ge-.' },
      { type: 'multiple-choice', q: 'Where does the participle go in a Perfekt sentence?',
        options: ['slot 1','slot 2','at the END','after the subject'], answer: 'at the END' },
      { type: 'fill-blank', sentence: 'Separable: aufräumen → "Ich habe mein Zimmer __."', answer: 'aufgeräumt' },
      { type: 'multiple-choice', q: 'Which is a REGULAR (ge…t) participle?',
        options: ['getrunken','gelesen','gekauft','gesehen'], answer: 'gekauft' },
    ],
  },

  /* ----- Day 46: Perfekt II — sein + motion verbs ----- */
  {
    id: 46, week: 7,
    vocabLayout: 'spotlight',
    title: 'Perfekt II — sein + motion verbs',
    titleDe: 'Perfekt II (sein)',
    emoji: '🚶',
    objective: 'Choose the right Perfekt helper — sein for verbs of motion (A→B) and change of state, haben for everything else — and conjugate sein in slot 2.',
    intro: 'Day 45 built the Perfekt with haben. Today: the small but vital group that takes SEIN instead. The rule of thumb: did the subject MOVE from A to B (gehen, fahren, kommen, fliegen) or CHANGE STATE (werden, aufstehen, einschlafen)? → sein. Plus three must-know exceptions (bleiben, sein, passieren). Everything else stays with haben.',
    vocabulary: [
      // 🔧 THE SEIN HELPER (slot 2)
      { de: 'sein (Perfekt-Helfer)', en: 'be (the sein-Perfekt auxiliary)', emoji: '🔧', hint: '⭐ slot 2 · bin/bist/ist/sind/seid/sind', example: 'Ich bin gegangen.', exampleEn: 'I went / I have gone.' },

      // 🚶 MOTION VERBS (A → B) — sein
      { de: 'gegangen',  en: 'gone (gehen)',           emoji: '🚶', hint: '🚶 motion → sein · "bin gegangen"',     example: 'Ich bin nach Hause gegangen.',   exampleEn: 'I went home.' },
      { de: 'gefahren',  en: 'driven/travelled (fahren)', emoji: '🚗', hint: '🚗 motion → sein',                  example: 'Wir sind nach Berlin gefahren.', exampleEn: 'We drove to Berlin.' },
      { de: 'gekommen',  en: 'come (kommen)',          emoji: '🚪', hint: '🚪 motion → sein',                      example: 'Du bist zu spät gekommen.',      exampleEn: 'You came too late.' },
      { de: 'geflogen',  en: 'flown (fliegen)',        emoji: '✈️', hint: '✈️ motion → sein',                     example: 'Ich bin nach Indien geflogen.',  exampleEn: 'I flew to India.' },
      { de: 'gelaufen',  en: 'run/walked (laufen)',    emoji: '🏃', hint: '🏃 motion → sein',                      example: 'Sie ist schnell gelaufen.',      exampleEn: 'She ran fast.' },
      { de: 'gereist',   en: 'travelled (reisen)',     emoji: '🧳', hint: '🧳 motion → sein · regular ge…t',       example: 'Wir sind viel gereist.',         exampleEn: 'We travelled a lot.' },

      // 🔄 CHANGE-OF-STATE VERBS — sein
      { de: 'geworden',  en: 'become (werden)',        emoji: '🔄', hint: '🔄 change of state → sein',            example: 'Er ist Arzt geworden.',          exampleEn: 'He became a doctor.' },
      { de: 'aufgestanden', en: 'got up (aufstehen ★)', emoji: '⏰', hint: '🔄 change + separable → sein',         example: 'Ich bin um 7 Uhr aufgestanden.', exampleEn: 'I got up at 7.' },
      { de: 'eingeschlafen', en: 'fallen asleep (einschlafen ★)', emoji: '💤', hint: '🔄 change + separable → sein', example: 'Das Kind ist eingeschlafen.',  exampleEn: 'The child fell asleep.' },
      { de: 'gewachsen', en: 'grown (wachsen)',        emoji: '🌱', hint: '🔄 change of state → sein',            example: 'Der Baum ist gewachsen.',        exampleEn: 'The tree has grown.' },

      // ⚠ THE THREE EXCEPTIONS — no motion, but still sein
      { de: 'geblieben', en: 'stayed (bleiben)',       emoji: '🛑', hint: '⚠ exception · no motion but → sein',    example: 'Ich bin zu Hause geblieben.',    exampleEn: 'I stayed home.' },
      { de: 'gewesen',   en: 'been (sein)',            emoji: '⭐', hint: '⚠ exception · sein\'s own participle → sein', example: 'Ich bin in Berlin gewesen.',  exampleEn: 'I have been in Berlin.' },
      { de: 'passiert',  en: 'happened (passieren)',   emoji: '❗', hint: '⚠ exception · -ieren no ge- · → sein',  example: 'Was ist passiert?',              exampleEn: 'What happened?' },

      // 🟩 CONTRAST — these stay with HABEN (recap Day 45)
      { de: 'gegessen (haben)', en: 'eaten — takes HABEN', emoji: '🍽️', hint: '🟩 no motion → haben',            example: 'Ich habe Pizza gegessen.',       exampleEn: 'I ate pizza.' },
      { de: 'eingekauft (haben)', en: 'shopped — separable BUT haben', emoji: '🛒', hint: '⚠ separable ≠ motion → haben', example: 'Ich habe eingekauft.',     exampleEn: 'I went shopping.' },

      // 🕐 TIME MARKERS
      { de: 'gestern',   en: 'yesterday',              emoji: '📅', hint: 'leads → V2 inversion',                 example: 'Gestern bin ich nach Hause gegangen.', exampleEn: 'Yesterday I went home.' },
      { de: 'letztes Jahr', en: 'last year',          emoji: '🗓️', hint: 'past time phrase',                      example: 'Letztes Jahr sind wir gereist.', exampleEn: 'Last year we travelled.' },
    ],
    grammar: [
      { rule: '⭐ THE DECISION — sein or haben?',
        body:
          'Ask: did the subject MOVE from A to B, or CHANGE STATE? → sein. Otherwise → haben.\n\n' +
          '  🚶 MOTION (A → B):  gehen · fahren · kommen · fliegen · laufen · reisen · schwimmen\n' +
          '     "Ich BIN nach Hause gegangen."\n\n' +
          '  🔄 CHANGE OF STATE: werden (become) · aufstehen (get up) · einschlafen (fall asleep) · wachsen (grow) · sterben (die)\n' +
          '     "Er IST Arzt geworden."\n\n' +
          '  🟩 EVERYTHING ELSE → haben:\n' +
          '     "Ich HABE Pizza gegessen." · "Ich HABE gearbeitet."',
      },
      { rule: '⚠ THE THREE EXCEPTIONS — bleiben · sein · passieren',
        body:
          'These three take sein even though there\'s no obvious motion — just memorise them:\n\n' +
          '  bleiben (to stay)    → Ich BIN zu Hause GEBLIEBEN.\n' +
          '  sein (to be)         → Ich BIN in Berlin GEWESEN.   (sein\'s own participle = gewesen)\n' +
          '  passieren (to happen) → Was IST PASSIERT?            (-ieren → no ge-)\n\n' +
          '🧠 "bleiben/sein" are the famous no-motion sein-verbs. Note "gewesen" (been) and that passieren keeps the -ieren no-ge rule.',
      },
      { rule: '⭐ sein CONJUGATES in slot 2 — same participle position',
        body:
          'The structure is identical to the haben-Perfekt — only the helper changes to sein:\n\n' +
          '  ich    BIN  … gegangen        wir   SIND … gegangen\n' +
          '  du     BIST … gegangen        ihr   SEID … gegangen\n' +
          '  er/sie IST  … gegangen        sie   SIND … gegangen\n\n' +
          '  "Ich BIN nach Hause GEGANGEN." · "Wir SIND in die Stadt GEFAHREN." · "Du BIST zu spät GEKOMMEN."\n' +
          'The Partizip II still lands at the very END.',
      },
      { rule: '🧩 SEPARABLE motion/change verbs — sein + ge-in-middle',
        body:
          'Separable verbs of motion/change take sein, and (as on Day 45) the -ge- goes between prefix and stem:\n\n' +
          '  aufstehen   → aufgestanden   "Ich BIN um 7 aufgestanden."   (change of state → sein)\n' +
          '  einschlafen → eingeschlafen  "Ich BIN eingeschlafen."        (change → sein)\n' +
          '  ankommen    → angekommen     "Der Zug IST angekommen."       (motion → sein)\n\n' +
          '⚠ But a separable verb that is NOT motion/change still takes haben: "Ich HABE eingekauft" (einkaufen). Separable ≠ automatically sein — the motion/change test still rules.',
      },
      { rule: '🚦 PITFALLS — sein-Perfekt traps',
        body:
          '• Motion A→B or change of state → sein; everything else → haben.\n' +
          '• The 3 exceptions: bleiben, sein, passieren → sein (no motion).\n' +
          '• "gewesen" is the participle of sein (Ich bin … gewesen).\n' +
          '• Separable ≠ sein: einkaufen → "habe eingekauft" (not motion); aufstehen → "bin aufgestanden" (change).\n' +
          '• passieren → no ge- (-ieren rule): "ist passiert".\n' +
          '• Participle still at the END; sein conjugates in slot 2.',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — verb→helper · sein-participles · motion vs change vs exception
      { type: 'match',
        pairs: [
          { de: 'gehen / fahren / fliegen', en: '🚶 sein (motion)' },
          { de: 'werden / aufstehen',        en: '🔄 sein (change of state)' },
          { de: 'bleiben / sein / passieren', en: '⚠ sein (exceptions)' },
          { de: 'essen / trinken / arbeiten', en: '🟩 haben (everything else)' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'gegangen',  en: 'gone (gehen)' },
          { de: 'gefahren',  en: 'driven (fahren)' },
          { de: 'geflogen',  en: 'flown (fliegen)' },
          { de: 'geblieben', en: 'stayed (bleiben)' },
          { de: 'geworden',  en: 'become (werden)' },
          { de: 'gewesen',   en: 'been (sein)' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'fahren',    en: '🚶 motion → sein' },
          { de: 'werden',    en: '🔄 change → sein' },
          { de: 'bleiben',   en: '⚠ exception → sein' },
          { de: 'essen',     en: '🟩 → haben' },
        ],
      },

      // 🚶 5 SEIN-Perfekt fill-blanks (preserved + extended)
      { type: 'fill-blank', sentence: 'Ich __ nach Hause __. (gehen)',                answer: 'bin gegangen' },
      { type: 'fill-blank', sentence: 'Wir __ in die Stadt __. (fahren)',             answer: 'sind gefahren' },
      { type: 'fill-blank', sentence: 'Du __ aus der Stadt __. (kommen)',             answer: 'bist gekommen' },
      { type: 'fill-blank', sentence: 'Er __ im Restaurant __. (bleiben — exception!)', answer: 'ist geblieben' },
      { type: 'fill-blank', sentence: 'Ich __ um 7 Uhr __. (aufstehen — separable, change!)', answer: 'bin aufgestanden' },

      // ⚖️ 3 HABEN-vs-SEIN decide-the-helper fill-blanks
      { type: 'fill-blank', sentence: '⚠ Ich __ am Samstag __. (einkaufen — separable, but NOT motion!)', answer: 'habe eingekauft', hint: 'not motion → haben' },
      { type: 'fill-blank', sentence: 'Was __ __? (passieren — exception, -ieren)', answer: 'ist passiert' },
      { type: 'fill-blank', sentence: 'Ich __ Pizza __. (essen — no motion)', answer: 'habe gegessen' },

      // ⚠ 4 HELPER-CHOICE MCQs
      { type: 'multiple-choice', q: '"to drive / travel" → which helper?',
        options: ['haben','sein','either works','depends on subject'], answer: 'sein',
        explain: 'fahren is motion → sein.' },
      { type: 'multiple-choice', q: '"to drink" → which helper?',
        options: ['haben','sein','either works','depends on subject'], answer: 'haben',
        explain: 'No motion, no change of state → haben.' },
      { type: 'multiple-choice', q: '⚠ "to stay (bleiben)" → which helper?',
        options: ['haben','sein','either','none'], answer: 'sein',
        explain: 'bleiben is an exception — no motion, but takes sein.' },
      { type: 'multiple-choice', q: '⚠ "Ich ___ eingekauft." (einkaufen)',
        options: ['bin','habe','ist','sind'], answer: 'habe',
        explain: 'Separable but NOT motion → haben.' },

      // 💬 Mini dialogue — a past trip, sein vs haben mixed
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Wie war dein Wochenende?',                  en: 'How was your weekend?' },
        { speaker: 'B', de: 'Ich bin nach Berlin gefahren.',            en: 'I drove to Berlin.' },
        { speaker: 'A', de: 'Schön! Was hast du dort gemacht?',         en: 'Nice! What did you do there?' },
        { speaker: 'B', de: 'Ich bin viel gelaufen und habe Museen besucht.', en: 'I walked a lot and visited museums.' },
        { speaker: 'A', de: 'Bist du im Hotel geblieben?',              en: 'Did you stay in a hotel?' },
        { speaker: 'B', de: 'Ja, und am Sonntag bin ich zurückgekommen.', en: 'Yes, and on Sunday I came back.' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: '"I have flown to Berlin." → Ich __ nach Berlin __.', answer: 'bin geflogen' },
      { type: 'fill-blank', sentence: 'Change of state: "Er __ Arzt __." (werden)', answer: 'ist geworden' },
      { type: 'multiple-choice', q: '"to go (gehen)" → which helper?',
        options: ['haben','sein','either','none'], answer: 'sein', explain: 'Motion → sein.' },
      { type: 'multiple-choice', q: '⚠ "to eat (essen)" → which helper?',
        options: ['haben','sein','either','none'], answer: 'haben', explain: 'No motion/change → haben.' },
      { type: 'fill-blank', sentence: 'Exception: "Ich __ zu Hause __." (bleiben)', answer: 'bin geblieben' },
      { type: 'multiple-choice', q: 'Participle of "sein" (to be) is…',
        options: ['gesein','gewesen','geseint','gewest'], answer: 'gewesen' },
      { type: 'multiple-choice', q: '⚠ "Ich ___ am Samstag eingekauft." (einkaufen)',
        options: ['bin','habe','ist','sind'], answer: 'habe', explain: 'Separable but not motion → haben.' },
    ],
  },

  /* ----- Day 47: Präteritum (sein + haben) ----- */
  {
    id: 47, week: 7,
    vocabLayout: 'spotlight',
    title: 'Präteritum — war & hatte',
    titleDe: 'Präteritum (sein + haben)',
    emoji: '📜',
    objective: 'Use the simple past of sein (war) and haben (hatte) — the forms that stay Präteritum even in speech — and know when to pick Präteritum over Perfekt.',
    intro: 'Day 45-46 gave you the Perfekt — the everyday spoken past. Today the key EXCEPTION: sein and haben almost always use the Präteritum (war / hatte), even in conversation. "Ich war müde" sounds natural; "Ich bin müde gewesen" sounds odd. Modal verbs lean Präteritum too (musste, konnte). Everything else stays Perfekt in speech.',
    vocabulary: [
      // 🟦 SEIN → WAR (all six forms)
      { de: 'ich war',      en: 'I was',          emoji: '🟦', hint: '⭐ sein Präteritum · no ending',       example: 'Ich war gestern müde.',          exampleEn: 'I was tired yesterday.' },
      { de: 'du warst',     en: 'you were (1)',   emoji: '👉', hint: 'war + st',                            example: 'Du warst zu spät.',              exampleEn: 'You were too late.' },
      { de: 'er/sie war',   en: 'he/she/it was',  emoji: '🧑', hint: '⭐ same as ich · no ending',          example: 'Er war im Büro.',                exampleEn: 'He was in the office.' },
      { de: 'wir waren',    en: 'we were',        emoji: '👥', hint: 'war + en',                            example: 'Wir waren im Restaurant.',       exampleEn: 'We were in the restaurant.' },
      { de: 'ihr wart',     en: 'you were (group)', emoji: '👨‍👩‍👧', hint: 'war + t',                       example: 'Ihr wart im Park.',              exampleEn: 'You all were in the park.' },
      { de: 'sie/Sie waren', en: 'they/you (formal) were', emoji: '🧑‍🤝‍🧑', hint: 'war + en',              example: 'Sie waren in Deutschland.',      exampleEn: 'They were in Germany.' },

      // 🟩 HABEN → HATTE (all six forms)
      { de: 'ich hatte',    en: 'I had',          emoji: '🟩', hint: '⭐ haben Präteritum · double t · no ending', example: 'Ich hatte keine Zeit.',     exampleEn: 'I had no time.' },
      { de: 'du hattest',   en: 'you had (1)',    emoji: '👉', hint: 'hatte + st',                          example: 'Du hattest viel Arbeit.',        exampleEn: 'You had a lot of work.' },
      { de: 'er/sie hatte', en: 'he/she/it had',  emoji: '🧑', hint: '⭐ same as ich · no ending',          example: 'Er hatte eine Frage.',           exampleEn: 'He had a question.' },
      { de: 'wir hatten',   en: 'we had',         emoji: '👥', hint: 'hatte + n',                           example: 'Wir hatten ein Meeting.',        exampleEn: 'We had a meeting.' },
      { de: 'ihr hattet',   en: 'you had (group)', emoji: '👨‍👩‍👧', hint: 'hatte + t',                     example: 'Ihr hattet eine Pause.',         exampleEn: 'You all had a break.' },
      { de: 'sie/Sie hatten', en: 'they/you (formal) had', emoji: '🧑‍🤝‍🧑', hint: 'hatte + n',            example: 'Sie hatten einen Bus.',          exampleEn: 'They had a bus.' },

      // 🛠️ MODAL PRÄTERITUM (also natural in speech — preview)
      { de: 'musste',       en: 'had to (müssen)', emoji: '⏰', hint: '🛠️ modal Präteritum · no umlaut!',   example: 'Ich musste arbeiten.',           exampleEn: 'I had to work.' },
      { de: 'konnte',       en: 'could (können)',  emoji: '💪', hint: '🛠️ modal Präteritum · no umlaut!',   example: 'Ich konnte nicht kommen.',       exampleEn: 'I could not come.' },
      { de: 'wollte',       en: 'wanted (wollen)', emoji: '🎯', hint: '🛠️ modal Präteritum',                example: 'Ich wollte nach Hause.',         exampleEn: 'I wanted to go home.' },

      // 🕐 PAST TIME MARKERS
      { de: 'gestern',      en: 'yesterday',      emoji: '📅', hint: 'leads → V2 inversion',                example: 'Gestern war ich krank.',         exampleEn: 'Yesterday I was sick.' },
      { de: 'damals',       en: 'back then',      emoji: '⏳', hint: 'narrative past marker',               example: 'Damals hatten wir kein Auto.',   exampleEn: 'Back then we had no car.' },
    ],
    grammar: [
      { rule: '🟦 sein → war (the full Präteritum)',
        body:
          '  ich  war          wir  waren\n' +
          '  du   warst        ihr  wart\n' +
          '  er/sie/es war     sie/Sie  waren\n\n' +
          '⭐ Like the present tense, ich and er/sie/es are IDENTICAL (both "war") and take NO ending. "Ich war müde." · "Es war kalt."',
      },
      { rule: '🟩 haben → hatte (the full Präteritum)',
        body:
          '  ich  hatte        wir  hatten\n' +
          '  du   hattest      ihr  hattet\n' +
          '  er/sie/es hatte   sie/Sie  hatten\n\n' +
          '⭐ Note the DOUBLE t (hatte, not "hate") and again ich = er/sie/es. "Ich hatte Zeit." · "Sie hatte eine Idee."',
      },
      { rule: '⭐ PRÄTERITUM vs PERFEKT — which past tense?',
        body:
          'Two past tenses, different jobs in SPEECH:\n\n' +
          '  • sein + haben → Präteritum (war / hatte) — even in conversation.\n' +
          '       "Ich WAR müde." ✓   (not "Ich bin müde gewesen" ✗-sounding)\n' +
          '       "Ich HATTE Zeit." ✓ (not "Ich habe Zeit gehabt" ✗-sounding)\n\n' +
          '  • Modal verbs → Präteritum is also natural: musste · konnte · wollte · durfte · sollte.\n' +
          '       "Ich MUSSTE arbeiten." ✓\n\n' +
          '  • ALL OTHER verbs → use Perfekt in speech (Day 45-46): "Ich HABE gearbeitet", "Ich BIN gegangen".\n' +
          '       Their Präteritum (ich arbeitete, ich ging) is mostly for WRITTEN stories/news.',
      },
      { rule: '🛠️ MODAL Präteritum — drop the umlaut',
        body:
          'Modal verbs form the Präteritum by dropping any umlaut and adding -te:\n\n' +
          '  müssen → musste     können → konnte     dürfen → durfte\n' +
          '  wollen → wollte     sollen → sollte     mögen → mochte\n\n' +
          '⚠ The umlaut DISAPPEARS: müssen→musste (not "müsste" — that\'s a different mood), können→konnte. "Gestern konnte ich nicht kommen, ich musste arbeiten."',
      },
      { rule: '🚦 PITFALLS — Präteritum traps',
        body:
          '• sein → war, haben → hatte: use these in speech, NOT their Perfekt.\n' +
          '• ich = er/sie/es in the Präteritum (war / hatte — no ending).\n' +
          '• hatte has a DOUBLE t; war has none.\n' +
          '• Modal Präteritum drops the umlaut: musste/konnte/durfte (not müsste/könnte).\n' +
          '• Every OTHER verb → Perfekt in conversation (ich habe gemacht, not "ich machte" in speech).\n' +
          '• Time leads → V2: "Gestern war ich müde" (verb in slot 2).',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — war forms · hatte forms · tense choice
      { type: 'match',
        pairs: [
          { de: 'ich / er / sie / es', en: 'war' },
          { de: 'du',                  en: 'warst' },
          { de: 'wir / sie / Sie',     en: 'waren' },
          { de: 'ihr',                 en: 'wart' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'ich / er / sie / es', en: 'hatte' },
          { de: 'du',                  en: 'hattest' },
          { de: 'wir / sie / Sie',     en: 'hatten' },
          { de: 'ihr',                 en: 'hattet' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'sein / haben (past)', en: '📜 Präteritum (war/hatte)' },
          { de: 'modal verbs (past)',  en: '📜 Präteritum (musste/konnte)' },
          { de: 'all other verbs (spoken past)', en: '⏪ Perfekt (habe/bin …)' },
        ],
      },

      // 🟦 4 sein → war fill-blanks (preserved core)
      { type: 'fill-blank', sentence: '"I was tired." → Ich __ müde.',                  answer: 'war' },
      { type: 'fill-blank', sentence: '"We were in the restaurant." → Wir __ im Restaurant.', answer: 'waren' },
      { type: 'fill-blank', sentence: '"You (1) were late." → Du __ spät.',             answer: 'warst' },
      { type: 'fill-blank', sentence: '"You (group) were in the park." → Ihr __ im Park.', answer: 'wart' },

      // 🟩 4 haben → hatte fill-blanks (preserved core)
      { type: 'fill-blank', sentence: '"I had time." → Ich __ Zeit.',                   answer: 'hatte' },
      { type: 'fill-blank', sentence: '"We had a meeting." → Wir __ ein Meeting.',      answer: 'hatten' },
      { type: 'fill-blank', sentence: '"You (1) had a lot of work." → Du __ viel Arbeit.', answer: 'hattest' },
      { type: 'fill-blank', sentence: '"You (group) had a break." → Ihr __ eine Pause.', answer: 'hattet' },

      // 🛠️ 2 modal-Präteritum fill-blanks
      { type: 'fill-blank', sentence: 'Modal past: "I had to work." → Ich __ arbeiten. (müssen)', answer: 'musste' },
      { type: 'fill-blank', sentence: 'Modal past: "I could not come." → Ich __ nicht kommen. (können)', answer: 'konnte' },

      // ⚠ 4 TENSE-CHOICE / TRAP MCQs
      { type: 'multiple-choice', q: 'Most verbs in spoken German use which past tense?',
        options: ['Präteritum','Perfekt','Konjunktiv','Plusquamperfekt'], answer: 'Perfekt',
        explain: 'Reserve Präteritum for sein, haben, and modal verbs in speech.' },
      { type: 'multiple-choice', q: 'Which sounds most natural?',
        options: ['Ich bin müde gewesen.','Ich war müde.','Ich habe müde gewesen.','Ich müde war.'],
        answer: 'Ich war müde.',
        explain: 'sein uses the Präteritum (war) in speech.' },
      { type: 'multiple-choice', q: '⚠ Modal Präteritum of "müssen":',
        options: ['müsste','musste','gemusst','muste'], answer: 'musste',
        explain: 'Drop the umlaut + add -te → musste (müsste is a different mood).' },
      { type: 'multiple-choice', q: 'Präteritum of "haben" for "ich":',
        options: ['habte','hatte','hate','gehabt'], answer: 'hatte',
        explain: 'haben → hatte (double t).' },

      // 💬 Mini dialogue — talking about the past with war/hatte + a modal
      { type: 'dialogue', lines: [
        { speaker: 'A', de: 'Wo warst du gestern?',                     en: 'Where were you yesterday?' },
        { speaker: 'B', de: 'Ich war zu Hause. Ich hatte keine Zeit.',  en: 'I was at home. I had no time.' },
        { speaker: 'A', de: 'Warum?',                                   en: 'Why?' },
        { speaker: 'B', de: 'Ich musste viel arbeiten.',               en: 'I had to work a lot.' },
        { speaker: 'A', de: 'Wir waren im Restaurant. Es war sehr gut!', en: 'We were at the restaurant. It was very good!' },
        { speaker: 'B', de: 'Schade, dass ich nicht kommen konnte.',    en: 'Too bad I couldn\'t come.' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: '"They had a bus." → Sie __ einen Bus.', answer: 'hatten' },
      { type: 'fill-blank', sentence: '"He was in the office." → Er __ im Büro.', answer: 'war' },
      { type: 'multiple-choice', q: 'Which sounds most natural?',
        options: ['Ich bin müde gewesen.','Ich war müde.','Ich habe Zeit gehabt.','Ich müde war.'],
        answer: 'Ich war müde.', explain: 'sein → war in speech.' },
      { type: 'fill-blank', sentence: '"I had no time." → Ich __ keine Zeit.', answer: 'hatte' },
      { type: 'multiple-choice', q: '⚠ Modal past "I could (können)":',
        options: ['könnte','konnte','gekonnt','konte'], answer: 'konnte', explain: 'No umlaut → konnte.' },
      { type: 'multiple-choice', q: 'Which verbs use Präteritum even in speech?',
        options: ['all verbs','only sein/haben/modals','only motion verbs','none'], answer: 'only sein/haben/modals' },
      { type: 'fill-blank', sentence: '"We were in Germany." → Wir __ in Deutschland.', answer: 'waren' },
    ],
  },

  /* ----- Day 48: Konjunktiv II + Imperative ----- */
  {
    id: 48, week: 7,
    vocabLayout: 'spotlight',
    title: 'Konjunktiv II + Imperative',
    titleDe: 'Konjunktiv II + Imperativ',
    emoji: '🙏',
    objective: 'Sound polite with möchte / würde / könnte / hätte gern, and give (kind) commands with the Imperativ in all three forms — du, ihr and Sie.',
    intro: 'The polite-forms finale! "möchte" and "würde" are the two Konjunktiv II forms you need at A1 — they soften wishes and requests into polite German. The Imperativ gives commands and invitations: Komm! Iss! Ruf an! Today you master both, including the three command registers (du / ihr / Sie) and the separable-verb split.',
    vocabulary: [
      // 🙏 KONJUNKTIV II — möchte (would like)
      { de: 'ich möchte',   en: 'I would like',        emoji: '🙏', hint: '⭐ Konj. II of mögen · ich=er, no ending', example: 'Ich möchte einen Kaffee.',     exampleEn: 'I would like a coffee.' },
      { de: 'du möchtest',  en: 'you would like (1)',  emoji: '👉', hint: 'möchte + st',                         example: 'Möchtest du etwas essen?',     exampleEn: 'Would you like something to eat?' },
      { de: 'wir möchten',  en: 'we would like',       emoji: '👥', hint: 'möchte + n',                          example: 'Wir möchten bezahlen.',        exampleEn: 'We would like to pay.' },

      // 🔁 KONJUNKTIV II — würde (would + verb)
      { de: 'ich würde',    en: 'I would',             emoji: '🔁', hint: '⭐ Konj. II of werden · + infinitive at END', example: 'Ich würde gern reisen.',  exampleEn: 'I would like to travel.' },
      { de: 'du würdest',   en: 'you would (1)',       emoji: '👉', hint: 'würde + st',                          example: 'Würdest du mir helfen?',       exampleEn: 'Would you help me?' },
      { de: 'wir würden',   en: 'we would',            emoji: '👥', hint: 'würde + n',                           example: 'Wir würden später kommen.',    exampleEn: 'We would come later.' },

      // ✨ MORE POLITE Konjunktiv II forms (high-frequency)
      { de: 'könnte',       en: 'could (polite)',      emoji: '🪄', hint: 'Konj. II of können · softens a request', example: 'Könnten Sie mir helfen?',     exampleEn: 'Could you help me?' },
      { de: 'hätte gern',   en: 'would like to have',  emoji: '☕', hint: '⭐ Konj. II of haben · THE shop/café phrase', example: 'Ich hätte gern einen Tee.', exampleEn: 'I would like a tea.' },
      { de: 'wäre',         en: 'would be',            emoji: '🌟', hint: 'Konj. II of sein · "das wäre toll"',  example: 'Das wäre super!',              exampleEn: 'That would be great!' },

      // 📣 IMPERATIV — du-form (drop -st, drop pronoun)
      { de: 'Komm!',        en: 'Come! (du)',          emoji: '📣', hint: '⭐ du kommst → Komm! · drop -st + pronoun', example: 'Komm her!',                  exampleEn: 'Come here!' },
      { de: 'Geh!',         en: 'Go! (du)',            emoji: '🚶', hint: 'du gehst → Geh!',                     example: 'Geh nach Hause!',              exampleEn: 'Go home!' },
      { de: 'Iss!',         en: 'Eat! (du)',           emoji: '🍽️', hint: '⚠ stem-changer keeps it: du isst → Iss!', example: 'Iss die Suppe!',           exampleEn: 'Eat the soup!' },
      { de: 'Sei ruhig!',   en: 'Be quiet! (du)',      emoji: '🤫', hint: '⚠ irregular · sein → Sei!',          example: 'Sei bitte ruhig!',             exampleEn: 'Please be quiet!' },
      { de: 'Ruf an!',      en: 'Call! (du, separable)', emoji: '📞', hint: '⚠ separable · prefix to the END',   example: 'Ruf mich an!',                 exampleEn: 'Call me!' },

      // 📣 IMPERATIV — ihr & Sie forms
      { de: 'Kommt!',       en: 'Come! (ihr)',         emoji: '👨‍👩‍👧', hint: 'ihr-form = present tense, drop pronoun', example: 'Kommt herein!',          exampleEn: 'Come in! (you all)' },
      { de: 'Kommen Sie!',  en: 'Come! (formal Sie)',  emoji: '🤝', hint: '⭐ verb + Sie (keep the pronoun!)',   example: 'Kommen Sie bitte herein!',     exampleEn: 'Please come in! (formal)' },
      { de: 'bitte',        en: 'please (softener)',   emoji: '🙇', hint: 'add to ANY imperative to soften it',  example: 'Hilf mir bitte!',              exampleEn: 'Please help me!' },
    ],
    grammar: [
      { rule: '🙏 KONJUNKTIV II — what it is (politeness, not past)',
        body:
          'Konjunktiv II is a MOOD, not a tense — it expresses politeness, wishes and hypotheticals (English "would"). At A1 you need a handful of ready forms:\n\n' +
          '  möchte  — would like        (Konj. II of mögen)\n' +
          '  würde   — would (+ verb)    (Konj. II of werden)\n' +
          '  könnte  — could             (Konj. II of können)\n' +
          '  hätte   — would have        (Konj. II of haben) → "ich hätte gern …"\n' +
          '  wäre    — would be          (Konj. II of sein)  → "das wäre toll"\n\n' +
          '  "Ich MÖCHTE einen Kaffee." · "Ich WÜRDE gern reisen." · "KÖNNTEN Sie helfen?"',
      },
      { rule: '🙏 möchte & würde — the two A1 workhorses',
        body:
          '  möchte (would like)            würde (would)\n' +
          '  ich  möchte                    ich  würde\n' +
          '  du   möchtest                  du   würdest\n' +
          '  er/sie möchte                  er/sie würde\n' +
          '  wir  möchten                   wir  würden\n' +
          '  ihr  möchtet                   ihr  würdet\n' +
          '  sie/Sie möchten                sie/Sie würden\n\n' +
          '⭐ ich = er/sie/es (möchte / würde — no ending). "würde" works with ANY verb: würde + infinitive at the END → "Ich würde gern Deutsch lernen."',
      },
      { rule: '🪄 könnte & hätte gern — extra polish',
        body:
          'Two more high-value polite forms:\n\n' +
          '  könnte — softens a request to "could you …?"\n' +
          '     "KÖNNTEN Sie mir helfen?" (Could you help me?) — gentler than "Können Sie …?"\n\n' +
          '  hätte gern — the natural shop/café order ("I\'d like to have …")\n' +
          '     "Ich HÄTTE GERN einen Kaffee." · "Ich HÄTTE GERN die Rechnung."\n\n' +
          'These rank politest: "Ich hätte gern …" / "Könnten Sie …?" outrank "Ich möchte …", which outranks the blunt "Ich will …".',
      },
      { rule: '📣 THE IMPERATIV — du · ihr · Sie',
        body:
          'Three command forms for the three "you"s:\n\n' +
          '  du   → take the du-form, DROP -st and the pronoun:\n' +
          '         du kommst → Komm! · du gehst → Geh! · du isst → Iss! (stem-change stays)\n' +
          '  ihr  → just the ihr-form, drop the pronoun:\n' +
          '         ihr kommt → Kommt! · ihr geht → Geht!\n' +
          '  Sie  → verb + Sie (KEEP the pronoun, verb first):\n' +
          '         Kommen Sie! · Gehen Sie! · Helfen Sie mir!\n\n' +
          '⚠ Irregular du-imperative: sein → Sei! ("Sei ruhig!"). Add "bitte" to soften any command.',
      },
      { rule: '⚠ SEPARABLE verbs in the Imperativ — prefix to the END',
        body:
          'A separable verb splits in the command, just like a normal sentence — the prefix flies to the end:\n\n' +
          '  anrufen   → Ruf (mich) AN!\n' +
          '  einkaufen → Kauf EIN!\n' +
          '  aufstehen → Steh AUF!\n' +
          '  zumachen  → Mach die Tür ZU!\n\n' +
          'Two words: the stem-command first, the prefix last. With Sie: "Rufen Sie mich an!"',
      },
      { rule: '🚦 PITFALLS — polite-forms & command traps',
        body:
          '• Konjunktiv II = politeness/wishes, NOT past tense.\n' +
          '• ich = er/sie/es: möchte / würde / könnte / hätte / wäre (no ending).\n' +
          '• würde + infinitive at the END: "Ich würde gern kommen."\n' +
          '• du-Imperativ drops -st AND the pronoun: Komm! (not "Du komm!" or "Kommst!").\n' +
          '• Sie-Imperativ KEEPS the pronoun, verb first: "Kommen Sie!".\n' +
          '• Separable command → prefix at the END: "Ruf an!", "Kauf ein!".\n' +
          '• sein is irregular: Sei! (du) / Seid! (ihr) / Seien Sie! (formal).',
      },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },

      // ⭐ 3 INTERACTIVE MATCHES — Konj II form→base verb · politeness ladder · imperative registers
      { type: 'match',
        pairs: [
          { de: 'möchte',  en: 'Konj. II of mögen (would like)' },
          { de: 'würde',   en: 'Konj. II of werden (would)' },
          { de: 'könnte',  en: 'Konj. II of können (could)' },
          { de: 'hätte',   en: 'Konj. II of haben (would have)' },
          { de: 'wäre',    en: 'Konj. II of sein (would be)' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'Ich will einen Kaffee.',        en: '😠 blunt' },
          { de: 'Ich möchte einen Kaffee.',       en: '🙂 polite' },
          { de: 'Ich hätte gern einen Kaffee.',   en: '⭐ most polite' },
          { de: 'Könnten Sie mir helfen?',        en: '🪄 gentle request' },
        ],
      },
      { type: 'match',
        pairs: [
          { de: 'Komm!',       en: '📣 du command' },
          { de: 'Kommt!',      en: '👨‍👩‍👧 ihr command' },
          { de: 'Kommen Sie!', en: '🤝 Sie command (keep pronoun)' },
          { de: 'Sei ruhig!',  en: '⚠ irregular (sein)' },
        ],
      },

      // 🙏 4 KONJUNKTIV II fill-blanks (preserved + extended)
      { type: 'fill-blank', sentence: 'Polite: Ich __ einen Kaffee, bitte. (would like)',  answer: 'möchte' },
      { type: 'fill-blank', sentence: 'Polite: Du __ später essen. (would)',               answer: 'würdest' },
      { type: 'fill-blank', sentence: 'Polite: Wir __ ins Restaurant gehen. (would like)', answer: 'möchten' },
      { type: 'fill-blank', sentence: 'Most polite café order: "Ich __ gern einen Tee." (would like to have)', answer: 'hätte' },

      // 📣 4 IMPERATIV fill-blanks (du / separable / Sie)
      { type: 'fill-blank', sentence: 'Imperativ (du): "Come into the office!" → __ in die Arbeit!', answer: 'Komm' },
      { type: 'fill-blank', sentence: 'Imperativ (du): "Eat the soup!" → __ die Suppe!',            answer: 'Iss' },
      { type: 'fill-blank', sentence: 'Imperativ (du, separable): "Call your friend!" → __ deinen Freund __!', answer: 'Ruf an', hint: 'two words separated by a space — prefix to end' },
      { type: 'fill-blank', sentence: 'Imperativ (formal): "Come in, please!" → __ Sie bitte herein! (kommen)', answer: 'Kommen' },

      // ⚠ 4 CONCEPT / TRAP MCQs
      { type: 'multiple-choice', q: 'Konjunktiv II is used to express…',
        options: ['the past','the future','politeness / wishes','negation'], answer: 'politeness / wishes' },
      { type: 'multiple-choice', q: '"möchten" is the Konjunktiv II form of which verb?',
        options: ['mögen','machen','müssen','möcht'], answer: 'mögen' },
      { type: 'multiple-choice', q: '⚠ du-Imperativ of "kommen":',
        options: ['Du komm!','Komm!','Kommst!','Kommen!'], answer: 'Komm!',
        explain: 'Drop -st AND the pronoun → Komm!' },
      { type: 'multiple-choice', q: '⚠ Formal Sie-Imperativ of "helfen":',
        options: ['Helf Sie!','Helfen Sie!','Sie helfen!','Hilf Sie!'], answer: 'Helfen Sie!',
        explain: 'Sie-command keeps the pronoun, verb first.' },

      // 💬 Mini dialogue — polite forms + imperatives in a café
      { type: 'dialogue', lines: [
        { speaker: 'Gast',    de: 'Guten Tag! Ich hätte gern einen Kaffee.',     en: 'Good day! I would like a coffee.' },
        { speaker: 'Kellner', de: 'Gern. Möchten Sie auch etwas essen?',         en: 'Gladly. Would you also like something to eat?' },
        { speaker: 'Gast',    de: 'Ja, ich würde gern ein Stück Kuchen nehmen.', en: 'Yes, I would like to have a piece of cake.' },
        { speaker: 'Kellner', de: 'Natürlich. Nehmen Sie bitte Platz!',          en: 'Of course. Please take a seat!' },
        { speaker: 'Gast',    de: 'Könnten Sie mir auch die Rechnung bringen?',  en: 'Could you also bring me the bill?' },
        { speaker: 'Kellner', de: 'Sehr gern. Einen Moment, bitte!',             en: 'Very gladly. One moment, please!' },
      ]},
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Imperativ: "Buy the bread!" → __ das Brot __!', answer: 'Kauf ein' },
      { type: 'fill-blank', sentence: 'Polite: "I would like a coffee." → Ich __ einen Kaffee.', answer: 'möchte' },
      { type: 'multiple-choice', q: 'Konjunktiv II expresses…',
        options: ['the past','politeness / wishes','the future','a command'], answer: 'politeness / wishes' },
      { type: 'multiple-choice', q: '⚠ du-Imperativ of "sein" (be quiet!):',
        options: ['Sei!','Bist!','Sein!','Du sei!'], answer: 'Sei!', explain: 'sein is irregular → Sei!' },
      { type: 'fill-blank', sentence: 'Most polite: "I would like to have a tea." → Ich __ gern einen Tee.', answer: 'hätte' },
      { type: 'multiple-choice', q: 'Formal Sie-Imperativ of "kommen":',
        options: ['Komm Sie!','Kommen Sie!','Sie kommen!','Kommt Sie!'], answer: 'Kommen Sie!' },
      { type: 'fill-blank', sentence: 'Separable command (du): "Call me!" → __ mich __! (anrufen)', answer: 'Ruf an' },
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
      summary: 'Highlighted cells are the forms that CHANGE from the Nominativ baseline.',
      table: {
        head: ['', 'masc.', 'fem.', 'neut.', 'plural'],
        rows: [
          ['Nominativ',   'der',                  'die',                  'das',   'die'],
          ['Akkusativ',   { t: 'den', hl: true }, 'die',                  'das',   'die'],
          ['Dativ',       { t: 'dem', hl: true }, { t: 'der', hl: true }, { t: 'dem', hl: true }, { t: 'den +n', hl: true }],
          ['ein (Nom.)',  'ein',                   'eine',                'ein',   '—'],
          ['ein (Akk.)',  { t: 'einen', hl: true }, 'eine',               'ein',   '—'],
          ['ein (Dat.)',  { t: 'einem', hl: true }, { t: 'einer', hl: true }, { t: 'einem', hl: true }, '—'],
        ],
      },
      tip: 'Three shortcuts: (1) only MASCULINE changes in the Akkusativ; (2) masc. & neuter are identical in the Dativ (dem/einem); (3) plural Dativ adds -n to the noun (den Kindern).',
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
