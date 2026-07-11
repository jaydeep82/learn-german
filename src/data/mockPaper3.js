/**
 * Mock exam paper 3 — «Unterwegs & Arbeit» (travel & work).
 * A complete, fresh Goethe A1 sitting: Hören 13 · Lesen 13 · Schreiben
 * form + one ~30-word message · Sprechen with the official keyword
 * structure. All content strictly A1.
 */

const HT1 = 'Hören · Teil 1';
const HT2 = 'Hören · Teil 2';
const HT3 = 'Hören · Teil 3';

export const MOCK3_HOEREN = [
  // ── Teil 1 · dialogues → picture (5) ────────────────────────────
  {
    type: 'picture-mcq', label: HT1,
    q: 'Wohin fährt die Frau im Urlaub?',
    audioText: 'Fährst du im Sommer in die Berge? — Nein, wir fahren ans Meer. Die Kinder wollen schwimmen.',
    options: [
      { value: 'meer', emoji: '🌊', label: 'ans Meer' },
      { value: 'berge', emoji: '🏔️', label: 'in die Berge' },
      { value: 'stadt', emoji: '🏙️', label: 'in die Stadt' },
    ],
    answer: 'meer',
    explain: '“Wir fahren ans Meer.” — they go to the seaside.',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'Was bestellt der Mann?',
    audioText: 'Und was möchten Sie essen? — Ich nehme den Fisch mit Reis, bitte. — Gern.',
    options: [
      { value: 'fisch', emoji: '🐟', label: 'Fisch' },
      { value: 'fleisch', emoji: '🥩', label: 'Fleisch' },
      { value: 'pizza', emoji: '🍕', label: 'Pizza' },
    ],
    answer: 'fisch',
    explain: '“Ich nehme den Fisch mit Reis.”',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'Was kostet die Jacke?',
    audioText: 'Entschuldigung, was kostet diese Jacke? — Die kostet heute nur neunundvierzig Euro, sie ist im Angebot.',
    options: [
      { value: 'e49', emoji: '4️⃣9️⃣', label: '49 €' },
      { value: 'e59', emoji: '5️⃣9️⃣', label: '59 €' },
      { value: 'e94', emoji: '9️⃣4️⃣', label: '94 €' },
    ],
    answer: 'e49',
    explain: '“…nur neunundvierzig Euro” = 49.',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'Wann beginnt der Film?',
    audioText: 'Der Film beginnt um Viertel nach acht. Kommst du um acht zum Kino? — Ja, bis dann!',
    options: [
      { value: 't2015', emoji: '🕗', label: '20.15 Uhr' },
      { value: 't2045', emoji: '🕘', label: '20.45 Uhr' },
      { value: 't1945', emoji: '🕖', label: '19.45 Uhr' },
    ],
    answer: 't2015',
    explain: '“Viertel nach acht” (evening) = 20.15.',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'In welchem Stock arbeitet Frau Kern?',
    audioText: 'Entschuldigung, wo finde ich Frau Kern? — Im dritten Stock, Zimmer 305. Der Aufzug ist dort links.',
    options: [
      { value: 's1', emoji: '1️⃣', label: '1. Stock' },
      { value: 's3', emoji: '3️⃣', label: '3. Stock' },
      { value: 's5', emoji: '5️⃣', label: '5. Stock' },
    ],
    answer: 's3',
    explain: '“Im dritten Stock, Zimmer 305.”',
  },

  // ── Teil 2 · announcements → richtig/falsch (4) ─────────────────
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Achtung, Passagiere des Fluges nach Wien: Ihr Flug geht heute nicht von Gate zwölf, sondern von Gate zwanzig.',
    statements: [{ text: 'Der Flug nach Wien geht von Gate 20.', answer: true }],
  },
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Die Apotheke am Markt ist heute nur bis dreizehn Uhr geöffnet. Ab Montag haben wir wieder normal geöffnet.',
    statements: [{ text: 'Die Apotheke ist heute bis 15 Uhr geöffnet.', answer: false }],
  },
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Liebe Gäste des Stadtfests: Die Bahnhofstraße ist heute und morgen für Autos gesperrt. Bitte kommen Sie zu Fuß oder mit dem Bus.',
    statements: [{ text: 'Man kann heute mit dem Auto durch die Bahnhofstraße fahren.', answer: false }],
  },
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Information: Der Aufzug ist heute leider außer Betrieb. Bitte benutzen Sie die Treppe. Wir danken für Ihr Verständnis.',
    statements: [{ text: 'Der Aufzug funktioniert heute nicht.', answer: true }],
  },

  // ── Teil 3 · phone messages → multiple choice (4) ───────────────
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Guten Morgen, Frau Lang, hier ist Herr Bauer. Das Meeting heute ist nicht um neun, sondern erst um elf Uhr. Bis später!',
    q: 'Wann ist das Meeting?',
    options: ['Um 9 Uhr', 'Um 11 Uhr', 'Um 12 Uhr'],
    answer: 'Um 11 Uhr',
  },
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Guten Tag, hier ist Ihr Vermieter, Herr Huber. Am Freitag kommt der Techniker und repariert die Heizung. Bitte seien Sie ab acht Uhr zu Hause.',
    q: 'Was macht der Techniker am Freitag?',
    options: ['Er repariert die Heizung.', 'Er repariert die Dusche.', 'Er bringt eine neue Küche.'],
    answer: 'Er repariert die Heizung.',
  },
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Hier ist die Taxizentrale. Ihr Taxi kommt in zehn Minuten zur Blumenstraße vier. Der Wagen ist ein weißer Kombi.',
    q: 'Wann kommt das Taxi?',
    options: ['In 4 Minuten', 'In 10 Minuten', 'In 20 Minuten'],
    answer: 'In 10 Minuten',
  },
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Guten Tag, hier ist die Zahnarztpraxis Dr. Roth. Wir bestätigen Ihren Termin am Mittwoch um vierzehn Uhr dreißig. Bitte bringen Sie Ihre Versichertenkarte mit.',
    q: 'Was soll man mitbringen?',
    options: ['Die Versichertenkarte', 'Das Rezept', 'Die Rechnung'],
    answer: 'Die Versichertenkarte',
  },
];

