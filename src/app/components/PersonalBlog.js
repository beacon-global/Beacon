"use client";
import React, { useEffect, useState } from "react";
import styles from "../Styles/personalBlog.module.css";
import Image from "next/image";
import Link from "next/link";
import fetchDataAndExport, { urlFor } from "../../../test";

const PersonalBlog = ({ blogPage }) => {
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

  const imageSrc = isHovered ? "/whiteArrow.svg" : "/blackArrow.svg";

  return (
    <div className={styles.companyBlog}>
      <h6
        className={styles.text1}
        style={{ display: blogPage ? "none" : "block" }}
      >
        Blogs
      </h6>
      <h6 className={styles.text2}>
        {blogPage
          ? "Related Blogs"
          : "Read Through Our Perspectives & Latest Updates"}
      </h6>
      <div className={styles.companyBlogCards}>
        {blogData.map((data, index) => (
          <>
            {blogPage || (index < 4 && index > 0) && (
              <div className={styles.companyBlogCard} key={index}>
                <Link
                  href={{
                    pathname: "/pages/blog",
                    search: `?search=${JSON.stringify(data)}`,
                  }}
                  target="_blank"
                  onClick={() => console.log("Link clicked:")}
                >
                  <Image
                    src={urlFor(data.titleImage).url()}
                    width={350}
                    height={250}
                    alt="Image"
                    className={styles.blogImage}
                  />
                  <div className={styles.dateAndLocationContainer}>
                    <div className={styles.dateTextContainer}>
                      <h6 className={styles.text4}>{data.location}</h6>
                      <div className={styles.blogDot}></div>
                      <h6 className={styles.text3}>{data.date}</h6>
                    </div>
                    <Image
                      src="/blackArrow.svg"
                      width={23}
                      height={23}
                      alt="Image"
                      className={styles.blogArrow}
                    />
                  </div>
                  <div className={styles.companyBlogContent}>
                    <h6 className={styles.text5}>{data.title}</h6>
                    <h6 className={styles.text6}>{data.description}</h6>
                  </div>
                </Link>
              </div>
            )}
          </>
        ))}
      </div>

      <div
        className={`${styles.blogButton} hButtonContainer servicesButton`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      // style={{ marginTop: blogPage ? "-30px" : "" }}
      >
        <div className="visibleWrapperContainer">
          <div className="topVisibleContainer">
            <a href="/" className={`${styles.blogButtonText} btn`}>
              Explore More
              <div className={`${styles.topBlogArrow} topVisibleArrow`}>
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
            <a href="/" className={`${styles.blogButtonText} btn`}>
              Explore More
              <div className={`${styles.bottomBlogArrow} bottomVisibleArrow`}>
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
};

export default PersonalBlog;
