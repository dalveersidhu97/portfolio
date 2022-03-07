import type { NextPage } from "next";
import styles from "../styles/common.module.css";
import { CgWebsite } from "react-icons/cg";
import { ImHtmlFive, ImAndroid } from "react-icons/im";
import { BsCodeSlash } from "react-icons/bs";

const education = [
  {
    institution: "Lambton College",
    campus: "Toronto Campus",
    address: "400-265 Yorkland Blvd Toronto, ON M2J 1S5",
    course: "Computer Software and Database Development",
    duration: "2 years",
    level: "Post Graduate Diploma",
    gpa: "3.6",
    from: "May 2020",
    to: "May 2022",
  },
  {
    institution: "Punjaib University",
    campus: "Patiala Campus",
    address: "Patiala, Punjab, India",
    course: "Bachelor of Computer Application",
    duration: "3 years",
    level: "Bachelors's Degree",
    gpa: "3.0",
    from: "May 2016",
    to: "May 2019",
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <article className={styles.article}>
        <h2 className={styles.main_title}>About Me</h2>
        <p>
          I am a <strong>full statck web developer</strong> near{" "}
          <strong>Toronto Ontario</strong>. I got my interests in coading form
          my 12th grade thats why I did my Graduation and Postgraduation in
          computer application. Now, Coading has become my favourite passion and
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
              full statck websites using Node.js, Express.js, Next.js, Core PHP,
              Spring MVC.
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

      <article className={styles.article}>
        <h2 className={styles.main_title}>Education</h2>
        <div className={styles.grid_2}>
          {education.map((item) => (
            <div
              key={item.institution}
              className={styles.card + " " + styles.pad_2}
            >
              <p className={styles.course_name}>{item.course}</p>
              <p>
                <span className={styles.small_box + " " + styles.green}>
                  {item.level}
                </span>
                <span className={styles.small_box + " " + styles.green}>
                  {item.institution}
                </span>
                <span className={styles.small_box + " " + styles.green}>
                  {item.campus}
                </span>
              </p>
              <p>
                {" "}
                <span className={styles.small_box + " " + styles.blue}>
                  GPA {item.gpa}
                </span>
                <span className={styles.small_box + " " + styles.blue}>
                  {item.duration}
                </span>
              </p>
              <p>
                <span className={styles.small_box + " " + styles.red}>
                  {item.from}
                </span>
                <span className={styles.small_box + " " + styles.red}>To</span>
                <span className={styles.small_box + " " + styles.red}>
                  {item.to}
                </span>
              </p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default Home;
