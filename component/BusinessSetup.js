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
        <div className="video">
          <Image src="/video1.png" width={586} height={300} />
        </div>
        <div className="video">
          <Image src="/video2.png" width={586} height={300} />
        </div>
      </div>
    </div>
  );
}

export default BusinessSetup;
