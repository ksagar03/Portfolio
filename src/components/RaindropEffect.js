"use client";

import React from "react";
import { useEffect, useRef } from "react";

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

const RaindropEffect = ({ dropColor }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Respect the OS-level "reduce motion" setting entirely — skip the
    // animation loop rather than running a background effect the user
    // explicitly asked not to see.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Mobile GPUs/CPUs have a much smaller canvas budget than a laptop, so
    // scale the workload down instead of running the same effect everywhere:
    // fewer particles, no per-particle shadowBlur (by far the most expensive
    // canvas operation here — it forces a blur convolution on every stroke,
    // every frame), and a capped frame rate.
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const DROP_COUNT = isMobile ? 60 : 200;
    const useGlow = !isMobile;
    const frameInterval = isMobile ? 1000 / 30 : 0; // 30fps on mobile, uncapped (~60fps) on desktop

    let width = window.innerWidth;
    let height = document.body.scrollHeight;
    canvas.width = width;
    canvas.height = height;

    const raindrop = [];
    for (let i = 0; i < DROP_COUNT; i++) {
      raindrop.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: Math.random() * 0.5 + 0.5,
        opacity: Math.random(),
        blur: Math.random() * 3,
        sway: Math.random() * 0.5 - 0.25,
      });
    }

    let rafId;
    let lastFrameTime = 0;

    const drawRainDrops = (timestamp) => {
      rafId = requestAnimationFrame(drawRainDrops);

      // Frame-skip on mobile instead of letting the browser attempt a full
      // 60fps canvas redraw it can't actually keep up with.
      if (frameInterval && timestamp - lastFrameTime < frameInterval) return;
      lastFrameTime = timestamp;

      ctx.clearRect(0, 0, width, height);

      raindrop.forEach((drop) => {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + drop.sway, drop.y + 3);
        ctx.strokeStyle =
          dropColor === "dark"
            ? `rgba(255,255,255, ${drop.opacity})`
            : `rgba(60,60,60, ${drop.opacity})`;
        ctx.lineWidth = 4;
        ctx.lineCap = "round";
        if (useGlow) {
          ctx.shadowBlur = drop.blur;
          ctx.shadowColor = "rgba(255, 255, 250, 0.5)";
        }
        ctx.stroke();

        drop.y += drop.speed;
        drop.x += drop.sway;

        if (drop.y > height) {
          drop.y = -4;
          drop.x = Math.random() * width;
          drop.speed = Math.random() * 0.5 + 0.5;
          drop.opacity = Math.random();
          drop.sway = Math.random() * 0.5 - 0.25;
          drop.blur = Math.random() * 3;
        }
      });
    };

    rafId = requestAnimationFrame(drawRainDrops);

    // Stop entirely when the tab isn't visible — no point burning battery
    // and CPU animating a canvas nobody can see.
    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else {
        lastFrameTime = 0;
        rafId = requestAnimationFrame(drawRainDrops);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const handleResize = () => {
      width = window.innerWidth;
      height = document.body.scrollHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [dropColor]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed w-full z-10 top-0 left-0 bottom-0  "
    />
  );
};

export default RaindropEffect;
