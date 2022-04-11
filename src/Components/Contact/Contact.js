import React from "react";
import "./Contact.css";
import MovingComponent from "react-moving-text";

const Contact = () => {
  return (
    <div className="d-flex justify-content-center contact-page">
      <div className="contact-section">
        <div className="text-center py-5">
          <h1 className="tilt-header-h3">Reach Out To Me !!!</h1>
          <p>Go ahead... Don't be shy</p>
          <div className="contact-area">
            <div className="contact-chart">
              <MovingComponent
                type="fadeOut"
                duration="1000ms"
                delay="0s"
                direction="alternate"
                timing="ease-out"
                iteration="infinite"
                fillMode="none"
              >
                <h1 className="text-white pt-5">Lets Chat</h1>
              </MovingComponent>
              <p className="text-white">
                "Alone we can do so little <br /> together we can do so much."{" "}
                <sub>– Helen Keller</sub>
              </p>
              <div className="d-flex justify-content-center box">
                <div className="d-flex">
                  <div className="px-4 text-white">
                    Name * <br />
                    <input type="text" value="" />
                  </div>
                  <div className="text-white">
                    Email * <br />
                    <input type="text" value="" />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center pb-5">
                <button className="reach-out-to-me-button">Submit</button>
              </div>
            </div>
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
