"use client";
import React, { useEffect, useState } from "react";
import styles from "../../Styles/blogs.module.css";
import Image from "next/image";
import Header from "@/app/components/Header";
import MobileHeader from "@/app/components/MobileHeader";
import fetchDataAndExport, { urlFor } from "../../../../test";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import PersonalBlog from "@/app/components/PersonalBlog";


const SanityComponent = ({ textData }) => {

  return (
    <div>
      {textData.style === 'h2' &&
        <>
          {textData.children.map((data, index) => (
            <h2
              className={styles.blogsh2}
              style={{ display: "block" }}
              key={index}>
              {data.text}
            </h2>
          ))
          }
        </>
      }
      {textData.style === 'h4' &&
        <>
          {textData.children.map((data, index) => (
            <h4
              className={styles.blogsh4}
              style={{ display: "block" }}
              key={index}>
              {data.text}
            </h4>
          ))}
        </>
      }
      {textData.style === 'h5' &&
        <>
          {textData.children.map((data, index) => (
            <h5
              className={styles.blogsh5}
              style={{ display: "block" }}
              key={index}>
              {data.text}
            </h5>
          ))}
        </>
      }
      {textData.style === 'h6' &&
        <>
          {textData.children.map((data, index) => (
            <h6
              className={styles.blogsh6}
              style={{ display: "block" }}
              key={index}>
              {data.text}
            </h6>
          ))}
        </>
      }
      {textData.style === 'normal' && (textData.listItem === 'bullet' ? (
        <>
            {textData.children.map((data, index) => (
              <div
                className={styles.blogsli}
                style={{ display: "block" }}
                key={index}>
                {data.text}
              </div>
            ))}
        </>
      ) : (
        <>
          {textData.children.map((data, index) => (
            <p
              className={styles.blogsp}
              style={{ display: "block" }}
              key={index}>
              {data.text}
            </p>
          ))}
        </>
      ))}
      {textData.children.length === 1 && (textData.children[0].text === '\n' || textData.children[0].text === "")&&
        <br />
      }
    </div>
  );
}

const Page = () => {
  const [dataArray, setDataArray] = useState([]);
  const [dfor, setDfor] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const searchData = searchParams.get("search");
    async function fetchData() {
      try {
        if (searchData === null || searchData === undefined) {
          return;
        }
        const data = await fetchDataAndExport(searchData);
        setDataArray(data[0]);
      } catch (error) {
        console.error("Error in component:", error.message);
      }
    }

    fetchData();

    setDfor(true);
  }, []);


  console.log(dataArray, "Link clickeddddd")

  if (dfor) {
    return (
      <>
        <Header />
        <MobileHeader />
        {
          (dataArray !== undefined && dataArray !== null && dataArray?.length !== 0) &&
          <div className={styles.mainContainer}>
            <h2
              className={`${styles.blog} blogBusinessDesc`}
              style={{ display: "block" }}
            >
              {dataArray.title}
            </h2>
            <div className={styles.locationDateContainer}>
              {dataArray.location}
              {/* <div className={styles.dot}></div>
              {dataArray.date} */}
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
            </div>
            {dataArray.description.map((data, index) => (
              <SanityComponent key={index} textData={data} />
            ))}
          </div>
        }
        <div className={`forContactFromBlog ${dataArray?.length === 0 && styles.blogtopmargin}`}>
          <PersonalBlog blogPage={dataArray?.titleImage ? true : false} isInnerPage={true}/>
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
