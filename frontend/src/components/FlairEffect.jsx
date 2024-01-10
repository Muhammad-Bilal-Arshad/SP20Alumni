

import React, { useState, useEffect } from 'react';
import './FlairEffect.css';

const FlairEffect = () => {
  const [fireworks, setFireworks] = useState([]);

  const handleMouseMove = (e) => {
    const newFirework = {
      x: e.clientX,
      y: e.clientY,
      id: Date.now(),
    };

    setFireworks((prevFireworks) => [...prevFireworks, newFirework]);

   
    setTimeout(() => {
      setFireworks((prevFireworks) => prevFireworks.filter((fw) => fw.id !== newFirework.id));
    }, 1000);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      {fireworks.map((firework) => (
        <div
          key={firework.id}
          className="firework"
          style={{ left: firework.x, top: firework.y }}
        ></div>
      ))}
    </div>
  );
};

export default FlairEffect;
