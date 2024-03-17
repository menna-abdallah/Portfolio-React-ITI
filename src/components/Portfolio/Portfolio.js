import React from "react";
import "./Portfolio.css";
import Card from "../Card/Card";
const Portfolio = () => {
  return (
    <section className="w-100 mt-5 px-5">
      <h2 className="section-title mb-4">Portifolio</h2>
      <div className="w-100 card-container d-flex flex-wrap justify-content-evenly align-items-center">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </section>
  );
};

export default Portfolio;
