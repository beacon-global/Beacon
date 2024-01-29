"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import fetchDataAndExport, { urlFor } from "../../../test";
import Link from "next/link";
// import styles from "../Styles/blogs.module.css";

function Blogs({ blogPage }) {
  const [isHovered, setIsHovered] = useState(false);
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchDataAndExport();
        setBlogData(data);

        console.log("Fetched data in component:", data);
      } catch (error) {
        console.error("Error in component:", error.message);
      }
    }

    fetchData();
  }, []);

  const firstObject = blogData;

  const imageSrc = isHovered ? "/whiteArrow.svg" : "/blackArrow.svg";

  return (
    <>
      <div className="blogsContainer">
        <div className="businessContentContainer">
          <h6
            className="businessHeading"
            style={{ display: blogPage ? "none" : "block" }}
          >
            Blogs
          </h6>
          <h2 className="blogBusinessDesc blogBusinessDesc">
            {blogPage
              ? "Related Blogs"
              : "Read Through Our Perspectives & Latest Updates"}
          </h2>
        </div>

        <div className="rectangleContainer">
          {blogData.map((data, index) => (
            <div className="cardlinkeWrapper" key={index}>
              <Link
                href={{
                  pathname: "/pages/blog",
                  search: `?search=${JSON.stringify(data)}`,
                }}
                target="_blank"
                 onClick={() => console.log("Link clicked:")}
              >
                <div className="cardContainer">
                  <div className="imgContainer">
                    <Image
                      src={urlFor(data.titleImage).url()}
                      width={350}
                      height={250}
                      alt="Image"
                    />
                  </div>
                  <div className="blogBtnMainContainer">
                    <div className="blogButtonContainer">
                      {data.location}
                      <div className="blogDot"></div>
                      {data.date}
                    </div>
                    <div className="blogarrowButton">
                      <Image
                        src="/blackArrow.svg"
                        width={23}
                        height={23}
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div className="servicesHeadingContainer">
                    <h1 className="servicesHeading">{data.title}</h1>
                  </div>
                  <div className="servicesDescContainer">
                    <p className="servicesDesc">{data.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div
          className="hButtonContainer servicesButton blogButton"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{marginTop: blogPage ? "-30px" : ""}}
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
    </>
  );
}

export default Blogs;
