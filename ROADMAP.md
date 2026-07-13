# The Road to A1 Certification

A prioritized plan to turn **Deutsch30** from a strong daily study app into a faithful
**Goethe-Zertifikat A1** exam trainer. The content is already deep — the missing layer is
practice in the **exact four exam formats**, plus the retention and polish that keep learners
coming back.

**Current state:** `v3.38.0` (live on AWS) · installable offline PWA · full A1 exam trainer (four skills +
timed mock + readiness) · retention layer (SRS, mastery, goals, progress) · 2,407 words with translated
examples · grammar checklist + phrase bank · CI (lint + 119 tests).

> 🎉 **This roadmap is ✅ COMPLETE** — all four tracks shipped, v3.22.0 → v3.38.0 (17 releases).
> The headline gap below is closed: learners can practise every Goethe A1 skill in its real format,
> sit a timed mock against the 60% pass mark, retain vocabulary with spaced repetition, track their
> readiness per skill, and study offline on the installed app. The table rows record what shipped where.

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

> ✅ **This gap is now closed** (Track A, v3.22.0–v3.27.0): every skill is practisable in the real
> format, and a full timed mock scores you against 60%. Focus shifts to retention (Track B) next.

---

## Track A · The exam trainer — ✅ COMPLETE

The core of certification readiness — built the task types once as reusable components, then
assembled them into per-skill practice and a full timed mock. **All shipped, v3.22.0 → v3.27.0.**

| # | Task | Done | Skill | What shipped |
|---|---|---|---|---|
| A1 | **Exam-format exercise components** | ✅ v3.22 | — | Five reusable tasks (picture-MCQ, richtig/falsch, ad-match, form-fill, speaking-card) + a `/exam-formats` preview. Later joined by guided-writing (A3) and audio-aware variants (A4). |
| A2 | **Lesen (Reading) module** | ✅ v3.23 | 📖 | `/lesen` — all three reading parts (emails, ad-matching, signs), scored with a 60% pass badge. Added the Exam hub + nav. |
| A3 | **Schreiben (Writing) module** | ✅ v3.24 | ✍️ | `/schreiben` — form-fill (accent-tolerant) + a guided ~30-word message with live word-count and model comparison. |
| A4 | **Reliable listening audio** | ✅ v3.25 | 🎧 | Hardened `useTTS` + `ListeningPlayer`: replay, slower playback, and a transcript fallback (auto when no German voice) so a listening task is never a dead end. _Browser voice for now; pre-generated clips are a future upgrade._ |
| A5 | **Hören (Listening) module** | ✅ v3.25 | 🎧 | `/hoeren` — dialogues → picture, announcements → true/false, messages → MCQ, all on the reliable player. |
| A6 | **Sprechen (Speaking) module** | ✅ v3.26 | 🗣️ | `/sprechen` — introduce yourself, keyword Q&A, polite requests; say aloud → model answer with audio → self-rate. |
| A7 | **Full timed mock exam** | ✅ v3.27 | — | `/mock` — all four modules back to back with per-module countdowns; one overall score (skills weighted equally) vs the 60% pass mark, an “on track to pass?” verdict, and a per-skill breakdown. |

## Track B · Make it stick — ✅ COMPLETE

Turns browsing into remembering, and tells each learner exactly what to study next.
**All shipped, v3.28.0 → v3.30.0.**

| # | Task | Done | What shipped |
|---|---|---|---|
| B1 | **Real spaced repetition** | ✅ v3.28 | `/daily` — Leitner-style scheduler (per-word level + due date, growing intervals), Again/Good/Easy grading, lapsed cards requeued, “N due” on the dashboard. |
| B2 | **Per-word mastery & collection progress** | ✅ v3.29 | Coverage bars per collection (*“412 / 739 known”*), ○/✓ mark-as-known on every card, “Hide known” filter — all shared with the SRS. |
| B3 | **Exam-readiness dashboard** | ✅ v3.30 | `/readiness` — every module/mock sitting recorded; recency-weighted (mock-boosted) %-ready gauge per skill, overall verdict, “Focus next” weakest-skill callout, vocab-memory stats. |

## Track C · Experience — ✅ COMPLETE

The everyday feel: installable, fast, motivating, usable by everyone.
**All shipped, v3.31.0 → v3.35.0.**

