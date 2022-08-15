import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Testimonial from "./components/testimonial/Testimonial";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import Services from "./components/services/Services";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <About />
      <Experience />
      <Services />
      <Contact />
    </>
  );
}

export default App;
