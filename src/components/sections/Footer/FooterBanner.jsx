import "./Footer.scss";
import { Heading } from "../../styles/typography/Heading";

export const FooterBanner = () => {
  return (
    <div className="banner">
      <Heading
        level={3}
        text="Pernilla Sterner · Fullstack Developer · Pernilla Sterner · Fullstack Developer · Pernilla Sterner · Fullstack Developer · Pernilla Sterner · Fullstack Developer · Pernilla Sterner · Fullstack Developer · Pernilla Sterner · Fullstack Developer · Pernilla Sterner · Fullstack Developer · Pernilla Sterner · Fullstack Developer · Pernilla Sterner · Fullstack Developer · Pernilla Sterner · Fullstack Developer · Pernilla Sterner · Fullstack Developer"
        aria-label="true"
        className="scroll-text"
      />
    </div>
  );
};