| # | Task | Pri | Effort | Why |
|---|---|---|---|---|
| C1 | **Offline & installable (PWA)** ✅ | ✅ v3.31 | M | Done — vite-plugin-pwa: full-app precache (works offline incl. TTS audio), install to home screen (manifest + icons + iOS meta), silent auto-updates, deploy pipeline hardened (no-cache + invalidation for the service worker). |
| C2 | **Accessibility pass** ✅ | ✅ v3.32 | M | Done — match exercise rebuilt on real buttons (full keyboard), answer feedback announced via live regions, all German text tagged `lang="de"` for correct screen-reader pronunciation, German spell-check in writing fields, toggle states exposed, contrast bumps. (Focus rings, skip link, reduced-motion already existed.) |
| C3 | **Exam-date onboarding & goals** ✅ | ✅ v3.33 | S | Done — set the exam date on the dashboard or in Settings; countdown card with lessons/day + new-words/day pace, readiness chip, final-week mock nudge, exam-day mode. |
| C4 | **Progress dashboard** ✅ | ✅ v3.34 | M | Done — `/progress` (header streak/XP links to it): stat tiles, 16-week activity heat-map (new per-day log + retro reconstruction), per-session accuracy bars vs the 60% line, SRS memory-pipeline histogram. Hand-rolled charts, offline-friendly. |
| C5 | **Vocabulary quality-of-life** ✅ | ✅ v3.35 | S | Done — per-collection theme/letter group filter; one-tap “Quiz →” on every group header deep-links into Practice (group + quiz mode preloaded). “Mark as known” had shipped with B2. |
| C6 | **Audio controls & performance** ✅ | ✅ v3.35 | M | Done — global “Speech speed” setting slows every 🔊 button (listening player already had replay/slow/transcript from A4); all routes lazy-loaded with the SRS core split from word data → initial bundle 1.4 MB → 0.38 MB (−73%), full offline retained via PWA precache. |

## Track D · Content depth & engineering health — ✅ COMPLETE

Fills the last content gaps and keeps the growing codebase safe to change.
**All shipped: D3 v3.22 · D1+D2 v3.36 · D5 v3.37 · D4 v3.38.**

| # | Task | Pri | Effort | Why |
|---|---|---|---|---|
| D1 | **Model texts & phrase bank** ✅ | ✅ v3.36 | S | Done — `/phrases`: 7 situation sections (~45 phrases with audio) + 3 Schreiben-Teil-2 writing templates; linked from the Exam hub and the writing/speaking intros. Adversarially verified. |
| D2 | **Grammar syllabus audit** ✅ | ✅ v3.36 | M | Done — course grammar extracted and audited against the official A1 inventory; `/checklist` maps all 39 syllabus points to lesson days and teaches the 4 gaps inline (ordinals & dates, time prepositions, impersonal es, irregular comparison). 6 audit findings fixed. |
| D3 | **Continuous integration** ✅ | ✅ v3.22 | S | GitHub Actions runs the test suite + build on every push. _Done — shipped alongside A1._ |
| D4 | **English example translations** ✅ | ✅ v3.38 | M | Done — all 1,138 missing `exampleEn` fields authored (youth 505 + adults 633; course was already complete), 80-sample independently audited (0 errors), regression test added; plus the 🔁 reverse EN→DE quiz mode in Practice. |
| D5 | **Tests for exercises & SRS · lint** ✅ | ✅ v3.37 | M | Done — ESLint (react-hooks rules) added to the repo + CI, all findings fixed (incl. a keyed-remount cleanup in DayLesson); exercise-logic unit tests added (tolerant answer matching, quiz generator). SRS engine was already tested (B1). 116 tests. |

---

## A recommended sequence

Front-load the exam trainer with the quickest wins, defer what depends on audio, and keep the
foundations moving alongside.

1. ~~**Foundations first (A1 + D3)** — build the exam-format components and wire up CI.~~ ✅ **done**
2. ~~**Ship reading & writing (A2, A3)** — two real exam modules, no audio needed.~~ ✅ **done**
3. ~~**Make listening trustworthy (A4 → A5)** — fix audio, then build Hören.~~ ✅ **done**
4. ~~**Add speaking & the mock (A6, A7)** — all four skills, then the capstone timed exam.~~ ✅ **done**
5. ~~**Turn on retention (B1–B3)** — spaced repetition, word mastery, and the readiness dashboard.~~ ✅ **done**
6. ~~**Polish & reach (C1–C6)** — PWA, accessibility, goals, dashboards, QoL, performance.~~ ✅ **done**
7. ~~**Content depth (D1, D2, D4, D5)** — phrase bank, grammar syllabus audit, example translations, lint/tests.~~ ✅ **done — roadmap complete** 🎉

---

*Priorities are a proposal — reorder to taste. Roadmap toward Goethe-Zertifikat A1
(Start Deutsch 1 / Fit in Deutsch 1).*

---

## Post-roadmap additions

| What | Shipped | Notes |
|---|---|---|
| **+7 fresh mock exam papers** (8 total) | v3.39 | Multi-paper mock system with a picker at `/mock`; papers 2–8 are fresh realistic sittings (Hören 13 · Lesen 13 · form + message · official Sprechen structure) across distinct scenarios. All content adversarially audited; 9 findings fixed. |
| **Section drills** (per-Teil practice) | v3.40 | `/drills` hub: 10 new realistic Schreiben-Teil-1 form tests (real-sheet format — “(0)” example rows, numbered gaps, tick-box inference fields) + 6 drills aggregated from all mock papers (pictures, announcements, phone messages, texts, adverts, signs). Forms audited; 5 findings fixed. |
| **+10 more form tests** (20 total) | v3.41 | Forms 11–20 in all-new scenarios: bank account, bike rental, campsite, newspaper order, music school, holiday flat, monthly travel card, lost & found, youth hostel, vet. 3-lens audit; 28 findings fixed (A1 wording, lenient verbatim-copy keys). |
