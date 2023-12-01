import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  gym1,
  jobit,
  tripguide,
  threejs,
  Vvork,
  Zoom,
  home,
  dog,
  Sapphire,
  amazon,
  Restudent,
  lho,
  mao,
  vu,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front End Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: reactjs,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Node.js Developer",
    icon: nodejs,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend / React.js Developer",
    company_name: "Vvork Cloud Technology",
    icon: Vvork,
    iconBg: "#383E56",
    date: "Jun 2022  -  Apr 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN Stack Developer / NodeJS Developer",
    company_name: "Zoom IT Solutions",
    icon: Zoom,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Nov 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },


];

const education = [
  {
    title: "BSCS",
    company_name: "Virtual University Of Pakistan",
    icon: vu,
    iconBg: "#383E56",
    date: " 2021  -  Present",
  },
  {
    title: "ICS (Computer Science)",
    company_name: "Government M.A.O. College Lahore",
    icon: mao,
    iconBg: "#E6DEDD",
    date: " 2019 - 2021",
  },
  {
    title: "Higher Secondary Education",
    company_name: "Lahore Model School",
    icon: lho,
    iconBg: "#E6DEDD",
    date: " 2009 - 2019",

  },


];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "GYM",
    description:
      "This project aims to build an employee management system that consolidates all information of a company. I was the front-end developer and programmed features like voice search or print to PDF. The design was created with Figma. The website is responsive and mobile-optimized.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Bootsrap",
        color: "pink-text-gradient",
      },
    ],
    image: gym1,
    source_code_link: "https://github.com/Farukhayaz/GYM",
    live_web_view: "https://fantastic-marigold-439e3d.netlify.app/",
  },
  {
    name: "HOME-LAND",
    description:
      "This project aims to build an employee management system that consolidates all information of a company. A furniture organizer app that we programmed as a duo team with React, Tailwind CSS . As a gitmaster, I took over the connection of the frontend . The app is responsive and mobile-optimized.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: home,
    source_code_link: "https://github.com/Farukhayaz/Home",
    live_web_view: "https://home-nine-sand.vercel.app/",

  },
  {
    name: "PET-SHOP",
    description:
      "This project aims to build an employee management system that consolidates all information of a company . A furniture organizer app that we programmed as a duo team with HTML, CSS, BOOTESTRAP , Media-Query . As a gitmaster, I took over the connection of the frontend . The app is responsive and mobile-optimized.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: dog,
    source_code_link: "https://github.com/Farukhayaz/Pet-Shop",
    live_web_view: "https://effulgent-raindrop-8072dc.netlify.app/",

  },
  {
    name: "SPPHIRE",
    description:
      "This project aims to build an employee management system that consolidates all information of a company . A furniture organizer app that we programmed as a duo team with React, Tailwind CSS . As a gitmaster, I took over the connection of the frontend . The app is responsive and mobile-optimized.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: Sapphire,
    source_code_link: "https://github.com/Farukhayaz/Sapphire",
    live_web_view: "https://sapphir.netlify.app/",

  },
  {
    name: "Amazon Shop",
    description:
      "This project aims to build an  React, MongoDB, Javascript, Tailwind, React-Bootstrap, Express and Node.js. Backend with connection using a restful API and to model the database in MongoDB.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "React Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "green-text-gradient",
      },
      {
        name: "Payment Integration",
        color: "pink-text-gradient",
      },
    ],
    image: amazon,
    source_code_link: "https://github.com/Farukhayaz/amazona",
    live_web_view: " https://agile-jade-coati.cyclic.app/"
  },
  {
    name: "RESTAURANT",
    description:
      "This project aims to build an employee management system that consolidates all information of a company. A furniture organizer app that we programmed as a duo team with HTML,  CSS . As a gitmaster, I took over the connection of the frontend . The app is responsive and mobile-optimized.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: Restudent,
    source_code_link: "https://github.com/Farukhayaz/RESTAURANT",
    live_web_view: " https://hilarious-marigold-ffbbf7.netlify.app/"

  },

];

export { services, technologies, experiences, testimonials, projects, education };
