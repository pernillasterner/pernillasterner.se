import { Intro } from "../components/Intro/Intro";
import { Projects } from "../components/Projects/Projects";
import { Tech } from "../components/Tech/Tech";
import "./Home.scss";

export const Home = () => {
  return (
    <main>
      <Intro />
      <Tech />
      <Projects />
    </main>
  );
};
