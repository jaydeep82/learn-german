/**
 * Mock exam paper 5 — «Gesundheit & Termine» (health & appointments).
 * Fresh Goethe A1 sitting: Hören 13 · Lesen 13 · form + message · Sprechen
 * with the official keyword structure. All content strictly A1.
 */

const HT1 = 'Hören · Teil 1';
const HT2 = 'Hören · Teil 2';
const HT3 = 'Hören · Teil 3';

export const MOCK5_HOEREN = [
  // ── Teil 1 · dialogues → picture (5) ────────────────────────────
  {
    type: 'picture-mcq', label: HT1,
    q: 'Was tut dem Mann weh?',
    audioText: 'Guten Tag, was fehlt Ihnen? — Mein Kopf tut so weh, seit gestern Abend. — Dann schauen wir mal.',
    options: [
      { value: 'kopf', emoji: '🤕', label: 'der Kopf' },
      { value: 'ruecken', emoji: '🧍', label: 'der Rücken' },
      { value: 'zahn', emoji: '🦷', label: 'der Zahn' },
    ],
    answer: 'kopf',
    explain: '“Mein Kopf tut so weh.” — his head hurts.',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'Wann hat die Frau ihren Termin?',
    audioText: 'Sie können am Freitag um Viertel nach neun kommen. Passt das? — Ja, Freitag Viertel nach neun ist gut.',
    options: [
      { value: 't915', emoji: '🕘', label: 'Freitag, 9.15 Uhr' },
      { value: 't945', emoji: '🕙', label: 'Freitag, 9.45 Uhr' },
      { value: 't815', emoji: '🕗', label: 'Freitag, 8.15 Uhr' },
    ],
    answer: 't915',
    explain: '“Viertel nach neun” = 9.15.',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'Wie kommt die Frau zur Apotheke?',
    audioText: 'Muss ich mit dem Bus zur Apotheke fahren? — Nein, Sie können zu Fuß gehen. Sie ist gleich um die Ecke.',
    options: [
      { value: 'fuss', emoji: '🚶', label: 'zu Fuß' },
      { value: 'bus', emoji: '🚌', label: 'mit dem Bus' },
      { value: 'auto', emoji: '🚗', label: 'mit dem Auto' },
    ],
    answer: 'fuss',
    explain: '“Sie können zu Fuß gehen.” — it is just around the corner.',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'Was soll der Patient trinken?',
    audioText: 'Bleiben Sie im Bett und trinken Sie viel Tee. Keinen Kaffee, bitte! — Gut, danke, Frau Doktor.',
    options: [
      { value: 'tee', emoji: '🍵', label: 'Tee' },
      { value: 'kaffee', emoji: '☕', label: 'Kaffee' },
      { value: 'saft', emoji: '🧃', label: 'Saft' },
    ],
    answer: 'tee',
    explain: '“Trinken Sie viel Tee. Keinen Kaffee!”',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'Wie lange soll die Frau zu Hause bleiben?',
    audioText: 'Sie haben Fieber. Bleiben Sie bitte drei Tage zu Hause. — Drei Tage? Gut.',
    options: [
      { value: 'd3', emoji: '3️⃣', label: 'drei Tage' },
      { value: 'd2', emoji: '2️⃣', label: 'zwei Tage' },
      { value: 'w1', emoji: '7️⃣', label: 'eine Woche' },
    ],
    answer: 'd3',
    explain: '“Bleiben Sie bitte drei Tage zu Hause.”',
  },

  // ── Teil 2 · announcements → richtig/falsch (4) ─────────────────
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Hier ist die Praxis Doktor Sommer. Unsere Praxis ist heute Nachmittag geschlossen. Morgen sind wir ab acht Uhr wieder für Sie da.',
    statements: [{ text: 'Die Praxis ist heute Nachmittag geöffnet.', answer: false }],
  },
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Durchsage: Den Apotheken-Notdienst finden Sie heute in der Bahnhof-Apotheke, direkt am Hauptbahnhof.',
    statements: [{ text: 'Der Notdienst ist heute in der Bahnhof-Apotheke.', answer: true }],
  },
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Liebe Besucher, die Besuchszeit im Krankenhaus ist täglich von vierzehn bis achtzehn Uhr.',
    statements: [{ text: 'Man kann um 20 Uhr zu Besuch kommen.', answer: false }],
  },
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Information für unsere Patienten: Doktor Braun ist nächste Woche im Urlaub. Frau Doktor Kim übernimmt die Termine.',
    statements: [{ text: 'Doktor Braun ist nächste Woche nicht da.', answer: true }],
  },

  // ── Teil 3 · phone messages → multiple choice (4) ───────────────
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Guten Tag, hier ist die Praxis am Ring. Wir bestätigen Ihren Termin am Montag um acht Uhr dreißig. Bis Montag!',
    q: 'Wann ist der Termin?',
    options: ['Montag, 8.30 Uhr', 'Montag, 8.13 Uhr', 'Mittwoch, 8.30 Uhr'],
    answer: 'Montag, 8.30 Uhr',
  },
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Hier ist die Rosen-Apotheke. Ihr Medikament ist da. Sie können es heute bis achtzehn Uhr dreißig abholen.',
    q: 'Bis wann kann man das Medikament abholen?',
    options: ['Bis 18.30 Uhr', 'Bis 18.13 Uhr', 'Bis 19.30 Uhr'],
    answer: 'Bis 18.30 Uhr',
  },
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Hallo Jonas, hier ist Mia. Ich bin krank und liege im Bett. Kannst du mir eine Suppe bringen? Das wäre lieb. Danke dir!',
    q: 'Was soll Jonas bringen?',
    options: ['Eine Suppe', 'Einen Tee', 'Ein Medikament'],
    answer: 'Eine Suppe',
  },
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Guten Tag, hier ist die Zahnarztpraxis Lang. Bitte kommen Sie morgen zehn Minuten früher, wir brauchen noch Ihre Unterschrift auf einem Formular.',
    q: 'Was soll der Patient machen?',
    options: ['Zehn Minuten früher kommen', 'Zehn Minuten später kommen', 'Morgen zu Hause bleiben'],
    answer: 'Zehn Minuten früher kommen',
  },
];

