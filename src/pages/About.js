import React from 'react';
import styled from 'styled-components';
import Skills from '../components/Skills';

const About = () => {
  // Styled Components

  const StyledAboutIntro = styled.section`
    justify-content: space-evenly;
    margin: 4em auto;

    @media screen and (max-width: 768px) {
      height: auto;
      margin: 2em auto;
    }
  `;

  const StyledTopIntroContainer = styled.div`
    width: 85%;
    justify-content: space-between;

    @media screen and (max-width: 992px) {
      width: 100%;
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  `;

  const StyledSkillsSection = styled.section`
    background-color: rgb(244, 245, 244);
    margin: 4rem 0;
    padding: 0 0 2rem 0;
  `;

  const StyledAboutTextContainer = styled.div`
    width: 50%;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  `;

  return (
    <main className="content-container">
      <StyledAboutIntro id="about-intro" className="intro container flex-item">
        <StyledTopIntroContainer className="top-intro-container flex-item">
          <picture>
            <source srcSet="https://res.cloudinary.com/dydjenltr/image/upload/c_scale,h_625,q_auto/v1633135163/Portfolio%20Images/tucker-photo-3_a2ngp1.webp" />
            <img
              className="tucker-photo"
              src="./assets/images/tucker-photo-3.png"
              alt="Tucker wearing a cat sweatshirt and cat blazer"
            />
          </picture>
          <StyledAboutTextContainer
            id="about-text-container"
            className="flex-item flex-column"
          >
            <h1 className="base-text">A bit about me</h1>
            <p className="base-text">
              My background is education - I have taught music for 4 years, with
              a 4-year break from music teaching to teach ESL in South Korea.
              While music is something I plan to enjoy forever, I realized some
              time ago that public school teaching is not.
            </p>
            <p className="base-text">
              As someone who always loved technology, but was too deeply
              involved in the pursuit of a career in music, I long viewed the
              field of technology as something not meant for a musician like me.
              Now, rather than simply benefiting from advances in technology, I
              plan to contribute.
            </p>
          </StyledAboutTextContainer>
        </StyledTopIntroContainer>
      </StyledAboutIntro>

      <StyledSkillsSection
        id="skills-section"
        className="flex-item flex-column"
      >
        <h2 className="base-text">Some of my skills</h2>
        <Skills />
      </StyledSkillsSection>

      <section className="container flex-item flex-column bottom-of-page-link">
        <a
          id="resume"
          className="see-more-link link resume-link base-text quicksand"
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
