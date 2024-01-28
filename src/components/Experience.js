import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";


const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  workdetails,
}) => {

    const reference = useRef(null) 
    const {scrollYProgress} = useScroll({
        target: reference,
        offset : ["center end", "center center"]

    }) 
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
        
        <figure ref={reference} className="absolute left-0 stroke-dark dark:stroke-light " >
            <svg className=" -rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]   " width={75} height={75} viewBox="0 0 100 100">
                <motion.circle cx={75} cy={50} r={20} className=" stroke-blue-500 stroke-1 fill-none" />
                <motion.circle cx={75} cy={50} r={20} className=" stroke-[5px] fill-light dark:fill-dark "  style={{pathLength:scrollYProgress}} />
                <motion.circle cx={75} cy={50} r={10} className=" animate-pulse stroke-1 fill-blue-500" />
            </svg>
        </figure>
      <motion.div 
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration: 0.6}} >
        <h3 className=" capitalize font-bold text-2xl sm:text-xl xs:text-lg ">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className=" text-blue-400 capitalize"
          >
            {" "}
            @{company}
          </a>
        </h3>
        <span className=" capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm ">
          {time} | {address}
        </span>
        <p className=" font-medium w-full md:text-sm  ">{workdetails}</p>
      </motion.div>
    </li>
  );
};
//  In future this above function will be helpful

const Experience = () => {
    const ref = useRef(null) 
    const {scrollYProgress} = useScroll({
        target: ref,
        offset : ["start end", "center start"]

    }) 
  return (
    <div className="my-64 xs:my-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-full mx-auto relative ">
        <motion.div style={{scaleY: scrollYProgress}} className=" absolute left-9 top-1 w-[5px] h-full bg-dark origin-top dark:bg-light md:w-[3px] md:left-[29px] xs:left-[19px] " />
        <ul className="flex flex-col items-start w-full justify-between ml-4 xs:ml-2 ">
          <Details
            position="System Engineer"
            company="TATA Consultancy Services"
            companyLink="https://www.tcs.com"
            time="2021 - present"
            address="TCS Global Axis B & C Block"
            workdetails="Have experience in Android and Linux based Automotive Testing for Advanced Driver Assistance Systems (ADAS) and In Vehicle Infotainment (IVI) features in Jaguar & Land Rover (JLR) project. Developed quality test cases for ADAS features using the Gherkin language."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
