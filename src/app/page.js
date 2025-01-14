"use client";
import { useEffect, useState } from "react";
import LoadingCircle from "./components/LoadingCircle";
import dynamic from "next/dynamic";
import WhatsAppChat from "./components/WhatsAppChat";
import PersonalBlog from "./components/PersonalBlog";
const Header = dynamic(() => import("@/app/components/Header"));
const MobileHeader = dynamic(() => import("@/app/components/MobileHeader"));
const Hero = dynamic(() => import("@/app/components/Hero"));
const Locations = dynamic(() => import("@/app/components/Locations"));
const Popup = dynamic(() => import("@/app/components/Popup"));
const Services = dynamic(() => import("@/app/components/Services"));
const BusinessSetup = dynamic(() => import("@/app/components/BusinessSetup"));
const Clients = dynamic(() => import("@/app/components/Clients"));
const Stats = dynamic(() => import("@/app/components/Stats"));
const WhyBeacon = dynamic(() => import("@/app/components/WhyBeacon"));
const Faq = dynamic(() => import("@/app/components/Faq"));
const Contact = dynamic(() => import("@/app/components/Contact"));
const Footer = dynamic(() => import("@/app/components/Footer"));

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const textOptions = ["Growth", "Success", "Strategy", "Expansion"];
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPopup(true);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const whiteScreen = document.getElementById("white-screen");
      if (whiteScreen) {
        // whiteScreen.style.opacity = '0';
        whiteScreen.classList.add("hidden");
      }
    }, 600);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 450);

    return () => clearInterval(interval);
  }, [textOptions.length]);

  const useBackgroundImage = true;

  return (
    <>
      <WhatsAppChat />
      <Header />
      <MobileHeader />
      {showPopup && <Popup setShowPopup={setShowPopup} />}
      <div id="white-screen">
        <LoadingCircle />
        <div className="changeTextContainer">
          <h1 className="spinnerText">Your Global Advisory Partner For</h1>
          <h1 className="changeText">
            <span className="spinnerText"> Business </span>{" "}
            {textOptions[textIndex]}
          </h1>
        </div>
      </div>
      <div className="mainContainer">
        <Hero />
        <Locations />
        <BusinessSetup />
        <Services />
        <WhyBeacon />
        <Stats useBackgroundImage={useBackgroundImage} isMainPage={true} />
        <Clients />
        <PersonalBlog />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

// export async function getStaticProps() {
//   // Fetch data here (e.g., from an API)
//   const data = "Some data fetched at build time";

//   return {
//     props: {
//       data,
//     },
//   };
// }
