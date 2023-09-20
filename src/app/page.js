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

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@200;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <MobileHeader/>
      <div className="mainContainer">
        <Hero />
        <Locations />
        <BusinessSetup />
        <Services />
        <WhyBeacon />
        <Image
          src="/Stats.png"
          width={100}
          height={100}
          layout="responsive"
          alt="ImageStats"
        />
        <Clients />
        <Blogs />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
