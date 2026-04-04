import React, { Component } from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;

    // Safely check if the logo image exists
    let logoImg = null;
    if (degree.logo_path) {
      try {
        logoImg = require(`../../assets/images/${degree.logo_path}`);
      } catch (e) {
        logoImg = null;
      }
    }

    return (
      <div className="degree-card">
        {logoImg && (
          <Flip left duration={2000}>
            <div className="card-img">
              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  transform: "scale(0.95)",
                  objectFit: "contain",
                }}
                src={logoImg}
                alt={degree.alt_name}
              />
            </div>
          </Flip>
        )}
        {!logoImg && degree.logo_path && (
          <Flip left duration={2000}>
            <div className="card-img degree-placeholder-icon">
              <span
                role="img"
                aria-label="education"
                style={{ fontSize: "48px" }}
              >
                🎓
              </span>
            </div>
          </Flip>
        )}
        <Fade right duration={2000} distance="40px">
          <div
            className="card-body"
            style={{ width: logoImg || degree.logo_path ? "90%" : "100%" }}
          >
            <div
              className="body-header"
              style={{ backgroundColor: theme.headerColor }}
            >
              <div className="body-header-title">
                <h2 className="card-title" style={{ color: theme.text }}>
                  {degree.title}
                </h2>
                <h3 className="card-subtitle" style={{ color: theme.text }}>
                  {degree.subtitle}
                </h3>
              </div>
              <div className="body-header-duration">
                <h3 className="duration" style={{ color: theme.text }}>
                  {degree.duration}
                </h3>
              </div>
            </div>
            <div className="body-content">
              {degree.descriptions.map((sentence, idx) => {
                return (
                  <p
                    key={idx}
                    className="content-list"
                    style={{ color: theme.text }}
                  >
                    {sentence}
                  </p>
                );
              })}
              {degree.website_link && degree.website_link !== "#" && (
                <a
                  href={degree.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="visit-btn"
                    style={{ backgroundColor: theme.headerColor }}
                  >
                    <p className="btn" style={{ color: theme.text }}>
                      Visit Website
                    </p>
                  </div>
                </a>
              )}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default DegreeCard;
