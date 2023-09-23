"use client";
import React, { useState } from "react";
import styles from "../../Styles/servicesPage.module.css";
import Image from "next/image";
import Header from "@/app/components/Header";
import MobileHeader from "@/app/components/MobileHeader";
import { LeftArrowSvg, RightArrowSvg } from "../../components/ButtonSvg";
import Faq from "@/app/components/Faq";
import Footer from "@/app/components/Footer";

function Services() {
  const servicePageData = [
    {
      img: "/Services/Services7.svg",
      heading: "Business Incorporation",
      description:
        "Get company incorporation assistance and compliance support right after the registration process. Tell us your requirements and let us drive your investment and growth with business incorporation services",
    },
    {
      img: "/Services/Services6.png",
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

  const sellingCardData = [
    {
      img: "/AboutUsPage/aboutPageIcon.svg",
      heading: "Losing Money Hurts",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eu elit vitae bibendum bibendum accumsan facilisis libero the arcu augue ante rhoncus adipiscing fringilla.",
    },
    {
      img: "/AboutUsPage/aboutPageIcon.svg",
      heading: "Losing Money Hurts",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eu elit vitae bibendum bibendum accumsan facilisis libero the arcu augue ante rhoncus adipiscing fringilla.",
    },
    {
      img: "/AboutUsPage/aboutPageIcon.svg",
      heading: "Losing Money Hurts",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eu elit vitae bibendum bibendum accumsan facilisis libero the arcu augue ante rhoncus adipiscing fringilla.",
    },
    {
      img: "/AboutUsPage/aboutPageIcon.svg",
      heading: "Losing Money Hurts",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eu elit vitae bibendum bibendum accumsan facilisis libero the arcu augue ante rhoncus adipiscing fringilla.",
    },
  ];

  const testimonials = [
    {
      message:
        "Beacon Global has been with us throughout the phase of integrating and adapting business to the dynamic marketplace, with end-to-end business consultation services.",
      name: "Jenny Wilson",
      designation: "Vice President",
      img: "/TestimonialDp.png",
    },
    {
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.",
      name: "John Doe",
      designation: "CEO",
      img: "/TestimonialDp.png",
    },
    // Add more testimonials here
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <>
      <Header />
      <MobileHeader />
      <div className={styles.servicePageMainContainer}>
        <h2 className="businessDesc">purus interdum euismod feugiat</h2>
        <div className={`${styles.cardMainContainer} cardMainContainer`}>
          {servicePageData.map((data, index) => (
            <div className="cardContainer" key={index}>
              <div className="imgContainer">
                <Image
                  src={data.img}
                  width={70}
                  height={70}
                  alt="ImageService"
                />
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

        <div className={styles.servicesPageContainer2}>
          <div className={styles.servicePageImageContainer2}>
            <Image
              src="/ServicesPage/servicesPage7.svg"
              width={576}
              height={540}
              layout="responsive"
              alt="serviceImg1"
            />
          </div>
          <div className={styles.container2Contents}>
            <h1 className="businessDesc">
              Porttitor the curabitur
              <br /> Adipiscing euismod.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Eu elit vitae bibendum
              bibendum accumsan facilisis libero. At arcu augue ante varius.
              Integer tellus donec nunc montes rhoncus adipiscing fringilla.
              Elit dictumst neque tempus porta lorem egestas tellus convallis.
              Accumsan ullamcorper nunc sit quis egestas lectus facilisis nulla
              fringilla. Vestibulum dis mauris nullam tellus interdum.
              Consectetur felis euismod urna fusce
            </p>
          </div>
        </div>

        <div className={styles.container3}>
          <h1 className="businessDesc">How Selling Works</h1>
          <div className={styles.container3SellingCard}>
            {sellingCardData.map((data, index) => (
              <div className={styles.sellingCards} key={index}>
                <div className={styles.sellingImageContainer} key={index}>
                  <Image
                    src={data.img}
                    width={80}
                    height={80}
                    layout="responsive"
                    alt="serviceImg2"
                  />
                </div>
                <div className={styles.container3Contents}>
                  <h1 className="servicesHeading">{data.heading}</h1>
                  <p className="servicesDesc">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.container4}>
          <div className={styles.background}></div>
          <div className={styles.container4Contents}>
            <h1 className="businessDesc">
              Solving problems by
              <br /> the services
            </h1>
            <p className="servicesDesc">
              Lorem ipsum dolor sit amet consectetur. Eu elit vitae bibendum
              bibendum accumsan facilisis libero. At arcu augue ante varius.
              Integer tellus donec nunc montes rhoncus adipiscing fringilla.
              Elit dictumst neque tempus porta lorem egestas tellus convallis.
              Accumsan ullamcorper nunc sit quis egestas lectus facilisis nulla
              fringilla. Vestibulum dis mauris nullam tellus interdum.
              Consectetur felis euismod urna fusce
            </p>
          </div>
          <div className={styles.container4ImgContainer}>
            <Image
              src="/AboutUsPage/aboutPage2.svg"
              width={500}
              height={500}
              layout="responsive"
              alt="aboutus2"
            />
          </div>
        </div>
        <div className={styles.marginContainer}>
          <div
            className={`${styles.testimonialMainContainerServicePage} testimonialMainContainer`}
          >
            <div
              className={`${styles.testimonialLeftContainer} testimonialLeftContainer`}
            >
              <h2 className="testimonialHeading">
                What our clients
                <br />
                say about us
              </h2>
              <h2 className="mTestimonialHeading">
                What our clients say <br /> about us
              </h2>
              <p className="testimonialDesc">
                Let&quot;s hear from our clients, the core of whatever we
                commit.
              </p>
            </div>
            <div className="testimonialRightContainer">
              <div className="testimonialMessage">
                <h3>&quot;{currentTestimonial.message}&quot;</h3>
              </div>
              <div className="testimonialImageButtonContainer">
                <div className="testimonialProfile">
                  <Image
                    src={currentTestimonial.img}
                    width={67}
                    height={60}
                    alt="person"
                  />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {/* Display current testimonial's profile */}
                    <p className="profileName">{currentTestimonial.name}</p>
                    <p className="profileDesignation">
                      {currentTestimonial.designation}
                    </p>
                  </div>
                </div>
                <div className="testimonialButtonContainer">
                  <button className="leftButton" onClick={previousTestimonial}>
                    {"<"}
                  </button>
                  <button className="rightButton" onClick={nextTestimonial}>
                    {">"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default Services;
