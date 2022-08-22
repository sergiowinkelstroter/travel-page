import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer";

import { NavBar } from "../components/NavBar";
import { Notify } from "../components/Notify";
import { Destination } from "../components/destination";
import { MainPage } from "../components/MainPage";
import { Services } from "../components/services";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Responsive Travel Landing Page</title>
        <link rel="icon" href="/pro.ico" />
      </Head>
      <NavBar />
      <MainPage />
      <Services />
      <Destination />
      <Notify />
      <Footer />
    </div>
  );
};

export default Home;
