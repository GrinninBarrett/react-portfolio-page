import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Skills from '../components/Skills';

import ProjectCard from '../components/ProjectCard';

const Home = ({ featuredProjects }) => {
  // Styled Components

  const StyledMain = styled.main`
    min-height: 80vh;
  `;

  const StyledMainIntro = styled.section`
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

  const StyledHeadingContainer = styled.div`
    @media screen and (max-width: 768px) {
      text-align: center;
      margin-top: 0;
    }
  `;

  const StyledSelfDescription = styled.p`
    font-size: 1.5em;

    @media screen and (max-width: 992px) {
      font-size: 1.2em;
    }
  `;

  const StyledSlogan = styled.p`
    font-size: 1.2em;
  `;

  const StyledBottomIntroContainer = styled.div`
    justify-content: center;
    margin-top: 4em;

    @media screen and (max-width: 768px) {
      text-align: center;
    }
  `;

  const StyledLandingLinksContainer = styled.div`
    width: 100%;
    margin-top: 2rem;
    justify-content: space-evenly;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  `;

  const StyledSkillsSection = styled.section`
    background-color: rgb(244, 245, 244);
    margin: 6rem 0 4rem 0;
    padding: 0 0 2rem 0;
  `;

  const StyledProjectCardsContainer = styled.div`
    flex-wrap: wrap;
    justify-content: center;
  `;

  return (
    <StyledMain>
      <StyledMainIntro
        id="intro"
        className="intro container flex-item flex-column"
      >
        <StyledTopIntroContainer className="top-intro-container flex-item">
          <StyledHeadingContainer id="heading-container">
            <h1 className="base-text">Hey! I'm Tucker Barrett.</h1>
            <StyledSelfDescription
              id="description"
              className="base-text quicksand"
            >
              A full stack web developer
            </StyledSelfDescription>
          </StyledHeadingContainer>
          <picture className="tucker-photo-container">
            <source srcSet="https://res.cloudinary.com/dydjenltr/image/upload/q_auto/v1633134190/Portfolio%20Images/tucker-photo_rlk93d.webp" />
            <img
              className="tucker-photo"
              src="assets/images/tucker-photo.png"
              alt="Tucker Barrett, smiling while on a hike in Korea"
            />
          </picture>
        </StyledTopIntroContainer>
        <StyledBottomIntroContainer
          id="bottom-intro-container"
          className="flex-item flex-column"
        >
          <StyledSlogan id="slogan" className="base-text">
            Pursuing my passion for building responsive, accessible web sites
            and applications
          </StyledSlogan>
          <StyledLandingLinksContainer className="flex-item landing-links">
            <Link
              id="learn-more"
              className="link see-more-link base-text quicksand"
              to="/about"
            >
              Learn More About Me
            </Link>
            <a
              id="resume"
              className="see-more-link link green-link base-text quicksand"
              href="./assets/resume/CTB-Resume.pdf"
              download="CTB-Resume.pdf"
            >
              Download My Resume
            </a>
          </StyledLandingLinksContainer>
        </StyledBottomIntroContainer>
      </StyledMainIntro>

      <StyledSkillsSection
        id="skills-section"
        className="flex-item flex-column"
      >
        <h2 className="base-text">Some of my skills</h2>
        <Skills />
      </StyledSkillsSection>

      <section id="recent-projects" className="container flex-item flex-column">
        <h2 id="recent-projects-heading" className="base-text">
          Recent Projects
        </h2>

        <StyledProjectCardsContainer
          id="recent-project-cards-container"
          className="flex-item project-cards-container"
        >
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              srcSet={project.primarySource}
              image={project.image}
              alt={project.alt}
              name={project.name}
              tech={project.technologies}
              gitHub={project.gitHub}
              live={project.liveURL}
              description={project.description}
            />
          ))}
        </StyledProjectCardsContainer>
        <div className="all-projects-link-container flex-item">
          <Link
            className="see-more-link link base-text quicksand bottom-of-page-link"
            to="/projects"
          >
            See All Projects
          </Link>
        </div>
      </section>
    </StyledMain>
  );
};

export default Home;
