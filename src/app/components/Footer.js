import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="topContainer">
        <div className="footerLogoContainer">
          <Image src="/WhiteLogo.png" width={185} height={60} alt="ImageFooter1" />
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
          <Image src="/FooterContact.png" width={650} height={71} alt="ImageFooter2" />
        </div>
        <div className="footerSocialContainer">
          <Image className="socialIcons" src="/WhatsApp.png" width={50} height={40} alt="ImageFooter3" />
          <Image className="socialIcons" src="/Instagram.png" width={50} height={40} alt="ImageFooter4" />
          <Image className="socialIcons" src="/Facebook.png" width={50} height={40} alt="ImageFooter5" />
          <Image className="socialIcons" src="/LinkedIn.png" width={50} height={40} alt="ImageFooter6" />
        </div>
      </div>
      <hr />
      <div className="footerCopyRightContainer">
        <p className="footerCopyRight">
          © 2023 by Saudi Gisco Solution CO.LTD | All Right Reserved | Powered
          by procube.cx
        </p>
      </div>
    </div>
  );
}

export default Footer;
