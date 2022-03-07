import type { NextPage } from "next";
import styles from "../styles/common.module.css";
import {FaUniversity, FaBook, FaGraduationCap} from 'react-icons/fa';
import {MdLocationCity} from 'react-icons/md';
import {GrScorecard} from 'react-icons/gr';
import {GiTimeTrap} from 'react-icons/gi';
import {MdAccessTimeFilled} from 'react-icons/md';

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

const ResumePage: NextPage = () => {
  return (

      <article className={styles.article}>

        <p>Web developer with ability to learn and collaborate in rapidly changing evironments and compositions.
          Worked through 1000+ hours of bootcamp structure, learning Javascript, Node.js, React.js, Next.js, Typescript and many more.
          Eager to tackle web development/design challenges to achieve lasting impact on user experience.
        </p>
        <br></br>

        <h2 className={styles.main_title}>Education</h2>
        
        <div className={styles.grid_2}>
          {education.map((item) => (
            <div
              key={item.institution}
              className={styles.card_basic + " " + styles.pad_2}
            >
              <p className={styles.course_name}><FaBook></FaBook>{item.course}</p>
              <p>
                <span className={styles.small_box + " " + styles.green}>
                  <FaGraduationCap></FaGraduationCap>{item.level}
                </span>
                <span className={styles.small_box + " " + styles.green}>
                  <FaUniversity></FaUniversity>{item.institution}
                </span>
                <span className={styles.small_box + " " + styles.green}>
                  <MdLocationCity></MdLocationCity>{item.campus}
                </span>
              </p>
              <p>
                {" "}
                <span className={styles.small_box + " " + styles.blue}>
                  <GrScorecard></GrScorecard>GPA {item.gpa}
                </span>
                <span className={styles.small_box + " " + styles.blue}>
                  <GiTimeTrap></GiTimeTrap>{item.duration}
                </span>
              </p>
              <p>
                <span className={styles.small_box + " " + styles.red}>
                  <MdAccessTimeFilled></MdAccessTimeFilled>{item.from}
                </span>
                <span className={styles.small_box + " " + styles.red}>to</span>
                <span className={styles.small_box + " " + styles.red}>
                <MdAccessTimeFilled></MdAccessTimeFilled>{item.to}
                </span>
              </p>
            </div>
          ))}
        </div>
      </article>
  );
};

export default ResumePage;
