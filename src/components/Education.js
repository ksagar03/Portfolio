
import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";


const Details = ({
  type,
  time,
  place,
  info,
}) => {

    const reference = useRef(null) 
    const {scrollYProgress} = useScroll({
        target: reference,
        offset : ["center end", "center center"]

    }) 
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
        
        <figure ref={reference} className="absolute left-0 stroke-dark dark:stroke-light" >
            <svg className=" -rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]" width={75} height={75} viewBox="0 0 100 100">
                <motion.circle cx={75} cy={50} r={20} className=" stroke-blue-500 stroke-1 fill-none" />
                <motion.circle cx={75} cy={50} r={20} className=" stroke-[5px] fill-light dark:fill-dark "  style={{pathLength:scrollYProgress}} />
                <motion.circle cx={75} cy={50} r={10} className=" an stroke-1 fill-blue-500 animate-pulse" />
            </svg>
        </figure>
      <motion.div 
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration: 0.6}} >
        <h3 className=" capitalize font-bold text-2xl sm:text-xl xs:text-lg ">
          {type}
        </h3>
        <span className=" capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm ">
          {time} | {place}
        </span>
        {/* <p className=" font-medium w-full">{info}</p> */}
      </motion.div>
    </li>
  );
};
//  In future this above function will be helpful

const Education = () => {
    const ref = useRef(null) 
    const {scrollYProgress} = useScroll({
        target: ref,
        offset : ["start end", "center start"]

    }) 
  return (
    <div className="my-64 xs:my-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-full mx-auto relative">
        <motion.div style={{scaleY: scrollYProgress}} className=" absolute left-9 top-1 w-[5px] h-full bg-dark origin-top dark:bg-light md:w-[3px] md:left-[29px] xs:left-[19px] " />
        <ul className="flex flex-col w-full text-start ml-4 xs:ml-2 ">
          <Details
            type="Bachelor Of Engineering in Electronics and communication"
            time="Jul.2017 - Aug.2021"
            place="Rajarajeswari  College  of  Engineering Bengaluru Karnataka"
          />
          <Details
            type="12th (PCMC)"
            time="Jul.2016 - Aug.2017"
            place="Kendriya Vidyalaya Mysuru (CBSE)	Mysuru Karnataka"
          />
          <Details
            type="10th"
            time="Jul.2014 - Aug.2015"
            place="Kendriya Vidyalaya Mysuru (CBSE)	Mysuru Karnataka"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;

