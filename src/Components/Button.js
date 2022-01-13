import React from "react";
import "./Button.css";

const Button = ({ text, ...props }) => {
  return (
    <button class="pushable" {...props}>
      <span class="front">{text}</span>
    </button>
  );
};

export default Button;
