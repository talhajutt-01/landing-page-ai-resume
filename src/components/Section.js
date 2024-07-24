import ClassicPlanButton from "./ClassicPlanButton";
import PropTypes from "prop-types";
import "./Section.css";

const Section = ({ className = "" }) => {
  return (
    <div className={`section7 ${className}`}>
      <div className="pricing-heading">
        <div className="pricing-title">
          <div className="heading-1-pricing-wrapper">
            <h1 className="heading-1">Pricing</h1>
          </div>
          <div className="altresume-helps-you-container1">
            <p className="altresume-helps-you1">
              AltResume helps you achieve your goals by providing you with a
              practical platform tailored to
            </p>
            <p className="your-job-search">your job search needs.</p>
          </div>
        </div>
      </div>
      <div className="plan-container">
        <div className="plan-wrapper">
          <div className="plan-card">
            <div className="popular-plan">
              <div className="plan-name">
                <img
                  className="week-plans-bgsvg-icon"
                  alt=""
                  src="/weekplansbgsvg.svg"
                />
                <div className="backgroundbordershadow">
                  <div className="container8">
                    <div className="classic-plan-features">
                      <img
                        className="plan-1svg-icon"
                        loading="lazy"
                        alt=""
                        src="/plan1svg.svg"
                      />
                      <b className="days-classic">7 Days Classic</b>
                    </div>
                    <div className="horizontalborder">
                      <div className="feature-two-icon">0.90 $</div>
                    </div>
                  </div>
                  <ClassicPlanButton
                    grayCrosssvg="/graycrosssvg@2x.png"
                    grayCrosssvg1="/graycrosssvg-1@2x.png"
                  />
                  <div className="classic-plan-button1">
                    <div className="link10">
                      <div className="create-my-cv">Create my CV</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="backgroundbordershadow1">
                <div className="container9">
                  <div className="plan-name-wrapper">
                    <div className="plan-name-content">
                      <img
                        className="plan-0svg-icon"
                        loading="lazy"
                        alt=""
                        src="/plan0svg@2x.png"
                      />
                      <b className="days-unlimited">7 Days Unlimited</b>
                    </div>
                    <div className="border3">
                      <div className="most-popular">Most popular</div>
                    </div>
                  </div>
                  <div className="horizontalborder1">
                    <div className="popular-plan-separator">1.90 $</div>
                  </div>
                </div>
                <ClassicPlanButton
                  grayCrosssvg="/bluechecksvg.svg"
                  grayCrosssvg1="/bluechecksvg-7.svg"
                />
                <div className="premium-plan-button">
                  <div className="link11">
                    <div className="create-my-cv1">Create my CV</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="verticalborder">
            <div className="after-7-days-container">
              <p className="after-7-days">
                After 7 days, your subscription will be automatically renewed
                and 29.9$, invoiced every 30 days. You
              </p>
              <p className="can-terminate-it">
                can terminate it at any time without any problems.
              </p>
            </div>
          </div>
        </div>
        <div className="premium-plan">
          <div className="backgroundbordershadow2">
            <div className="container10">
              <img
                className="plan-2svg-icon"
                loading="lazy"
                alt=""
                src="/plan2svg.svg"
              />
              <div className="premium-plan-description">
                <b className="monthly-unlimited">Monthly Unlimited</b>
                <div className="paragraphhorizontalborder">
                  <div className="div">{`89.90 $ `}</div>
                  <div className="premium-plan-price">
                    <div className="per-year">per year</div>
                  </div>
                </div>
              </div>
            </div>
            <ClassicPlanButton
              grayCrosssvg="/bluechecksvg.svg"
              grayCrosssvg1="/bluechecksvg-12.svg"
            />
            <div className="premium-plan-create-button">
              <div className="link12">
                <div className="create-my-cv2">Create my CV</div>
              </div>
            </div>
          </div>
          <div className="premium-plan-renewal-info">
            <div className="a-single-payment-container">
              <p className="a-single-payment">
                A single payment of 89.9$, to be renewed
              </p>
              <p className="automatically-each-year">
                automatically each year. You can terminate it at
              </p>
              <p className="any-time-without">any time without any problems.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section;
