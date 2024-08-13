import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialLink from './components/SocialLink'
import About from './components/About'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

        </Routes>
        <Footer />
      </div>
      <SocialLink/>
    </Router>
  );
}

export default App;
