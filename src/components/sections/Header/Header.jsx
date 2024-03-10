import "./Header.scss";
import { ArrowDownIcon } from "../../../assets/Icons";
import { Paragraph } from "../../styles/typography/Paragraph";
import { Heading } from "../../styles/typography/Heading";

export const Header = () => {
  const introText =
    "I am a Full Stack Developer with a passion for UX/UI design and a background in interior design. My goal is to constantly challenge myself with new technologies and skills, creating user-friendly and innovative products. I really thrive in roles where I can blend my two big passions: design and web development.";

  return (
    <header tabIndex="0">
      <section className="intro-section">
        <div className="intro-container">
          <Heading
            level={4}
            text={"Hi, I'm Pernilla Sterner"}
            arial-label={"Developer greeing"}
            className={"intro-text"}
          />

          <Heading
            level={1}
            text={"Full Stack Developer"}
            arial-label={"Full Stack Developer"}
            className={"job-title"}
          />

          <div className="about-me-container">
            <div className="profile-image"></div>
            <div className="about-me-text">
              <Paragraph text={introText} className={"about-me"} />
            </div>
          </div>
        </div>
        <div className="arrow-down bounce">
          <ArrowDownIcon />
        </div>
      </section>
    </header>
  );
};
