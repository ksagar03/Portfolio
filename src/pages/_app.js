import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { data } from "autoprefixer";
import Head from "next/head";
import { useState } from "react";
import RaindropEffect from "@/components/RaindropEffect";
// import { theme } from "../../tailwind.config";
export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState()
  const Theme = (value) => {
    setTheme(value)
  }
  // console.log(theme)
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/portfolio2.ico" />
      </Head>
      <main className="font-montserrat bg-light w-full min-h-screen dark:bg-dark">
      <RaindropEffect dropColor={theme}/>
        <NavBar handleThemeFunction={Theme}/>
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
