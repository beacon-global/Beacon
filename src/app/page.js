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
          href="https://fonts.googleapis.com/css2?family=Arimo&family=Barlow+Condensed:wght@100&family=Dancing+Script:wght@700&family=Encode+Sans:wght@800&family=GFS+Neohellenic&family=Inter:wght@500;800&family=Karla:wght@200&family=Lato:wght@100&family=Libre+Franklin:wght@100&family=Manrope:wght@200;300&family=McLaren&family=Montserrat:wght@200&family=Open+Sans:wght@300&family=Orbitron&family=Playfair+Display:wght@700&family=Poppins&family=Rakkas&family=Raleway:ital,wght@0,100;0,500;0,700;1,600&family=Roboto+Slab:wght@100;400;500;700;800;900&family=Sawarabi+Gothic&family=Sora:wght@200;400;600&family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap"
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
        <Image src="/Stats.png" width={100} height={100} layout="responsive" />
        <Clients />
        <Blogs />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
