import React from "react";
import "./Skills.css";
import Box from '@mui/material/Box';
import BorderLinearProgress from "../ProgressBar/ProgressBar";
const Skills = () => {
  return (
    <section className="skills-section  w-100 px-5 py-5 d-flex flex-column justify-content-between align-items-center">
      <div className="top-part d-flex flex-column justify-content-between align-items-center">
        <h2 className="section-title-skills mb-5">Skills</h2>
        <p className="w-75 text-center mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          assumenda porro suscipit tenetur dolorem numquam nemo? Dolor aut
          ratione rem magnam laborum inventore soluta magni voluptates
          aspernatur corporis. Laudantium, dolore. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Amet id, nemo facere animi fuga quas
          similique velit dignissimos distinctio iusto consequatur error
          doloremque? Ratione dolore voluptatem excepturi quam itaque adipisci.
        </p>
      </div>
      <div className="w-100 bottom-part d-flex justify-content-evenly align-items-center">
        <div className="my-focus-div">
          <p className="my-focus-p">My Focus</p>
          <ul>
            <li>Nodejs</li>
        <Box sx={{ flexGrow: 1 }}>
          <BorderLinearProgress variant="determinate" value={75} />
        </Box>
            <li>Reactjs</li>
        <Box sx={{ flexGrow: 1 }}>
          <BorderLinearProgress variant="determinate" value={80} />
        </Box>
            <li>Angular</li>
        <Box sx={{ flexGrow: 1 }}>
          <BorderLinearProgress variant="determinate" value={85} />
        </Box>
            <li>BootStrap</li>
        <Box sx={{ flexGrow: 1 }}>
          <BorderLinearProgress variant="determinate" value={75} />
        </Box>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
