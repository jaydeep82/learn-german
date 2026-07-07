/**
 * Goethe A1 "Lesen" (Reading) practice module — roadmap A2.
 *
 * Mirrors the real exam: three parts, ~15 items, assembled from the A1
 * exam-format exercise components (richtig-falsch + ad-match). Each exercise
 * carries a `label` so the runner shows which Teil it belongs to.
 *
 *   Teil 1 — short texts (emails), true / false
 *   Teil 2 — situations → pick the advert that fits
 *   Teil 3 — signs & notices, true / false
 */

export const LESEN_PARTS = [
  { teil: 1, name: 'Kurze Texte', en: 'Short texts', blurb: 'Read an email, decide if statements are richtig or falsch.' },
  { teil: 2, name: 'Anzeigen', en: 'Adverts', blurb: 'Read a situation, choose the advert that fits.' },
  { teil: 3, name: 'Schilder', en: 'Signs & notices', blurb: 'Read a sign, decide if a statement is richtig or falsch.' },
];

const T1 = 'Lesen · Teil 1';
const T2 = 'Lesen · Teil 2';
const T3 = 'Lesen · Teil 3';

export const LESEN_EXERCISES = [
  // ── Teil 1 · short texts → richtig / falsch ─────────────────────────
  {
    type: 'richtig-falsch', label: T1,
    title: 'Text 1',
    context: 'Liebe Sofia,\n\ndanke für deine E-Mail! Am Wochenende habe ich Zeit. Wir können am Sonntag ins Kino gehen. Der Film beginnt um 15 Uhr. Sollen wir uns um 14.30 Uhr am Bahnhof treffen?\n\nLiebe Grüße\nNina',
    statements: [
      { text: 'Nina hat am Wochenende Zeit.', answer: true },
      { text: 'Der Film beginnt um 14.30 Uhr.', answer: false },
      { text: 'Nina und Sofia treffen sich am Bahnhof.', answer: true },
    ],
  },
  {
    type: 'richtig-falsch', label: T1,
    title: 'Text 2',
    context: 'Hallo Herr Bauer,\n\nIhr Deutschkurs am Montag fällt leider aus. Der nächste Kurs ist am Mittwoch um 18 Uhr. Bitte bringen Sie Ihr Buch mit.\n\nSprachschule Berlin',
    statements: [
      { text: 'Der Deutschkurs am Montag findet statt.', answer: false },
      { text: 'Herr Bauer soll sein Buch mitbringen.', answer: true },
    ],
  },

  // ── Teil 2 · situations → right advert ──────────────────────────────
  {
    type: 'ad-match', label: T2,
    situation: 'Sie möchten am Samstag frische Brötchen kaufen.',
    options: [
      { key: 'a', title: 'Bäckerei Sonne', body: 'Frisches Brot und Brötchen.\nTäglich 6–18 Uhr, auch am Wochenende.' },
      { key: 'b', title: 'Supermarkt Nord', body: 'Alles für den Haushalt.\nMontag bis Freitag, 8–20 Uhr.' },
    ],
    answer: 'a',
    explain: 'The bakery is open daily including weekends; the supermarket closes Fri and is shut on Saturday.',
  },
  {
    type: 'ad-match', label: T2,
    situation: 'Ihre Freundin sucht ein Fahrrad für ihren Sohn (6 Jahre).',
    options: [
      { key: 'a', title: 'Rad-Profi', body: 'Rennräder und E-Bikes für Erwachsene.' },
      { key: 'b', title: 'Kinderräder Müller', body: 'Fahrräder für Kinder von 3 bis 10 Jahren.' },
    ],
    answer: 'b',
    explain: 'A 6-year-old needs a children’s bike — Kinderräder Müller covers ages 3–10.',
  },
  {
    type: 'ad-match', label: T2,
    situation: 'Sie wollen Deutsch lernen, aber nur zu Hause am Computer.',
    options: [
      { key: 'a', title: 'Deutsch online', body: 'Lernen Sie von zu Hause — jederzeit am Computer.' },
      { key: 'b', title: 'Sprachschule Aktiv', body: 'Kurse nur im Klassenzimmer, Montag bis Freitag.' },
    ],
    answer: 'a',
    explain: 'They want to study at home on the computer — the online course fits; the school is classroom-only.',
  },
  {
    type: 'ad-match', label: T2,
    situation: 'Sie brauchen am Sonntag einen Arzt.',
    options: [
      { key: 'a', title: 'Praxis Dr. Klein', body: 'Sprechzeiten: Montag bis Freitag, 8–17 Uhr.' },
      { key: 'b', title: 'Ärztlicher Notdienst', body: 'Auch am Samstag und Sonntag für Sie da.' },
    ],
    answer: 'b',
    explain: 'Only the Notdienst is open on Sundays; the practice runs Mon–Fri.',
  },

  // ── Teil 3 · signs & notices → richtig / falsch ─────────────────────
  {
    type: 'richtig-falsch', label: T3,
    title: 'Schild 1',
    context: '⚠️ Achtung! Aufzug außer Betrieb. Bitte benutzen Sie die Treppe.',
    statements: [{ text: 'Sie können den Aufzug benutzen.', answer: false }],
  },
  {
    type: 'richtig-falsch', label: T3,
    title: 'Schild 2',
    context: 'Sommerpause: Vom 1. bis 15. August geschlossen.',
    statements: [{ text: 'Das Geschäft ist im August zwei Wochen zu.', answer: true }],
  },
  {
    type: 'richtig-falsch', label: T3,
    title: 'Schild 3',
    context: 'Gleis 3 — Zug nach München, Abfahrt 10.15 Uhr.',
    statements: [{ text: 'Der Zug nach München fährt von Gleis 3.', answer: true }],
  },
  {
    type: 'richtig-falsch', label: T3,
    title: 'Schild 4',
    context: 'Bibliothek — Bitte leise sein. Handys bitte ausschalten.',
    statements: [{ text: 'Hier darf man laut telefonieren.', answer: false }],
  },
];

// Total scorable items (statements + ad-matches) — used on the intro screen.
export const LESEN_ITEM_COUNT = LESEN_EXERCISES.reduce(
  (n, ex) => n + (ex.type === 'richtig-falsch' ? ex.statements.length : 1),
  0
);
