import Image from "next/image";
import React from "react";
import NewsLetter from "./NewsLetter/NewsLetter";

function Footer() {
  return (
    <div className="footerContainer">
      <div>
        <NewsLetter />
      </div>
      <div className="topContainer">
        <div className="footerLogoContainer">
          <Image
            quality={100}
            priority={true}
            unoptimized
            src="/NewSvgs/Logos/beaconWhite.svg"
            width={170}
            height={60}
            alt="ImageFooter1"
          />
        </div>
        <div className="footerContentContainer">
          <ul className="footercontent">
            <a href="/">
              <p>Home</p>
            </a>
            <a href="/pages/About">
              <p>About Us</p>
            </a>
            <a href="/pages/Services">
              <p>Services</p>
            </a>
            <a href="pages/blog/">
              <p>Blogs</p>
            </a>
            {/* <a href="/pages/Partners">
              <p>Partners</p>
            </a> */}
            <a href="/pages/Careers">
              <p>Careers</p>
            </a>
            <a href="/pages/Contact">
              <p>Contact</p>
            </a>
          </ul>
        </div>
      </div>
      <div className="bottomContainer">
        <div className="footerContactImgContainer">
          <div className="footerContactDetails">
            <Image
              quality={100}
              priority={true}
              unoptimized
              src="/NewSvgs/SVG3/hh/Icon-1.svg"
              width={46}
              height={46}
              alt="ImageFooter2"
            />
            <div className="footerContactTextDetails footerContactTextDetailsEmail">
              <h1>Email us:</h1>
              <a
                href="mailto:mail@beaconarabia.com"
                style={{ textTransform: "none" }}
              >
                mail@beaconarabia.com
              </a>
            </div>
          </div>
          <div className="footerContactDetails">
            <Image
              quality={100}
              priority={true}
              unoptimized
              src="/NewSvgs/SVG3/hh/Icon.svg"
              width={46}
              height={46}
              alt="ImageFooter2"
            />
            <div
              className="footerContactTextDetails"
              style={{ whiteSpace: "nowrap" }}
            >
              <h1>Call us on:</h1>
              <a href="tel:971 527 733 789">
                <p>
                  + 966 570 807 175
                  <br /> + 971 527 733 789
                </p>
              </a>
            </div>
          </div>
          <div className="footerContactDetails">
            <Image
              quality={100}
              priority={true}
              unoptimized
              src="/NewSvgs/SVG3/hh/Icon-2.svg"
              width={46}
              height={46}
              alt="ImageFooter2"
            />
            <a href="https://maps.app.goo.gl/vWfGvAjAcHxV9AUT9">
              <div className="footerContactTextDetails">
                <h1>Head Office:</h1>
                <p>
                  Le Cygne Commercial Center, Kaab
                  <br /> Bin Malik Street, Al Olaya, Riyadh 12611
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="footerSocialContainer">
          <a href="https://wa.me/+971527733789" target="_blank">
            <Image
              quality={100}
              priority={true}
              unoptimized
              className="socialIcons"
              src="/NewSvgs/SVG3/hh/Icon-3.svg"
              width={46}
              height={46}
              alt="ImageFooter3"
            />
          </a>
          <a href="https://www.instagram.com/beaconconsultants">
            <Image
              quality={100}
              priority={true}
              unoptimized
              className="socialIcons"
              src="/NewSvgs/SVG3/hh/Icon-4.svg"
              width={46}
              height={46}
              alt="ImageFooter4"
            />
          </a>
          <a
            href="https://www.facebook.com/people/Beacon-Management-Consultants/100086432425064/?mibextid=rS40aB7S9Ucbxw6v"
            target="_blank"
          >
            <Image
              quality={100}
              priority={true}
              unoptimized
              className="socialIcons"
              src="/NewSvgs/SVG3/hh/Icon-5.svg"
              width={46}
              height={46}
              alt="ImageFooter5"
            />
          </a>
          <a href="https://www.linkedin.com/company/beacon-management-consultants/">
            <Image
              quality={100}
              priority={true}
              unoptimized
              className="socialIcons"
              src="/NewSvgs/SVG3/hh/Icon-6.svg"
              width={46}
              height={46}
              alt="ImageFooter6"
            />
          </a>
        </div>
      </div>
      {/* <hr /> */}
      <div className="footerCopyRightContainer">
        <p className="footerCopyRight">
          © 2023 by Beacon Management Consultants CO.LTD | All Right Reserved |
          Powered by{" "}
          <a href="https://procube.cx/" style={{ textDecoration: "underline" }}>
            procube.cx
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
