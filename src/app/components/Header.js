"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

function Header() {
  const menuList = [
    { text: "Home", href: "/" },
    { text: "Business Setup", href: "/" },
    { text: "About Us", href: "/" },
    { text: "Services", href: "/pages/Services" },
    { text: "Blogs", href: "/" },
    { text: "Contact Us", href: "/" },
  ];

  const [activeItem, setActiveItem] = useState(0);

  const handleListItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="hContainer bg-white">
      <div className="logoContainer">
        <Image src="/beacon.png" width={180} height={45} alt="ImageHeader" />
      </div>
      <div className="hMenuContainer">
        <div className="hMenu">
          <ul className="hUlList">
            {menuList.map((item, index) => (
              <li
                key={index}
                onClick={() => handleListItemClick(index)}
                className={activeItem === index ? "activeListItem" : ""}
              >
                <a href={item.href}>
                  {item.text}
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
                  +971 800 4392
                  <Image
                    src="/telephone.png"
                    width={23}
                    height={23}
                    alt="heroContact"
                  />
                </a>
              </div>
              <div className="bottomVisibleContainer">
                <a href="/" className="btn">
                  +971 800 4392
                  <Image
                    src="/telephone.png"
                    width={23}
                    height={23}
                    alt="heroContact"
                  />
                </a>
              </div>
            </div>
          </div>
    </div>
  );
}

export default Header;
