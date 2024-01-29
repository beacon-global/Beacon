"use client"
import React, { useEffect, useState } from "react";
import styles from "../../Styles/blogs.module.css";
import Image from "next/image";
import Header from "@/app/components/Header";
import MobileHeader from "@/app/components/MobileHeader";
import { urlFor } from "../../../../test";
import Blogs from "@/app/components/Blogs";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

// Define the page component
const Page = () => {
  // Use state to manage the query parameters
  const [dataArray, setDataArray] = useState([]);
  const [dfor, setDfor] = useState(false);

  // Use useEffect to fetch and update data on the client side
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const searchData = searchParams.get("search");
    const parsedData = searchData ? JSON.parse(searchData) : [];
    console.log(parsedData, "DataArray");
    setDataArray(parsedData);
    setDfor(true)
  }, []);

  const firstObject = dataArray;

  if (dfor) {
    return (
      <>
        <Header />
        <MobileHeader />
        <div className={styles.mainContainer}>
          <h2 className="businessDesc">{firstObject.title}</h2>
          <div className={styles.locationDateContainer}>
            {firstObject.location}
            <div className={styles.dot}></div>
            {firstObject.date}
          </div>
          <div className={styles.content}>
            <Image
              className=""
              src={urlFor(firstObject.titleImage).url()}
              alt={firstObject.title}
              width={0}
              height={600}
              layout="responsive"
              quality={100}
              priority={true}
              unoptimized
            />

            <div className={styles.description}>
              <p>{firstObject.description}</p>
            </div>
          </div>
        </div>
        <Blogs blogPage={true} />
        <div className="forContactFromBlog">
          <Contact />
        </div>
        <div className="forFooterFromBlog">
          <Footer />
        </div>
      </>
    );
  }

  // If dataArray is empty, you can return some default content or handle it accordingly
  return (
    <>
      <Header />
      <MobileHeader />
      <div className={styles.mainContainer}>
        <h2 className="businessDesc">No data available</h2>
      </div>
    </>
  );
};

// Export the page component
export default Page;
