import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage'; // Your main landing page
import PricelistPage from './PricelistPage'; // Your pricelist page
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricelistPage" element={<PricelistPage />} />
      </Routes>
    </Router>
  );
}

export default App;
