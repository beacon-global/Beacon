"use client";
import { LazyMotion, domAnimation, m, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function Clients() {
  const testimonials = [
    {
      message:
        "Beacon has been with us throughout the phase of integrating and adapting business to the dynamic marketplace, with end-to-end business consultation services.",
      name: "Omar Abdallah",
      designation: "Riyadh, KSA",
      img: "/profilePic3.webp",
    },
    {
      message:
        "While partnering with Beacon, we never felt them as the business consultants, but as a part of our team with transparency and commitment at its best.",
      name: "Muhammed",
      designation: "Jeddah, KSA",
      img: "/profilePic4.webp",
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
                quality={100}
                priority={true}
                unoptimized
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
  const [animateValue, setAnimateValue] = useState("-200%");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      // Set the animate value based on screen width
      const newAnimateValue = screenWidth < 600 ? "-325%" : "-200%";

      // Update the animate value only if it has changed
      if (newAnimateValue !== animateValue) {
        setAnimateValue(newAnimateValue);
      }
    };

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Call handleResize once to set the initial animate value
    handleResize();

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [animateValue]);

  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.start({
      x: animateValue,
      transition: {
        repeat: Infinity,
        duration: 180, // Adjust the duration when hovering
        ease: "linear",
      },
    });
  };

  const handleHoverEnd = () => {
    controls.start({
      x: animateValue,
      transition: {
        repeat: Infinity,
        duration: 60, // Original duration
        ease: "linear",
      },
    });
  };

  useEffect(() => {
    handleHoverEnd();
    console.log("use");
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="scrolling-logos"
        initial={{ x: "0%" }}
        animate={controls}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo1.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo2.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo3.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo4.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo5.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo6.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo9.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo10.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo11.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo12.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo13.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo15.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo17.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo18.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo20.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo22.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo1.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo2.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo3.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo4.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo5.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo6.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo9.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo10.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo11.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo12.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo13.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo15.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo17.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo18.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo20.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo22.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo1.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo2.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo3.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo4.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo5.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo6.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo9.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo10.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo11.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo12.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo13.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo15.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo17.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo18.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo20.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
        <Image
          quality={100}
          loading="lazy"
          unoptimized
          src="/clients/brands/webp/logo22.webp"
          width={100}
          height={0}
          layout="responsive"
          alt="ImageClients"
          className="logoClients"
        />
      </m.div>
    </LazyMotion>
  );
}

export default Clients;
