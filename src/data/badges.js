/**
 * Badges are awarded server-less from progress state. Each predicate
 * receives the current state object and returns a boolean. Day-id
 * ranges below mirror the 40-day curriculum (v2.0.0+).
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
    when: (s) => [8,9,10,11,12,13,14,15].every((d) => (s.completed?.[d]?.score ?? 0) >= 0.7),
  },
  {
    id: 'week-3',        emoji: '❓',
    title: 'Question Master', desc: 'Pass every Week 3 lesson (questions + numbers).',
    when: (s) => [16,17,18,19,20].every((d) => (s.completed?.[d]?.score ?? 0) >= 0.7),
  },
  {
    id: 'week-4',        emoji: '🥇',
    title: 'Cases Crusher', desc: 'Pass every Week 4 lesson (Akkusativ + Dativ).',
    when: (s) => [21,22,23,24,25,26,27].every((d) => (s.completed?.[d]?.score ?? 0) >= 0.7),
  },
  {
    id: 'week-5',        emoji: '👨‍👩‍👧',
    title: 'People & Life', desc: 'Pass every Week 5 lesson.',
    when: (s) => [28,29,30,31,32,33].every((d) => (s.completed?.[d]?.score ?? 0) >= 0.7),
  },
  {
    id: 'week-6',        emoji: '🎖️',
    title: 'Real-Life Ready', desc: 'Pass every Week 6 lesson (scenarios + negation).',
    when: (s) => [34,35,36,37,38].every((d) => (s.completed?.[d]?.score ?? 0) >= 0.7),
  },
  {
    id: 'perfect-day',   emoji: '💎',
    title: 'Flawless', desc: 'Score 100% on any day.',
    when: (s) => Object.values(s.completed || {}).some((c) => c.score >= 0.999),
  },
  {
    id: 'graduate',      emoji: '🎓',
    title: 'Deutsch40 Graduate', desc: 'Pass the final exam ≥ 80%.',
    when: (s) => (s.completed?.[40]?.score ?? 0) >= 0.8,
  },
];
