import Image from "next/image";
import React from "react";

function Blogs() {
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

  return (
    <div className="blogsContainer">
      <div className="businessContentContainer">
        <h1 className="businessHeading">Blogs</h1>
        <h2 className="businessDesc">
          purus interdum euismod feugiat the rutrum
        </h2>
      </div>

      <div className="rectangleContainer">
        {blogsData.map((data, index) => (
          <div className="cardContainer" key={index}>
            <div className="imgContainer">
              <Image src={data.img} width={350} height={250} alt="Image"/>
            </div>
            <div className="blogBtnMainContainer">
              <div className="blogButtonContainer">
                <button className="blogBtn">{data.btnText}</button>
              </div>
              <button className="arrowButton">
                <Image src="/Arrow.png" width={23} height={23} alt="Image"/>
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

export default Blogs;
