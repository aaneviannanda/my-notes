import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="relative font-poppins">
        <div className="bottom-5 left-[43em] absolute bg-teal-500 text-white text-sm font-medium">
            <p> Copyright 2022 | aanevian </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#14B8A6"
            fill-opacity="1"
            d="M0,160L34.3,176C68.6,192,137,224,206,213.3C274.3,203,343,149,411,106.7C480,64,549,32,617,58.7C685.7,85,754,171,823,202.7C891.4,235,960,213,1029,218.7C1097.1,224,1166,256,1234,266.7C1302.9,277,1371,267,1406,261.3L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </footer>
    </>
  );
};
