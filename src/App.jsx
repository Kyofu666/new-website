import React from "react";
import "./style/style.css";
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills.jsx"

function App() {

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
