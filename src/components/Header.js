import React from 'react';

const Header = () => {

    return (
        <header>
            <div class="container">
                <nav id="main-nav" class="flex-item nav-links-container">
                    <a id="header-logo" class="logo base-text" href="index.html">T</a>
                    <button id="hamburger-icon" class="hamburger hamburger--collapse" type="button" aria-label="Menu"
                        aria-controls="navigation" aria-expanded="false">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                    <div id="nav-links">
                        <ul id="nav-menu" class="flex-item nav-list">
                            <li class="main-nav-item nav-item"><a class="link green-link base-text" href="index.html">Home</a></li>
                            <li class="main-nav-item nav-item"><a class="link green-link base-text"
                                    href="about.html">About</a></li>
                            <li class="main-nav-item nav-item"><a class="link green-link base-text"
                                    href="projects.html">Projects</a></li>
                            <li id="contact-link" class="main-nav-item nav-item"><a class="link green-link base-text"
                                    href="#contact">Contact</a></li>
                        </ul>
                    </div>

                </nav>
            </div>
        </header>
    );
};

export default Header;