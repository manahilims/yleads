import React from "react";
import "./Typo.css";
const Semibold = ({ ...props }) => {
  return (
    <>
      <p className={`typo-semibold ${props.color} ${props.size}`}>
        {props.text}
      </p>
    </>
  );
};

export default Semibold;
