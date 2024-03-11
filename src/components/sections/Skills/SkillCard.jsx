import "./Skills.scss";
import { Heading } from "../../styles/typography/Heading";
import skills from "./skills.json";

export const SkillCard = () => {
  return (
    <>
      {skills.map((skillCategory) => (
        <article key={skillCategory.name}>
          <div className="skill-box">
            <Heading
              level={3}
              text={skillCategory.name}
              className={`skills-subheading subheading-${skillCategory.id}`}
            />
            <ul>
              {skillCategory.skillset.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </>
  );
};
