import { easeInOut, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { skills, skillsCenterLabel } from "@/data/profile";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className=" flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark shadow-sm cursor-default absolute dark:text-dark dark:shadow-light dark:bg-light  lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-2.5  xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold xs:shadow-none xs:dark:shadow-none md:text-[10px] sm:text-[8px]"
      whileHover={{ scale: 0.7, transition: { duration: 0.3 } }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className=" font-bold text-8xl mt-64 mb-16 w-full text-center md:text-6xl md:mt-32 xs:text-4xl">
        Skills
      </h2>
      <div
        className=" w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] md:h-[70vh] sm:h-[60vh] xs:h-[45vh]
    lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd
    sm:bg-circularLightSm sm:dark:bg-circularDarkSm
    "
      >
        <motion.div
          className=" flex items-center justify-center rounded-full font-semibold bg-dark text-light p-6 shadow-dark shadow-sm cursor-pointer dark:bg-light dark:text-dark  lg:p-4  md:p-3 sm:p-1 lg:text-sm md:text-xs sm:text-[8px] "
          whileHover={{ scale: 1.05 }}
        >
          {skillsCenterLabel}
        </motion.div>
        {skills.map((skill, index) => (
          <Skill key={index} {...skill} />
        ))}
      </div>
    </>
  );
};

export default Skills;
