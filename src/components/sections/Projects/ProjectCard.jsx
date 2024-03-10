import "./Projects.scss";
// import newsImage from "/assets/project-img/news.png";
import { GitHubBlackIcon, GlobeBlackIcon } from "../../../assets/Icons";
import { useState } from "react";
import { projects } from "./repo-data.json";
import { Tag } from "/src/components/styles/typography/Tag.jsx";
import { Paragraph } from "../../styles/typography/Paragraph";
import { Heading } from "../../styles/typography/Heading";

export const ProjectCard = ({ repositories }) => {
  // State to track the number fo cards to display
  const [visibleRepos, setVisibleRepos] = useState(10);

  // Filter and match respositories with data in repoData.projects
  const filteredRepos = repositories.filter((repo) => {
    return projects.some((data) => data.repoName === repo.name);
  });

  // Sort the filtered repositories by their id (highest first)
  filteredRepos.sort((a, b) => {
    const aData = projects.find((data) => data.repoName === a.name);
    const bData = projects.find((data) => data.repoName === b.name);
    return bData.id - aData.id;
  });

  const toggleVisibleCards = () => {
    // Show 5 cards or all cards based on current state
    setVisibleRepos((prevVisibleCards) =>
      prevVisibleCards === 5 ? filteredRepos.length : 5
    );
  };

  const showMoreLessLabel = visibleRepos === 10 ? "Show more" : "Show less";

  return (
    <div className="project-list">
      {filteredRepos.slice(0, visibleRepos).map((repo) => {
        const matchingData = projects.find(
          (data) => data.repoName === repo.name
        );

        // Handle missing data
        if (!matchingData) return null;

        return (
          <article className="project-item" key={matchingData.id}>
            <img
              src={matchingData.imageUrl}
              alt="Chat Application"
              className="project-image"
              onError={(e) => console.error("Image failed to load:", e)}
            />
            <div className="project-details">
              <div className="project-description">
                <Heading level={3} text={matchingData.publicName} />
                <Paragraph text={repo.description} />
                <div className="skill-tags">
                  {repo.topics.map((topic, index) => (
                    <Tag key={index} tagText={topic} />
                  ))}
                </div>
              </div>
              <div className="view-live">
                <div className="view-btn globe">
                  <GlobeBlackIcon />
                  <a href={repo.homepage}>Live demo</a>
                </div>
                <div className="view-btn github">
                  <GitHubBlackIcon />
                  <a href={repo.html_url}>View the code</a>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};
