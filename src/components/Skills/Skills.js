import React from "react";
import "./Skills.css";
import Box from '@mui/material/Box';
import BorderLinearProgress from "../../shared/ProgressBar/ProgressBar";

const Skills = () => {
  const skills = [
  { id: 1, name: "NodeJs" , progress: 75 }, 
  { id: 2, name: "Angular" , progress : 80},
  { id: 2, name: "ReactJs" , progress : 90 },
  { id: 2, name: "Js" , progress : 90},
  { id: 2, name: "Mongo" , progress : 85 },
];

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
            {skills.map((e) => (
              <li key={e.id}>
                <Box sx={{ flexGrow: 1 }}>
                  <BorderLinearProgress 
                  variant="determinate" 
                  value={e.progress} 
                  skillName={e.name} />
                </Box>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
