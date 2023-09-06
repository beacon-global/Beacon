import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="hContainer bg-white">
      <div className="logoContainer">
        <Image src="/beacon.png" width={180} height={45} />
      </div>
      <div className="hMenuContainer">
        <div className="hMenu">
          <ul className="hUlList">
            <li>Home</li>
            <li>Business Setup</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Blogs</li>
            <li>Contact Us</li>
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
