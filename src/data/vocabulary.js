import { days } from './curriculum.js';

/** Flatten every vocabulary list into one searchable index. */
export const allVocab = days.flatMap((d) =>
  (d.vocabulary || []).map((v) => ({ ...v, day: d.id, week: d.week, topic: d.title }))
);

/** Group by topic for the Vocabulary page. */
export const vocabByTopic = days
  .filter((d) => (d.vocabulary || []).length)
  .map((d) => ({ day: d.id, week: d.week, title: d.title, emoji: d.emoji, items: d.vocabulary }));
