// Welcome.jsx

import React from "react";
import comsats from "../assets/images/comsats.png";
import { Link } from "react-router-dom";
import { ArrowRightCircle } from "lucide-react";
import FlairEffect from "./FlairEffect"; 
import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcomecontan">
      <div className="comsatscontainer">
        <img className="comsatsImg" src={comsats} alt="Comsats Logo" />
      </div>
      <div className="titlecontainer">
        <h1 className="classtitle">BSE-SP20-B</h1>
      </div>
      <div className="welcome">
        <p className="custom-text">Welcome to our Year Book</p>
      </div>
      <div className="proceed">
        <Link to="/home">
          <ArrowRightCircle size={60} />
        </Link>
      </div>
      <FlairEffect />
    </div>
  );
}

export default Welcome;
