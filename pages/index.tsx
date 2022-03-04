import type { NextPage } from "next";
import styles from "../styles/common.module.css";

const education = [
  {
    institution: "Lambton College",
    campus: "Toronto Campus",
    address: "400-265 Yorkland Blvd Toronto, ON M2J 1S5",
    course: "Computer Software and Database Development",
    duration: '2 years',
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
    duration: '3 years',
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et
          enim aut? Odit reiciendis earum sint excepturi iste, ipsam laboriosam
          modi, veritatis quaerat vitae, est voluptatum ducimus magni dolore ea?
        </p>
      </article>

      <article className={styles.article}>
        <h2 className={styles.main_title}>Education</h2>
        <div className={styles.grid_2}>
          {education.map(item =><div key={item.institution} className={styles.card + " " + styles.pad_2}>
              <p className={styles.course_name}>{item.course}</p>
              <p><span className={styles.small_box+" "+styles.green}>{item.level}</span><span className={styles.small_box+" "+styles.green}>{item.institution}</span>
              <span className={styles.small_box+" "+styles.green}>{item.campus}</span></p>
              <p> <span className={styles.small_box+" "+styles.blue}>GPA {item.gpa}</span><span className={styles.small_box+" "+styles.blue}>{item.duration}</span></p>
              <p><span className={styles.small_box+" "+styles.red}>{item.from}</span>
              <span className={styles.small_box+" "+styles.red}>To</span>
              <span className={styles.small_box+" "+styles.red}>{item.to}</span></p>
              
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default Home;
