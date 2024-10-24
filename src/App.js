import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import InventoryPage from './components/InventoryPage';
import CarDetailPage from './components/CarDetailPage';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/car/:id" element={<CarDetailPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;