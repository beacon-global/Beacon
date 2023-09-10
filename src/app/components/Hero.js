import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="heroContainer">
      <div className="imageWithText">
        <Image className="hImage" src="/hero.png" alt="Asian Engineer" width={1366} height={670} layout="responsive"/>
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
          <div className="hButtonContainer">
            <button className="btn">Our Services <Image src='/whiteArrow.png'  width={18} height={18} alt="heroContact"/></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
