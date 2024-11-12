import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Header/Navbar.js';
import Footer from './components/Footer/Footer.js';
import Home from './pages/home/Home.jsx';
import Offerings from './pages/Offerings/Offerings.js'
import About from './pages/about/About.js'
import WhatsNew from './pages/whatsnew/WhatsNew.js';
import ContactUs from './pages/contactus/ContactUs.js';
import '../src/dist/aos.css';
import { Helmet } from 'react-helmet';

import './App.css'

const App = () => {
  return (
    <>
 {/* Google Tag Manager - Script in Head */}
 <Helmet>
        <script>
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MHRQX28M');
          `}
        </script>
      </Helmet>

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