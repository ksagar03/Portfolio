import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import Image from "next/image";
import profile_pic from "@/../../Portfolio/public/images/profile/profile11.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title> Home page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center w-full text-dark min-h-screen">
        <Layout className="pt-0">
          <div className=" flex items-center justify-between w-full">
            <div className=" w-1/2">
              <Image src={profile_pic} alt="" className="w-full h-auto" />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText text="Bringing a website to life through coding." />
              <p className="my-4 text-base font-medium">
                As a skilled Front end Developer, I intend to be part of an
                organization where I can constantly develop and improve my
                technical and management skills and make use of it for the
                growth of the organization. I look forward to adapt latest
                technical skills which will be useful for the growth of the
                organization.
              </p>
              <div className="flex items-center self-start mt-2 ">
                <Link
                  href="/Resume.pdf"
                  target="_blank"
                  className=" items-center p-2.5 px-6 rounded-lg text-lg bg-dark text-light font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:duration-500"
                  download={true}
                >
                  Download CV
                </Link>
                <Link
                  href="mailto:sagar22krishna03@gmail.com"
                  target="_blank"
                  className=" items-center p-2.5 px-6 rounded-lg text-lg bg-dark text-light font-semibold ml-6 hover:bg-light hover:text-dark border-2 border-bold border-transparent hover:border-dark hover:duration-500 "
                >
                  {" "}
                  Hire Me
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
