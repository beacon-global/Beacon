"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Hero() {
  const screenSize = window.innerWidth;
  const [screenWidth, setScreenWidth] = useState(screenSize);

  useEffect(() => {
    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      console.log("Screen Width:", newScreenWidth);
      setScreenWidth(newScreenWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageSrc = screenWidth < 600 ? "/MobileHero.png" : "/hero.png";

  return (
    <div className="heroContainer">
      <div className="imageWithText">
        <Image
          className="hImage"
          src={imageSrc}
          alt="Asian Engineer"
          width={1366}
          height={670}
          layout="responsive"
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
