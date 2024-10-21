"use client";
import React, { useState } from "react";
import styles from "../../Styles/contact.module.css";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import emailjsConfig from "../../../../emailjs.config";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/app/components/Header"));
const MobileHeader = dynamic(() => import("@/app/components/MobileHeader"));
const Footer = dynamic(() => import("@/app/components/Footer"));

function Contact() {
  const [isHovered, setIsHovered] = useState(false);

  const [activeCard, setActiveCard] = useState("ksa");

  const toggleCard = (buttonName) => {
    setActiveCard(buttonName);
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

    emailjs
      .sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        e.target,
        emailjsConfig.userId
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Email could not be sent:", error);
      });
  };

  return (
    <>
      <Header />
      <MobileHeader />
      <div className={styles.contactUsContainer}>
        <h2 className="businessDesc">Get In Touch With Us!</h2>
        <h2 className={`${styles.mBusinessDesc1} mBusinessDesc`}>
          Get In Touch With Us!
        </h2>
        <div className={styles.container1}>
          <div className={styles.loctaionButtonContainer}>
            <button
              className={`${styles.ksa} ${
                activeCard === "ksa" && styles.btnActive
              }`}
              onClick={() => toggleCard("ksa")}
            >
              Saudi Arabia
            </button>
            <button
              className={`${styles.ksa} ${
                activeCard === "uae" && styles.btnActive
              }`}
              onClick={() => toggleCard("uae")}
            >
              UAE
            </button>
            <button
              className={`${styles.ksa} ${
                activeCard === "bahrain" && styles.btnActive
              }`}
              onClick={() => toggleCard("bahrain")}
            >
              Bahrain
            </button>
            <button
              className={`${styles.ksa} ${
                activeCard === "qatar" && styles.btnActive
              }`}
              onClick={() => toggleCard("qatar")}
            >
              Qatar
            </button>
          </div>

          {activeCard === "ksa" && (
            <div className={styles.contactMainCard}>
              <div className={styles.contactCard}>
                <a href="https://maps.app.goo.gl/UzvX5K7o9c3Cepmx9">
                  <div className={styles.contactImgContainer}>
                    <Image
                      src="/NewSvgs/SVG2/Group7.svg"
                      width={72}
                      height={72}
                      alt="contactLocactionIcon"
                    />
                  </div>
                  <div className={styles.contactCardContents}>
                    <h1 className={`${styles.jeddah} servicesHeading`}>
                      JEDDAH
                    </h1>
                    <p className={styles.cardDesc}>
                      Building no. 4626, 501, 5th Floor, Hamza Shehatah St.
                      Al-Baghdadiyah Al-Gharbiyah Jeddah 22235
                    </p>
                  </div>
                </a>
                <div className={styles.numberContainer}>
                  <a href="tel:966 570 807 175">
                    + 966 570 807 175
                    <br /> + 966 539 067 414
                    <br /> + 966 531 170 957
                  </a>
                </div>
              </div>

              <div className={styles.contactCard}>
                <a href="https://maps.app.goo.gl/Vk3noguNHKx7GrMD8">
                  <div className={styles.contactImgContainer}>
                    <Image
                      src="/NewSvgs/SVG2/Group7.svg"
                      width={72}
                      height={72}
                      alt="contactLocactionIcon"
                    />
                  </div>
                  <div className={styles.contactCardContents}>
                    <h1 className={`${styles.jeddah} servicesHeading`}>
                      DAMMAM
                    </h1>
                    <p className={styles.cardDesc}>
                      Building no. 7447, B31, 3rd Floor, Al-Thasih St.
                      Al-Amamrah, 8th street Dammam <br />
                      32415
                    </p>
                  </div>
                </a>
                <div className={styles.numberContainer}>
                  <a href="tel:966 566 416 774">
                    + 966 566 416 774
                    <br /> + 966 539 067 414
                    <br /> + 966 531 170 957
                  </a>
                </div>
              </div>

              <div className={styles.contactCard}>
                <a href="https://maps.app.goo.gl/vWfGvAjAcHxV9AUT9">
                  <div className={styles.contactImgContainer}>
                    <Image
                      src="/NewSvgs/SVG2/Group7.svg"
                      width={72}
                      height={72}
                      alt="contactLocactionIcon"
                    />
                  </div>
                  <div className={styles.contactCardContents}>
                    <h1 className={`${styles.jeddah} servicesHeading`}>
                      Riyadh
                    </h1>
                    <p className={styles.cardDesc}>
                      Le Cygne Commercial Center 2, 6th FloorAl-Arz,
                      Al-Olaya,Riyadh <br /> 12611
                    </p>
                  </div>
                </a>
                <div className={styles.numberContainer}>
                  <a href="tel:966 540 599 655">
                    + 966 540 599 655
                    <br /> + 966 539 067 414
                    <br /> + 966 531 170 957
                  </a>
                </div>
              </div>

              <div className={styles.contactCard}>
                <a href="https://maps.app.goo.gl/UzvX5K7o9c3Cepmx9">
                  <div className={styles.contactImgContainer}>
                    <Image
                      src="/NewSvgs/SVG2/Group7.svg"
                      width={72}
                      height={72}
                      alt="contactLocactionIcon"
                    />
                  </div>
                  <div className={styles.contactCardContents}>
                    <h1 className={`${styles.jeddah} servicesHeading`}>
                      Jazan
                    </h1>
                    <p className={styles.cardDesc}>
                      Room No: 05, 4th Floor Makhtha 6, Prince Muhammed bin
                      Abdulaziz St. Ash Shati District. Jazan 82812
                    </p>
                  </div>
                </a>

                <div className={styles.numberContainer}>
                  <a href="tel:966 570 807 175">
                    + 966 563144588
                    <br /> + 966 539 067 414
                    <br /> + 966 531 170 957
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeCard === "uae" && (
            <div className={styles.contactMainCard}>
              <div className={`${styles.contactCard} ${styles.contactCardUAE}`}>
                <a href="https://maps.app.goo.gl/xt6jVWFhQ3srs2ua8">
                  <div className={styles.contactImgContainer}>
                    <Image
                      src="/NewSvgs/SVG2/Group7.svg"
                      width={72}
                      height={72}
                      alt="contactLocactionIcon"
                    />
                  </div>
                  <div className={styles.contactCardContents}>
                    <h1 className={`${styles.jeddah} servicesHeading`}>
                      DUBAI
                    </h1>
                    <p className={styles.cardDesc}>
                      Office #39, 7th Floor, Dubai National Insurance Building.
                      Port Saeed Deira, Dubai, UAE
                    </p>
                  </div>
                </a>
                <div className={styles.numberContainer}>
                  <a href="tel:971 568 352 250">
                    + 971 568 352 250
                    <br />+ 971 502 574 396
                    <br /> + 971 488 324 58
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeCard === "bahrain" && (
            <div className={styles.contactMainCard}>
              <div className={`${styles.contactCard} ${styles.contactCardUAE}`}>
                <a href="https://maps.app.goo.gl/vTsbDFuitEtWHyJJA">
                  <div className={styles.contactImgContainer}>
                    <Image
                      src="/NewSvgs/SVG2/Group7.svg"
                      width={72}
                      height={72}
                      alt="contactLocactionIcon"
                    />
                  </div>
                  <div className={styles.contactCardContents}>
                    <h1 className={`${styles.jeddah} servicesHeading`}>
                      Bahrain
                    </h1>
                    <p className={styles.cardDesc}>
                      Office 132, RA 58 Tower. Manama Diplomatic Area, Bahrain
                    </p>
                  </div>
                </a>
                <div className={styles.numberContainer}>
                  <a href="tel:973 3312 9709">
                    +973 3312 9709
                    <br />+ 971 502 574 396
                    <br /> + 971 488 324 58
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeCard === "qatar" && (
            <div className={styles.contactMainCard}>
              <div className={`${styles.contactCard} ${styles.contactCardUAE}`}>
                <a href="https://maps.app.goo.gl/eCZTsSBdDDgq64iD8">
                  <div className={styles.contactImgContainer}>
                    <Image
                      src="/NewSvgs/SVG2/Group7.svg"
                      width={72}
                      height={72}
                      alt="contactLocactionIcon"
                    />
                  </div>
                  <div className={styles.contactCardContents}>
                    <h1 className={`${styles.jeddah} servicesHeading`}>
                      Qatar
                    </h1>
                    <p className={styles.cardDesc}>
                      Street 820 Emrair Street, 8 Corniche, Doha, Qatar
                    </p>
                  </div>
                </a>
                <div className={styles.numberContainer}>
                  <a href="tel:974 7744 9644">
                    +974 7744 9644
                    <br />+ 971 502 574 396
                    <br /> + 971 488 324 58
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={styles.container2}>
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Full name *</label>
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
              <label htmlFor="email">Your email *</label>
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
                placeholder="How can we help"
              />
            </div>
            <div className={styles.textBox}>
              <label htmlFor="message">How May We Assist You?</label>
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
              {/* <button type="submit">Send Message</button> */}
            </div>
            <div className="ml-auto">
              <button
                type="submit"
                className="bg-[#13670B] ml-auto py-3 md:py-5 px-6 md:px-14 rounded-full "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="flex !w-full flex-col relative overflow-hidden text-sm md:text-lg font-medium">
                  <div className={`flex !w-full flex-row `}>
                    <p
                      className={`text-white  ease-in-out duration-300 ${
                        isHovered && "-translate-y-[150%]"
                      } `}
                    >
                      Send Message
                    </p>
                  </div>
                  <div className="flex flex-row !w-full absolute bottom-0">
                    <p
                      className={`text-white ease-in-out duration-300 ${
                        isHovered ? "-translate-y-0" : "translate-y-[150%] "
                      } `}
                    >
                      Send Message
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </form>
        </div>
        <div className={styles.footerContainer}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Contact;
