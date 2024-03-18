import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope ,faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faGithub  } from "@fortawesome/free-brands-svg-icons";
import ButtonPrime from "../../shared/Button/Button";

function Footer() {
  return (
    <section className="footer-section w-100 mt-5 px-5 py-5 d-flex justify-content-center align-items-center">
      <div className="right-part w-50">
        <p>GET IN TOUCH</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <br></br>
            menna.abdallh11@gmail.com
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <br></br>
            01153039490
          </li>
        </ul>
      </div>
      <ButtonPrime
              variant={"outlined"}
              buttonContent={"Connect ME"}
              backgroundColor={'#220024'}
              className="resume-btn mt-4"
            />
      <div className="left-part w-25">
        <ul>
          <li>
            <a href="/#">
              <FontAwesomeIcon icon={faFacebook} className="icon" />
            </a>
          </li>
          <li>
            <a href="/#">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
          </li>
          <li>
            <a href="/#">
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
