"use client";
import React, { useState } from "react";
import styles from "../../Styles/contact.module.css";
import Header from "@/app/components/Header";
import MobileHeader from "@/app/components/MobileHeader";
import Image from "next/image";
import Footer from "@/app/components/Footer";

function Contact() {
  const [showUAECard, setShowUAECard] = useState(false);

  const toggleUAECard = (buttonName) => {
    if (
      (buttonName === "uae" && !showUAECard) ||
      (buttonName === "ksa" && showUAECard)
    ) {
      // Only toggle the card if the clicked button's state is different
      setShowUAECard(!showUAECard);
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <Header />
      <MobileHeader />
      <div className={styles.contactUsContainer}>
        <h2 className="businessDesc">Get In Touch With Us!</h2>
        <div className={styles.container1}>
          <div className={styles.loctaionButtonContainer}>
            <button
              className={`${styles.ksa} ${!showUAECard && styles.btnActive}`}
              onClick={() => toggleUAECard("ksa")}
            >
              Saudi arabia
            </button>
            <button
              className={`${styles.uae} ${showUAECard && styles.btnActive}`}
              onClick={() => toggleUAECard("uae")}
            >
              United Arab Emirates
            </button>
          </div>

          {showUAECard ? (
            <div className={styles.contactMainCard}>
              <div className={`${styles.contactCard} ${styles.contactCardUAE}`}>
                <div className={styles.contactImgContainer}>
                  <Image
                    src="/contactPage/contactIcon.svg"
                    width={80}
                    height={80}
                    alt="contactLocactionIcon"
                  />
                </div>
                <div className={styles.contactCardContents}>
                  <h1 className={`${styles.jeddah} servicesHeading`}>UAE</h1>
                  <p className={styles.cardDesc}>
                    Building no. 4626, 501, 5th Floor, Hamza Shehatah St.
                    Al-Baghdadiyah Al-Gharbiyah Jeddah 22235
                  </p>
                </div>
                <div className={styles.numberContainer}>
                  <p>
                    + 966 566 416 774
                    <br /> + 966 539 067 414
                    <br /> + 966 531 170 957
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.contactMainCard}>
              <div className={styles.contactCard}>
                <div className={styles.contactImgContainer}>
                  <Image
                    src="/contactPage/contactIcon.svg"
                    width={80}
                    height={80}
                    alt="contactLocactionIcon"
                  />
                </div>
                <div className={styles.contactCardContents}>
                  <h1 className={`${styles.jeddah} servicesHeading`}>JEDDAH</h1>
                  <p className={styles.cardDesc}>
                    Building no. 4626, 501, 5th Floor, Hamza Shehatah St.
                    Al-Baghdadiyah Al-Gharbiyah Jeddah 22235
                  </p>
                </div>
                <div className={styles.numberContainer}>
                  <p>
                    + 966 566 416 774
                    <br /> + 966 539 067 414
                    <br /> + 966 531 170 957
                  </p>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.contactImgContainer}>
                  <Image
                    src="/contactPage/contactIcon.svg"
                    width={80}
                    height={80}
                    alt="contactLocactionIcon"
                  />
                </div>
                <div className={styles.contactCardContents}>
                  <h1 className={`${styles.jeddah} servicesHeading`}>JEDDAH</h1>
                  <p className={styles.cardDesc}>
                    Building no. 4626, 501, 5th Floor, Hamza Shehatah St.
                    Al-Baghdadiyah Al-Gharbiyah Jeddah 22235
                  </p>
                </div>
                <div className={styles.numberContainer}>
                  <p>
                    + 966 566 416 774
                    <br /> + 966 539 067 414
                    <br /> + 966 531 170 957
                  </p>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.contactImgContainer}>
                  <Image
                    src="/contactPage/contactIcon.svg"
                    width={80}
                    height={80}
                    alt="contactLocactionIcon"
                  />
                </div>
                <div className={styles.contactCardContents}>
                  <h1 className={`${styles.jeddah} servicesHeading`}>JEDDAH</h1>
                  <p className={styles.cardDesc}>
                    Building no. 4626, 501, 5th Floor, Hamza Shehatah St.
                    Al-Baghdadiyah Al-Gharbiyah Jeddah 22235
                  </p>
                </div>
                <div className={styles.numberContainer}>
                  <p>
                    + 966 566 416 774
                    <br /> + 966 539 067 414
                    <br /> + 966 531 170 957
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={styles.container2}>
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John David"
              />
            </div>
            <div>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@yourmail.com"
              />
            </div>
            <div>
              <label htmlFor="phone">Phone *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="your number here"
              />
            </div>
            <div>
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can we Help"
              />
            </div>
            <div className={styles.textBox}>
              <label htmlFor="message">We can help you?</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <div className={styles.formSubmit}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Contact;
