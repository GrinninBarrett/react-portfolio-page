import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { allProjects, featuredProjects } from "./projectList";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
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

      <Footer />
    </Router>
  );
}

export default App;
