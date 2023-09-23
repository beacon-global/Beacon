"use client";
import Image from "next/image";
import React, { useState } from "react";

function Faq() {
  const [faqData, setFaqData] = useState([
    {
      img: "/Numbers/01.svg",
      heading: "What is Beacon and what services do you offer?",
      description:
        "Beacon is your global business advisory partner who offers you a range of services that enable your business growth and ultimate business transformation. We provide a plethora of services like Business Incorporation,  Digital Marketing,  Technology Finance and Accounting, Audit and Tax services, and Business Consulting services.",
      isAnswerVisible: true,
    },
    {
      img: "/Numbers/02.svg",
      heading:
        "What sets Beacon apart from the other business incorporation and consulting firms?",
      description:
        "Beacon is your global business advisory partner who offers you a range of services that enable your business growth and ultimate business transformation. We provide a plethora of services like Business Incorporation,  Digital Marketing,  Technology Finance and Accounting, Audit and Tax services, and Business Consulting services.",
    },
    {
      img: "/Numbers/03.svg",
      heading:
        "How can Beacon help my business with strategic planning and consultation?",
      description:
        "Beacon is your global business advisory partner who offers you a range of services that enable your business growth and ultimate business transformation. We provide a plethora of services like Business Incorporation,  Digital Marketing,  Technology Finance and Accounting, Audit and Tax services, and Business Consulting services.",
    },
    {
      img: "/Numbers/04.svg",
      heading:
        "Can Beacon help with financial auditing and reporting requirements?",
      description:
        "Beacon is your global business advisory partner who offers you a range of services that enable your business growth and ultimate business transformation. We provide a plethora of services like Business Incorporation,  Digital Marketing,  Technology Finance and Accounting, Audit and Tax services, and Business Consulting services.",
    },
    {
      img: "/Numbers/05.svg",
      heading: "Do you offer website development and maintenance services?",
      description:
        "Beacon is your global business advisory partner who offers you a range of services that enable your business growth and ultimate business transformation. We provide a plethora of services like Business Incorporation,  Digital Marketing,  Technology Finance and Accounting, Audit and Tax services, and Business Consulting services.",
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
            <h6 className="businessHeading">FAQ</h6>
            <h2 className="businessDesc">
              Frequently Asked <br /> Questions
            </h2>
          </div>
        </div>
        <div className="faqContentMainContainer">
          {faqData.map((data, index) => (
            <div className="faqRight" key={index} onClick={() => toggleAnswerVisibility(index)}>
              <div className="faqCountContainer">
                <Image
                  src={data.img}
                  width={24}
                  height={24}
                  layout="responsive"
                  alt={`faqImageNumber ${index}`}
                />
              </div>
              <div className="faqContentContainer">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                  className="faqQuestionContainer"
                >
                  <div className="faqQuestion">
                    <h1>{data.heading}</h1>
                  </div>
                  <div
                    className={`faqAddIcon ${
                      data.isAnswerVisible ? "rotateIcon" : ""
                    }`}
                  >
                    <button >
                      <Image
                        src="/+.svg"
                        width={16}
                        height={16}
                        alt="ImageFaq"
                      />
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
