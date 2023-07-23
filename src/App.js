import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import Events from './components/pages/Events';
import Volunteer from './components/pages/Volunteer';
import AboutUs from './components/pages/AboutUs';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/events" element={<Events />}/>
      <Route exact path="/volunteer" element={<Volunteer />}/>
      <Route exact path="/about-us" element={<AboutUs />}/>
      <Route exact path="/sign-up" element={<SignUp />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;