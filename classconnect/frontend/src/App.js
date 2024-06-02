// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Dashboard from './components/dashboard';
import Students from './components/students';
import Communication from './components/communication';
import Home from './components/home'; // Novo componente
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/communication" element={<Communication />} />
      </Routes>
    </Router>
  );
};

export default App;