const LT1 = 'Lesen · Teil 1';
const LT2 = 'Lesen · Teil 2';
const LT3 = 'Lesen · Teil 3';

export const MOCK5_LESEN = [
  // ── Teil 1 · short texts → richtig/falsch (5 statements) ────────
  {
    type: 'richtig-falsch', label: LT1,
    title: 'Text 1',
    context: 'Sehr geehrte Frau Wolf,\n\nich bin krank und kann bis Mittwoch nicht arbeiten. Das Attest vom Arzt schicke ich Ihnen heute. Ab Donnerstag bin ich wieder im Büro.\n\nMit freundlichen Grüßen\nDavid Kim',
    statements: [
      { text: 'David Kim ist krank.', answer: true },
      { text: 'Er schickt das Attest morgen.', answer: false },
      { text: 'Ab Donnerstag arbeitet er wieder.', answer: true },
    ],
  },
  {
    type: 'richtig-falsch', label: LT1,
    title: 'Text 2',
    context: 'Lieber Papa,\n\ndeine Tabletten stehen auf dem Küchentisch. Nimm bitte zwei am Tag: eine am Morgen und eine am Abend, immer nach dem Essen. Und trink viel Wasser!\n\nDeine Hanna',
    statements: [
      { text: 'Der Papa soll zwei Tabletten am Tag nehmen.', answer: true },
      { text: 'Er soll die Tabletten vor dem Essen nehmen.', answer: false },
    ],
  },

  // ── Teil 2 · situation → advert (4) ─────────────────────────────
  {
    type: 'ad-match', label: LT2,
    situation: 'Sie arbeiten Montag bis Freitag und brauchen einen Hausarzt mit Sprechstunde am Samstag.',
    options: [
      { key: 'a', title: 'Praxis Dr. Berger', body: 'Sprechzeiten: Montag bis Freitag, 8–13 Uhr.' },
      { key: 'b', title: 'Praxis am Stadttor', body: 'Für Berufstätige: auch samstags von 9 bis 13 Uhr geöffnet.' },
    ],
    answer: 'b',
    explain: 'Saturday consultation hours; the other practice is weekdays-only.',
  },
  {
    type: 'ad-match', label: LT2,
    situation: 'Ihre Tochter sieht schlecht und braucht vielleicht eine Brille.',
    options: [
      { key: 'a', title: 'Augenarztpraxis Dr. Licht', body: 'Augen-Untersuchungen für Kinder und Erwachsene.\nTermine unter 030 445566.' },
      { key: 'b', title: 'Kinderarztpraxis Sonnenschein', body: 'Vorsorge und Impfungen für Kinder von 0 bis 12.' },
    ],
    answer: 'a',
    explain: 'Eye problems need the eye doctor; the paediatrician does check-ups and vaccinations.',
  },
  {
    type: 'ad-match', label: LT2,
    situation: 'Ihre Oma kann nicht mehr gut laufen. Die Medikamente sollen nach Hause kommen.',
    options: [
      { key: 'a', title: 'Apotheke im Zentrum', body: 'Große Auswahl, gute Beratung.\nMitten in der Stadt, 3. Etage im Kaufhaus.' },
      { key: 'b', title: 'Sonnen-Apotheke', body: 'Wir liefern Ihre Medikamente kostenlos nach Hause.\nEinfach anrufen: 030 998877.' },
    ],
    answer: 'b',
    explain: 'Free home delivery; the other pharmacy requires coming to the city centre.',
  },
  {
    type: 'ad-match', label: LT2,
    situation: 'Ihr Rücken tut weh. Sie suchen einen Sportkurs für Anfänger am Abend.',
    options: [
      { key: 'a', title: 'Yoga-Studio Balance', body: 'Rücken-Yoga für Anfänger.\nMontag und Mittwoch, 19–20 Uhr.' },
      { key: 'b', title: 'CrossFit Power', body: 'Hartes Training für Profis.\nTäglich ab 6 Uhr morgens.' },
    ],
    answer: 'a',
    explain: 'Beginner back yoga in the evening; the other is hard training for pros in the morning.',
  },

  // ── Teil 3 · signs → richtig/falsch (4) ─────────────────────────
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 1',
    context: '🔔 Praxis Dr. Sommer, 1. Stock — bitte klingeln.',
    statements: [{ text: 'Man soll an der Tür klingeln.', answer: true }],
  },
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 2',
    context: '📵 Im Wartezimmer bitte nicht telefonieren. Danke!',
    statements: [{ text: 'Man darf im Wartezimmer telefonieren.', answer: false }],
  },
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 3',
    context: '🏥 Notaufnahme — Tag und Nacht geöffnet.',
    statements: [{ text: 'Die Notaufnahme ist auch in der Nacht geöffnet.', answer: true }],
  },
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 4',
    context: 'Löwen-Apotheke — Mittagspause von 13 bis 14 Uhr.',
    statements: [{ text: 'Die Apotheke ist um 13.30 Uhr geöffnet.', answer: false }],
  },
];

