import React from 'react';
import styled from 'styled-components';

const ProjectCard = (props) => {
  // Styled Components

  const StyledProjectCard = styled.article`
    position: relative;
    margin: 0.5em;
    border: 3px solid var(--green-accent);
    height: 350px;
    width: 350px;
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.1);
    }

    &:hover .project-info {
      opacity: 0.95;
    }
  `;

  const StyledProjectInfo = styled.div`
    justify-content: space-evenly;
    background-color: var(--background);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: all 0.5s ease;
  `;

  const StyledProjectImage = styled.img`
    height: 100%;
  `;

  const StyledCardContentContainer = styled.p`
    text-align: center;
    margin: 0 1rem;
  `;

  const StyledProjectLink = styled.a`
    background-color: var(--red-accent);
    transition: all 0.5s ease;

    &:hover {
      background-color: var(--green-accent);
    }
  `;

  return (
    <StyledProjectCard className="project-card">
      <picture>
        <source srcSet={props.srcSet} type="image/webp" />
        <StyledProjectImage
          className="project-image"
          height="350px"
          width="350px"
          src={props.image}
          alt={props.alt}
        />
      </picture>
      <StyledProjectInfo className="project-info flex-item flex-column">
        <h3 className="base-text">{props.name}</h3>
        <StyledCardContentContainer className="green-text quicksand card-content">
          {props.description}
        </StyledCardContentContainer>
        <StyledCardContentContainer className="green-text card-content">
          {props.tech}
        </StyledCardContentContainer>
        <StyledProjectLink
          className="link light-text project-link"
          href={props.gitHub}
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub
        </StyledProjectLink>
        {/* Done this way to avoid users going to the undeployed app (because it looks like Google, when deployed, users receive a warning that it is unsafe) */}
        {props.name === 'Google Homepage Recreation' ? (
          ''
        ) : (
          <StyledProjectLink
            className="link light-text project-link"
            href={props.live}
            target="_blank"
            rel="noreferrer"
          >
            See Live App
          </StyledProjectLink>
        )}
      </StyledProjectInfo>
    </StyledProjectCard>
  );
};

export default ProjectCard;
