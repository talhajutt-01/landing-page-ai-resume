import BackgroundBorder from "./BackgroundBorder";
import PropTypes from "prop-types";
import "./Section3.css";

const Section3 = ({ className = "" }) => {
  return (
    <section className={`section2 ${className}`}>
      <div className="job-search-heading-container">
        <h1 className="heading-21">The complete tool for your job search</h1>
      </div>
      <div className="job-search-description-contain">
        <div className="altresume-helps-you-container">
          <p className="altresume-helps-you">
            AltResume helps you achieve your goals by providing a convenient and
            tailored platform for your job search needs.
          </p>
          <p className="from-creating-your">
            From creating your CV or cover letter to managing your applications,
            we support you at every step of your search.
          </p>
        </div>
      </div>
      <div className="feature-cards">
        <div className="card-container">
          <div className="backgroundborder1">
            <div className="card-description-wrapper">
              <div className="c-v-design-container">
                <div className="c-v-design-background-containe">
                  <img
                    className="background-icon1"
                    alt=""
                    src="/background.svg"
                  />
                  <div className="c-v-design-title-container">
                    <b className="curriculum-vitae">Curriculum Vitae</b>
                  </div>
                </div>
                <div className="c-v-design-chevron-container">
                  <img
                    className="chevronsvg-icon1"
                    alt=""
                    src="/chevronsvg.svg"
                  />
                </div>
              </div>
              <div className="choose-and-customize-container">
                <p className="choose-and-customize">
                  Choose and customize a CV template that matches your
                </p>
                <p className="expectations">expectations.</p>
                <p className="view-and-download">
                  View and download it in just a few clicks.
                </p>
              </div>
            </div>
            <div className="create-c-v-cta-container">
              <div className="create-c-v-buttons">
                <div className="link2">
                  <b className="create">Create</b>
                </div>
              </div>
              <div className="link3">
                <img className="aisvg-icon" alt="" src="/aisvg.svg" />
                <b className="generate-with-ai">Generate with AI</b>
              </div>
            </div>
          </div>
          <BackgroundBorder
            background="/background-1.svg"
            coverLetter="Cover Letter"
          />
          <BackgroundBorder
            background="/background-2.svg"
            coverLetter="Job Search"
          />
        </div>
        <img
          className="tool-cvpng-icon"
          loading="lazy"
          alt=""
          src="/toolcvpng@2x.png"
        />
      </div>
    </section>
  );
};

Section3.propTypes = {
  className: PropTypes.string,
};

export default Section3;
