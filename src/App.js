import react from 'react';
import './App.css';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar.js';

import Info from './Components/Navbar/Pages/Info.js';
import Auth from './Components/Navbar/Pages/Auth/Auth.js';



function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route  path="/" exact element = {<Info />} />
          <Route  path="/auth" exact element = {<Auth />} />    
        </Routes>
      </div>
    </Router>
  );
}

export default App;
