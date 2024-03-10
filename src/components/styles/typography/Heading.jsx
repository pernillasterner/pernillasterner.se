import "./typography.scss";

export const Heading = ({ level, text, className }) => {
  const Tag = `h${level}`;
  return <Tag className={className}>{text}</Tag>;
};

// Define default and customizable props
Heading.defaultProps = {
  level: 1, // Default h1
  className: "",
};