export const MOCK5_SCHREIBEN = [
  {
    type: 'form-fill', label: 'Schreiben · Teil 1',
    title: 'Anmeldung — Praxis Dr. Sommer',
    context: 'David Kim ist neu in der Praxis. Er kommt aus Korea und wohnt in Berlin. Er ist 1990 geboren. Seine Telefonnummer ist 030 776655.',
    fields: [
      { label: 'Familienname', name: 'last', answer: 'Kim' },
      { label: 'Vorname', name: 'first', answer: 'David' },
      { label: 'Land', name: 'country', answer: ['Korea', 'Südkorea'] },
      { label: 'Geburtsjahr', name: 'year', answer: '1990' },
      { label: 'Telefon', name: 'phone', answer: '030 776655' },
    ],
  },
  {
    type: 'guided-writing', label: 'Schreiben · Teil 2',
    situation: 'Sie haben morgen einen Arzttermin und können Ihre Tochter nicht von der Schule abholen. Schreiben Sie Ihrer Freundin Selin eine Nachricht (ca. 30 Wörter).',
    points: [
      'Bitten Sie Selin um Hilfe.',
      'Sagen Sie, warum Sie nicht können.',
      'Sagen Sie, wann die Schule aus ist.',
    ],
    minWords: 25,
    model: 'Liebe Selin,\nkannst du morgen bitte meine Tochter von der Schule abholen? Ich habe einen Termin beim Arzt. Die Schule ist um 13 Uhr aus. Vielen Dank für deine Hilfe!\nDeine Hanna',
  },
];

