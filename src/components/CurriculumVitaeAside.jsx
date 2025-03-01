import Skills from "./CurriculumVitaeAsideSkills";
import PropTypes from "prop-types";
import { Fragment } from "react";

function Aside({ cv }) {
  return (
    <aside className="aside-content">
      {cv.photo && cv.photo.filename && (
        <img src={`./images/${cv.photo.filename}`} alt={cv.photo.alt} />
      )}

      {cv.details && cv.details.heading && <h2>{cv.details.heading}</h2>}

      {cv.details &&
        cv.details.map((section, i) => (
          <div className="section" key={i}>
            {section.heading && <h2>{section.heading}</h2>}
            {section.content && (
              <dl>
                {section.content.map((item, j) => (
                  <Fragment key={j}>
                    {item.heading && <dt>{item.heading}</dt>}
                    {(item.paragraph || item.skills) && (
                      <dd>
                        {item.paragraph &&
                          (item.href ? (
                            <a href={item.href} target="_blank">
                              {item.paragraph}
                            </a>
                          ) : (
                            item.paragraph
                          ))}
                        {item.skills && <Skills skills={item.skills} />}
                      </dd>
                    )}
                  </Fragment>
                ))}
              </dl>
            )}
          </div>
        ))}
    </aside>
  );
}

Aside.propTypes = {
  cv: PropTypes.shape({
    photo: PropTypes.shape({
      filename: PropTypes.string,
      alt: PropTypes.string,
    }),
    details: PropTypes.arrayOf(
      PropTypes.shape({
        heading: PropTypes.string,
        content: PropTypes.arrayOf(
          PropTypes.shape({
            heading: PropTypes.string,
            paragraph: PropTypes.string,
            href: PropTypes.string,
            skills: PropTypes.array,
          })
        ),
      })
    ),
  }),
};

export default Aside;
