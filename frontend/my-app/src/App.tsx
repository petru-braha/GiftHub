import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
