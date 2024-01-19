"use client";
import Image from "next/image";
import React from "react";

function Hero({ initialScreenWidth }) {
  return (
    <div className="heroContainer">
      <div className="imageWithText">
        <Image
          className="hImage"
          src="/hero.webp"
          alt="Asian Engineer"
          width={1366}
          height={670}
          layout="responsive"
          quality={100}
          priority={true}
          unoptimized
        />
        <Image
          className="MobilehImage"
          src="/MobileHero.webp"
          alt="Asians Engineer"
          width={0}
          height={600}
          layout="responsive"
          quality={100}
          priority={true}
          unoptimized
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
          <a href="/pages/Contact">
            <div className="hButtonContainer heroButton">
              <div className="visibleWrapperContainer">
                <div className="topVisibleContainer btn">
                  Let&apos; Talk
                  <div className="topVisibleArrow">
                    <Image
                      src="/whiteArrow.svg"
                      width={23}
                      height={23}
                      alt="heroContact"
                    />
                  </div>
                </div>
                <div className="bottomVisibleContainer btn">
                  Contact Us
                  <div className="bottomVisibleArrow">
                    <Image
                      src="/whiteArrow.svg"
                      width={23}
                      height={23}
                      alt="heroContact"
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
