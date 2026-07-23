import { motion } from "framer-motion";
import SkillBadge from "./SkillBadge";

function SkillCard({ skill, index }) {
  const Icon = skill.icon;

  return (
    <motion.article
      className={`skill-card ${skill.color}`}
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.45,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
      }}
    >
      {/* HEADER */}

      <div className="card-top">

        <div className={`icon-box ${skill.color}`}>
          <Icon />
        </div>

        <div className="title-box">
          <h3>{skill.title}</h3>
        </div>

      </div>

      {/* BODY */}

      <div className="card-bottom">

        <div className="tags">

          {skill.skills.map((item) => (
            <SkillBadge
              key={item}
              skill={item}
              color={skill.color}
            />
          ))}

        </div>

      </div>

    </motion.article>
  );
}

export default SkillCard;