"use client";
import Image from "next/image";
import React, { useState } from "react";

function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
      }}
      className="mHeader"
    >
      <div
        style={{
          width: "100%",
          margin: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
        className="mHeaderContainer"
      >
        <a href="/">
          <div style={{ fontSize: "1.25rem", fontWeight: 600, color: "#333" }}>
            {/* <Image src="/NewSvgs/Logos/Beacon.svg" width={120} height={30} alt="ImageHeader" /> */}
            <Image
              src="/NewSvgs/Logos/Beacon11.svg"
              width={120}
              height={30}
              alt="ImageHeader"
            />
          </div>
        </a>
        <button
          aria-label="HamBurgerMenu"
          onClick={toggleMenu}
          style={{
            fontSize: "1rem",
            color: "#02040e",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            outline: "none",
          }}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="#02040E"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="#02040E"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        <div
          style={{
            position: "fixed",
            top: "4rem",
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#ffffff",
            zIndex: 52,
            display: isMenuOpen ? "flex" : "none",
            flexDirection: "column",
            alignItems: "flex-end",
            padding: "24px",
            gap: "15px",
          }}
        >
          <a
            href="/"
            style={{ textDecoration: "none", color: "#333", fontSize: "1rem" }}
            className="mLinks"
          >
            Home
          </a>
          <div
            style={{
              textDecoration: "none",
              color: "#333",
              fontSize: "1rem",
              cursor: "pointer",
              display: "flex",
              gap: "1.6vw",
              // alignItems: "center",
            }}
            className="mLinks"
            onClick={toggleDropdown}
          >
            Explore
            <img
              // style={{
              //   height: "4.8vw",
              //   width: "3.5vw",
              // }}
              src="/dropDown.png"
              alt="Our Presence Arrow"
              className="dropDownArrow"
            />
          </div>
          <div
            style={{
              display: isDropdownOpen ? "flex" : "none",
              flexDirection: "column",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <a
              href="https://www.ksa.beaconarabia.com"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "#333",
                fontSize: "1rem",
                textAlign: "right",
              }}
            >
              Saudi Arabia
            </a>
            <a
              href="https://www.uae.beaconarabia.com"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "#333",
                fontSize: "1rem",
                textAlign: "right",
              }}
            >
              United Arab Emirates
            </a>
            {/* Add more location links as needed */}
          </div>

          <a
            href="/pages/About"
            style={{ textDecoration: "none", color: "#333", fontSize: "1rem" }}
            className="mLinks"
          >
            About Us
          </a>
          <a
            href="/pages/Services"
            style={{ textDecoration: "none", color: "#333", fontSize: "1rem" }}
            className="mLinks"
          >
            Services
          </a>
          <a
            href="/pages/blog"
            style={{ textDecoration: "none", color: "#333", fontSize: "1rem" }}
            className="mLinks"
          >
            Blogs
          </a>
          <a
            href="/pages/Careers"
            style={{ textDecoration: "none", color: "#333", fontSize: "1rem" }}
            className="mLinks"
          >
            Careers
          </a>
          <a
            href="/pages/Contact"
            style={{ textDecoration: "none", color: "#333", fontSize: "1rem" }}
            className="mLinks"
          >
            Contact Us
          </a>
          <div
            style={{ backgroundColor: "#13670B" }}
            className="hButtonContainer headerContactButton mHeaderBtn"
          >
            <a href="tel:966 570 807 175" className="btn mBtn">
              <Image
                src="/telephone.svg"
                width={15}
                height={15}
                alt="heroContact"
              />
              + 966 570 807 175
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
