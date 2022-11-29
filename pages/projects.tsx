import type { NextPage } from "next";
import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../Components/Modal";
import styles from "../styles/common.module.css";
import { CgWebsite } from "react-icons/cg";
import { BsCodeSlash } from "react-icons/bs";
import { ImHtmlFive } from "react-icons/im";

const projects = [
  {
    name: "AssignDaku.com",
    image: "assigndaku.jpg",
    desc: "Utilized My Own SMS API, Typescript, Next.js, Custom Express Server, React.js, Mongoose, Strip Payments, TailwindCSS. Here I help others with programming bugs, assignments, and projects. I control user requests through my admin panel. This domain directly accesses my computer IP, so it may not open if my computer is turned off.",
    github: "https://github.com/dalveersidhu97/assigndaku",
    deployed: "https://assigndaku.com/",
    skills: [
      "Node.js",
      "Next.js",
      "React.js",
      "TypeScript",
      "Mongoose",
      "TailwindCSS",
      "HTML5 & CSS3",
      "Redux.js",
    ],
  }
  ,{
    name: "Project Management System",
    image: "nodejs_project.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam sequi unde ducimus voluptas ab perspiciatis labore. Reiciendis iste, officiis, consequuntur perspiciatis id rem, voluptatem corporis ipsa ea cumque pariatur.",
    github: "https://github.com/dalveersidhu97/final-project-node",
    deployed: "",
    skills: [
      "Node.js",
      "Express.js",
      "EJS View Engine",
      "Mongoose",
      "Bootstrap",
      "Javascript",
    ],
  },
  {
    name: "Online Banking System",
    image: "springmvc_project.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    github: "https://github.com/dalveersidhu97/javaee_finalproject_grouph",
    deployed: "",
    skills: [
      "Spring MVC",
      "JSP",
      "OracleDB",
      "JDBC Template",
      "Javascript",
      "Bootstrap",
    ],
  },
  {
    name: "Portfolio Website",
    image: "portfolio_project.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    github: "https://github.com/dalveersidhu97/portfolio",
    deployed: "",
    skills: [
      "Node.js",
      "Next.js",
      "React.js",
      "TypeScript",
      "MongoDB",
      "HTML5 & CSS3",
      "Redux.js",
    ],
  },
  {
    name: "Next Quiz Web App",
    image: "nexts_quiz_project.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    github: "https://github.com/dalveersidhu97/NextJs-Quiz-App",
    deployed: "https://next-js-quiz-app.vercel.app/",
    skills: [
      "Node.js",
      "Next.js",
      "React.js",
      "Redux.js",
      "REST API",
      "Javascript",
      "HTML5 & CSS3",
    ],
  },
  {
    name: "E-Commerce Static Website",
    image: "web_project.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    github: "https://github.com/dalveersidhu97/WebProject",
    deployed: "http://desicart.000webhostapp.com/",
    skills: ["HTML5", "CSS3", "Javascript"],
  },
  {
    name: "Android Quiz App",
    image: "android_project.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    github: "https://github.com/dalveersidhu97/QuiziAndroidProject",
    deployed: "",
    skills: [
      "Java",
      "SQLite Database",
      "Retrofit HTTP Library",
      "MVC",
      "REST API",
    ],
  }
];

type Project = {
  name: string;
  image: string;
  desc: string;
  github: string;
  skills: string[];
  deployed: string;
};

const ProjectsPage: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [clickedProject, setClickedProject] = useState<Project>();

  const projectClickHandler = (project: Project) => {
    setClickedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const projectSkills = (skills: string[]) => {
    return (
      <div key={Math.random()} className={styles.project_skills}>
        {skills.map((skill) => (
          <span key={Math.random()}>{skill}</span>
        ))}
      </div>
    );
  };

  return (
    <div>
      <article className={styles.article}>
        <h2 className={styles.main_title}>Work History</h2>
        <p style={{ marginBottom: '2rem'}}>
          With 1 year of experience as a fullstack Nodejs/Typescript developer.
        </p>
        <div className={styles.what_i_am}>
          <div>
            <CgWebsite></CgWebsite>
            <p><strong>Full Stack Developer</strong> (Full Time 7 Months)</p>
            <p>New World Inc., <address style={{ color: '#666', display: 'inline-block' }}>Toronto, ON</address></p>
            <small><ul style={{ listStylePosition: 'inside' }}>
              <li>Developed REST API using Node.js,
              Typescript, Sequelize.js, and PostgresSQL database for the New World
              NFT Platform.</li>
              <li>Developed Front-End App Using React.js,
              Redux.js, Typescript, TailwindCSS, etc.</li>
            </ul></small>
          </div>
          <div>
            <ImHtmlFive></ImHtmlFive>
            <p><strong>Web Developer</strong> (Intern 4 Months)</p>
            <p>Infowiz, <address style={{ color: '#666', display: 'inline-block' }}>Etobicoke, ON</address></p>
            <small><ul style={{ listStylePosition: 'inside' }}>
              <li>Working in Node.js, and Next.js environments using a custom Express server.</li>
              <li>Building RESTful APIs that serve data to the React front-end.</li>
            </ul></small>
          </div>
        </div>
      </article>
      <article className={styles.article}>
        <h2 className={styles.main_title}>Personal projects</h2>
        <p style={{ marginBottom: '2rem'}}>
          I have create many project since last 3.5 years Such as Movies Websites
          to download movies, Youtube video, playlist or channle dowloader using
          Youtube API, android app for movies. Some of them whose source code
          still I have are :-
        </p>
        <div className={styles.projects}>
          {projects.map((project) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={project.name}
              onClick={() => {
                projectClickHandler(project);
              }}
              className={styles.project + " " + styles.card}
            >
              <img src={"/img/" + project.image} alt={project.name} />
              <p>{project.name}</p>
              {projectSkills(project.skills)}
            </motion.div>
          ))}
        </div>
      </article>

      {showModal && (
        <Modal onClose={closeModal}>
          <div className={styles.project_detail}>
            <div className={styles.project_detail_right}>
              <img src={"/img/" + clickedProject?.image}></img>
              <br />
              <br />
              <div>
                {projectSkills(clickedProject!.skills)}
                <a
                  href={clickedProject!.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={clickedProject!.deployed}
                  target="_blank"
                  rel="noreferrer"
                >
                  Deployed
                </a>
              </div>
              <h2>{clickedProject?.name}</h2>
              <p>{clickedProject?.desc}</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProjectsPage;
