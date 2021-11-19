import React from "react";

// Alice Carousel from https://github.com/maxmarinich/react-alice-carousel
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
    1500: {
        items: 5
    }
  };

  const skillsImages = skills.map((skill) => (
    <div>
      <img
        src={skill.image}
        alt={skill.name}
        onDragStart={handleDragStart}
        role="presentation"
        height="100px"
        width="100px"
      />
      <p>{skill.name}</p>
    </div>

  ));

  return (
    <AliceCarousel
      mouseTracking
      items={skillsImages}
      responsive={responsive}
      autoPlay={true}
      autoPlayInterval={2000}
      infinite={true}
      disableDotsControls={true}
      disableButtonsControls={true}
    />
  );
};

export default Skills;
