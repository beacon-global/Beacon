"use client"
import { motion } from "framer-motion";
import React from "react";
import Image from 'next/image';


function Clients() {
  return (
    <div className="clientsContainer">
      <div className="businessContentContainer">
        <h1 className="businessHeading">our CLIENTS</h1>
        <h2 className="businessDesc">Our core partners</h2>
      </div>
      <div className="clientsImgContainer" style={{display:"flex", justifyContent:'center', alignItems:'center', overflow:"hidden"}}>
        <ScrollingLogos />
      </div>
      <div className="testimonialContainer">
        <Image
          src="/Testimonial.png"
          width={100}
          height={100}
          layout="responsive"
        />
      </div>
    </div>
  );
}

function ScrollingLogos() {
  return (
    <motion.div
      className="scrolling-logos"
      initial={{ x: "0%" }}
      animate={{ x: "-100%" }}
      transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
    >
      <Image src="/LogoClients.png" width={100} height={100} layout="responsive" />
      <Image src="/LogoClients.png" width={100} height={100} layout="responsive" />
      <Image src="/LogoClients.png" width={100} height={100} layout="responsive" />
      <Image src="/LogoClients.png" width={100} height={100} layout="responsive" />
      <Image src="/LogoClients.png" width={100} height={100} layout="responsive" />
    </motion.div>
  );
}


export default Clients;
