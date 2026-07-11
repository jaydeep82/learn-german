/**
 * Mock exam paper 6 — «Wohnen & Einkaufen» (living & shopping).
 * Fresh Goethe A1 sitting: Hören 13 · Lesen 13 · form + message · Sprechen
 * with the official keyword structure. All content strictly A1.
 */

const HT1 = 'Hören · Teil 1';
const HT2 = 'Hören · Teil 2';
const HT3 = 'Hören · Teil 3';

export const MOCK6_HOEREN = [
  // ── Teil 1 · dialogues → picture (5) ────────────────────────────
  {
    type: 'picture-mcq', label: HT1,
    q: 'Welche Wohnung nimmt die Frau?',
    audioText: 'Nehmen Sie die Wohnung im Erdgeschoss? — Nein, ich nehme die Wohnung mit dem Balkon. Ich sitze gern draußen.',
    options: [
      { value: 'balkon', emoji: '🪴', label: 'mit Balkon' },
      { value: 'erdgeschoss', emoji: '🚪', label: 'im Erdgeschoss' },
      { value: 'garten', emoji: '🌳', label: 'mit Garten' },
    ],
    answer: 'balkon',
    explain: '“Ich nehme die Wohnung mit dem Balkon.”',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'Was kostet der Tisch?',
    audioText: 'Der Tisch ist schön. Was kostet er? — Fünfundsiebzig Euro. — Gut, den nehme ich.',
    options: [
      { value: 'e75', emoji: '7️⃣5️⃣', label: '75 €' },
      { value: 'e57', emoji: '5️⃣7️⃣', label: '57 €' },
      { value: 'e85', emoji: '8️⃣5️⃣', label: '85 €' },
    ],
    answer: 'e75',
    explain: '“Fünfundsiebzig Euro” = 75.',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'Wo ist die Waschmaschine?',
    audioText: 'Entschuldigung, wo kann ich hier waschen? — Die Waschmaschine ist im Keller, gleich neben der Treppe.',
    options: [
      { value: 'keller', emoji: '🔦', label: 'im Keller' },
      { value: 'bad', emoji: '🛁', label: 'im Bad' },
      { value: 'kueche', emoji: '🍳', label: 'in der Küche' },
    ],
    answer: 'keller',
    explain: '“Die Waschmaschine ist im Keller.”',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'Was kauft der Mann?',
    audioText: 'Brauchen wir noch etwas? — Ja, kauf bitte Milch und Eier. Brot haben wir noch.',
    options: [
      { value: 'milcheier', emoji: '🥛', label: 'Milch & Eier' },
      { value: 'brot', emoji: '🍞', label: 'Brot' },
      { value: 'kaese', emoji: '🧀', label: 'Käse' },
    ],
    answer: 'milcheier',
    explain: '“Kauf bitte Milch und Eier. Brot haben wir noch.”',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'Wann kommt der Elektriker?',
    audioText: 'Der Elektriker kommt morgen um halb neun. — Gut, dann bin ich zu Hause.',
    options: [
      { value: 't830', emoji: '🕣', label: '8.30 Uhr' },
      { value: 't900', emoji: '🕘', label: '9.00 Uhr' },
      { value: 't930', emoji: '🕤', label: '9.30 Uhr' },
    ],
    answer: 't830',
    explain: '“halb neun” = 8.30.',
  },

  // ── Teil 2 · announcements → richtig/falsch (4) ─────────────────
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Liebe Kunden, unser Sofa-Angebot gilt nur noch heute: alle Sofas zwanzig Prozent billiger.',
    statements: [{ text: 'Das Sofa-Angebot gilt nur noch heute.', answer: true }],
  },
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Mitteilung der Hausverwaltung: Morgen gibt es von neun bis zwölf Uhr kein Wasser. Wir reparieren die Leitung.',
    statements: [{ text: 'Morgen gibt es den ganzen Tag kein Wasser.', answer: false }],
  },
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Liebe Kundinnen und Kunden, unser Geschäft schließt in zehn Minuten. Bitte kommen Sie zur Kasse.',
    statements: [{ text: 'Das Geschäft schließt in zehn Minuten.', answer: true }],
  },
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Heute auf dem Wochenmarkt: frische Eier vom Bauernhof, zehn Stück für drei Euro.',
    statements: [{ text: 'Zehn Eier kosten dreizehn Euro.', answer: false }],
  },

  // ── Teil 3 · phone messages → multiple choice (4) ───────────────
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Hallo, hier ist Ihr Nachbar Weber. Ich habe ein Paket für Sie angenommen. Sie können es heute ab neunzehn Uhr bei mir abholen.',
    q: 'Ab wann kann man das Paket abholen?',
    options: ['Ab 19 Uhr', 'Ab 9 Uhr', 'Ab 17 Uhr'],
    answer: 'Ab 19 Uhr',
  },
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Guten Tag, hier ist die Hausverwaltung. Am Samstag ziehen Ihre neuen Nachbarn ein. Bitte stellen Sie am Samstag nichts in den Flur.',
    q: 'Was soll man am Samstag machen?',
    options: ['Nichts in den Flur stellen', 'Die Tür offen lassen', 'Den Nachbarn helfen'],
    answer: 'Nichts in den Flur stellen',
  },
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Hier ist das Möbelhaus Wohngut. Ihr Schrank kommt leider nicht am Montag, sondern erst am Dienstag zwischen acht und zwölf Uhr.',
    q: 'Wann kommt der Schrank?',
    options: ['Am Montag', 'Am Dienstag', 'Am Donnerstag'],
    answer: 'Am Dienstag',
  },
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Hi Schatz, ich bin noch im Büro. Kannst du vom Supermarkt bitte Brot und Käse mitbringen? Danke dir, bis später!',
    q: 'Was soll er mitbringen?',
    options: ['Brot und Käse', 'Milch und Eier', 'Obst und Gemüse'],
    answer: 'Brot und Käse',
  },
];

