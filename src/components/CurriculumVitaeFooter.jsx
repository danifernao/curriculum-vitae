import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function Footer({ cv }) {
  return (
    <footer className="footer-content">
      {cv.description && <p>{cv.description}</p>}
      {cv.social && (
        <div className="social">
          {cv.social.map(
            (link, i) =>
              link.href &&
              link.icon && (
                <a href={link.href} title={link.title} target="_blank" key={i}>
                  <FontAwesomeIcon icon={["fab", link.icon]} />
                </a>
              )
          )}
        </div>
      )}
    </footer>
  );
}

Footer.propTypes = {
  cv: PropTypes.shape({
    description: PropTypes.string,
    social: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
        title: PropTypes.string,
        href: PropTypes.string,
      })
    ),
  }),
};

export default Footer;
