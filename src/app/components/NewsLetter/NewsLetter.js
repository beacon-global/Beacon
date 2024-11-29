"use client";
import React, { useState } from "react";
import styles from "./NewsLetter.module.css";
import Image from "next/image";
import icon1 from "../../../../public/newsletter/Icon.png";
import emailjs from "@emailjs/browser";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (email === "") {
      setSubmissionStatus("Please enter a valid email.");
      return;
    }
    setIsLoading(true);

    const templateParams = {
      email: email,
      clickedpopupname: "Newsletter"
    };

    console.log(templateParams, "fdksljksl");

    emailjs
      .send(
        "service_7uemjx7",
        "template_q4oug1a",
        templateParams,
        "csDBhWE6hOKzpnV3K"
      )
      .then(
        (response) => {
          if (response.status === 200) {
            setIsLoading(false);
            setSubmissionStatus("Subscribed successfully.");
          }
          console.log("SUCCESS!", response.status, response.text);

          setEmail("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsLoading(false);
          setSubmissionStatus("Failed to subscribe. Please try again.");
        }
      );
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.rightContainer}>
          <div className={styles.imageContainer}>
            <Image src={icon1} alt="icon" width={80} height={80} />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.title}>Sign Up to Our Newsletters</div>
            <div className={styles.description}>
              Subscribe to our Newsletter & Event right now to stay updated
            </div>
          </div>
        </div>
        <div>
          <div className={styles.leftContainer}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{ transition: "none" }}
              className={styles.input}
              // value={email}
              onChange={handleChange}
            />
            <div className={styles.button} onClick={handleSubmit}>
              {isLoading
                ? "Loading..."
                : submissionStatus === "Subscribed successfully."
                  ? "Subscribed"
                  : "Subscribe"}
            </div>
          </div>
          {submissionStatus && (
            <div className={styles.statusMessage} style={{ color: "#fff" }}>
              {submissionStatus}
            </div>
          )}
        </div>
      </div>

      <hr className={styles.hrLine} />
    </>
  );
};

export default NewsLetter;
