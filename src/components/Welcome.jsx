

import React from "react";
import comsats from "../assets/images/comsats.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";
import FlairEffect from "./FlairEffect";
import "./Welcome.css";

const containerVariants = {
  hidden: { opacity: 0, y: "-100vh" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

function Welcome() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="welcomecontan"
    >
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
          <motion.div whileHover={{ scale: 1.1 }}>
            <ArrowRightCircle className="arrowIcon" size={60} />
          </motion.div>
        </Link>
      </div>
      <FlairEffect />
    </motion.div>
  );
}

export default Welcome;
