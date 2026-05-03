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
      { de: 'Vater',   en: 'father',   hint: 'V sounds like F' },
      { de: 'Wasser',  en: 'water',    hint: 'W sounds like soft V' },
      { de: 'Zeit',    en: 'time',     hint: 'Z sounds like ts' },
      { de: 'ja',      en: 'yes',      hint: 'J sounds like Y' },
      { de: 'Bach',    en: 'stream',   hint: 'hard ch — back of throat' },
      { de: 'kochen',  en: 'to cook',  hint: 'hard ch (after a/o/u)' },
      { de: 'machen',  en: 'to do',    hint: 'hard ch' },
      { de: 'ich',     en: 'I',        hint: 'soft ch — front of mouth' },
      { de: 'nicht',   en: 'not',      hint: 'soft ch (after i/e/consonants)' },
      { de: 'Milch',   en: 'milk',     hint: 'soft ch' },
      { de: 'Schule',  en: 'school',   hint: 'sch = English sh' },
      { de: 'Bär',     en: 'bear',     hint: 'ä = open eh' },
      { de: 'schön',   en: 'beautiful',hint: 'ö = round lips, say er' },
      { de: 'müde',    en: 'tired',    hint: 'ü = lips for oo, say ee' },
      { de: 'Wochenende',     en: 'weekend',     hint: 'Wo-chen-en-de' },
      { de: 'Hausaufgabe',    en: 'homework',    hint: 'Haus-auf-ga-be' },
      { de: 'Softwareentwicklung', en: 'software development', hint: 'Soft-ware-ent-wick-lung' },
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
      { rule: 'Umlauts ä ö ü', body: 'On a US keyboard you may type ae, oe, ue.' },
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
    ],
    quiz: [
      { type: 'multiple-choice', q: 'German "W" sounds most like…', options: ['English W', 'English soft V', 'F', 'Silent'], answer: 'English soft V' },
      { type: 'multiple-choice', q: 'Pick the correct umlaut spelling for "schoen".', options: ['schön','schon','schoen','schøn'], answer: 'schön' },
      { type: 'multiple-choice', q: 'Break "Wochenende" into chunks.', options: ['Wo-che-nen-de', 'Wo-chen-en-de', 'Woc-hen-ende', 'Wochen-en-de'], answer: 'Wo-chen-en-de' },
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
    id: 12, week: 2,
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
    id: 18, week: 3,
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
    id: 20, week: 3,
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
