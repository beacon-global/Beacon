"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Locations from "./components/Locations";
import BusinessSetup from "./components/BusinessSetup";
import Services from "./components/Services";
import WhyBeacon from "./components/WhyBeacon";
import Clients from "./components/Clients";
import Blogs from "./components/Blogs";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileHeader from "./components/MobileHeader";
import Stats from "./components/Stats";
import { useEffect, useState } from "react";
import LoadingCircle from "./components/LoadingCircle";

export default function Home() {
  const [hideWhiteScreen, setHideWhiteScreen] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const textOptions = ["Incorporation", "Accounting","Auditing","Digital Strategy","Digital Marketing"];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const whiteScreen = document.getElementById("white-screen");
      if (whiteScreen) {
        whiteScreen.classList.add("hidden");
      }
    }, 2000); // 1000 milliseconds = 1 second

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 450); 

    return () => clearInterval(interval);
  }, []);

  const useBackgroundImage = true;

  return (
    <>
      <Header />
      <MobileHeader />
      {!hideWhiteScreen && (
        <div id="white-screen">
          <LoadingCircle/>
          <div className="changeTextContainer">
            <h1 className="spinnerText">
              Your Global Advisory Partner For
            </h1>
            <h1 className="changeText">{textOptions[textIndex]}</h1>
          </div>
        </div>
      )}
      <div className="mainContainer">
        <Hero />
        <Locations />
        <BusinessSetup />
        <Services />
        <WhyBeacon />
        <Stats useBackgroundImage={useBackgroundImage} isMainPage={true} />
        <Clients />
        {/* <Blogs /> */}
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
