import React from "react";
import styles from "./NewsLetter.module.css";
import Image from "next/image";
import icon1 from "../../../../public/newsletter/icon.png";

const NewsLetter = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.rightContainer}>
          <div className={styles.imageContainer}>
            <Image src={icon1} alt="icon" width={80} height={80} />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.title}>Sign Upto Our Newsletters</div>
            <div className={styles.description}>
              Subscribe to our Newsletter & Event right now to updated
            </div>
          </div>
        </div>
        <div className={styles.leftContainer}>
          <input
            type="email"
            placeholder="Enter your email"
            style={{ transition: "none" }}
            className={styles.input}
          />
          <div className={styles.button}>Subscribe</div>
        </div>
      </div>
      <hr className={styles.hrLine} />
    </>
  );
};

export default NewsLetter;
