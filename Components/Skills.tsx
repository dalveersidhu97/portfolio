import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import styles from './Skills.module.css';


type Skill = {
    name: string, 
    level: string,
    icon: string
}
type SkillCategory = {
    title: string, 
    skills: Skill[]
}
const Bar: FunctionComponent<{skill: Skill}> = ({skill}) => {
    return <div className={styles.progress_container}>
    <motion.div animate={{ width: ['0%', '100%', skill.level] }} className={styles.progress} style={{width: skill.level}}><p>{skill.level}</p></motion.div>
    </div>
}
  

const Skills: FunctionComponent<{skills: SkillCategory[]}> = ({skills}) => {
    return <div className={styles.skills}>
            {skills.map(skillCategory => <div key={skillCategory.title} className={styles.skill_category}>
                <h3>{skillCategory.title}</h3>

                {skillCategory.skills.map(skill=> <div key={skill.name} className={styles.skill}>
                    <h4>{skill.name}</h4>
                    <Bar skill={skill}></Bar>
                </div>)}

                
            </div>
            )}
        </div>
}

export default Skills;