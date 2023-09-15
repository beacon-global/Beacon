import Image from "next/image";
import React from "react";

function Contact() {
  return (
    <div className="contactMainContainer">
      <div className="contactContainer">
        <div className="contactHeadingContainer">
          <h1 className="contactHeading">Contact Us. It’s Easy.</h1>
        </div>
        <div className="contactDescContainer">
          <p className="contactDesc">
            If you think we can do the job for you, do not hesitate. Drop <br/> us a
            message/call us for anyservices anywhere in UAE.
          </p>
        </div>
        <div className="hButtonContainer contactImageButton">
            <div className="visibleWrapperContainer">
              <div className="topVisibleContainer">
                <a href="/" className="btn">
                  Contact Us
                  <Image
                    src="/whiteArrow.png"
                    width={23}
                    height={23}
                    alt="heroContact"
                  />
                </a>
              </div>
              <div className="bottomVisibleContainer">
                <a href="/" className="btn">
                  Contact Us
                  <Image
                    src="/whiteArrow.png"
                    width={23}
                    height={23}
                    alt="heroContact"
                  />
                </a>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Contact;
