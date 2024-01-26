import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import GitHub from '@mui/icons-material/GitHub'
import gamer_freak from "@/../../Portfolio/public/images/projects/gamerFreak.png"
import portfolio from "@/../../Portfolio/public/images/projects/portfolio.png"
import Todolist from "@/../../Portfolio/public/images/projects/Todolist.png"

import {motion} from "framer-motion"
const FramerImage =motion(Image)
const Projects = () => {
  const FeaturedProjects = ({type,title, summary, img,link, githublink }) => {

    return(
      <article className='w-full flex items-center justify-between rounded-3xl border border-dark border-solid bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light'>
         <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light" />
        <div className='w-1/2 overflow-hidden rounded-lg'>
          <FramerImage src={img} alt={title} className=' w-full h-auto' 
          whileHover={{scale: 1.05}}
          transition={{duration: 0.5}}
          priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
          />
        </div>
        <div className='w-1/2 flex flex-col items-start justify-between pl-6  text-dark dark:text-light '>
          <span className=' text-blue-500 font-medium text-xl'>
            {type}
          </span>
            <h2 className='underline underline-offset-[5px] my-2 w-full text-left text-4xl font-bold'>{title}</h2> 
          <p className='my-2 font-medium '>
            {summary}
          </p>
          <div className=' mt-2 flex items-center '>
            <Link href={githublink} target='_blank'
            className=' w-10 hover:animate-pulse'>
              <GitHub sx={{fontSize:"2.3rem"}} />
            </Link>
            <Link href={link} target='_blank' className='ml-4 rounded-xl bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark border-2 border-bold border-transparent hover:border-dark hover:duration-500 dark:bg-light dark:text-dark dark:hover:text-light dark:hover:border-light dark:hover:bg-dark    '>
            Visit Project
            </Link>
          </div>
        </div>

      </article>
    )
  }
  const Project =({type, title ,img, link, githublink}) =>{
    return(
      <article className=' w-full flex flex-col items-center justify-center rounded-2xl border border-solid  border-dark bg-light p-6 relative shadow-2xl dark:bg-dark dark:border-light'>
         <div className="absolute top-0 -right-3 -z-10 w-[102.5%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
        
          <div className='overflow-hidden rounded-lg w-full'>
          <FramerImage src={img} alt={title} className=' w-full h-auto'
          whileHover={{scale: 1.05}}
          transition={{duration:0.5}}
          priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
          />    
          </div>
        <div className='w-full flex flex-col items-start justify-between mt-4 dark:text-light '>
          <span className=' text-blue-500 font-medium text-xl'>
            {type}
          </span>
          
            <h2 className='my-2 w-full text-left text-3xl font-bold underline underline-offset-[5px]'>{title}</h2>
          <div className=' mt-2 w-full flex items-center justify-between '>
          <Link href={link} target='_blank' className=' rounded-xl bg-dark text-light p-1 px-4 text-lg font-semibold hover:bg-light hover:text-dark border-2 border-bold border-transparent hover:border-dark hover:duration-500 dark:bg-light dark:text-dark dark:hover:text-light dark:hover:border-light dark:hover:bg-dark   '>
            Visit
            </Link>
            <Link href={githublink} target='_blank'
            className=' w-10 hover:animate-bounce '>
              <GitHub sx={{fontSize:"2rem"}} />
            </Link>
            
          </div>
        </div>
      </article>
    )
  }
  return (
    <>
    <Head>
      <title>Projects Page</title>
      <meta
        name="description"
        content="this page will be telling about my Projects which i have done"
      />
    </Head>
    <main className='w-full mb-16 flex flex-col items-center justify-center'>
      <Layout className='pt-16'>
        <AnimatedText text="Design. Develop. Deliver." 
        className=' mb-12'
        
        />
        <div className='grid grid-cols-12 gap-24 gap-y-25'>
          <div className='col-span-12'>
            {/* Featured Project */}
            <FeaturedProjects 
            title="Gamer Freak"
            img={gamer_freak}
            summary="Developed a full-stack E-commerce web application using React and Firebase, providing exciting features like payment processing, user authentication etc. In this project, I have used Firebase’s database to store user-ordered items and also used Stripe Payment element for payment processing. (React, Nodejs, Firebase, Express.js, Axios, Stripe, React context API and NoSQL)."
            link="https://gamer-freak.web.app"
            type="E-commerce Web Application"
            githublink="https://github.com/ksagar03/gamer-freak"

            />
          </div>
          <div className='col-span-6'>
          <Project 
            title="Todo-List"
            img={Todolist}
            link="https://gamer-freak.web.app"
            type=" Crud Operation NextJS Web Application"
            githublink="https://github.com/ksagar03/gamer-freak"

            />

          </div>
          <div className='col-span-6'>
          <Project 
            title="Portfolio"
            img={portfolio}
            link="https://gamer-freak.web.app"
            type=" Crud Operation NextJS Web Application"
            githublink="https://github.com/ksagar03/gamer-freak"

            />
          </div>
        </div>

      </Layout>
    </main>
    </>
  )
}

export default Projects