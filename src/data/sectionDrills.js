/**
 * Section drills — practise ONE exam task type at a time.
 *
 * The forms drill has its own dedicated tests (formsDrill.js); every other
 * section aggregates the already-verified tasks of that type from across the
 * eight mock papers, shuffled at start, so each run mixes scenarios.
 */
import { MOCK_PAPERS } from './mockExam.js';
import { FORMS_DRILL } from './formsDrill.js';

const ALL_EXERCISES = MOCK_PAPERS.flatMap((p) => p.modules.flatMap((m) => m.exercises));
const pick = (pred) => ALL_EXERCISES.filter(pred);

export const SECTION_DRILLS = [
  {
    key: 'forms', emoji: '📋', title: 'Formulare', en: 'Fill in forms',
    part: 'Schreiben · Teil 1',
    blurb: `${FORMS_DRILL.length} realistic forms — read about a friend, fill the five gaps (copy + tick the right box).`,
    dedicated: true, // has its own picker page
    count: FORMS_DRILL.length,
  },
  {
    key: 'bilder', emoji: '🖼️', title: 'Dialoge & Bilder', en: 'Listen & pick the picture',
    part: 'Hören · Teil 1',
    items: pick((e) => e.type === 'picture-mcq'),
  },
  {
    key: 'durchsagen', emoji: '📢', title: 'Durchsagen', en: 'Announcements: richtig/falsch',
    part: 'Hören · Teil 2',
    items: pick((e) => e.type === 'richtig-falsch' && e.audioText),
  },
  {
    key: 'nachrichten', emoji: '📞', title: 'Telefon-Nachrichten', en: 'Phone messages',
    part: 'Hören · Teil 3',
    items: pick((e) => e.type === 'multiple-choice' && e.audioText),
  },
  {
    key: 'texte', emoji: '📧', title: 'Kurze Texte', en: 'Short texts: richtig/falsch',
    part: 'Lesen · Teil 1',
    items: pick((e) => e.type === 'richtig-falsch' && !e.audioText && /Teil 1/.test(e.label || '')),
  },
  {
    key: 'anzeigen', emoji: '📰', title: 'Anzeigen', en: 'Pick the right advert',
    part: 'Lesen · Teil 2',
    items: pick((e) => e.type === 'ad-match'),
  },
  {
    key: 'schilder', emoji: '🪧', title: 'Schilder', en: 'Signs: richtig/falsch',
    part: 'Lesen · Teil 3',
    items: pick((e) => e.type === 'richtig-falsch' && !e.audioText && /Teil 3/.test(e.label || '')),
  },
];

export const drillByKey = (key) => SECTION_DRILLS.find((d) => d.key === key) || null;
