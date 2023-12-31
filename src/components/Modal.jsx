// Modal.js

import React from 'react';
import './Modal.css'; // Import your Modal styles

const Modal = ({ isOpen, onClose, classmate }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{classmate.name}</h2>
        <p>{classmate.quote}</p>
      </div>
    </div>
  );
};

export default Modal;
