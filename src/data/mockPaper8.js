/**
 * Mock exam paper 8 — «Feste & Jahreszeiten» (celebrations & seasons).
 * Fresh Goethe A1 sitting: Hören 13 · Lesen 13 · form + message · Sprechen
 * with the official keyword structure. All content strictly A1.
 */

const HT1 = 'Hören · Teil 1';
const HT2 = 'Hören · Teil 2';
const HT3 = 'Hören · Teil 3';

export const MOCK8_HOEREN = [
  // ── Teil 1 · dialogues → picture (5) ────────────────────────────
  {
    type: 'picture-mcq', label: HT1,
    q: 'Was schenkt der Mann seiner Frau?',
    audioText: 'Was schenkst du deiner Frau zum Geburtstag? — Ich kaufe ihr Blumen, rote Rosen. Die liebt sie.',
    options: [
      { value: 'blumen', emoji: '💐', label: 'Blumen' },
      { value: 'buch', emoji: '📖', label: 'ein Buch' },
      { value: 'schokolade', emoji: '🍫', label: 'Schokolade' },
    ],
    answer: 'blumen',
    explain: '“Ich kaufe ihr Blumen, rote Rosen.”',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'Wann beginnt das Stadtfest?',
    audioText: 'Kommst du zum Stadtfest? Es beginnt am Freitagabend um sechs. — Ja, klar, um sechs bin ich da!',
    options: [
      { value: 'fr18', emoji: '🕕', label: 'Freitag, 18 Uhr' },
      { value: 'fr16', emoji: '🕓', label: 'Freitag, 16 Uhr' },
      { value: 'sa18', emoji: '📅', label: 'Samstag, 18 Uhr' },
    ],
    answer: 'fr18',
    explain: '“Am Freitagabend um sechs” = Friday 18:00.',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'Wie ist das Wetter im Winterurlaub?',
    audioText: 'Wie ist das Wetter bei euch in den Bergen? — Super! Es schneit jeden Tag, alles ist weiß.',
    options: [
      { value: 'schnee', emoji: '❄️', label: 'Es schneit' },
      { value: 'sonne', emoji: '☀️', label: 'Es ist sonnig' },
      { value: 'regen', emoji: '🌧️', label: 'Es regnet' },
    ],
    answer: 'schnee',
    explain: '“Es schneit jeden Tag.”',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'Was backt die Familie?',
    audioText: 'Was macht ihr heute? — Wir backen einen Kuchen für Weihnachten. Die Kinder helfen mir.',
    options: [
      { value: 'kuchen', emoji: '🎂', label: 'einen Kuchen' },
      { value: 'brot', emoji: '🍞', label: 'Brot' },
      { value: 'broetchen', emoji: '🥐', label: 'Brötchen' },
    ],
    answer: 'kuchen',
    explain: '“Wir backen einen Kuchen für Weihnachten.”',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'Womit fahren sie zum Fest?',
    audioText: 'Fahren wir mit dem Auto zum Fest? — Nein, lieber mit der Straßenbahn. Parken ist heute schwer.',
    options: [
      { value: 'bahn', emoji: '🚋', label: 'mit der Straßenbahn' },
      { value: 'auto', emoji: '🚗', label: 'mit dem Auto' },
      { value: 'fuss', emoji: '🚶', label: 'zu Fuß' },
    ],
    answer: 'bahn',
    explain: '“Lieber mit der Straßenbahn.”',
  },

  // ── Teil 2 · announcements → richtig/falsch (4) ─────────────────
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Und nun das Wetter für morgen: Es wird kalt, wir erwarten Regen und starken Wind.',
    statements: [{ text: 'Morgen scheint die Sonne.', answer: false }],
  },
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Liebe Gäste des Stadtfests, das Feuerwerk beginnt heute Abend um zweiundzwanzig Uhr am Fluss.',
    statements: [{ text: 'Das Feuerwerk beginnt um 22 Uhr.', answer: true }],
  },
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Der Weihnachtsmarkt am Dom ist täglich von elf bis einundzwanzig Uhr geöffnet.',
    statements: [{ text: 'Der Weihnachtsmarkt schließt um 21 Uhr.', answer: true }],
  },
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Hinweis für Reisende: Am Feiertag fahren die Züge wie am Sonntag.',
    statements: [{ text: 'Am Feiertag fahren die Züge wie am Montag.', answer: false }],
  },

  // ── Teil 3 · phone messages → multiple choice (4) ───────────────
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Hallo Nina, hier ist Klara. Meine Silvesterparty beginnt um zwanzig Uhr bei mir. Bring bitte etwas zu trinken mit. Bis dann!',
    q: 'Was soll Nina mitbringen?',
    options: ['Etwas zu trinken', 'Einen Kuchen', 'Musik'],
    answer: 'Etwas zu trinken',
  },
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Hallo Kinder, hier ist Mama. Ostern feiern wir bei Oma. Wir treffen uns alle am Sonntag um elf Uhr bei ihr. Seid bitte pünktlich!',
    q: 'Wann treffen sich alle bei Oma?',
    options: ['Sonntag um 11 Uhr', 'Samstag um 11 Uhr', 'Sonntag um 12 Uhr'],
    answer: 'Sonntag um 11 Uhr',
  },
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Guten Tag, hier ist das Büro. Unser Sommerfest ist nicht am dreizehnten Juni, sondern am zwanzigsten Juni. Bitte sagen Sie es auch den Kollegen.',
    q: 'Wann ist das Sommerfest?',
    options: ['Am 13. Juni', 'Am 20. Juni', 'Am 30. Juni'],
    answer: 'Am 20. Juni',
  },
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Hallo Papa, ich bin noch am Flughafen. Es schneit sehr stark, mein Flug hat zwei Stunden Verspätung. Ich komme also später.',
    q: 'Wie viel Verspätung hat der Flug?',
    options: ['Zwei Stunden', 'Zwei Tage', 'Zwanzig Minuten'],
    answer: 'Zwei Stunden',
  },
];

