import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import GitHub from "@mui/icons-material/GitHub";
import AndroidIcon from "@mui/icons-material/Android";
import gamer_freak from "/public/images/projects/gamerFreak.png";
import portfolio from "/public/images/projects/portfolio.png";
import SplitMoney from "/public/images/projects/SplitMoney.png";
import AnimeFreak from "/public/images/projects/AnimeFreak.png";
import PlinkoDemo from "/public/images/projects/PlinkoDemo.png";
import ExpenseMateHome from "/public/images/projects/ExpenseMateHome.png";
import { featuredProjects, simpleProjects } from "@/data/profile";

import { easeInOut, motion } from "framer-motion";
const FramerImage = motion(Image);

// Next.js Image needs a static import (for build-time size/optimization),
// so images stay imported above — this map just lets the data file refer
// to them by a plain string key (`imgKey`).
const projectImages = {
  SplitMoney,
  ExpenseMateHome,
  AnimeFreak,
  gamer_freak,
  PlinkoDemo,
  portfolio,
};

const Projects = () => {
  const FeaturedProjects = ({
    type,
    title,
    summary,
    img,
    link,
    githublink,
    toshowgit = true,
    isdeployed = true,
    androidLink = null,
  }) => {
    return (
      <motion.article
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6, ease: easeInOut }}
        className="w-full flex items-center justify-between rounded-3xl border border-dark border-solid bg-light shadow-2xl dark:shadow-slate-300 dark:shadow-xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg: lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 "
      >
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
          <div className=" mt-2 flex items-center flex-wrap gap-2 ">
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
              {toshowgit ? isdeployed ? "Visit Project" : "Demo Video" : "View Certificate"}
            </Link>
            {androidLink && (
              <Link
                href={androidLink}
                target="_blank"
                className="flex items-center gap-1.5 rounded-xl border-2 border-dark text-dark p-2 px-5 text-lg font-semibold hover:bg-dark hover:text-light hover:duration-500 dark:border-light dark:text-light dark:hover:bg-light dark:hover:text-dark sm:px-4 sm:text-base"
              >
                <AndroidIcon sx={{ fontSize: "1.4rem" }} />
                Android Build
              </Link>
            )}
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
            {featuredProjects.map((project, index) => (
              <div className="col-span-12" key={index}>
                <FeaturedProjects {...project} img={projectImages[project.imgKey]} />
              </div>
            ))}

            {simpleProjects.map((project, index) => (
              <div className="col-span-6 sm:col-span-12" key={index}>
                <Project {...project} img={projectImages[project.imgKey]} />
              </div>
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
