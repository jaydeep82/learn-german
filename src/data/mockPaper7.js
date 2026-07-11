/**
 * Mock exam paper 7 — «Schule & Lernen» (school & learning).
 * Fresh Goethe A1 sitting: Hören 13 · Lesen 13 · form + message · Sprechen
 * with the official keyword structure. All content strictly A1.
 */

const HT1 = 'Hören · Teil 1';
const HT2 = 'Hören · Teil 2';
const HT3 = 'Hören · Teil 3';

export const MOCK7_HOEREN = [
  // ── Teil 1 · dialogues → picture (5) ────────────────────────────
  {
    type: 'picture-mcq', label: HT1,
    q: 'Welches Buch braucht der Kurs?',
    audioText: 'Entschuldigung, welches Buch brauchen wir für den Kurs? — Das blaue Buch, „Deutsch A1". Das rote ist für den B1-Kurs.',
    options: [
      { value: 'blau', emoji: '📘', label: 'das blaue Buch' },
      { value: 'rot', emoji: '📕', label: 'das rote Buch' },
      { value: 'gruen', emoji: '📗', label: 'das grüne Buch' },
    ],
    answer: 'blau',
    explain: '“Das blaue Buch, Deutsch A1.”',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'Wann ist die Prüfung?',
    audioText: 'Wann ist unsere Prüfung? Im April? — Nein, am zwölften Mai. Du hast noch Zeit zum Lernen.',
    options: [
      { value: 'mai12', emoji: '📅', label: 'am 12. Mai' },
      { value: 'april12', emoji: '🗓️', label: 'am 12. April' },
      { value: 'mai2', emoji: '📆', label: 'am 2. Mai' },
    ],
    answer: 'mai12',
    explain: '“Am zwölften Mai.” — on the 12th of May.',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'Wo lernt die Gruppe heute?',
    audioText: 'Lernen wir heute im Kursraum? — Nein, wir treffen uns in der Bibliothek. Dort ist es ruhig.',
    options: [
      { value: 'bib', emoji: '📚', label: 'in der Bibliothek' },
      { value: 'raum', emoji: '🏫', label: 'im Kursraum' },
      { value: 'cafe', emoji: '☕', label: 'im Café' },
    ],
    answer: 'bib',
    explain: '“Wir treffen uns in der Bibliothek.”',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'Was muss man zur Prüfung mitbringen?',
    audioText: 'Was brauche ich für die Prüfung? — Bringen Sie bitte Ihren Ausweis mit. Stifte bekommen Sie von uns.',
    options: [
      { value: 'ausweis', emoji: '🪪', label: 'den Ausweis' },
      { value: 'stift', emoji: '✏️', label: 'einen Stift' },
      { value: 'woerterbuch', emoji: '📖', label: 'ein Wörterbuch' },
    ],
    answer: 'ausweis',
    explain: '“Bringen Sie bitte Ihren Ausweis mit.” — pens are provided.',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'Wie viele Teilnehmer sind im Kurs?',
    audioText: 'Ist der Kurs groß? — Es geht: Wir sind fünfzehn Teilnehmer, acht Frauen und sieben Männer.',
    options: [
      { value: 't15', emoji: '👥', label: '15 Teilnehmer' },
      { value: 't50', emoji: '🏟️', label: '50 Teilnehmer' },
      { value: 't8', emoji: '🧑‍🤝‍🧑', label: '8 Teilnehmer' },
    ],
    answer: 't15',
    explain: '“Wir sind fünfzehn Teilnehmer.”',
  },

  // ── Teil 2 · announcements → richtig/falsch (4) ─────────────────
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Achtung, eine Durchsage: Der Kurs B ist heute nicht in Raum 2, sondern in Raum 7.',
    statements: [{ text: 'Der Kurs B ist heute in Raum 2.', answer: false }],
  },
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Liebe Leserinnen und Leser, bitte bringen Sie alle Bücher bis zum Dreißigsten zurück. Danach kostet es Geld.',
    statements: [{ text: 'Man soll die Bücher bis zum 30. zurückbringen.', answer: true }],
  },
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Information für alle Teilnehmer: Die Prüfung beginnt pünktlich um neun Uhr. Bitte seien Sie schon um halb neun da.',
    statements: [{ text: 'Man soll um 8.30 Uhr da sein.', answer: true }],
  },
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Die Cafeteria der Schule ist heute nur bis fünfzehn Uhr geöffnet.',
    statements: [{ text: 'Die Cafeteria schließt heute um 17 Uhr.', answer: false }],
  },

  // ── Teil 3 · phone messages → multiple choice (4) ───────────────
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Hallo, hier ist Frau Novak, Ihre Deutschlehrerin. Bringen Sie morgen bitte ein Wörterbuch mit. Wir üben für die Prüfung.',
    q: 'Was soll man morgen mitbringen?',
    options: ['Ein Wörterbuch', 'Einen Laptop', 'Ein Foto'],
    answer: 'Ein Wörterbuch',
  },
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Guten Tag, hier ist die Sprachschule Lingua. Ihr Einstufungstest ist am Montag um zehn Uhr. Bitte kommen Sie ins Sekretariat.',
    q: 'Wann ist der Einstufungstest?',
    options: ['Montag um 10 Uhr', 'Montag um 12 Uhr', 'Dienstag um 10 Uhr'],
    answer: 'Montag um 10 Uhr',
  },
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Hi, hier ist Pablo aus dem Kurs. Ich war heute krank. Kannst du mir bitte deine Notizen schicken? Danke dir!',
    q: 'Was möchte Pablo?',
    options: ['Die Notizen', 'Das Buch', 'Die Hausaufgaben'],
    answer: 'Die Notizen',
  },
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Guten Tag, hier ist das Sekretariat. Ihr Zertifikat ist fertig. Sie können es von Montag bis Freitag zwischen neun und vierzehn Uhr abholen.',
    q: 'Wann kann man das Zertifikat abholen?',
    options: ['Montag bis Freitag, 9–14 Uhr', 'Jeden Tag, 9–14 Uhr', 'Nur am Freitag'],
    answer: 'Montag bis Freitag, 9–14 Uhr',
  },
];

