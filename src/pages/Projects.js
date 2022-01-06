import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';

// Styled Components
const StyledMain = styled.main`
  min-height: 80vh;
`;

const StyledProjectCardsContainer = styled.div`
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledBottomOfPageLinkContainer = styled.section`
  width: 50%;
  margin: 6rem auto;
`;

const StyledBottomOfPageLink = styled.a`
  background-color: var(--green-accent);
  color: var(--background);
  padding: 8px 0;
  border-radius: 20px;
  width: 30%;
  text-align: center;

  &:hover {
    background-color: var(--medium-green-accent);
  }

  @media screen and (max-width: 992px) {
    width: 60%;
  }

  @media screen and (max-width: 768px) {
    margin: 1rem auto;
    width: 100%;
  }
`;

// Component function
const Projects = ({ allProjects }) => {
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
      <StyledBottomOfPageLinkContainer className="container flex-item flex-column bottom-of-page-link">
        <StyledBottomOfPageLink
          className="see-more-link link base-text quicksand"
          href="https://github.com/grinninbarrett"
          target="_blank"
          rel="noreferrer"
        >
          See more on GitHub
        </StyledBottomOfPageLink>
      </StyledBottomOfPageLinkContainer>
    </StyledMain>
  );
};

export default Projects;
