import React, { useState } from "react";
import styles from "./ebook.module.css";
import img1 from "../../../../public/ebook/1.png";
import icon1 from "../../../../public/ebook/icon.svg";
import Image from "next/image";
import Popup from "../Popup";

const EbookBanner = () => {
  const [showPopup, setShowPopup] = useState(false);
  const openShowPopup = () => {
    setShowPopup(true);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <Image src={img1} alt="ebook" width={300} height={400} />
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.title}>
            Business Setup Guide for Saudi Arabia
          </div>
          <div className={styles.description}>
            Everything you need to know about setting up a business in Saudi
            Arabia can be found in our detailed guide for 2024. Our expert
            insights help you to navigate regulatory requirements easily and
            create a systematic plan for business formation.
          </div>
          <button
            class={styles.circulatingBorderButton}
            onClick={openShowPopup}
          >
            ACCESS THE GUIDE{" "}
            <Image src={icon1} alt="icon" width={23} height={23} />
          </button>
        </div>
      </div>
      {showPopup && (
        <Popup
          setShowPopup={setShowPopup}
          heading="Download Ebook"
          page="ebook"
        />
      )}
    </>
  );
};

export default EbookBanner;
