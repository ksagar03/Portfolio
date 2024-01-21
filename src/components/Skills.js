
import {motion} from "framer-motion"
import { useEffect, useState } from "react"


const Skill = ({name, x,y}) => {
    // const [rotateangle, setRotateangle] = useState(0)
    // useEffect(()=> {
    //     const intervelId = setInterval(()=>{
    //         setRotateangle((angle)=> angle +10)
    //     }, 100)

    //     return () => clearInterval(intervelId)
    // },[])

    return (
        <motion.div className=" flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark shadow-sm cursor-pointer absolute"  
        whileHover={{scale:0.7, transition:0.6}}
        initial ={{x:0, y:0}}
        whileInView ={{x:x, y:y,}}
        // style={{rotate: rotateangle}}
        // animate = {{}}
        transition={{duration:1.3,}}
        viewport={{once:true }}
        >
            {name}
        </motion.div>

    )

}


const Skills = () => {
  return (
    <>
    <h2 className=" font-bold text-8xl mt-64 w-full text-center">
        Skills
    </h2>
    <div className=" w-full h-screen relative flex items-center justify-center rounded-full bg-circularlight">
        <motion.div className=" flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark shadow-sm cursor-pointer" whileHover={{scale:1.05}} >
            Web
        </motion.div>
        <Skill name ="JavaScript"  x="-1vw" y="-9vw" />
        <Skill name ="Python"  x="3vw" y="8.5vw" />
        <Skill name ="CSS"  x="18vw" y="-9vw" />
        <Skill name ="HTML"  x="-22vw" y="2vw" />
        <Skill name ="React js"  x="1vw" y="17vw" />
        <Skill name ="Tailwind CSS"  x="-20vw" y="-18vw" />
        <Skill name ="Next js"  x="26vw" y="15vw" />
        <Skill name ="GCP"  x="-20vw" y="18vw" />
        <Skill name ="Stripe"  x="-29vw" y="-7vw" />
        <Skill name ="Firebase"  x="30vw" y="2vw" />




    </div>
    </>
  )
}

export default Skills
