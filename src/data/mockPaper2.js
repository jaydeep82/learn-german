/**
 * Mock exam paper 2 — «Im Alltag» (daily life).
 * A complete, fresh Goethe A1 sitting: item counts close to the real exam
 * (Hören 13 · Lesen 13 · Schreiben form + one ~30-word message · Sprechen
 * with the official keyword structure). All content strictly A1.
 */

const HT1 = 'Hören · Teil 1';
const HT2 = 'Hören · Teil 2';
const HT3 = 'Hören · Teil 3';

export const MOCK2_HOEREN = [
  // ── Teil 1 · dialogues → picture (5) ────────────────────────────
  {
    type: 'picture-mcq', label: HT1,
    q: 'Wie viele Brötchen kauft der Mann?',
    audioText: 'Guten Morgen! Ich hätte gern sechs Brötchen, bitte. — Gern, sonst noch etwas? — Nein, danke.',
    options: [
      { value: '4', emoji: '4️⃣', label: 'vier' },
      { value: '6', emoji: '6️⃣', label: 'sechs' },
      { value: '10', emoji: '🔟', label: 'zehn' },
    ],
    answer: '6',
    explain: '“Ich hätte gern sechs Brötchen.” — he asks for six rolls.',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'Wie wird das Wetter am Wochenende?',
    audioText: 'Und nun das Wetter: Am Samstag und Sonntag scheint überall die Sonne, es wird warm.',
    options: [
      { value: 'sonne', emoji: '☀️', label: 'Sonne' },
      { value: 'regen', emoji: '🌧️', label: 'Regen' },
      { value: 'wind', emoji: '💨', label: 'Wind' },
    ],
    answer: 'sonne',
    explain: '“…scheint überall die Sonne” — sunny everywhere.',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'Wann treffen sich die Frauen?',
    audioText: 'Treffen wir uns um halb zehn im Café? — Ja, halb zehn passt gut.',
    options: [
      { value: 't900', emoji: '🕘', label: '9.00 Uhr' },
      { value: 't930', emoji: '🕤', label: '9.30 Uhr' },
      { value: 't1030', emoji: '🕥', label: '10.30 Uhr' },
    ],
    answer: 't930',
    explain: '“halb zehn” = 9.30.',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'Wie fährt die Frau zur Arbeit?',
    audioText: 'Fährst du mit dem Auto zur Arbeit? — Nein, ich fahre immer mit dem Fahrrad, das ist gesund.',
    options: [
      { value: 'auto', emoji: '🚗', label: 'Auto' },
      { value: 'rad', emoji: '🚲', label: 'Fahrrad' },
      { value: 'bus', emoji: '🚌', label: 'Bus' },
    ],
    answer: 'rad',
    explain: '“…ich fahre immer mit dem Fahrrad.”',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'Was kauft die Frau auf dem Markt?',
    audioText: 'Was darf es sein? — Ein Kilo Tomaten und einen Salat, bitte. Obst habe ich noch.',
    options: [
      { value: 'gemuese', emoji: '🍅', label: 'Tomaten & Salat' },
      { value: 'obst', emoji: '🍎', label: 'Obst' },
      { value: 'brot', emoji: '🍞', label: 'Brot' },
    ],
    answer: 'gemuese',
    explain: 'She buys tomatoes and a lettuce — she already has fruit.',
  },

  // ── Teil 2 · announcements → richtig/falsch (4) ─────────────────
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Achtung am Gleis drei: Der Zug nach Köln fährt heute von Gleis sieben ab. Ich wiederhole: Gleis sieben.',
    statements: [{ text: 'Der Zug nach Köln fährt heute von Gleis drei ab.', answer: false }],
  },
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Liebe Kundinnen und Kunden, heute im Angebot: ein Kilo Äpfel für nur einen Euro neunundneunzig.',
    statements: [{ text: 'Ein Kilo Äpfel kostet heute 1,99 Euro.', answer: true }],
  },
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Sehr geehrte Besucher, das Museum schließt heute schon um siebzehn Uhr. Vielen Dank für Ihren Besuch.',
    statements: [{ text: 'Das Museum schließt heute um 19 Uhr.', answer: false }],
  },
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Information für alle Fahrgäste: Der Bus Linie acht fährt am Sonntag nicht. Bitte nehmen Sie die Linie neun.',
    statements: [{ text: 'Am Sonntag fährt die Linie neun.', answer: true }],
  },

  // ── Teil 3 · phone messages → multiple choice (4) ───────────────
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Guten Tag, hier ist die Praxis Doktor Weber. Ihr Termin am Dienstag geht leider nicht. Können Sie am Donnerstag um zehn Uhr kommen? Bitte rufen Sie uns an.',
    q: 'Wann ist der neue Termin?',
    options: ['Am Dienstag um 10 Uhr', 'Am Donnerstag um 10 Uhr', 'Am Donnerstag um 12 Uhr'],
    answer: 'Am Donnerstag um 10 Uhr',
  },
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Hallo Ana, hier ist Marko. Mein Zug kommt um achtzehn Uhr vierzig am Hauptbahnhof an. Kannst du mich abholen? Danke!',
    q: 'Wann kommt Marko an?',
    options: ['Um 18.14 Uhr', 'Um 18.40 Uhr', 'Um 19.40 Uhr'],
    answer: 'Um 18.40 Uhr',
  },
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Guten Tag, hier ist die Sprachschule International. Ihr Deutschkurs ist morgen nicht in Raum zwölf, sondern in Raum acht. Raum acht, im ersten Stock.',
    q: 'Wo ist der Kurs morgen?',
    options: ['In Raum 12', 'In Raum 8', 'In Raum 18'],
    answer: 'In Raum 8',
  },
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Hi Paul, hier ist Lena. Ich kann heute Abend leider nicht kommen, ich muss arbeiten. Wollen wir morgen ins Kino gehen? Ruf mich an.',
    q: 'Warum kommt Lena heute nicht?',
    options: ['Sie ist krank.', 'Sie muss arbeiten.', 'Sie ist im Kino.'],
    answer: 'Sie muss arbeiten.',
  },
];

