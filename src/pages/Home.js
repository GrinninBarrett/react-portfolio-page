import React from 'react';

const Home = () => {
    return (
        <main>
            <section id="intro" className="intro container flex-item flex-column">
                <div className="top-intro-container flex-item">
                    <div id="heading-container">
                        <h1 className="base-text">Hey! I'm Tucker Barrett.</h1>
                        <p id="description" className="base-text quicksand">A full stack web developer</p>
                    </div>
                    <picture className="tucker-photo-container">
                        <source srcSet="https://res.cloudinary.com/dydjenltr/image/upload/q_auto/v1633134190/Portfolio%20Images/tucker-photo_rlk93d.webp" />
                        <img className="tucker-photo" src="assets/images/tucker-photo.png"
                            height="350px" width="350px" alt="Tucker Barrett, smiling while on a hike in Korea" />
                    </picture>
                </div>
                <div id="bottom-intro-container" className="flex-item flex-column">
                    <p id="slogan" className="base-text">Pursuing my passion for building responsive, accessible web sites and
                        applications</p>
                    <a href="about.html" id="learn-more" className="link green-link base-text quicksand">Learn More About Me</a>
                </div>

            </section>

            <section id="recent-projects" className="container flex-item flex-column">
                <h2 id="recent-projects-heading" className="base-text">Recent Projects</h2>
                <div id="recent-project-cards-container" className="flex-item project-cards-container">
                    {/* <!-- This content will be added dynamically from main.js --> */}
                </div>
                <a className="link green-link base-text quicksand" href="./projects.html">All Projects</a>
            </section>

            <section id="contact" className="container flex-item flex-column">
                <div className="flex-item flex-column">
                    <h2 className="base-text">Get in touch!</h2>
                    <p className="base-text">Feel free to drop a line any time, whether you want to work together, hire me, or just
                        to chat!
                        Send me an email at ctbarrett.tech@gmail.com!
                    </p>
                </div>
                <a id="resume" className="link green-link base-text quicksand" href="./assets/images/CTB-Resume.pdf" 
                    download="Tucker-Barrett-Resume.pdf">Download My Resume</a>
            </section>
        </main>
    );
};

export default Home;