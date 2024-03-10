import { Heading } from "../../styles/typography/Heading";
import { Paragraph } from "../../styles/typography/Paragraph";
import "./Tech.scss";

export const Tech = () => {
  const techStack =
    "HTML, CSS, Flexbox, Grids, JavaScript, ES6, JSX, React, React Hooks, Node.js, Mongo DB, Express, Web Accessibility, APIs, mob-programming, pair-programming, GitHub, Agile.";
  return (
    <section className="tech-section">
      <div className="tech-container">
        <Heading level={2} text={"Tech"} />

        <div className="tech-skills">
          <Paragraph text={techStack} className={"tech-p"} />
        </div>
      </div>
    </section>
  );
};
