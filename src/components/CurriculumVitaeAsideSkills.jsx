import PropTypes from "prop-types";

function Skills({ skills }) {
  return (
    <span className="skills">
      {skills.map((skill, i) => (
        <span className="skill" key={i}>
          {skill.max_level && skill.curr_level && (
            <span className="progress">
              {Array(skill.max_level)
                .fill(null)
                .map((_, j) => (
                  <span
                    className={j < skill.curr_level ? "filled" : ""}
                    key={j}
                  ></span>
                ))}
            </span>
          )}
          {skill.description && (
            <span className="description">{skill.description}</span>
          )}
        </span>
      ))}
    </span>
  );
}

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      max_level: PropTypes.number,
      curr_level: PropTypes.number,
      description: PropTypes.string,
    })
  ),
};

export default Skills;
