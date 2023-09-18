"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import { LeftArrowSvg, RightArrowSvg } from "./ButtonSvg";

function Clients() {
  const testimonials = [
    {
      message:
        "The best agency we've worked with so far. They understand our product and are able to add new features with a great focus.",
      name: "Jenny Wilson",
      designation: "Vice President",
      img: "/TestimonialDp.png",
    },
    {
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.",
      name: "John Doe",
      designation: "CEO",
      img: "/TestimonialDp.png",
    },
    // Add more testimonials here
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="clientsContainer">
      <div className="businessContentContainer">
        <h6 className="businessHeading">our CLIENTS</h6>
        <h2 className="businessDesc">Our core partners</h2>
      </div>
      <div className="clientsImgContainer">
        <ScrollingLogos />
      </div>
      <div className="testimonialMainContainer">
        <div className="testimonialLeftContainer">
          <h2 className="testimonialHeading">
            What our clients
            <br />
            say about us
          </h2>
          <p className="testimonialDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
          </p>
        </div>
        <div className="testimonialRightContainer">
          <div className="testimonialMessage">
            <h3>&quot;{currentTestimonial.message}&quot;</h3>
          </div>
          <div className="testimonialImageButtonContainer">
            <div className="testimonialProfile">
              <Image
                src={currentTestimonial.img}
                width={67}
                height={60}
                alt="person"
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                {/* Display current testimonial's profile */}
                <p className="profileName">{currentTestimonial.name}</p>
                <p className="profileDesignation">
                  {currentTestimonial.designation}
                </p>
              </div>
            </div>
            <div className="testimonialButtonContainer">
              <button onClick={nextTestimonial}>
                <RightArrowSvg />
              </button>
              <button onClick={previousTestimonial}>
                <LeftArrowSvg />
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
        src="/clients/microsoft.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/google.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/apple.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/ola.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/fedex.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/airBnb.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/bookMyShow.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/Amazon.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/microsoft.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/google.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/apple.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/ola.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/fedex.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/airBnb.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/bookMyShow.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/Amazon.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/microsoft.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/google.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/apple.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/ola.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/fedex.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/airBnb.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/bookMyShow.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/Amazon.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/microsoft.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/google.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/apple.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/ola.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/fedex.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/airBnb.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/bookMyShow.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/Amazon.svg"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
    </motion.div>
  );
}

// function LogosSlide() {
//   return (
//     <div class="slider">
//       <div class="slide-track">
//         <div class="slide">
//           <Image
//             src="/clients/bookMyShow.svg"
//             width={100}
//             height={0}
//             layout="responsive"
//             alt="ImageClients"
//             className="logoClients"
//           />
//         </div>
//         <div class="slide">
//           <Image
//             src="/clients/airBnb.svg"
//             width={100}
//             height={0}
//             layout="responsive"
//             alt="ImageClients"
//             className="logoClients"
//           />
//         </div>
//         <div class="slide">
//           <Image
//             src="/clients/fedex.svg"
//             width={100}
//             height={0}
//             layout="responsive"
//             alt="ImageClients"
//             className="logoClients"
//           />
//         </div>
//         <div class="slide">
//           <Image
//             src="/clients/apple.svg"
//             width={100}
//             height={0}
//             layout="responsive"
//             alt="ImageClients"
//             className="logoClients"
//           />
//         </div>
//         <div class="slide">
//           <Image
//             src="/clients/google.svg"
//             width={100}
//             height={0}
//             layout="responsive"
//             alt="ImageClients"
//             className="logoClients"
//           />
//         </div>
//         <div class="slide">
//           <Image
//             src="/clients/microsoft.svg"
//             width={100}
//             height={0}
//             layout="responsive"
//             alt="ImageClients"
//             className="logoClients"
//           />
//         </div>
//         <div class="slide">
//           <Image
//             src="/clients/ola.svg"
//             width={100}
//             height={0}
//             layout="responsive"
//             alt="ImageClients"
//             className="logoClients"
//           />
//         </div>
//         <div class="slide">
//           <Image
//             src="/clients/Amazon.svg"
//             width={100}
//             height={0}
//             layout="responsive"
//             alt="ImageClients"
//             className="logoClients"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

export default Clients;
