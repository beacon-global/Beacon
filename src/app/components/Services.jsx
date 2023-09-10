import Image from "next/image";
import React from "react";

function Services() {
  const servicesData = [
    {
      img: "/Services1.png",
      heading: "Company Formation",
      description:
        "Lorem Ipsum is simply dummy text of the printiones and futuresion future typesetting to industryhas been the industry's standard dummy text ever and typesetting.",
    },
    {
      img: "/Services2.png",
      heading: "PRO Services",
      description:
        "Lorem Ipsum is simply dummy text of the printiones and futuresion future typesetting to industryhas been the industry's standard dummy text ever and typesetting.",
    },
    {
      img: "/Services3.png",
      heading: "Trade License",
      description:
        "Lorem Ipsum is simply dummy text of the printiones and futuresion future typesetting to industryhas been the industry's standard dummy text ever and typesetting.",
    },
    {
      img: "/Services4.png",
      heading: "Attestation Services",
      description:
        "Lorem Ipsum is simply dummy text of the printiones and futuresion future typesetting to industryhas been the industry's standard dummy text ever and typesetting.",
    },
    {
      img: "/Services5.png",
      heading: "Visa Services",
      description:
        "Lorem Ipsum is simply dummy text of the printiones and futuresion future typesetting to industryhas been the industry's standard dummy text ever and typesetting.",
    },
    {
      img: "/Services6.png",
      heading: "Labour Services",
      description:
        "Lorem Ipsum is simply dummy text of the printiones and futuresion future typesetting to industryhas been the industry's standard dummy text ever and typesetting.",
    },
  ];
  return (
    <div className="serviceContainer">
      <div className="businessContentContainer">
        <h1 className="businessHeading">Services</h1>
        <h2 className="businessDesc">dummy typesetting the printiones</h2>
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
          </div>
        ))}
      </div>

      <div className="servicesButton">
        <button className="image-button">
          <Image
            src="/ServicesBtn.png"
            width={233}
            height={65}
            alt="Image Alt Text"
          />
        </button>
      </div>
    </div>
  );
}

export default Services;
