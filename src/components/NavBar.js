import Link from "next/link"
import Logo from "./Logo"
import { useRouter } from "next/router"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { easeIn,motion } from "framer-motion";
import useTheme from "./CustomHooks/useTheme";
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';

const MotionLink = motion(Link)

const NavBar = () => {
    const [mode, setMode] = useTheme();
    const CustomLink = ({href,title, className=""}) =>{
        const router = useRouter()
        return(
            <Link href={href}  className={`${className} relative group`}>{title}
            <span className={`h-[1.5px] inline-block absolute bg-dark left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full": "w-0" }  dark:bg-light`} >
            </span>
            </Link>

        )
        
    }
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'>
        <nav>
            <CustomLink href="/" title="Home" className="mr-4" />
            <CustomLink href="/about" title="About" className="mx-4" />
            <CustomLink href="/projects" title="Projects " className="ml-4"/>

        </nav>
        <div className=" absolute left-[50%] top-2 translate-x-[-50%]">
            <Logo/>
        </div>
        <nav className=" flex justify-items-center flex-wrap  ">
            <MotionLink href="/" target="_blank" className="mr-3" whileHover={{y:-2}} whileTap={{scale:0.3}}><GitHubIcon /></MotionLink>
            <MotionLink href="/" target="_blank" className="mx-3" whileHover={{y:-2}} whileTap={{scale:0.3}}><LinkedInIcon /></MotionLink>
            <MotionLink href="/" target="_blank" className="ml-3" whileHover={{y:-2}} whileTap={{scale:0.3}}><XIcon /></MotionLink>

            <button
            onClick={()=> setMode(mode === "light" ? "dark": "light")}
            className=" ml-6 flex items-center justify-end rounded-full "
            >
                {
                    mode === "dark" ? <LightModeIcon 
                    /> : <NightsStayIcon />
                }

            </button>

        </nav> 
    </header>
  )
}

export default NavBar
