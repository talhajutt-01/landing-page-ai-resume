import HighlightImages from "./HighlightImages";
import PropTypes from "prop-types";
import "./Section2.css";

const Section2 = ({ className = "" }) => {
  return (
    <div className={`section3 ${className}`}>
      <div className="section4">
        <div className="highlight-items">
          <img
            className="features-modelspng-icon"
            loading="lazy"
            alt=""
            src="/featuresmodelspng@2x.png"
          />
          <HighlightImages
            standOutByCreatingAnImpac="Stand out by creating an impactful CV and"
            coverLetter="cover letter"
            maximizeYourChancesOfLand="Maximize your chances of landing your dream job with AltResume, the intuitive and user-"
            friendlyAppThatAllowsYouT="friendly app that allows you to create tailor-made CVs and cover letters in just a few"
            clicks="clicks."
            chooseATemplateAndQuickly="Choose a template and quickly customize your document to impress potential employers"
            andStandOutFromTheCrowd="and stand out from the crowd."
            customizeMyCV="Customize my CV"
          />
        </div>
        <div className="highlight-items1">
          <HighlightImages
            standOutByCreatingAnImpac="Expert advice to increase your chances of"
            coverLetter="success"
            maximizeYourChancesOfLand="Job searching can sometimes be a daunting process. That's why the AltResume team of"
            friendlyAppThatAllowsYouT="experts is here to help you see things more clearly and increase your chances of success."
            clicks="Our experts provide you with personalized advice for job searching, CV and cover letter"
            chooseATemplateAndQuickly="writing for your industry and profession, and guide you through the entire application"
            andStandOutFromTheCrowd="process."
            customizeMyCV="Discover our tips"
            propWidth="678.1px"
            propMinWidth="678.1px"
          />
          <img
            className="features-advicespng-icon"
            loading="lazy"
            alt=""
            src="/featuresadvicespng@2x.png"
          />
        </div>
        <div className="highlight-items2">
          <img
            className="features-jobspng-icon"
            loading="lazy"
            alt=""
            src="/featuresjobspng@2x.png"
          />
          <div className="highlight-items-inner">
            <div className="heading-3-find-the-perfect-j-parent">
              <h1 className="heading-3">
                Find the perfect job for your career
              </h1>
              <div className="altresume-offers-you-container">
                <p className="altresume-offers-you">
                  AltResume offers you an ultra-powerful search engine designed
                  to match your career
                </p>
                <p className="needs-and-goals">needs and goals.</p>
                <p className="it-analyzes-your">
                  It analyzes your qualifications and skills to provide you with
                  tailored job offers.
                </p>
                <p className="select-and-save">
                  Select and save offers in your job space or apply directly.
                </p>
                <p className="find-the-job">
                  Find the job that suits you in an instant, so you can focus on
                  what matters most: your
                </p>
                <p className="career">career!</p>
              </div>
              <div className="link6">
                <div className="find-a-job">Find a job</div>
              </div>
            </div>
          </div>
        </div>
        <div className="highlight-items3">
          <div className="highlight-items-child">
            <div className="heading-3-manage-your-applic-parent">
              <h1 className="heading-31">
                Manage your applications in a few clicks
              </h1>
              <div className="no-more-wasting-container">
                <p className="no-more-wasting">
                  No more wasting time searching for scattered applications on
                  different platforms!
                </p>
                <p className="altresume-provides-you">
                  AltResume provides you with an ergonomic dashboard that allows
                  you to track and
                </p>
                <p className="manage-your-applications">
                  manage your applications efficiently.
                </p>
                <p className="centralize-everything-on">
                  Centralize everything on one platform, apply quickly, and
                  manage recruiter responses to
                </p>
                <p className="save-time-in">save time in your searches.</p>
              </div>
              <div className="link7">
                <div className="access-the-dashboard">Access the dashboard</div>
              </div>
            </div>
          </div>
          <img
            className="features-managepng-icon"
            loading="lazy"
            alt=""
            src="/featuresmanagepng@2x.png"
          />
        </div>
      </div>
      <div className="section5">
        <div className="backgroundshadow">
          <img
            className="no-wait-to-apply-bgsvg-fill-icon"
            alt=""
            src="/nowaittoapplybgsvg-fill@2x.png"
          />
          <h1 className="dont-wait-any">Don't wait any longer to apply!</h1>
          <div className="link8">
            <div className="create-a-cv2">Create a CV</div>
          </div>
        </div>
        <img
          className="ready-to-create-templatespng-icon"
          loading="lazy"
          alt=""
          src="/readytocreatetemplatespng@2x.png"
        />
      </div>
    </div>
  );
};

Section2.propTypes = {
  className: PropTypes.string,
};

export default Section2;