const LT1 = 'Lesen · Teil 1';
const LT2 = 'Lesen · Teil 2';
const LT3 = 'Lesen · Teil 3';

export const MOCK6_LESEN = [
  // ── Teil 1 · short texts → richtig/falsch (5 statements) ────────
  {
    type: 'richtig-falsch', label: LT1,
    title: 'Text 1',
    context: 'Liebe Nachbarn,\n\nwir renovieren am Samstag unsere Wohnung. Es wird von 9 bis 18 Uhr laut. Wir bitten um Entschuldigung! Am Sonntag ist alles wieder ruhig.\n\nFamilie Yildiz, 3. Stock',
    statements: [
      { text: 'Familie Yildiz renoviert am Samstag.', answer: true },
      { text: 'Es wird auch am Sonntag laut.', answer: false },
      { text: 'Familie Yildiz wohnt im dritten Stock.', answer: true },
    ],
  },
  {
    type: 'richtig-falsch', label: LT1,
    title: 'Text 2',
    context: 'Hallo Frau Berg,\n\nich bin heute nicht da. Der Schlüssel für Ihre Wohnung liegt beim Nachbarn in Haus Nummer 7, bei Herrn Klein. Er ist ab 17 Uhr zu Hause.\n\nIhr Hausmeister',
    statements: [
      { text: 'Der Schlüssel ist bei Herrn Klein.', answer: true },
      { text: 'Herr Klein ist ab 7 Uhr zu Hause.', answer: false },
    ],
  },

  // ── Teil 2 · situation → advert (4) ─────────────────────────────
  {
    type: 'ad-match', label: LT2,
    situation: 'Ihre Mutter (75) kann nicht gut Treppen steigen. Sie sucht eine Wohnung.',
    options: [
      { key: 'a', title: 'Wohnung A', body: '2 Zimmer im Erdgeschoss, mit kleinem Garten.\n620 € kalt.' },
      { key: 'b', title: 'Wohnung B', body: '3 Zimmer im 4. Stock, ohne Aufzug.\nSchöner Blick über die Stadt. 580 €.' },
    ],
    answer: 'a',
    explain: 'Ground floor suits someone who can’t climb stairs; the other is 4th floor without a lift.',
  },
  {
    type: 'ad-match', label: LT2,
    situation: 'Sie brauchen günstige Möbel für Ihre erste Wohnung.',
    options: [
      { key: 'a', title: 'Design-Studio Nova', body: 'Exklusive Designer-Möbel.\nSofas ab 2.000 Euro.' },
      { key: 'b', title: 'Möbel-Flohmarkt', body: 'Gebrauchte Möbel in gutem Zustand.\nTische ab 20, Schränke ab 50 Euro.' },
    ],
    answer: 'b',
    explain: 'Cheap used furniture; the design studio starts at €2,000.',
  },
  {
    type: 'ad-match', label: LT2,
    situation: 'Sie haben am Samstag keine Zeit und möchten Ihr Essen nach Hause bestellen.',
    options: [
      { key: 'a', title: 'Frischmarkt am Dom', body: 'Obst und Gemüse vom Bauern.\nNur samstags, 8–14 Uhr.' },
      { key: 'b', title: 'Super-Lieferdienst', body: 'Wir bringen Ihren Einkauf nach Hause.\nBestellen Sie online, Lieferung jeden Tag.' },
    ],
    answer: 'b',
    explain: 'Home delivery every day; the market is Saturdays-only in person.',
  },
  {
    type: 'ad-match', label: LT2,
    situation: 'Ihre Lampe ist kaputt — und es ist Sonntag. Sie brauchen schnell Hilfe.',
    options: [
      { key: 'a', title: 'Elektro-Notdienst 24', body: 'Wir helfen sofort — Tag und Nacht, auch am Wochenende.\nTelefon 0800 112233.' },
      { key: 'b', title: 'Elektro Schulz', body: 'Ihr Meisterbetrieb.\nGeöffnet Montag bis Freitag, 8–17 Uhr.' },
    ],
    answer: 'a',
    explain: '24/7 emergency service works on a Sunday; the other is closed at weekends.',
  },

  // ── Teil 3 · signs → richtig/falsch (4) ─────────────────────────
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 1',
    context: '🚲 Bitte keine Fahrräder im Hof abstellen. Fahrradkeller: Eingang B.',
    statements: [{ text: 'Fahrräder kommen in den Fahrradkeller.', answer: true }],
  },
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 2',
    context: '🧺 Waschküche — Benutzung nur von 8 bis 20 Uhr.',
    statements: [{ text: 'Man darf um 22 Uhr waschen.', answer: false }],
  },
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 3',
    context: '🚪 Bitte die Haustür immer schließen.',
    statements: [{ text: 'Die Haustür soll immer zu sein.', answer: true }],
  },
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 4',
    context: '🧀 Angebot: Käse — 2 kaufen, 1 gratis dazu!',
    statements: [{ text: 'Man bekommt einen Käse gratis, wenn man zwei kauft.', answer: true }],
  },
];

