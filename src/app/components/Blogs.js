"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function Blogs() {
  const [isHovered, setIsHovered] = useState(false);

  const imageSrc = isHovered ? "/whiteArrow.svg" : "/blackArrow.svg";

  // const screenSize = window.innerWidth;
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const blogsData = [
    {
      img: "/Blogs/Blogs1.png",
      heading: "Celerisque sollicitudin in future fermentum integer",
      description:
        "Lorem Ipsum is simply dummy text of the printiones and futuresion future typesetting to industryhas been the industry's standard dummy text ever and typesetting.",
      btnText: "Mainland . April 4,2024",
    },
    {
      img: "/Blogs/Blogs2.png",
      heading: "Celerisque sollicitudin in future fermentum integer",
      description:
        "Lorem Ipsum is simply dummy text of the printiones and futuresion future typesetting to industryhas been the industry's standard dummy text ever and typesetting.",
      btnText: "Mainland . April 4,2024",
    },
    {
      img: "/Blogs/Blogs3.png",
      heading: "Celerisque sollicitudin in future fermentum integer",
      description:
        "Lorem Ipsum is simply dummy text of the printiones and futuresion future typesetting to industryhas been the industry's standard dummy text ever and typesetting.",
      btnText: "Mainland . April 4,2024",
    },
  ];

  const displayedBlogs = screenWidth < 600 ? blogsData.slice(0, 2) : blogsData;

  return (
    <div className="blogsContainer">
      <div className="businessContentContainer">
        <h6 className="businessHeading">Blogs</h6>
        <h2 className="businessDesc">
          Read Through Our Perspectives & Latest Updates
        </h2>
      </div>

      <div className="rectangleContainer">
        {displayedBlogs.map((data, index) => (
          <div className="cardContainer" key={index}>
            <div className="imgContainer">
              <Image src={data.img} width={350} height={250} alt="Image" />
            </div>
            <div className="blogBtnMainContainer">
              <div className="blogButtonContainer">
                <button className="blogBtn">{data.btnText}</button>
              </div>
              <button className="arrowButton">
                <Image
                  src="blackArrow.svg"
                  width={23}
                  height={23}
                  alt="Image"
                />
              </button>
            </div>
            <div className="servicesHeadingContainer">
              <h1 className="servicesHeading">{data.heading}</h1>
            </div>
            <div className="servicesDescContainer">
              <p className="servicesDesc">{data.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="hButtonContainer servicesButton"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="visibleWrapperContainer">
          <div className="topVisibleContainer">
            <a href="/" className="btn">
              Explore More
              <div className="topVisibleArrow">
                <Image
                  src={imageSrc}
                  width={23}
                  height={23}
                  alt="heroContact"
                />
              </div>
            </a>
          </div>
          <div className="bottomVisibleContainer">
            <a href="/" className="btn">
              Explore More
              <div className="bottomVisibleArrow">
                <Image
                  src={imageSrc}
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
  );
}

export default Blogs;
