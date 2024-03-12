import "./Image.scss";

export const Image = ({
  sectionClassName,
  elementClassName,
  link,
  ImageAltText,
}) => {
  return (
    <div className={sectionClassName}>
      <img src={link} alt={ImageAltText} className={elementClassName} />
    </div>
  );
};
