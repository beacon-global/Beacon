"use client";
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Locations from "./components/Locations";
import BusinessSetup from "./components/BusinessSetup";
import Services from "./components/Services";
import WhyBeacon from "./components/WhyBeacon";
import Clients from "./components/Clients";
import Head from "next/head";
import Blogs from "./components/Blogs";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileHeader from "./components/MobileHeader";
import Stats from "./components/Stats";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";

export default function Home() {
  const [hideWhiteScreen, setHideWhiteScreen] = useState(false);
  const [loaded, setLoaded] = useState(false);

// useEffect(() => {
//   const timer = setTimeout(() => {
//     setLoaded(true);
//   }, 1000); // 1000 milliseconds = 1 second

//   // Clear the timer when the component unmounts
//   return () => clearTimeout(timer);
// }, []);

  useEffect(() => {
    // Delay for 1 second (1000 milliseconds)
    const timeoutId = setTimeout(() => {
      // Hide the white screen by changing its opacity
      setHideWhiteScreen(true);
    }, 2500); // 1000 milliseconds = 1 second

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Header />
      <MobileHeader />
      {!hideWhiteScreen && (
        <div id="white-screen">
          <div class="loader">
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__ball"></div>
          </div>
        </div>
      )}
      <div className="mainContainer">
      {/* <motion.div
        initial={{ opacity: 0, y: "100%" }} // Initial state (hidden and below)
        animate={loaded ? { opacity: 1, y: 0 } : {}} // Animate to visible position when loaded
        transition={{ duration: 0.5 }} // Animation duration (adjust as needed)
      > */}
        {/* Your content goes here */}
        <Hero />
        <Locations />
        <BusinessSetup />
        <Services />
        <WhyBeacon />
        <Stats />
        <Clients />
        <Blogs />
        <Faq />
        <Contact />
        <Footer />
      {/* </motion.div> */}
      </div>
    </>
  );
}
