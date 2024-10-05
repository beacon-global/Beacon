"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Header() {
  const [isActive, setIsActive] = useState("Home");
  const [isPresenceOpen, setIsPresenceOpen] = useState(false);

  const pathname = usePathname();

  const menuList = [
    { text: "Home", href: "/" },
    { text: "Explore", href: "#", hasDropdown: true },
    { text: "About Us", href: "/pages/About/" },
    { text: "Services", href: "/pages/Services/" },
    { text: "Blogs", href: "/pages/blog/" },
    { text: "Careers", href: "/pages/Careers/" },
    { text: "Contact Us", href: "/pages/Contact/" },
  ];

  const handleClick = (text) => {
    if (text === "Explore") {
      setIsPresenceOpen(!isPresenceOpen);
    } else {
      setIsPresenceOpen(false);
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
              src="/NewSvgs/Logos/Beacon11.svg"
              width={180}
              height={60}
              alt="ImageHeader"
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
                    pathname !== undefined &&
                    pathname !== null &&
                    pathname !== "" &&
                    pathname === item.href
                      ? "active"
                      : ""
                  } ${item.hasDropdown ? "hasDropdown" : ""}`}
                  onClick={() => handleClick(item.text)}
                >
                  <a href={item.href}>
                    <div className="listHoverTop">
                      {item.text === "Explore" ? (
                        <div className="dropDown">
                          {item.text}
                          <img src="/dropDown.png" alt="Our Presence Arrow" />
                        </div>
                      ) : (
                        item.text
                      )}
                    </div>
                    <div className="listHoverBottom">{item.text}</div>
                  </a>
                  {item.hasDropdown && isPresenceOpen && (
                    <div className="dropdownContent">
                      <a
                        href="https://www.ksa.beaconarabia.com"
                        target="_blank"
                      >
                        <p>Saudi Arabia</p>
                      </a>
                      <a
                        href="https://www.uae.beaconarabia.com"
                        target="_blank"
                      >
                        <p>United Arab Emirates</p>
                      </a>
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
