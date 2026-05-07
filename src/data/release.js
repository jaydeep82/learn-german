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

export const VERSION = '3.2.1';
export const RELEASE_DATE = '2026-05-06';

export const RELEASES = [
  {
    version: '3.2.1',
    date: '2026-05-06',
    type: 'improvement',
    title: 'Day 1 review — vocab, hints, exercises tightened',
    notes: [
      'Reviewed Day 1 (Sounds of German). Added 6 missing vocabulary items mentioned in the grammar rules but absent from the list: Vogel · viel · Wein · Zoo · Jahr · Junge · Öl. Reordered the vocab to group items by rule (V→F · W→V · Z→ts · J→Y · hard ch · soft ch · sch · umlauts · compound).',
      'Rewrote every hint to include a concrete English-phonetic cue (e.g. "FAH-tuh", "VAH-sser", "tsait — rhymes with kite") so the hint text plus the auto-generated [Pron] guide reinforce each other.',
      'Replaced the misleading MC option "Tsait" with a fuller description: "Like English tsayt — rhymes with kite, but with a ts at the start". Now consistent with the in-app phonetic notation.',
      'New exercises: a "letter → sound" match (V/W/Z/J), a non-existent-cluster MCQ ("dsch"), an umlaut-typing MCQ (ae/oe/ue), and two comprehension MCQs on the ö reading text.',
      'New grammar rule callout: "English loan words keep English sounds" — explains why Software / Sport / Computer don\'t use the German Z-sound.',
      'Quiz expanded from 3 → 6 items: added V→F, J→Y test, and a loan-word reasoning question.',
      'Improved the "ö" hint: "lips for oh, tongue says eh" is less ambiguous than the old "round lips, say er".',
      'Known limitation flagged for follow-up: the transliterator drops silent-h after a vowel (e.g. zehn → [tsen] instead of [tsayn]). Doesn\'t affect Day 1 vocab but is on the list to fix in a future patch.',
    ],
  },
  {
    version: '3.2.0',
    date: '2026-05-06',
    type: 'feature',
    title: 'Week 3 cheatsheet — questions · numbers · prices',
    notes: [
      'Third printable cheatsheet at /cheatsheet/questions-numbers, completing the per-week revision pages for Weeks 1, 2 and 3.',
      'Sections: two question shapes side-by-side (Yes/No verb-first vs W-question W-then-verb) · all 11 W-words with audio + pronunciation + an example each · the wo / wohin / woher trio decoded · ja / nein / doch answer trio · number building blocks (units · teens · tens · big) · 8 worked number recipes from 21 → 1 000 000 · comma-vs-dot decimal trap · 8 price phrases · 5 common mistakes · 7 memory hooks.',
      'Discoverable from the dashboard (card under the Week 3 day grid) and from the Day 21 result screen on a passing score.',
      'Cross-reference card on every cheatsheet now includes the third entry.',
      'Dedicated rose / orange / amber colour palette to distinguish from Week 1 (sky/blue) and Week 2 (emerald/brand).',
    ],
  },
  {
    version: '3.1.0',
    date: '2026-05-06',
    type: 'feature',
    title: 'Week 2 cheatsheet — regular & separable verbs · TFP order',
    notes: [
      'Added a printable Week 2 cheatsheet at /cheatsheet/regular-verbs, mirroring the structure of the Week 1 (sein/haben/werden) sheet.',
      'Sections: the six regular endings at-a-glance · the -t/-d stem rule · side-by-side conjugation table for machen / lernen / spielen / arbeiten · stem-change irregulars (essen / sehen / lesen / sprechen / fahren) with the changed forms highlighted · separable-verb sandwich rule (with-modal vs without) · TFP word-order table with worked examples · self-introduction template · 5 common mistakes · 6 memory hooks.',
      'Cheatsheet.jsx refactored to a slug router so future weeks can add their own page (aux-verbs · regular-verbs so far).',
      'Each cheatsheet now ends with a cross-reference card linking to the others.',
      'Discoverable from the dashboard (new card under the Week 2 day grid) and from the Day 14 (self-intro) result screen on a passing score.',
    ],
  },
  {
    version: '3.0.1',
    date: '2026-05-03',
    type: 'improvement',
    title: 'Rebalanced weeks — max 7 days each',
    notes: [
      'Re-grouped the 50-day curriculum so no week exceeds 7 days. v3.0.0 had Week 4 with 10 days and Weeks 2 & 5 with 8 — too heavy for a sustainable weekly cadence.',
      'New distribution: Wk1=7 · Wk2=7 · Wk3=7 · Wk4=7 · Wk5=7 · Wk6=7 · Wk7=6 · Wk8=2.',
      'Nine days were re-tagged with their new week (Days 15, 21, 29, 30, 36, 37, 38, 43, 44). Day numbering and content are unchanged — same lesson, different week pill.',
      'Updated week titles + taglines + Week-2…Week-7 badge ranges to match the new groupings. Mid-review (Day 15) now anchors Week 3; Akk pronouns (Day 28) closes Week 4; Modals I (Day 35) closes Week 5; Modals II (Day 36) opens Week 6.',
      'No content added or removed; localStorage progress is preserved (key still deutsch50:v1).',
    ],
  },
  {
    version: '3.0.0',
    date: '2026-05-03',
    type: 'feature',
    title: 'Deutsch50 — A2 expansion from presentation 0205.pptx',
    notes: [
      'BREAKING: curriculum extended from 40 → 50 days. localStorage key bumped to deutsch50:v1, so any in-progress saves reset on first load. App brand stays "Deutsch30".',
      'Ported the entire second source deck (presentation 0205.pptx, 41 slides) — A2-bridge content that builds on top of v2.x.',
      'Day 1 enriched: 8-tip ö-rescue toolkit + ö reading text (Brötchen / Bäcker / Verkäufer).',
      'NEW Day 28 — Akkusativ pronouns: full mich/dich/ihn/sie/es/uns/euch/Sie table + 8 translation drills.',
      'NEW Day 29 — Dativ pronouns: full mir/dir/ihm/ihr/uns/euch/ihnen/Ihnen table, used after Dativ verbs and Dativ prepositions.',
      'NEW Day 30 — More prepositions: Akkusativ-only (für · um · ohne) + Wechselpräpositionen (in / an / auf — Wo? = Dat, Wohin? = Akk) + ins / ans contractions.',
      'NEW Day 37 — Sentence connections: coordinating (und · oder · aber · denn · dann — verb stays slot 2) vs subordinating (weil · wenn · dass — verb to end), with the denn-vs-weil comparison.',
      'NEW Day 38 — Demonstrative articles (dieser / diese / dieses) + indefinite pronouns (jemand / niemand / etwas / nichts / alles / man).',
      'NEW Day 44 — A2 mid-review covering all the new pronouns, prepositions, conjunctions and demonstratives.',
      'NEW Day 45 — Perfekt I: haben + Partizip II for regular and irregular verbs (gearbeitet, gelernt, getrunken, gegessen, gelesen, geschrieben, gesprochen).',
      'NEW Day 46 — Perfekt II: sein + Partizip II for motion / change-of-state verbs (gegangen, gefahren, gekommen, geblieben, geflogen, aufgestanden) plus the separable-verb Perfekt rule.',
      'NEW Day 47 — Präteritum: complete sein (war/warst/...) and haben (hatte/hattest/...) tables, plus the rule that for everything else you use Perfekt in speech.',
      'NEW Day 48 — Konjunktiv II + Imperativ: möchten + würden conjugations, plus du-form Imperative (Komm! Iss! Ruf an! Kauf ein!).',
      'New 8-week structure: Foundations · Building sentences · Questions & numbers · Cases & pronouns · People, life & glue · Real-life scenarios · Past tenses & polite forms · Mastery.',
      'Badges: added week-7 "Time Traveller" badge; week-4 + week-5 + week-6 ranges expanded; graduate now requires Day 50 ≥ 80%.',
      'Combined coverage of both source decks: ~95-100%. The "Adjectives" topic listed in deck 2\'s agenda has no actual content slides and is intentionally not implemented.',
    ],
  },
  {
    version: '2.1.0',
    date: '2026-05-03',
    type: 'feature',
    title: 'Phase plan complete — word-order quiz + oral review',
    notes: [
      'Closes the last two outstanding items from the original phase plan. PPT coverage now ~100% of teachable content.',
      'Day 38 (Week 4-6 review): added the 12-sentence "which sentences are wrong?" word-order quiz from PPT slide 253. Each sentence renders as a Correct/Wrong MCQ with a why-explanation calling out the broken rule (verb out of slot 2, separable prefix in the wrong place, etc.).',
      'Day 39 renamed "Mega review" → "Mega review · Say it back". Now opens with a 35-prompt oral review (PPT slides 266-267): 21 grammar Q&A prompts + 14 build-a-sentence prompts. Each prompt: read aloud, attempt the answer, tap to reveal, self-grade with "Got it" / "Need more practice".',
      'New <OralPrompt> exercise component. Wired into ExerciseRunner as the 7th exercise type — previous six (Flashcard · MultipleChoice · FillInBlank · DragDropMatch · ConjugationTable · Dialogue) unchanged.',
      'Each oral prompt can carry an optional German example sentence rendered with audio + pronunciation guide.',
    ],
  },
  {
    version: '2.0.1',
    date: '2026-05-03',
    type: 'improvement',
    title: 'Brand renamed back to Deutsch30',
    notes: [
      'Brand mark restored to "Deutsch30" across the header, footer, About hero, page title, README, package name and the graduate badge.',
      'Curriculum stays at 40 days — the brand is now a name, not a day-count claim. Body copy ("Learn German in 40 days") still reflects the actual curriculum length.',
      'localStorage key intentionally NOT changed (still deutsch40:v1) so existing in-progress saves survive this rename.',
    ],
  },
  {
    version: '2.0.0',
    date: '2026-05-03',
    type: 'feature',
    title: 'Deutsch40 — Phase B + C complete (~95% PPT coverage)',
    notes: [
      'BREAKING: app renamed Deutsch30 → Deutsch40. Curriculum extended from 30 → 40 days. localStorage key bumped to deutsch40:v1, so any in-progress saves reset on first load.',
      'Added 10 new lesson days closing the three biggest pedagogical gaps from the audit (Phase B) plus reading practice and big numbers (Phase C).',
      'NEW Day 12 — Separable verbs: aufstehen/einkaufen/mitkommen/aufmachen/anrufen/fernsehen + the prefix-jumps-to-end rule, plus modal-verb interaction.',
      'NEW Day 16 — Yes/No questions: word-order flip, ja/nein/doch trio, dialogues.',
      'NEW Day 17 — W-questions: 11 W-words including the wo / wohin / woher trio, full dialogue practice.',
      'NEW Day 19 — Big numbers & prices: thousands, millions, decimal-comma rule, restaurant pricing dialog.',
      'NEW Day 20 — Week 3 review.',
      'NEW Day 25 — Dativ I (prepositions): the eight always-Dativ prepositions (mit, bei, zu, von, nach, aus, seit, gegenüber), full article table, contractions (beim, vom, zum, zur).',
      'NEW Day 26 — Dativ II (verbs): helfen/danken/gehören/gefallen/antworten/glauben + the gefallen flipped-meaning rule.',
      'NEW Day 27 — Cases review: Nom · Akk · Dat decision tree + cheat-sheet table.',
      'NEW Day 30 — Hobbies (dedicated): expanded vocab, sentence-template practice.',
      'NEW Day 31 — Reading practice: three short paragraphs from PPT slides 111, 146-147, 183 with comprehension questions.',
      'Reshuffle: Days 12-30 from v1.6.0 renumbered to fit the new arc; nothing was removed. The dashboard week structure is now 7 weeks: Foundations · Building sentences · Questions & numbers · Cases · People & life · Real-life scenarios · Mastery.',
      'Updated 14 badges (new week ranges, week-5 + week-6 added, graduate now requires Day 40 ≥ 80%, new XP-1000 badge).',
      'Estimated PPT coverage: ~80% (v1.6.0) → ~95% (v2.0.0).',
    ],
  },
  {
    version: '1.6.0',
    date: '2026-05-03',
    type: 'content',
    title: 'Phase A — port the missing PPT drills',
    notes: [
      'Audit of the source PowerPoint vs the app revealed only ~60% of the deck\'s pedagogical content was ported. v1.6.0 closes the largest content gaps without changing the 30-day arc.',
      'Day 1: ch-rescue toolkit (6 tricks), hard-vs-soft ch reading texts, compound-word breaking strategy with worked examples (Wochenende, Hausaufgabe, Softwareentwicklung).',
      'Days 5/6/7: ported ~24 missing aux-verb fill-blanks from PPT slides 32-41 (sein/haben/werden + a mixed-auxiliary challenge).',
      'Day 9: added "find subject/object" multi-choice challenges from slide 49 + the question test in grammar pointers.',
      'Day 10: added trinken/wohnen/arbeiten conjugation drills (slides 62-64), including the stem-ends-in-t rule with arbeitet / arbeitest examples.',
      'Day 11: added 8 missing common verbs to vocabulary (besuchen, zeigen, benutzen, erklären, wiederholen, üben, suchen, schicken) plus the slide 89 mini-challenge.',
      'Day 12: ported the full hobby vocabulary list from slide 66 — 5 hobby verbs, 11 hobby objects, 4 time expressions, 2 frequency, 2 preference — plus hobby-sentence builders.',
      'Day 13: added the Moritz self-introduction translation drill (slides 167-168) — 9 English→German fill-blanks.',
      'Days 16-19: added 14 article-choice fill-blanks across definite/indefinite × Nom/Akk (slides 107, 109, 123-126, 160-161); added "one sentence — four meanings" + "first mention vs second mention" grammar rules (slides 156, 162).',
      'Day 20: expanded Possessivpronomen from mein/meine only to the full 8-form table (mein/dein/sein/ihr/unser/euer/ihr/Ihr) with declension grammar; added 6 cross-person drills + 4 sentences from the slide 291 translation challenge.',
      'Day 23: added the politeness ladder (slides 258-259) — möchte → möchte gerne → möchte sehr gerne → mit Milch → hätte gerne — with grammar callout on den vs einen.',
      'Day 24: added 12 sentences from the 21-sentence restaurant translation challenge (slide 254).',
      'Day 26: imported the full kein declension table (slide 271) + the 4-line restaurant kein dialog + the 5-item challenge (slide 272).',
      'Net effect: estimated PPT coverage rises from ~60% to ~75-80%. ~80 additional drill items, ~25 new vocabulary entries, ~8 new grammar callouts.',
    ],
  },
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
