/**
 * Official Goethe A1 (Start Deutsch 1 / Fit in Deutsch 1) grammar inventory,
 * audited against the 50-day course (roadmap D2).
 *
 * Every syllabus point carries an A1 example and either the day(s) where the
 * course teaches it, or — for the three points the course didn't cover as an
 * explicit rule — a compact inline lesson (`points`), so coverage is complete
 * on this page. Shown at /checklist.
 */

export const A1_CHECKLIST = [
  {
    area: 'Verbs & tenses', emoji: '🔧',
    items: [
      { topic: 'Present tense — regular verbs', de: 'Ich lerne jeden Tag Deutsch.', en: 'I learn German every day.', days: [10] },
      { topic: 'sein · haben · werden', de: 'Ich bin müde und habe Hunger.', en: 'I am tired and I am hungry.', days: [5, 6, 7] },
      { topic: 'Stem-changing verbs (e→i, e→ie, a→ä)', de: 'Er spricht Deutsch und fährt nach Berlin.', en: 'He speaks German and drives to Berlin.', days: [11] },
      { topic: 'Separable verbs', de: 'Der Zug fährt um acht Uhr ab.', en: 'The train departs at eight.', days: [12] },
      { topic: 'All six modal verbs + möchten', de: 'Ich muss arbeiten, aber ich möchte schlafen.', en: 'I have to work, but I would like to sleep.', days: [35, 36] },
      { topic: 'Perfekt with haben', de: 'Ich habe Pizza gegessen.', en: 'I ate pizza.', days: [45] },
      { topic: 'Perfekt with sein (motion/change)', de: 'Wir sind nach Hause gegangen.', en: 'We went home.', days: [46] },
      { topic: 'Präteritum of sein & haben', de: 'Gestern war ich krank und hatte Fieber.', en: 'Yesterday I was ill and had a fever.', days: [47] },
      { topic: 'Imperativ (du · ihr · Sie)', de: 'Öffnen Sie bitte das Fenster!', en: 'Please open the window!', days: [48] },
      { topic: 'Polite forms — möchte · würde · könnte', de: 'Könnten Sie das bitte wiederholen?', en: 'Could you repeat that, please?', days: [48] },
    ],
  },
  {
    area: 'Nouns, articles & cases', emoji: '🗂️',
    items: [
      { topic: 'Gender & definite/indefinite articles', de: 'der Tisch · die Lampe · das Buch', en: 'the table · the lamp · the book', days: [4] },
      { topic: 'Plural (articles collapse to die)', de: 'das Kind → die Kinder', en: 'the child → the children', days: [4] },
      {
        topic: 'Zero article (professions, plurals, mass nouns)',
        de: 'Ich bin Lehrerin von Beruf. Ich trinke gern Kaffee.',
        en: 'I am a teacher by profession. I like drinking coffee.',
        days: [14],
        points: [
          { de: 'Beruf/Nationalität nach sein/werden: Ich bin Studentin.', en: 'no article for professions & nationalities — needed in Sprechen Teil 1' },
          { de: 'unbestimmter Plural: Ich habe Geschwister.', en: 'indefinite plurals — ein has no plural form' },
          { de: 'Mengen ohne Artikel: Ich trinke Kaffee. · Wir kaufen Brot.', en: 'mass nouns take no article' },
          { de: 'Verneinung mit kein: Ich trinke keinen Kaffee. (Tag 42)', en: 'kein is the negation of the zero article — Day 42' },
        ],
      },
      { topic: 'Nominativ vs Akkusativ', de: 'Der Mann sieht den Hund.', en: 'The man sees the dog.', days: [21, 22, 23] },
      { topic: 'Verbs with Akkusativ · es gibt', de: 'Es gibt einen Supermarkt hier.', en: 'There is a supermarket here.', days: [24] },
      { topic: 'Dativ after prepositions & verbs', de: 'Ich fahre mit dem Bus zur Arbeit.', en: 'I take the bus to work.', days: [25, 26] },
      { topic: 'kein — the negative article', de: 'Ich habe kein Auto und keine Zeit.', en: 'I have no car and no time.', days: [42] },
      { topic: 'Possessives (mein, dein, sein …)', de: 'Meine Schwester liebt ihren Hund.', en: 'My sister loves her dog.', days: [31] },
      { topic: 'Demonstratives & indefinites (dieser · man · etwas)', de: 'Dieses Brot ist frisch. Man kann hier gut essen.', en: 'This bread is fresh. One can eat well here.', days: [38] },
    ],
  },
  {
    area: 'Pronouns', emoji: '👥',
    items: [
      { topic: 'Personal pronouns (Nominativ) · du vs Sie', de: 'Wie heißt du? / Wie heißen Sie?', en: 'What is your name? (informal / formal)', days: [3] },
      { topic: 'Akkusativ pronouns', de: 'Ich sehe dich morgen.', en: 'I will see you tomorrow.', days: [28] },
      { topic: 'Dativ pronouns', de: 'Das Buch gefällt mir.', en: 'I like the book.', days: [26, 29] },
      {
        topic: 'Impersonal es (weather, phrases)', gap: true,
        de: 'Es regnet. Wie geht es dir?',
        en: 'It is raining. How are you?',
        points: [
          { de: 'Wetter: Es regnet. · Es schneit. · Es ist kalt/warm.', en: 'weather always uses es' },
          { de: 'Befinden: Wie geht es dir/Ihnen? — Mir geht es gut.', en: 'how-are-you: es + gehen + Dativ person' },
          { de: 'feste Wendungen: Es tut mir leid. · Wie spät ist es? — Es ist ein Uhr.', en: 'fixed phrases: sorry / telling the time' },
          { de: '„es gibt" + Akkusativ ist ein eigener Punkt (Tag 24)', en: 'es gibt + Akkusativ is its own item, taught on Day 24' },
        ],
      },
    ],
  },
  {
    area: 'Sentences & questions', emoji: '🧱',
    items: [
      { topic: 'Verb in position 2 (V2) · SVO', de: 'Heute lerne ich Deutsch.', en: 'Today I am learning German.', days: [7, 9, 13] },
      { topic: 'Yes/No questions · ja / nein / doch', de: 'Kommst du nicht mit? — Doch!', en: 'Aren’t you coming along? — Yes, I am!', days: [16] },
      { topic: 'W-questions (wer, was, wo, wohin, woher …)', de: 'Woher kommen Sie?', en: 'Where do you come from?', days: [17] },
      { topic: 'Negation with nicht', de: 'Ich verstehe das nicht.', en: 'I do not understand that.', days: [42] },
      { topic: 'Connectors — und · oder · aber · denn', de: 'Ich komme nicht, denn ich bin krank.', en: 'I am not coming, because I am ill.', days: [37] },
      { topic: 'weil & dass (verb to the end)', de: 'Ich bleibe zu Hause, weil ich krank bin.', en: 'I am staying home because I am ill.', days: [37] },
      { topic: 'Time & frequency word order (TFP)', de: 'Ich spiele oft und gern Fußball.', en: 'I play football often, and I enjoy it.', days: [13, 33] },
    ],
  },
  {
    area: 'Prepositions', emoji: '📍',
    items: [
      { topic: 'Always-Dativ prepositions (aus, bei, mit, nach, seit, von, zu …)', de: 'Ich komme aus der Schweiz.', en: 'I come from Switzerland.', days: [25] },
      { topic: 'Always-Akkusativ prepositions (für, ohne, um, durch, gegen)', de: 'Das Geschenk ist für dich.', en: 'The present is for you.', days: [30] },
      { topic: 'Wechselpräpositionen — Wo? (Dativ) vs Wohin? (Akkusativ)', de: 'Ich bin im Kino. / Ich gehe ins Kino.', en: 'I am at the cinema. / I am going to the cinema.', days: [30] },
      { topic: 'Contractions (zum, zur, beim, im, ans …)', de: 'Wir gehen zum Bahnhof.', en: 'We are going to the station.', days: [25, 30] },
    ],
  },
  {
    area: 'Numbers, time & comparison', emoji: '🔢',
    items: [
      { topic: 'Numbers 0 – 1 000 000 · prices · decimals', de: 'Das kostet neunundzwanzig Euro neunzig.', en: 'That costs €29.90.', days: [2, 8, 18, 19] },
      { topic: 'Telling the time (um, halb, Viertel)', de: 'Der Kurs beginnt um halb neun.', en: 'The course starts at half past eight.', days: [32] },
      {
        topic: 'Ordinal numbers & dates', gap: true,
        de: 'Heute ist der dritte Mai. Ich habe am dritten Mai Geburtstag.',
        en: 'Today is the third of May. My birthday is on the third of May.',
        points: [
          { de: 'der erste · zweite · dritte · vierte … neunzehnte', en: '1st–19th: number + -te (irregular: erste, dritte, siebte, achte)' },
          { de: 'ab 20: -ste → der zwanzigste, einunddreißigste', en: 'from 20 on: number + -ste' },
          { de: 'Datum sagen: „Heute ist der zweite Juni."', en: 'saying the date: der + ordinal + month' },
          { de: 'Wann? → „am" + -en: „am zweiten Juni"', en: 'answering "when?": am + ordinal-en + month' },
          { de: 'schreiben: 02.06. = der zweite Juni', en: 'in writing, dates are day.month. with dots' },
        ],
      },
      {
        topic: 'Time prepositions — um · am · im · von…bis · seit · ab', gap: true,
        de: 'Am Montag arbeite ich von neun bis fünf. Im Juli habe ich Urlaub.',
        en: 'On Monday I work from nine to five. In July I am on holiday.',
        points: [
          { de: 'um + Uhrzeit: um 8 Uhr', en: 'um for clock times' },
          { de: 'am + Tag/Tageszeit: am Montag, am Abend (aber: in der Nacht)', en: 'am for days & parts of day (but: in der Nacht)' },
          { de: 'im + Monat/Jahreszeit: im Juli, im Winter', en: 'im for months & seasons' },
          { de: 'von … bis: von Montag bis Freitag', en: 'von…bis for ranges' },
          { de: 'seit + Dativ (läuft noch): seit einem Jahr · ab (Zukunft): ab morgen', en: 'seit for "since/for" (still true), ab for "from … on"' },
        ],
      },
      {
        topic: 'Irregular comparison — gern · gut · viel', gap: true, days: [33],
        de: 'Ich trinke gern Tee, lieber Kaffee, am liebsten Wasser.',
        en: 'I like tea, prefer coffee, and like water best.',
        points: [
          { de: 'gern → lieber → am liebsten (Tag 33: die Präferenz-Leiter)', en: 'like → prefer → like best — taught on Day 33; the rest is new here' },
          { de: 'gut → besser → am besten', en: 'good → better → best' },
          { de: 'viel → mehr → am meisten', en: 'much → more → most' },
          { de: 'Vergleich mit „als": Kaffee schmeckt besser als Tee.', en: 'compare with als (than)' },
        ],
      },
    ],
  },
];

export const CHECKLIST_STATS = (() => {
  let total = 0;
  let inCourse = 0;
  let gaps = 0;
  for (const a of A1_CHECKLIST) {
    for (const it of a.items) {
      total += 1;
      if (it.gap) gaps += 1;
      else inCourse += 1;
    }
  }
  return { total, inCourse, gaps };
})();
