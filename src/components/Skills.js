import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { skills, skillsCenterLabel } from "@/data/profile";

// Stagger the 18 skill nodes' entrance instead of firing all 18 animations
// in the same frame (via a shared parent trigger + variants, one
// IntersectionObserver total instead of 18) — spreads the CPU cost over
// ~1s instead of spiking it all at once, which is what actually causes
// dropped frames on a weaker mobile CPU.
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04 },
  },
};

const skillVariants = {
  hidden: { x: 0, y: 0 },
  show: ({ x, y }) => ({
    x,
    y,
    transition: { duration: 1 },
  }),
};

const Skill = ({ name, x, y, canHover }) => {
  return (
    <motion.div
      className=" flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark shadow-sm cursor-default absolute dark:text-dark dark:shadow-light dark:bg-light  lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-2.5  xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold xs:shadow-none xs:dark:shadow-none md:text-[10px] sm:text-[8px]"
      style={{ willChange: "transform" }}
      custom={{ x, y }}
      variants={skillVariants}
      // Hover doesn't meaningfully exist on touchscreens — skip wiring it up
      // there so a tap can't leave a skill stuck mid-"hover" state.
      whileHover={canHover ? { scale: 0.7, transition: { duration: 0.3 } } : undefined}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    setCanHover(
      window.matchMedia("(hover: hover) and (pointer: fine)").matches
    );
  }, []);

  return (
    <>
      <h2 className=" font-bold text-8xl mt-64 mb-16 w-full text-center md:text-6xl md:mt-32 xs:text-4xl">
        Skills
      </h2>
      <motion.div
        className=" w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] md:h-[70vh] sm:h-[60vh] xs:h-[45vh]
    lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd
    sm:bg-circularLightSm sm:dark:bg-circularDarkSm
    "
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          className=" flex items-center justify-center rounded-full font-semibold bg-dark text-light p-6 shadow-dark shadow-sm cursor-pointer dark:bg-light dark:text-dark  lg:p-4  md:p-3 sm:p-1 lg:text-sm md:text-xs sm:text-[8px] "
          whileHover={canHover ? { scale: 1.05 } : undefined}
        >
          {skillsCenterLabel}
        </motion.div>
        {skills.map((skill, index) => (
          <Skill key={index} {...skill} canHover={canHover} />
        ))}
      </motion.div>
    </>
  );
};

export default Skills;
