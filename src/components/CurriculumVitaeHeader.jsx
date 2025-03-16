import { useEffect } from "react";
import PropTypes from "prop-types";

function Header({ cv }) {
  useEffect(() => {
    if (cv.name) {
      document.title = cv.name;
    }
  });

  return (
    <header className="header-content">
      {cv.name && <h1 className="name">{cv.name}</h1>}
      {cv.headline && <p className="headline">{cv.headline}</p>}
      {cv.about && <p className="about">{cv.about}</p>}
    </header>
  );
}

Header.propTypes = {
  cv: PropTypes.shape({
    name: PropTypes.string,
    headline: PropTypes.string,
    about: PropTypes.string,
  }),
};

export default Header;
