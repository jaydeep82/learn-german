# The Road to A1 Certification

A prioritized plan to turn **Deutsch30** from a strong daily study app into a faithful
**Goethe-Zertifikat A1** exam trainer. The content is already deep — the missing layer is
practice in the **exact four exam formats**, plus the retention and polish that keep learners
coming back.

**Current state:** `v3.21.0` (live on AWS) · 2,407 words (979 course · 689 Fit-1 · 739 SD1) ·
50-day course + grammar · 7 exercise types + Practice mode · 27 data-validation tests.

**Legend** — Priority: **P0** Now · **P1** Next · **P2** Later ·  Effort: **S** / **M** / **L** ·
Skills: 🎧 Hören · 📖 Lesen · ✍️ Schreiben · 🗣️ Sprechen

---

## What we're preparing for — the Goethe A1 exam

**Start Deutsch 1** (adults) and **Fit in Deutsch 1** (ages 10–16) share one format:
~65 minutes of written work plus a short group speaking test, scored out of 100, with a
**60% pass mark**. Today the app teaches the vocabulary and grammar behind these — but never
rehearses the task types themselves.

| Module | Time | Parts | Format |
|---|---|---|---|
| 🎧 **Hören** (Listening) | ~20 min | 3 · ~15 items | Dialogues → picture choice · Announcements → true/false · Messages → multiple choice |
| 📖 **Lesen** (Reading) | ~25 min | 3 · ~15 items | Short emails → true/false · Situations → pick the right ad · Signs & notices → true/false |
| ✍️ **Schreiben** (Writing) | ~20 min | 2 | Fill in a form (5 fields) · Short message ~30 words from 3 prompts |
| 🗣️ **Sprechen** (Speaking) | ~15 min | 3 · in a group | Introduce yourself · Ask & answer with word cards · Make & answer requests |

### The headline gap

Deutsch30 has the raw material — 2,407 words, a 50-day grammar course, flashcards and quizzes —
but a learner can finish all of it and still walk into the exam **never having done a single
_Hören_, _Lesen_, _Schreiben_, or _Sprechen_ task in the real format, under time, scored against
60%.** So this roadmap leads with **exam-format practice**, then adds the retention and UX work
that makes daily study stick.

---

## Track A · The exam trainer — practice the four formats

The core of certification readiness. Build the task types once as reusable components, then
assemble them into per-skill practice and a full timed mock.

| # | Task | Pri | Effort | Skill | Why |
|---|---|---|---|---|---|
| A1 | **Exam-format exercise components** | P0 | M | — | New building blocks the rest of Track A depends on: picture MCQ, richtig/falsch, ad-matching, form-fill, word-card prompts. Extends the existing engine, so scoring/XP/streaks come for free. |
| A2 | **Lesen (Reading) module** | P0 | M | 📖 | All three reading parts. No audio dependency → fastest exam module to ship first. |
| A3 | **Schreiben (Writing) module** | P0 | M | ✍️ | Part 1 form-fill (auto-check); Part 2 ~30-word message with live word-count, checklist, and a model answer to compare against. |
| A4 | **Reliable listening audio** | P1 | M | 🎧 | Browser speech synthesis is inconsistent (some devices lack a German voice) — fatal for a listening test. Pre-generate clips or ship a better voice. Prerequisite for A5. |
| A5 | **Hören (Listening) module** | P0 | L | 🎧 | The three listening parts with real audio, each playable twice like the real exam. _Needs A4._ |
| A6 | **Sprechen (Speaking) practice** | P1 | M | 🗣️ | Guided self-intro, keyword Q&A cards, request/picture cards — each with a model answer, spoken example, and record-yourself playback. |
| A7 | **Full timed mock exam** | P0 | L | — | All four modules end-to-end with per-module timers, scored against the 60% pass mark, ending in an **“exam-ready?”** verdict + per-skill breakdown. The single most motivating feature. |

