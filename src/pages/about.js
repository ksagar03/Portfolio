import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import profile from "@/../../Portfolio/public/images/profile/profile.jpeg"

const About = () => {
  return (
    <>
    <Head>
      <title>
        About Page
      </title>
      <meta name='description' content='this page will be telling about my self'  />
    </Head>
    <main className='flex w-full flex-col items-center justify-center '>
      <Layout className='pt-16'>
      <AnimatedText text="Crafting Code, Building Dreams." className ="mb-16" />
      <div className='grid w-full grid-cols-7 gap-16'>
        <div className='col-span-3 flex flex-col items-start justify-start'>
          <h2 className='mb-4 text-lg font-bold uppercase text-dark/80'>
            About me
          </h2>
          <p className=' font-medium'>
          Hi, I'm K Sagar, a Frontend web development enthusiast with a passion for learning and implementing new libraries and frameworks in projects. My journey in the world of coding is fueled by a relentless curiosity and a drive to create seamless and visually appealing user experiences.
          </p>
          <p className=' my-4 font-medium'>
          I believe that proven knowledge carries the same weight as expected experience.
          </p>

        </div>
        <div className=' col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-white p-6'>
          <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[1.5rem] bg-dark ' />
          <Image src={profile} alt='' className='w-full h-auto rounded-2xl' />
        </div>
      </div>
      </Layout>
      
    </main>
    </>
  )
}

export default About
