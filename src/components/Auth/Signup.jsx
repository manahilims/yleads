import React from "react";
import "./Signup.css";
import Semibold from "./../Typography/Semibold";
import svgImage from "./../../assets/Images/signupimage.png";

import Testimonial from "../Carousel/Testimonial";
import Carousel from "./../Carousel/Carousel";
import Medium from "../Typography/Medium";
import Regular from "../Typography/Regular";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLink } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
const Signup = () => {
  return (
    <>
      <div className="signupContainer">
        <div className="signup-child">
          <div className="align-inputField">
            <Semibold text="Create new account" color="c-white" size="fs-44" />
            <p className="info-text">
              Already have an account? <a href="/">Login</a>
            </p>
            <div>
              <div>
                {" "}
                {/* Input fields */}
                <Medium text="Email Address" size="fs-24" color="c-white" />
                <span className="inputField">
                  <HiOutlineMail color="white" size={30} className="icon" />
                  <input
                    type="text"
                    // className=""
                    //   placeholder="Email Address"
                  />
                </span>
                <Medium text="Full Name" size="fs-24" color="c-white" />
                <div className="full-name">
                  <input
                    type="text"
                    //   placeholder="Email Address"
                  />

                  <input
                    type="text"
                    //   placeholder="Email Address"
                  />
                </div>
                <Medium text="Password" size="fs-24" color="c-white" />
                <span className="inputField">
                  <BiLockAlt color="white" size={30} className="icon" />
                  <input
                    type="password"
                    // className=""
                    //   placeholder="Email Address"
                  />
                </span>
                <Medium text="Confirm Password" size="fs-24" color="c-white" />
                <span className="inputField">
                  <BiLockAlt color="white" size={30} className="icon" />
                  <input
                    type="password"
                    // className=""
                    //   placeholder="Email Address"
                  />
                </span>
                <Medium
                  text="Youtube Channel Link"
                  size="fs-24"
                  color="c-white"
                />
                <span className="inputField">
                  <AiOutlineLink color="white" size={30} className="icon" />
                  <input
                    type="text"
                    // className=""
                    //   placeholder="Email Address"
                  />
                </span>
                <br />
                <label className="align">
                  <input type="checkbox" />
                  <Regular
                    text="I agree to platform’s Terms of service and privacy policy"
                    size="fs-20"
                    color="c-white"
                  />
                </label>
                <button href="/" className="btn-register">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="signup-child left">
          <div className="signup-svg">
            <p>YLeads</p>
            <img src={svgImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
