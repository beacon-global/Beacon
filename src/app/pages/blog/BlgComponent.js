"use client";
import React, { useEffect } from "react";
import styles from "./blogs.module.css";
import Header from "@/app/components/Header";
import MobileHeader from "@/app/components/MobileHeader";
import Image from "next/image";
import Link from "next/link";
import client from "../../../../sanity";
import icon1 from "../../../../public/Blogs/icons/1.svg";
import icon2 from "../../../../public/Blogs/icons/2.svg";
import icon3 from "../../../../public/Blogs/icons/3.svg";
import icon4 from "../../../../public/Blogs/icons/4.svg";

const Card = ({ data }) => {
  return (
    <div className={styles.cardContainer}>
      {data?.type === "subheading" && (
        <div className={styles.subHeading}>{data?.content}</div>
      )}
      {data?.type === "content" && (
        <div className={styles.description}>{data?.content}</div>
      )}
      {data?.type === "contentImage" && (
        <div className={styles.imageContainer}>
          <Image
            src={data.contentImageUrl}
            alt={data.type}
            width={550}
            height={350}
          />
        </div>
      )}
    </div>
  );
};

const AllBlogs = ({ data }) => {
  return (
    <Link
      href={`/pages/blog/${data?.slug?.current}`}
      target="_blank"
      onClick={() => console.log(data.slug, "Link clicked:")}
    >
      <div className={styles.allBlogsContainer}>
        <Image src={data?.imageUrl} alt="img" width={300} height={208} />
        <div className={styles.allBlogsContainerTitle}>{data?.subtitle}</div>
      </div>
    </Link>
  );
};

const BlgComponent = ({ singleBlogData }) => {
  const [data, setData] = React.useState(singleBlogData);
  const [allBlogsData, setAllBlogsData] = React.useState(null);

  useEffect(() => {
    client
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
        setAllBlogsData(data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <MobileHeader />
      <div className={styles.bgContainer}>
        <div className={styles.topInnerContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.dateContainer}>
              <span className={styles.location}>{data?.location}</span>
              <div className={styles.dot}></div>
              <span className={styles.date}>
                {new Date(data.publishedAt).toLocaleDateString()}
              </span>
            </div>
            <div className={styles.titleContainer}>{data.title}</div>
            <div className={styles.socialContainer}>
              <span className={styles.share}>Share:</span>
              <Link href="https://wa.me/+971568352250">
                <Image src={icon4} alt="social icons" />
              </Link>
              <Link href="https://www.instagram.com/beaconconsultants">
                <Image src={icon1} alt="social icons" />
              </Link>
              <Link href="https://www.facebook.com/people/Beacon-Management-Consultants/100086432425064/?mibextid=rS40aB7S9Ucbxw6v">
                <Image src={icon2} alt="social icons" />
              </Link>
              <Link href="https://www.linkedin.com/company/beacon-management-consultants/">
                <Image src={icon3} alt="social icons" />
              </Link>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <Image src={data.imageUrl} alt="Image" width={600} height={400} />
          </div>
        </div>
      </div>

      <div className={styles.container2}>
        <div className={styles.container2RightContainer}>
          {data.content?.map((contentData, contentIndex) => (
            <Card key={contentIndex} data={contentData} />
          ))}
        </div>
        <div className={styles.container2LeftContainer}>
          <div className={styles.alsoLike}>You may also like:</div>
          {allBlogsData?.map((contentData, contentIndex) => (
            <AllBlogs key={contentIndex} data={contentData} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlgComponent;
