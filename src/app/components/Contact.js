import Image from "next/image";
import React from "react";

function Contact() {
  return (
    <div className="contactMainContainer">
      <div className="contactContainer">
        <div className="contactHeadingContainer">
          <h2 className="contactHeading">Contact Us. It’s Easy.</h2>
        </div>
        <div className="contactDescContainer">
          <p className="contactDesc">
            If you think we can do the job for you, do not hesitate. Drop <br />{" "}
            us a message/call us for anyservices anywhere in UAE.
          </p>
          <p className="mContactDesc">
            If you think we can do the job for you, do not hesitate. Drop us a
            message/call us for anyservices anywhere in UAE.
          </p>
        </div>
        <div className="hButtonContainer contactImageButton">
          <div className="visibleWrapperContainer">
            <div className="topVisibleContainer">
              <a href="/pages/Contact" className="btn">
                Contact Us
                <div className="topVisibleArrow">
                  <Image
                    src="/whiteArrow.png"
                    width={23}
                    height={23}
                    alt="heroContact"
                  />
                </div>
              </a>
            </div>
            <div className="bottomVisibleContainer">
              <a href="/pages/Contact" className="btn">
                Contact Us
                <div className="bottomVisibleArrow">
                  <Image
                    src="/whiteArrow.png"
                    width={23}
                    height={23}
                    alt="heroContact"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
