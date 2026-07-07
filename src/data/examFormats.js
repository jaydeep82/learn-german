/**
 * Sample specs for each Goethe A1 exam-format exercise type.
 *
 * Two jobs: (1) power the /exam-formats preview page, and (2) serve as the
 * canonical example of every spec shape when the real Hören/Lesen/Schreiben/
 * Sprechen modules (roadmap A2–A6) are built. Content is authentic A1 level.
 */
export const EXAM_FORMATS = [
  {
    id: 'lesen-rf',
    skill: 'Lesen',
    emoji: '📖',
    part: 'Teil 1 · Reading',
    heading: 'Read & decide: richtig or falsch',
    blurb: 'A short email or text, then statements marked true/false. Also used for signs (Teil 3) and heard announcements (Hören Teil 2).',
    spec: {
      type: 'richtig-falsch',
      context: 'Hallo Anna,\n\nam Samstag mache ich eine Party. Sie beginnt um 19 Uhr bei mir zu Hause. Kannst du einen Salat mitbringen? Bring bitte auch deinen Bruder mit!\n\nViele Grüße\nMarko',
      statements: [
        { text: 'Die Party ist am Samstag.', answer: true },
        { text: 'Anna soll einen Kuchen mitbringen.', answer: false },
        { text: 'Anna kann ihren Bruder mitbringen.', answer: true },
      ],
    },
  },
  {
    id: 'hoeren-pic',
    skill: 'Hören',
    emoji: '🎧',
    part: 'Teil 1 · Listening',
    heading: 'Listen & choose the picture',
    blurb: 'A short dialogue plays (twice), and the learner picks the matching image. Uses emoji tiles today; real images drop in later.',
    spec: {
      type: 'picture-mcq',
      q: 'Was möchte die Frau kaufen? Hören Sie zu.',
      audioText: 'Guten Tag. Ich möchte bitte ein Kilo Äpfel und zwei Bananen.',
      options: [
        { value: 'obst', emoji: '🍎', label: 'Obst' },
        { value: 'brot', emoji: '🍞', label: 'Brot' },
        { value: 'milch', emoji: '🥛', label: 'Milch' },
      ],
      answer: 'obst',
      explain: 'She asks for Äpfel (apples) and Bananen (bananas) — that is Obst (fruit).',
    },
  },
  {
    id: 'lesen-ad',
    skill: 'Lesen',
    emoji: '📖',
    part: 'Teil 2 · Reading',
    heading: 'Match the situation to the right advert',
    blurb: 'A person’s need, then two small adverts. Pick the one that fits.',
    spec: {
      type: 'ad-match',
      situation: 'Frau Klein sucht einen Deutschkurs am Abend, weil sie tagsüber arbeitet.',
      options: [
        { key: 'a', title: 'Sprachschule Aktiv', body: 'Deutschkurse für Anfänger.\nMontag bis Freitag, 9–12 Uhr.' },
        { key: 'b', title: 'Abendakademie', body: 'Deutsch am Abend.\nMontag & Mittwoch, 18–20 Uhr.' },
      ],
      answer: 'b',
      explain: 'She works during the day and needs an evening course — the Abendakademie runs 18–20 Uhr.',
    },
  },
  {
    id: 'schreiben-form',
    skill: 'Schreiben',
    emoji: '✍️',
    part: 'Teil 1 · Writing',
    heading: 'Complete the form',
    blurb: 'Read a short profile, then fill an application form. Each field is checked (umlaut- and punctuation-tolerant); several answers can be accepted.',
    spec: {
      type: 'form-fill',
      context: 'Maria Gómez kommt aus Spanien und wohnt in Berlin, Hauptstraße 12. Sie ist 28 Jahre alt und spricht Spanisch und Englisch.',
      fields: [
        { label: 'Familienname', name: 'last', answer: 'Gómez', hint: 'Surname' },
        { label: 'Vorname', name: 'first', answer: 'Maria' },
        { label: 'Land', name: 'country', answer: ['Spanien', 'Spain'] },
        { label: 'Alter', name: 'age', answer: '28' },
      ],
    },
  },
  {
    id: 'sprechen-card',
    skill: 'Sprechen',
    emoji: '🗣️',
    part: 'Teil 2 · Speaking',
    heading: 'Ask & answer from a keyword',
    blurb: 'A topic and keyword cards. Say a question aloud, reveal a model answer with audio, and rate yourself honestly.',
    spec: {
      type: 'speaking-card',
      instruction: 'Thema: Einkaufen. Bilden Sie zu jedem Wort eine Frage.',
      cards: [
        { keyword: 'Supermarkt', prompt: 'Ask where the supermarket is.', model: 'Wo ist der Supermarkt, bitte?' },
        { keyword: 'Brot', prompt: 'Ask how much the bread costs.', model: 'Was kostet das Brot?' },
        { keyword: 'bezahlen', prompt: 'Ask where you can pay.', model: 'Wo kann ich bezahlen?' },
      ],
    },
  },
];