## Track B · Make it stick — retention & effectiveness

Turns browsing into remembering, and tells each learner exactly what to study next.

| # | Task | Pri | Effort | Why |
|---|---|---|---|---|
| B1 | **Real spaced repetition** | P1 | L | Today’s “mistakes only” is just a filter. Add a proper scheduler (SM-2 / Leitner) with per-item due dates and a daily review queue across vocab + missed exercises. |
| B2 | **Per-word mastery & collection progress** | P1 | M | Mark words known/learning and show real coverage — *“412 / 739 Start Deutsch 1 words”* — so the 1,428 Goethe words feel like a finishable goal. |
| B3 | **Exam-readiness dashboard** | P1 | M | A %-ready gauge per skill driven by mock/practice performance, pointing the learner at their weakest module. _Needs A7._ |

## Track C · Experience — UX & polish

The everyday feel: installable, fast, motivating, usable by everyone.

| # | Task | Pri | Effort | Why |
|---|---|---|---|---|
| C1 | **Offline & installable (PWA)** | P1 | M | A language app lives on the commute. Service worker + manifest so lessons and audio work offline and the app installs to the home screen. |
| C2 | **Accessibility pass** | P1 | M | Full keyboard nav, visible focus, ARIA on the exercise widgets, contrast checks — so screen-reader and keyboard users can complete every task. |
| C3 | **Exam-date onboarding & goals** | P2 | S | Set a test date + daily goal; show a countdown and the pace needed to be ready in time. |
| C4 | **Progress dashboard** | P2 | M | Accuracy trends, a streak calendar heat-map, and words-learned over time. |
| C5 | **Vocabulary quality-of-life** | P2 | S | Within a collection: filter by theme/letter, “mark as known”, one-tap “quiz this group”. |
| C6 | **Audio controls & performance** | P2 | M | Replay, slow-playback, guaranteed German-voice fallback; code-split the 1.2 MB bundle into lazy routes. |

## Track D · Content depth & engineering health

Fills the last content gaps and keeps the growing codebase safe to change.

| # | Task | Pri | Effort | Why |
|---|---|---|---|---|
| D1 | **Model texts & phrase bank** | P1 | S | Email/message templates and speaking chunks (greetings, asking, thanking) — raw material reused in Schreiben and Sprechen. |
| D2 | **Grammar syllabus audit** | P1 | M | Check the 50-day grammar against the official A1 inventory (cases, tenses, prepositions, imperative, modals) and fill gaps. |
| D3 | **Continuous integration** | P1 | S | GitHub Actions to run the test suite + build on every push — cheap insurance now that tests exist. |
| D4 | **English example translations** | P2 | M | Many vocab examples lack an `exampleEn`; adding them helps true beginners and unlocks reverse (English→German) drills. |
| D5 | **Tests for exercises & SRS · lint** | P2 | M | Extend coverage beyond data to exercise logic and the scheduler; add ESLint for consistency. |

---

## A recommended sequence

Front-load the exam trainer with the quickest wins, defer what depends on audio, and keep the
foundations moving alongside.

1. **Foundations first (A1 + D3)** — build the exam-format components and wire up CI; everything else rides on these.
2. **Ship reading & writing (A2, A3)** — no audio needed, so two real exam modules land fast and prove the format.
3. **Make listening trustworthy (A4 → A5)** — fix audio, then build Hören on top of it.
4. **Add speaking & the mock (A6, A7)** — complete all four skills, then the capstone timed exam.
5. **Turn on retention (B1–B3)** — spaced repetition and the readiness dashboard, now that mock data exists to drive them.
6. **Polish & reach (C1–C6, D-track)** — PWA, accessibility, dashboards, and the remaining content depth.

---

*Priorities are a proposal — reorder to taste. Roadmap toward Goethe-Zertifikat A1
(Start Deutsch 1 / Fit in Deutsch 1).*
