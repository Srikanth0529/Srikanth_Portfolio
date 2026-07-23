function SkillBadge({ skill, color }) {
  return (
    <span className={`skill-badge ${color}`}>
      {skill}
    </span>
  );
}

export default SkillBadge;