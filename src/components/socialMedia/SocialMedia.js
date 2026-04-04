import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";

const IconWrapper = styled.span`
  .social-icon-fa {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover .social-icon-fa {
    background-color: ${({ theme }) => theme.text};
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
                    backgroundColor: media.backgroundColor,
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
                  style={{ backgroundColor: media.backgroundColor }}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
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