export const MOCK6_SCHREIBEN = [
  {
    type: 'form-fill', label: 'Schreiben · Teil 1',
    title: 'Kundenkarte — Möbelhaus Wohngut',
    context: 'Jan Kowalski möchte eine Kundenkarte. Er kommt aus Polen und wohnt in Leipzig, Ringstraße 8. Seine E-Mail ist jan.kowalski@mail.de.',
    fields: [
      { label: 'Familienname', name: 'last', answer: 'Kowalski' },
      { label: 'Vorname', name: 'first', answer: 'Jan' },
      { label: 'Land', name: 'country', answer: ['Polen', 'Poland'] },
      { label: 'Stadt', name: 'city', answer: 'Leipzig' },
      { label: 'E-Mail', name: 'email', answer: 'jan.kowalski@mail.de' },
    ],
  },
  {
    type: 'guided-writing', label: 'Schreiben · Teil 2',
    situation: 'Sie ziehen am Freitag um und brauchen Hilfe beim Tragen. Schreiben Sie Ihrem Nachbarn Herrn Weber eine Nachricht (ca. 30 Wörter).',
    points: [
      'Bitten Sie Herrn Weber um Hilfe.',
      'Sagen Sie, wann Sie umziehen.',
      'Bieten Sie etwas an (z. B. Kaffee und Kuchen).',
    ],
    minWords: 25,
    model: 'Lieber Herr Weber,\nich ziehe am Freitag um. Können Sie mir vielleicht beim Tragen helfen? Wir beginnen um 9 Uhr. Es gibt natürlich Kaffee und Kuchen für alle Helfer!\nViele Grüße\nJan Kowalski',
  },
];

export const MOCK6_SPRECHEN = [
  {
    type: 'speaking-card', label: 'Sprechen · Teil 1',
    instruction: 'Stellen Sie sich vor. Sagen Sie zu jedem Stichwort einen Satz über sich.',
    cards: [
      { keyword: 'Name', prompt: 'Say your name.', model: 'Ich heiße Jan Kowalski.' },
      { keyword: 'Alter', prompt: 'Say how old you are.', model: 'Ich bin 24 Jahre alt.' },
      { keyword: 'Land', prompt: 'Say which country you come from.', model: 'Ich komme aus Polen.' },
      { keyword: 'Wohnort', prompt: 'Say where you live.', model: 'Ich wohne in Leipzig.' },
      { keyword: 'Sprachen', prompt: 'Say which languages you speak.', model: 'Ich spreche Polnisch, Englisch und ein bisschen Deutsch.' },
      { keyword: 'Beruf', prompt: 'Say what your job is.', model: 'Ich bin Verkäufer von Beruf.' },
      { keyword: 'Hobby', prompt: 'Say what your hobby is.', model: 'Mein Hobby ist Kino.' },
    ],
  },
  {
    type: 'speaking-card', label: 'Sprechen · Teil 2',
    instruction: 'Thema: Wohnen. Bilden Sie zu jedem Wort eine Frage.',
    cards: [
      { keyword: 'Wohnung', prompt: 'Ask where someone lives.', model: 'Wo ist deine Wohnung?' },
      { keyword: 'Zimmer', prompt: 'Ask how many rooms someone has.', model: 'Wie viele Zimmer hast du?' },
      { keyword: 'Miete', prompt: 'Ask how expensive the rent is.', model: 'Wie teuer ist deine Miete?' },
      { keyword: 'Nachbarn', prompt: 'Ask if the neighbours are nice.', model: 'Sind deine Nachbarn nett?' },
    ],
  },
  {
    type: 'speaking-card', label: 'Sprechen · Teil 3',
    instruction: 'Formulieren Sie zu jeder Situation eine höfliche Bitte.',
    cards: [
      { keyword: 'Karton', prompt: 'Politely ask someone to carry a box.', model: 'Können Sie bitte diesen Karton tragen?' },
      { keyword: 'Werkzeug', prompt: 'Politely ask a neighbour to lend you a tool.', model: 'Kannst du mir bitte dein Werkzeug leihen?' },
      { keyword: 'Tüte', prompt: 'Politely ask for a bag at the till.', model: 'Kann ich bitte eine Tüte haben?' },
      { keyword: 'Preis', prompt: 'Politely ask what something costs.', model: 'Können Sie mir bitte den Preis sagen?' },
    ],
  },
];
