"use client";
import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
// import pdf from "../../../public/ebook/ebook.pdf";

function Popup({ setShowPopup, heading, page }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setIsLoading(true);
    emailjs
      .send(
        "service_7uemjx7",
        "template_q4oug1a",
        formData,
        "csDBhWE6hOKzpnV3K"
      )
      .then(
        ({ status }) => {
          console.log("SUCCESS!");
          if (page === "ebook") {
            downloadEbook();
            setSuccess(true);
            setError("");
            setShowPopup(false);
          } else {
            setSuccess(true);
            setError("");
            setShowPopup(false);
          }
          setIsLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError(error.text);
          setIsLoading(false);
        }
      );
  };

  const downloadEbook = () => {
    if (page === "ebook") {
      const link = document.createElement("a");
      link.href = "/ebook/ebook.pdf";
      link.download = "ebook.pdf";
      link.click();
    }
  };

  return (
    <>
      <div className="backgrounddim"></div>
      <div className="popup">
        <div className="closeButton" onClick={() => setShowPopup(false)}>
          <img src="/close-b.svg" alt="close button" className="closeImage" />
        </div>
        <div className="imageForm">
          <img src="/Form.webp" alt="popup image" className="popupImage" />
        </div>
        <div className="popupForm">
          <p className="popupheading">
            {heading ? heading : "Get your free consultation"}
          </p>
          <input
            type="text"
            name="name"
            placeholder="Full name"
            className="inputBoxF"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="inputBoxF"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="inputBoxF"
            onChange={handleChange}
          />
          <div className="select-wrapper">
            <select
              name="country"
              className="inputBoxF"
              onChange={handleChange}
            >
              <option value="" disabled selected hidden>
                Business Location
              </option>
              <option value="KSA">KSA</option>
              <option value="UAE">UAE</option>
              <option value="QATAR">QATAR</option>
              <option value="BAHRAIN">BAHRAIN</option>
              <option value="KUWAIT">KUWAIT</option>
              <option value="OMAN">OMAN</option>
            </select>
          </div>
          <div className="subButton" onClick={handleSubmit}>
            {isLoading ? "Downloading..." : "Book Now"}
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
