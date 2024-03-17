import React from "react";
import ButtonPrime from "../Button/Button";
import "./About.css";

const About = () => {
  return (
    <div className="container" style={{ margin: "40px" }}>
      <div className="row">
        <div className="col-3" style={{ textAlign: "center" }}>
          <h2 style={{ lineHeight: "5rem" }}>About Me</h2>
        </div>
        <div className="col">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            corporis nesciunt nostrum placeat vel nulla rerum animi libero
            sunt dolores, voluptates ex dolore praesentium alias dignissimos.
            Quidem beatae ut fugit.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatem quod cupiditate iure amet dolorem ea
            earum natus, aperiam ab alias omnis nobis facere. Temporibus autem
            eum veniam. Esse, quis doloremque?
          </p>
          <a href="../../assets/file.txt" download>
            <ButtonPrime
              buttonContent={"Download Resume"}
              className="resume-btn mt-4"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
