import { useMemo } from "react";
import PropTypes from "prop-types";
import "./HighlightImages.css";

const HighlightImages = ({
  className = "",
  standOutByCreatingAnImpac,
  coverLetter,
  maximizeYourChancesOfLand,
  friendlyAppThatAllowsYouT,
  clicks,
  chooseATemplateAndQuickly,
  andStandOutFromTheCrowd,
  customizeMyCV,
  propWidth,
  propMinWidth,
}) => {
  const highlightImagesStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  return (
    <div
      className={`highlight-images ${className}`}
      style={highlightImagesStyle}
    >
      <div className="impact-highlight">
        <h1 className="stand-out-by-container">
          <p className="stand-out-by">{standOutByCreatingAnImpac}</p>
          <p className="cover-letter2">{coverLetter}</p>
        </h1>
        <div className="maximize-your-chances-container">
          <p className="maximize-your-chances">{maximizeYourChancesOfLand}</p>
          <p className="friendly-app-that">{friendlyAppThatAllowsYouT}</p>
          <p className="clicks">{clicks}</p>
          <p className="choose-a-template">{chooseATemplateAndQuickly}</p>
          <p className="and-stand-out">{andStandOutFromTheCrowd}</p>
        </div>
        <div className="link5">
          <div className="customize-my-cv">{customizeMyCV}</div>
        </div>
      </div>
    </div>
  );
};

HighlightImages.propTypes = {
  className: PropTypes.string,
  standOutByCreatingAnImpac: PropTypes.string,
  coverLetter: PropTypes.string,
  maximizeYourChancesOfLand: PropTypes.string,
  friendlyAppThatAllowsYouT: PropTypes.string,
  clicks: PropTypes.string,
  chooseATemplateAndQuickly: PropTypes.string,
  andStandOutFromTheCrowd: PropTypes.string,
  customizeMyCV: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default HighlightImages;
