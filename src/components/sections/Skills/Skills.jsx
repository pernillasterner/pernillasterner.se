import "./Skills.scss";
import { Heading } from "../../styles/typography/Heading";
import { SkillCard } from "./SkillCard";

export const Skills = () => {
  return (
    <section className="skill-section">
      <Heading level={2} text={"Skills"} className={"skill-title"} />
      <div className="skill-wrapper">
        <SkillCard />
      </div>
    </section>
  );
};
