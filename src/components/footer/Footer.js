import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting, socialMediaLinks } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <div className="footer-content">
          <div className="footer-links">
            {socialMediaLinks.map((media, i) => (
              <a
                key={i}
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                title={media.name}
                style={{ color: props.theme.secondaryText }}
              >
                {media.emoji ? (
                  <span
                    role="img"
                    aria-label={media.name}
                    style={{ fontSize: "18px", verticalAlign: "middle" }}
                  >
                    {media.emoji}
                  </span>
                ) : media.svgPath ? (
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                    style={{ verticalAlign: "middle" }}
                  >
                    <path d={media.svgPath} />
                  </svg>
                ) : (
                  <i
                    className={`${media.iconClass || "fab"} ${
                      media.fontAwesomeIcon
                    }`}
                  ></i>
                )}
              </a>
            ))}
          </div>
          <p
            className="footer-text"
            style={{ color: props.theme.secondaryText }}
          >
            Designed & Built by{" "}
            <span className="gradient-text" style={{ fontWeight: 700 }}>
              {greeting.title}
            </span>
          </p>
          <p
            className="footer-tagline"
            style={{ color: props.theme.secondaryText }}
          >
            Building intelligent systems that think, reason, and act.
          </p>
        </div>
      </Fade>
    </div>
  );
}
