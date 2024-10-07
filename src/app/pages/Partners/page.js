"use client";
import React, { useEffect, useState } from "react";
import styles from "../../Styles/partners.module.css";
import contactStyles from "../../Styles/contact.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import WhatsAppChat from "@/app/components/WhatsAppChat";
import Faq from "@/app/components/Faq";
import Popup from "@/app/components/Popup";
import Button from "@/app/components/Button";
import imageSrc from "/public/whiteArrow.svg";
import img1 from "../../../../public/Partners/1.png";

const Header = dynamic(() => import("@/app/components/Header"));
const MobileHeader = dynamic(() => import("@/app/components/MobileHeader"));
const Footer = dynamic(() => import("@/app/components/Footer"));
const Contact = dynamic(() => import("@/app/components/Contact"));

const data = [
  {
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
  },
];

const data2 = [
  {
    title: "Growth Opportunities",
    desc: "Lorem Ipsum is simply dummy text of the printiones and futuresion future typesetting to industryhas been the industry's .",
    icon: "/Careers/icon1.svg",
  },
  {
    title: "Make Money",
    desc: "Lorem Ipsum is simply dummy text of the printiones and futuresion future typesetting to industryhas been the industry's .",
    icon: "/Careers/icon2.svg",
  },
  {
    title: "Promote Your Business",
    desc: "Lorem Ipsum is simply dummy text of the printiones and futuresion future typesetting to industryhas been the industry's .",
    icon: "/Careers/icon3.svg",
  },
  {
    title: "Make Money",
    desc: "Lorem Ipsum is simply dummy text of the printiones and futuresion future typesetting to industryhas been the industry's .",
    icon: "/Careers/icon4.svg",
  },
  {
    title: "Promote Your Business",
    desc: "Lorem Ipsum is simply dummy text of the printiones and futuresion future typesetting to industryhas been the industry's .",
    icon: "/Careers/icon5.svg",
  },
  {
    title: "Growth Opportunities",
    desc: "Lorem Ipsum is simply dummy text of the printiones and futuresion future typesetting to industryhas been the industry's .",
    icon: "/Careers/icon6.svg",
  },
];

const imageSources = [
  "/clients/brands/webp/logo1.webp",
  "/clients/brands/webp/logo2.webp",
  "/clients/brands/webp/logo3.webp",
  "/clients/brands/webp/logo4.webp",
  "/clients/brands/webp/logo5.webp",
  "/clients/brands/webp/logo6.webp",
  "/clients/brands/webp/logo9.webp",
  "/clients/brands/webp/logo10.webp",
  "/clients/brands/webp/logo11.webp",
  "/clients/brands/webp/logo12.webp",
  "/clients/brands/webp/logo13.webp",
  "/clients/brands/webp/logo15.webp",
  "/clients/brands/webp/logo17.webp",
  "/clients/brands/webp/logo18.webp",
  "/clients/brands/webp/logo20.webp",
  "/clients/brands/webp/logo22.webp",
  "/clients/brands/webp/shami.webp",
];

