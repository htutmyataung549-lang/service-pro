import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Company from "./components/Company";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Company />
      <Service />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
