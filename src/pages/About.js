import React from "react";

const About = () => {
  return (
    <main className="content-container">
      <section id="about-intro" className="intro container flex-item">
        <div className="top-intro-container flex-item">
          <picture>
            <source srcSet="https://res.cloudinary.com/dydjenltr/image/upload/c_scale,h_625,q_auto/v1633135163/Portfolio%20Images/tucker-photo-3_a2ngp1.webp" />
            <img
              className="tucker-photo"
              src="./assets/images/tucker-photo-3.png"
              alt="Tucker wearing a cat sweatshirt and cat blazer"
            />
          </picture>
          <div id="about-text-container" className="flex-item flex-column">
            <h1 className="base-text">A bit about me</h1>
            <p className="base-text">
              My background is education - I have taught music for 4 years, with
              a 4-year break in the middle to live in South Korea and teach ESL.
              While music is something I plan to enjoy forever, I realized some
              time ago that public school teaching is not.
            </p>
            <p className="base-text">
              As someone who always loved tech, but was too deeply involved in
              the pursuit of a career in music, I long viewed the field of
              technology as something not meant for a musical creative like me.
              I've realized, now, that I was very wrong. Now, rather than simply
              benefiting from advances in technology, I plan to contribute.
            </p>
          </div>
        </div>
      </section>

      <section className="container flex-item flex-column">
        <a
          id="resume"
          className="see-more-link link green-link base-text quicksand"
          href="./assets/resume/CTB-Resume.pdf"
          download="CTB-Resume.pdf"
        >
          Download My Resume
        </a>
      </section>
    </main>
  );
};

export default About;
