const allProjects = [
  {
    id: 1,
    name: "CoinBull",
    primarySource:
      "https://res.cloudinary.com/dydjenltr/image/upload/c_scale,h_490,q_auto/v1637466900/Portfolio%20Images/coinbullapp.herokuapp.com__1_i7lcsb.png",
    image: "./assets/images/coinbull.png",
    alt: "CoinBull application",
    gitHub: "https://github.com/GrinninBarrett/CoinBull",
    liveURL: "https://coinbull.herokuapp.com",
    technologies: "React, MongoDB, Mongoose, GraphQL, Bulma, Heroku",
    description: "Get current crypto information and save favorites",
  },
  {
    id: 2,
    name: "Skillet and Shaker",
    primarySource:
      "https://res.cloudinary.com/dydjenltr/image/upload/c_scale,h_530,q_auto/v1633128074/Portfolio%20Images/skillet-and-shaker_ckyafc.webp",
    image: "./assets/images/skillet-and-shaker.png",
    alt: "Skillet and Shaker application",
    gitHub: "https://github.com/GrinninBarrett/recipe-finder",
    liveURL: "https://grinninbarrett.github.io/recipe-finder/",
    technologies: "JavaScript, HTML, CSS/Bulma",
    description: "Find and save food and drink recipes",
  },
  {
    id: 3,
    name: "Book Search Engine",
    primarySource:
      "https://res.cloudinary.com/dydjenltr/image/upload/c_scale,h_465,q_auto/v1637469236/Portfolio%20Images/glacial-stream-35332.herokuapp.com__p29zpm.png",
    image: "./assets/images/book-search-engine.png",
    alt: "Book Search Engine application",
    gitHub: "https://github.com/GrinninBarrett/book-search-engine",
    liveURL: "https://glacial-stream-35332.herokuapp.com/",
    technologies: "GraphQL, MongoDB, Mongoose, Express, React, Heroku",
    description: "Get current crypto information and save favorites",
  },
  {
    id: 4,
    name: "Weather Dashboard",
    primarySource:
      "https://res.cloudinary.com/dydjenltr/image/upload/c_scale,h_527,q_auto/v1633128074/Portfolio%20Images/weather-dashboard_ywoomr.webp",
    image: "./assets/images/weather-dashboard.png",
    alt: "Weather Dashboard application",
    gitHub: "https://github.com/GrinninBarrett/weather-dashboard",
    liveURL: "https://grinninbarrett.github.io/weather-dashboard/",
    technologies: "OpenWeather API, JavaScript, HTML, CSS",
    description: "See weather details and forecasts for your city",
  },

  {
    id: 5,
    name: "Etch-a-Sketch",
    primarySource:
      "https://res.cloudinary.com/dydjenltr/image/upload/c_scale,h_554,q_auto/v1633128048/Portfolio%20Images/etch-a-sketch_wcltnl.webp",
    image: "./assets/images/etch-a-sketch.png",
    alt: "Etch-a-Sketch application",
    gitHub: "https://github.com/GrinninBarrett/etch-a-sketch",
    liveURL: "https://grinninbarrett.github.io/etch-a-sketch/",
    technologies: "JavaScript, HTML, CSS",
    description: "Pixel drawing canvas based on the famous Etch-a-Sketch",
  },

  {
    id: 6,
    name: "Wasted Class Time",
    primarySource:
      "https://res.cloudinary.com/dydjenltr/image/upload/c_scale,h_486,q_auto/v1631213149/Portfolio%20Images/wasted-class-time_rqwdbt.webp",
    image:
      "https://res.cloudinary.com/dydjenltr/image/upload/c_scale,q_auto:low,w_1000/v1631213149/Images/wasted-class-time_rqwdbt.png",
    alt: "Wasted Class Time application",
    gitHub: "https://github.com/GrinninBarrett/wasted-class-time",
    liveURL: "https://grinninbarrett.github.io/wasted-class-time/",
    technologies: "JavaScript, HTML, CSS",
    description:
      "Calculate percentage of class wasted by poor student behavior",
  },

  {
    id: 7,
    name: "Work Day Scheduler",
    primarySource:
      "https://res.cloudinary.com/dydjenltr/image/upload/c_scale,h_527,q_auto/v1633128074/Portfolio%20Images/work-day-scheduler_h7jeof.webp",
    image: "./assets/images/work-day-scheduler.png",
    alt: "Work Day Scheduler application",
    gitHub: "https://github.com/GrinninBarrett/work-day-scheduler",
    liveURL: "https://grinninbarrett.github.io/work-day-scheduler/",
    technologies: "jQuery, Moment.js",
    description: "Create, edit, and delete events or to-dos for your workday",
  },

  {
    id: 8,
    name: "Code Quiz",
    primarySource:
      "https://res.cloudinary.com/dydjenltr/image/upload/c_scale,h_486,q_auto/v1633128074/Portfolio%20Images/code-quiz_hmveas.webp",
    image: "./assets/images/code-quiz.png",
    alt: "Code Quiz application",
    gitHub: "https://github.com/GrinninBarrett/code-quiz",
    liveURL: "https://grinninbarrett.github.io/code-quiz/",
    technologies: "JavaScript, HTML, CSS",
    description: "Interactive quiz to test understanding of JavaScript",
  },

  {
    id: 9,
    name: "Password Generator",
    primarySource:
      "https://res.cloudinary.com/dydjenltr/image/upload/c_scale,h_489,q_auto/v1633128074/Portfolio%20Images/password-generator_bcoihz.webp",
    image: "./assets/images/password-generator.png",
    alt: "Password Generator application",
    gitHub: "https://github.com/GrinninBarrett/password-generator",
    liveURL: "https://grinninbarrett.github.io/password-generator/",
    technologies: "JavaScript",
    description: "Randomly generate a secure password",
  },

  {
    id: 10,
    name: "Rock-Paper-Scissors",
    primarySource:
      "https://res.cloudinary.com/dydjenltr/image/upload/c_scale,h_488,q_auto/v1633128074/Portfolio%20Images/rock-paper-scissors_tyzl9f.webp",
    image: "./assets/images/rock-paper-scissors.png",
    alt: "Rock Paper Scissors application",
    gitHub: "https://github.com/GrinninBarrett/rock-paper-scissors-new",
    liveURL: "https://grinninbarrett.github.io/rock-paper-scissors-new/",
    technologies: "JavaScript, HTML, CSS",
    description: "Play Rock-Paper-Scissors against the computer!",
  },

  {
    id: 11,
    name: "Technical Documentation Page",
    primarySource:
      "https://res.cloudinary.com/dydjenltr/image/upload/c_scale,h_523,q_auto/v1633128074/Portfolio%20Images/technical-documentation-page_quwm4j.webp",
    image: "./assets/images/technical-documentation-page.png",
    alt: "Technical Documentation page",
    gitHub: "https://github.com/GrinninBarrett/Technical-Documentation-Page",
    liveURL: "https://grinninbarrett.github.io/Technical-Documentation-Page/",
    technologies: "HTML, CSS",
    description: "Documentation page to easily find important information",
  },

  {
    id: 12,
    name: "Google Homepage Recreation",
    primarySource: "https://res.cloudinary.com/dydjenltr/image/upload/c_scale,h_459,q_auto/v1637720748/Portfolio%20Images/127.0.0.1_5500_index.html_1_gr6z4i.png",
    image: "./assets/images/google-homepage.png",
    alt: "Google Homepage Recreation",
    gitHub: "https://github.com/GrinninBarrett/google-homepage",
    liveURL: "#",
    technologies: "CSS, HTML",
    description: "Highly accurate visual-only recreation of the Google Homepage"
  }
];

