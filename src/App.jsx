import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  <>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="courses">
          <Courses />
        </div>
        <div id="reviews">
          <Review />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
  </>;
};

export default App;
