import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import ProjectsPage from './pages/ProjectsPage';
import ErrorBoundary from './components/ErrorBoundary';
import usePageAnalytics from './hooks/usePageAnalytics';

const AnalyticsTracker = () => {
  usePageAnalytics();
  return null;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <AnalyticsTracker />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
