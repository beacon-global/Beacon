"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Hero({ initialScreenWidth }) {
  // const screenSize = window.innerWidth;

  const [isMobileScreen, setIsMobileScreen] = useState(true);
  const [imageSrc, setImageSrc] = useState("");

  // useEffect(() => {
  //   // Check screen size on the client side
  //   const checkScreenSize = () => {
  //     const newIsMobileScreen = window.innerWidth < 600;
  //     setIsMobileScreen(newIsMobileScreen);

  //     // Update imageSrc based on screen size
  //     if (newIsMobileScreen) {
  //       setImageSrc("/MobileHero.png");
  //     } else {
  //       setImageSrc("/hero.png");
  //     }
  //   };

  //   // Add event listener for window resize
  //   window.addEventListener("resize", checkScreenSize);

  //   // Initial check on component mount
  //   checkScreenSize();

  //   return () => {
  //     window.removeEventListener("resize", checkScreenSize);
  //   };
  // }, []);

  // const imageSrc = isMobileScreen ? "/MobileHero.png" : "/hero.png";

  // console.log("Is Mobile Screen:", isMobileScreen); // Log if it's a mobile screen for debugging
  // console.log("Image Source:", imageSrc); // Log the image source for debugging

  return (
    <div className="heroContainer">
      <div className="imageWithText">
        <Image
          className="hImage"
          src="/hero.png"
          alt="Asian Engineer"
          width={1366}
          height={670}
          layout="responsive"
          loading="lazy"
        />
        <Image
          className="MobilehImage"
          src="/MobileHero.png"
          alt="Asian Engineer"
          width={1366}
          height={670}
          layout="responsive"
          loading="lazy"
        />
        <div className="textOverlay">
          <div>
            <h1 className="heorHeading">
              Your Global <br /> Advisory Partner For <br /> Business Success
            </h1>
          </div>
          <div className="heroDescContainer">
            <p className="heroDesc">
              Establishing a business in Saudi Arabia or anywhere in the UAE
              needs broader and deeper know-how along with a firm foundation to
              remain ahead of the curve. Having a perfect business model helps
              you accommodate the customers’ expectations. At Beacon Global, we
              offer expert business consulting services with practical
              strategies that adhere the best to global business standards.
            </p>
            <p className="mHeroDesc">
              Establishing a business in Saudi Arabia or anywhere in the UAE
              needs broader and deeper know-how along with a firm foundation to
              remain ahead of the curve. Having a perfect business model helps
              you accommodate the customers’ expectations. At Beacon Global, we
              offer expert business consulting services with practical
              strategies that adhere the best to global business standards.
            </p>
          </div>
          <div className="hButtonContainer heroButton">
            <div className="visibleWrapperContainer">
              <div className="topVisibleContainer">
                <a href="/" className="btn">
                  Our Services
                  <div className="topVisibleArrow">
                    <Image
                      src="/whiteArrow.svg"
                      width={23}
                      height={23}
                      alt="heroContact"
                    />
                  </div>
                </a>
              </div>
              <div className="bottomVisibleContainer">
                <a href="/" className="btn">
                  Our Services
                  <div className="bottomVisibleArrow">
                    <Image
                      src="/whiteArrow.svg"
                      width={23}
                      height={23}
                      alt="heroContact"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
