import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Travel from './pages/Travel';
import Wardrobe from './pages/Wardrobe';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-royal-sand text-royal-slate font-sans selection:bg-royal-gold selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/wardrobe" element={<Wardrobe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
