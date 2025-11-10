import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import Academics from './Pages/Academics';
import Departments from './Pages/Department';
import Admissions from './Pages/Admissions';


function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <main className='content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/admissions" element={<Admissions />} />
        
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
