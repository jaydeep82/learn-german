/**
 * Goethe-Zertifikat A1 · Fit in Deutsch 1 — official word list (Wortliste, 2024).
 *
 * This is the A1 vocabulary for the YOUTH exam, so the whole collection is
 * tagged "Children & young people". It is a reference list that lives ALONGSIDE
 * the 50-day course vocab (it is not tied to any lesson day).
 *
 * Shape: { tag, source, groups: [ { title, titleDe, emoji, items: [ {de, en, example?, exampleEn?} ] } ] }
 *   - Thematic word-groups (Wortgruppen) come first.
 *   - The alphabetical A–Z Wortliste is appended as further groups (one per
 *     letter range), each item carrying the German example sentence from the PDF.
 *
 * Source: Goethe-Institut, GOETHE-ZERTIFIKAT A1: FIT IN DEUTSCH 1, Wortliste,
 * 2. Auflage 2024 (www.goethe.de/pruefungen).
 */

export const GOETHE_A1_TAG = 'Children & young people';
export const GOETHE_A1_SOURCE = 'Goethe-Zertifikat A1 · Fit in Deutsch 1';

const groups = [
  // ── 👨‍👩‍👧 FAMILY ──────────────────────────────────────────────
  { title: 'Family members', titleDe: 'Familienmitglieder', emoji: '👨‍👩‍👧', items: [
    { de: 'der Vater',           en: 'father', emoji: '👨' },
    { de: 'die Mutter',          en: 'mother', emoji: '👩' },
    { de: 'die Eltern (Pl.)',    en: 'parents', emoji: '👪' },
    { de: 'das Kind',            en: 'child', emoji: '🧒' },
    { de: 'der Bruder',          en: 'brother', emoji: '👦' },
    { de: 'die Schwester',       en: 'sister', emoji: '👧' },
    { de: 'die Geschwister (Pl.)', en: 'siblings', emoji: '🧑‍🤝‍🧑' },
    { de: 'die Tante',           en: 'aunt', emoji: '👩' },
    { de: 'der Onkel',           en: 'uncle', emoji: '👨' },
    { de: 'die Großmutter',      en: 'grandmother', emoji: '👵' },
    { de: 'der Großvater',       en: 'grandfather', emoji: '👴' },
    { de: 'die Großeltern (Pl.)', en: 'grandparents', emoji: '👴' },
  ]},

  // ── 🔢 NUMBERS ─────────────────────────────────────────────────
  { title: 'Numbers', titleDe: 'Zahlen', emoji: '🔢', items: [
    { de: 'eins', en: '1' }, { de: 'zwei', en: '2' }, { de: 'drei', en: '3' },
    { de: 'vier', en: '4' }, { de: 'fünf', en: '5' }, { de: 'sechs', en: '6' },
    { de: 'sieben', en: '7' }, { de: 'acht', en: '8' }, { de: 'neun', en: '9' },
    { de: 'zehn', en: '10' }, { de: 'elf', en: '11' }, { de: 'zwölf', en: '12' },
    { de: 'dreizehn', en: '13' }, { de: 'vierzehn', en: '14' }, { de: 'fünfzehn', en: '15' },
    { de: 'sechzehn', en: '16' }, { de: 'siebzehn', en: '17' }, { de: 'achtzehn', en: '18' },
    { de: 'neunzehn', en: '19' }, { de: 'zwanzig', en: '20' }, { de: 'einundzwanzig', en: '21' },
    { de: 'dreißig', en: '30' }, { de: 'vierzig', en: '40' }, { de: 'fünfzig', en: '50' },
    { de: 'sechzig', en: '60' }, { de: 'siebzig', en: '70' }, { de: 'achtzig', en: '80' },
    { de: 'neunzig', en: '90' }, { de: '(ein)hundert', en: '100' }, { de: 'hunderteins', en: '101' },
    { de: 'zweihundert', en: '200' }, { de: '(ein)tausend', en: '1000' }, { de: 'zweitausendeins', en: '2001' },
  ]},

  // ── 🎨 COLOURS ─────────────────────────────────────────────────
  { title: 'Colours', titleDe: 'Farben', emoji: '🎨', items: [
    { de: 'schwarz', en: 'black', emoji: '⚫' },
    { de: 'grau',    en: 'grey' },
    { de: 'blau',    en: 'blue', emoji: '🔵' },
    { de: 'grün',    en: 'green', emoji: '🟢' },
    { de: 'weiß',    en: 'white', emoji: '⚪' },
    { de: 'rot',     en: 'red', emoji: '🔴' },
    { de: 'gelb',    en: 'yellow', emoji: '🟡' },
    { de: 'braun',   en: 'brown', emoji: '🟤' },
    { de: 'blond',   en: 'blond / fair' },
  ]},

  // ── 📆 WEEKDAYS ────────────────────────────────────────────────
  { title: 'Weekdays', titleDe: 'Wochentage', emoji: '📆', items: [
    { de: 'der Montag',    en: 'Monday' },
    { de: 'der Dienstag',  en: 'Tuesday' },
    { de: 'der Mittwoch',  en: 'Wednesday' },
    { de: 'der Donnerstag', en: 'Thursday' },
    { de: 'der Freitag',   en: 'Friday' },
    { de: 'der Samstag',   en: 'Saturday' },
    { de: 'der Sonntag',   en: 'Sunday' },
    { de: 'das Wochenende', en: 'weekend', emoji: '🏖️' },
  ]},

  // ── 📅 MONTHS ──────────────────────────────────────────────────
  { title: 'Months', titleDe: 'Monatsnamen', emoji: '📅', items: [
    { de: 'der Januar', en: 'January' }, { de: 'der Februar', en: 'February' },
    { de: 'der März', en: 'March' }, { de: 'der April', en: 'April' },
    { de: 'der Mai', en: 'May' }, { de: 'der Juni', en: 'June' },
    { de: 'der Juli', en: 'July' }, { de: 'der August', en: 'August' },
    { de: 'der September', en: 'September' }, { de: 'der Oktober', en: 'October' },
    { de: 'der November', en: 'November' }, { de: 'der Dezember', en: 'December' },
  ]},

  // ── 🍂 SEASONS ─────────────────────────────────────────────────
  { title: 'Seasons', titleDe: 'Jahreszeiten', emoji: '🍂', items: [
    { de: 'der Frühling', en: 'spring', emoji: '🌱' },
    { de: 'der Sommer',   en: 'summer', emoji: '☀️' },
    { de: 'der Herbst',   en: 'autumn / fall', emoji: '🍂' },
    { de: 'der Winter',   en: 'winter', emoji: '❄️' },
  ]},

  // ── 🕐 TIMES OF DAY ────────────────────────────────────────────
  { title: 'Times of day', titleDe: 'Tageszeiten', emoji: '🕐', items: [
    { de: 'der Morgen',     en: 'morning', emoji: '🌅' },
    { de: 'der Vormittag',  en: 'late morning (before noon)' },
    { de: 'der Mittag',     en: 'midday / noon', emoji: '🌞' },
    { de: 'der Nachmittag', en: 'afternoon', emoji: '🌤️' },
    { de: 'der Abend',      en: 'evening', emoji: '🌆' },
    { de: 'die Nacht',      en: 'night', emoji: '🌙' },
  ]},

  // ── ⏱️ TIME UNITS ──────────────────────────────────────────────
  { title: 'Time units', titleDe: 'Zeitangaben', emoji: '⏱️', items: [
    { de: 'die Minute', en: 'minute' },
    { de: 'die Stunde', en: 'hour' },
    { de: 'der Tag',    en: 'day' },
    { de: 'die Woche',  en: 'week' },
    { de: 'das Jahr',   en: 'year' },
  ]},

  // ── 🕒 TELLING THE TIME ────────────────────────────────────────
  { title: 'Telling the time', titleDe: 'Uhrzeit', emoji: '🕒', items: [
    { de: 'sieben Uhr drei',        en: '7:03' },
    { de: 'drei Uhr fünfzehn',      en: '3:15' },
    { de: 'fünfzehn Uhr dreißig',   en: '15:30' },
    { de: 'vierundzwanzig Uhr',     en: '24:00 (midnight)' },
    { de: 'ein Uhr',                en: "1 o'clock (13:00)" },
    { de: 'halb zwölf',             en: 'half past eleven (11:30)' },
  ]},

  // ── 🏫 SCHOOL & SUBJECTS ───────────────────────────────────────
  { title: 'School & school subjects', titleDe: 'Schulen und Schulfächer', emoji: '🏫', items: [
    { de: 'die Grundschule',   en: 'primary school' },
    { de: 'die Hauptschule',   en: 'secondary school (Hauptschule)' },
    { de: 'das Gymnasium',     en: 'grammar school / Gymnasium' },
    { de: 'die Sprachenschule', en: 'language school' },
    { de: 'das Goethe-Institut', en: 'Goethe-Institut' },
    { de: 'Deutsch',     en: 'German', emoji: '🇩🇪' },
    { de: 'Mathematik',  en: 'maths', emoji: '➗' },
    { de: 'Englisch',    en: 'English' },
    { de: 'Geografie',   en: 'geography', emoji: '🌍' },
    { de: 'Kunst(erziehung)', en: 'art', emoji: '🎨' },
    { de: 'Sozialkunde', en: 'social studies' },
    { de: 'Sport',       en: 'PE / sport', emoji: '⚽' },
    { de: 'Physik',      en: 'physics', emoji: '🔬' },
    { de: 'Chemie',      en: 'chemistry', emoji: '🧪' },
    { de: 'Geschichte',  en: 'history', emoji: '📜' },
  ]},

  // ── 💼 JOBS / PROFESSIONS ──────────────────────────────────────
  { title: 'Jobs / professions', titleDe: 'Berufe', emoji: '💼', items: [
    { de: 'der Architekt / die Architektin', en: 'architect', emoji: '📐' },
    { de: 'der Hausmann / die Hausfrau',     en: 'house husband / housewife', emoji: '🏠' },
    { de: 'der Techniker / die Technikerin', en: 'technician', emoji: '🔧' },
    { de: 'der Angestellte / die Angestellte', en: 'employee', emoji: '🧑‍💼' },
    { de: 'der Lehrer / die Lehrerin',       en: 'teacher', emoji: '👨‍🏫' },
    { de: 'der Künstler / die Künstlerin',   en: 'artist', emoji: '🎨' },
    { de: 'der Ingenieur / die Ingenieurin', en: 'engineer', emoji: '🛠️' },
    { de: 'der Kaufmann / die Kauffrau',     en: 'businessman / businesswoman', emoji: '🧾' },
    { de: 'der Arzt / die Ärztin',           en: 'doctor', emoji: '🩺' },
    { de: 'der Schauspieler / die Schauspielerin', en: 'actor / actress', emoji: '🎭' },
    { de: 'der Sekretär / die Sekretärin',   en: 'secretary', emoji: '🗂️' },
  ]},

  // ── 🌍 COUNTRIES & NATIONALITIES ───────────────────────────────
  { title: 'Countries & nationalities', titleDe: 'Länder und Nationalitäten', emoji: '🌍', items: [
    { de: 'Deutschland', en: 'Germany', emoji: '🇩🇪' },
    { de: 'der/die Deutsche', en: 'German (person)' },
    { de: 'deutsch', en: 'German (adjective)' },
    { de: 'auf Deutsch', en: 'in German' },
    { de: 'Europa', en: 'Europe', emoji: '🌍' },
    { de: 'der/die Europäer(in)', en: 'European (person)' },
    { de: 'europäisch', en: 'European (adjective)' },
    { de: 'Italien', en: 'Italy', emoji: '🇮🇹' },
    { de: 'der/die Italiener(in)', en: 'Italian (person)' },
    { de: 'italienisch', en: 'Italian (adjective)' },
    { de: 'England', en: 'England', emoji: '🏴' },
    { de: 'der/die Engländer(in)', en: 'English (person)' },
    { de: 'englisch', en: 'English (adjective)' },
  ]},

  // ── 🧭 COMPASS DIRECTIONS ──────────────────────────────────────
  { title: 'Compass directions', titleDe: 'Himmelsrichtungen', emoji: '🧭', items: [
    { de: 'der Norden', en: 'north', emoji: '⬆️' },
    { de: 'der Süden',  en: 'south', emoji: '⬇️' },
    { de: 'der Westen', en: 'west', emoji: '⬅️' },
    { de: 'der Osten',  en: 'east', emoji: '➡️' },
  ]},

  // ── 📏 MEASURES & WEIGHTS ──────────────────────────────────────
  { title: 'Measures & weights', titleDe: 'Maße und Gewichte', emoji: '📏', items: [
    { de: 'der Meter (m)',      en: 'metre', example: '1,50 m = ein Meter fünfzig' },
    { de: 'der Kilometer (km)', en: 'kilometre', example: '2 km = zwei Kilometer' },
    { de: 'der Liter (L)',      en: 'litre' },
    { de: 'das Gramm (g)',      en: 'gram' },
    { de: 'das Kilo(gramm) (kg)', en: 'kilo(gram)' },
  ]},

  // ── 💶 CURRENCY ────────────────────────────────────────────────
  { title: 'Currency', titleDe: 'Währungen', emoji: '💶', items: [
    { de: 'der Euro', en: 'euro', example: '1 Euro = 100 Cent' },
    { de: 'der Cent', en: 'cent', emoji: '🪙' },
  ]},

  // ── 🎉 HOLIDAYS ────────────────────────────────────────────────
  { title: 'Holidays', titleDe: 'Feiertage', emoji: '🎉', items: [
    { de: 'Ostern',      en: 'Easter', emoji: '🐣' },
    { de: 'Weihnachten', en: 'Christmas', emoji: '🎄' },
    { de: 'der Karneval', en: 'carnival', emoji: '🎭' },
  ]},

  // ── 💻 ANGLICISMS ──────────────────────────────────────────────
  { title: 'Anglicisms (English loan-words)', titleDe: 'Anglizismen', emoji: '💻', items: [
    { de: 'das Baby',            en: 'baby', emoji: '👶' },
    { de: 'die (Schüler-)Band',  en: '(school) band', emoji: '🎸' },
    { de: 'der Blog',            en: 'blog' },
    { de: 'die CD',              en: 'CD', emoji: '💿' },
    { de: 'der CD-Player',       en: 'CD player' },
    { de: 'chatten · der Chat(room)', en: 'to chat · chat(room)', emoji: '💬' },
    { de: 'die / das Cola',      en: 'cola', emoji: '🥤' },
    { de: 'der / das Comic',     en: 'comic', emoji: '📔' },
    { de: 'der Computer',        en: 'computer', emoji: '💻' },
    { de: 'cool',                en: 'cool', emoji: '😎' },
    { de: 'die DVD',             en: 'DVD', emoji: '📀' },
    { de: 'faxen · das Fax',     en: 'to fax · fax' },
    { de: 'googeln',             en: 'to google', emoji: '🔎' },
    { de: 'die Homepage',        en: 'homepage' },
    { de: 'das Internet',        en: 'internet', emoji: '🌐' },
    { de: 'der Laptop',          en: 'laptop', emoji: '💻' },
    { de: 'der Link',            en: 'link', emoji: '🔗' },
    { de: 'mailen · die Mail',   en: 'to email · email', emoji: '✉️' },
    { de: 'die Mailbox',         en: 'voicemail / mailbox', emoji: '📬' },
    { de: 'online',              en: 'online' },
    { de: 'das Poster',          en: 'poster', emoji: '🖼️' },
    { de: 'das Smartphone',      en: 'smartphone', emoji: '📱' },
    { de: 'surfen',              en: 'to surf', emoji: '🏄' },
  ]},

  // ── 📝 EXAM INSTRUCTION WORDS ──────────────────────────────────
  { title: 'Exam instruction words', titleDe: 'Anweisungssprache zur Prüfung', emoji: '📝', items: [
    { de: 'der Antwortbogen',  en: 'answer sheet' },
    { de: 'die Aufgabe',       en: 'task / exercise' },
    { de: 'ankreuzen · das Kreuz', en: 'to tick · cross', emoji: '✔️' },
    { de: 'das Beispiel',      en: 'example' },
    { de: 'erlaubt',           en: 'allowed / permitted' },
    { de: 'falsch',            en: 'wrong / false', emoji: '❌' },
    { de: 'formulieren',       en: 'to phrase / formulate' },
    { de: 'das Gespräch',      en: 'conversation', emoji: '💬' },
    { de: 'die Lösung',        en: 'solution / answer', emoji: '✅' },
    { de: 'markieren',         en: 'to mark / highlight' },
    { de: 'der Partner / die Partnerin', en: 'partner' },
    { de: 'richtig',           en: 'correct', emoji: '✅' },
    { de: 'der Teil · der Prüfungsteil', en: 'part · exam part' },
    { de: 'der Test',          en: 'test' },
    { de: 'der Text',          en: 'text' },
    { de: 'das Wörterbuch',    en: 'dictionary', emoji: '📖' },
  ]},
];

export const goetheA1 = { tag: GOETHE_A1_TAG, source: GOETHE_A1_SOURCE, groups };

/** Flat list of every Goethe item, each carrying its group + tag (for search). */
export const goetheA1Flat = groups.flatMap((g) =>
  g.items.map((v) => ({ ...v, group: g.title, tag: GOETHE_A1_TAG }))
);
