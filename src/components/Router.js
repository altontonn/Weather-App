import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Details from './Details';

function RouteLink() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
}
export default RouteLink;
