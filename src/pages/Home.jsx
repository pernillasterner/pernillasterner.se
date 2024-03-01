import { Intro } from "../components/Intro/Intro";
import { Tech } from "../components/Tech/Tech";
import "./Home.scss";

export const Home = () => {
  return (
    <main>
      <Intro />
      <Tech />
    </main>
  );
};
