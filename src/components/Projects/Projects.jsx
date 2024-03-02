import "./Projects.scss";
import chatImage from "../../assets/project-images/chat.png";
import weatherImage from "../../assets/project-images/weather.png";
import gameImage from "../../assets/project-images/game.png";
import { GitHubBlackIcon, GlobeBlackIcon } from "../../assets/Icons";

export const Projects = () => {
  return (
    <section className="project-section">
      <div className="project-container">
        <h2 className="project-title">Featured Projects</h2>

        <div className="project-list">
          <div className="project-item">
            <img
              src={chatImage}
              alt="Chat Application"
              className="project-image"
            />
            <div className="project-details">
              <div className="project-description">
                <h3>Chatbot built in javascript</h3>
                <p>
                  The chat bot app is a conversational AI-powered tool designed
                  to enhance user experience by providing instant, personalized,
                  and automated responses to user inquiries.
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

          <div className="project-item">
            <img
              src={weatherImage}
              alt="Weather Application"
              className="project-image"
            />
            <div className="project-details">
              <div className="project-description">
                <h3>Weather app</h3>
                <p>
                  The chat bot app is a conversational AI-powered tool designed
                  to enhance user experience by providing instant, personalized,
                  and automated responses to user inquiries.
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

          <div className="project-item">
            <img
              src={gameImage}
              alt="Game Application"
              className="project-image"
            />
            <div className="project-details">
              <div className="project-description">
                <h3>Guess who the game</h3>
                <p>
                  The chat bot app is a conversational AI-powered tool designed
                  to enhance user experience by providing instant, personalized,
                  and automated responses to user inquiries.
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
      </div>
    </section>
  );
};
