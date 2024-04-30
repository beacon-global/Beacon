"use client";
import React, { useState } from "react";
import styles from "../../Styles/careers.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";

const Header = dynamic(() => import("@/app/components/Header"));
const MobileHeader = dynamic(() => import("@/app/components/MobileHeader"));
const Footer = dynamic(() => import("@/app/components/Footer"));
const Contact = dynamic(() => import("@/app/components/Contact"));

const data = [{
  title: "global perspective",
  desc: "Roofing whenan unknown printer took a galley of type and scrambled it to make a type specimen book  has Roofing whenan .",
},
{
  title: "challenge everything",
  desc: "Roofing whenan unknown printer took a galley of type and scrambled it to make a type specimen book  has Roofing whenan .",
},
{
  title: "dedicated teams",
  desc: "Roofing whenan unknown printer took a galley of type and scrambled it to make a type specimen book  has Roofing whenan .",
}]

const data2 = [{
  title: "Growth Opportunities",
  desc: "Lorem Ipsum is simply dummy text of the printiones and futuresion future typesetting to industryhas been the industry's .",
  icon: "/Careers/icon1.svg"
},
{
  title: "Competitive Remuneration",
  desc: "Lorem Ipsum is simply dummy text of the printiones and futuresion future typesetting to industryhas been the industry's .",
  icon: "/Careers/icon2.svg"
},
{
  title: "Eco-friendly Workplace",
  desc: "Lorem Ipsum is simply dummy text of the printiones and futuresion future typesetting to industryhas been the industry's .",
  icon: "/Careers/icon3.svg"
},
{
  title: "health insurance",
  desc: "Lorem Ipsum is simply dummy text of the printiones and futuresion future typesetting to industryhas been the industry's .",
  icon: "/Careers/icon4.svg"
},
{
  title: "no forced clock-ins",
  desc: "Lorem Ipsum is simply dummy text of the printiones and futuresion future typesetting to industryhas been the industry's .",
  icon: "/Careers/icon5.svg"
},
{
  title: "remote-friendly",
  desc: "Lorem Ipsum is simply dummy text of the printiones and futuresion future typesetting to industryhas been the industry's .",
  icon: "/Careers/icon6.svg"
}]


