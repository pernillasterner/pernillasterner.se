import "./MyWords.scss";
import { Heading } from "../../styles/typography/Heading";
import { Button } from "../../styles/button/Button";
import { ReadArticleIcon } from "../../../assets/Icons";
import imageUrl from "/assets/article-img/gap-img.jpg";

export const MyWords = () => {
  return (
    <article className="article-container">
      <Heading level={2} text={"My Words"} className={"article-heading"} />
      <div className="article-list">
        <div className="article-card">
          <div className="article-image-container">
            <img className="article-img" src={imageUrl} alt="Image Alt" />
          </div>
          <div className="article-text">
            <span className="tag-background" role="tag">
              <p className="tag-text">December 2023</p>
            </span>
            <Heading
              level={3}
              text={"Bridging the Gap: Transitioning from Finance to Tech"}
              className={"article-title"}
            />
          </div>
          <p>
            How to handle the challenge of bridging the gap between
            buzzword-heavy advancements and practical application. Explore how
            expertise from diverse domains converges to unlock innovation's true
            potential across industries.
          </p>
          <Button
            icon={<ReadArticleIcon />}
            label="Read article"
            link="#"
            className="article-btn"
          />
        </div>
      </div>
    </article>
  );
};
