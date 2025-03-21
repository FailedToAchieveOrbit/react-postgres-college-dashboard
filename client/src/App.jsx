import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import './App.css';

// Lazy load components
const CollegeDashboard = lazy(() => import('./components/CollegeDashboard'));
const CourseDetails = lazy(() => import('./components/CourseDetails'));
const StudentDirectory = lazy(() => import('./components/StudentDirectory'));

function App() {
  return (
    <Router>
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path="/" element={<CollegeDashboard />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/students" element={<StudentDirectory />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
