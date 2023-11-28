"use client";
import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../../../public/circleGlobal.json";

const LoadingCircle = ({onLoadedImages}) => {
  

  const DesktopAnimationStyle = {
    width: "50px", // Adjust the width as needed
    height: "50px",
  };

  const MobileAnimationStyle ={
    width: "25px", // Adjust the width as needed
    height: "25px",
  }

  return (
    <>
    <div className='DesktopLottieContainer'>
      <Lottie
      onLoadedImages={onLoadedImages}
        animationData={loaderAnimation}
        loop={true}
        style={DesktopAnimationStyle}
      />
    </div>
    <div className='MobileLottieContainer'>
      <Lottie
        onLoadedImages={onLoadedImages}
        animationData={loaderAnimation}
        loop={true}
        style={MobileAnimationStyle}
      />
    </div>
    </>
  );
};

export default LoadingCircle;
