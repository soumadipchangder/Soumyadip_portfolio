import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";

class CertificationCard extends Component {
  render() {
    const certificate = this.props.certificate;
    const theme = this.props.theme;

    return (
      <Fade bottom duration={2000} distance="20px">
        <a
          href={certificate.certificate_link}
          target="_blank"
          rel="noopener noreferrer"
          className="cert-card-link"
        >
          <div className="cert-card">
            {/* TOP */}
            <div className="content">
              <div
                className="cert-top"
                style={{ backgroundColor: certificate.color_code }}
              >
                {(() => {
                  try {
                    const img = require(`../../assets/images/${certificate.logo_path}`);
                    return (
                      <img
                        className="cert-logo"
                        src={img}
                        alt={certificate.alt_name}
                      />
                    );
                  } catch (e) {
                    return (
                      <span
                        role="img"
                        aria-label="certificate"
                        style={{ fontSize: "48px" }}
                      >
                        📜
                      </span>
                    );
                  }
                })()}
              </div>
              <div className="content-overlay"></div>
              <div className="content-details fadeIn-top">
                <h3 className="content-title" style={{ color: "#fff" }}>
                  Certificate
                </h3>
              </div>
            </div>

            {/* MIDDLE */}
            <div className="cert-middle">
              <h2 className="cert-title" style={{ color: theme.text }}>
                {certificate.title}
              </h2>
            </div>

            {/* BOTTOM */}
            <div className="cert-bottom">
              <h4
                className="cert-instructor"
                style={{ color: theme.secondaryText }}
              >
                {certificate.instructor || certificate.subtitle}
              </h4>
            </div>
          </div>
        </a>
      </Fade>
    );
  }
}

export default CertificationCard;
