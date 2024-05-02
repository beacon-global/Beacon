"use client"
import React, { useState } from "react";
import emailjs from '@emailjs/browser';


function Popup({ setShowPopup }) {

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        country: ""
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        emailjs
            .send("service_7uemjx7","template_q4oug1a",
                formData, "csDBhWE6hOKzpnV3K")
            .then(
                ({ status }) => {
                    console.log('SUCCESS!');
                    setSuccess(true);
                    setError('');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setError(error.text);
                },
            );

    };


    return (
        <>
            <div className="backgrounddim">
            </div>
            <div className="popup">
                <div className="closeButton" onClick={() => setShowPopup(false)}>
                    <img src="/close-b.svg" alt="close button" className="closeImage" />
                </div>
                <div className="imageForm">
                    <img src="/Form.png" alt="popup image" className="popupImage" />
                </div>
                <div className="popupForm">
                    <p className="popupheading">Book your free consultation </p>
                    <input type="text" name="name" placeholder="Full name" className="inputBoxF" onChange={handleChange} />
                    <input type="tel" name="phone" placeholder="Phone Number" className="inputBoxF" onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email Address" className="inputBoxF" onChange={handleChange} />
                    <select name="country" className="inputBoxF" onChange={handleChange}>
                        <option value="" disabled selected hidden>Business Location</option>
                        <option value="KSA">KSA</option>
                        <option value="UAE">UAE</option>
                        <option value="QATAR">QATAR</option>
                        <option value="INDIA">INDIA</option>
                    </select>
                    <div className="subButton" onClick={handleSubmit}>Book your free consultation </div>
                </div>
            </div>
        </>
    );
}

export default Popup;
