import Background from "./Background";
import PropTypes from "prop-types";
import "./Section1.css";

const Section1 = ({ className = "" }) => {
  return (
    <div className={`section6 ${className}`}>
      <div className="trust-heading">
        <h1 className="heading-23">Why trust us?</h1>
      </div>
      <div className="trust-description">
        <div className="our-goal-satisfy">
          Our goal: satisfy your needs and offer you a quality service.
        </div>
      </div>
      <div className="container1">
        <div className="features-backgrounds">
          <div className="background9">
            <div className="feature-pair-one">
              <img
                className="background-icon3"
                loading="lazy"
                alt=""
                src="/background-3.svg"
              />
              <div className="design-headings">
                <b className="heading-41">
                  Simple and fast design wherever you are
                </b>
              </div>
            </div>
            <div className="ultra-fast-design-is-container">
              <p className="ultra-fast-design-is">
                Ultra-fast design is compatible with all devices: computers,
                laptops, and
              </p>
              <p className="tablets">tablets.</p>
              <p className="we-adapt-to">
                We adapt to your requirements to meet your needs.
              </p>
            </div>
          </div>
          <Background
            background="/background-4.svg"
            heading4ReadyToUseCVsAndC="Ready-to-use CVs and cover letters"
            customizePreFilledCVAndCo="Customize pre-filled CV and cover letter templates in a few clicks via the"
            easyToUseAltResumeApp="easy-to-use AltResume app."
          />
          <Background
            background="/background-5.svg"
            heading4ReadyToUseCVsAndC="Custom examples and advice"
            customizePreFilledCVAndCo="Get examples and advice tailored to your needs and benefit from a wide"
            easyToUseAltResumeApp="choice of CV or cover letter templates in just a few clicks."
            propAlignSelf="stretch"
          />
        </div>
        <div className="features-backgrounds1">
          <Background
            background="/background-6.svg"
            heading4ReadyToUseCVsAndC="Data privacy and secure storage"
            customizePreFilledCVAndCo="Your data is secure and is neither sold nor used."
            easyToUseAltResumeApp="You can delete your documents at any time in accordance with GDPR."
            propAlignSelf="stretch"
          />
          <Background
            background="/background-7.svg"
            heading4ReadyToUseCVsAndC="A job space 100% dedicated to your needs"
            customizePreFilledCVAndCo="Benefit from your all-in-one job space with offers, a dashboard to track"
            easyToUseAltResumeApp="applications, and our tailored advice to simplify your search."
            propAlignSelf="stretch"
          />
          <Background
            background="/background-8.svg"
            heading4ReadyToUseCVsAndC="Documents to download in PDF, TXT, or Word format"
            customizePreFilledCVAndCo="Your documents in high quality for applying, because we know it’s important"
            easyToUseAltResumeApp="to make the best impression on your future employer."
            propAlignSelf="unset"
          />
        </div>
      </div>
      <div className="trust-button">
        <div className="link9">
          <div className="create-a-cv3">Create a CV</div>
        </div>
      </div>
    </div>
  );
};

Section1.propTypes = {
  className: PropTypes.string,
};

export default Section1;