const featuredProjects = [
  // {
  //     id: 1,
  //     name: "Platonic Friends Forever",
  //     primarySource: "https://res.cloudinary.com/dydjenltr/image/upload/c_scale,h_579,q_auto/v1633128074/Portfolio%20Images/platonic-friends-forever_vlggd7.webp",
  //     image: "./assets/images/platonic-friends-forever.png",
  //     alt: "Platonic Friends Forever application",
  //     gitHub: "https://github.com/GrinninBarrett/platonic-friends-forever",
  //     liveURL: "https://pfforever.herokuapp.com/",
  //     technologies: "Express.js, Sequelize/MySQL, Handlebars.js, Materialize",
  //     description: "Social networking app to make new friends with similar interests"
  // },
  {
    id: 1,
    name: "CoinBull",
    primarySource:
      "https://res.cloudinary.com/dydjenltr/image/upload/c_scale,h_490,q_auto/v1637466900/Portfolio%20Images/coinbullapp.herokuapp.com__1_i7lcsb.png",
    image: "./assets/images/coinbull.png",
    alt: "CoinBull application",
    gitHub: "https://github.com/GrinninBarrett/CoinBull",
    liveURL: "https://coinbullapp.herokuapp.com",
    technologies: "React, MongoDB, Mongoose, GraphQL, Bulma, Heroku",
    description: "Get current crypto information and save favorites",
  },
  {
    id: 2,
    name: "Skillet and Shaker",
    primarySource:
      "https://res.cloudinary.com/dydjenltr/image/upload/c_scale,h_530,q_auto/v1633128074/Portfolio%20Images/skillet-and-shaker_ckyafc.webp",
    image: "./assets/images/skillet-and-shaker.png",
    alt: "Skillet and Shaker application",
    gitHub: "https://github.com/GrinninBarrett/recipe-finder",
    liveURL: "https://grinninbarrett.github.io/recipe-finder/",
    technologies: "JavaScript, HTML, CSS/Bulma",
    description: "Find and save food and drink recipes",
  },

  {
    id: 3,
    name: "Book Search Engine",
    primarySource:
      "https://res.cloudinary.com/dydjenltr/image/upload/c_scale,h_465,q_auto/v1637469236/Portfolio%20Images/glacial-stream-35332.herokuapp.com__p29zpm.png",
    image: "./assets/images/book-search-engine.png",
    alt: "Book Search Engine application",
    gitHub: "https://github.com/GrinninBarrett/book-search-engine",
    liveURL: "https://glacial-stream-35332.herokuapp.com/",
    technologies: "GraphQL, MongoDB, Mongoose, Express, React, Heroku",
    description: "Get current crypto information and save favorites",
  },
];

module.exports = { allProjects, featuredProjects };
