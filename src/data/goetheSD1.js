/**
 * Goethe-Zertifikat A1 · Start Deutsch 1 (SD1) — official word list (Wortliste).
 *
 * This is the A1 vocabulary for the ADULT exam, so the whole collection is
 * tagged "Adults". It lives alongside the 50-day course vocab and the youth
 * "Fit in Deutsch 1" list (see goetheA1.js) — it is not tied to any lesson day.
 *
 * Shape mirrors goetheA1.js: { tag, source, groups: [ {title, titleDe, emoji, items:[{de,en,example?}]} ] }
 *   - Thematic word-groups (Wortgruppenliste, 13 categories) first.
 *   - The alphabetical A–Z Wortliste is appended from goetheSD1Alpha.js
 *     (auto-generated; one sub-group per letter; each item carries the PDF example).
 *
 * Source: Goethe-Institut / telc, START DEUTSCH 1 Wortliste (VS_02_280312).
 */

import { alphaGroups } from './goetheSD1Alpha.js';

export const GOETHE_SD1_TAG = 'Adults';
export const GOETHE_SD1_SOURCE = 'Goethe-Zertifikat A1 · Start Deutsch 1';

const groups = [
  // ── 🔢 NUMBERS ─────────────────────────────────────────────────
  { title: 'Numbers', titleDe: 'Zahlen', emoji: '🔢', items: [
    { de: 'eins', en: '1' }, { de: 'zwei', en: '2' }, { de: 'drei', en: '3' }, { de: 'vier', en: '4' },
    { de: 'fünf', en: '5' }, { de: 'sechs', en: '6' }, { de: 'sieben', en: '7' }, { de: 'acht', en: '8' },
    { de: 'neun', en: '9' }, { de: 'zehn', en: '10' }, { de: 'elf', en: '11' }, { de: 'zwölf', en: '12' },
    { de: 'dreizehn', en: '13' }, { de: 'zwanzig', en: '20' }, { de: 'einundzwanzig', en: '21' },
    { de: 'dreißig', en: '30' }, { de: 'vierzig', en: '40' }, { de: 'fünfzig', en: '50' },
    { de: 'sechzig', en: '60' }, { de: 'siebzig', en: '70' }, { de: 'achtzig', en: '80' }, { de: 'neunzig', en: '90' },
    { de: '(ein)hundert', en: '100' }, { de: 'hunderteins', en: '101' }, { de: 'zweihundert', en: '200' },
    { de: '(ein)tausend', en: '1 000' }, { de: 'eine Million', en: '1 000 000' }, { de: 'eine Milliarde', en: '1 000 000 000' },
    { de: 'erste', en: 'first (1st)' }, { de: 'zweite', en: 'second (2nd)' }, { de: 'dritte', en: 'third (3rd)' },
    { de: 'ein halb', en: 'a half (½)' }, { de: 'ein Viertel', en: 'a quarter (¼)' },
  ]},

  // ── 🕒 TELLING THE TIME ────────────────────────────────────────
  { title: 'Telling the time', titleDe: 'Uhrzeit', emoji: '🕒', items: [
    { de: 'null Uhr drei',          en: '0:03' },
    { de: 'sieben Uhr fünfzehn',    en: '7:15' },
    { de: 'dreizehn Uhr siebzehn',  en: '13:17' },
    { de: 'vierundzwanzig Uhr',     en: '24:00 (midnight)' },
    { de: 'ein Uhr',                en: "1 o'clock" },
    { de: 'Viertel vor / nach zwei', en: 'quarter to / past two' },
    { de: 'halb drei',              en: 'half past two (2:30)' },
  ]},

  // ── ⏱️ TIME UNITS ──────────────────────────────────────────────
  { title: 'Time units', titleDe: 'Zeitmaße · Zeitangaben', emoji: '⏱️', items: [
    { de: 'die Sekunde', en: 'second' },
    { de: 'die Minute',  en: 'minute' },
    { de: 'die Stunde',  en: 'hour' },
    { de: 'der Tag',     en: 'day' },
    { de: 'die Woche',   en: 'week' },
    { de: 'das Jahr',    en: 'year' },
  ]},

  // ── 📆 WEEKDAYS ────────────────────────────────────────────────
  { title: 'Weekdays', titleDe: 'Wochentage', emoji: '📆', items: [
    { de: 'der Wochentag',         en: 'weekday' },
    { de: 'der Montag',            en: 'Monday' },
    { de: 'der Dienstag',          en: 'Tuesday' },
    { de: 'der Mittwoch',          en: 'Wednesday' },
    { de: 'der Donnerstag',        en: 'Thursday' },
    { de: 'der Freitag',           en: 'Friday' },
    { de: 'der Samstag / Sonnabend', en: 'Saturday' },
    { de: 'der Sonntag',           en: 'Sunday' },
    { de: 'das Wochenende',        en: 'weekend', emoji: '🏖️' },
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

  // ── 📅 MONTHS ──────────────────────────────────────────────────
  { title: 'Months', titleDe: 'Monatsnamen', emoji: '📅', items: [
    { de: 'der Januar', en: 'January' }, { de: 'der Februar', en: 'February' }, { de: 'der März', en: 'March' },
    { de: 'der April', en: 'April' }, { de: 'der Mai', en: 'May' }, { de: 'der Juni', en: 'June' },
    { de: 'der Juli', en: 'July' }, { de: 'der August', en: 'August' }, { de: 'der September', en: 'September' },
    { de: 'der Oktober', en: 'October' }, { de: 'der November', en: 'November' }, { de: 'der Dezember', en: 'December' },
  ]},

  // ── 🍂 SEASONS ─────────────────────────────────────────────────
  { title: 'Seasons', titleDe: 'Jahreszeiten', emoji: '🍂', items: [
    { de: 'der Frühling / das Frühjahr', en: 'spring', emoji: '🌱' },
    { de: 'der Sommer', en: 'summer', emoji: '☀️' },
    { de: 'der Herbst', en: 'autumn / fall', emoji: '🍂' },
    { de: 'der Winter', en: 'winter', emoji: '❄️' },
  ]},

  // ── 💶 CURRENCY ────────────────────────────────────────────────
  { title: 'Currency', titleDe: 'Währungen', emoji: '💶', items: [
    { de: 'der Euro', en: 'euro', example: '1 Euro = 100 Cent', exampleEn: '1 euro = 100 cents' },
    { de: 'der Cent', en: 'cent', emoji: '🪙' },
  ]},

  // ── 📏 MEASURES & WEIGHTS ──────────────────────────────────────
  { title: 'Measures & weights', titleDe: 'Maße und Gewichte', emoji: '📏', items: [
    { de: 'der Meter (m)',        en: 'metre', example: 'ein Meter fünfzehn = 1,15 m', exampleEn: 'one metre fifteen = 1.15 m' },
    { de: 'der Zentimeter (cm)',  en: 'centimetre' },
    { de: 'der Kilometer (km)',   en: 'kilometre', example: 'zweihundert Kilometer = 200 km', exampleEn: 'two hundred kilometres = 200 km' },
    { de: 'der Quadratmeter (m²)', en: 'square metre' },
    { de: 'das Grad (°)',         en: 'degree', example: 'minus ein Grad / plus vier Grad', exampleEn: 'minus one degree / plus four degrees' },
    { de: 'das Prozent (%)',      en: 'percent' },
    { de: 'der Liter (l)',        en: 'litre' },
    { de: 'das Gramm (g)',        en: 'gram' },
    { de: 'das Pfund',            en: 'pound (500 g)' },
    { de: 'das Kilo(gramm) (kg)', en: 'kilo(gram)' },
  ]},

  // ── 🌍 COUNTRIES & NATIONALITIES ───────────────────────────────
  { title: 'Countries & nationalities', titleDe: 'Länder · Nationalitäten', emoji: '🌍', items: [
    { de: 'Deutschland', en: 'Germany', emoji: '🇩🇪' },
    { de: 'der/die Deutsche', en: 'German (person)' },
    { de: 'deutsch', en: 'German (adjective)' },
    { de: 'Europa', en: 'Europe', emoji: '🌍' },
    { de: 'der Europäer / die Europäerin', en: 'European (person)' },
    { de: 'europäisch', en: 'European (adjective)' },
    { de: 'die Türkei · der Türke / die Türkin · türkisch', en: 'Turkey · Turk · Turkish' },
    { de: 'Finnland · der Finne / die Finnin · finnisch', en: 'Finland · Finn · Finnish' },
    { de: 'Mexiko · der Mexikaner / die Mexikanerin · mexikanisch', en: 'Mexico · Mexican · Mexican' },
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
  ]},

  // ── 🧭 COMPASS DIRECTIONS ──────────────────────────────────────
  { title: 'Compass directions', titleDe: 'Himmelsrichtungen', emoji: '🧭', items: [
    { de: 'der Norden', en: 'north', emoji: '⬆️' },
    { de: 'der Süden',  en: 'south', emoji: '⬇️' },
    { de: 'der Westen', en: 'west', emoji: '⬅️' },
    { de: 'der Osten',  en: 'east', emoji: '➡️' },
  ]},
];

const allGroups = [...groups, ...alphaGroups];

export const goetheSD1 = { tag: GOETHE_SD1_TAG, source: GOETHE_SD1_SOURCE, groups: allGroups };

/** Flat list of every SD1 item, each carrying its group + tag (for search). */
export const goetheSD1Flat = allGroups.flatMap((g) =>
  g.items.map((v) => ({ ...v, group: g.title, tag: GOETHE_SD1_TAG }))
);
