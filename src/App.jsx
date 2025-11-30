import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      {/* Quando o link for "/", carrega a Home */}
      <Route path="/" element={<Home />} />
      
      {/* Quando o link for "/login", carrega o Login */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;