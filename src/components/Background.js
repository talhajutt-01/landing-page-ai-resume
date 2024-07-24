import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Background.css";

const Background = ({
  className = "",
  background,
  heading4ReadyToUseCVsAndC,
  customizePreFilledCVAndCo,
  easyToUseAltResumeApp,
  propAlignSelf,
}) => {
  const backgroundStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className={`background8 ${className}`} style={backgroundStyle}>
      <div className="ready-feature-pairs">
        <img
          className="background-icon2"
          loading="lazy"
          alt=""
          src={background}
        />
        <div className="ready-pair-one-headings">
          <b className="heading-4">{heading4ReadyToUseCVsAndC}</b>
        </div>
      </div>
      <div className="customize-pre-filled-cv-container">
        <p className="customize-pre-filled-cv">{customizePreFilledCVAndCo}</p>
        <p className="easy-to-use-altresume-app">{easyToUseAltResumeApp}</p>
      </div>
    </div>
  );
};

Background.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  heading4ReadyToUseCVsAndC: PropTypes.string,
  customizePreFilledCVAndCo: PropTypes.string,
  easyToUseAltResumeApp: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
};

export default Background;
