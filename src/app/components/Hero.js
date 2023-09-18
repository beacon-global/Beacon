"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Hero() {
  // const screenSize = window.innerWidth; 
  const [screenWidth, setScreenWidth] = useState(null);

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
              You are exactly <br /> where you need <br /> to be Future.
            </h1>
          </div>
          <div>
            <p className="heroDesc">
              Lorem Ipsum is simply dummy text of the printing and futuresion
              <br />
              typesetting industryhas been the industrys standard dummis <br />
              industryhas been the industrys standard dummy.
            </p>
            <p className="mHeroDesc">
              Lorem Ipsum is simply dummy text of the printing and futuresion
              typesetting industryhas been the industrys standard dummis
              industryhas been the industrys standard dummy.
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
