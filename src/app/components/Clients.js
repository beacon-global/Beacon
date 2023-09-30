"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { LeftArrowSvg, RightArrowSvg } from "./ButtonSvg";
import ScrollableRow from "./ScrollableRow";

function Clients() {
  const testimonials = [
    {
      message:
        "Beacon has been with us throughout the phase of integrating and adapting business to the dynamic marketplace, with end-to-end business consultation services. ",
      name: "Omar Abdallah",
      designation: "Riyadh, KSA",
      img: "/TestimonialDp.png",
    },
    {
      message:
        "While partnering with Beacon, we never felt them as the business consultants, but as a part of our team with transparency and commitment at its best.",
      name: "Muhammed",
      designation: "Jeddah, KSA",
      img: "/TestimonialDp.png",
    },
    
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
      {/* <div className="clientsImgContainer"> */}
      <ScrollingLogos />
      {/* <ScrollableRow /> */}
      {/* </div> */}
      <div className="testimonialMainContainer">
        <div className="testimonialLeftContainer">
          <h2 className="testimonialHeading">
            What our clients
            <br />
            say about us
          </h2>
          <h2 className="mTestimonialHeading">
            What our clients say <br /> about us
          </h2>
          <p className="testimonialDesc">
            Let&lsquo;s hear from our clients, the core of whatever we commit.
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
              <button className="leftButton" onClick={previousTestimonial}>
                {"<"}
              </button>
              <button className="rightButton" onClick={nextTestimonial}>
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScrollingLogos() {
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    const images = document.querySelectorAll(".logoClients img");
    const totalImages = images.length;
    let imagesLoaded = 0;

    const handleImageLoad = () => {
      console.log(totalImages, "jdkslfj");
      imagesLoaded++;
      if (imagesLoaded === totalImages) {
        setAllImagesLoaded(true);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener("load", handleImageLoad);
      }
    });

    return () => {
      // Clean up event listeners if the component unmounts
      images.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
      });
    };
  }, []);

  return (
    <motion.div
      className={`scrolling-logos ${allImagesLoaded ? "loaded" : ""}`}
      initial={{ x: "0%" }}
      animate={{ x: "-300%" }}
      transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
    >
      <Image
        src="/clients/brands/logo1.png"
        width={100}
        height={0}
        loading="lazy"
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/brands/logo2.png"
        width={100}
        height={0}
        loading="lazy"
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/brands/logo3.png"
        width={100}
        height={0}
        loading="lazy"
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/brands/logo4.png"
        width={100}
        height={0}
        loading="lazy"
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/brands/logo5.png"
        width={100}
        height={0}
        loading="lazy"
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/brands/logo6.png"
        width={100}
        height={0}
        loading="lazy"
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/brands/logo7.png"
        width={100}
        height={0}
        loading="lazy"
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/brands/logo8.png"
        width={100}
        height={0}
        loading="lazy"
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/brands/logo9.png"
        width={100}
        height={0}
        loading="lazy"
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/brands/logo10.png"
        width={100}
        height={0}
        loading="lazy"
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/brands/logo11.png"
        width={100}
        height={0}
        loading="lazy"
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/brands/logo12.png"
        width={100}
        height={0}
        loading="lazy"
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/brands/logo13.png"
        width={100}
        height={0}
        loading="lazy"
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      {/* <Image
        src="/clients/brands/logo14.png"
        width={100}
        height={0}
        loading="lazy"
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      /> */}
      <Image
        src="/clients/brands/logo15.png"
        width={100}
        height={0}
        loading="lazy"
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/brands/logo16.png"
        width={100}
        height={0}
        loading="lazy"
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/brands/logo17.png"
        width={100}
        height={0}
        loading="lazy"
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/brands/logo18.png"
        width={100}
        height={0}
        loading="lazy"
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/brands/logo19.png"
        width={100}
        height={0}
        loading="lazy"
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/brands/logo20.png"
        width={100}
        height={0}
        loading="lazy"
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        src="/clients/brands/logo22.png"
        width={100}
        height={0}
        loading="lazy"
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
