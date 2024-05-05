"use client";
import React, { useEffect, useState } from "react";
import styles from "../../Styles/blogs.module.css";
import Image from "next/image";
import Header from "@/app/components/Header";
import MobileHeader from "@/app/components/MobileHeader";
import { urlFor } from "../../../../test";
import Blogs from "@/app/components/Blogs";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import PersonalBlog from "@/app/components/PersonalBlog";

const Page = () => {
  const [dataArray, setDataArray] = useState([]);
  const [dfor, setDfor] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const searchData = searchParams.get("search");
    const parsedData = searchData ? JSON.parse(searchData) : [];
    console.log(parsedData, "DataArray");
    setDataArray(parsedData);
    console.log(dataArray, "Link clickeddddd");

    setDfor(true);
  }, []);

  useEffect(() => {
    console.log(dataArray, "Link clickeddddd");
  }, [dataArray]);

  if (dfor) {
    return (
      <>
        <Header />
        <MobileHeader />
        {dataArray &&
          <div className={styles.mainContainer}>
            <h2
              className={`${styles.blog} blogBusinessDesc`}
              style={{ display: "block" }}
            >
              {dataArray.title}
            </h2>
            <div className={styles.locationDateContainer}>
              {dataArray.location}
              <div className={styles.dot}></div>
              {dataArray.date}
            </div>
            <div className={styles.content}>
              {
                dataArray.titleImage &&
                <Image
                  className=""
                  src={dataArray.titleImage && urlFor(dataArray.titleImage).url()}
                  alt={dataArray.title}
                  width={0}
                  height={600}
                  layout="responsive"
                  quality={100}
                  priority={true}
                  unoptimized
                />
              }

              <div className={styles.description}>
                <p>{dataArray.description}</p>
              </div>
            </div>
          </div>
        }
        <div className="forContactFromBlog">
          <PersonalBlog blogPage={dataArray.length > 0 ? true : false} />
        </div>
        <div className="forContactFromBlog">
          <Contact />
        </div>
        <div className="forFooterFromBlog">
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <MobileHeader />
      <div className={styles.mainContainer}>
        <h2 className="businessDesc">Loading...</h2>
      </div>
    </>
  );
};

export default Page;
