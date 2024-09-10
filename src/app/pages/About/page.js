"use client";
import styles from "../../Styles/aboutus.module.css";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import WhatsAppChat from "@/app/components/WhatsAppChat";

const Header = dynamic(() => import("@/app/components/Header"));
const MobileHeader = dynamic(() => import("@/app/components/MobileHeader"));
const Stats = dynamic(() => import("@/app/components/Stats"));
const Contact = dynamic(() => import("@/app/components/Contact"));
const Footer = dynamic(() => import("@/app/components/Footer"));

function About() {
  const servicesData = [
    {
      img: "/NewSvgs/SVG7/Group1.svg",
      heading: "Professionalism",
      description:
        "We perform business with high standards of integrity,ethics and professionalism. Our professionals keep the interactions with the clients fair and lawful.",
    },
    {
      img: "/NewSvgs/SVG7/Group2.svg",
      heading: "Innovation",
      description:
        "Our business initiatives focus on keeping up the standards and expectations of the clients with sustainability, innovative practices and strategic principles.",
    },
    {
      img: "/NewSvgs/SVG7/Group3.svg",
      heading: "Synergy",
      description:
        "Our team maintains collaboration and inclusiveness while creating a strong synergy between the individual talents and what the client demands.",
    },
    {
      img: "/NewSvgs/SVG7/Group4.svg",
      heading: "Passion",
      description:
        "Growing beyond a service provider, we provide timely support and resolve concerns through constructive discussions that generate special value outcomes.",
    },
  ];
  const [loaded, setLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const container2Data = [
    {
      img: "/NewSvgs/SVG4/Ggroup1.svg",
      heading: "Right in Time",
      description:
        "With Beacon, you’ll never have to waste time navigating the business process to make it right. We make the business setup in Saudi Arabia and UAE time-efficient and easier than ever.",
    },
    {
      img: "/NewSvgs/SVG4/Ggroup2.svg",
      heading: "Financially Secure",
      description:
        "Setting up a business can prove to be risky if you have no professional financial assistance. Our consultants let you minimise the potential financial risks through financial consultation.",
    },
    {
      img: "/NewSvgs/SVG4/Ggroup3.svg",
      heading: "Reliable Partner",
      description:
        "With our support that guides your business right from the ideation to the final setup, we let our presence lead you through each stage. As your strategic advisor, Beacon stands out to solve your business setup concerns in no time.",
    },
  ];

  const handleImageLoad = () => {
    setLoaded(true);
  };

  const useBackgroundImage = false;
  const imageSrc = isHovered ? "/whiteArrow.svg" : "/blackArrow.svg";


  return (
    <>
      <WhatsAppChat />
      <Header />
      <MobileHeader />
      <div className={styles.aboutUsMainContainer}>
        <h2 className="businessDesc">
          Your Partner to Unleash the Odyssey of <br /> Business Success
        </h2>
        <h2 className={`${styles.mBusinessDesc1} mBusinessDesc`}>
          Your Partner to Unleash the Odyssey of Business Success
        </h2>
        <div className={styles.aboutUsHeroContainer}>
          <div>
            <Image
              quality={100}
              priority={true}
              unoptimized
              src="/AboutUsPage/aboutPage1.webp"
              width={1212}
              height={350}
              layout="responsive"
              alt="aboutus2"
              className={loaded ? styles.aboutHeroImage : styles.hidden}
              onLoad={handleImageLoad}
            />
          </div>
          <p className={styles.hidetext}>
            At Beacon Global, we are a team of dedicated professionals, including accountants, auditors,
            and financial analysts, committed to delivering exceptional business consultancy services.
            Recognizing the growing demand for reliable auditing and accounting services, we have established
            a strong reputation in the industry. Our services go beyond traditional auditing and accounting to encompass
            business consultancy, tax advisory, regulatory compliance, and digital marketing. With a presence across GCC,
            we uphold values of professionalism, integrity, and reliability in all our endeavors. Specializing in business
            incorporation services, we guide our clients through tax, auditing, and regulatory complexities with confidence.
            Our ultimate goal is to provide unmatched service and value, built on enduring partnerships and positive client
            relationships.
          </p>
          <p className={styles.visibletext}>
            At Beacon Global, we are a team of dedicated professionals, including accountants, auditors,
            and financial analysts, committed to delivering exceptional business consultancy services.
            Recognizing the growing demand for reliable auditing and accounting services, we have established
            a strong reputation in the industry. Our services go beyond traditional auditing and accounting to encompass
            business consultancy, tax advisory, regulatory compliance, and digital marketing. With a presence across GCC,
            we uphold values of professionalism, integrity, and reliability in all our endeavors. Specializing in business
            incorporation services, we guide our clients through tax, auditing, and regulatory complexities with confidence.
            Our ultimate goal is to provide unmatched service and value, built on enduring partnerships and positive client
            relationships.
          </p>
          <a href="/pages/Services">
            <div
              className={`hButtonContainer ${styles.servicesButton}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="visibleWrapperContainer">
                <div className={`topVisibleContainer ${styles.btn}`}>

                  Our services&nbsp;&nbsp;
                  <div className="topVisibleArrow">
                    <Image
                      src={imageSrc}
                      width={23}
                      height={23}
                      alt="heroContact"
                      quality={100}
                      priority={true}
                      unoptimized
                    />
                  </div>
                </div>
                <div className={`bottomVisibleContainer ${styles.btn}`}>
                  Our services
                  <div className="bottomVisibleArrow">
                    <Image
                      src={imageSrc}
                      width={23}
                      height={23}
                      alt="heroContact"
                      quality={100}
                      priority={true}
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <Stats useBackgroundImage={useBackgroundImage} isMainPage={false} />

        <div className={styles.aboutUsContainer2}>
          <h2 className="businessDesc">
            Let Beacon Lead Your Dream Business Setup <br /> to The Path Of
            Success!
          </h2>
          <h2 className={`${styles.mBusinessDesc1} mBusinessDesc`}>
            Let Beacon Lead Your Dream Business Setup to The Path Of Success!
          </h2>
          <div className={`${styles.aboutCardMainContainer} cardMainContainer`}>
            {container2Data.map((data, index) => (
              <div className={`${styles.aboutCardContainer} cardContainer`} key={index}>
                <div className={`${styles.imgContainerAbout} imgContainer`}>
                  <Image
                    src={data.img}
                    width={70}
                    height={70}
                    alt="ImageService"
                    quality={100}
                    priority={true}
                    unoptimized
                  />
                </div>
                <div className="servicesHeadingContainer">
                  <h1 className="servicesHeading">{data.heading}</h1>
                </div>
                <div className={`${styles.servicesDescContainer}`}>
                  <p className="servicesDesc">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.aboutUscontainer3}>
          <div className={styles.vissionMissionContent}>
            <div className={styles.mission}>
              <h1>Our Mission</h1>
              <p>
                To evolve into the most trusted partner in business
                incorporation and consulting services, thereby laying a
                benchmark through the reputation from the best-in-market
                business results
              </p>
            </div>
            <div className={styles.vission}>
              <h1>Our Vision</h1>
              <p>
                To future-proof businesses with fruitful collaborations and
                partnerships, which help businesses to multiply their growth
                through the quality and integrity of the services we offer.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.aboutUscontainer4}>
          <h2 className="businessDesc">Core Values</h2>
          <h2 className={`${styles.mBusinessDesc1} mBusinessDesc`}>
            Core Values
          </h2>
          <div className={styles.coreValueCard}>
            {servicesData.map((data, index) => (
              <div className={styles.coreValueCards} key={index}>
                <div className={styles.cvImgContainer}>
                  <Image
                    quality={100}
                    priority={true}
                    unoptimized
                    src={data.img}
                    width={50}
                    height={50}
                    alt="abouts4"
                  />
                </div>
                <div className={styles.cvContent}>
                  <h1>{data.heading}</h1>
                  <p>{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.contactCont}>
          <Contact />
        </div>
        <div className={styles.footerContainer}>
          <Footer />
        </div>
      </div >
    </>
  );
}

export default About;
