import React from "react";

const ProjectCard = (props) => {
  return (
    <article className="project-card">
      <picture>
        <source srcSet={props.srcSet} type="image/webp" />
        <img
          className="project-image"
          height="350px"
          width="350px"
          src={props.image}
          alt={props.alt}
        />
      </picture>
      <div className="project-info flex-item flex-column">
        <h3 className="base-text">{props.name}</h3>
        <p className="green-text card-tech">{props.tech}</p>
        <a
          className="link light-text project-link"
          href={props.gitHub}
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub
        </a>
        <a
          className="link light-text project-link"
          href={props.live}
          target="_blank"
          rel="noreferrer"
        >
          See Live App
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
