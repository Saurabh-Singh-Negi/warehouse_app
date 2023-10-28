import React from "react";
import "./Card.css";
const Card = ({ warehouseData }) => {
  return (
    <div className="card-container">
      <div className="card-heading-container">
        <p className="card-heading">{warehouseData.name}</p>
      </div>
      <div className="card-details-container">
        <p className="card-details">Location: {warehouseData.city}</p>
      </div>
    </div>
  );
};

export default Card;
