import React from "react";

export default function Contact() {
  return (
    <div className="container">
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
              <h6 className="dark-mode-text">
                Sign up{" "}
                <a
                  href="mailto:arc.woodworking@yahoo.com?Subject=Email subscription&body=Please add me to your mailing list!"
                  target="_top"
                >
                  [ here ]
                </a>{" "}
                to receive email updates when new products become available!
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