const LT1 = 'Lesen · Teil 1';
const LT2 = 'Lesen · Teil 2';
const LT3 = 'Lesen · Teil 3';

export const MOCK3_LESEN = [
  // ── Teil 1 · short texts → richtig/falsch (5 statements) ────────
  {
    type: 'richtig-falsch', label: LT1,
    title: 'Text 1',
    context: 'Liebe Oma,\n\nviele Grüße aus Spanien! Das Wetter ist super, wir schwimmen jeden Tag im Meer. Morgen fahren wir mit dem Bus nach Barcelona. Am Sonntag kommen wir zurück.\n\nDeine Mia',
    statements: [
      { text: 'Mia ist in Spanien.', answer: true },
      { text: 'Das Wetter ist schlecht.', answer: false },
      { text: 'Am Sonntag kommt Mia zurück.', answer: true },
    ],
  },
  {
    type: 'richtig-falsch', label: LT1,
    title: 'Text 2',
    context: 'Hallo Jonas,\n\nich ziehe am Samstag um! Meine neue Wohnung ist in der Parkstraße 3, im zweiten Stock. Kannst du mir beim Umzug helfen? Wir fangen um 9 Uhr an, und am Abend gibt es Pizza für alle.\n\nDanke dir!\nOmar',
    statements: [
      { text: 'Omar zieht am Sonntag um.', answer: false },
      { text: 'Die Helfer bekommen am Abend Pizza.', answer: true },
    ],
  },

  // ── Teil 2 · situation → advert (4) ─────────────────────────────
  {
    type: 'ad-match', label: LT2,
    situation: 'Sie arbeiten tagsüber und möchten abends einen Deutschkurs machen.',
    options: [
      { key: 'a', title: 'Volkshochschule', body: 'Deutsch A1 am Abend.\nDienstag und Donnerstag, 18.30–20 Uhr.' },
      { key: 'b', title: 'Campus Sprachen', body: 'Intensivkurs Deutsch.\nMontag bis Freitag, 9–13 Uhr.' },
    ],
    answer: 'a',
    explain: 'Evening course fits someone who works during the day; the intensive course runs mornings.',
  },
  {
    type: 'ad-match', label: LT2,
    situation: 'Sie suchen einen billigen Flug nach Berlin für das Wochenende.',
    options: [
      { key: 'a', title: 'FlyBillig.de', body: 'Berlin ab 29 Euro.\nJeden Samstag und Sonntag.' },
      { key: 'b', title: 'Business-Reisen Premium', body: 'Erste Klasse nach Berlin ab 450 Euro.\nNur Montag bis Freitag.' },
    ],
    answer: 'a',
    explain: 'Cheap weekend flights (from €29); the other is expensive and weekdays-only.',
  },
  {
    type: 'ad-match', label: LT2,
    situation: 'Sie suchen eine Wohnung mit Balkon für zwei Personen.',
    options: [
      { key: 'a', title: 'Wohnung Nr. 1', body: '1 Zimmer, 25 m², ohne Balkon.\nIdeal für Studenten. 450 €.' },
      { key: 'b', title: 'Wohnung Nr. 2', body: '2 Zimmer, 55 m², mit großem Balkon.\nPerfekt für Paare. 780 €.' },
    ],
    answer: 'b',
    explain: 'Two rooms with a big balcony suits a couple; the first has no balcony.',
  },
  {
    type: 'ad-match', label: LT2,
    situation: 'Sie sind krank und brauchen am Samstag einen Arzt.',
    options: [
      { key: 'a', title: 'Hausarztpraxis Dr. Klein', body: 'Sprechzeiten: Montag bis Freitag, 8–16 Uhr.' },
      { key: 'b', title: 'Notfallpraxis am Klinikum', body: 'Auch am Wochenende geöffnet, 8–20 Uhr.' },
    ],
    answer: 'b',
    explain: 'The emergency practice is open at the weekend; the regular practice is Mon–Fri only.',
  },

  // ── Teil 3 · signs → richtig/falsch (4) ─────────────────────────
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 1',
    context: '🎫 Fahrkarten bitte am Automaten kaufen. Im Bus keine Fahrkarten.',
    statements: [{ text: 'Man kann Fahrkarten im Bus kaufen.', answer: false }],
  },
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 2',
    context: '🚭 Rauchen auf dem ganzen Bahnhof verboten.',
    statements: [{ text: 'Man darf auf dem Bahnhof nicht rauchen.', answer: true }],
  },
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 3',
    context: 'Büro im Erdgeschoss — Bitte klingeln und warten.',
    statements: [{ text: 'Das Büro ist im dritten Stock.', answer: false }],
  },
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 4',
    context: 'Heute Abend geschlossen — private Feier. Morgen ab 11 Uhr wieder für Sie da!',
    statements: [{ text: 'Morgen ist ab 11 Uhr wieder geöffnet.', answer: true }],
  },
];

