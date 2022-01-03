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
        <p className="green-text quicksand card-content">{props.description}</p>
        <p className="green-text card-content">{props.tech}</p>
        <a
          className="link light-text project-link"
          href={props.gitHub}
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub
        </a>
        {props.name === 'Google Homepage Recreation' ? (
          <div className="link light-text project-link">See Live App</div>
        ) : (
          <a
            className="link light-text project-link"
            href={props.live}
            target="_blank"
            rel="noreferrer"
          >
            See Live App
          </a>
        )}
      </StyledProjectInfo>
    </StyledProjectCard>
  );
};

export default ProjectCard;
