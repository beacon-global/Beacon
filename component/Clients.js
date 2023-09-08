"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import ButtonSvg from "./ButtonSvg";

function Clients() {
  return (
    <div className="clientsContainer">
      <div className="businessContentContainer">
        <h1 className="businessHeading">our CLIENTS</h1>
        <h2 className="businessDesc">Our core partners</h2>
      </div>
      <div
        className="clientsImgContainer"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <ScrollingLogos />
      </div>
      {/* <Image
          src="/Testimonial.png"
          width={100}
          height={100}
          layout="responsive"
        /> */}
      <div className="testimonialMainContainer">
        <div className="testimonialLeftContainer">
          <h1 className="testimonialHeading">What our clients<br/>say about us</h1>
          <p className="testimonialDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
          </p>
        </div>
        <div className="testimonialRightContainer">
          <div className="testimonialMessage">
            <h1>
              "The best agency we’ve worked with so far. They understand our
              product and are able to add new features with a great focus."
            </h1>
          </div>
          <div className="testimonialImageButtonContainer">
            <div className="testimonialProfile">
              <Image
                src="/TestimonialDp.png"
                width={67}
                height={60}
                alt="person"
              />
              <div style={{display:"flex", flexDirection:"column"}}>
              <p className="profileName">
                Jenny Wilson 
              </p>
              <p className="profileDesignation">
              Vice President
              </p>
              </div>
            </div>
            <div className="testimonialButtonContainer">
              <button>
                <ButtonSvg />
              </button>
            </div>
          </div>
        </div>
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
      <Image
        src="/LogoClients.png"
        width={100}
        height={100}
        layout="responsive"
      />
      <Image
        src="/LogoClients.png"
        width={100}
        height={100}
        layout="responsive"
      />
      <Image
        src="/LogoClients.png"
        width={100}
        height={100}
        layout="responsive"
      />
      <Image
        src="/LogoClients.png"
        width={100}
        height={100}
        layout="responsive"
      />
      <Image
        src="/LogoClients.png"
        width={100}
        height={100}
        layout="responsive"
      />
    </motion.div>
  );
}

export default Clients;
