/**
 * Mock exam paper 4 — «Familie & Freizeit» (family & free time).
 * Fresh Goethe A1 sitting: Hören 13 · Lesen 13 · form + message · Sprechen
 * with the official keyword structure. All content strictly A1.
 */

const HT1 = 'Hören · Teil 1';
const HT2 = 'Hören · Teil 2';
const HT3 = 'Hören · Teil 3';

export const MOCK4_HOEREN = [
  // ── Teil 1 · dialogues → picture (5) ────────────────────────────
  {
    type: 'picture-mcq', label: HT1,
    q: 'Was macht der Sohn am Samstag?',
    audioText: 'Spielt Ihr Sohn am Samstag wieder Fußball? — Ja, er spielt jetzt im Verein. Das Spiel ist am Samstagvormittag.',
    options: [
      { value: 'fussball', emoji: '⚽', label: 'Fußball' },
      { value: 'schwimmen', emoji: '🏊', label: 'Schwimmen' },
      { value: 'musik', emoji: '🎵', label: 'Musik' },
    ],
    answer: 'fussball',
    explain: '“Er spielt jetzt im Verein” — football at the club.',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'Wie alt wird die Tochter?',
    audioText: 'Am Sonntag hat meine Tochter Geburtstag. Sie wird sieben. — Oh, herzlichen Glückwunsch!',
    options: [
      { value: '6', emoji: '6️⃣', label: 'sechs' },
      { value: '7', emoji: '7️⃣', label: 'sieben' },
      { value: '8', emoji: '8️⃣', label: 'acht' },
    ],
    answer: '7',
    explain: '“Sie wird sieben.” — she is turning seven.',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'Was machen die Freunde am Sonntag?',
    audioText: 'Wollen wir am Sonntag schwimmen gehen? — Nein, lieber wandern. Das Wetter wird schön.',
    options: [
      { value: 'wandern', emoji: '🥾', label: 'wandern' },
      { value: 'schwimmen', emoji: '🏊', label: 'schwimmen' },
      { value: 'kino', emoji: '🎬', label: 'ins Kino gehen' },
    ],
    answer: 'wandern',
    explain: '“Nein, lieber wandern.” — they prefer hiking.',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'Welches Instrument lernt das Kind?',
    audioText: 'Lernt Ihre Tochter Klavier? — Nein, sie lernt Gitarre. Der Unterricht ist immer am Montag.',
    options: [
      { value: 'gitarre', emoji: '🎸', label: 'Gitarre' },
      { value: 'klavier', emoji: '🎹', label: 'Klavier' },
      { value: 'geige', emoji: '🎻', label: 'Geige' },
    ],
    answer: 'gitarre',
    explain: '“Nein, sie lernt Gitarre.”',
  },
  {
    type: 'picture-mcq', label: HT1,
    q: 'Wo ist die Familie am Nachmittag?',
    audioText: 'Kommt ihr am Nachmittag mit ins Schwimmbad? — Nein, wir sind im Park. Die Kinder wollen dort spielen.',
    options: [
      { value: 'park', emoji: '🌳', label: 'im Park' },
      { value: 'bad', emoji: '🏊', label: 'im Schwimmbad' },
      { value: 'haus', emoji: '🏠', label: 'zu Hause' },
    ],
    answer: 'park',
    explain: '“Wir sind im Park.”',
  },

  // ── Teil 2 · announcements → richtig/falsch (4) ─────────────────
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Liebe Mitglieder, das Training fällt heute leider aus. Der Trainer ist krank. Nächste Woche trainieren wir wieder.',
    statements: [{ text: 'Das Training ist heute.', answer: false }],
  },
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Liebe Gäste, unser Schwimmbad hat heute länger geöffnet: bis zweiundzwanzig Uhr. Viel Spaß!',
    statements: [{ text: 'Das Schwimmbad ist heute bis 22 Uhr geöffnet.', answer: true }],
  },
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Meine Damen und Herren, der Film beginnt in fünf Minuten. Bitte machen Sie Ihre Handys aus.',
    statements: [{ text: 'Man soll das Handy ausmachen.', answer: true }],
  },
  {
    type: 'richtig-falsch', label: HT2,
    audioText: 'Liebe Leserinnen und Leser, die Bibliothek schließt in fünfzehn Minuten. Bitte bringen Sie Ihre Bücher zur Ausleihe.',
    statements: [{ text: 'Die Bibliothek schließt in fünfzig Minuten.', answer: false }],
  },

  // ── Teil 3 · phone messages → multiple choice (4) ───────────────
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Hallo Kinder, hier ist Oma. Ich komme am Freitag mit dem Zug. Er ist um fünfzehn Uhr zwanzig da. Bis Freitag!',
    q: 'Wann kommt die Oma an?',
    options: ['Um 15.20 Uhr', 'Um 15.02 Uhr', 'Um 17.20 Uhr'],
    answer: 'Um 15.20 Uhr',
  },
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Hi, hier ist Ben. Meine Geburtstagsparty ist morgen nicht im Garten — es regnet. Wir feiern im Haus. Bis morgen!',
    q: 'Wo ist die Party?',
    options: ['Im Garten', 'Im Haus', 'Im Park'],
    answer: 'Im Haus',
  },
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Hallo Tom, hier ist deine Schwester. Wir spielen heute Volleyball im Park. Bring bitte den Ball mit, meiner ist kaputt.',
    q: 'Was soll Tom mitbringen?',
    options: ['Den Ball', 'Die Getränke', 'Den Hund'],
    answer: 'Den Ball',
  },
  {
    type: 'multiple-choice', label: HT3,
    audioText: 'Guten Tag, hier ist Trainer Wolf. Das Spiel am Samstag beginnt nicht um fünfzehn Uhr, sondern schon um vierzehn Uhr. Bitte seid pünktlich.',
    q: 'Wann beginnt das Spiel?',
    options: ['Um 14 Uhr', 'Um 15 Uhr', 'Um 16 Uhr'],
    answer: 'Um 14 Uhr',
  },
];

