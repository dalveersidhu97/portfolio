import type { NextPage } from "next";
import styles from "../styles/common.module.css";
import { CgWebsite } from "react-icons/cg";
import { ImHtmlFive, ImAndroid } from "react-icons/im";
import { BsCodeSlash } from "react-icons/bs";

const Home: NextPage = () => {
  return (
    <div>
      <article className={styles.article}>
        <h2 className={styles.main_title}>About Me</h2>
        <p>
          I am a <strong>fullstatck web developer</strong> near{" "}
          <strong>Toronto Ontario</strong>. I got my interests in coding since
          12th grade thats why I did my Graduation and Postgraduation in
          computer application. Now, Coding has become my favourite passion and
          I love seeing the results of my efforts.
        </p>
      </article>

      <article className={styles.article}>
        <h2 className={styles.main_title}>What I am doing</h2>
        <div className={styles.what_i_am}>
          <div>
            <CgWebsite></CgWebsite>
            <p>
              <strong>Full Stack Web development</strong> - Single or Multipage
              full statck websites using Node.js, Express.js, Next.js, React.js, Core PHP,
              Spring MVC, SQL or NoSQL databases etc.
            </p>
          </div>
          <div>
            <ImHtmlFive></ImHtmlFive>
            <p>
              <strong>Front End Web Development</strong> - I can build
              responsive front end websites using HTML, CSS, JS, React.js, JQery
              etc.
            </p>
          </div>
          <div>
            <BsCodeSlash></BsCodeSlash>
            <p>
              <strong>API Development</strong> - I can make APIs using Node.js,
              Next.js, Core PHP, MongoDB, Mongoose, SQL, Web Tokesn etc.
            </p>
          </div>
          <div>
            <ImAndroid></ImAndroid>
            <p>
              <strong>Android Apps</strong> - I am able to create such simple android apps that use
              simple UI, API calls, local storage. I made a Quiz
              app which avaliable in projects section.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Home;
