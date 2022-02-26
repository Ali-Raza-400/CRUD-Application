import React from 'react';
import Adduser from './components/Adduser';
import Alluser from './components/Alluser';
import LandingData from './components/LandingData';
import Navbar from './components/Navbar';
import Notfound from './components/Notfound';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import EditUser from './components/EditUser';

function App() {
  return (
  

    <Router>
    
    <Navbar />
    <Routes>

      <Route path="/" element={<LandingData/>} />
      <Route path="/add" element={<Adduser/>} />
      <Route path="/all" element={<Alluser/>} />
      <Route path="*" element={<Notfound />} />
      <Route path ="/edit/:id" element={<EditUser/>}/>
      </Routes>
    </Router>
  );
}

export default App;