export const MOCK5_SPRECHEN = [
  {
    type: 'speaking-card', label: 'Sprechen · Teil 1',
    instruction: 'Stellen Sie sich vor. Sagen Sie zu jedem Stichwort einen Satz über sich.',
    cards: [
      { keyword: 'Name', prompt: 'Say your name.', model: 'Mein Name ist Fatima Yilmaz.' },
      { keyword: 'Alter', prompt: 'Say how old you are.', model: 'Ich bin 42 Jahre alt.' },
      { keyword: 'Land', prompt: 'Say which country you come from.', model: 'Ich komme aus der Türkei.' },
      { keyword: 'Wohnort', prompt: 'Say where you live.', model: 'Ich wohne in Hamburg.' },
      { keyword: 'Sprachen', prompt: 'Say which languages you speak.', model: 'Ich spreche Türkisch und ein bisschen Deutsch.' },
      { keyword: 'Beruf', prompt: 'Say what your job is.', model: 'Ich bin Krankenschwester von Beruf.' },
      { keyword: 'Hobby', prompt: 'Say what your hobby is.', model: 'Mein Hobby ist Schwimmen.' },
    ],
  },
  {
    type: 'speaking-card', label: 'Sprechen · Teil 2',
    instruction: 'Thema: Gesundheit. Bilden Sie zu jedem Wort eine Frage.',
    cards: [
      { keyword: 'Sport', prompt: 'Ask how often someone does sport.', model: 'Wie oft machst du Sport?' },
      { keyword: 'schlafen', prompt: 'Ask how long someone sleeps.', model: 'Wie lange schläfst du?' },
      { keyword: 'Arzt', prompt: 'Ask if someone is going to the doctor.', model: 'Gehst du zum Arzt?' },
      { keyword: 'Obst', prompt: 'Ask if someone eats a lot of fruit.', model: 'Isst du viel Obst?' },
    ],
  },
  {
    type: 'speaking-card', label: 'Sprechen · Teil 3',
    instruction: 'Formulieren Sie zu jeder Situation eine höfliche Bitte.',
    cards: [
      { keyword: 'Termin', prompt: 'Politely ask to move an appointment.', model: 'Können wir den Termin bitte verschieben?' },
      { keyword: 'Taxi', prompt: 'Politely ask someone to call you a taxi.', model: 'Können Sie mir bitte ein Taxi rufen?' },
      { keyword: 'Rezept', prompt: 'Politely ask the doctor to write it down.', model: 'Können Sie mir das bitte aufschreiben?' },
      { keyword: 'Apotheke', prompt: 'Politely ask a friend to fetch your medicine.', model: 'Kannst du bitte mein Medikament aus der Apotheke holen?' },
    ],
  },
];
