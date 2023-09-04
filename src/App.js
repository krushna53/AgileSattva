import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Header/Navbar.js';
import Footer from './components/Footer/Footer.js';
import Home from './pages/home/Home.js'
import Offerings from './pages/Offerings/Offerings.js'
import About from './pages/about/About.js'
import WhatsNew from './pages/whatsnew/WhatsNew.js';
import ContactUs from './pages/contactus/ContactUs.js';

import './App.css'

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="offerings" element={<Offerings />} />
          <Route path="about" element={<About />} />
          <Route path="Whats-New" element={<WhatsNew />} />
          <Route path='contact-us' element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App