function Partners() {
  const [loaded, setLoaded] = useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isHoveredForm, setIsHoveredForm] = React.useState(false);
  const [faqData, setFaqData] = useState([
    {
      img: "01",
      heading: "Mutual Non-Disclosure Agreement",
      description:
        "Beacon is your global business advisory partner who offers you a range of services that enable your business growth and ultimate business transformation. We provide a plethora of services like Business Incorporation,  Digital Marketing,  Technology Finance and Accounting, Audit and Tax services, and Business Consulting services.",
      isAnswerVisible: true,
    },
    {
      img: "02",
      heading: "Requirements Gathering",
      description:
        "Beacon is your global business advisory partner who offers you a range of services that enable your business growth and ultimate business transformation. We provide a plethora of services like Business Incorporation,  Digital Marketing,  Technology Finance and Accounting, Audit and Tax services, and Business Consulting services.",
    },
    {
      img: "03",
      heading: "Signing Contract and NDA",
      description:
        "At Beacon, we stand out because of our expertise and dedicated team. We take on projects with 100% confidence and a perfect blueprint of how to accomplish the business objectives. Through clear delivery models and customer-centric approaches, our efforts consider the business’s expectations with adherence to the global standards that make us stand out from the crowd.",
    },
    {
      img: "04",
      heading: "Consideration",
      description:
        "At Beacon, we make a precise understanding of the key areas where businesses can grow, thrive and create difference. We identify the major goals and issues that cater well to the organization and ensure alignment between the organization’s missions and plans. We also implement fine-tuning strategies to make an understanding and address existing barriers.",
    },
    {
      img: "05",
      heading: "Proposal",
      description:
        "Yes. Beacon can help you with your needs of financial auditing and reporting. With a holistic approach toward scrutinizing the financial statements of the company and filing necessary regulations, we ensure the financial well-being of your business. Our financial reporting services help to report the income statements with summarized revenue and expenses for a complete analysis of the company’s financial status.",
    },
  ]);
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

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    const addAnimation = () => {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    };

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    return () => {};
  }, []);

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

  const [showPopup, setShowPopup] = useState(false);
  const openShowPopup = () => {
    setShowPopup(true);
  };

  return (
    <>
      <WhatsAppChat />
      <Header />
      <MobileHeader />
      <div className={styles.contactUsContainer}>
        <div className={styles.Imagecontainer}>
          <h2 className="businessDesc">Collaboration for a Better Tomorrow</h2>
          <h2 className={styles.mbusinessDesc}>
            Collaboration for a Better Tomorrow
          </h2>
          <div>
            <Image
              quality={100}
              priority={true}
              unoptimized
              src={img1}
              width={1212}
              height={350}
              layout="responsive"
              alt="aboutus2"
              className={loaded ? styles.aboutHeroImage : styles.hidden}
              onLoad={handleImageLoad}
            />
          </div>
          <p className={styles.subHeading}>
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
          <div onClick={openShowPopup}>
            <Button content="PARTNER WITH US" />
          </div>
        </div>
        <div className={styles.CareersContainer}>
          <h2 className="businessDesc">Being a partner has its benefits</h2>
          <h2 className={styles.mbusinessDesc}>easier life with Beacon</h2>
          <div className={styles.CardContainer}>
            {data2.map((item, index) => (
              <div key={index} className={styles.CareersCard}>
                <div className={styles.iconContainer}>
                  <Image
                    src={item.icon}
                    width={40}
                    height={40}
                    layout="responsive"
                    alt="icon"
                    className={styles.icon}
                  />
                </div>
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* <div className={styles.servicesPageContainer3}>
          <h1 className="businessDesc">process & approach</h1>
          <h1 className={`${styles.servicePagecontainer2MobileHeading}`}>
            process & approach
          </h1>
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
                src="/testimonial.png"
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
              <div className="faqContentMainContainer">
                {faqData.map((data, index) => (
                  <div
                    className="faqRight"
                    key={index}
                    onClick={() => toggleAnswerVisibility(index)}
                  >
                    <div className={`${styles.faqContentContainer}`}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                        className="faqQuestionContainer"
                      >
                        <div className="faqQuestion">
                          <h1>{data.heading}</h1>
                        </div>
                        <div
                          className={`faqAddIcon ${
                            data.isAnswerVisible ? "rotateIcon" : ""
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
                        className={`faqDesc ${
                          data.isAnswerVisible ? "open" : ""
                        }`}
                      >
                        <p>{data.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        <div className={contactStyles.container2}>
          <form className={contactStyles.formContainer} onSubmit={handleSubmit}>
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
              <label htmlFor="subject">Business Location *</label>
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
            {/* <div className={contactStyles.textBox}>
              <label htmlFor="message">How May We Assist You?</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
              ></textarea>
            </div> */}
            <div className={contactStyles.formSubmit}>
              {/* <button type="submit">Send Message</button> */}
            </div>
            <div className="ml-auto">
              <button
                type="submit"
                className="bg-[#13670B] ml-auto py-3 md:py-5 px-6 md:px-14 rounded-full "
                onMouseEnter={() => setIsHoveredForm(true)}
                onMouseLeave={() => setIsHoveredForm(false)}
              >
                <div className="flex !w-full flex-col relative overflow-hidden text-sm md:text-lg font-medium">
                  <div className={`flex !w-full flex-row `}>
                    <p
                      className={`text-white  ease-in-out duration-300 ${
                        isHoveredForm && "-translate-y-[150%]"
                      } `}
                    >
                      Become a partner
                    </p>
                  </div>
                  <div className="flex flex-row !w-full absolute bottom-0">
                    <p
                      className={`text-white ease-in-out duration-300 ${
                        isHoveredForm ? "-translate-y-0" : "translate-y-[150%] "
                      } `}
                    >
                      Become a partner
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </form>
        </div>

        <div className={styles.PartnersGreenbanner}>
          <div className={styles.LeftGreenBanner}>
            <h1 className={styles.bannerHeading}>
              Let’s turn your idea into reality
            </h1>
            <h1 className={styles.bannersubHeading}>
              Be a part of a dynamic group of passionate researchers, designers{" "}
            </h1>
          </div>
          <div className={styles.RightGreenBanner}>
            <button
              className="bg-white bg-opacity-10 m-auto py-3 md:py-5 px-6 md:px-10 rounded-full "
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <a
                onClick={openShowPopup}
                className="flex flex-col relative overflow-hidden text-sm md:text-lg font-medium"
              >
                <div className={`flex flex-row gap-2 `}>
                  <p
                    className={`text-white  ease-in-out duration-300 ${
                      isHovered && "-translate-y-[150%]"
                    } `}
                  >
                    PARTNER WITH US
                  </p>
                  <Image
                    src={imageSrc}
                    width={23}
                    height={23}
                    alt="heroContact"
                    className={`
                            ease-in-out 
                            duration-300 
                            ${isHovered && "-translate-y-[150%] translate-x-5"} 
                            w-[15px] h-[15px] md:w-[23px] md:h-[23px]
                            `}
                  />
                </div>
                <div className="flex flex-row gap-2 absolute bottom-0">
                  <p
                    className={`text-white ease-in-out duration-300 ${
                      isHovered ? "-translate-y-0" : "translate-y-[150%] "
                    } `}
                  >
                    PARTNER WITH US
                  </p>
                  <Image
                    src={imageSrc}
                    width={23}
                    height={23}
                    alt="heroContact"
                    className={` ease-in-out duration-300 ${
                      isHovered ? "" : "translate-y-[150%] -translate-x-5"
                    }`}
                  />
                </div>
              </a>
            </button>
          </div>
        </div>

        {/* <div className="clientsContainer">
          <div className="businessContentContainer">
            <h2 className="businessDesc">Our partners</h2>
          </div>
          <div className="clientsImgContainer">
            <div className="scroller" data-direction="left" data-speed="fast">
              <div className="scroller__inner">
                {imageSources.map((img, index) => (
                  <img key={index} src={img} alt="" className="logoClients" />
                ))}
              </div>
            </div>
          </div>
        </div> */}
        <Faq />
        <Contact />
        <div className={styles.footerContainer}>
          <Footer />
        </div>
      </div>
      {showPopup && (
        <Popup setShowPopup={setShowPopup} heading="Partner With Us" />
      )}
    </>
  );
}

export default Partners;
