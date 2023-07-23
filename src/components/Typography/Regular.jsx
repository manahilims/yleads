import React from "react";
import "./Typo.css";
const Regular = ({ ...props }) => {
  return (
    <>
      <p className={`typo-regular ${props.color} ${props.size}`}>
        {props.text}
      </p>
    </>
  );
};

export default Regular;
