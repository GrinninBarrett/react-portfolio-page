import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { skills } from "../utils/skillsList";

const Skills = () => {
  const handleDragStart = (e) => e.preventDefault();

  const skillsImages = skills.map((skill) => (
    <a href={skill.url}>
      <img
        src={skill.image}
        alt={skill.name}
        onDragStart={handleDragStart}
        role="presentation"
        height="100px"
        width="100px"
      ></img>
    </a>
  ));

  return <AliceCarousel mouseTracking items={skillsImages} />;
};

export default Skills;
