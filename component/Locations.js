import Image from "next/image";
import React from "react";

function Locations() {
  return (
    <div className="locationContainer">
      <div className="locationContentContainer">
        <div>
          <h1 className="locationHeading">
            Porttitor the curabitur <br /> Adipiscing euismod .
          </h1>
        </div>
        <div>
          <p className="locationDesc">
            Lorem ipsum dolor sit amet consectetur. Eu elit vitae bibendum
            bibendum accumsan facilisis libero. At arcu augue ante varius.
            Integer tellus donec nunc montes rhoncus adipiscing fringilla. Elit
            dictumst neque tempus porta lorem egestas tellus convallis. Accumsan
            ullamcorper nunc sit quis egestas lectus facilisis nulla fringilla.
            Vestibulum dis mauris nullam tellus interdum. Consectetur felis
            euismod urna fusce parturient ultrices imperdiet. Pharetra a Morbi
            amet dolor habitasse odio sed sit viverra. Proin vivamus faucibus
            eget libero. Sodales mattis sed lectus pulvinar duis eleifend. Et
            iaculis ultrices cursus tristique eget mattis.
          </p>
        </div>
        <div className="hButtonContainer">
          <button className="btn">EXPLORE MORE</button>
        </div>
      </div>

      <div className="locationImgContainer">
        <Image src="/map.png" width={606} height={527} />
      </div>
    </div>
  );
}

export default Locations;