const LT1 = 'Lesen · Teil 1';
const LT2 = 'Lesen · Teil 2';
const LT3 = 'Lesen · Teil 3';

export const MOCK7_LESEN = [
  // ── Teil 1 · short texts → richtig/falsch (5 statements) ────────
  {
    type: 'richtig-falsch', label: LT1,
    title: 'Text 1',
    context: 'Liebe Teilnehmerinnen und Teilnehmer,\n\nab März haben wir neue Kurszeiten: Der Abendkurs beginnt dann schon um 17.30 Uhr, nicht um 18 Uhr. Der Kurs ist dann in Raum 4. Ihre Lehrerin bleibt Frau Novak.\n\nIhre Sprachschule Lingua',
    statements: [
      { text: 'Ab März beginnt der Kurs um 17.30 Uhr.', answer: true },
      { text: 'Der Kurs bekommt eine neue Lehrerin.', answer: false },
      { text: 'Der Kurs ist ab März in Raum 4.', answer: true },
    ],
  },
  {
    type: 'richtig-falsch', label: LT1,
    title: 'Text 2',
    context: 'Aushang:\n\nLerngruppe Deutsch A1 sucht neue Mitglieder! Wir treffen uns jeden Mittwoch um 17 Uhr in der Bibliothek und üben zusammen. Es kostet nichts. Komm einfach vorbei!',
    statements: [
      { text: 'Die Lerngruppe trifft sich am Mittwoch.', answer: true },
      { text: 'Die Lerngruppe kostet 17 Euro.', answer: false },
    ],
  },

  // ── Teil 2 · situation → advert (4) ─────────────────────────────
  {
    type: 'ad-match', label: LT2,
    situation: 'Sie wohnen auf dem Land, haben kein Auto und möchten Deutsch lernen.',
    options: [
      { key: 'a', title: 'Sprachzentrum City', body: 'Deutschkurse im Zentrum von München.\nMontag bis Freitag vor Ort.' },
      { key: 'b', title: 'Lingua Online', body: 'Deutsch lernen am Computer — von überall.\nLive-Unterricht per Video.' },
    ],
    answer: 'b',
    explain: 'The online course works from anywhere; the other requires travelling to Munich daily.',
  },
  {
    type: 'ad-match', label: LT2,
    situation: 'Ihr Sohn braucht Hilfe in Mathematik (Klasse 5).',
    options: [
      { key: 'a', title: 'Nachhilfe-Studio Plus', body: 'Mathe-Nachhilfe für Schüler der Klassen 1–10.\nEinzelunterricht am Nachmittag.' },
      { key: 'b', title: 'Mathe-Club Uni', body: 'Mathematik für Studenten.\nVorbereitung auf Uni-Prüfungen.' },
    ],
    answer: 'a',
    explain: 'Tutoring for school pupils; the other is for university students.',
  },
  {
    type: 'ad-match', label: LT2,
    situation: 'Sie haben wenig Geld und nur am Sonntag Zeit, Deutsch zu üben.',
    options: [
      { key: 'a', title: 'Sprachcafé International', body: 'Deutsch sprechen und Leute treffen.\nJeden Sonntag, 15–17 Uhr. Kostenlos!' },
      { key: 'b', title: 'Privatlehrer Dr. Fein', body: 'Einzelunterricht bei Ihnen zu Hause.\n60 Euro pro Stunde, Montag bis Freitag.' },
    ],
    answer: 'a',
    explain: 'Free and on Sundays; the private teacher is expensive and weekdays-only.',
  },
  {
    type: 'ad-match', label: LT2,
    situation: 'Sie möchten am Abend lange in Ruhe lernen und brauchen dafür einen Ort.',
    options: [
      { key: 'a', title: 'Stadtbibliothek', body: 'Lesesaal und Arbeitsplätze.\nMontag bis Samstag bis 22 Uhr geöffnet.' },
      { key: 'b', title: 'Buchladen Leseecke', body: 'Bücher kaufen und Kaffee trinken.\nTäglich 9–18 Uhr.' },
    ],
    answer: 'a',
    explain: 'Quiet study places open till 22:00; the bookshop closes at 18:00.',
  },

  // ── Teil 3 · signs → richtig/falsch (4) ─────────────────────────
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 1',
    context: '🤫 Bitte leise sein — Prüfung!',
    statements: [{ text: 'Man soll leise sein.', answer: true }],
  },
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 2',
    context: '💻 Computerraum — Essen und Trinken verboten.',
    statements: [{ text: 'Man darf im Computerraum Kaffee trinken.', answer: false }],
  },
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 3',
    context: '📝 Anmeldung für alle Kurse: im Sekretariat, Zimmer 3, Erdgeschoss.',
    statements: [{ text: 'Die Anmeldung ist in Zimmer 3.', answer: true }],
  },
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 4',
    context: '📚 Ausleihe nur mit Bibliotheksausweis.',
    statements: [{ text: 'Man braucht einen Ausweis für die Ausleihe.', answer: true }],
  },
];

