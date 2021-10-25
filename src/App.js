import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <Router>

      <Header />
      
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>

      <Route exact path="/Projects">
        <Projects />
      </Route>

      <Footer />

    </Router>
  );
}

export default App;