const LT1 = 'Lesen · Teil 1';
const LT2 = 'Lesen · Teil 2';
const LT3 = 'Lesen · Teil 3';

export const MOCK2_LESEN = [
  // ── Teil 1 · short texts → richtig/falsch (5 statements) ────────
  {
    type: 'richtig-falsch', label: LT1,
    title: 'Text 1',
    context: 'Hallo Tim,\n\nich mache am Freitag ein kleines Fest — ich habe eine neue Wohnung! Wir grillen im Garten, ab 18 Uhr. Bring bitte Getränke mit. Meine neue Adresse: Gartenstraße 5.\n\nBis Freitag!\nSara',
    statements: [
      { text: 'Sara hat eine neue Wohnung.', answer: true },
      { text: 'Das Fest beginnt um 20 Uhr.', answer: false },
      { text: 'Tim soll Getränke mitbringen.', answer: true },
    ],
  },
  {
    type: 'richtig-falsch', label: LT1,
    title: 'Text 2',
    context: 'Liebe Frau Schmidt,\n\nIhre Waschmaschine ist wieder da. Die Reparatur hat 89 Euro gekostet. Sie können die Maschine von Montag bis Samstag zwischen 9 und 18 Uhr abholen.\n\nMit freundlichen Grüßen\nElektro Huber',
    statements: [
      { text: 'Die Reparatur kostet 98 Euro.', answer: false },
      { text: 'Frau Schmidt kann die Maschine auch am Samstag abholen.', answer: true },
    ],
  },

  // ── Teil 2 · situation → advert (4) ─────────────────────────────
  {
    type: 'ad-match', label: LT2,
    situation: 'Sie möchten am Sonntag mit Ihren Kindern Sport machen.',
    options: [
      { key: 'a', title: 'Schwimmbad Wellenberg', body: 'Schwimmen für die ganze Familie.\nTäglich 8–20 Uhr, auch sonntags.' },
      { key: 'b', title: 'Fitness-Studio Aktiv', body: 'Training nur für Erwachsene.\nMontag bis Freitag, 6–22 Uhr.' },
    ],
    answer: 'a',
    explain: 'Open on Sundays and for the whole family; the gym is adults-only and closed Sundays.',
  },
  {
    type: 'ad-match', label: LT2,
    situation: 'Ihr Handy ist kaputt. Sie brauchen schnell ein neues, aber es darf nicht viel kosten.',
    options: [
      { key: 'a', title: 'Handy-Welt', body: 'Neue Smartphones ab 99 Euro.\nHeute geöffnet bis 20 Uhr.' },
      { key: 'b', title: 'Elektro Lux', body: 'Exklusive Smartphones ab 899 Euro.\nBeratung nur mit Termin.' },
    ],
    answer: 'a',
    explain: 'Cheap phones (from €99) available today; the other shop is expensive and needs an appointment.',
  },
  {
    type: 'ad-match', label: LT2,
    situation: 'Sie suchen für Ihre Tochter (8 Jahre) einen Schwimmkurs am Nachmittag.',
    options: [
      { key: 'a', title: 'Schwimmschule Delfin', body: 'Kurse für Kinder von 6 bis 12 Jahren.\nDienstag und Donnerstag, 16–17 Uhr.' },
      { key: 'b', title: 'Aqua-Fit', body: 'Schwimmtraining für Erwachsene.\nJeden Morgen von 7 bis 9 Uhr.' },
    ],
    answer: 'a',
    explain: 'Children’s courses (6–12) in the afternoon; the other is adult morning training.',
  },
  {
    type: 'ad-match', label: LT2,
    situation: 'Sie wollen am Samstagabend italienisch essen gehen.',
    options: [
      { key: 'a', title: 'Ristorante Roma', body: 'Pizza und Pasta.\nGeöffnet täglich 17–23 Uhr.' },
      { key: 'b', title: 'Café Morgenrot', body: 'Frühstück und Kuchen.\nSamstag und Sonntag nur bis 14 Uhr.' },
    ],
    answer: 'a',
    explain: 'Italian food, open Saturday evening; the café closes at 2 p.m.',
  },

  // ── Teil 3 · signs → richtig/falsch (4) ─────────────────────────
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 1',
    context: '🅿️ Parkhaus Mitte — Montag bis Samstag 6–24 Uhr. Sonntags geschlossen.',
    statements: [{ text: 'Am Sonntag kann man hier parken.', answer: false }],
  },
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 2',
    context: 'Praxis Dr. Meier — Heute keine Sprechstunde. In Notfällen rufen Sie bitte 112.',
    statements: [{ text: 'Heute gibt es keine Sprechstunde.', answer: true }],
  },
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 3',
    context: 'Kasse 2 geschlossen — Bitte zahlen Sie an Kasse 1.',
    statements: [{ text: 'Man kann an Kasse 2 bezahlen.', answer: false }],
  },
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 4',
    context: 'Bitte Schuhe ausziehen! Danke.',
    statements: [{ text: 'Man muss hier die Schuhe ausziehen.', answer: true }],
  },
];

