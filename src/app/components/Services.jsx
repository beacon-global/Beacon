"use client";
import Image from "next/image";
import React, { useState } from "react";

function Services() {
  const [isHovered, setIsHovered] = useState(false);

  const imageSrc = isHovered ? "/whiteArrow.svg" : "/blackArrow.svg";

  const servicesData = [
    {
      img: "/NewSvgs/SVG2/Group1.svg",
      heading: "Business Incorporation",
      description:
        "Get company incorporation assistance and compliance support right after the registration process. Tell us your requirements and let us drive your investment and growth with business incorporation services",
      details: [
        "GCC National Country",
        "Limited Liability Company",
        "Multi County Business Setup",
        "Branch of Foreign Company",
      ],
    },
    {
      img: "/NewSvgs/SVG2/Group6.svg",
      heading: "Business Consultation",
      description:
        "Our business consultation services augment your business requirements through essential aspects of businesses like people, processes, technology, and related operations.",
      details: [
        "Government Relation Management",
        "Employee Work Permit & Visa Assistance",
        "Regulatory Compliance",
        "Licence Amendment",
        "Company Liquidation",
        "Business Transfer - Merging",
        "Trademark Registration",
      ],
    },
    {
      img: "/NewSvgs/SVG2/Group2.svg",
      heading: "Financial & Accounting",
      description:
        "Through the regular management of financial reports, accounting, and related activities of the business, we are involved in the analysis and reporting of financial processes.",
      details: [
        "Financial Statement Preparation",
        "Tax Planning & Preparation",
        "Budgeting & Forecasting",
        "Financial Planning",
        "Investment Management",
        "Business Valuation",
        "Corporate Finance & Payroll Services",
      ],
    },
    {
      img: "/NewSvgs/SVG2/Group4.svg",
      heading: "Audit & Taxation",
      description:
        "We engage in the routine monitoring, review, and report of the significant tax matters that impact your business with the panel of our audit and tax experts.",
      details: [
        "Internal Audits",
        "Compliance Audits",
        "VAT Advisory Services",
        "Income Tax Advisory Services",
        "Social Responsibility Audits",
        "Tax Risk Management Services",
        "Operational Audits",
      ],
    },
    {
      img: "/NewSvgs/SVG2/Group3.svg",
      heading: "Technology Solutions",
      description:
        "Along with the business experience, we infuse technology into the business processes to address your specific technical needs that reimagine business models.",
      details: [
        "Digital Strategy",
        "UI Designing",
        "Content Strategy",
        "Web Development",
        "Ecommerce Development",
        "Android App Development",
        "iOS App Development",
      ],
    },
    {
      img: "/NewSvgs/SVG2/Group5.svg",
      heading: "Digital Marketing",
      description:
        "Hand over all your digital marketing to-do tasks to our experts and watch through the growth plateau with the finest services that scale your brand outreach.",
      details: [
        "Search Engine Optimization (SEO)",
        "Search Engine Marketing (Google Ads)",
        "Social Media Marketing (Meta Ads)",
        "Social Media Management",
        "Lead Generation",
        "LinkedIn Ads",
        "Tiktok Ads",
      ],
    },
  ];

  return (
    <div className="serviceContainer">
      <div className="businessContentContainer">
        <h6 className="businessHeading">Services</h6>
        <h2 className="businessDesc">Explore what our experts offer</h2>
        <h2 className="mBusinessDesc">
          Explore what our experts <br /> offer
        </h2>
      </div>

      <div className="cardMainContainer">
        {servicesData.map((data, index) => (
          <div className="cardContainer" key={index}>
            <div className="imgContainer">
              <Image src={data.img} width={70} height={70} alt="ImageService" quality={100} priority={true} unoptimized />
            </div>
            <div className="servicesHeadingContainer">
              <h1 className="servicesHeading">{data.heading}</h1>
            </div>
            <div className="servicesDescContainer">
              <p className="servicesDesc">{data.description}</p>
            </div>
            <div className="cardContainerOverlay">
              <div className="cardContainerOverlayContent">
                <h2>{data.heading}</h2>
                <div className="overLayDesc">
                  <p>{data.details[0]}</p>
                  <p>{data.details[1]}</p>
                  <p>{data.details[2]}</p>
                  <p>{data.details[3]}</p>
                  <p>{data.details[4]}</p>
                  <p>{data.details[5]}</p>
                  <p>{data.details[6]}</p>
                  <p>{data.details[7]}</p>
                </div>
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
                  quality={100} 
                  priority={true} 
                  unoptimized 
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
                  quality={100} 
                  priority={true} 
                  unoptimized 
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
