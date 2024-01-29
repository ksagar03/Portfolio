import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import profile from "/../Portfolio/public/images/profile/profile.jpeg";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import {motion} from "framer-motion"

const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta
          name="description"
          content="this page will be telling about my self"
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-white ">
        <Layout className="pt-16">
          <AnimatedText 
            text="Crafting Code, Building Dreams."
            className="mb-16 lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-2xl sm:mb-8  "
          />
          <div className="grid w-full grid-cols-7 gap-16 sm:gap-8 ">
            <motion.div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:-mt-4 md:col-span-7"
             initial={{y:50}}
             whileInView={{y:0}}
             transition={{duration: 0.7}}
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/80 dark:text-white/80">
                About me
              </h2>
              <p className=" font-medium">
                {"Hi, I'm K Sagar, a Frontend web development enthusiast with a passion for learning and implementing new libraries and frameworks in projects. My journey in the world of coding is fueled by a relentless curiosity and a drive to create seamless and visually appealing user experiences."}
              </p>
              <p className=" my-4 font-medium">
                I believe that proven knowledge carries the same weight as
                expected experience.
              </p>
            </motion.div>
            <div className=" col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-white p-5 dark:border-white dark:bg-dark lg:col-span-3 md:col-span-4 md:order-1">
              <div className="absolute top-0 -right-3 -z-10 w-[105%] h-[103%] rounded-[1.5rem] bg-dark dark:bg-white
               " />
              <Image
                src={profile}
                alt=""
                className="w-full h-auto rounded-2xl"
                priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
