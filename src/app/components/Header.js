"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function Header() {
  const [isActive, setIsActive] = useState("Home");

  const menuList = [
    { text: "Home", href: "/" },
    { text: "Business Setup", href: "/" },
    { text: "About Us", href: "/pages/About" },
    { text: "Services", href: "/pages/Services" },
    { text: "Blogs", href: "/" },
    { text: "Contact Us", href: "/pages/Contact" },
  ];

  const handleClick = (text) => {
    setIsActive(text);
    localStorage.setItem("activeMenuItem", text);
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
        <div className="logoContainer">
          <Image src="/beacon.svg" width={180} height={45} alt="ImageHeader" />
        </div>
        <div className="hMenuContainer">
          <div className="hMenu">
            <ul className="hUlList">
              {menuList.map((item, index) => (
                <li
                  key={index}
                  className={`huListTransitionWrapper ${
                    item.text === isActive ? "active" : ""
                  }`}
                  onClick={() => handleClick(item.text)}
                >
                  <a href={item.href}>
                    <div className="listHoverTop">{item.text}</div>
                    <div className="listHoverBottom">{item.text}</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="hButtonContainer headerContactButton">
          <div className="visibleWrapperContainer">
            <div className="topVisibleContainer">
              <a href="/" className="btn">
                <Image
                  src="/telephone.svg"
                  width={18}
                  height={18}
                  alt="heroContact"
                />
                +971 800 4392
              </a>
            </div>
            <div className="bottomVisibleContainer">
              <a href="/" className="btn">
                <Image
                  src="/telephone.svg"
                  width={18}
                  height={18}
                  alt="heroContact"
                />
                +971 800 4392
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
