/**
 * Progress-dashboard statistics (roadmap C4). Pure & unit-tested.
 *
 * Activity intensity per day is merged from two eras:
 *   - the explicit activity log (answers/reviews/lessons — authoritative,
 *     recorded from v3.34 on), and
 *   - retroactive proxies for days before the log existed: lesson
 *     completion dates, skill-session dates, and each SRS card's last
 *     review date. A day with a log entry ignores the proxies.
 */
import { todayStr, INTERVALS, MAX_LEVEL } from './srsCore.js';
import { SKILLS } from './readiness.js';

/** date -> intensity points, merged from the log + retro proxies. */
export function activityMap(state = {}, opts = {}) {
  const map = {};
  const log = state.activity || {};
  const add = (d, n) => { if (d && n > 0) map[d] = (map[d] || 0) + n; };

  for (const d in log) {
    const e = log[d] || {};
    add(d, (e.answers || 0) + (e.reviews || 0) + (e.lessons || 0) * 5);
  }
  // Retro proxies only for days the log knows nothing about.
  for (const dayId in (state.completed || {})) {
    const at = state.completed[dayId]?.completedAt;
    if (at && !log[at]) add(at, 8);
  }
  for (const skill in (state.skillResults || {})) {
    for (const e of state.skillResults[skill] || []) {
      if (e.d && !log[e.d]) add(e.d, e.t || 5);
    }
  }
  if (!opts.skipSrs) {
    for (const de in (state.srs || {})) {
      const last = state.srs[de]?.last;
      if (last && !log[last]) add(last, 1);
    }
  }
  return map;
}

/** 0..4 heat bucket for a day's intensity points. */
export function heatBucket(count) {
  if (count <= 0) return 0;
  if (count < 5) return 1;
  if (count < 15) return 2;
  if (count < 30) return 3;
  return 4;
}

/**
 * Calendar grid for the heat-map: an array of weeks (columns), each an array
 * of 7 days Mon→Sun: { date, count }. Ends on `today`, starts on the Monday
 * that makes up `weeks` full columns. Future days in the last week are null.
 */
export function heatmapWeeks(map, today, weeks = 16) {
  const end = new Date(`${today}T00:00:00`);
  const start = new Date(end);
  start.setDate(start.getDate() - (weeks * 7 - 1));
  const dow = (start.getDay() + 6) % 7; // Monday = 0
  start.setDate(start.getDate() - dow);

  const out = [];
  let week = [];
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const ds = todayStr(d);
    week.push({ date: ds, count: map[ds] || 0 });
    if (week.length === 7) { out.push(week); week = []; }
  }
  if (week.length) {
    while (week.length < 7) week.push(null); // pad the running week
    out.push(week);
  }
  return out;
}

/** The last `n` recorded skill sessions (any skill), oldest → newest. */
export function sessionTrend(skillResults = {}, n = 12) {
  const all = [];
  for (const s of SKILLS) {
    for (const e of skillResults[s.key] || []) {
      all.push({ skill: s.key, emoji: s.emoji, name: s.name, d: e.d, ratio: e.r ?? (e.t ? e.c / e.t : 0), mock: !!e.mock });
    }
  }
  all.sort((a, b) => (a.d < b.d ? -1 : a.d > b.d ? 1 : 0));
  return all.slice(-n);
}

/** Words per SRS level (0..MAX_LEVEL) — the memory pipeline. */
export function levelHistogram(srs = {}) {
  const counts = Array.from({ length: MAX_LEVEL + 1 }, () => 0);
  for (const de in srs) {
    const l = srs[de]?.level;
    if (l >= 0 && l <= MAX_LEVEL) counts[l] += 1;
  }
  return counts.map((count, level) => ({
    level,
    count,
    intervalDays: INTERVALS[level],
  }));
}
