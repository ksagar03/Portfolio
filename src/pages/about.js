import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import profile from "/public/images/profile/profile.jpeg";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import { motion } from "framer-motion";

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
      <main className="flex w-full flex-col z-10 items-center justify-center dark:text-white ">
        <Layout className="pt-16">
          <AnimatedText
            text="Crafting Code, Building Dreams."
            className="mb-16 lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-2xl sm:mb-8  "
          />
          <div className="grid w-full grid-cols-7 gap-16 sm:gap-8 ">
            <motion.div
              className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:-mt-4 md:col-span-7"
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/80 dark:text-white/80">
                About me
              </h2>
              <p className=" my-4 font-medium">
                {"Hi, I’m Sagar K"} — a Full Stack Developer with a
                backend-first mindset who enjoys building clean,
                well-structured systems that scale. At <b>Accenture</b>, I
                build banking microservices using <b>Kotlin</b> and{" "}
                <b>Spring Boot</b> — designing <b>gRPC</b>-based
                inter-service communication, integrating third-party vendor
                APIs, and shipping secure, compliant features in an Agile team.
                <br />
                <br />
                My web stack spans <b>React.js</b>, <b>Next.js</b>, and{" "}
                <b>Node.js</b>. I also have hands-on experience with{" "}
                <b>React Native</b> — at Accenture I built a feature carousel
                on the cashback screen, and I am applying that further in{" "}
                <b>Split Money</b>, a cross-platform group expense app I am
                currently building with a Spring Boot + GraphQL backend.{" "}
                <b>ExpenseMate</b>, another personal project, is a full-stack
                Next.js expense tracker where I cut API response times by
                ~40–50% with Redis caching.
                <br />
                <br />
                My foundation in systems thinking comes from{" "}
                <b>Android Automotive development</b> at <b>TCS</b> (Jaguar
                Land Rover), where I built ADAS features like{" "}
                <b>Lane Keep Assist</b> and <b>Adaptive Cruise Control</b>.
              </p>
            </motion.div>
            <div className=" col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-white p-5 dark:border-white dark:bg-dark lg:col-span-3 md:col-span-4 md:order-1">
              <div
                className="absolute top-0 -right-3 -z-10 w-[105%] h-[103%] rounded-[1.5rem] bg-dark dark:bg-white
               "
              />
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
