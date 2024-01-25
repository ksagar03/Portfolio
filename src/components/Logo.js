import Link from "next/link"
import {easeInOut, motion} from "framer-motion"
//  this motion framer is used to create a animation to the component(eg div h1 etc)
const MotionLink = motion(Link)
const Logo = () => {
  return (
    <div className="  ">
      <MotionLink className=" w-14 h-14 mt-2 bg-dark text-light flex items-center justify-center rounded-full text-bold text-xl animate-spin-slow border-2 border-transparent dark:border-light  "  href="/"
      whileHover={{scale:1.2, backgroundColor:"#C30101",
      transition: {duration:0.3, ease:easeInOut },}}>KS</MotionLink>
    </div>
  )
}

export default Logo
