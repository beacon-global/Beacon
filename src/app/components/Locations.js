import Image from "next/image";
import React from "react";

function Locations() {
  return (
    <div className="locationContainer">
      <div className="locationFlexContainer" >
        <div className="locationContentContainer">
          <div>
            <h2 className="locationHeading">
              Porttitor the curabitur <br /> Adipiscing euismod .
            </h2>
          </div>
          <div>
            <p className="locationDesc">
              Lorem ipsum dolor sit amet consectetur. Eu elit vitae bibendum
              bibendum accumsan facilisis libero. At arcu augue ante varius.
              Integer tellus donec nunc montes rhoncus adipiscing fringilla.
              Elit dictumst neque tempus porta lorem egestas tellus convallis.
              Accumsan ullamcorper nunc sit quis egestas lectus facilisis nulla
              fringilla. Vestibulum dis mauris nullam tellus interdum.
              Consectetur felis euismod urna fusce parturient ultrices
              imperdiet. Pharetra a Morbi amet dolor habitasse odio sed sit
              viverra. Proin vivamus faucibus eget libero. Sodales mattis sed
              lectus pulvinar duis eleifend. Et iaculis ultrices cursus
              tristique eget mattis.
            </p>
          </div>
          <div className="hButtonContainer locationButton">
            <div className="visibleWrapperContainer">
              <div className="topVisibleContainer">
                <a href="/" className="btn">
                  Explore More
                  <div className="topVisibleArrow">
                    <Image
                      src="/whiteArrow.svg"
                      width={23}
                      height={23}
                      alt="heroContact"
                    />
                  </div>
                </a>
              </div>
              <div className="bottomVisibleContainer">
                <a href="/" className="btn">
                  Explore More
                  <div className="bottomVisibleArrow">
                    <Image
                      src="/whiteArrow.svg"
                      width={23}
                      height={23}
                      alt="heroContact"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="locationImgContainer" >
        <div style={{width:"100%"}}>
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
    </div>
  );
}

export default Locations;
