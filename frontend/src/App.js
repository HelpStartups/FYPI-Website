import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/home/home";
import Navbar from "../src/components/navbar/navbar";
import Footer from "../src/components/footer/footer";
import Events from "../src/components/events/events";
import Sponsors from "../src/components/sponsors/sponsors";
import Speakers from "../src/components/speakers/speakers";
import Tickets from "../src/components/tickets/tickets";
import Contact from "../src/components/contact/contact";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
