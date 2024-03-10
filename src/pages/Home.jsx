import { Intro } from "../components/sections/Intro/Intro";
import { Projects } from "../components/sections/Projects/Projects";
import { Tech } from "../components/sections/Tech/Tech";
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
