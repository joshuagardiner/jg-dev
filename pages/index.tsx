import type { NextPage } from "next";
import Head from "next/head";
import { Body } from "../src/components/Body/Body";
import { Footer } from "../src/components/Footer/Footer";
import { Header } from "../src/components/Header/Header";
import { generateCSP } from "../src/utils/generate-csp";
import { generateNonce } from "../src/utils/generate-nonce";

const Home: NextPage = () => {
  const nonce = generateNonce();
  const contentSecurityPolicy = generateCSP({ nonce });

  return (
    <>
      <Head>
        <title>JG.dev</title>
        <meta
          name="description"
          content="A Next.js application used to showcase the Curriculum Vitae of Joshua Gardiner."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Security-Policy" content={contentSecurityPolicy} />
      </Head>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default Home;
