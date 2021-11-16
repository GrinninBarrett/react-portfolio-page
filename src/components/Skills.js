import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { skills } from "../utils/skillsList";

const Skills = () => {
  const handleDragStart = (e) => e.preventDefault();

  return (
    <section>
      {skills.map((skill) => (
        <a href={skill.url}>
          <img src={skill.image} alt={skill.name} onDragStart={handleDragStart} role="presentation"></img>
        </a>
      ))}
    </section>
  );
};

export default Skills;
