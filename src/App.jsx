import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import DayLesson from './pages/DayLesson.jsx';
import Review from './pages/Review.jsx';
import Vocabulary from './pages/Vocabulary.jsx';
import Practice from './pages/Practice.jsx';
import Exam from './pages/Exam.jsx';
import Lesen from './pages/Lesen.jsx';
import Schreiben from './pages/Schreiben.jsx';
import Hoeren from './pages/Hoeren.jsx';
import Sprechen from './pages/Sprechen.jsx';
import Mock from './pages/Mock.jsx';
import ExamFormats from './pages/ExamFormats.jsx';
import Grammar from './pages/Grammar.jsx';
import Cheatsheet from './pages/Cheatsheet.jsx';
import About from './pages/About.jsx';
import Settings from './pages/Settings.jsx';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day/:dayId" element={<DayLesson />} />
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
        <Route path="/exam-formats" element={<ExamFormats />} />
        <Route path="/grammar" element={<Grammar />} />
        <Route path="/cheatsheet/:slug" element={<Cheatsheet />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
