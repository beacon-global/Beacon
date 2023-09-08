"use client"
import Image from "next/image";
import React, { useState } from "react";

function Header() {

  const menuList = ["Home","Business Setup","About Us","Services","Blogs","Contact Us"]

  const [activeItem, setActiveItem] = useState(0);

  const handleListItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="hContainer bg-white">
      <div className="logoContainer">
        <Image src="/beacon.png" width={180} height={45} />
      </div>
      <div className="hMenuContainer">
        <div className="hMenu">
          <ul className="hUlList">
          {menuList.map((item, index) => (
        <li
          key={index}
          onClick={() => handleListItemClick(index)}
          className={activeItem === index ? 'activeListItem' : ''}
        >
          {item}
        </li>
      ))}
          </ul>
        </div>
      </div>
      <div className="hButtonContainer">
        <button className="btn">+971 800 4392</button>
      </div>
    </div>
  );
}

export default Header;
