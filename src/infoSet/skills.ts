import js from "../assets/javascript-svgrepo-com.svg";
import css from "../assets/css-3-svgrepo-com.svg";
import html from "../assets/html-5-svgrepo-com.svg";
import mongodb from "../assets/mongodb-logo-svgrepo-com.svg";
import next from "../assets/nextjs-svgrepo-com.svg";
import node from "../assets/nodejs-svgrepo-com.svg";
import react from "../assets/react-svgrepo-com.svg";
import redux from "../assets/redux-svgrepo-com.svg";
import tailwind from "../assets/tailwind-svgrepo-com.svg";
import ts from "../assets/typescript-svgrepo-com.svg";

export const skillsData = [
  {
    name: "JavaScript",
    icon: js,
    description:
      "Experienced in writing modern ES6+ JavaScript, building dynamic, user-friendly web applications. Expertise in both front-end and back-end development, with proficiency in handling complex asynchronous tasks, DOM manipulation, and API integration.",
    experience: 4,
    projects: 50,
    proficiency: "Advanced",
    position: { top: "10%", left: "15%" },
  },
  {
    name: "React",
    icon: react,
    description:
      "Skilled in creating highly interactive and responsive front-end applications using React. Familiar with React hooks, context API, and component lifecycle methods. Experience in managing application state with Redux and integrating REST APIs.",
    experience: 4,
    projects: 30,
    proficiency: "Advanced",
    position: { top: "25%", left: "30%" },
  },
  {
    name: "Node.js",
    icon: node,
    description:
      "Expert in developing robust backend services and RESTful APIs with Node.js. Experienced with Express.js, asynchronous programming, and building scalable server-side applications using event-driven architecture.",
    experience: 4,
    projects: 30,
    proficiency: "Advanced",
    position: { top: "40%", left: "10%" },
  },
  {
    name: "TypeScript",
    icon: ts,
    description:
      "Proficient in TypeScript for building safer and more maintainable applications. Expertise in applying static typing to large codebases, enabling early detection of errors and improving code readability and scalability.",
    experience: 2,
    projects: 15,
    proficiency: "Intermediate",
    position: { top: "48%", left: "45%" },
  },
  {
    name: "HTML",
    icon: html,
    description:
      "Extensive experience in creating well-structured and accessible HTML markup. Skilled in following best practices for SEO, semantic HTML, and cross-browser compatibility to build responsive and user-friendly web applications.",
    experience: 4,
    projects: 50,
    proficiency: "Advanced",
    position: { top: "60%", left: "20%" },
  },
  {
    name: "MongoDB",
    icon: mongodb,
    description:
      "Expert in designing and managing NoSQL databases with MongoDB. Familiar with data modeling, aggregation, and optimizing query performance for large datasets in distributed environments.",
    experience: 4,
    projects: 30,
    proficiency: "Advanced",
    position: { top: "70%", left: "40%" },
  },
  {
    name: "Next.js",
    icon: next,
    description:
      "Skilled in developing full-stack web applications using Next.js. Proficient in server-side rendering (SSR), static site generation (SSG), and building optimized, SEO-friendly websites with a focus on performance and scalability.",
    experience: 1,
    projects: 5,
    proficiency: "Advanced",
    position: { top: "75%", left: "65%" },
  },
  {
    name: "Redux",
    icon: redux,
    description:
      "Experienced in managing application state efficiently with Redux, utilizing its middleware and dev tools. Skilled in organizing global state, handling asynchronous actions with Redux Thunk, and creating predictable state containers.",
    experience: 2,
    projects: 10,
    proficiency: "Advanced",
    position: { top: "20%", left: "60%" },
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    description:
      "Expert in using Tailwind CSS to build responsive and custom-styled user interfaces with minimal code. Skilled in utility-first CSS and applying Tailwind's design principles to create clean and maintainable front-end layouts.",
    experience: 4,
    projects: 30,
    proficiency: "Advanced",
    position: { top: "45%", left: "80%" },
  },
  {
    name: "CSS",
    icon: css,
    description:
      "Proficient in writing maintainable and modular CSS for building responsive designs. Skilled in using Flexbox, Grid, and preprocessors like SASS to create pixel-perfect user interfaces with an emphasis on performance and accessibility.",
    experience: 4,
    projects: 50,
    proficiency: "Advanced",
    position: { top: "40%", left: "65%" },
  },
];

export const skillsDetails = {
  Frontend: {
    title: "Frontend Development",
    description:
      "Building responsive and user-friendly interfaces using modern technologies.",
    technologies: [
      {
        name: "React",
        details: "Highly proficient in building single-page applications.",
      },
      {
        name: "Redux",
        details: "Highly proficient in building single-page applications.",
      },
      {
        name: "Next.js",
        details:
          "Experience in server-side rendering and static site generation.",
      },
      {
        name: "TypeScript",
        details: "Strong typing for better code quality and maintainability.",
      },
    ],
  },
  Backend: {
    title: "Backend Development",
    description: "Developing robust server-side applications and APIs.",
    technologies: [
      {
        name: "Node.js",
        details: "Building scalable server-side applications.",
      },
      { name: "Express.js", details: "Creating RESTful APIs with ease." },
      {
        name: "MongoDB",
        details: "Working with NoSQL databases for efficient data storage.",
      },
      {
        name: "Mongoose",
        details: "Working with NoSQL databases for efficient data storage.",
      },
      {
        name: "JWT , OAuth , Firebase",
        details: "Implementing secure authentication methods.",
      },
    ],
  },
  Database: {
    title: "Databases",
    description: "Designing and managing databases for optimal performance.",
    technologies: [
      {
        name: "MongoDB",
        details: "Skilled in schema design and query optimization.",
      },
      {
        name: "Mongoose",
        details: "Using Mongoose for data modeling and validation.",
      },

      {
        name: "Database Indexing",
        details: "Improving query performance with proper indexing strategies.",
      },
    ],
  },
  Tools: {
    title: "Tools & Platforms",
    description:
      "Utilizing various tools to enhance productivity and streamline development.",
    technologies: [
      {
        name: "Git",
        details: "Version control and collaboration with Git and GitHub.",
      },

      {
        name: "CI/CD",
        details: "Implementing continuous integration and delivery pipelines.",
      },
      { name: "Figma", details: "Designing UI/UX mockups and prototypes." },
    ],
  },
};
