import "./LetsTalk.scss";
import { Heading } from "../../styles/typography/Heading";

export const LetsTalk = () => {
  return (
    <footer className="contact-container">
      <section className="contact-wrapper">
        <Heading
          level={2}
          text="Let's talk"
          aria-label="This is the main heading"
          className="contact-heading"
        />
        {/* <Image
          sectionClassName={"profile-img"}
          elementClassName={"circle-img"}
          link={"/assets/profile-img-maria.JPG"}
          ImageAltText={"Profile Image of Maria"}
        /> */}
        <div className="profile-image"></div>
        <div className="contact-info">
          <Heading level={4} text={"Pernilla Sterner"} />
          <a href="tel:+730300766">
            <Heading level={4} text={"+46(0)70818 21 48"} />
          </a>
          <a href="mailto:hey@pernillasterner.se">
            <Heading level={4} text={"hey@pernillasterner.se"} />
          </a>
        </div>
        <div className="icons">
          {/* <a href="https://www.linkedin.com/in/pernillasterner">
            <Image
              sectionClassName={"icon-box"}
              elementClassName={"icon"}
              link={"/assets/icons/linkedin.svg"}
              ImageAltText={"Link to LinkedIn"}
            />
          </a>
          <a href="https://github.com/pernillasterner">
            <Image
              sectionClassName={"icon-box"}
              elementClassName={"icon"}
              link={"/assets/icons/github.svg"}
              ImageAltText={"Link to GitHub"}
            />
          </a>
          <a href="https://stackoverflowteams.com/c/technigo/users/578/">
            <Image
              sectionClassName={"icon-box"}
              elementClassName={"icon"}
              link={"/assets/icons/stackoverflow.svg"}
              ImageAltText={"Link to StackOverflow"}
            />
          </a>
          <a href="https://www.instagram.com/pernillasterner.se/">
            <Image
              sectionClassName={"icon-box"}
              elementClassName={"icon"}
              link={"/assets/icons/instagram.svg"}
              ImageAltText={"Link to Instagram"}
            />
          </a> */}
        </div>
      </section>
    </footer>
  );
};
