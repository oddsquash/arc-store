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
              <p className="card-name">
                <strong>A</strong>dam and <strong>R</strong>achel{" "}
                <strong>C</strong>oots
              </p>
              <p className="card-text">Email: arc.woodworking@yahoo.com</p>
              <p className="card-text">
                Sign up{" "}
                <a
                  href="mailto:arc.woodworking@yahoo.com?Subject=Email subscription&body=Please add me to your mailing list!"
                  target="_top"
                >
                  [ here ]
                </a>{" "}
                to receive email updates when new products become available!
              </p>
              <p className="card-text">
                Etsy Shop:{" "}
                <a
                  className="link"
                  href="http://www.etsy.com/shop/ARCWoodworkingShop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ARC Woodworking Shop
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
