import PropTypes from "prop-types";
import "./Section4.css";

const Section4 = ({ className = "" }) => {
  return (
    <section className={`section1 ${className}`}>
      <div className="trust-heading-container">
        <h3 className="heading-2">
          Trusted by 1.2 million successful job seekers around the world
        </h3>
      </div>
      <div className="company-logos">
        <img
          className="tescopng-icon"
          loading="lazy"
          alt=""
          src="/tescopng@2x.png"
        />
        <img
          className="avivapng-icon"
          loading="lazy"
          alt=""
          src="/avivapng@2x.png"
        />
        <img
          className="nhspng-icon"
          loading="lazy"
          alt=""
          src="/nhspng@2x.png"
        />
        <img
          className="unileverpng-icon"
          loading="lazy"
          alt=""
          src="/unileverpng@2x.png"
        />
        <img
          className="hsbcpng-icon"
          loading="lazy"
          alt=""
          src="/hsbcpng@2x.png"
        />
      </div>
    </section>
  );
};

Section4.propTypes = {
  className: PropTypes.string,
};

export default Section4;
