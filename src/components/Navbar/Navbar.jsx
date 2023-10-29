import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="navbar-container">
      <div className="navbar-heading" onClick={handleClick}>
        <p>Home</p>
      </div>
    </div>
  );
};

export default Navbar;
