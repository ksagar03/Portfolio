import { motion } from "framer-motion";
const AnimatedText = ({ text, className = "" }) => {
    const stringanime ={
        initial:{
            opacity:0,
        }, 
        animate:{
            opacity:1,
            transition:{
                delay:0.5,
                staggerChildren: 0.09
            }
        }
    }
    const wordAnime ={
        initial:{
            opacity:1,
            y:50,
        }, 
        animate:{
            opacity:1,
            y:0,
            transition:{
                duration:1,
            }
        }

    }
  return (
    <div className=" w-full mx-auto flex py-2 justify-center items-center text-center overflow-hidden sm:py-0 ">
      {/* {text} */}
      <motion.h1
        className={` inline-block w-full font-bold capitalize text-5xl text-dark text-left dark:text-light  ${className}`}
      variants={stringanime}
      initial ='initial'
      animate = "animate"
      >
        {text.split(" ").map((word, index) => 
          <motion.span key={index} className="inline-block"
          variants={wordAnime}>
            {word}&nbsp;
          </motion.span>
        )
        }
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