export const MOCK2_SCHREIBEN = [
  {
    type: 'form-fill', label: 'Schreiben · Teil 1',
    title: 'Anmeldung — Hotel Sonne',
    context: 'Pavel Novak aus Tschechien macht Urlaub in München. Er ist 35 Jahre alt und wohnt in Prag, Hlavni 12. Er bleibt vier Nächte und zahlt mit Karte.',
    fields: [
      { label: 'Familienname', name: 'last', answer: 'Novak' },
      { label: 'Vorname', name: 'first', answer: 'Pavel' },
      { label: 'Land', name: 'country', answer: ['Tschechien', 'Czech Republic', 'Czechia'] },
      { label: 'Stadt', name: 'city', answer: ['Prag', 'Prague'] },
      { label: 'Nächte', name: 'nights', answer: ['vier', '4'] },
    ],
  },
  {
    type: 'guided-writing', label: 'Schreiben · Teil 2',
    situation: 'Sie können am Samstag nicht zum Geburtstag Ihrer Freundin Julia kommen. Schreiben Sie Julia eine Nachricht (ca. 30 Wörter).',
    points: [
      'Entschuldigen Sie sich.',
      'Sagen Sie, warum Sie nicht kommen können.',
      'Machen Sie einen neuen Termin-Vorschlag.',
    ],
    minWords: 25,
    model: 'Liebe Julia,\nes tut mir leid, aber ich kann am Samstag nicht zu deinem Geburtstag kommen. Ich muss arbeiten. Hast du am Sonntag Zeit? Dann lade ich dich zum Kaffee ein.\nViele Grüße\nMaria',
  },
];

