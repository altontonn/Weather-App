import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';

function RouteLink() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
export default RouteLink;
