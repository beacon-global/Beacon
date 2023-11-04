"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [isActive, setIsActive] = useState("Home");
  const [isPresenceOpen, setIsPresenceOpen] = useState(false);

  const menuList = [
    { text: "Home", href: "/" },
    { text: "Our Presence ▼", href: "#", hasDropdown: true },
    { text: "About Us", href: "/pages/About" },
    { text: "Services", href: "/pages/Services" },
    { text: "Contact Us", href: "/pages/Contact" },
  ];

  const handleClick = (text) => {
    if (text === "Our Presence ▼") {
      // Toggle the dropdown visibility
      setIsPresenceOpen(!isPresenceOpen);
    } else {
      setIsPresenceOpen(false);
      setIsActive(text);
      localStorage.setItem("activeMenuItem", text);
    }
  };

  useEffect(() => {
    const storedActiveMenuItem = localStorage.getItem("activeMenuItem");
    if (storedActiveMenuItem) {
      setIsActive(storedActiveMenuItem);
    }
  }, []);

  return (
    <>
      <div className="hContainer bg-white">
        <a href="/">
          <div className="logoContainer">
            <Image
              // src="/logo.svg"
              src="/NewSvgs/Logos/Beacon11.svg"
              width={180}
              height={60}
              alt="ImageHeader"
              // layout="responsive"
              quality={100}
              priority={true}
              unoptimized
            />
          </div>
        </a>
        <div className="hMenuContainer">
          <div className="hMenu">
            <ul className="hUlList">
              {menuList.map((item, index) => (
                <li
                  key={index}
                  className={`huListTransitionWrapper ${
                    item.text === isActive ? "active" : ""
                  } ${item.hasDropdown ? "hasDropdown" : ""}`}
                  onClick={() => handleClick(item.text)}
                >
                  <a href={item.href}>
                    <div className="listHoverTop">{item.text}</div>
                    <div className="listHoverBottom">{item.text}</div>
                  </a>
                  {item.hasDropdown && isPresenceOpen && (
                    <div className="dropdownContent">
                      <p><a href="https://ksa.bmcglobal.co">Saudi Arabia</a></p>
                      <p><a href="https://uae.bmcglobal.co">United Arab Emirates</a></p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <a href="tel:966 570 807 175">
          <div className="hButtonContainer headerContactButton">
            <div className="visibleWrapperContainer">
              <div className="topVisibleContainer btn">
                <Image
                  src="/telephone.svg"
                  width={18}
                  height={18}
                  alt="heroContact"
                />
                + 966 570 807 175
              </div>
              <div className="bottomVisibleContainer btn">
                <Image
                  src="/telephone.svg"
                  width={18}
                  height={18}
                  alt="heroContact"
                />
                + 966 570 807 175
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Header;
