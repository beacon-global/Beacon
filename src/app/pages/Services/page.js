import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import React from "react";

function Services() {
  const servicesPageData = [
    {
      img: "/servicesPage1.png",
      heading: "Company Formation",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eu elit vitae bibendum bibendum accumsan facilisis libero. At arcu augue ante varius. Integer tellus donec nunc montes rhoncus adipiscing fringilla. Elit dictumst neque tempus porta lorem egestasullamcorper nunc sit quis egestas lectus facilisis nulla fringilla. Vestibulum dis mauris nullam tellus interdum. Consectetur felis euismod urna fusce imperdiet.",
      number: "01",
      alt: "servicesPage1",
    },
    {
      img: "/servicesPage2.png",
      heading: "PRO Services",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eu elit vitae bibendum bibendum accumsan facilisis libero. At arcu augue ante varius. Integer tellus donec nunc montes rhoncus adipiscing fringilla. Elit dictumst neque tempus porta lorem egestasullamcorper nunc sit quis egestas lectus facilisis nulla fringilla. Vestibulum dis mauris nullam tellus interdum. Consectetur felis euismod urna fusce imperdiet.",
      number: "02",
      alt: "servicesPage2",
    },
    {
      img: "/servicesPage3.png",
      heading: "Trade License",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eu elit vitae bibendum bibendum accumsan facilisis libero. At arcu augue ante varius. Integer tellus donec nunc montes rhoncus adipiscing fringilla. Elit dictumst neque tempus porta lorem egestasullamcorper nunc sit quis egestas lectus facilisis nulla fringilla. Vestibulum dis mauris nullam tellus interdum. Consectetur felis euismod urna fusce imperdiet.",
      number: "03",
      alt: "servicesPage3",
    },
    {
      img: "/servicesPage4.png",
      heading: "Attestation Services",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eu elit vitae bibendum bibendum accumsan facilisis libero. At arcu augue ante varius. Integer tellus donec nunc montes rhoncus adipiscing fringilla. Elit dictumst neque tempus porta lorem egestasullamcorper nunc sit quis egestas lectus facilisis nulla fringilla. Vestibulum dis mauris nullam tellus interdum. Consectetur felis euismod urna fusce imperdiet.",
      number: "04",
      alt: "servicesPage4",
    },
    {
      img: "/servicesPage5.png",
      heading: "Visa Services",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eu elit vitae bibendum bibendum accumsan facilisis libero. At arcu augue ante varius. Integer tellus donec nunc montes rhoncus adipiscing fringilla. Elit dictumst neque tempus porta lorem egestasullamcorper nunc sit quis egestas lectus facilisis nulla fringilla. Vestibulum dis mauris nullam tellus interdum. Consectetur felis euismod urna fusce imperdiet.",
      number: "05",
      alt: "servicesPage5",
    },
    {
      img: "/servicesPage6.png",
      heading: "Labour Services",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eu elit vitae bibendum bibendum accumsan facilisis libero. At arcu augue ante varius. Integer tellus donec nunc montes rhoncus adipiscing fringilla. Elit dictumst neque tempus porta lorem egestasullamcorper nunc sit quis egestas lectus facilisis nulla fringilla. Vestibulum dis mauris nullam tellus interdum. Consectetur felis euismod urna fusce imperdiet.",
      number: "06",
      alt: "servicesPage6",
    },
  ];

  return (
    <>
      <Header />
      <div className="servicesPageMainContainer">
        <div className="businessContentContainer">
          <h1 className="businessHeading">Business Setup</h1>
          <h2 className="businessDesc">dummy typesetting the printiones</h2>
        </div>

        <div className="servicesPageColomnContainer">
          {servicesPageData.map((data, index) => (
            <div className="servicesPageRowContainer" key={index}>
              <div className="servicesPageImageContainer">
                <Image
                  src={data.img}
                  width={420}
                  height={400}
                  layout="responsive"
                  alt={data.alt}
                />
              </div>
              <div className="servicesPageNo">
                <h1>{data.number}</h1>
              </div>
              <div className="servicesPageContentContainer">
                <h1 className="servicesPageHeading">{data.heading}</h1>
                <p className="servicesDesc">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Contact />
      <div className="serviceFooterMargin">
        <Footer />
      </div>
    </>
  );
}

export default Services;
