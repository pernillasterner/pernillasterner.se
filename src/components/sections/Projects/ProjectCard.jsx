import "./Projects.scss";
import chatImage from "../../../assets/project-images/chat.png";
import { GitHubBlackIcon, GlobeBlackIcon } from "../../../assets/Icons";
import { useState } from "react";
import { projects } from "./repo-data.json";
import { Tag } from "/src/components/styles/typography/Tag.jsx";

/**
 * created_at: "2023-08-08T12:58:46Z"
 * description: "WordPress Multisite with Bedrock, Composer, and WPML Integration"
 * name: "multisite"
 * id: 676108650
 * language:
 * topics: Array(13) [ "arrays", "css3", "figma", … ]
 * html_url: "https://github.com/pernillasterner/technigo-project-library"
 * homepage: "https://technigo-project-library.netlify.app/"
 */

export const ProjectCard = ({ repositories }) => {
  // State to track the number fo cards to display
  const [visibleRepos, setVisibleRepos] = useState(5);

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

  const showMoreLessLabel = visibleRepos === 5 ? "Show more" : "Show less";

  console.log(filteredRepos);
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
              src={chatImage}
              alt="Chat Application"
              className="project-image"
            />
            <div className="project-details">
              <div className="project-description">
                <h3>{matchingData.publicName}</h3>
                <p>{repo.description}</p>
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
