import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Burger from "./components/Burger";
import MobileNav from "./components/MobileNav"

import { allProjects, featuredProjects } from "./projectList";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <Router>
      <Header />

      <Route exact path="/">
        <ScrollToTop />
        <Home featuredProjects={featuredProjects} />
      </Route>

      <Route exact path="/about">
        <ScrollToTop />
        <About />
      </Route>

      <Route exact path="/projects">
        <ScrollToTop />
        <Projects allProjects={allProjects} />
      </Route>

      <Route exact path="/contact">
        <ScrollToTop />
        <Contact />
      </Route>

      <Footer />
      <div>
          <Burger open={open} setOpen={setOpen} />
          <MobileNav open={open} setOpen={setOpen} />
      </div>
    </Router>
  );
}

export default App;
