import type { NextPage } from "next";
import { useState } from "react";
import {motion} from 'framer-motion';
import Modal from "../Components/Modal";
import styles from "../styles/common.module.css";

const projects = [
  {
    name: "Project Management System",
    image:
      "https://raw.githubusercontent.com/dalveersidhu97/NextJs-Quiz-App/main/Snapshos/snap.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam sequi unde ducimus voluptas ab perspiciatis labore. Reiciendis iste, officiis, consequuntur perspiciatis id rem, voluptatem corporis ipsa ea cumque pariatur.",
    github: "",
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
    image:
      "https://camo.githubusercontent.com/1de574f5160d38301070db0b082784eeac89cc3e85b82076c6be8f268a1391b8/68747470733a2f2f692e7974696d672e636f6d2f76692f7350326f5f5035663352672f68713732302e6a70673f7371703d2d6f61796d77456a434e4143454c774253467279713471704178554941525541414141414741456c41414449516a3041674b4a446541453d2672733d414f6e34434c447872374e46312d735374676a696870347068496557385166676d41",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    github: "",
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
    name: "Online Banking System",
    image:
      "https://raw.githubusercontent.com/dalveersidhu97/NextJs-Quiz-App/main/Snapshos/snap.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    github: "",
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
    name: "Online Banking System",
    image:
      "https://camo.githubusercontent.com/1de574f5160d38301070db0b082784eeac89cc3e85b82076c6be8f268a1391b8/68747470733a2f2f692e7974696d672e636f6d2f76692f7350326f5f5035663352672f68713732302e6a70673f7371703d2d6f61796d77456a434e4143454c774253467279713471704178554941525541414141414741456c41414449516a3041674b4a446541453d2672733d414f6e34434c447872374e46312d735374676a696870347068496557385166676d41",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    github: "",
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


  return (
    <div>
      <article className={styles.article}>
        <h2 className={styles.main_title}>Projects</h2>
        <div className={styles.projects}>
          {projects.map((project) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={project.name}
              onClick={() => {
                projectClickHandler(project);
              }}
              className={styles.project + " " + styles.card}
            >
              <img src={project.image} alt={project.name} />
              <p>{project.name}</p>
            </motion.div>
          ))}
        </div>
      </article>

      {showModal && (
        <Modal onClose={closeModal}>
          <div className={styles.project_detail}>
            <div className={styles.project_detail_right}>
              <img src={clickedProject?.image}></img>
              <div>
                <a>Github</a> <a>Deployed</a>
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
