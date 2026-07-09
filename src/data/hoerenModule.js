/**
 * Goethe A1 "Hören" (Listening) practice module — roadmap A5.
 *
 * Three parts, assembled from the exam-format components with an audio stimulus
 * (played by ListeningPlayer — browser voice for now, pre-generated clips later).
 *
 *   Teil 1 — short dialogues → choose the picture   (picture-mcq)
 *   Teil 2 — announcements → richtig / falsch        (richtig-falsch)
 *   Teil 3 — phone messages → multiple choice         (multiple-choice)
 */

export const HOEREN_PARTS = [
  { teil: 1, name: 'Dialoge', en: 'Dialogues', blurb: 'Listen to a short dialogue and choose the matching picture.' },
  { teil: 2, name: 'Durchsagen', en: 'Announcements', blurb: 'Listen to an announcement and decide richtig or falsch.' },
  { teil: 3, name: 'Nachrichten', en: 'Messages', blurb: 'Listen to a phone message and choose the right answer.' },
];

const T1 = 'Hören · Teil 1';
const T2 = 'Hören · Teil 2';
const T3 = 'Hören · Teil 3';

export const HOEREN_EXERCISES = [
  // ── Teil 1 · dialogues → picture ────────────────────────────────────
  {
    type: 'picture-mcq', label: T1,
    q: 'Was kauft die Frau?',
    audioText: 'Guten Tag. Ich nehme bitte ein Kilo Äpfel und drei Bananen.',
    options: [
      { value: 'obst', emoji: '🍎', label: 'Obst' },
      { value: 'gemuese', emoji: '🥕', label: 'Gemüse' },
      { value: 'kaese', emoji: '🧀', label: 'Käse' },
    ],
    answer: 'obst',
    explain: 'Äpfel and Bananen are Obst (fruit).',
  },
  {
    type: 'picture-mcq', label: T1,
    q: 'Wie ist das Wetter morgen?',
    audioText: 'Und nun das Wetter für morgen: Es regnet den ganzen Tag. Nehmen Sie einen Schirm mit.',
    options: [
      { value: 'sonne', emoji: '☀️', label: 'Sonnig' },
      { value: 'regen', emoji: '🌧️', label: 'Regen' },
      { value: 'schnee', emoji: '❄️', label: 'Schnee' },
    ],
    answer: 'regen',
    explain: '“Es regnet den ganzen Tag” — it rains all day.',
  },
  {
    type: 'picture-mcq', label: T1,
    q: 'Wohin muss die Person gehen?',
    audioText: 'Entschuldigung, wie komme ich zum Bahnhof? — Gehen Sie hier an der Ampel nach rechts.',
    options: [
      { value: 'links', emoji: '⬅️', label: 'Nach links' },
      { value: 'rechts', emoji: '➡️', label: 'Nach rechts' },
      { value: 'gerade', emoji: '⬆️', label: 'Geradeaus' },
    ],
    answer: 'rechts',
    explain: '“Gehen Sie … nach rechts.”',
  },
  {
    type: 'picture-mcq', label: T1,
    q: 'Um wie viel Uhr fährt der Zug?',
    audioText: 'Der Zug nach Berlin fährt um Viertel nach acht von Gleis drei.',
    options: [
      { value: 't815', emoji: '🕗', label: '8.15 Uhr' },
      { value: 't845', emoji: '🕗', label: '8.45 Uhr' },
      { value: 't900', emoji: '🕘', label: '9.00 Uhr' },
    ],
    answer: 't815',
    explain: '“Viertel nach acht” = 8.15.',
  },

  // ── Teil 2 · announcements → richtig / falsch ───────────────────────
  {
    type: 'richtig-falsch', label: T2,
    audioText: 'Achtung, eine Durchsage: Der Zug nach München hat heute leider zwanzig Minuten Verspätung.',
    statements: [{ text: 'Der Zug nach München ist pünktlich.', answer: false }],
  },
  {
    type: 'richtig-falsch', label: T2,
    audioText: 'Liebe Kundinnen und Kunden, unser Supermarkt schließt heute schon um 18 Uhr. Vielen Dank für Ihren Einkauf.',
    statements: [{ text: 'Der Supermarkt schließt heute um 18 Uhr.', answer: true }],
  },
  {
    type: 'richtig-falsch', label: T2,
    audioText: 'Information für alle Teilnehmer: Der Deutschkurs A1 beginnt am Montag um neun Uhr im Raum zwölf.',
    statements: [{ text: 'Der Deutschkurs beginnt am Dienstag.', answer: false }],
  },

  // ── Teil 3 · phone messages → multiple choice ───────────────────────
  {
    type: 'multiple-choice', label: T3,
    audioText: 'Hallo Tom, hier ist Lisa. Können wir uns morgen um 16 Uhr am Café treffen? Ruf mich bitte an. Tschüss!',
    q: 'Wann möchte Lisa sich treffen?',
    options: ['Um 14 Uhr', 'Um 16 Uhr', 'Um 18 Uhr'],
    answer: 'Um 16 Uhr',
  },
  {
    type: 'multiple-choice', label: T3,
    audioText: 'Guten Tag, hier ist die Arztpraxis Dr. Klein. Ihr Termin am Freitag fällt leider aus. Bitte rufen Sie uns an.',
    q: 'Was ist das Problem?',
    options: ['Der Termin fällt aus.', 'Die Praxis ist umgezogen.', 'Der Arzt ist im Urlaub.'],
    answer: 'Der Termin fällt aus.',
  },
  {
    type: 'multiple-choice', label: T3,
    audioText: 'Hallo Papa, ich komme heute später nach Hause, so gegen acht Uhr. Bis später!',
    q: 'Wann kommt das Kind nach Hause?',
    options: ['Gegen 6 Uhr', 'Gegen 8 Uhr', 'Am Morgen'],
    answer: 'Gegen 8 Uhr',
  },
];

export const HOEREN_ITEM_COUNT = HOEREN_EXERCISES.reduce(
  (n, ex) => n + (ex.type === 'richtig-falsch' ? ex.statements.length : 1),
  0
);
