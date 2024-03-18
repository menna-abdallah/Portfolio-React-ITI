import React from "react";
import "./Portfolio.css";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import OutlinedCard from "../../shared/Card/Card";
import Button from '@mui/material/Button';
import { useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: "project1", description: "description1" },
    { id: 2, name: "project2", description: "description2" },
    { id: 3, name: "project3", description: "description3" },
    { id: 4, name: "project4", description: "description4" },
    { id: 5, name: "project5", description: "description5" },
    { id: 6, name: "project6", description: "description6" },
    { id: 7, name: "project7", description: "description7" },
    { id: 8, name: "project8", description: "description8" }
  ]);

  const content = (project) => {
    return (
      <div>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {project.id}
          </Typography>
          <Typography variant="h5" component="div">
            {project.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          </Typography>
          <Typography variant="body2">
            {project.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </div>
    );
  };

  return (
    <section className="w-100 mt-5 px-5">
      <h2 className="section-title mb-4">Portfolio</h2>
      <div className="w-100 card-container d-flex flex-wrap justify-content-evenly align-items-center">
        {projects.map((project, index) => (
          <OutlinedCard key={project.id} content={content(project)} backGroundColor={index % 2 === 0 ? "gray" : "white"} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
