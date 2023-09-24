"use client";
import Image from "next/image";
import React, { useState } from "react";

function Services() {
  const [isHovered, setIsHovered] = useState(false);

  const imageSrc = isHovered ? "/whiteArrow.svg" : "/blackArrow.svg";

  const servicesData = [
    {
      img: "/Services/Services7.svg",
      heading: "Business Incorporation",
      description:
        "Get company incorporation assistance and compliance support right after the registration process. Tell us your requirements and let us drive your investment and growth with business incorporation services",
    },
    {
      img: "/Services/Services6.svg",
      heading: "Business Consultation",
      description:
        "Our business consultation services augment your business requirements through essential aspects of businesses like people, processes, technology, and related operations.",
    },
    {
      img: "/Services/Services8.svg",
      heading: "Financial & Accounting",
      description:
        "Through the regular management of financial reports, accounting, and related activities of the business, we are involved in the analysis and reporting of financial processes.",
    },
    {
      img: "/Services/Services9.svg",
      heading: "Audit & Taxation",
      description:
        "We engage in the routine monitoring, review, and report of the significant tax matters that impact your business with the panel of our audit and tax experts.",
    },
    {
      img: "/Services/Services10.svg",
      heading: "technology solutions",
      description:
        "Along with the business experience, we infuse technology into the business processes to address your specific technical needs that reimagine business models.",
    },
    {
      img: "/Services/Services11.svg",
      heading: "digital marketing",
      description:
        "Hand over all your digital marketing to-do tasks to our experts and watch through the growth plateau with the finest services that scale your brand outreach.",
    },
  ];
  return (
    <div className="serviceContainer">
      <div className="businessContentContainer">
        <h6 className="businessHeading">Services</h6>
        <h2 className="businessDesc">Explore what our experts offer</h2>
        <h2 className="mBusinessDesc">Explore what our experts <br /> offer</h2>
      </div>

      <div className="cardMainContainer">
        {servicesData.map((data, index) => (
          <div className="cardContainer" key={index}>
            <div className="imgContainer">
              <Image src={data.img} width={70} height={70} alt="ImageService" />
            </div>
            <div className="servicesHeadingContainer">
              <h1 className="servicesHeading">{data.heading}</h1>
            </div>
            <div className="servicesDescContainer">
              <p className="servicesDesc">{data.description}</p>
            </div>
            <div className="cardContainerOverlay">
              <div className="cardContainerOverlayContent">
                <h2>Service Details</h2>
                <ul>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
              </div>
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
            <a href="/pages/Services" className="btn">
              Our Services
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
            <a href="/pages/Services" className="btn">
              Our Services
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

export default Services;
