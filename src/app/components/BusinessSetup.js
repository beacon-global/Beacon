import Image from "next/image";
import React from "react";

function BusinessSetup() {
  return (
    <div className="bussinessContainer">
      <div className="businessContentContainer">
        <h6 className="businessHeading">Explore</h6>
        <h2 className="businessDesc">
          A breakdown of our global presence to <br /> scale your business
          growth
        </h2>
        <h2 className="mBusinessDesc">
          A breakdown of our <br /> global presence to scale <br /> your
          business growth
        </h2>
      </div>
      <div className="businessVideoContainer">
        <div className="ksa">
          <a href="https://ksa.beaconarabia.com" target="_blank">
            <Image
              src="/KSA.webp"
              width={586}
              height={300}
              layout="responsive"
              alt="ImageBusiness1"
              className="ImageBusiness"
              quality={100}
              priority={true}
              unoptimized
            />
            <div className="businessCardContentContainer">
              <h1 className="ksaHeading">KSA</h1>
              <p className="ksaDesc">
                Delve into our realm of business setup, incorporation, formation
                and business consulting services in Saudi Arabia.
              </p>
              <div className="businessCircle">
                <Image
                  src="/whiteArrow.svg"
                  width={20}
                  height={19}
                  alt="ImageBusinessIcon"
                  quality={100}
                  priority={true}
                  unoptimized
                />
              </div>
            </div>
          </a>
        </div>

        <div className="uae">
          <a href="https://uae.beaconarabia.com" target="_blank">
            <Image
              src="/UAE.webp"
              width={586}
              height={300}
              layout="responsive"
              loading="lazy"
              alt="ImageBusiness2"
              className="ImageBusiness"
            />
            <div className="businessCardContentContainer">
              <h1 className="ksaHeading">UAE</h1>
              <p className="ksaDesc">
                Our practical insights and strategies help you with the entire
                spectrum of business management solutions in the UAE.
              </p>
              <div className="businessCircle">
                <Image
                  src="/whiteArrow.svg"
                  width={20}
                  height={19}
                  alt="ImageBusinessIcon"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BusinessSetup;
