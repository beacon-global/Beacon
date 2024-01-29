// Import necessary modules and components
import React from "react";
import styles from "../../../Styles/blogs.module.css";
import Image from "next/image";
import Header from "@/app/components/Header";
import MobileHeader from "@/app/components/MobileHeader";
import fetchDataAndExport, { urlFor } from "../../../../../test";
import { useSearchParams } from "next/navigation";
import Blogs from "@/app/components/Blogs";

// Define the page component
const Page = ({ params }) => {
  console.log(params)
  console.log("hiiiii")
  // const searchParams = useSearchParams();
  // const searchData = searchParams.get("search");
  // const dataArray = searchData ? JSON.parse(searchData) : [];
  // console.log(dataArray, "DataArray")
  // if (dataArray.length > 0) {
  //   const firstObject = dataArray[0];

  // Check if params is not empty
  if (params) {
    return (
      <>
        <Header />
        <MobileHeader />
        <div className={styles.mainContainer}>
          <h2 className="businessDesc">{params.title}</h2>
          <div className={styles.locationDateContainer}>
            {params.location}
            <div className={styles.dot}></div>
            {params.date}
          </div>
          <div className={styles.content}>
            <Image
              className=""
              src={urlFor(params.titleImage).url()}
              alt={params.title}
              width={0}
              height={600}
              layout="responsive"
              quality={100}
              priority={true}
              unoptimized
            />

            <div className={styles.description}>
              <p>{params.description}</p>
            </div>
          </div>
        </div>
        {/* <Blogs blogDatas={dataArray} /> */}
      </>
    );
  }

  // If params is empty, you can return some default content or handle it accordingly
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

// Add the required generateStaticParams function
export async function generateStaticParams() {
  try {
    // Fetch the blog data
    const blogData = await fetchDataAndExport();

    console.log("Fetched blog data:", blogData);

    // Generate paths based on blog slugs
    const paths = blogData.map((blog) => {
      const param = {
        params: {
          slug: blog.currentSlug,
        },
      };

      console.log("Generated path:", param);

      return param;
    });

    return paths;
  } catch (error) {
    console.error("Error fetching data for static paths:", error.message);
    // Handle the error or return an empty array if needed
    return [];
  }
}

// Export the page component
export default Page;
