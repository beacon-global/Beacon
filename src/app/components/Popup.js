import React from "react";

function Popup({setShowPopup}) {
    return (
        <>
            <div className="backgrounddim">
            </div>
            <div className="popup">
                <div className="closeButton" onClick={() => setShowPopup(false)}>
                    <img src="/close-b.svg" alt="close button" className="closeImage"/>
                </div>
                <div className="imageForm">
                    <img src="/Form.png" alt="popup image" className="popupImage"/>
                </div>
                <div className="popupForm">
                    <p className="popupheading">Book your free consultation </p>
                    <input type="text" placeholder="Full name" className="inputBoxF"/>
                    <input type="email" placeholder="Phone Number" className="inputBoxF"/>
                    <input type="text" placeholder="Email Address" className="inputBoxF"/>
                    <select className="inputBoxF">
                        <option value="" disabled selected hidden>Business Location</option>
                        <option value="1" className="option">KSA</option>
                        <option value="2">UAE</option>
                        <option value="3">QATAR</option>
                        <option value="4">INDIA</option>
                    </select>
                    <div className="subButton">Book your free consultation </div>
                </div>
            </div>
        </>
    );
}

export default Popup;