const LT1 = 'Lesen · Teil 1';
const LT2 = 'Lesen · Teil 2';
const LT3 = 'Lesen · Teil 3';

export const MOCK8_LESEN = [
  // ── Teil 1 · short texts → richtig/falsch (5 statements) ────────
  {
    type: 'richtig-falsch', label: LT1,
    title: 'Text 1',
    context: 'Liebe Carla,\n\nfrohe Weihnachten und ein gutes neues Jahr! Wir kommen am 26. Dezember zu euch zu Besuch — der Zug ist um 14 Uhr bei euch. Wir bringen Geschenke für die Kinder mit.\n\nDeine Ines',
    statements: [
      { text: 'Ines kommt am 26. Dezember zu Besuch.', answer: true },
      { text: 'Ines kommt mit dem Auto.', answer: false },
      { text: 'Es gibt Geschenke für die Kinder.', answer: true },
    ],
  },
  {
    type: 'richtig-falsch', label: LT1,
    title: 'Text 2',
    context: 'Hallo Team,\n\nam Samstag machen wir unser Grillfest im Garten der Firma. Es beginnt um 17 Uhr. Bei Regen feiern wir in der Kantine.\n\nEuer Chef',
    statements: [
      { text: 'Das Grillfest beginnt um 17 Uhr.', answer: true },
      { text: 'Bei Regen ist das Fest im Garten.', answer: false },
    ],
  },

  // ── Teil 2 · situation → advert (4) ─────────────────────────────
  {
    type: 'ad-match', label: LT2,
    situation: 'Sie brauchen morgen früh Blumen für einen Geburtstag, haben aber keine Zeit für den Laden.',
    options: [
      { key: 'a', title: 'Blumen-Express', body: 'Wir liefern Ihre Blumen nach Hause.\nBestellen bis 20 Uhr, Lieferung am nächsten Morgen.' },
      { key: 'b', title: 'Garten-Center Grün', body: 'Pflanzen und Blumen zum Selbst-Abholen.\nMontag bis Samstag, 9–18 Uhr.' },
    ],
    answer: 'a',
    explain: 'Home delivery next morning; the garden centre requires pick-up in person.',
  },
  {
    type: 'ad-match', label: LT2,
    situation: 'Sie möchten Silvester mit Ihrer Familie und den Kindern essen gehen.',
    options: [
      { key: 'a', title: 'Club Mitternacht', body: 'Silvesterparty nur für Mitglieder ab 18 Jahren.\nEinlass ab 23 Uhr.' },
      { key: 'b', title: 'Restaurant Bella Vista', body: 'Silvester-Menü für die ganze Familie.\nKinder essen zum halben Preis. Ab 18 Uhr.' },
    ],
    answer: 'b',
    explain: 'A family New Year’s menu with child prices; the club is adults-only members.',
  },
  {
    type: 'ad-match', label: LT2,
    situation: 'Sie fahren zum ersten Mal Ski und suchen einen Kurs.',
    options: [
      { key: 'a', title: 'Skischule Schneestern', body: 'Skikurse für Anfänger — Erwachsene und Kinder.\nJeden Tag um 10 Uhr.' },
      { key: 'b', title: 'Ski-Team Extrem', body: 'Training für Profis und Rennfahrer.\nNur mit Erfahrung.' },
    ],
    answer: 'a',
    explain: 'Beginner courses; the other requires experience.',
  },
  {
    type: 'ad-match', label: LT2,
    situation: 'Sie suchen ein günstiges Kostüm für den Karneval.',
    options: [
      { key: 'a', title: 'Kostüm-Atelier Chic', body: 'Handgemachte Designer-Kostüme.\nAb 300 Euro, nur mit Termin.' },
      { key: 'b', title: 'Party-Discount', body: 'Kostüme und Masken ab 10 Euro.\nGroße Auswahl für Karneval.' },
    ],
    answer: 'b',
    explain: 'Costumes from €10; the atelier starts at €300.',
  },

  // ── Teil 3 · signs → richtig/falsch (4) ─────────────────────────
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 1',
    context: '🎄 24. und 25. Dezember: Geschäft geschlossen. Ab 27. Dezember wieder für Sie da!',
    statements: [{ text: 'Am 25. Dezember ist das Geschäft geöffnet.', answer: false }],
  },
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 2',
    context: '🎆 Feuerwerk im Park verboten.',
    statements: [{ text: 'Man darf im Park kein Feuerwerk machen.', answer: true }],
  },
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 3',
    context: '🎅 Weihnachtsmarkt — Eingang hier · Ausgang am Rathaus.',
    statements: [{ text: 'Der Eingang ist am Rathaus.', answer: false }],
  },
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 4',
    context: '⚠️ Winterdienst: Vorsicht, der Weg ist glatt!',
    statements: [{ text: 'Der Weg ist glatt.', answer: true }],
  },
];

