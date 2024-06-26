import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import RelaxPage from './pages/RelaxMassage';
import SportPage from './pages/SportMassage';
import MeetTheOwner from './pages/MeetTheOwner';
import Appointments from './pages/Appointments';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-cyan-800">
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route index path="ReactMassageWebsite/home" element={<HomePage />} />
        <Route
          path="ReactMassageWebsite/relax-massage"
          element={<RelaxPage />}
        />
        <Route
          path="ReactMassageWebsite/sport-massage"
          element={<SportPage />}
        />
        <Route
          path="ReactMassageWebsite/meet-the-owner"
          element={<MeetTheOwner />}
        />
        <Route
          path="ReactMassageWebsite/appointments"
          element={<Appointments />}
        />
      </Routes>
    </div>
  );
}

export default App;
