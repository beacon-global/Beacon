import Image from "next/image";
import React from "react";

function Hero() {
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
