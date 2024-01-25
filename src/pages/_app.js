import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <main className=" font-montserrat bg-light w-full min-h-screen dark:bg-dark">
        <NavBar/>
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
