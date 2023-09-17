import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="topContainer">
        <div className="footerLogoContainer">
          <Image
            src="/WhiteLogo.png"
            width={185}
            height={60}
            alt="ImageFooter1"
          />
        </div>
        <div className="footerContentContainer">
          <ul className="footercontent">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Blogs</li>
            <li>Contanct</li>
          </ul>
        </div>
      </div>
      <div className="bottomContainer">
        <div className="footerContactImgContainer">
          <div className="footerContactDetails">
            <Image
              src="/Social/footerTelephone.svg"
              width={50}
              height={50}
              alt="ImageFooter2"
            />
            <div className="footerContactTextDetails">
              <h1>Call us on:</h1>
              <p>+1 800 100 900</p>
            </div>
          </div>
          <div className="footerContactDetails">
            <Image
              src="/Social/footerTelephone.svg"
              width={50}
              height={50}
              alt="ImageFooter2"
            />
            <div className="footerContactTextDetails">
              <h1>Call us on:</h1>
              <p>+1 800 100 900</p>
            </div>
          </div>
          <div className="footerContactDetails">
            <Image
              src="/Social/footerTelephone.svg"
              width={50}
              height={50}
              alt="ImageFooter2"
            />
            <div className="footerContactTextDetails">
              <h1>Call us on:</h1>
              <p>+1 800 100 900</p>
            </div>
          </div>
        </div>
        <div className="footerSocialContainer">
          <Image
            className="socialIcons"
            src="/Social/footerWhatsapp.svg"
            width={50}
            height={50}
            alt="ImageFooter3"
          />
          <Image
            className="socialIcons"
            src="/Social/footerInstagram.svg"
            width={50}
            height={50}
            alt="ImageFooter4"
          />
          <Image
            className="socialIcons"
            src="/Social/footerFacebook.svg"
            width={50}
            height={50}
            alt="ImageFooter5"
          />
          <Image
            className="socialIcons"
            src="/Social/footerLinkedin.svg"
            width={50}
            height={50}
            alt="ImageFooter6"
          />
        </div>
      </div>
      <hr />
      <div className="footerCopyRightContainer">
        <p className="footerCopyRight">
          © 2023 by Beacon Management Consultants CO.LTD | All Right Reserved |
          Powered by <a href="https://procube.cx/" style={{textDecoration:"underline"}}>procube.cx</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
