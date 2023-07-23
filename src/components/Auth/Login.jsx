import React, { useEffect } from "react";
import Semibold from "./../Typography/Semibold";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonial from "../Carousel/Testimonial";
import Carousel from "../Carousel/Carousel";
import Medium from "../Typography/Medium";
import Regular from "../Typography/Regular";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLink } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";

const Login = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="signupContainer">
        <div className="signup-child child2">
          <div className="align-inputField">
            <div className="login-text-align">
              <Semibold text="Welcome Back." color="c-white" size="fs-44" />
            </div>

            <div>
              <div>
                {/* Input fields */}
                <span className="inputField in2">
                  <HiOutlineMail color="white" size={30} className="icon" />
                  <input
                    type="text"
                    // className=""
                    //   placeholder="Email Address"
                  />
                </span>
                <span className="inputField in2">
                  <BiLockAlt color="white" size={30} className="icon" />
                  <input
                    type="password"
                    // className=""
                    //   placeholder="Email Address"
                  />
                </span>
                <span className="login-align">
                  <label className="align ">
                    <input type="checkbox" />
                    <Regular text="Remember me" size="fs-20" color="c-white" />
                  </label>
                  <a>Forgot password?</a>
                </span>
                <button href="/" className="btn-register">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="signup-child right-div">
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default Login;
