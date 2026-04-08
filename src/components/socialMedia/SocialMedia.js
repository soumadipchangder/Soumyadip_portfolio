import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";

const IconWrapper = styled.span`
  .social-icon-fa {
    background: ${(props) =>
      props.theme && props.theme.name === "light"
        ? "rgba(0, 0, 0, 0.08)"
        : "rgba(255, 255, 255, 0.15)"};
    backdrop-filter: blur(6px);
    box-shadow: ${(props) =>
      props.theme && props.theme.name === "light"
        ? "0 0 12px rgba(0, 0, 0, 0.08), 0 0 4px rgba(0, 0, 0, 0.04)"
        : "0 0 12px rgba(255, 255, 255, 0.25), 0 0 4px rgba(255, 255, 255, 0.1)"};
    color: ${(props) => props.backgroundColor};
  }
  &:hover .social-icon-fa {
    background: ${(props) =>
      props.theme && props.theme.name === "light"
        ? "rgba(0, 0, 0, 0.15)"
        : "rgba(255, 255, 255, 0.35)"};
    box-shadow: ${(props) =>
      props.theme && props.theme.name === "light"
        ? "0 0 20px rgba(0, 0, 0, 0.12), 0 0 8px rgba(0, 0, 0, 0.06)"
        : "0 0 20px rgba(255, 255, 255, 0.45), 0 0 8px rgba(255, 255, 255, 0.25)"};
    transition: 0.3s ease-in;
  }
`;

export default function SocialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, i) => {
        return (
          <a
            key={i}
            href={media.link}
            className="icon-button"
            target="_blank"
            rel="noopener noreferrer"
            title={media.name}
          >
            <IconWrapper {...media} {...props}>
              {media.emoji ? (
                <span
                  className="social-icon-fa social-svg-icon"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    role="img"
                    aria-label={media.name}
                    style={{ fontSize: "20px" }}
                  >
                    {media.emoji}
                  </span>
                </span>
              ) : media.svgPath ? (
                <span
                  className="social-icon-fa social-svg-icon"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill={media.backgroundColor}>
                    <path d={media.svgPath} />
                  </svg>
                </span>
              ) : (
                <i
                  className={`${media.iconClass || "fab"} ${media.fontAwesomeIcon
                    } social-icon-fa`}
                ></i>
              )}
            </IconWrapper>
          </a>
        );
      })}
    </div>
  );
}
