import { Header } from "../components/sections/Header/Header";
import { MyWords } from "../components/sections/MyWords/MyWords";
import { Projects } from "../components/sections/Projects/Projects";
import { Tech } from "../components/sections/Tech/Tech";
import "./Home.scss";

export const Home = () => {
  return (
    <main>
      <Header />
      <Tech />
      <Projects />
      <MyWords />
    </main>
  );
};
