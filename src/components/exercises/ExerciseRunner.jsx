import { useEffect, useMemo, useState } from 'react';
import Flashcard from './Flashcard.jsx';
import MultipleChoice from './MultipleChoice.jsx';
import FillInBlank from './FillInBlank.jsx';
import DragDropMatch from './DragDropMatch.jsx';
import ConjugationTable from './ConjugationTable.jsx';
import Dialogue from './Dialogue.jsx';
import { ProgressBar } from '../ProgressUI.jsx';
import { useApp } from '../../store/AppContext.jsx';

/**
 * Runs an array of exercise specs in order, tracks score, and emits
 * { correct, total, ratio } when finished.
 *
 * The vocabulary array is passed separately so flashcards can reference
 * `items: 'vocabulary'` instead of duplicating data.
 */
export default function ExerciseRunner({ exercises, vocabulary = [], dayId, onFinish }) {
  const { addXP, recordAnswer, touchStreak } = useApp();
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const list = useMemo(() => exercises || [], [exercises]);
  const current = list[idx];

  useEffect(() => { touchStreak(); }, []); // bump streak on entry

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
      onFinish?.({ ...next, ratio });
    } else {
      setIdx((i) => i + 1);
    }
  };

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
      default:
        return <div className="card">Unknown exercise: {String(current.type)}</div>;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 text-sm text-slate-500">
        <span>Step {idx + 1} of {list.length}</span>
        <span aria-hidden>·</span>
        <span>{score.correct}/{score.total} correct</span>
      </div>
      <ProgressBar value={idx} max={list.length} label="Lesson progress" />
      {renderExercise()}
    </div>
  );
}