export const MOCK7_SCHREIBEN = [
  {
    type: 'form-fill', label: 'Schreiben · Teil 1',
    title: 'Prüfungsanmeldung — Sprachschule Lingua',
    context: 'Mei Chen möchte die Prüfung Goethe-Zertifikat A1 machen. Sie kommt aus China und wohnt in Bonn. Ihre Telefonnummer ist 0228 334455.',
    fields: [
      { label: 'Familienname', name: 'last', answer: 'Chen' },
      { label: 'Vorname', name: 'first', answer: 'Mei' },
      { label: 'Land', name: 'country', answer: ['China'] },
      { label: 'Stadt', name: 'city', answer: 'Bonn' },
      { label: 'Prüfung', name: 'exam', answer: ['Goethe-Zertifikat A1', 'A1'] },
    ],
  },
  {
    type: 'guided-writing', label: 'Schreiben · Teil 2',
    situation: 'Sie möchten einen Deutschkurs an der Sprachschule Lingua machen. Schreiben Sie eine E-Mail an die Schule (ca. 30 Wörter).',
    points: [
      'Fragen Sie, wann der nächste A1-Kurs beginnt.',
      'Fragen Sie nach dem Preis.',
      'Sagen Sie, wann Sie Zeit haben.',
    ],
    minWords: 25,
    model: 'Sehr geehrte Damen und Herren,\nwann beginnt der nächste A1-Kurs bei Ihnen? Was kostet der Kurs? Ich habe am Abend Zeit, ab 18 Uhr.\nVielen Dank für Ihre Antwort.\nMit freundlichen Grüßen\nMei Chen',
  },
];

