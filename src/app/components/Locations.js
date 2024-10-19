import Image from "next/image";
import React from "react";
import Button from "./Button";

function Locations() {
  return (
    <div className="locationContainer">
      <div className="locationFlexContainer">
        <div className="locationContentContainer">
          <div>
            <h2 className="locationHeading">
              {/* Driving Business Success <br /> Through Strategic Solutions */}
              Expanding Opportunities Across the GCC
            </h2>
          </div>
          <div>
            <p className="locationDesc">
              {/* Expand your reach and boost sales in the exciting GCC market. We
              make it easy to set up and grow your business. Our experts craft
              personalized plans to help you succeed. From starting your
              business to marketing it online, we&apos;ve got you covered. Ready
              to unlock your potential? Let&apos;s get started. */}
              Our strategic presence throughout the GCC enables us to provide
              localized expertise and insights, ensuring your business thrives
              in each market. From Saudi Arabia to Oman, we offer tailored
              solutions that align with regional dynamics and drive sustainable
              growth. Wherever your business takes you in the GCC, our team is
              positioned to guide you at every stage.
            </p>
          </div>

          <div>
            <Button content="Explore More" href="/pages/About" />
          </div>
        </div>

        <div className="locationImgContainer">
          <Image
            src="/location.png"
            width={606}
            height={527}
            alt="ImageLocation"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}

export default Locations;
