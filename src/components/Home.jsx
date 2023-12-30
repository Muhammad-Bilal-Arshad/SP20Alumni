import React from "react";
import { motion } from "framer-motion";
import "./Home.css"; 
import comsats from '../assets/images/comsats.png';

const classmates = [
  { id: 1, name: "John Doe", role: "President", quote: "Making memories that will last a lifetime!", image: comsats },
  { id: 2, name: "Jane Smith", role: "Vice President", quote: "Cherish every moment, and success will follow.", image: comsats },
 
];

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 1, 
    },
  },
};

function Home() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="page">
      <div className="yearbook-container">
        {classmates.map((classmate) => (
          <div key={classmate.id} className="classmate-item">
            <img src={classmate.image} alt={classmate.name} className="classmate-image" />
            <p className="classmate-name">{classmate.name}</p>
            <p className="classmate-role">{classmate.role}</p>
            <p className="classmate-quote">{classmate.quote}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Home;
