import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import GitHub from "@mui/icons-material/GitHub";
import gamer_freak from "/public/images/projects/gamerFreak.png";
import portfolio from "/public/images/projects/portfolio.png";
import Todolist from "/public/images/projects/Todolist.png";
import AnimeFreak from "/public/images/projects/AnimeFreak.png";
import google_certificate from "/public/images/projects/certificate/google_certificate.jpg";
import PlinkoDemo from "/public/images/projects/PlinkoDemo.png";
import ExpenseMateHome from "/public/images/projects/ExpenseMateHome.png";

import { easeInOut, motion } from "framer-motion";
const FramerImage = motion(Image);

const Projects = () => {
  const FeaturedProjects = ({
    type,
    title,
    summary,
    img,
    link,
    githublink,
    toshowgit = true,
  }) => {
    return (
      <motion.article
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6, ease: easeInOut }}
        className="w-full flex items-center justify-between rounded-3xl border border-dark border-solid bg-light shadow-2xl dark:shadow-slate-300 dark:shadow-xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg: lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 "
      >
        {/* <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] sm:w-[101%] xs:rounded-[1.5rem]" /> */}
        <div className="w-1/2 overflow-hidden rounded-lg lg:w-full">
          <FramerImage
            src={img}
            alt={title}
            className=" w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            priority
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
          />
        </div>
        <div className="w-1/2 flex flex-col items-start justify-between pl-6 text-dark dark:text-light lg:w-full lg:pl-0 lg:pt-6 ">
          <span className=" text-blue-500 capitalize font-medium text-xl xs:text-base">
            {type}
          </span>
          <h2 className="underline underline-offset-[5px] my-2 w-full text-left text-3xl font-bold xs:text-lg">
            {title}
          </h2>
          <p className="my-2 font-medium xs:text-xs md:text-sm">{summary}</p>
          <div className=" mt-2 flex items-center ">
            {toshowgit && (
              <Link
                href={githublink}
                target="_blank"
                className=" w-10 hover:animate-wiggle xs:text-sm "
              >
                <GitHub sx={{ fontSize: "2.3rem" }} />
              </Link>
            )}
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-xl bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark border-2 border-bold border-transparent hover:border-dark hover:duration-500 dark:bg-light dark:text-dark dark:hover:text-light dark:hover:border-light dark:hover:bg-dark  sm:px-4 sm:text-base"
            >
              {toshowgit ? "Visit Project" : "View Certificate"}
            </Link>
          </div>
        </div>
      </motion.article>
    );
  };

  const Project = ({ type, title, img, link, githublink }) => {
    return (
      <motion.article
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6, ease: easeInOut }}
        className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid  border-dark bg-light p-6 relative shadow-2xl dark:shadow-slate-300 dark:shadow-xl dark:bg-dark dark:border-light xs:p-4 "
      >
        {/* <motion.div className=" absolute top-0 -right-3 -z-10 w-[102.5%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 sm:w-[101%] xs:h-[103%] xs:rounded-[1.5rem]" /> */}
        <div className="overflow-hidden rounded-lg w-full">
          <FramerImage
            src={img}
            alt={title}
            className=" w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            priority
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
          />
        </div>
        <div className="w-full flex flex-col items-start justify-between mt-4 dark:text-light">
          <span className=" text-blue-500 font-medium text-xl lg:text-lg md:text-base ">
            {type}
          </span>

          <h2 className="my-2 w-full text-left text-3xl font-bold underline underline-offset-[5px] lg:text-2xl md:text-xl sx:text-lg ">
            {title}
          </h2>
          <div className=" mt-2 w-full flex items-center justify-between ">
            <Link
              href={link}
              target="_blank"
              className=" rounded-xl bg-dark text-light p-1 px-4 text-lg font-semibold hover:bg-light hover:text-dark border-2 border-bold border-transparent hover:border-dark hover:duration-500 dark:bg-light dark:text-dark dark:hover:text-light dark:hover:border-light dark:hover:bg-dark   md:text-base"
            >
              Visit
            </Link>

            <Link
              href={githublink}
              target="_blank"
              className=" w-10 hover:animate-wiggle "
            >
              <GitHub sx={{ fontSize: "2rem" }} />
            </Link>
          </div>
        </div>
      </motion.article>
    );
  };
  return (
    <>
      <Head>
        <title>Projects Page</title>
        <meta
          name="description"
          content="this page will be telling about my Projects which i have done"
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Design. Develop. Deliver."
            className=" mb-12 lg:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-4xl    "
          />
          <div className="grid grid-cols-12 gap-24 gap-y-25 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              {/* Featured Project */}
              <FeaturedProjects
                title="ExpenseMate"
                img={ExpenseMateHome}
                summary="Developed a full-stack expense tracker application to simplify financial management and provide intuitive expense tracking. Built using Next.js, TypeScript, and MongoDB, the application ensures secure user authentication with NextAuth and supports CRUD operations for managing expenses. It features interactive data visualization with Recharts and a modern, responsive design styled with Tailwind CSS. Seamless animations powered by Framer Motion enhance the overall user experience."
                link="https://expensemate-seven.vercel.app"
                type="personal finance management project"
                githublink="https://github.com/ksagar03/Expensemate"
              />
            </div>
            <div className=" col-span-12">
              <FeaturedProjects
                title={"Anime freak"}
                type={"Anime info web App(future OTT platform)"}
                img={AnimeFreak}
                summary={
                  "As a die-hard fan of anime, I have created a web application that currently showcases information about anime. This application was developed using Next.js, Node.js, the Kitsu API, Tailwind CSS, and Framer Motion. I have also implemented an infinite scroll feature. In the future, I plan to expand this web application into an OTT platform where users can watch their favorite anime for free."
                }
                githublink="https://github.com/ksagar03/anime-freak"
                link="https://anime-freak-zeta.vercel.app"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Plinko-Clone"
                img={PlinkoDemo}
                link="https://gambling-game.vercel.app"
                type=" Online Gambling Game Demo"
                githublink="https://github.com/ksagar03/gambling_game"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Portfolio"
                img={portfolio}
                link="/"
                type="Showcasing My DEV Journey "
                githublink="https://github.com/ksagar03/Portfolio"
              />
            </div>
            <div className="col-span-12">
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

            <div className=" col-span-12">
              <FeaturedProjects
                title={" Associate Google Cloud Certified "}
                img={google_certificate}
                summary={
                  "I have acquired an Associate Google Cloud Certificate, obtaining hands-on experience with Google's platform tools. My knowledge extends to various aspects of cloud infrastructure, including building compute engines for diverse workloads. Additionally, I have gained insights into how Kubernetes facilitates auto-scaling and load balancing when required."
                }
                link={
                  "https://www.credential.net/25924c9e-7c7c-44ca-abdd-fb8d3f0309d8?key=2f658a3ec45c70b5693c21ae4846679d062d58e18dd3865f34453ad3b0d942b2"
                }
                toshowgit={false}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
