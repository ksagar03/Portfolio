import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'

const Projects = () => {
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
            Featured Project
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
