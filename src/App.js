import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserInfo from './pages/UserInfo';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:userId" element={<UserInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
