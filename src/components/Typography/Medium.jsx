import React from "react";
import "./Typo.css";
const Medium = ({ ...props }) => {
  return (
    <p className={`typo-medium ${props.color} ${props.size}`}>{props.text}</p>
  );
};

export default Medium;
