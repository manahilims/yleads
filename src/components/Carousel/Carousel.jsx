import React, { useState, useEffect } from "react";
import Testimonial from "./Testimonial";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

import "./Carousel.css";
const Carousel = () => {
  const data = [
    { name: "Sophie Hall", position: "Web Design Agency" },
    { name: "Hammad Akbar", position: "Web developer" },
    { name: "Manahil Tariq", position: "UI/UX Desogner" },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : data.length - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < data.length - 1 ? prev + 1 : 0));
  };
  return (
    <>
      <div className="carousel-container">
        <div
          className="carousel-slide"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {data.map((item, index) => (
            <Testimonial name={item.name} position={item.position} />
          ))}
        </div>
      </div>
      <div className="alignNextBtns">
        <div className="btn-next" onClick={handlePrev}>
          <GrFormPrevious />
        </div>
        <div className="btn-next" onClick={handleNext}>
          <GrFormNext />
        </div>
      </div>
    </>
  );
};

export default Carousel;
