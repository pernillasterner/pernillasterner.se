import "./Intro.scss";
import { ArrowDownIcon } from "../../assets/Icons";

export const Intro = () => {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <p className="intro-text">Hi, I’m Pernilla Sterner</p>
        <h1 className="job-title">Software Developer</h1>

        <div className="about-me-container">
          <div className="profile-image"></div>
          <div className="about-me-text">
            Hi, I'm Pernilla. Currently, I'm part of a Web Development Bootcamp
            at Technigo. While I've got some experience in web development, my
            goal with this education is to deep dive into
            <span> JavaScript</span>, <span>React</span>, and
            <span> TypeScript</span>. I'm in the process of redesigning my
            portfolio, but you can always shoot me an email at
            <a href="mailto:hej@pernillasterner.se"> hej@pernillasterner.se</a>.
          </div>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/pernilla-sterner/">Linkedin</a>
          <a href="https://github.com/pernillasterner">GitHub</a>
        </div>
      </div>
      <div className="arrow-down bounce">
        <ArrowDownIcon />
      </div>
    </section>
  );
};
