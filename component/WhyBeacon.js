import Image from "next/image";
import React from "react";

function WhyBeacon() {
  const beaconData = [
    {
      img: "/BeaconIcon1.png",
      heading: "data-driven",
      description:
        "Lorem Ipsum is simply dummy future printiones futuresion future typesetting industryha dummy typesetting.",
    },
    {
      img: "/BeaconIcon2.png",
      heading: "global perspective",
      description:
        "Lorem Ipsum is simply dummy future printiones futuresion future typesetting industryha dummy typesetting.",
    },
    {
      img: "/BeaconIcon3.png",
      heading: "challenge everything",
      description:
        "Lorem Ipsum is simply dummy future printiones futuresion future typesetting industryha dummy typesetting.",
    },
    {
      img: "/BeaconIcon4.png",
      heading: "collaborative first",
      description:
        "Lorem Ipsum is simply dummy future printiones futuresion future typesetting industryha dummy typesetting.",
    },
    {
      img: "/BeaconIcon5.png",
      heading: "communication",
      description:
        "Lorem Ipsum is simply dummy future printiones futuresion future typesetting industryha dummy typesetting.",
    },
    {
      img: "/BeaconIcon6.png",
      heading: "dedicated teams",
      description:
        "Lorem Ipsum is simply dummy future printiones futuresion future typesetting industryha dummy typesetting.",
    },
  ];

  return (
    <div className="whyBeaconContainer">
      <div className="whyBeaconContentsContainer">
        <div className="whyBeaconLeft">
          <h1 className="businessHeading">Why Beacon?</h1>
        </div>
        <div className="whyBeaconRight">
          <h2 className="whyBeaconHeading">
            purus terdum euismod<br /> All in one place
          </h2>
          <p className="whyBeaconDesc">
            Lorem Ipsum is simply dummy text of the printiones and futuresion
            future typesetting industryhas been the industry's standard dummy
            text ever since thescrambledLorem Ipsum is simply dummy text of the
            printing and typesetting.
          </p>
        </div>
      </div>

      <div className="whyBeaconImgContainer">
        <Image
          className="whyBeaconImg"
          src="/WhyBeacon.png"
          layout="responsive"
          width={1049}
          height={434}
          alt="ImageWhyBeacon"
        />
      </div>

      <div className="beaconMainContainer">
        {beaconData.map((data, index) => (
          <div className="beaconContainer" key={index}>
            <div className="beaconimgContainer">
              <Image className="becaonIconImg" src={data.img} width={60} height={40} alt="whyBeaconIcon"/>
            </div>
            <div className="beaconContentContainer">
              <div className="beaconHeadingContainer">
                <h1 className="beaconHeading">{data.heading}</h1>
              </div>
              <div className="beaconDescContainer">
                <p className="beaconDesc">{data.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyBeacon;
