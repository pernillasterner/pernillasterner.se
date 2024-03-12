import { Header } from "../components/sections/Header/Header";
import { Footer } from "../components/sections/Footer/Footer";
import { MyWords } from "../components/sections/MyWords/MyWords";
import { Projects } from "../components/sections/Projects/Projects";
import { Skills } from "../components/sections/Skills/Skills";
import { Tech } from "../components/sections/Tech/Tech";
import "./Home.scss";
import { FooterBanner } from "../components/sections/Footer/FooterBanner";

export const Home = () => {
  return (
    <main>
      <Header />
      <Tech />
      <Projects />
      <MyWords />
      <Skills />
      <Footer />
      <FooterBanner />
    </main>
  );
};
