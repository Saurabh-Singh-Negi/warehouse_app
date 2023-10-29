import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="nav-container" onClick={handleClick}>
      <p className="nav-heading">Home</p>
    </div>
  );
};

export default Navbar;
