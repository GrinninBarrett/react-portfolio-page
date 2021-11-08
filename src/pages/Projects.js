import React from "react";

import ProjectCard from "../components/ProjectCard";

const Projects = ({ allProjects }) => {
  return (
    <main>
      <section id="recent-projects" className="container flex-item flex-column">
        <h2 id="recent-projects-heading" className="base-text">
          Recent Projects
        </h2>

        <div
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
        </div>
      </section>
      <section className="container flex-item flex-column">
        <a
          className="see-more-link link green-link base-text quicksand"
          href="https://github.com/grinninbarrett"
          target="_blank"
          rel="noreferrer"
        >
          See more on GitHub
        </a>
      </section>
    </main>
  );
};

export default Projects;