export const MOCK7_SPRECHEN = [
  {
    type: 'speaking-card', label: 'Sprechen · Teil 1',
    instruction: 'Stellen Sie sich vor. Sagen Sie zu jedem Stichwort einen Satz über sich.',
    cards: [
      { keyword: 'Name', prompt: 'Say your name.', model: 'Ich heiße Mei Chen.' },
      { keyword: 'Alter', prompt: 'Say how old you are.', model: 'Ich bin 22 Jahre alt.' },
      { keyword: 'Land', prompt: 'Say which country you come from.', model: 'Ich komme aus China.' },
      { keyword: 'Wohnort', prompt: 'Say where you live.', model: 'Ich wohne in Bonn.' },
      { keyword: 'Sprachen', prompt: 'Say which languages you speak.', model: 'Ich spreche Chinesisch, Englisch und ein bisschen Deutsch.' },
      { keyword: 'Beruf', prompt: 'Say what you do.', model: 'Ich bin Studentin.' },
      { keyword: 'Hobby', prompt: 'Say what your hobby is.', model: 'Mein Hobby ist Fotografieren.' },
    ],
  },
  {
    type: 'speaking-card', label: 'Sprechen · Teil 2',
    instruction: 'Thema: Lernen. Bilden Sie zu jedem Wort eine Frage.',
    cards: [
      { keyword: 'Deutsch', prompt: 'Ask how long someone has been learning German.', model: 'Wie lange lernst du schon Deutsch?' },
      { keyword: 'Wörter', prompt: 'Ask how someone learns new words.', model: 'Wie lernst du neue Wörter?' },
      { keyword: 'Hausaufgaben', prompt: 'Ask when someone does homework.', model: 'Wann machst du deine Hausaufgaben?' },
      { keyword: 'lesen', prompt: 'Ask if someone reads German books.', model: 'Liest du deutsche Bücher?' },
    ],
  },
  {
    type: 'speaking-card', label: 'Sprechen · Teil 3',
    instruction: 'Formulieren Sie zu jeder Situation eine höfliche Bitte.',
    cards: [
      { keyword: 'Buch', prompt: 'Politely ask to borrow a book.', model: 'Kannst du mir bitte das Buch leihen?' },
      { keyword: 'Wort', prompt: 'Politely ask the teacher to explain a word.', model: 'Können Sie das Wort bitte erklären?' },
      { keyword: 'Tafel', prompt: 'Politely ask if you may photograph the board.', model: 'Darf ich ein Foto von der Tafel machen?' },
      { keyword: 'noch einmal', prompt: 'Politely ask someone to say it again.', model: 'Können Sie das bitte noch einmal sagen?' },
    ],
  },
];
