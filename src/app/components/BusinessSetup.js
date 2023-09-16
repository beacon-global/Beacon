import Image from "next/image";
import React from "react";

function BusinessSetup() {
  return (
    <div className="bussinessContainer">
      <div className="businessContentContainer">
        <h1 className="businessHeading">Business Setup</h1>
        <h2 className="businessDesc">dummy typesetting the printiones</h2>
      </div>
      <div className="businessVideoContainer">
        <div className="ksa">
          <Image src="/KSA.svg" width={586} height={300} layout="responsive" alt="ImageBusiness" />
          <div className="businessCardContentContainer">
            <h1 className="ksaHeading">Saudi arabia</h1>
            <p className="ksaDesc">
              Lorem Ipsum is simply dummy the printiones and futuresion future
              typesetting industryha dummy typesetting.
            </p>
            {/* <div className="businessCircle"> */}
              <Image src="/whiteArrowCircle.svg" width={40} height={40} alt="ImageBusiness" />
            {/* </div> */}
          </div>
        </div>

        <div className="uae">
          <Image src="/UAE.png" width={586} height={300} layout="responsive" alt="ImageBusiness" />
          <div className="businessCardContentContainer">
            <h1 className="ksaHeading">United Arab Emirates</h1>
            <p className="ksaDesc">
              Lorem Ipsum is simply dummy the printiones and futuresion future
              typesetting industryha dummy typesetting.
            </p>
            {/* <div className="businessCircle"> */}
              <Image src="/whiteArrowCircle.svg" width={40} height={40} alt="ImageBusiness" />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessSetup;
