import React from "react";
import ButtonPrime from "../Button/Button";
import PersonalImage from "./../../assets/menna.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div>
    <div className="head p-0 text-center bg-image">
      <div className="mask h-100" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <img className="rounded-circle m-2" src={PersonalImage} width="100" height="100" alt="Profile" />
          <div className="text-white">
            <h1>I'm</h1>
            <h1 className="mb-3">Menna Abdallah</h1>
            <h4 className="mb-3">Software Engineer</h4>
            <ButtonPrime buttonContent={"Explore More"} className="contact-btn" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
