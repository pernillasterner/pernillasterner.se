import "./Projects.scss";
import chatImage from "../../../assets/project-images/chat.png";
import { GitHubBlackIcon, GlobeBlackIcon } from "../../../assets/Icons";
import { useState } from "react";
import { projects } from "./repo-data.json";

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
    const aData = projects.find(data => data.repoName === a.name);
    const bData = projects.find(data => data.repoName === b.name);
    return bData.id - aData.id
  })

  const toggleVisibleCards = () => {
    // Show 5 cards or all cards based on current state
    setVisibleRepos(prevVisibleCards => (prevVisibleCards === 5 ? filteredRepos.length))
  };

  const showMoreLessLabel = visibleCards === 5 ? "Show more" : "Show less";

  console.log(filteredRepos);
  return (
    <div className="project-list">
      <div className="project-item">
        <img src={chatImage} alt="Chat Application" className="project-image" />
        <div className="project-details">
          <div className="project-description">
            <h3>Chatbot built in javascript</h3>
            <p>
              The chat bot app is a conversational AI-powered tool designed to
              enhance user experience by providing instant, personalized, and
              automated responses to user inquiries.
            </p>
            <div className="skill-tags">
              <p className="skill-tag">HTML5</p>
              <p className="skill-tag">CSS3</p>
              <p className="skill-tag">React</p>
              <p className="skill-tag">Node</p>
            </div>
          </div>
          <div className="view-live">
            <div className="view-btn globe">
              <GlobeBlackIcon />
              <a href="">Live demo</a>
            </div>
            <div className="view-btn github">
              <GitHubBlackIcon />
              <a href="">View the code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
