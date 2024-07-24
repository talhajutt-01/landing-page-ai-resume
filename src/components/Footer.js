import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`footer ${className}`}>
     
      <div className="footer-content">
        <div className="footer-top">
        <div className="dummy-parent">
          <div className="bg" />
          <img className="dummy-icon" alt="" src="/dummy.svg" />
        </div>
          <div className="footer-brand">
            <div className="techrealm1">TechRealm</div>
          </div>
        </div>
        <div className="footer-description">
          <div className="create-an-impactful-container">
            <p className="create-an-impactful">
              Create an impactful CV and cover letter.
            </p>
            <p className="maximize-your-chances1">
              Maximize your chances of landing the
            </p>
            <p className="job-of-your">job of your dreams.</p>
          </div>
        </div>
      </div>
      <div className="footer-links">
        <div className="template-links">
          <div className="heading-5">Templates</div>
          <div className="template-link-items">
            <div className="student-cv">Student CV</div>
            <div className="professional-cv">Professional CV</div>
            <div className="cv-with-no">CV with no experience</div>
            <div className="europass-cv">Europass CV</div>
          </div>
        </div>
      </div>
      <div className="layout-links">
        <div className="c-v-layout-links">
          <div className="heading-51">CV Layout</div>
          <div className="layout-link-items">
            <div className="chronological-cv">Chronological CV</div>
            <div className="combined-cv">Combined CV</div>
            <div className="post-oriented-cv">Post-oriented CV</div>
          </div>
        </div>
      </div>
      <div className="about-links">
        <div className="footer-about">
          <div className="altresume">AltResume</div>
          <div className="footer-about-items">
            <div className="about-us">About Us</div>
            <div className="features">Features</div>
            <div className="customer-area">Customer Area</div>
            <div className="pricing">Pricing</div>
            <div className="contact-us">Contact us</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
