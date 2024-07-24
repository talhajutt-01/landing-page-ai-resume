import PropTypes from "prop-types";
import "./SectionSection.css";

const SectionSection = ({ className = "" }) => {
  return (
    <section className={`section-section ${className}`}>
      <div className="template-heading-container">
        <div className="template-heading-wrapper">
          <h1 className="heading-22">Choose your CV template</h1>
        </div>
        <div className="take-advantage-of-container">
          <p className="take-advantage-of">
            Take advantage of the numerous online CV templates tailored to your
            industry and even your profession.
          </p>
          <p className="choose-the-style">
            Choose the style that suits you to help you stand out and land the
            job of your dreams.
          </p>
        </div>
      </div>
      <div className="template-carousel">
        <div className="carousel-wrapper">
          <div className="group-1-8">
            <img className="group-8-8" alt="" src="/group--8--8@2x.png" />
            <img
              className="group-2-8"
              loading="lazy"
              alt=""
              src="/group--2--8@2x.png"
            />
            <img className="png-icon" alt="" src="/1png@2x.png" />
            <div className="link4">
              <div className="choose-this-model">Choose this model</div>
            </div>
          </div>
          <div className="carousel-controls">
            <div className="control-buttons">
              <img
                className="button-previous-slide-gray"
                loading="lazy"
                alt=""
                src="/button--previous-slide--grayleftarrowsvg.svg"
              />
              <div className="carousel-slides">
                <div className="container">
                  <div className="background" />
                  <div className="slide-backgrounds">
                    <div className="background1" />
                  </div>
                  <div className="slide-backgrounds1">
                    <div className="background2" />
                  </div>
                  <div className="slide-backgrounds2">
                    <div className="background3" />
                  </div>
                  <div className="slide-backgrounds3">
                    <div className="background4" />
                  </div>
                  <div className="slide-backgrounds4">
                    <div className="background5" />
                  </div>
                  <div className="slide-backgrounds5">
                    <div className="background6" />
                  </div>
                  <div className="slide-backgrounds6">
                    <div className="background7" />
                  </div>
                </div>
              </div>
              <img
                className="button-next-slide-gray-rig"
                loading="lazy"
                alt=""
                src="/button--next-slide--grayrightarrowsvg.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

SectionSection.propTypes = {
  className: PropTypes.string,
};

export default SectionSection;
