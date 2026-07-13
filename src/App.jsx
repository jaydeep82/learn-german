import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';

/**
 * Every page is a lazy route (roadmap C6): the entry bundle carries only the
 * shell (Layout + AppContext + scheduling core), while heavyweight data —
 * the 50-day curriculum, the 2,400-word lists, the exam modules — loads with
 * the routes that use it. The PWA precaches all chunks, so offline and
 * stale-deploy navigation keep working.
 */
const Home = lazy(() => import('./pages/Home.jsx'));
const DayLesson = lazy(() => import('./pages/DayLesson.jsx'));
const Review = lazy(() => import('./pages/Review.jsx'));
const DailyReview = lazy(() => import('./pages/DailyReview.jsx'));
const Vocabulary = lazy(() => import('./pages/Vocabulary.jsx'));
const Practice = lazy(() => import('./pages/Practice.jsx'));
const Exam = lazy(() => import('./pages/Exam.jsx'));
const Lesen = lazy(() => import('./pages/Lesen.jsx'));
const Schreiben = lazy(() => import('./pages/Schreiben.jsx'));
const Hoeren = lazy(() => import('./pages/Hoeren.jsx'));
const Sprechen = lazy(() => import('./pages/Sprechen.jsx'));
const Mock = lazy(() => import('./pages/Mock.jsx'));
const Drills = lazy(() => import('./pages/Drills.jsx'));
const Readiness = lazy(() => import('./pages/Readiness.jsx'));
const Progress = lazy(() => import('./pages/Progress.jsx'));
const ExamFormats = lazy(() => import('./pages/ExamFormats.jsx'));
const Grammar = lazy(() => import('./pages/Grammar.jsx'));
const Checklist = lazy(() => import('./pages/Checklist.jsx'));
const Phrases = lazy(() => import('./pages/Phrases.jsx'));
const Cheatsheet = lazy(() => import('./pages/Cheatsheet.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Settings = lazy(() => import('./pages/Settings.jsx'));

function PageLoading() {
  return (
    <div className="flex items-center justify-center py-24" role="status" aria-label="Loading page">
      <span className="text-3xl animate-pulse" aria-hidden>🇩🇪</span>
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/day/:dayId" element={<DayLesson />} />
          <Route path="/daily" element={<DailyReview />} />
          <Route path="/review/:kind" element={<Review />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/practice/:preset" element={<Practice />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/lesen" element={<Lesen />} />
          <Route path="/schreiben" element={<Schreiben />} />
          <Route path="/hoeren" element={<Hoeren />} />
          <Route path="/sprechen" element={<Sprechen />} />
          <Route path="/mock" element={<Mock />} />
          <Route path="/mock/:paperId" element={<Mock />} />
          <Route path="/drills" element={<Drills />} />
          <Route path="/drills/forms/:formId" element={<Drills />} />
          <Route path="/drills/:key" element={<Drills />} />
          <Route path="/readiness" element={<Readiness />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/exam-formats" element={<ExamFormats />} />
          <Route path="/grammar" element={<Grammar />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/phrases" element={<Phrases />} />
          <Route path="/cheatsheet/:slug" element={<Cheatsheet />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
