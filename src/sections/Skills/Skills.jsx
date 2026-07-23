import "../../styles/skills.css";
import skillsData from "../../data/skillsData";
import SkillCard from "../../components/Skills/SkillCard";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        <div className="skills-heading">

          <h2 className="section-title">
        Technical Skills
        </h2>
        <div className="title-line"></div>

        </div>

        <div className="skills-grid">

          {skillsData.map((skill, index) => (

            <SkillCard
              key={skill.title}
              skill={skill}
              index={index}
            />

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;