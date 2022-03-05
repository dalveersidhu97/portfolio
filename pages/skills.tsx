import type { NextPage } from "next";
import { FunctionComponent } from "react";
import Skills from "../Components/Skills";
import styles from "../styles/common.module.css";

const skills  = [

  {title: 'Programming Languages', skills: [
    {
      name: "HTML5 & CSS3",
      level: "80%",
      icon: "",
    },
    {
      name: "Javascript",
      level: "70%",
      icon: "",
    },
    {
      name: "Typescript",
      level: "70%",
      icon: "",
    },
    {
      name: "PHP",
      level: "80%",
      icon: "",
    },
    {
      name: "Python",
      level: "70%",
      icon: "",
    },
    {
      name: 'Java',
      level: '80%',
      icon: ''
    }
  ]},
  {title: 'Frameworks / Libraries', skills: [
    {
      name: "React.js",
      level: "80%",
      icon: "",
    },
    {
      name: "Next.js",
      level: "80%",
      icon: "",
    },
    {
      name: "Node.js",
      level: "70%",
      icon: "",
    },
    {
      name: "Express.js",
      level: "80%",
      icon: "",
    },
    {
      name: "SASS",
      level: "70%",
      icon: "",
    },
    {
      name: "Bootstrap.js",
      level: "70%",
      icon: "",
    }
  ]},
  {title: 'Database', skills: [
    {
      name: "MongoDB",
      level: "70%",
      icon: "",
    },
    {
      name: "Mongoose",
      level: "80%",
      icon: "",
    },
    {
      name: "MySQL",
      level: "80%",
      icon: "",
    },
    {
      name: "SQL Server",
      level: "80%",
      icon: "",
    }
  ]},
  {title: 'Other', skills: [
    {
      name: "Github",
      level: "80%",
      icon: "",
    },
    {
      name: "REST APIs",
      level: "80%",
      icon: "",
    },
    {
      name: "MVC",
      level: "80%",
      icon: "",
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
