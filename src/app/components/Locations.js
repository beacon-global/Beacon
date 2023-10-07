import Image from "next/image";
import React from "react";

function Locations() {
  return (
    <div className="locationContainer">
      <div className="locationFlexContainer">
        <div className="locationContentContainer">
          <div>
            <h2 className="locationHeading">
              Our Journey that Inspires <br /> Businesses Globally
            </h2>
          </div>
          <div>
            <p className="locationDesc">
              Businesses need qualified business consulting and professional
              advice to win clients from all over the world. Since our
              inception, we have been dedicated to assisting organizations of
              all sizes with strategies that contribute to businesses with great
              performance and success. With true results and a clear focus on
              the strategic actions tailored to achieve the unique expectations
              of our clients, we provide a detailed blueprint and picture of how
              to establish and manage your business in the UAE. Our experts also
              dive deep into providing expert restructuring advice, business
              accounting and audit services, and business consulting solutions
              that help firms improve their business activities and expansion
              plans.
            </p>
          </div>
          <a href="/pages/About">
            <div className="hButtonContainer locationButton">
              <div className="visibleWrapperContainer">
                <div className="topVisibleContainer btn">
                  Explore More
                  <div className="topVisibleArrow">
                    <Image
                      src="/whiteArrow.svg"
                      width={23}
                      height={23}
                      alt="heroContact"
                    />
                  </div>
                </div>
                <div className="bottomVisibleContainer btn">
                  Explore More
                  <div className="bottomVisibleArrow">
                    <Image
                      src="/whiteArrow.svg"
                      width={23}
                      height={23}
                      alt="heroContact"
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="locationImgContainer">
          <Image
            src="/mapCropped.svg"
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
