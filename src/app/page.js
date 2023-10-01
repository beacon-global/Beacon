"use client"
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

export default function Home() {


  const [hideWhiteScreen, setHideWhiteScreen] = useState(false);

  useEffect(() => {
    // Delay for 1 second (1000 milliseconds)
    const timeoutId = setTimeout(() => {
      // Hide the white screen by changing its opacity
      setHideWhiteScreen(true);
    }, 50); // 1000 milliseconds = 1 second

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);


  return (
    <>
      <Header />
      <MobileHeader />
      {!hideWhiteScreen && <div id="white-screen"></div>}
      <div className="mainContainer">
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
      </div>
    </>
  );
}
