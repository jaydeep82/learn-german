/**
 * Registry of the tagged vocabulary collections that live ALONGSIDE the
 * 50-day course vocab on the Vocabulary page. Each is an external reference
 * word list (e.g. an official Goethe A1 Wortliste), surfaced with its own
 * scope chip and folded into search.
 *
 * To add another: import its { collection, flat } and push an entry here.
 */
import { goetheA1, goetheA1Flat } from './goetheA1.js';
import { goetheSD1, goetheSD1Flat } from './goetheSD1.js';

export const collections = [
  { key: 'youth',  emoji: '🧒', ...goetheA1,  flat: goetheA1Flat },
  { key: 'adults', emoji: '🧑', ...goetheSD1, flat: goetheSD1Flat },
];
