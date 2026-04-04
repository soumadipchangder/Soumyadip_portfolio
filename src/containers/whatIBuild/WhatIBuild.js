import React from "react";
import "./WhatIBuild.css";
import { whatIBuild } from "../../portfolio";
import { Fade } from "react-reveal";

export default function WhatIBuild(props) {
  const theme = props.theme;
  return (
    <div className="what-i-build-main" id="what-i-build">
      <Fade bottom duration={1000} distance="20px">
        <h1 className="section-title-ai gradient-text">{whatIBuild.title}</h1>
        <p className="section-subtitle-ai">{whatIBuild.subtitle}</p>
      </Fade>
      <div className="wib-cards-container">
        {whatIBuild.cards.map((card, i) => (
          <Fade bottom duration={1500} distance="30px" delay={i * 200} key={i}>
            <div className="wib-card glass-card">
              <div className="wib-card-icon">{card.icon}</div>
              <h3 className="wib-card-title" style={{ color: theme.text }}>
                {card.title}
              </h3>
              <p
                className="wib-card-desc"
                style={{ color: theme.secondaryText }}
              >
                {card.description}
              </p>
              <div className="wib-card-tech">
                {card.techStack.map((tech, j) => (
                  <span className="tech-badge" key={j}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}
