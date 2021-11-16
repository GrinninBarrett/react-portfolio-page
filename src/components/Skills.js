import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { skills } from "../utils/skillsList";

const Skills = () => {
  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    480: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1024: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  };

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

  return (
    <AliceCarousel mouseTracking items={skillsImages} responsive={responsive} />
  );
};

export default Skills;
