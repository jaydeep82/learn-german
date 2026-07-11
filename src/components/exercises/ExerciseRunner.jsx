import { useEffect, useMemo, useRef, useState } from 'react';
import Flashcard from './Flashcard.jsx';
import MultipleChoice from './MultipleChoice.jsx';
import FillInBlank from './FillInBlank.jsx';
import DragDropMatch from './DragDropMatch.jsx';
import ConjugationTable from './ConjugationTable.jsx';
import Dialogue from './Dialogue.jsx';
import OralPrompt from './OralPrompt.jsx';
// Goethe A1 exam-format tasks
import RichtigFalsch from './RichtigFalsch.jsx';
import PictureMCQ from './PictureMCQ.jsx';
import AdMatch from './AdMatch.jsx';
import FormFill from './FormFill.jsx';
import SpeakingCard from './SpeakingCard.jsx';
import GuidedWriting from './GuidedWriting.jsx';
import { ProgressBar } from '../ProgressUI.jsx';
import { useApp } from '../../store/AppContext.jsx';

/**
 * Runs an array of exercise specs in order, tracks score, and emits
 * { correct, total, ratio } when finished.
 *
 * The vocabulary array is passed separately so flashcards can reference
 * `items: 'vocabulary'` instead of duplicating data.
 */
export default function ExerciseRunner({ exercises, vocabulary = [], dayId, timeLimitSec, onFinish }) {
  const { addXP, recordAnswer, touchStreak } = useApp();
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [remaining, setRemaining] = useState(timeLimitSec ?? null);
  const finishedRef = useRef(false);

  const list = useMemo(() => exercises || [], [exercises]);
  const current = list[idx];

  useEffect(() => { touchStreak(); }, [touchStreak]); // bump streak on entry (stable callback)

  // Optional countdown (mock exam). Tick every second; expiry handled below.
  useEffect(() => {
    if (!timeLimitSec) return undefined;
    const t = setInterval(() => setRemaining((r) => (r == null ? r : r - 1)), 1000);
    return () => clearInterval(t);
  }, [timeLimitSec]);

  // Fire onFinish exactly once — either at the end or when time runs out.
  const finish = (result) => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    onFinish?.(result);
  };

  useEffect(() => {
    if (timeLimitSec && remaining !== null && remaining <= 0) {
      const ratio = score.total ? score.correct / score.total : 0;
      finish({ ...score, ratio, timedOut: true });
    }
  }, [remaining, timeLimitSec]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!current) {
    return (
      <div className="card text-center">
        <p>No exercises configured for this lesson yet.</p>
      </div>
    );
  }

  const handleDone = ({ correct, total }) => {
    const wasCorrect = correct === total && total > 0;
    addXP(Math.max(2, correct * 5));
    recordAnswer(dayId, idx, wasCorrect);
    const next = { correct: score.correct + correct, total: score.total + total };
    setScore(next);
    if (idx + 1 >= list.length) {
      const ratio = next.total ? next.correct / next.total : 0;
      finish({ ...next, ratio });
    } else {
      setIdx((i) => i + 1);
    }
  };

  const mmss = remaining != null
    ? `${Math.floor(Math.max(0, remaining) / 60)}:${String(Math.max(0, remaining) % 60).padStart(2, '0')}`
    : null;

  const renderExercise = () => {
    switch (current.type) {
      case 'flashcards': {
        const items = current.items === 'vocabulary' ? vocabulary : current.items;
        return <Flashcard key={idx} items={items} onDone={handleDone} />;
      }
      case 'multiple-choice':
        return <MultipleChoice key={idx} {...current} onDone={handleDone} />;
      case 'fill-blank':
        return <FillInBlank key={idx} {...current} onDone={handleDone} />;
      case 'match':
        return <DragDropMatch key={idx} pairs={current.pairs} onDone={handleDone} />;
      case 'conjugation':
        return <ConjugationTable key={idx} {...current} onDone={handleDone} />;
      case 'dialogue':
        return <Dialogue key={idx} lines={current.lines} onDone={handleDone} />;
      case 'oral-prompt':
        return <OralPrompt key={idx} prompts={current.prompts} onDone={handleDone} />;
      case 'richtig-falsch':
        return <RichtigFalsch key={idx} {...current} onDone={handleDone} />;
      case 'picture-mcq':
        return <PictureMCQ key={idx} {...current} onDone={handleDone} />;
      case 'ad-match':
        return <AdMatch key={idx} {...current} onDone={handleDone} />;
      case 'form-fill':
        return <FormFill key={idx} {...current} onDone={handleDone} />;
      case 'speaking-card':
        return <SpeakingCard key={idx} {...current} onDone={handleDone} />;
      case 'guided-writing':
        return <GuidedWriting key={idx} {...current} onDone={handleDone} />;
      default:
        return <div className="card">Unknown exercise: {String(current.type)}</div>;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 text-sm text-slate-500">
        {current.label && (
          <span className="font-semibold uppercase tracking-wide text-brand-600 text-xs">{current.label}</span>
        )}
        <span>Step {idx + 1} of {list.length}</span>
        <span aria-hidden>·</span>
        <span>{score.correct}/{score.total} correct</span>
        {mmss && (
          <span className={`ml-auto font-mono font-semibold tabular-nums ${remaining <= 60 ? 'text-rose-600' : 'text-slate-500'}`}
            aria-label="Time remaining">⏱ {mmss}</span>
        )}
      </div>
      <ProgressBar value={idx} max={list.length} label="Lesson progress" />
      {renderExercise()}
    </div>
  );
}
