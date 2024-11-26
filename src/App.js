import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage'; // Your main landing page
import PricelistPage from './PricelistPage'; // Your pricelist page
import Products from './Products'; // Your pricelist page
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './Categories'; // Your Categories
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ViewItem from './ViewItem'; // Your ViewItem page


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/pricelistPage" element={<PricelistPage />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/" element={<LandingPage />} />
        <Route path='/Categories' element={<Categories />} />
        <Route path='/ViewItem' element={<ViewItem />} />
      </Routes>
    </Router>
  );
}

export default App;