const LT1 = 'Lesen · Teil 1';
const LT2 = 'Lesen · Teil 2';
const LT3 = 'Lesen · Teil 3';

export const MOCK4_LESEN = [
  // ── Teil 1 · short texts → richtig/falsch (5 statements) ────────
  {
    type: 'richtig-falsch', label: LT1,
    title: 'Text 1',
    context: 'Liebe Tante Karin,\n\nich habe jetzt ein neues Hobby: Ich spiele Tennis! Der Kurs ist immer am Dienstag. Meine Freundin Lea spielt auch mit. Es macht viel Spaß.\n\nDeine Nora',
    statements: [
      { text: 'Nora spielt jetzt Tennis.', answer: true },
      { text: 'Der Kurs ist am Donnerstag.', answer: false },
      { text: 'Lea spielt auch Tennis.', answer: true },
    ],
  },
  {
    type: 'richtig-falsch', label: LT1,
    title: 'Text 2',
    context: 'Liebe Familie,\n\nam Sonntag machen wir unser Familienfest im Garten. Wir beginnen um 12 Uhr mit dem Mittagessen. Jeder bringt bitte etwas zu essen mit.\n\nEure Oma',
    statements: [
      { text: 'Das Fest beginnt um 12 Uhr.', answer: true },
      { text: 'Die Oma kocht allein für alle.', answer: false },
    ],
  },

  // ── Teil 2 · situation → advert (4) ─────────────────────────────
  {
    type: 'ad-match', label: LT2,
    situation: 'Ihr Sohn (9 Jahre) möchte Gitarre lernen.',
    options: [
      { key: 'a', title: 'Musikschule Tonleiter', body: 'Gitarre und Klavier für Kinder ab 6 Jahren.\nMontag bis Freitag am Nachmittag.' },
      { key: 'b', title: 'DJ Maxi', body: 'Musik für Ihre Party!\nHochzeiten, Geburtstage, Feste.' },
    ],
    answer: 'a',
    explain: 'A music school teaching children guitar; the DJ only plays at parties.',
  },
  {
    type: 'ad-match', label: LT2,
    situation: 'Sie möchten nach der Arbeit Tennis lernen. Sie haben noch nie gespielt.',
    options: [
      { key: 'a', title: 'Tennisclub Ass', body: 'Training für Profis.\nJeden Morgen von 7 bis 9 Uhr.' },
      { key: 'b', title: 'Tennisschule Start', body: 'Kurse für Anfänger.\nDienstag und Donnerstag ab 18 Uhr.' },
    ],
    answer: 'b',
    explain: 'Beginner courses in the evening; the club trains professionals in the morning.',
  },
  {
    type: 'ad-match', label: LT2,
    situation: 'Sie suchen einen Ort für einen Kindergeburtstag im Winter.',
    options: [
      { key: 'a', title: 'Spieleland Indoor', body: 'Drinnen spielen bei jedem Wetter.\nGeburtstagsprogramm für Kinder.' },
      { key: 'b', title: 'Restaurant Adler', body: 'Feine Küche in ruhiger Atmosphäre.\nKeine Kinderfeste.' },
    ],
    answer: 'a',
    explain: 'Indoor play centre with birthday packages; the restaurant hosts no children’s parties.',
  },
  {
    type: 'ad-match', label: LT2,
    situation: 'Sie möchten ein günstiges Fahrrad für Ihre Tochter kaufen.',
    options: [
      { key: 'a', title: 'Rad-Boutique Elite', body: 'Neue E-Bikes und Rennräder.\nAb 1.500 Euro.' },
      { key: 'b', title: 'Zweirad Second Hand', body: 'Gebrauchte Kinderräder ab 40 Euro.\nAlle geprüft und sicher.' },
    ],
    answer: 'b',
    explain: 'Cheap used children’s bikes from €40; the boutique starts at €1,500.',
  },

  // ── Teil 3 · signs → richtig/falsch (4) ─────────────────────────
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 1',
    context: '🛝 Spielplatz — nur für Kinder bis 12 Jahre.',
    statements: [{ text: 'Kinder bis 12 Jahre dürfen hier spielen.', answer: true }],
  },
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 2',
    context: '🌱 Bitte den Rasen nicht betreten!',
    statements: [{ text: 'Man darf auf dem Rasen spielen.', answer: false }],
  },
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 3',
    context: 'Vereinsheim heute geschlossen — wir feiern unser Sommerfest im Stadtpark. Alle sind willkommen!',
    statements: [{ text: 'Das Sommerfest ist im Stadtpark.', answer: true }],
  },
  {
    type: 'richtig-falsch', label: LT3,
    title: 'Schild 4',
    context: '🐕 Hunde bitte an der Leine führen.',
    statements: [{ text: 'Hunde müssen hier an die Leine.', answer: true }],
  },
];

