import React from "react"; // Import Navbar component
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Course from "./components/Course";
import Images from "./components/Images";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="courses">
        <Course />
      </div>
      <div id="images">
        <Images />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </main>
  );
}

export default App;
