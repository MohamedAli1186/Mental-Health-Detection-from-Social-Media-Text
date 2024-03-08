import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Disease from './components/pages/Disease';
import SignUp from './components/pages/SignUp';
import Login from './components/pages//Login';
import Help from './components/pages//Help';
import Info from './components/pages//Info';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/info' element={<Info />} />
          <Route path='/help' element={<Help />} />
          <Route path='/login'    element={<Login/>} />
          <Route path='/disease' element={<Disease />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;