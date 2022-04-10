import React from "react";
import "./Contact.css";
import MovingComponent from "react-moving-text";

const Contact = () => {
  return (
    <div className="d-flex justify-content-center contact-page">
      <div className="contact-section">
        <div className="">
          <h1 className="tilt-header-h3">Reach Out To Me !!!</h1>
          <p>Go ahead... Don't be shy</p>
          <div>
            <MovingComponent
              type="fadeOut"
              duration="1000ms"
              delay="0s"
              direction="alternate"
              timing="ease-out"
              iteration="infinite"
              fillMode="none"
            >
              React-Moving-Text
            </MovingComponent>
          </div>
        </div>
        <div className="footer">
          <div>
            Designed and developed with ❤ by Owahed Hossain. © 2022 All rights
            reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