export const MOCK2_SPRECHEN = [
  {
    type: 'speaking-card', label: 'Sprechen · Teil 1',
    instruction: 'Stellen Sie sich vor. Sagen Sie zu jedem Stichwort einen Satz über sich.',
    cards: [
      { keyword: 'Name', prompt: 'Say your name.', model: 'Ich heiße Pavel Novak.' },
      { keyword: 'Alter', prompt: 'Say how old you are.', model: 'Ich bin 35 Jahre alt.' },
      { keyword: 'Land', prompt: 'Say which country you come from.', model: 'Ich komme aus Tschechien.' },
      { keyword: 'Wohnort', prompt: 'Say where you live.', model: 'Ich wohne in Prag.' },
      { keyword: 'Sprachen', prompt: 'Say which languages you speak.', model: 'Ich spreche Tschechisch und ein bisschen Deutsch.' },
      { keyword: 'Beruf', prompt: 'Say what your job is.', model: 'Ich arbeite als Koch.' },
      { keyword: 'Hobby', prompt: 'Say what your hobby is.', model: 'Meine Hobbys sind Kochen und Fußball.' },
    ],
  },
  {
    type: 'speaking-card', label: 'Sprechen · Teil 2',
    instruction: 'Thema: Essen und Trinken. Bilden Sie zu jedem Wort eine Frage.',
    cards: [
      { keyword: 'Frühstück', prompt: 'Ask what someone eats for breakfast.', model: 'Was isst du zum Frühstück?' },
      { keyword: 'Lieblingsessen', prompt: 'Ask about someone’s favourite food.', model: 'Was ist dein Lieblingsessen?' },
      { keyword: 'kochen', prompt: 'Ask if someone likes cooking.', model: 'Kochst du gern?' },
      { keyword: 'Restaurant', prompt: 'Ask how often someone goes to a restaurant.', model: 'Wie oft gehst du ins Restaurant?' },
    ],
  },
  {
    type: 'speaking-card', label: 'Sprechen · Teil 3',
    instruction: 'Formulieren Sie zu jeder Situation eine höfliche Bitte.',
    cards: [
      { keyword: 'Wasser', prompt: 'Politely ask for a glass of water.', model: 'Könnten Sie mir bitte ein Glas Wasser bringen?' },
      { keyword: 'Handy', prompt: 'Politely ask a friend to turn off the phone.', model: 'Kannst du bitte dein Handy ausmachen?' },
      { keyword: 'langsam', prompt: 'Politely ask someone to speak more slowly.', model: 'Können Sie bitte langsamer sprechen?' },
      { keyword: 'Foto', prompt: 'Politely ask someone to take a photo of you.', model: 'Könnten Sie bitte ein Foto von mir machen?' },
    ],
  },
];