export const MOCK8_SCHREIBEN = [
  {
    type: 'form-fill', label: 'Schreiben · Teil 1',
    title: 'Anmeldung — Skischule Schneestern',
    context: 'Carlos Mendes möchte einen Skikurs für Anfänger machen. Er kommt aus Brasilien und ist 29 Jahre alt. Seine Handynummer ist 0176 445566.',
    fields: [
      { label: 'Familienname', name: 'last', answer: 'Mendes' },
      { label: 'Vorname', name: 'first', answer: 'Carlos' },
      { label: 'Land', name: 'country', answer: ['Brasilien', 'Brazil'] },
      { label: 'Alter', name: 'age', answer: '29' },
      { label: 'Kurs', name: 'course', answer: ['Anfänger', 'Anfaenger', 'Skikurs für Anfänger', 'Skikurs', 'Anfängerkurs'] },
    ],
  },
  {
    type: 'guided-writing', label: 'Schreiben · Teil 2',
    situation: 'Sie hatten Geburtstag. Ihre Freundin Klara hat Ihnen ein Geschenk geschickt. Schreiben Sie Klara eine Nachricht (ca. 30 Wörter).',
    points: [
      'Bedanken Sie sich für das Geschenk.',
      'Sagen Sie, warum es Ihnen gefällt.',
      'Laden Sie Klara zum Kaffee ein.',
    ],
    minWords: 25,
    model: 'Liebe Klara,\nvielen Dank für das Buch! Es gefällt mir sehr, ich lese es jeden Abend. Möchtest du am Samstag zum Kaffee kommen? Dann feiern wir noch einmal zusammen.\nDein Carlos',
  },
];

export const MOCK8_SPRECHEN = [
  {
    type: 'speaking-card', label: 'Sprechen · Teil 1',
    instruction: 'Stellen Sie sich vor. Sagen Sie zu jedem Stichwort einen Satz über sich.',
    cards: [
      { keyword: 'Name', prompt: 'Say your name.', model: 'Ich heiße Carlos Mendes.' },
      { keyword: 'Alter', prompt: 'Say how old you are.', model: 'Ich bin 29 Jahre alt.' },
      { keyword: 'Land', prompt: 'Say which country you come from.', model: 'Ich komme aus Brasilien.' },
      { keyword: 'Wohnort', prompt: 'Say where you live.', model: 'Ich wohne in Köln.' },
      { keyword: 'Sprachen', prompt: 'Say which languages you speak.', model: 'Ich spreche Portugiesisch, Spanisch und ein bisschen Deutsch.' },
      { keyword: 'Beruf', prompt: 'Say what your job is.', model: 'Ich bin Taxifahrer von Beruf.' },
      { keyword: 'Hobby', prompt: 'Say what your hobby is.', model: 'Mein Hobby ist Tanzen.' },
    ],
  },
  {
    type: 'speaking-card', label: 'Sprechen · Teil 2',
    instruction: 'Thema: Feste und Jahreszeiten. Bilden Sie zu jedem Wort eine Frage.',
    cards: [
      { keyword: 'Jahreszeit', prompt: 'Ask about someone’s favourite season.', model: 'Was ist deine Lieblingsjahreszeit?' },
      { keyword: 'Geburtstag', prompt: 'Ask how someone celebrates their birthday.', model: 'Wie feierst du deinen Geburtstag?' },
      { keyword: 'Winter', prompt: 'Ask what someone does in winter.', model: 'Was machst du im Winter?' },
      { keyword: 'Geschenke', prompt: 'Ask if someone likes giving presents.', model: 'Machst du gern Geschenke?' },
    ],
  },
  {
    type: 'speaking-card', label: 'Sprechen · Teil 3',
    instruction: 'Formulieren Sie zu jeder Situation eine höfliche Bitte.',
    cards: [
      { keyword: 'Musik', prompt: 'Politely ask someone to turn the music down.', model: 'Können Sie die Musik bitte leiser machen?' },
      { keyword: 'kochen', prompt: 'Politely ask a friend to help with cooking.', model: 'Kannst du mir bitte beim Kochen helfen?' },
      { keyword: 'Geschenk', prompt: 'Politely ask the shop to gift-wrap it.', model: 'Können Sie das bitte als Geschenk einpacken?' },
      { keyword: 'Fotos', prompt: 'Politely ask a friend to send the photos.', model: 'Kannst du mir bitte die Fotos schicken?' },
    ],
  },
];
