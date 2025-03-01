import PropTypes from "prop-types";

function Loading({ error }) {
  return (
    <div className="loading">
      {error ? (
        <div className="error" role="alert" aria-label="Error">
          {/* Source: https://iconmonstr.com/error-filled-svg/ */}
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="m12.002 21.534c5.518 0 9.998-4.48 9.998-9.998s-4.48-9.997-9.998-9.997c-5.517 0-9.997 4.479-9.997 9.997s4.48 9.998 9.997 9.998zm0-8c-.414 0-.75-.336-.75-.75v-5.5c0-.414.336-.75.75-.75s.75.336.75.75v5.5c0 .414-.336.75-.75.75zm-.002 3c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z" />
          </svg>
          <p>Page could not be loaded, please try again later.</p>
        </div>
      ) : (
        <div className="loader" role="alert" aria-label="Loading"></div>
      )}
    </div>
  );
}

Loading.propTypes = {
  error: PropTypes.bool,
};

export default Loading;
