/**
 * Goethe A1 "Schreiben" (Writing) practice module — roadmap A3.
 *
 * Mirrors the real exam's two parts, assembled from the exam-format components:
 *   Teil 1 — complete a form (form-fill), 5 fields
 *   Teil 2 — write a short ~30-word message covering three points (guided-writing)
 */

export const SCHREIBEN_PARTS = [
  { teil: 1, name: 'Formular', en: 'Fill a form', blurb: 'Read a short profile and complete the form correctly.' },
  { teil: 2, name: 'Kurze Nachricht', en: 'Short message', blurb: 'Write ~30 words covering three given points, then compare with a model.' },
];

const T1 = 'Schreiben · Teil 1';
const T2 = 'Schreiben · Teil 2';

export const SCHREIBEN_EXERCISES = [
  // ── Teil 1 · complete the form ──────────────────────────────────────
  {
    type: 'form-fill', label: T1,
    title: 'Anmeldung — Bibliotheksausweis',
    context: 'Elena Rossi ist 29 Jahre alt und kommt aus Italien. Sie wohnt in Köln, Bahnhofstraße 5. Sie möchte in der Bibliothek einen Ausweis. Ihre E-Mail ist elena.rossi@mail.de.',
    fields: [
      { label: 'Familienname', name: 'last', answer: 'Rossi' },
      { label: 'Vorname', name: 'first', answer: 'Elena' },
      { label: 'Land', name: 'country', answer: ['Italien', 'Italy'], hint: 'Country' },
      { label: 'Alter', name: 'age', answer: '29' },
      { label: 'Stadt', name: 'city', answer: ['Köln', 'Koeln', 'Cologne'] },
    ],
  },

  // ── Teil 2 · short guided messages ──────────────────────────────────
  {
    type: 'guided-writing', label: T2,
    situation: 'Ihre Freundin Marie hat am Samstag Geburtstag und macht eine Party. Schreiben Sie Marie eine kurze Nachricht (ca. 30 Wörter).',
    points: [
      'Gratulieren Sie Marie zum Geburtstag.',
      'Sagen Sie, dass Sie zur Party kommen.',
      'Fragen Sie, was Sie mitbringen sollen.',
    ],
    minWords: 25,
    model: 'Liebe Marie,\nherzlichen Glückwunsch zum Geburtstag! Natürlich komme ich gern zu deiner Party am Samstag. Soll ich etwas mitbringen, zum Beispiel einen Salat oder Getränke? Ich freue mich schon sehr. Bis Samstag!\nDeine Anna',
  },
  {
    type: 'guided-writing', label: T2,
    situation: 'Sie sind krank und können morgen nicht zum Deutschkurs kommen. Schreiben Sie eine E-Mail an Ihren Lehrer, Herrn Weber (ca. 30 Wörter).',
    points: [
      'Entschuldigen Sie sich, dass Sie nicht kommen.',
      'Sagen Sie den Grund (Sie sind krank).',
      'Fragen Sie nach den Hausaufgaben.',
    ],
    minWords: 25,
    model: 'Sehr geehrter Herr Weber,\nleider kann ich morgen nicht zum Deutschkurs kommen, weil ich krank bin. Können Sie mir bitte die Hausaufgaben per E-Mail schicken? Vielen Dank für Ihr Verständnis.\nMit freundlichen Grüßen\nElena Rossi',
  },
];

// Scorable items: form fields + writing points.
export const SCHREIBEN_ITEM_COUNT = SCHREIBEN_EXERCISES.reduce(
  (n, ex) => n + (ex.type === 'form-fill' ? ex.fields.length : ex.points.length),
  0
);
