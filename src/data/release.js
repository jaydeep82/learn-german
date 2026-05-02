/**
 * Single source of truth for the app's version and release history.
 *
 * Versioning scheme (semver-style):
 *   MAJOR  – breaking re-architecture (data model rewrite, new framework)
 *   MINOR  – new functionality / new lesson content / new pages
 *   PATCH  – bugfixes and copy edits, no behavioural change
 *
 * On every new release: prepend an entry to RELEASES, set its `version`
 * + `date`, and update the VERSION constant to match. Keep package.json
 * in sync.
 */

export const VERSION = '1.5.0';
export const RELEASE_DATE = '2026-05-02';

export const RELEASES = [
  {
    version: '1.5.0',
    date: '2026-05-02',
    type: 'feature',
    title: 'About page + version tracking',
    notes: [
      'New About page with the current version and the full release history.',
      'Version badge shown in the footer of every page.',
      'Established a semver-style versioning scheme — minor for features, patch for fixes.',
    ],
  },
  {
    version: '1.4.0',
    date: '2026-05-02',
    type: 'feature',
    title: 'sein · haben · werden cheatsheet',
    notes: [
      'New printable Week 1 cheatsheet at /cheatsheet/aux-verbs.',
      'Side-by-side conjugation table for all three auxiliaries, with audio + pronunciation per cell.',
      'Per-verb example cards, "when to use which" comparison table, common mistakes, memory hooks.',
      '"The three sies" decoder showing how the verb form picks she / they / formal you.',
      'Discoverable from the dashboard and from the Day 7 result screen.',
    ],
  },
  {
    version: '1.3.0',
    date: '2026-05-02',
    type: 'feature',
    title: 'Conjugation table disambiguation',
    notes: [
      'Each row of the sein / haben / werden conjugations now shows its English meaning right under the pronoun.',
      'After "Check table", every row reveals an example sentence with audio, pronunciation and an English gloss.',
      'New "⚠ The three sies" + "Quick pronoun map" callouts in the Day 6 grammar pointers.',
      'Multi-line grammar bodies now respect newlines (whitespace-pre-line).',
    ],
  },
  {
    version: '1.2.0',
    date: '2026-05-02',
    type: 'feature',
    title: 'Explicit "Next →" buttons',
    notes: [
      'Multiple choice, fill-in-blank, conjugation table and drag-and-drop no longer auto-advance after you answer.',
      'Feedback persists until you click "Next →" — gives time to actually read the corrections.',
    ],
  },
  {
    version: '1.1.1',
    date: '2026-05-01',
    type: 'fix',
    title: 'Day navigation bugfix',
    notes: [
      'Clicking "Next day" from a result screen now opens the next day\'s intro screen instead of keeping the previous result visible.',
    ],
  },
  {
    version: '1.1.0',
    date: '2026-05-01',
    type: 'feature',
    title: 'English-phonetic pronunciation guides',
    notes: [
      'Every German word now displays a bracketed pronunciation, e.g. Schule [Shuluh].',
      'Heuristic transliterator implements the rules taught on Day 1 (V→F, W→V, Z→ts, ch→kh, sch→sh, umlauts, diphthongs, silent h, s+vowel→z).',
      'Wired into flashcards, dialogue, vocabulary cards, conjugation tables and the Grammar cheat-sheet.',
      'Pronunciation legend at the top of the Grammar page explains the notation.',
    ],
  },
  {
    version: '1.0.0',
    date: '2026-05-01',
    type: 'feature',
    title: 'Initial release',
    notes: [
      '30-day curriculum mapped from the source PowerPoint, organised into 5 weeks.',
      'Six exercise types: Flashcard · Multiple Choice · Fill-in-blank · Drag-drop match · Conjugation table · Dialogue.',
      'Gamification: XP per answer, daily streaks, 12 unlockable badges, day-locking (≥70% to advance).',
      'Pages: dashboard, day lesson, weekly / per-week / wrong-only / final reviews, vocabulary search, grammar reference, settings.',
      'Audio via the Web Speech API with German voice picker.',
      'Light & dark themes, kid mode, WCAG AA accessibility targets.',
    ],
  },
];
