import Image from "next/image";
import Header from "../../component/Header";
import Hero from "../../component/Hero";
import Locations from "../../component/Locations";
import BusinessSetup from "../../component/BusinessSetup";
import Services from "../../component/Services";
import WhyBeacon from "../../component/WhyBeacon";
import Clients from "../../component/Clients";
import Head from "next/head";
import Blogs from "../../component/Blogs";
import Faq from "../../component/Faq";
import Contact from "../../component/Contact";
import Footer from "../../component/Footer";

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
