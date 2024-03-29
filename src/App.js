import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import Burger from './components/Burger';
import MobileNav from './components/MobileNav';

import { allProjects, featuredProjects } from './utils/projectList';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(`
                   ,------------------------,    
                  |                          |
     /\\_/\\        | I'm really good at this! |
    ( o.o )    /  |                          |
     > ^ <    /   |     Please hire me!      |
    /  ~  \\  /    |                          |
                   '------------------------'
    `)
  }, [])
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
        <Burger open={open} setOpen={setOpen} aria-label="Menu" />
        <MobileNav open={open} setOpen={setOpen} />
      </div>
    </Router>
  );
}

export default App;
