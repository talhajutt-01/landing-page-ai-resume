import Header from "../components/Header";
import Section5 from "../components/Section5";
import Section4 from "../components/Section4";
import Section3 from "../components/Section3";
import SectionSection from "../components/SectionSection";
import Section2 from "../components/Section2";
import Section1 from "../components/Section1";
import Section from "../components/Section";
import Footer from "../components/Footer";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <Section5 />
      <Section4 />
      <Section3 />
      <SectionSection />
      <section className="section-parent">
        <Section2 />
        <Section1 />
        <Section />
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