export const MOCK3_SCHREIBEN = [
  {
    type: 'form-fill', label: 'Schreiben · Teil 1',
    title: 'Anmeldung — Sprachschule Aktiv',
    context: 'Amira Haddad kommt aus Syrien und wohnt jetzt in Frankfurt, Mainstraße 20. Sie ist 27 Jahre alt und möchte den Kurs Deutsch A1 am Abend machen. Ihre Telefonnummer ist 069 123456.',
    fields: [
      { label: 'Familienname', name: 'last', answer: 'Haddad' },
      { label: 'Vorname', name: 'first', answer: 'Amira' },
      { label: 'Land', name: 'country', answer: ['Syrien', 'Syria'] },
      { label: 'Stadt', name: 'city', answer: 'Frankfurt' },
      { label: 'Kurs', name: 'course', answer: ['Deutsch A1', 'A1'] },
    ],
  },
  {
    type: 'guided-writing', label: 'Schreiben · Teil 2',
    situation: 'Sie haben eine neue Wohnung und machen am Samstag eine kleine Party. Schreiben Sie Ihrem Freund Deniz eine Einladung (ca. 30 Wörter).',
    points: [
      'Laden Sie Deniz ein.',
      'Sagen Sie, wann die Party beginnt.',
      'Schreiben Sie Ihre neue Adresse.',
    ],
    minWords: 25,
    model: 'Lieber Deniz,\nich habe eine neue Wohnung und mache am Samstag eine kleine Party. Sie beginnt um 19 Uhr. Meine neue Adresse ist Parkstraße 3. Kommst du?\nViele Grüße\nOmar',
  },
];

export const MOCK3_SPRECHEN = [
  {
    type: 'speaking-card', label: 'Sprechen · Teil 1',
    instruction: 'Stellen Sie sich vor. Sagen Sie zu jedem Stichwort einen Satz über sich.',
    cards: [
      { keyword: 'Name', prompt: 'Say your name.', model: 'Mein Name ist Amira Haddad.' },
      { keyword: 'Alter', prompt: 'Say how old you are.', model: 'Ich bin 27 Jahre alt.' },
      { keyword: 'Land', prompt: 'Say which country you come from.', model: 'Ich komme aus Syrien.' },
      { keyword: 'Wohnort', prompt: 'Say where you live.', model: 'Ich wohne jetzt in Frankfurt.' },
      { keyword: 'Sprachen', prompt: 'Say which languages you speak.', model: 'Ich spreche Arabisch, Englisch und ein bisschen Deutsch.' },
      { keyword: 'Beruf', prompt: 'Say what your job is.', model: 'Ich bin Ingenieurin von Beruf.' },
      { keyword: 'Hobby', prompt: 'Say what your hobby is.', model: 'Mein Hobby ist Lesen.' },
    ],
  },
  {
    type: 'speaking-card', label: 'Sprechen · Teil 2',
    instruction: 'Thema: Arbeit und Alltag. Bilden Sie zu jedem Wort eine Frage.',
    cards: [
      { keyword: 'Beruf', prompt: 'Ask about someone’s job.', model: 'Was bist du von Beruf?' },
      { keyword: 'aufstehen', prompt: 'Ask when someone gets up.', model: 'Wann stehst du auf?' },
      { keyword: 'Feierabend', prompt: 'Ask when someone finishes work.', model: 'Wann hast du Feierabend?' },
      { keyword: 'Wochenende', prompt: 'Ask what someone does at the weekend.', model: 'Was machst du am Wochenende?' },
    ],
  },
  {
    type: 'speaking-card', label: 'Sprechen · Teil 3',
    instruction: 'Formulieren Sie zu jeder Situation eine höfliche Bitte.',
    cards: [
      { keyword: 'Tür', prompt: 'Politely ask someone to open the door.', model: 'Könnten Sie bitte die Tür öffnen?' },
      { keyword: 'helfen', prompt: 'Politely ask a colleague for help.', model: 'Kannst du mir bitte helfen?' },
      { keyword: 'wiederholen', prompt: 'Politely ask someone to repeat that.', model: 'Können Sie das bitte wiederholen?' },
      { keyword: 'Fenster', prompt: 'Politely ask someone to close the window.', model: 'Machen Sie bitte das Fenster zu.' },
    ],
  },
];