export const MOCK4_SCHREIBEN = [
  {
    type: 'form-fill', label: 'Schreiben · Teil 1',
    title: 'Anmeldung — Sportverein Blau-Weiß',
    context: 'Familie Bernardi meldet ihren Sohn Luca im Sportverein an. Luca ist 9 Jahre alt und möchte Fußball spielen. Die Familie wohnt in Stuttgart. Telefon: 0711 224466.',
    fields: [
      { label: 'Familienname', name: 'last', answer: 'Bernardi' },
      { label: 'Vorname', name: 'first', answer: 'Luca' },
      { label: 'Alter', name: 'age', answer: ['9', 'neun'] },
      { label: 'Sportart', name: 'sport', answer: ['Fußball', 'Fussball'] },
      { label: 'Telefon', name: 'phone', answer: '0711 224466' },
    ],
  },
  {
    type: 'guided-writing', label: 'Schreiben · Teil 2',
    situation: 'Sie machen am Sonntag ein Picknick im Park. Schreiben Sie Ihrer Freundin Emma eine Nachricht (ca. 30 Wörter).',
    points: [
      'Laden Sie Emma zum Picknick ein.',
      'Sagen Sie, wann und wo Sie sich treffen.',
      'Fragen Sie, ob Emma einen Salat mitbringen kann.',
    ],
    minWords: 25,
    model: 'Liebe Emma,\nwir machen am Sonntag ein Picknick im Stadtpark. Wir treffen uns um 12 Uhr am See. Kommst du auch? Kannst du vielleicht einen Salat mitbringen?\nViele Grüße\nNora',
  },
];

export const MOCK4_SPRECHEN = [
  {
    type: 'speaking-card', label: 'Sprechen · Teil 1',
    instruction: 'Stellen Sie sich vor. Sagen Sie zu jedem Stichwort einen Satz über sich.',
    cards: [
      { keyword: 'Name', prompt: 'Say your name.', model: 'Ich heiße Luca Bernardi.' },
      { keyword: 'Alter', prompt: 'Say how old you are.', model: 'Ich bin 31 Jahre alt.' },
      { keyword: 'Land', prompt: 'Say which country you come from.', model: 'Ich komme aus Italien.' },
      { keyword: 'Wohnort', prompt: 'Say where you live.', model: 'Ich wohne in Stuttgart.' },
      { keyword: 'Sprachen', prompt: 'Say which languages you speak.', model: 'Ich spreche Italienisch, Englisch und ein bisschen Deutsch.' },
      { keyword: 'Beruf', prompt: 'Say what your job is.', model: 'Ich bin Friseur von Beruf.' },
      { keyword: 'Hobby', prompt: 'Say what your hobby is.', model: 'Mein Hobby ist Fußball.' },
    ],
  },
  {
    type: 'speaking-card', label: 'Sprechen · Teil 2',
    instruction: 'Thema: Freizeit. Bilden Sie zu jedem Wort eine Frage.',
    cards: [
      { keyword: 'Hobby', prompt: 'Ask about someone’s hobby.', model: 'Was ist dein Hobby?' },
      { keyword: 'Sport', prompt: 'Ask if someone does sport.', model: 'Machst du Sport?' },
      { keyword: 'Musik', prompt: 'Ask what music someone likes.', model: 'Welche Musik hörst du gern?' },
      { keyword: 'Samstag', prompt: 'Ask what someone does on Saturdays.', model: 'Was machst du am Samstag?' },
    ],
  },
  {
    type: 'speaking-card', label: 'Sprechen · Teil 3',
    instruction: 'Formulieren Sie zu jeder Situation eine höfliche Bitte.',
    cards: [
      { keyword: 'leise', prompt: 'Politely ask people to be quiet (library).', model: 'Seien Sie bitte leise.' },
      { keyword: 'Fahrrad', prompt: 'Politely ask a friend to lend you a bike.', model: 'Kannst du mir bitte dein Fahrrad leihen?' },
      { keyword: 'mitspielen', prompt: 'Politely ask if you can join the game.', model: 'Darf ich mitspielen?' },
      { keyword: 'Ball', prompt: 'Politely ask someone to throw the ball back.', model: 'Können Sie bitte den Ball zurückwerfen?' },
    ],
  },
];