function Careers() {

  const [loaded, setLoaded] = useState(false);
  const [faqData, setFaqData] = useState([
    {
      img: "01",
      heading: "Trainee Software Engineer",
      desc: ["Full Time", "Doaha"],
      description:
        "Beacon is your global business advisory partner who offers you a range of services that enable your business growth and ultimate business transformation. We provide a plethora of services like Business Incorporation, Digital Marketing, Technology, Finance and Accounting, Audit & Taxation and Business Consulting services.",
      details:
        ["You will be responsible for the upstream process of system development.",
          "You will conduct interviews with clients, provide technical proposals, plan, design, communicate with engineers, and manage projects.",
          "1. Upstream processes such as requirements hearing, requirements definition, and basic design during communication with clients",
          "2. Management of a series of phases in software development projects from requirements definition, basic design, detailed design, development, testing, and release",
          "3. Project Progress reporting, resource management4. Communication with engineering team"],
      isAnswerVisible: true,
    },
    {
      img: "02",
      heading:
        "Business Development Manager",
      desc: ["Full Time", "Doaha"],
      description:
        "With significant expertise and a team with strong professional know-how, Beacon takes on projects with 100% confidence and a perfect blueprint of how to accomplish the business objectives. Through clear delivery models and customer-centric approaches, our efforts consider the business’s expectations with adherence to the global standards that make us stand out from the crowd.",
      details:
        ["You will be responsible for the upstream process of system development.",
          "You will conduct interviews with clients, provide technical proposals, plan, design, communicate with engineers, and manage projects.",
          "1. Upstream processes such as requirements hearing, requirements definition, and basic design during communication with clients",
          "2. Management of a series of phases in software development projects from requirements definition, basic design, detailed design, development, testing, and release",
          "3. Project Progress reporting, resource management4. Communication with engineering team"],
    },
    {
      img: "03",
      heading:
        "SR. Business Development Executive",
      desc: ["Full Time", "Doaha"],
      description:
        "At Beacon, we make a precise understanding of the key areas where businesses can grow, thrive and create difference. We identify the major goals and issues that cater well to the organization and ensure alignment between the organization’s missions and plans. We also implement fine-tuning strategies to make an understanding and address existing barriers.",
      details:
        ["You will be responsible for the upstream process of system development.",
          "You will conduct interviews with clients, provide technical proposals, plan, design, communicate with engineers, and manage projects.",
          "1. Upstream processes such as requirements hearing, requirements definition, and basic design during communication with clients",
          "2. Management of a series of phases in software development projects from requirements definition, basic design, detailed design, development, testing, and release",
          "3. Project Progress reporting, resource management4. Communication with engineering team"],
    },
    {
      img: "04",
      heading:
        "Digital Marketing Executive",
      desc: ["Full Time", "Doaha"],
      description:
        "Yes. Beacon can help you with your needs of financial auditing and reporting. With a holistic approach toward scrutinizing the financial statements of the company and filing necessary regulations, we ensure the financial well-being of your business. Our financial reporting services help to report the income statements with summarized revenue and expenses for a complete analysis of the company’s financial status.",
      details:
        ["You will be responsible for the upstream process of system development.",
          "You will conduct interviews with clients, provide technical proposals, plan, design, communicate with engineers, and manage projects.",
          "1. Upstream processes such as requirements hearing, requirements definition, and basic design during communication with clients",
          "2. Management of a series of phases in software development projects from requirements definition, basic design, detailed design, development, testing, and release",
          "3. Project Progress reporting, resource management4. Communication with engineering team"],
    },
    {
      img: "05",
      heading: "Data Researcher Executive",
      desc: ["Full Time", "Doaha"],
      description:
        "Beacon can assist you with digital marketing and help you take your online presence to the next level. With digital marketing, we let you connect with the prospective and existing client base which is essential to improve the brand awareness and your business.",
      details:
        ["You will be responsible for the upstream process of system development.",
          "You will conduct interviews with clients, provide technical proposals, plan, design, communicate with engineers, and manage projects.",
          "1. Upstream processes such as requirements hearing, requirements definition, and basic design during communication with clients",
          "2. Management of a series of phases in software development projects from requirements definition, basic design, detailed design, development, testing, and release",
          "3. Project Progress reporting, resource management4. Communication with engineering team"],
    },
  ]);

  const toggleAnswerVisibility = (index) => {
    const updatedFaqData = faqData.map((item, i) => ({
      ...item,
      isAnswerVisible: i === index ? !item.isAnswerVisible : false,
    }));

    setFaqData(updatedFaqData);
  };

  const handleImageLoad = () => {
    setLoaded(true);
  };



  return (
    <>
      <Header />
      <MobileHeader />
      <div className={styles.contactUsContainer}>
        <div className={styles.Imagecontainer}>
          <h2 className="businessDesc">Come join our awesome team!</h2>
          <h2 className={styles.mbusinessDesc}>Come join our awesome team!</h2>
          <p className={styles.subHeading}>Be a part of a dynamic group of passionate researchers,
            designers and developers who love creating exceptional user experiences for digital products.
          </p>
          <div>
            <Image
              quality={100}
              priority={true}
              unoptimized
              src="/Careers/HeroImage.png"
              width={1212}
              height={350}
              layout="responsive"
              alt="aboutus2"
              className={loaded ? styles.aboutHeroImage : styles.hidden}
              onLoad={handleImageLoad}
            />
          </div>
        </div>
        <div className={styles.faqMainContainer}>
          <h2 className="businessDesc">our current open positions</h2>
          <div className={styles.faqContentMainContainer}>
            {faqData.map((data, index) => (
              <div
                className={styles.faqRight}
                key={index}
                onClick={() => toggleAnswerVisibility(index)}
              >
                <div className={styles.faqContentContainer}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                    className={styles.faqQuestionContainer}
                  >
                    <div className={styles.faqQuestion}>
                      <h1>{data.heading}</h1>
                    </div>
                    <div className={styles.faqdesc2}>
                      {
                        data.desc.map((item, index) => (
                          <div className={styles.button}>
                            <p key={index}>{item}</p>
                          </div>
                        ))
                      }
                    </div>
                    <div
                      className={`${styles.faqAddIcon} ${data.isAnswerVisible ? styles.rotateIcon : ""
                        }`}
                    >
                      <button>
                        <Image
                          src="/+.svg"
                          width={16}
                          height={16}
                          alt="ImageFaq"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    className={`${styles.faqDesc} ${data.isAnswerVisible ? styles.open : ""}`}
                  >
                    <p className={styles.faqHeading}>Job details</p>
                    {
                      data.details.map((item, index) => (
                        <p key={index}>{item}</p>
                      ))
                    }
                    <p className={styles.faqHeading}>Qualification Requirements</p>
                    <p className={styles.faqHeading}>The person you are looking for</p>
                    <p className={styles.faqHeading}>Employment status</p>
                    <p className={styles.faqHeading}>Work location</p>
                    <p className={styles.faqHeading}>Working hours</p>
                    <p className={styles.faqHeading}>Holidays/Vacation</p>
                    <p className={styles.faqHeading}>Salary</p>
                    <p className={styles.faqHeading}>Selection process</p>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.servicesPageContainer2}>
          <div className={styles.servicePageImageContainer2}>
            {!loaded && (
              <div className="loader">
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__ball"></div>
              </div>
            )}
            <Image
              src="/Careers/ValueImage.png"
              width={576}
              height={540}
              layout="responsive"
              alt="serviceImg1"
              quality={100}
              priority={true}
              unoptimized
              style={{ display: loaded ? "block" : "none" }}
              onLoad={handleImageLoad}
            />
          </div>
          <div className={styles.container2Contents}>
            <h1 className="businessDesc">
              The Values We Live By
            </h1>
            <h1 className={`${styles.servicePagecontainer2MobileHeading}`}>
              The Values We Live By
            </h1>
            <div className={styles.container2}>
              {data.map((item, index) => (
                <div key={index} className={styles.container2Card}>
                  <h2 className={styles.title}>{item.title}</h2>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
        <div className={styles.CareersContainer}>
          <h2 className="businessDesc">easier life with Beacon</h2>
          <div className={styles.CardContainer}>
            {data2.map((item, index) => (
              <div key={index} className={styles.CareersCard}>
                <div className={styles.iconContainer}>
                  <Image
                    src={item.icon}
                    width={50}
                    height={50}
                    layout="responsive"
                    alt="icon"
                  />
                </div>
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            ))}

          </div>
        </div>
        <Contact />
        <div className={styles.footerContainer}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Careers;
