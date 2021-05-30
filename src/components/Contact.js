import React from "react";

export default function Contact() {
  return (
    <div className="container full-screen">
      <div className="row">
        <div className="contact-col">
          <div className="card contact">
            <img
              src="/img/Adam.jpg"
              className="card-img-top contact-photo"
              alt="adam"
            />
            <div className="card-body">
              <p className="card-name dark-mode-title">
                <span className="name">Adam</span> and{" "}
                <span className="name">Rachel</span>{" "}
                <span className="name">Coots</span>
              </p>
              <p className="card-text dark-mode-text">
                Email: arc.woodworking@yahoo.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
