"use client"
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/circleGlobal.json";

const LoadingCircle = () => {
    const DesktopSize = {
    width: "100px", // Adjust the width as needed
    height: "100px", // Adjust the height as needed
  };

    const MobileSize = {
    width: "50px", // Adjust the width as needed
    height: "50px", // Adjust the height as needed
  };

  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileScreen(window.innerWidth < 600);
    };

    window.addEventListener("resize", checkScreenSize);

    checkScreenSize();

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);


  return <Lottie animationData={groovyWalkAnimation} loop={true} style={isMobileScreen ? MobileSize : DesktopSize}/>;
};

export default LoadingCircle;
