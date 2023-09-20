import Image from "next/image";
import React from "react";

function BusinessSetup() {
  return (
    <div className="bussinessContainer">
      <div className="businessContentContainer">
        <h6 className="businessHeading">Our Presence</h6>
        <h2 className="businessDesc">
          A breakdown of our global presence to <br /> scale your business
          growth
        </h2>
        <h2 className="mBusinessDesc">
          A breakdown of our <br /> global presence to scale <br /> your business
          growth
        </h2>
      </div>
      <div className="businessVideoContainer">
        <div className="ksa">
          <Image
            src="/Backgrounds/KSA.png"
            width={586}
            height={300}
            layout="responsive"
            alt="ImageBusiness1"
          />
          <div className="businessCardContentContainer">
            <h1 className="ksaHeading">KSA</h1>
            <p className="ksaDesc">
              Delve into our realm of business setup, incorporation, formation
              and business consulting services in Saudi Arabia.
            </p>
            {/* <div className="businessCircle"> */}
            <Image
              src="/whiteArrowCircle.svg"
              width={40}
              height={40}
              alt="ImageBusinessIcon"
            />
            {/* </div> */}
          </div>
        </div>

        <div className="uae">
          <Image
            src="/UAE.png"
            width={586}
            height={300}
            layout="responsive"
            alt="ImageBusiness2"
          />
          <div className="businessCardContentContainer">
            <h1 className="ksaHeading">UAE</h1>
            <p className="ksaDesc">
              Our practical insights and strategies help you with the entire
              spectrum of business management solutions in the UAE.
            </p>
            {/* <div className="businessCircle"> */}
            <Image
              src="/whiteArrowCircle.svg"
              width={40}
              height={40}
              alt="ImageBusinessIcon2"
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessSetup;
