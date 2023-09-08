"use client";
import Image from "next/image";
import React, { useState } from "react";

function Faq() {
  const [faqData, setFaqData] = useState([
    {
      img: "/01.png",
      heading: "How much time does it take?",
      description:
        "Lorem Ipsum is simply dummy text of the printiones and futuresion future typesetting to industryhas been the industry's standard dummy text ever and typesetting.",
    },
    {
      img: "/02.png",
      heading: "What is your class naming convention?",
      description:
        "Lorem Ipsum is simply dummy text of the printiones and futuresion future typesetting to industryhas been the industry's standard dummy text ever and typesetting.",
    },
    {
      img: "/03.png",
      heading: "How do you communicate?",
      description:
        "Lorem Ipsum is simply dummy text of the printiones and futuresion future typesetting to industryhas been the industry's standard dummy text ever and typesetting.",
    },
    {
      img: "/04.png",
      heading: "I have a bigger project. Can you handle it?",
      description:
        "Lorem Ipsum is simply dummy text of the printiones and futuresion future typesetting to industryhas been the industry's standard dummy text ever and typesetting.",
    },
    {
      img: "/05.png",
      heading: "What is your class naming convention?",
      description:
        "Lorem Ipsum is simply dummy text of the printiones and futuresion future typesetting to industryhas been the industry's standard dummy text ever and typesetting.",
    },
  ]);

  const toggleAnswerVisibility = (index) => {
    // Create a copy of the FAQ data with isAnswerVisible updated
    const updatedFaqData = faqData.map((item, i) => ({
      ...item,
      isAnswerVisible: i === index ? !item.isAnswerVisible : false,
    }));

    setFaqData(updatedFaqData);
  };

  return (
    <div className="faqMainContainer">
      <div className="faqContainer">
        <div className="faqLeft">
          <div className="businessContentContainer">
            <h1 style={{ paddingTop: "8px" }} className="businessHeading">
              FAQ
            </h1>
            <h2 className="businessDesc">
              Frequently Asked <br /> Questions
            </h2>
          </div>
        </div>
        <div className="faqContentMainContainer">
          {faqData.map((data, index) => (
            <div className="faqRight" key={index}>
              <div className="faqCountContainer">
                {/* ... other code ... */}
              </div>
              <div className="faqContentContainer">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                  className="faqQuestionContainer"
                >
                  <div className="faqQuestion">
                    <h1>{data.heading}</h1>
                  </div>
                  <div className="faqAddIcon">
                    <button onClick={() => toggleAnswerVisibility(index)}>
                      <Image src="/+.png" width={16} height={16} />
                    </button>
                  </div>
                </div>
                {/* Always render the answer, but apply CSS class conditionally */}
                <div
                  className={`faqDesc ${data.isAnswerVisible ? "open" : ""}`}
                >
                  <p>{data.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
