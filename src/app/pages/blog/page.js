import React from "react";
import PersonalBlog from "@/app/components/PersonalBlog";
import Header from "@/app/components/Header";
import MobileHeader from "@/app/components/MobileHeader";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import styles from "./blogs.module.css";

export const metadata = {
  keywords: [
    "Beacon",
    "business advisory",
    "business growth",
    "digital marketing",
    "technology services",
    "finance and accounting",
    "audit and taxation",
    "business consulting",
  ],
};

const page = () => {
  return (
    <div>
      <Header />
      <MobileHeader />
      <div className={styles.blogsMainInnerPage}>
        <PersonalBlog isInnerPage={true} />
      </div>
      <div className={styles.top110Margin}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default page;
