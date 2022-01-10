import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../src/components/Header/Header";
import { Body } from "../src/components/Body/Body";
import { Footer } from "../src/components/Footer/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>JG.dev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default Home;
