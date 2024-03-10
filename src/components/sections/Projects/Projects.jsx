import "./Projects.scss";

import { useState, useEffect } from "react";
import { Heading } from "../../styles/typography/Heading";
import { ProjectCard } from "./ProjectCard";

const API = "https://api.github.com/users/pernillasterner/repos?per_page=100";

export const Projects = () => {
  const [gitRepos, setGitRepos] = useState([]);
  const [err, setErr] = useState(null);

  const fetchRepos = async () => {
    try {
      const respons = await fetch(API);

      if (!respons.ok) {
        throw new Error("Problem fetching API data");
      }

      const data = await respons.json();
      setGitRepos(data);
    } catch (err) {
      setErr(err);
      console.error(err);
    }
  };
  //Handle fetch
  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <section className="project-section">
      <div className="project-container">
        <Heading
          level={2}
          text={"Featured Projects"}
          className={"project-title"}
        />

        <ProjectCard repositories={gitRepos} />
      </div>
    </section>
  );
};
