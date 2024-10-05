"use client";
import React, { useEffect, useState } from "react";
import styles from "../Styles/personalBlog.module.css";
import Image from "next/image";
import Link from "next/link";
import sanityClient from "../../../sanity";
import { useRouter } from "next/navigation";

const PersonalBlog = ({ blogPage, isInnerPage = false }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "blog"] | order(publishedAt desc){
          title,
          subtitle,
          location,
          publishedAt,
          slug,
          description,
          "imageUrl": image.asset->url,
          content[]{
            ...,
            "contentImageUrl": contentImage.asset->url 
          }
        }`
      )
      .then((data) => {
        console.log(data, "Sanity data");
        setBlogData(data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  const imageSrc = isHovered ? "/whiteArrow.svg" : "/blackArrow.svg";
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const shouldDisplayCard = (index) => {
    return (
      blogPage ||
      isInnerPage ||
      (isMobile && index < 5 && index > 0) ||
      (index < 4 && index > 0)
    );
  };

  const blogsToDisplay = blogPage
    ? blogData !== null && blogData
    : blogData !== null && blogData.slice(0, 3);

  if (blogData === null) {
    return <div className="dataLoading">Loading...</div>;
  }

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
        {blogsToDisplay.map((data, index) => (
          <div
            className={
              isInnerPage
                ? index % 5 === 0
                  ? styles.companyBlogCard2
                  : styles.companyBlogCard
                : styles.companyBlogCard
            }
            key={index}
          >
            <Link
              href={`/pages/blog/${data?.slug?.current}`}
              target="_blank"
              onClick={() => console.log(data.slug, "Link clicked:")}
            >
              <Image
                src={data.imageUrl}
                width={350}
                height={250}
                alt="Image"
                className={styles.blogImage}
              />
              <div className={styles.dateAndLocationContainer}>
                <div className={styles.dateTextContainer}>
                  <h6 className={styles.text4}>{data?.location}</h6>
                  <div className={styles.blogDot}></div>
                  <h6 className={styles.text3}>
                    {new Date(data?.publishedAt).toLocaleDateString()}
                  </h6>
                </div>
              </div>
              <div className={styles.companyBlogContent}>
                <h6 className={styles.text5}>{data?.subtitle}</h6>
                <div className={styles.readmore}>
                  <h6>Read More</h6>
                  <Image
                    src={imageSrc}
                    width={23}
                    height={23}
                    alt="Image"
                    className={styles.blogArrow}
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {!isInnerPage && (
        <div
          className={`${styles.blogButton} hButtonContainer servicesButton`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          // style={{ marginTop: blogPage ? "-30px" : "" }}
        >
          <div className="visibleWrapperContainer">
            <div className="topVisibleContainer">
              <a href="/pages/blog" className={`${styles.blogButtonText} btn`}>
                Learn More
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
              <a href="/pages/blog" className={`${styles.blogButtonText} btn`}>
                Learn More
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
      )}
    </div>
  );
};

export default PersonalBlog;
