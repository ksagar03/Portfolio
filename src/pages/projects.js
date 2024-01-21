import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import GitHub from '@mui/icons-material/GitHub'
import gamer_freak from "@/../../Portfolio/public/images/projects/gamerFreak.png"
const Projects = () => {
  const FeaturedProjects = ({type,title, summary, img,link, githublink }) => {

    return(
      <article>
        <Link href={link}target="_blank">
          <Image src={img} alt={title} className=' w-full h-auto'>
            </Image>  
        </Link>
        <div>
          <span>
            {type}
          </span>
          <Link href={link} target='_blank'>
            <h2>{title}</h2>
          </Link>
          <p>
            {summary}
          </p>
          <div>
            <Link href={githublink} target='_blank'
            >
              <GitHub />
            </Link>
            <Link href={link} target='_blank'>
            Visit Project
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
        <AnimatedText text="Design. Develop. Deliver." />
        <div className='grid grid-cols-12 gap-24'>
          <div className='col-span-12'>
            {/* Featured Project */}
            <FeaturedProjects 
            title="Gamer Freak"
            img={gamer_freak}
            summary="Developed a full-stack E-commerce web application using React and Firebase, providing exciting features like payment processing, user authentication etc. In this project, I have used Firebase’s database to store user-ordered items which can be accessed in real-time and also used Stripe Payment element for payment processing. (React, Nodejs, Firebase, Express.js, Axios, Stripe, React context API and NoSQL)."
            link="https://gamer-freak.web.app"
            type="E-commerce Application"
            githublink="https://github.com/ksagar03/gamer-freak"

            />
          </div>
          <div className='col-span-4'>
            project 1
          </div>
          <div className='col-span-4'>
            Project 2
          </div>
          <div className='col-span-4'>
            Project 3
          </div>
        </div>

      </Layout>
    </main>
    </>
  )
}

export default Projects
