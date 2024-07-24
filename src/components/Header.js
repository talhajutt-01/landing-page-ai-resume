import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`header ${className}`}>
      <div className="header-logo">
        <div className="dummy-parent">
          <div className="bg" />
          <img className="dummy-icon" alt="" src="/dummy.svg" />
        </div>
      </div>
      <div className="header-link">
        <div className="create-c-v-link">
          <div className="techrealm">TechRealm</div>
          <div className="create-a-cv-wrapper">
            <a className="create-a-cv">Create a CV</a>
          </div>
        </div>
      </div>
      <div className="template-categories">
        <div className="arrow down" />
      </div>
      <div className="template-categories1">
        <a className="cv-templates">CV Templates</a>
      </div>
      <div className="template-categories2">
        <div className="arrow down" />
      </div>
      <div className="template-categories3">
        <a className="cover-letter">Cover Letter</a>
      </div>
      <div className="template-categories4">
        <div className="arrow down" />
      </div>
      <div className="template-categories5">
        <a className="subscriber-area">Subscriber area</a>
      </div>
      <div className="link-wrapper">
        <div className="link">
          <a className="create-a-cv1">Create a CV</a>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
