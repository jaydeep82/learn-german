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
      { de: 'Vater',   en: 'father',   hint: 'V sounds like F' },
      { de: 'Wasser',  en: 'water',    hint: 'W sounds like soft V' },
      { de: 'Zeit',    en: 'time',     hint: 'Z sounds like ts' },
      { de: 'ja',      en: 'yes',      hint: 'J sounds like Y' },
      { de: 'Bach',    en: 'stream',   hint: 'ch — let air flow' },
      { de: 'Schule',  en: 'school',   hint: 'sch = English sh' },
      { de: 'Bär',     en: 'bear',     hint: 'ä = open eh' },
      { de: 'schön',   en: 'beautiful',hint: 'ö = round lips, say er' },
      { de: 'müde',    en: 'tired',    hint: 'ü = lips for oo, say ee' },
    ],
    grammar: [
      { rule: 'V → F', body: 'Vater, Vogel, viel — the V is pronounced like English F.' },
      { rule: 'W → soft V', body: 'Wasser, Wein, was — softer than English V.' },
      { rule: 'Z → ts', body: 'Zeit, Zoo, zehn — never like English Z.' },
      { rule: 'J → Y', body: 'ja, Jahr, Junge — never like English J.' },
      { rule: 'ch / sch', body: 'ch = airy sound (Bach). sch = English sh (Schule).' },
      { rule: 'Umlauts ä ö ü', body: 'On a US keyboard you may type ae, oe, ue.' },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      {
        type: 'multiple-choice',
        q: 'Which letter is pronounced like English "Y"?',
        options: ['V', 'J', 'Z', 'W'],
        answer: 'J',
        explain: '"ja" is said "ya".',
      },
      {
        type: 'multiple-choice',
        q: 'How is "Zeit" pronounced?',
        options: ['Zait (English Z)', 'Tsait', 'Sait', 'Yait'],
        answer: 'Tsait',
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
    ],
    quiz: [
      { type: 'multiple-choice', q: 'German "W" sounds most like…', options: ['English W', 'English soft V', 'F', 'Silent'], answer: 'English soft V' },
      { type: 'multiple-choice', q: 'Pick the correct umlaut spelling for "schoen".', options: ['schön','schon','schoen','schøn'], answer: 'schön' },
    ],
  },

  {
    id: 2, week: 1,
    title: 'Numbers 0–29',
    titleDe: 'Zahlen 0–29',
    emoji: '🔢',
    objective: 'Count from zero to twenty-nine.',
    intro: 'After 20, German flips the order: 21 is "ein-und-zwanzig" — literally "one-and-twenty".',
    vocabulary: [
      { de: 'null', en: '0' }, { de: 'eins', en: '1' }, { de: 'zwei', en: '2' },
      { de: 'drei', en: '3' }, { de: 'vier', en: '4' }, { de: 'fünf', en: '5' },
      { de: 'sechs', en: '6' }, { de: 'sieben', en: '7' }, { de: 'acht', en: '8' },
      { de: 'neun', en: '9' }, { de: 'zehn', en: '10' }, { de: 'elf', en: '11' },
      { de: 'zwölf', en: '12' }, { de: 'dreizehn', en: '13' }, { de: 'vierzehn', en: '14' },
      { de: 'fünfzehn', en: '15' }, { de: 'sechzehn', en: '16' }, { de: 'siebzehn', en: '17' },
      { de: 'achtzehn', en: '18' }, { de: 'neunzehn', en: '19' }, { de: 'zwanzig', en: '20' },
      { de: 'einundzwanzig', en: '21' }, { de: 'zweiundzwanzig', en: '22' },
      { de: 'fünfundzwanzig', en: '25' }, { de: 'neunundzwanzig', en: '29' },
    ],
    grammar: [
      { rule: 'The "and-twenty" pattern', body: 'For 21–29 use [unit] + und + zwanzig. Note: 21 drops the "s" → einundzwanzig (not einsundzwanzig).' },
      { rule: 'Spelling oddities', body: 'sechzehn (no -s-), siebzehn (no -en-), dreißig (with ß) at 30.' },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      { type: 'multiple-choice', q: 'How do you say 21?', options: ['zwanzigeins','einundzwanzig','einszwanzig','zwanzigundeins'], answer: 'einundzwanzig' },
      { type: 'fill-blank', sentence: 'Ich bin __ Jahre alt. (25)', answer: 'fünfundzwanzig' },
      { type: 'match', pairs: [
        { de: 'sieben', en: '7' }, { de: 'zwölf', en: '12' },
        { de: 'achtzehn', en: '18' }, { de: 'zweiundzwanzig', en: '22' },
      ]},
    ],
    quiz: [
      { type: 'multiple-choice', q: 'Which number is "fünfzehn"?', options: ['5','15','50','55'], answer: '15' },
      { type: 'fill-blank', sentence: '13 = __', answer: 'dreizehn' },
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
      conjEx('sein', 'to be'),
      { type: 'fill-blank', sentence: 'Ich __ Softwareentwickler.',  answer: 'bin' },
      { type: 'fill-blank', sentence: 'Wir __ Kollegen.',            answer: 'sind' },
      { type: 'fill-blank', sentence: 'Er __ hier.',                 answer: 'ist' },
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
    ],
    exercises: [
      conjEx('haben', 'to have'),
      { type: 'fill-blank', sentence: 'Ich __ Hunger.',   answer: 'habe' },
      { type: 'fill-blank', sentence: 'Sie __ eine Idee.', answer: 'hat' },
      { type: 'fill-blank', sentence: 'Wir __ Zeit.',      answer: 'haben' },
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
      conjEx('werden', 'to become'),
      { type: 'fill-blank', sentence: 'Ich __ müde.',     answer: 'werde' },
      { type: 'fill-blank', sentence: 'Es __ besser.',    answer: 'wird' },
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
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      { type: 'multiple-choice', q: 'In "Der Lehrer erklärt das Wort", what is the subject?', options: ['Der Lehrer','erklärt','das Wort','Wort'], answer: 'Der Lehrer' },
      { type: 'multiple-choice', q: 'And the object?', options: ['Der Lehrer','erklärt','das Wort','das'], answer: 'das Wort' },
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
    ],
    grammar: [
      { rule: 'Stem-changers', body: 'essen → ich esse, du isst, er isst. sehen → du siehst, er sieht. The change happens only in du / er / sie / es.' },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      { type: 'fill-blank', sentence: 'Du __ einen Apfel. (essen)', answer: 'isst' },
      { type: 'fill-blank', sentence: 'Sie (she) __ ein Buch. (lesen)', answer: 'liest' },
      { type: 'multiple-choice', q: '"er sprechen" → ?', options: ['sprecht','sprechst','spricht','spreche'], answer: 'spricht' },
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Wir __ Wasser. (trinken)', answer: 'trinken' },
      { type: 'multiple-choice', q: 'Which is correct?', options: ['Ich sehe.','Ich siehe.','Ich sehe.','Ich seht.'], answer: 'Ich sehe.' },
    ],
  },

  {
    id: 12, week: 2,
    title: 'Time, frequency, preference',
    titleDe: 'Zeit · Häufigkeit · Präferenz',
    emoji: '🕒',
    objective: 'Drop time- and frequency-words into a sentence in the right order.',
    intro: 'Order: Subject → Verb → Time → (Frequency) → (Preference) → Object. "Ich lerne heute oft gerne Deutsch."',
    vocabulary: [
      { de: 'heute',     en: 'today' },        { de: 'morgen',    en: 'tomorrow' },
      { de: 'jetzt',     en: 'now' },          { de: 'oft',       en: 'often' },
      { de: 'manchmal',  en: 'sometimes' },    { de: 'immer',     en: 'always' },
      { de: 'nie',       en: 'never' },        { de: 'gerne',     en: 'gladly (like to)' },
      { de: 'jeden Tag', en: 'every day' },    { de: 'am Wochenende', en: 'on the weekend' },
    ],
    grammar: [
      { rule: 'TeKaMoLo (light)', body: 'Time first, then place. "Ich lerne heute zu Hause Deutsch."' },
      { rule: '"gerne" before object', body: '"Ich trinke gerne Kaffee" — placed right before the object to mean "I like to drink coffee".' },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      { type: 'fill-blank', sentence: 'Ich lerne __ Deutsch. (every day)', answer: 'jeden Tag' },
      { type: 'multiple-choice',
        q: 'Which sentence is in the right order?',
        options: [
          'Ich heute lerne Deutsch.',
          'Ich lerne heute Deutsch.',
          'Ich lerne Deutsch heute gerne.',
          'Heute Deutsch ich lerne.',
        ],
        answer: 'Ich lerne heute Deutsch.' },
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Wir spielen __ Fußball. (often)', answer: 'oft' },
      { type: 'multiple-choice', q: '"gerne" usually expresses…', options: ['time','frequency','preference','place'], answer: 'preference' },
    ],
  },

  {
    id: 13, week: 2,
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
    ],
    quiz: [
      { type: 'multiple-choice', q: 'Which is most formal?', options: ['Hallo','Servus','Guten Tag','Hi'], answer: 'Guten Tag' },
      { type: 'fill-blank', sentence: 'Ich __ in Berlin.', answer: 'wohne' },
    ],
  },

  {
    id: 14, week: 2,
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
    id: 15, week: 3,
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
    id: 16, week: 3,
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
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Er hat __ Hund. (a, masc.)', answer: 'einen' },
    ],
  },

  {
    id: 17, week: 3,
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
    ],
    quiz: [
      { type: 'multiple-choice', q: '"Ich habe __ Idee." (a, fem.)', options: ['einen','eine','ein','einer'], answer: 'eine' },
    ],
  },

  {
    id: 18, week: 3,
    title: 'Nominativ vs Akkusativ',
    titleDe: 'Nominativ vs Akkusativ',
    emoji: '⚖️',
    objective: 'Decide instantly whether a noun is a subject or an object.',
    intro: 'The subject does the action (Nominativ). The object receives it (Akkusativ).',
    vocabulary: [],
    grammar: [
      { rule: 'Question test', body: 'Ask "Wer/Was?" → subject. Ask "Wen/Was?" → object.' },
    ],
    exercises: [
      { type: 'multiple-choice', q: 'In "Der Hund sieht den Mann", what is in the Akkusativ?', options: ['Der Hund','sieht','den Mann','—'], answer: 'den Mann' },
      { type: 'fill-blank', sentence: '__ Mann sieht den Hund. (the)', answer: 'Der' },
      { type: 'fill-blank', sentence: 'Der Mann sieht __ Hund. (the)', answer: 'den' },
    ],
    quiz: [
      { type: 'multiple-choice', q: 'Which sentence is wrong?', options: ['Ich sehe den Tisch.','Der Tisch ist groß.','Ich sehe der Tisch.','Wir kaufen den Tisch.'], answer: 'Ich sehe der Tisch.' },
    ],
  },

  {
    id: 19, week: 3,
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
    grammar: [{ rule: 'Default to Akkusativ', body: 'When in doubt with these verbs, use the Akkusativ for their object.' }],
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
    id: 20, week: 3,
    title: 'Family',
    titleDe: 'Die Familie',
    emoji: '👨‍👩‍👧',
    objective: 'Talk about your family with possessives.',
    intro: 'Family vocab plus the possessive "mein" (my). It declines just like "ein".',
    vocabulary: [
      { de: 'die Familie',  en: 'the family' },
      { de: 'der Vater',    en: 'the father' },   { de: 'die Mutter', en: 'the mother' },
      { de: 'der Bruder',   en: 'the brother' },  { de: 'die Schwester', en: 'the sister' },
      { de: 'der Sohn',     en: 'the son' },      { de: 'die Tochter', en: 'the daughter' },
      { de: 'die Eltern',   en: 'the parents (pl)' },
      { de: 'die Großeltern', en: 'the grandparents (pl)' },
    ],
    grammar: [
      { rule: 'mein / meine', body: 'Use "mein" for masculine + neuter, "meine" for feminine + plural. Akkusativ-m: meinen.' },
    ],
    exercises: [
      { type: 'flashcards', items: 'vocabulary' },
      { type: 'fill-blank', sentence: '__ Vater ist Lehrer. (my)', answer: 'Mein' },
      { type: 'fill-blank', sentence: 'Ich sehe __ Bruder. (my, Akk.)', answer: 'meinen' },
      { type: 'fill-blank', sentence: '__ Mutter heißt Anna. (my)', answer: 'Meine' },
    ],
    quiz: [
      { type: 'multiple-choice', q: '"Ich liebe __ Schwester." (my, Akk.)', options: ['mein','meinen','meine','meiner'], answer: 'meine' },
    ],
  },

  {
    id: 21, week: 3,
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
    id: 22, week: 4,
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
    id: 23, week: 4,
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
    ],
    exercises: [
      conjEx('dürfen', 'be allowed'),
      conjEx('sollen', 'should'),
      conjEx('mögen', 'to like'),
      { type: 'fill-blank', sentence: 'Ich __ ein Bier, bitte. (would like)', answer: 'möchte' },
      { type: 'fill-blank', sentence: 'Du __ nicht rauchen. (be allowed, neg.)', answer: 'darfst' },
    ],
    quiz: [
      { type: 'multiple-choice', q: 'Polite restaurant order:', options: ['Ich will eine Pizza.','Ich möchte eine Pizza.','Ich muss eine Pizza.','Ich kann eine Pizza.'], answer: 'Ich möchte eine Pizza.' },
    ],
  },

  {
    id: 24, week: 4,
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
    ],
    quiz: [
      { type: 'multiple-choice', q: 'How do you ask for the bill?', options: ['Was kostet das?','Wo ist die Toilette?','Zahlen, bitte.','Guten Appetit!'], answer: 'Zahlen, bitte.' },
    ],
  },

  {
    id: 25, week: 4,
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
    id: 26, week: 4,
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
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Ich habe __ Zeit. (no, fem.)', answer: 'keine' },
      { type: 'fill-blank', sentence: 'Er trinkt __ Bier. (no, n.)', answer: 'kein' },
      { type: 'fill-blank', sentence: 'Wir arbeiten heute __.', answer: 'nicht' },
      { type: 'multiple-choice', q: 'Which is wrong?', options: ['Ich habe keine Idee.','Ich habe nicht eine Idee.','Ich bin nicht müde.','Ich kaufe das Buch nicht.'], answer: 'Ich habe nicht eine Idee.' },
    ],
    quiz: [
      { type: 'fill-blank', sentence: 'Ich habe __ Hund. (no, masc.)', answer: 'keinen' },
    ],
  },

  {
    id: 27, week: 4,
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
    id: 28, week: 4,
    title: 'Week 4 review',
    titleDe: 'Wiederholung Woche 4',
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
    ],
    quiz: [],
  },

  /* ===================== WEEK 5: review + final ===================== */
  {
    id: 29, week: 5,
    title: 'Mega review',
    titleDe: 'Großes Review',
    emoji: '🧠',
    objective: 'Sweep through every grammar pillar and high-frequency vocab.',
    intro: 'A spaced-repetition mega-set. The system will adapt — wrong answers come back.',
    vocabulary: [],
    grammar: [],
    exercises: [
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
    id: 30, week: 5,
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
];

export const weeks = [
  { n: 1, title: 'Foundations', tagline: 'Sounds, numbers, pronouns, sein/haben/werden' },
  { n: 2, title: 'Building sentences', tagline: 'Numbers 30–100, S-V-O, regular verbs, time' },
  { n: 3, title: 'Cases & people', tagline: 'Bigger numbers, Akkusativ, family' },
  { n: 4, title: 'Real life', tagline: 'Modals, restaurant, shopping, negation, travel' },
  { n: 5, title: 'Mastery', tagline: 'Mega review and final exam' },
];

export const dayById = (id) => days.find((d) => d.id === Number(id));
