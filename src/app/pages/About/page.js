"use client";
import styles from "../../Styles/aboutus.module.css";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

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

  return (
    <>
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
          <p>
            Founded in 2022, Beacon Global comprises a team of passionate
            accountants, auditors, and financial analysts. With a complete
            understanding of the need for a reliable auditing and accounting
            firm that offers excellent services to clients, we deliver the
            leading business consulting services in Saudi Arabia. Right from its
            inception, our team of consultants has been adept at building a good
            industry reputation with remarkable services to the clients. With
            the growth of the goodwill of the firm, we have extended the roots
            to business consultancy, tax advisory, accounting, audit and
            regulatory services, and digital marketing, with offices across UAE,
            India, and KSA. We are committed to offering business incorporation
            services to clients with an emphasis on the principles of
            professionalism, integrity, and reliability. We are grateful for the
            recognition gifted by the clients who helped us navigate the
            complexities of tax, auditing, and regulatory compliance. Our team
            is dedicated to delivering unparalleled service and value to
            businesses with strong support of partners, clients, and other
            stakeholders through constructive relationships.
          </p>
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
          <div className={styles.vissionMissionMainContainer}>
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
      </div>
    </>
  );
}

export default About;
