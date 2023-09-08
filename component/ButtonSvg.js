import React from "react";

function ButtonSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="110"
      height="50"
      viewBox="0 0 110 50"
      fill="none"
    >
      <circle cx="85" cy="25" r="25" fill="#13670B" />
      <path d="M81 18L89 25L81 32" stroke="white" stroke-width="1.85" />
      <circle
        cx="25"
        cy="25"
        r="24.21"
        transform="rotate(-180 25 25)"
        stroke="#13670B"
        stroke-width="1.58"
      />
      <path d="M29 32L21 25L29 18" stroke="#13670B" stroke-width="1.85" />
    </svg>
  );
}

export default ButtonSvg;
