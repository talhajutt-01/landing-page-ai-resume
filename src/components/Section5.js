import PropTypes from "prop-types";
import "./Section5.css";

const Section5 = ({ className = "" }) => {
  return (
    <section className={`section ${className}`}>
      <img
        className="hero-backgroundsvg-fill-icon"
        alt=""
        src="/herobackgroundsvg-fill@2x.png"
      />
      <div className="hero-content">
        <div className="hero-title-container-parent">
          <div className="hero-title-container">
            <h1 className="create-your-cv-container">
              <span>{`Create your `}</span>
              <span className="cv-online">CV online</span>
            </h1>
            <div className="hero-subtitle-container">
              <div className="online-cv-builder">
                Online CV builder, easy to use
              </div>
              <div className="list">
                <div className="item">
                  <img className="icon" alt="" src="/icon.svg" />
                  <div className="wide-variety-of-container">
                    <b>Wide variety</b>
                    <span> of CV templates</span>
                  </div>
                </div>
                <div className="item1">
                  <img className="icon1" alt="" src="/icon.svg" />
                  <div className="unique-impressive-cv-container">
                    <b>Unique, impressive CV</b>
                    <span> in minutes</span>
                  </div>
                </div>
                <div className="item2">
                  <img className="icon2" alt="" src="/icon.svg" />
                  <div className="a-downloadable-cv-container">
                    <span>A downloadable CV available in</span>
                    <b> PDF, TXT or Word</b>
                  </div>
                </div>
                <div className="item3">
                  <img className="icon3" alt="" src="/icon.svg" />
                  <div className="quick-easy-formatting-container">
                    <span>{`Quick `}</span>
                    <b>easy formatting</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="link1">
            <div className="create-your-cv">Create your CV</div>
          </div>
        </div>
      </div>
      <img
        className="home-hero-animation-1png-icon"
        loading="lazy"
        alt=""
        src="/homeheroanimation1png@2x.png"
      />
    </section>
  );
};

Section5.propTypes = {
  className: PropTypes.string,
};

export default Section5;
