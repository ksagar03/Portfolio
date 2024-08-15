"use client";

import React from "react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// const RaindropEffect = () => {
//   const raindrop = {
//     initial: { y: "-100%", opacity: 0 },
//     animate: {
//       y: "100vh",
//       opacity: 1,
//       transition: {
//         duration: 2,
//         ease: "linear",
//         repeat: Infinity,
//         repeatType: "loop",
//       },
//     },
//   };
//   return (
//     <div className=" relative w-full h-screen overflow-hidden">
//       <div className=" absolute top-0 left-0 w-full h-full">
//         {[...Array(Math.floor(Math.random() * 100))].map((_, i) => (
//           <motion.div
//             key={i}
//             variants={raindrop}
//             className="absolute w-1 h-10 bg-slate-500 rounded-full"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               opacity: `${Math.random()}`,
//             }}
//             initial="initial"
//             animate="animate"
//             transition={{
//               delay: Math.random() * 2,
//               duration: Math.random() * 2 + 1,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RaindropEffect;

const RaindropEffect = ({dropColor}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = window.innerWidth;
    const height = document.body.scrollHeight;

    canvas.width = width;
    canvas.height = height;

    const raindrop = [];
    for (let i = 0; i < 200; i++) {
      raindrop.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 5 + 5,
        opacity: Math.random(),
        speed: Math.random() * 0.5+ 0.5 ,
        blur: Math.random() * 3,
        sway: Math.random() * 0.5 - 0.25
      });
    }

    const drawRainDrops = () => {
      ctx.clearRect(0, 0, width, height);
      // ctx.fillStyle = "rgba(255,255,255,0.8)";

      raindrop.forEach((drop) => {
        // ctx.globalAlpha = drop.opacity;
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + drop.sway, drop.y + 3);
        ctx.strokeStyle = dropColor === "dark" ? `rgba(255,255,255, ${drop.opacity})` : `rgba(60,60,60, ${drop.opacity})`
        // ctx.strokeStyle = "black";
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.shadowBlur = drop.blur
        ctx.shadowColor = 'rgba(255, 255, 250, 0.5)'
        ctx.stroke();

        drop.y += drop.speed;
        drop.x +=drop.sway

        if (drop.y > height) {
          drop.y = - 4;
          drop.x = Math.random() * width
          drop.speed = Math.random() * 0.5 + 0.5 ;
          drop.opacity = Math.random();
          drop.sway = Math.random() * 0.5 -0.25;
          drop.blur = Math.random() *3
        }
      });
      requestAnimationFrame(drawRainDrops);
    };
    drawRainDrops();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dropColor]);

  return <canvas ref={canvasRef} className="fixed w-full z-10 top-0 left-0 bottom-0  " />;
};

export default RaindropEffect;
