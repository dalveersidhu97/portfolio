import type { NextPage } from "next";
import Skills from "../Components/Skills";
import styles from "../styles/common.module.css";

const skills  = [
  {title: 'Back-End', skills: [
    {
      name: "Express.js",
      level: "90%",
      icon: "",
    },
    {
      name: "GraphQL",
      level: "90%",
      icon: "",
    },
    {
      name: "Sequelize.js",
      level: "70%",
      icon: "",
    },
    {
      name: "Mongoose.js",
      level: "70%",
      icon: "",
    },
    {
      name: "Jest for Unit testing",
      level: "90%",
      icon: "",
    },
  ]},
  {title: 'Front-End', skills: [
    {
      name: "React.js",
      level: "90%",
      icon: "",
    },
    {
      name: "JQuery",
      level: "90%",
      icon: "",
    },
    {
      name: "TailwindCSS",
      level: "90%",
      icon: "",
    },
    {
      name: "Bootstrap",
      level: "80%",
      icon: "",
    },
    {
      name: "React Testing Library for Testing",
      level: "90%",
      icon: "",
    },
  ]},
  {title: 'Programming Languages', skills: [
    {
      name: "Javascript",
      level: "90%",
      icon: "",
    },
    {
      name: "Typescript",
      level: "90%",
      icon: "",
    },
    {
      name: "HTML5 & CSS3",
      level: "90%",
      icon: "",
    },
    {
      name: 'Java',
      level: '80%',
      icon: ''
    },
    {
      name: "PHP",
      level: "70%",
      icon: "",
    },
    {
      name: "Python",
      level: "70%",
      icon: "",
    },
  ]},
  {title: 'Frameworks / Libraries', skills: [
    {
      name: "Node.js",
      level: "90%",
      icon: "",
    },
    {
      name: "Next.js",
      level: "70%",
      icon: "",
    },
    {
      name: "GraphQL",
      level: "70%",
      icon: "",
    },
    {
      name: "Socket.io",
      level: "70%",
      icon: "",
    },
    {
      name: "Redux.js / Redux Tookit",
      level: "90%",
      icon: "",
    },
    {
      name: 'OAuth, JWT',
      level: "90%",
      icon: "",
    }
  ]},
  {title: 'Database', skills: [
    {
      name: "PostgreSQL",
      level: "90%",
      icon: "",
    },
    {
      name: "MySQL",
      level: "90%",
      icon: "",
    },
    {
      name: "SQL Server",
      level: "90%",
      icon: "",
    },
    {
      name: "MongoDB",
      level: "70%",
      icon: "",
    },
    {
      name: "Mongoose (ORM)",
      level: "80%",
      icon: "",
    },
    {
      name: "Sequelize (ORM)",
      level: "80%",
      icon: "",
    },
  ]},
  {title: 'More', skills: [
    {
      name: "Docker",
      level: "80%",
      icon: "",
    },
    {
      name: "Github & GitLab",
      level: "90%",
      icon: "",
    },
    {
      name: "REST APIs",
      level: "90%",
      icon: "",
    },
    {
      name: "MVC Architecture",
      level: "90%",
      icon: "",
    },
    {
      name: "Test Driven Development (TDD)",
      level: "80%",
      icon: "",
    },
    {
      name: "Unit Testing",
      level: "80%",
      icon: "",
    },
    {
      name: 'Agile methodologies, JIRA',
      level: '80%',
      icon: ""
    },
    {
      name: "Chrome Extensions",
      level: "80%",
      icon: "",
    }
  ]}
];

const SkillsPage: NextPage = () => {
  return (
    <article className={styles.article}>
        <Skills skills={skills}></Skills>
    </article>
  );
};

export default SkillsPage;
