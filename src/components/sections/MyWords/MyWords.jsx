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
              text={"Lorem Ipsum...."}
              className={"article-title"}
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
