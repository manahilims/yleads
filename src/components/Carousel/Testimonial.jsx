import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import person from "./../../assets/Images/person 2.png";
import Medium from "./../Typography/Medium";
import Regular from "./../Typography/Regular";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Semibold from "./../Typography/Semibold";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = ({ name, position }) => {
  const dummyText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

  //   const data = ["Hammad Akbar", "Manahil Tariq", "Sophie Hall"];
  const data = [
    { name: "Sophie Hall", position: "Web Design Agency" },
    { name: "Hammad Akbar", position: "Web developer" },
    { name: "Manahil Tariq", position: "UI/UX Desogner" },
  ];
  //   const [animation, setAnimation] = useState(null);
  //   const [index, setIndex] = useState(0);
  //   const onNextClick = () => {
  //     setAnimation("zoom-in-up");

  //     if (index === data.length - 1) {
  //       setIndex(0);
  //     } else {
  //       setIndex(index + 1);
  //     }
  //   };
  //   const onPreviousClick = () => {
  //     if (index === 0) {
  //       setIndex(2);
  //     } else {
  //       setIndex(index - 1);
  //     }
  //   };
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div id="overlay"></div>
      <div className="figure-container">
        <img src={person} alt="" className="testimonial-bg" />
        <div className="figure-review">
          <div className="medium-txt-align">
            <Medium text={dummyText} size="fs-34" color="c-white" />
          </div>
          <div className="figure-name">
            <Semibold text={name} color="c-white" size="fs-44" />
            <Regular text={position} color="c-white" size="fs-22" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
