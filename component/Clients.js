import Image from "next/image";
import React from "react";

function Clients() {
  return (
    <div className="clientsContainer">
      <div className="businessContentContainer">
        <h1 className="businessHeading">our CLIENTS</h1>
        <h2 className="businessDesc">Our core partners</h2>
      </div>
      <div className="clientsImgContainer">
        <Image src='/ClientsLogo.png' width={100} height={100} layout="responsive"/>
      </div>
      <div className="testimonialContainer">
        <Image src='/Testimonial.png' width={100} height={100} layout="responsive"/>
      </div>
    </div>
  );
}

export default Clients;
