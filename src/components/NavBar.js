import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { easeIn, easeInOut, motion } from "framer-motion";
import useTheme from "./CustomHooks/useTheme";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { useState } from "react";

const MotionLink = motion(Link);

const NavBar = () => {
  const [mode, setMode] = useTheme(); // custom hook
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const handleClick = () => {
    setHamburgerMenu(!hamburgerMenu);
  };
  const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
      <Link href={href} className={`${className} relative group`}>
        {title}
        <span
          className={`h-[1.5px] inline-block absolute bg-dark left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
            router.asPath === href ? "w-full" : "w-0"
          }  dark:bg-light`}
        ></span>
      </Link>
    );
  };



  const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    // customlink function can't be used for mobile view, as the nextjs link will open the pages in the background and will not close the hamburger menu

    const router = useRouter();
    const handleClick =() => {
      toggle();
      router.push(href)
    }
    return (
      <button onClick={handleClick} href={href} className={`${className} relative group text-light dark:text-dark my-1 `}>
        {title}
        <span
          className={`h-[1.5px] inline-block absolute bg-light dark:bg-dark left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300  ${
            router.asPath === href ? "w-full" : "w-0"
          } `}
        ></span>
      </button>
    );
  };
  
  return (
    
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        onClick={handleClick}
        className=" flex-col justify-center items-center hidden lg:flex "
      >
        <span
          className={` bg-dark dark:bg-light block transition duration-300 ease-in-out  h-0.5 w-6 rounded-sm  ${
            hamburgerMenu ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={` bg-dark dark:bg-light block transition duration-300 ease-in-out  h-0.5 w-6 rounded-sm my-0.5  ${
            hamburgerMenu ? "opacity-0" : "opacity-100"
          } `}
        ></span>
        <span
          className={` bg-dark dark:bg-light block  transition duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
            hamburgerMenu ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          } `}
        ></span>
      </button>

      <div className=" w-full flex justify-between items-center lg:hidden" >
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects " className="ml-4" />
        </nav>
        <nav className=" flex justify-items-center flex-wrap  ">
          <MotionLink
            href="https://github.com/ksagar03"
            target="_blank"
            className="mr-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.3 }}
          >
            <GitHubIcon />
          </MotionLink>
          <MotionLink
            href="http://www.linkedin.com/in/sagar-krishna-140bb421a"
            target="_blank"
            className="mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.3 }}
          >
            <LinkedInIcon />
          </MotionLink>
          <MotionLink
            href="https://twitter.com/KSagar22"
            target="_blank"
            className="ml-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.3 }}
          >
            <XIcon />
          </MotionLink>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className=" ml-6 flex items-center justify-end rounded-full border-2 border-dark dark:border-light  "
          >
            {mode === "dark" ? (
              <LightModeIcon className="animate-spin-slow" />
            ) : (
              <NightsStayIcon className=" animate-pulse" />
            )}
          </button>
        </nav>
      </div>




{  hamburgerMenu ?

<button onClick={() => setHamburgerMenu(!hamburgerMenu)} className="z-0 fixed  inset-0 w-full h-full cursor-default">
      <motion.div className=" min-w-[70vw] flex flex-col justify-between items-center z-10 fixed top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-md py-24  text-light dark:text-dark "
      initial ={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
      animate={{scale:1, opacity:1, transition:{duration:0.3, ease:easeInOut}}}
      >
        <nav className=" flex flex-col items-center justify-center">
          <CustomMobileLink href="/" title="Home" className="" toggle={handleClick} />
          <CustomMobileLink href="/about" title="About" className="" toggle={handleClick} />
          <CustomMobileLink href="/projects" title="Projects " className="" toggle={handleClick} />
        </nav>
        <nav className=" flex justify-items-center flex-wrap mt-4">
          <MotionLink
            href="/"
            target="_blank"
            className="mr-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.3 }}
          >
            <GitHubIcon />
          </MotionLink>
          <MotionLink
            href="/"
            target="_blank"
            className="mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.3 }}
          >
            <LinkedInIcon />
          </MotionLink>
          <MotionLink
            href="/"
            target="_blank"
            className="ml-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.3 }}
          >
            <XIcon />
          </MotionLink>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className=" ml-6 flex items-center justify-end rounded-full border-2 border-light dark:border-dark"
          >
            {mode === "dark" ? (
              <LightModeIcon className="animate-spin-slow" />
            ) : (
              <NightsStayIcon className=" animate-pulse" />
            )}
          </button>
        </nav>
      </motion.div>
      </button>

   : null         }

      <div className=" absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
