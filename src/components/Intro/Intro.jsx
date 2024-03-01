import "./Intro.scss";
import { ArrowDownIcon } from "../../assets/Icons";

export const Intro = () => {
  return (
    <section className="intro-container">
      <div className="intro-wrapper">
        <p className="intro-text">Hi, I’m Pernilla Sterner</p>
        <h1 className="job-title">Frontend Developer</h1>

        <div className="about-me-container">
          <div className="profile-image"></div>
          <div className="about-me-text">
            Pernilla is an exceptional developer known for her innovative
            solutions and exceptional coding abilities. She creates
            user-friendly applications and solves complex issues with ease. Her
            drive for excellence makes her a valuable asset to any project and a
            standout in the technology field.
          </div>
        </div>
      </div>
      <div className="arrow-down bounce">
        <ArrowDownIcon />
      </div>
    </section>
  );
};
