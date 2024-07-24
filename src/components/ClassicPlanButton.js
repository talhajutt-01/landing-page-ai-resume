import PropTypes from "prop-types";
import "./ClassicPlanButton.css";

const ClassicPlanButton = ({ className = "", grayCrosssvg, grayCrosssvg1 }) => {
  return (
    <div className={`classic-plan-button ${className}`}>
      <div className="container2">
        <div className="container3">
          <img
            className="blue-checksvg-icon"
            loading="lazy"
            alt=""
            src="/bluechecksvg.svg"
          />
          <div className="create-button-content">
            <div className="works-on-multiple">Works on multiple devices</div>
          </div>
        </div>
        <div className="container4">
          <img
            className="blue-checksvg-icon1"
            loading="lazy"
            alt=""
            src="/bluechecksvg.svg"
          />
          <div className="button-content">
            <div className="download-in-different">
              Download in different formats
            </div>
          </div>
        </div>
        <div className="container5">
          <img className="blue-checksvg-icon2" alt="" src="/bluechecksvg.svg" />
          <div className="three-content">
            <div className="unlimited-cvs">Unlimited CVs</div>
          </div>
        </div>
        <div className="container6">
          <img className="gray-crosssvg-icon" alt="" src={grayCrosssvg} />
          <div className="four-content">
            <div className="unlimited-optimised-models">
              Unlimited optimised models
            </div>
          </div>
        </div>
        <div className="container7">
          <img className="gray-crosssvg-icon1" alt="" src={grayCrosssvg1} />
          <div className="five-content">
            <div className="unlimited-expert-advice">
              Unlimited expert advice
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ClassicPlanButton.propTypes = {
  className: PropTypes.string,
  grayCrosssvg: PropTypes.string,
  grayCrosssvg1: PropTypes.string,
};

export default ClassicPlanButton;
