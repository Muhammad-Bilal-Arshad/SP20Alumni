// Home.js

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Modal from './Modal'; // Import your Modal component
import "./Home.css";
import { data } from '../constants/data';

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
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedClassmate, setSelectedClassmate] = useState(null);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(0, prevPage - 1));
  };

  const openModal = (classmate) => {
    setSelectedClassmate(classmate);
  };

  const closeModal = () => {
    setSelectedClassmate(null);
  };

  const startIndex = currentPage * 2;
  const endIndex = startIndex + 2;

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="page">
      <div className="navigation">
        <button onClick={prevPage} disabled={currentPage === 0}>
          <ArrowLeft />
        </button>
        <button onClick={nextPage} disabled={endIndex >= data.length}>
          <ArrowRight />
        </button>
        
      </div>
      <h1 className="sp20title">BSE 2020 - 24</h1>
      <div className="yearbook-container">
        {data.slice(startIndex, endIndex).map((dataItem) => (
          <div key={dataItem.id} className="classmate-item" onClick={() => openModal(dataItem)}>
            <img src={dataItem.image} alt={dataItem.name} className="classmate-image" />
            <p className="classmate-name">{dataItem.name}</p>
            <p className="classmate-role">{dataItem.roll}</p>
            <p className="classmate-quote">{dataItem.quote.slice(0, 40)}...</p>
          </div>
        ))}
      </div>

      {selectedClassmate && (
        <Modal
          isOpen={!!selectedClassmate}
          onClose={closeModal}
          classmate={selectedClassmate}
        />
      )}
    </motion.div>
  );
}

export default Home;
