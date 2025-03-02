import { easeInOut, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Skill = ({ name, x, y }) => {
  // const [rotateangle, setRotateangle] = useState(0)
  // useEffect(()=> {
  //     const intervelId = setInterval(()=>{
  //         setRotateangle((angle)=> angle +10)
  //     }, 100)

  //     return () => clearInterval(intervelId)
  // },[])

  return (
    <motion.div
      className=" flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark shadow-sm cursor-default absolute dark:text-dark dark:shadow-light dark:bg-light  lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-2.5  xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold xs:shadow-none xs:dark:shadow-none md:text-[10px]"
      whileHover={{ scale: 0.7, transition: { duration: 0.3 } }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      // style={{rotate: rotateangle}}
      // animate = {{}}
      // transition={{duration:1.3,}}
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
          className=" flex items-center justify-center rounded-full font-semibold bg-dark text-light p-6 shadow-dark shadow-sm cursor-pointer dark:bg-light dark:text-dark  lg:p-4 lg:text-sm md:text-xs md:p-3 sm:p-2 xs:text-[8px] "
          whileHover={{ scale: 1.05 }}
        >
          Android / Web
        </motion.div>
        <Skill name="Typescript" x="2vw" y="-17vw"/>
        <Skill name="JavaScript" x="-1vw" y="-9vw" />
        <Skill name="Python" x="3vw" y="8.5vw" />
        <Skill name="Mongodb" x="15vw" y="-2vw"/>
        <Skill name="CSS" x="18vw" y="-9vw" />
        <Skill name="Stripe" x="-22vw" y="-2vw" />
        <Skill name="HTML5" x="-18vw" y="8vw" />
        <Skill name="React js" x="1vw" y="17vw" />
        <Skill name="Tailwind CSS" x="-20vw" y="-18vw" />
        <Skill name="Next js" x="26vw" y="15vw" />
        <Skill name="GCP" x="-20vw" y="18vw" />
        <Skill name="Recharts" x="-35vw" y="7vw" />
        <Skill name="NextAuth" x="-27vw" y="-9vw" />
        <Skill name="Firebase" x="30vw" y="2vw" />
        <Skill name="Vercel" x="20vw" y="-18vw" />
      </div>
    </>
  );
};

export default Skills;
