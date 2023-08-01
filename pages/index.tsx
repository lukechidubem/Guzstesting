import type { NextPage } from "next";
import Head from "next/head";
import BottomEarth from "../components/bottomEarth";
import WhyGudz from "../components/whygudz";
import GudzLogistics from "../components/gudsLogistics";
import Clients from "../components/clients";
import GudzProcess from "../components/gudzProcess";
import Hero from "../components/hero";
import Globe from "../components/globeAnimation/globe";

const GudzWebsite: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gudz</title>
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r79/three.min.js"></script> */}
      </Head>
      <div>
        <Hero />
        <Clients />
        <GudzLogistics />
        <WhyGudz />
        <GudzProcess />
        <BottomEarth />
        {/* {typeof window !== "undefined" && <Globe />} */}
        <Globe />
      </div>
    </>
  );
};

export default GudzWebsite;
