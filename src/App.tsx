import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import MainPage from './Pages/Main';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
