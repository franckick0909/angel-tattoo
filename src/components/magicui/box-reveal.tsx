"use client";

import React from 'react';
import { motion, } from 'framer-motion';

interface BoxRevealProps {
  children: React.ReactNode;
  boxColor?: string;
  duration?: number;
  delay?: number;
  stagger?: number;
  originX?: number;
}

const BoxReveal: React.FC<BoxRevealProps> = ({
  children,
  boxColor = 'white',
  duration = 0.5,
  delay = 0,
  stagger = 0.1,
  originX = 0
}) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        delay: delay
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants} className="relative overflow-hidden">
          <motion.div
            initial={{ scaleX: 1 }}
            whileInView={{ scaleX: 0 }}
            transition={{ duration: duration, delay: delay + index * stagger }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: boxColor,
              originX: originX
            }}
          />
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BoxReveal;
