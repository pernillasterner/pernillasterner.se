import "./Button.scss";
import React from "react";

export const Button = ({
  icon,
  label,
  link,
  className,
  onClick,
  ariaLabel,
}) => {
  const handleClick = () => {
    // Open link in a new window
    window.open(link, "_black");
  };

  return (
    <button
      className={`button ${className || ""}`}
      onClick={onClick || handleClick} // If onClick is true invoke handleClick
      aria-label={ariaLabel || label} // Allow custom aria-label
    >
      {/* {icon && <img src={icon} alt="" className="icon" aria-hidden="true" />} */}
      {icon && React.cloneElement(icon, { className: "icon" })}
      <span className="label">{label}</span>
    </button>
  );
};
