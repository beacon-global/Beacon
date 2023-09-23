import Header from "@/app/components/Header";
import MobileHeader from "@/app/components/MobileHeader";
import styles from "../../Styles/aboutus.module.css";
import React from "react";
import Image from "next/image";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

function About() {
  const servicesData = [
    {
      img: "/AboutUsPage/corev1.svg",
      heading: "Quality",
      description:
        "Lorem Ipsum is simply printiones and futuresion typesetting to industryhas been the industry's the standard dummy text ever and typesetting.",
    },
    {
      img: "/AboutUsPage/corev2.svg",
      heading: "Integrity",
      description:
        "Lorem Ipsum is simply printiones and futuresion typesetting to industryhas been the industry's the standard dummy text ever and typesetting.",
    },
    {
      img: "/AboutUsPage/corev3.svg",
      heading: "Teamwork",
      description:
        "Lorem Ipsum is simply printiones and futuresion typesetting to industryhas been the industry's the standard dummy text ever and typesetting.",
    },
    {
      img: "/AboutUsPage/corev3.svg",
      heading: "Competence",
      description:
        "Lorem Ipsum is simply printiones and futuresion typesetting to industryhas been the industry's the standard dummy text ever and typesetting.",
    },
  ];
  return (
    <>
      <Header />
      <MobileHeader />
      <div className={styles.aboutUsMainContainer}>
        <h2 className="businessDesc">dummy typesetting the printiones</h2>
        <div className={styles.aboutUsHeroContainer}>
          <Image
            src="/AboutUsPage/AboutUsPage.svg"
            width={1212}
            height={600}
            layout="responsive"
            alt="aboutus1"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur. Id habitant pellentesque
            feugiat aliquam mattis integer. Sagittis diam bibendum arcu quis dis
            at risus sodales. Interdum iaculis libero at at. Vitae tristique
            quis neque eu libero massa. Posuere gravida proin elit nunc dui.
            Quis sed id tortor volutpat ut egestas senectus pellentesque. Sed et
            nisi faucibus elit et volutpat phasellus sit. Lectus morbi tortor
            ullamcorper congue. Enim venenatis tristique ullamcorper diam elit
            enim sit erat. Malesuada pulvinar vulputate hac fringilla
            sollicitudin eu facilisis sit. Eu turpis cursus et gravida cursus.
            Faucibus donec volutpat purus purus sed in. Quis mauris elementum
            imperdiet elit urna enim nam.
          </p>
        </div>

        <div className={styles.greenBannerContiner}>
          <div className="statContainer">
            <h1>12K+</h1>
            <p>Project Complete</p>
          </div>
          <div className="statContainer">
            <h1>7K+</h1>
            <p>Happy Client</p>
          </div>
          <div className="statContainer">
            <h1>10+</h1>
            <p>Years Experience</p>
          </div>
          <div className="statContainer">
            <h1>270+</h1>
            <p>Win Awards</p>
          </div>
        </div>

        <div className={styles.aboutUsContainer2}>
          <h2 className="businessDesc">
            why go solo? let business link guarantee <br /> business setup
            success!
          </h2>

          <div className={styles.cardMainContainer}>
            <div className={styles.cardContainer}>
              <div className={styles.ImageCon}>
                <div>
                  <Image
                    src="/AboutUsPage/aboutPageIcon.svg"
                    width={80}
                    height={80}
                    layout="responsive"
                    alt="aboutus2"
                  />
                </div>
                <div>
                  <Image
                    src="/AboutUsPage/aboutPageIcon.svg"
                    width={80}
                    height={80}
                    layout="responsive"
                    alt="aboutus2"
                  />
                </div>
                <div>
                  <Image
                    src="/AboutUsPage/aboutPageIcon.svg"
                    width={80}
                    height={80}
                    layout="responsive"
                    alt="aboutus2"
                  />
                </div>
              </div>
              <div className={styles.cardContent}>
                <div>
                  <h1>Losing Money Hurts</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printiones and
                    futuresion future typesetting to industryhas been the and
                    typesetting.
                  </p>
                </div>
                <div>
                  <h1>Losing Money Hurts</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printiones and
                    futuresion future typesetting to industryhas been the and
                    typesetting.
                  </p>
                </div>
                <div>
                  <h1>Losing Money Hurts</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printiones and
                    futuresion future typesetting to industryhas been the and
                    typesetting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.aboutUscontainer3}>
          <div className={styles.topContainer}>
            <div className={styles.imgContainer}>
              <Image
                src="/AboutUsPage/aboutPage2.svg"
                width={576}
                height={500}
                layout="responsive"
                alt="aboutus2"
              />
            </div>
            <div className={styles.contentContainer}>
              <h1>Our Mission</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eu elit vitae bibendum
                bibendum accumsan facilisis libero. At arcu augue ante varius.
                Integer tellus donec nunc montes rhoncus adipiscing fringilla.
                Elit dictumst neque tempus porta lorem egestas tellus convallis.
                Accumsan ullamcorper nunc sit quis egestas thre lectus facilisis
                nulla fringilla. Vestibulum dis mauris nullam tellus interdum.
                Consectetur felis euismod future imperdiet. Lorem ipsum dolor
                sit amet consectetur. Integer tellus donec nunc montes rhoncus
                adipiscing fringilla. Elit dictumst neque tempus porta lorem
                egestas tellu
              </p>
            </div>
          </div>
          <div className={styles.topContainer}>
            <div className={styles.contentContainer}>
              <h1>Our Vision</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eu elit vitae bibendum
                bibendum accumsan facilisis libero. At arcu augue ante varius.
                Integer tellus donec nunc montes rhoncus adipiscing fringilla.
                Elit dictumst neque tempus porta lorem egestas tellus convallis.
                Accumsan ullamcorper nunc sit quis egestas thre lectus facilisis
                nulla fringilla. Vestibulum dis mauris nullam tellus interdum.
                Consectetur felis euismod future imperdiet. Lorem ipsum dolor
                sit amet consectetur. Integer tellus donec nunc montes rhoncus
                adipiscing fringilla. Elit dictumst neque tempus porta lorem
                egestas tellu
              </p>
            </div>
            <div className={styles.imgContainer}>
              <Image
                src="/AboutUsPage/aboutPage1.svg"
                width={576}
                height={500}
                layout="responsive"
                alt="aboutus2"
              />
            </div>
          </div>
        </div>

        <div className={styles.aboutUscontainer4}>
          <h2 className="businessDesc">Core Values</h2>
          <div className={styles.coreValueCard}>
            {servicesData.map((data, index) => (
              <div className={styles.coreValueCards} key={index}>
                <div className={styles.cvImgContainer}>
                  <Image src={data.img} width={50} height={50} alt="abouts4" />
                </div>
                <div className={styles.cvContent}>
                  <h1>{data.heading}</h1>
                  <p>{data.description}</p>
                </div>
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

export default About;
