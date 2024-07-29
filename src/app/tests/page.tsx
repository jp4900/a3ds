"use client"
import React from 'react';
import { motion } from 'framer-motion';
import brainImage from '../../../public/images/logo/logo.png'; // Import your image

const squares = [
    { x: 10, y: 10, size: 20 },
    { x: 40, y: 20, size: 25 },
    { x: 70, y: 30, size: 30 },
    { x: 100, y: 40, size: 35 },
    { x: 130, y: 50, size: 40 },
    { x: 160, y: 60, size: 45 },
    { x: 190, y: 70, size: 50 },
    { x: 220, y: 80, size: 55 },
    { x: 250, y: 90, size: 60 },
    { x: 280, y: 100, size: 65 },
    { x: 30, y: 50, size: 25 },
    { x: 60, y: 70, size: 30 },
    { x: 90, y: 90, size: 35 },
    { x: 120, y: 110, size: 40 },
    { x: 150, y: 130, size: 45 },
    { x: 180, y: 150, size: 50 },
    { x: 210, y: 170, size: 55 },
    { x: 240, y: 190, size: 60 },
  ];

const BrainAnimation = () => {
  return (
    <div 
      style={{ 
        position: 'relative', 
        width: '100%', // Adjust based on your needs
        height: '300px', // Adjust based on your image
        backgroundImage: `url(${brainImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      {squares.map((square, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            left: square.x,
            top: square.y,
            width: 30,
            height: 30,
            borderRadius: 8,
            background: 'rgba(168, 230, 207, 0.5)', // Semi-transparent to show image underneath
          }}
          animate={{
            boxShadow: [
              '0 0 5px rgba(168, 230, 207, 0.7)',
              '0 0 20px rgba(168, 230, 207, 0.9)',
              '0 0 5px rgba(168, 230, 207, 0.7)'
            ],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.1,
          }}
        />
      ))}
    </div>
  );
};

export default BrainAnimation;