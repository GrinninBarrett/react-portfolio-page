import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <div className="container">
                <nav id="main-nav" className="flex-item nav-links-container">
                    <Link id="header-logo" className="logo base-text" to="/">
                        T
                    </Link>
                    <button id="hamburger-icon" className="hamburger hamburger--collapse" type="button" aria-label="Menu"
                        aria-controls="navigation" aria-expanded="false">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                    <div id="nav-links">
                        <ul id="nav-menu" className="flex-item nav-list">
                            <Link className="main-nav-item nav-item link green-link base-text" to="/">
                                Home
                            </Link>
                            <Link className="main-nav-item nav-item link green-link base-text" to="/about">
                                About
                            </Link>
                            <Link className="main-nav-item nav-item link green-link base-text" to="/projects">
                                Projects
                            </Link>
                            <Link className="main-nav-item nav-item link green-link base-text" to="/">
                                Contact
                            </Link>
                        </ul>
                    </div>

                </nav>
            </div>
        </header>
    );
};

export default Header;