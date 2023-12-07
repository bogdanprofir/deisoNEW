import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Analytics />
      <Cards />
      <ContactForm />
      <Footer />
      <ScrollToTop smooth className="flex items-center justify-center bg-white"/>
      
    </div>
  );
}

export default App;
