import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
