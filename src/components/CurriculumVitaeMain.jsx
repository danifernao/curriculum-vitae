import PropTypes from "prop-types";

function Main({ cv }) {
  return (
    <main className="main-content">
      {cv.map((section, i) => {
        return (
          <div className="section" key={i}>
            {section.heading && <h2>{section.heading}</h2>}
            {section.content &&
              section.content.map((columns, j) => (
                <div className="columns" key={j}>
                  {Object.keys(columns).map((position, k) => (
                    <div className={`col-${position}`} key={k}>
                      {columns[position].heading && position === "right" ? (
                        <h3 className="heading">{columns[position].heading}</h3>
                      ) : (
                        <p className="heading">{columns[position].heading}</p>
                      )}
                      {columns[position].paragraph &&
                        columns[position].paragraph
                          .split("\n")
                          .map((text, l) => (
                            <p className="paragraph" key={l}>
                              {text}
                            </p>
                          ))}
                    </div>
                  ))}
                </div>
              ))}
          </div>
        );
      })}
    </main>
  );
}

Main.propTypes = {
  cv: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      content: PropTypes.arrayOf(
        PropTypes.shape({
          left: PropTypes.shape({
            heading: PropTypes.string,
            paragraph: PropTypes.string,
          }),
          right: PropTypes.shape({
            heading: PropTypes.string,
            paragraph: PropTypes.string,
          }),
        })
      ),
    })
  ),
};

export default Main;
