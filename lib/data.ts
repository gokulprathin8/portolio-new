import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import geoweaverImg from "@/public/geoweaver.png";
import planeImg from "@/public/plane.png";
import codenamesImg from "@/public/codenames.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Undergrad: GITAM University",
    location: "Hyderabad, India",
    description:
      "During my undergrad at GITAM, I got to learn about networking, linux, system design, building websites and was also able to publish 2 research papers by the end of my grad.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2021",
  },
  {
    title: "Software Engineer",
    location: "Hyderabad, India",
    description:
      "Worked as a full stack web developer using React, Express and Node.js to build a Ecommerce application at Divergent Consulting Services (heybandi.com)",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2021",
  },
  {
    title: "Heymavin (fka Userfocus)",
    location: "Remote",
    description:
      "Worked as a Full-stack Developer — Django, Flask, AWS, Elastic Search, Postgres, Heroku & React. Worked on Zoom integratio into the existing codebase and completely built a end to end pipeline to record and analyse calls that occur outside zoom such as MS Teams & Google Meet and automated the recording process with Selenium, FFmpeg & Chrome headless",
    icon: React.createElement(FaReact),
    date: "2021 - 2022",
  },
  {
    title: "Grad: George Mason University",
    location: "Fairfax, VA",
    description: "During Masters in Computer science, I became proficient with Golang, switched to Neovim, TMUX is my new home. I kept an eye out for new LLMs and learnt whatever I could about Machine Learning and LLMs. I was able to publish 5 research papers to international journals during my masters",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024"
  },
  {
    title: "Research Assistant",
    location: "George Mason University, Fairfax",
    description: "Worked as a Research assistant under Prof. Ziheng Sun (https://zihengsun.github.io/), primarly worked on Geoweaver project. Responsible for maintaining the existing codebase and implementing new features for workflow management. Another intresting side project I worked on was 'Snow Water Equivalent' workflow for predicting water in snow for entire Western US using SRTM DEM and Gridmet.",
    icon: React.createElement(FaReact),
    date: "2023 - Present"
  }
] as const;

export const projectsData = [
  {
    title: "Geoweaver",
    description:
    "A web system to allow users to automatically record history and manage complicated scientific workflows in web browsers",
    tags: ["Java", "Spring", "PostgreSQL", "H2", "Tailwind"],
    imageUrl: geoweaverImg,
  },
  {
    title: "Natours",
    description: "A tour booking application using the MERN stack. With user auth & maps API for geolocation services.",
    tags: ["Node.js", "MongoDB", "Express", "React"],
    imageUrl: planeImg,
  },
  {
    title: "Codenames",
    description: "Challenges players to guess words based on clues, enhancing strategic thinking and teamwork.",
    tags: ["FastAPI", "Remix", "Tailwind", "Zustand"],
    imageUrl: codenamesImg,
  }
] as const;

export const skillsData = [
  "Python",
  "Django",
  "FastAPI",
  "JavaScript",
  "TypeScript",
  "Go (Golang)",
  "Java",
  "Spring",
  "React",
  "Express",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Figma",
  "GraphQL",
  "PostgreSQL",
  "Cypress",
  "HTML",
  "CSS",
] as const;
