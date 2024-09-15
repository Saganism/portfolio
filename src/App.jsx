import { useState } from "react";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import BurgerMenu from './components/BurgerMenu';
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero";
import Background from "./components/Background";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Hero />
        <Background />
        <Projects />
        <Contact />
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
