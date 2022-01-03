import React from 'react';
import styled from 'styled-components';

import ProjectCard from '../components/ProjectCard';

const Projects = ({ allProjects }) => {
  // Styled Components

  const StyledMain = styled.main`
    min-height: 80vh;
  `;

  const StyledProjectCardsContainer = styled.div`
    flex-wrap: wrap;
    justify-content: center;
  `;

  return (
    <StyledMain>
      <section id="recent-projects" className="container flex-item flex-column">
        <h2 id="recent-projects-heading" className="base-text">
          Recent Projects
        </h2>

        <StyledProjectCardsContainer
          id="recent-project-cards-container"
          className="flex-item project-cards-container"
        >
          {allProjects.map((project) => (
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
      </section>
      <section className="container flex-item flex-column bottom-of-page-link">
        <a
          className="see-more-link link base-text quicksand"
          href="https://github.com/grinninbarrett"
          target="_blank"
          rel="noreferrer"
        >
          See more on GitHub
        </a>
      </section>
    </StyledMain>
  );
};

export default Projects;
