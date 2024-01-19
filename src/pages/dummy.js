import React from "react";
import { motion } from "framer-motion";

const Circle = ({ text="hell" }) => {
  const variants = {
    initial: {
      rotate: 0,
    },
    animate: {
      rotate: 360,
      transition: {
        duration: 10,
        ease: "linear",
      },
    },
  };

  const circumference = 2 * Math.PI * 50;

  const textLength = text.length;

  const textAngle = 360 / textLength;

  return (
    <motion.svg
      variants={variants}
      initial="initial"
      animate="animate"
      width={200}
      height={200}
      viewBox="0 0 200 200"
     className="items-center justify-center">
      <motion.circle
        cx={100}
        cy={100}
        r={50}
        fill="red"
        stroke="black"
        strokeWidth={5}
      />
      {Array.from({ length: textLength }, (_, i) => (
        <motion.text
          key={i}
          x={100 + circumference / 2 - textAngle * i}
          y={100}
          textAnchor="middle"
          fontSize={30}
          fill="white"
          stroke="black"
          strokeWidth={2}
          variants={variants}
        >
          {text[i]}
        </motion.text>
      ))}
    </motion.svg>
  );
};

export default Circle;