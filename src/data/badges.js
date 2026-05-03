/**
 * Badges are awarded server-less from progress state. Each predicate
 * receives the current state object and returns a boolean. Day-id
 * ranges below mirror the 50-day curriculum (v3.0.0+).
 */
export const BADGES = [
  {
    id: 'first-lesson',  emoji: '🌱',
    title: 'First Steps', desc: 'Complete your first day.',
    when: (s) => Object.keys(s.completed || {}).length >= 1,
  },
  {
    id: 'streak-3',      emoji: '🔥',
    title: '3-Day Streak', desc: 'Practise three days in a row.',
    when: (s) => (s.streak || 0) >= 3,
  },
  {
    id: 'streak-7',      emoji: '🔥🔥',
    title: 'Week Warrior', desc: 'Seven-day streak.',
    when: (s) => (s.streak || 0) >= 7,
  },
  {
    id: 'streak-30',     emoji: '🚀',
    title: 'Iron Discipline', desc: '30 days in a row.',
    when: (s) => (s.streak || 0) >= 30,
  },
  {
    id: 'xp-100',        emoji: '⭐',
    title: 'Centurion', desc: 'Earn 100 XP.',
    when: (s) => (s.xp || 0) >= 100,
  },
  {
    id: 'xp-500',        emoji: '🌟',
    title: 'XP Hoarder', desc: 'Earn 500 XP.',
    when: (s) => (s.xp || 0) >= 500,
  },
  {
    id: 'xp-1000',       emoji: '💫',
    title: 'XP Legend', desc: 'Earn 1 000 XP.',
    when: (s) => (s.xp || 0) >= 1000,
  },
  {
    id: 'week-1',        emoji: '🥉',
    title: 'Week 1 Cleared', desc: 'Foundations: pass every Week 1 lesson.',
    when: (s) => [1,2,3,4,5,6,7].every((d) => (s.completed?.[d]?.score ?? 0) >= 0.7),
  },
  {
    id: 'week-2',        emoji: '🥈',
    title: 'Sentence Builder', desc: 'Pass every Week 2 lesson.',
    when: (s) => [8,9,10,11,12,13,14].every((d) => (s.completed?.[d]?.score ?? 0) >= 0.7),
  },
  {
    id: 'week-3',        emoji: '❓',
    title: 'Question Master', desc: 'Pass every Week 3 lesson (review, questions, numbers).',
    when: (s) => [15,16,17,18,19,20,21].every((d) => (s.completed?.[d]?.score ?? 0) >= 0.7),
  },
  {
    id: 'week-4',        emoji: '🥇',
    title: 'Cases Crusher', desc: 'Pass every Week 4 lesson (Akkusativ + Dativ articles & verbs).',
    when: (s) => [22,23,24,25,26,27,28].every((d) => (s.completed?.[d]?.score ?? 0) >= 0.7),
  },
  {
    id: 'week-5',        emoji: '👨‍👩‍👧',
    title: 'Pronouns & People', desc: 'Pass every Week 5 lesson (pronouns + life topics).',
    when: (s) => [29,30,31,32,33,34,35].every((d) => (s.completed?.[d]?.score ?? 0) >= 0.7),
  },
  {
    id: 'week-6',        emoji: '🎖️',
    title: 'Modals & Scenarios', desc: 'Pass every Week 6 lesson (modals, glue, scenarios).',
    when: (s) => [36,37,38,39,40,41,42].every((d) => (s.completed?.[d]?.score ?? 0) >= 0.7),
  },
  {
    id: 'week-7',        emoji: '⏪',
    title: 'Time Traveller', desc: 'Pass every Week 7 lesson (past tenses & polite forms).',
    when: (s) => [43,44,45,46,47,48].every((d) => (s.completed?.[d]?.score ?? 0) >= 0.7),
  },
  {
    id: 'perfect-day',   emoji: '💎',
    title: 'Flawless', desc: 'Score 100% on any day.',
    when: (s) => Object.values(s.completed || {}).some((c) => c.score >= 0.999),
  },
  {
    id: 'graduate',      emoji: '🎓',
    title: 'Deutsch30 Graduate', desc: 'Pass the final exam ≥ 80% (Day 50).',
    when: (s) => (s.completed?.[50]?.score ?? 0) >= 0.8,
  },
];
