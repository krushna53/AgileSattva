import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/Home";
import Offerings from "./pages/Offerings/Offerings";
import About from "./pages/about/About";
import WhatsNew from "./pages/whatsnew/WhatsNew";
import ContactUs from "./pages/contactus/ContactUs";
import "../src/dist/aos.css";
import { Helmet } from "react-helmet";
import OfferingsPage from "./components/OfferingsPage";

import "./App.css";

const App = () => {
  return (
    <>
      {/* Google Tag Manager Script in Head */}
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
        <AppContent />
      </BrowserRouter>
    </>
  );
};

// Component that renders Navbar, Footer conditionally
const AppContent = () => {
  const location = useLocation(); // Hook to get the current route location

  // List of routes that should not have Navbar and Footer
  const noNavbarFooterRoutes = [
    "/offerings/agile-consulting",
    "/offerings/agile-consulting-2",
    "/offerings/agile-consulting-3",
  ];

  const isNoNavbarFooter = noNavbarFooterRoutes.includes(location.pathname);

  return (
    <>
      {/* Conditionally render Navbar and Footer */}
      {!isNoNavbarFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="offerings" element={<Offerings />} />
        <Route path="about" element={<About />} />
        <Route path="Whats-New" element={<WhatsNew />} />
        <Route path="contact-us" element={<ContactUs />} />

        {/* Route for different iframe sources for static HTML files */}
        <Route path="offerings/:page" element={<OfferingsPage />} />

      </Routes>

      {/* Conditionally render Footer */}
      {!isNoNavbarFooter && <Footer />}
    </>
  );
};

export default App;
