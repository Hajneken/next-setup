import type { NextPage } from "next";
import Head from "next/head";
// sections
import Intro from "../sections/intro";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Set Up</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="Intro" className="gradient full-height--extended p-0">
        <Intro />
      </section>
    </>
  );
};

export default Home;
