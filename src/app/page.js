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

export default function Home() {
  return (
    <>
      <Header />
      <MobileHeader />
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
