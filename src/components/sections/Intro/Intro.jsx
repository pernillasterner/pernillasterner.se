import "./Intro.scss";
import { ArrowDownIcon } from "../../../assets/Icons";

export const Intro = () => {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <p className="intro-text">Hi, I'm Pernilla Sterner</p>
        <h1 className="job-title">Full Stack Developer</h1>

        <div className="about-me-container">
          <div className="profile-image"></div>
          <div className="about-me-text">
            <p>
              I am a Full Stack Developer with a passion for UX/UI design and a
              background in interior design. My goal is to constantly challenge
              myself with new technologies and skills, creating user-friendly
              and innovative products. I really thrive in roles where I can
              blend my two big passions: design and web development.
            </p>
          </div>
        </div>
      </div>
      <div className="arrow-down bounce">
        <ArrowDownIcon />
      </div>
    </section>
  );
};
