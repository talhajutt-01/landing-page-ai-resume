import PropTypes from "prop-types";
import "./BackgroundBorder.css";

const BackgroundBorder = ({ className = "", background, coverLetter }) => {
  return (
    <div className={`backgroundborder ${className}`}>
      <div className="background-wrapper">
        <img
          className="background-icon"
          loading="lazy"
          alt=""
          src={background}
        />
        <div className="card-titles-container">
          <b className="cover-letter1">{coverLetter}</b>
        </div>
      </div>
      <div className="chevron-icons-container">
        <img className="chevronsvg-icon" alt="" src="/chevronsvg-1@2x.png" />
      </div>
    </div>
  );
};

BackgroundBorder.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  coverLetter: PropTypes.string,
};

export default BackgroundBorder;
