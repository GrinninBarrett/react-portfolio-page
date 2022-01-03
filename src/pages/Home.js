import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Skills from '../components/Skills';

import ProjectCard from '../components/ProjectCard';

const Home = ({ featuredProjects }) => {
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

  return (
    <main>
      <section id="intro" className="intro container flex-item flex-column">
        <div className="top-intro-container flex-item">
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
        </div>
        <div id="bottom-intro-container" className="flex-item flex-column">
          <p id="slogan" className="base-text">
            Pursuing my passion for building responsive, accessible web sites
            and applications
          </p>
          <div className="flex-item landing-links">
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
          </div>
        </div>
      </section>

      <section id="skills-section" className="flex-item flex-column">
        <h2 className="base-text">Some of my skills</h2>
        <Skills />
      </section>

      <section id="recent-projects" className="container flex-item flex-column">
        <h2 id="recent-projects-heading" className="base-text">
          Recent Projects
        </h2>

        <div
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
        </div>
        <div className="all-projects-link-container flex-item">
          <Link
            className="see-more-link link base-text quicksand bottom-of-page-link"
            to="/projects"
          >
            See All Projects
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
