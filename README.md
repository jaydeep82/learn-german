# Deutsch30 — Learn German in 50 Days

An interactive, fully responsive web app that teaches German to absolute
beginners (ages 5–50) through a structured 50-day curriculum, mapped
from two source decks: `big Revision Powerpoint.pptx` (Days 1–43) and
`presentation 0205.pptx` (Days 28–30, 37–38, 44–48).

> The brand keeps its original "Deutsch30" name; the curriculum was
> extended to 40 days in v2.0.0 and to 50 days in v3.0.0 to cover an
> additional A2-level deck without dropping any earlier content.

## Run it

```bash
cd poc5-german
npm install
npm run dev          # http://localhost:5173
```

Production build:

```bash
npm run build
npm run preview      # http://localhost:4173
```

The app needs no backend — progress is persisted in `localStorage` and
audio is generated via the browser's Web Speech API (`speechSynthesis`).
For best pronunciation install a German voice:

* **macOS**: System Settings → Accessibility → Spoken Content → System Voice → Anna / Markus
* **Windows / Chrome**: voices are downloaded automatically
* **Linux**: install `speech-dispatcher` + a German voice (e.g. mbrola-de)

## Curriculum (50 days, 8 weeks)

| Week | Days  | Focus                                                                |
|------|-------|----------------------------------------------------------------------|
| 1    | 1–7   | Sounds (incl. **ö rescue**), numbers 0-29, pronouns, articles, sein/haben/werden |
| 2    | 8–15  | Numbers 30-100, S-V-O, regular & separable verbs, time, intro, review |
| 3    | 16–20 | Yes/No questions · W-questions · Numbers 100-1000+ · Big numbers & prices · review |
| 4    | 21–30 | Akkusativ + Dativ + cases review + **Akk pronouns** + **Dat pronouns** + **Wechsel prepositions** |
| 5    | 31–38 | Family + Possessivpronomen, routine, hobbies, reading, modals + **conjunctions** + **demonstratives & indefinites** |
| 6    | 39–44 | Restaurant, shopping, travel, negation, Week 4-6 review, **A2 mid-review** |
| 7    | 45–48 | **Perfekt I (haben)** · **Perfekt II (sein)** · **Präteritum (war/hatte)** · **Konjunktiv II + Imperativ** |
| 8    | 49–50 | Mega review · Say it back · Final exam + certificate                  |

Each day contains: an intro, vocabulary with audio, grammar pointers,
4–8 mixed exercises, and a quiz. A score ≥ 70% unlocks the next day.

## Pedagogy applied

* **Spaced repetition** — daily quiz items reappear in weekly reviews and the final exam.
* **Pimsleur-style audio recall** — every German term has a 🔊 button.
* **Phonetic guides** — every German word displays an English-friendly
  pronunciation in brackets, e.g. `Schule [Shuluh]`. The transliterator
  lives in `src/lib/pronounce.js` and the legend appears at the top of
  the Grammar page.
* **Comprehensible input** — English glosses and visual emojis everywhere.
* **Contextual learning** — restaurant, shopping and travel scenarios.
* **Adaptive feedback** — wrong answers are tracked and surfaced in the
  "mistakes only" review (`/review/wrong-only`).

## Gamification

XP per exercise, daily streaks, 12 unlockable badges
(see `src/data/badges.js`), per-day score gates and a final certificate
screen with confetti.

## Tech stack

* **React 18** + **Vite 5** + **Tailwind CSS 3**
* **React Router 6** for client-side routing
* **Web Speech API** for text-to-speech (no audio files to host)
* **localStorage** for persistence

## File map

```
src/
├── main.jsx                    React entry
├── App.jsx                     Router
├── index.css                   Tailwind + tokens
├── data/
│   ├── curriculum.js           All 30 days, vocab, grammar, exercises, quizzes
│   ├── vocabulary.js           Flattened/topical vocab index
│   └── badges.js               12 badge predicates
├── store/
│   └── AppContext.jsx          Progress/XP/streak/badges + persistence
├── hooks/
│   ├── useLocalStorage.js
│   └── useTTS.js               German voice picker
├── components/
│   ├── Layout.jsx              Nav, mobile bar, theme/kid toggles, footer
│   ├── ProgressUI.jsx          XP, streak, progress bar, badge wall
│   ├── AudioButton.jsx
│   └── exercises/
│       ├── Flashcard.jsx
│       ├── MultipleChoice.jsx
│       ├── FillInBlank.jsx
│       ├── DragDropMatch.jsx
│       ├── ConjugationTable.jsx
│       ├── Dialogue.jsx
│       └── ExerciseRunner.jsx  Orchestrates a list of exercise specs
└── pages/
    ├── Home.jsx                Dashboard with all 30 day cards
    ├── DayLesson.jsx           Intro → exercises → result with confetti
    ├── Review.jsx              Weekly · per-week · wrong-only · final
    ├── Vocabulary.jsx          Searchable index
    ├── Grammar.jsx             All rules + conjugation cheat-sheet
    └── Settings.jsx            Theme, audio, kid mode, reset
```

## Accessibility (WCAG 2.1 AA targets)

* Skip-link to main, focus-visible rings, semantic headings.
* Every audio control has an `aria-label` describing the word.
* Drag-and-drop has a tap-tap fallback for keyboard / touch.
* `prefers-reduced-motion` disables animations.
* Light + dark themes are both contrast-checked.

## Extending the curriculum

The data shape in `src/data/curriculum.js` is intentionally flat:

```js
{
  id, week, title, titleDe, emoji, objective, intro,
  vocabulary: [{ de, en, hint? }],
  grammar:    [{ rule, body }],
  exercises:  [...],          // mix of types below
  quiz:       [...],          // used in reviews
}
```

Supported exercise types: `flashcards` · `multiple-choice` ·
`fill-blank` · `match` · `conjugation` · `dialogue`. Add a new type by
creating a component under `src/components/exercises/` and dispatching
to it from `ExerciseRunner.jsx`.

## What is intentionally NOT in the deliverable

* Native-recorded audio files. The Web Speech API gives free, instant
  TTS — for a polished launch you would record native speakers and swap
  `useTTS` for `<audio>` tags.
* A back-end. Adding Supabase / Firebase is straightforward — the
  `AppContext` reducer is the only state surface.
* Service-worker offline. Install `vite-plugin-pwa` and cache the build
  output to make the whole app installable.
