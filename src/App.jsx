import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import DayLesson from './pages/DayLesson.jsx';
import Review from './pages/Review.jsx';
import Vocabulary from './pages/Vocabulary.jsx';
import Grammar from './pages/Grammar.jsx';
import Settings from './pages/Settings.jsx';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day/:dayId" element={<DayLesson />} />
        <Route path="/review/:kind" element={<Review />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path="/grammar" element={<Grammar />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
