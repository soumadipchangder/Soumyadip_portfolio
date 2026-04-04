import React from "react";
import "./ResearchInnovation.css";
import { researchInnovation } from "../../portfolio";
import { Fade } from "react-reveal";

export default function ResearchInnovation(props) {
  const theme = props.theme;
  return (
    <div className="research-main" id="research">
      <Fade bottom duration={1000} distance="20px">
        <h1 className="section-title-ai gradient-text">
          {researchInnovation.title}
        </h1>
        <p className="section-subtitle-ai">{researchInnovation.subtitle}</p>
      </Fade>
      <div className="research-cards-container">
        {researchInnovation.items.map((item, i) => (
          <Fade bottom duration={1500} distance="30px" delay={i * 200} key={i}>
            <div className="research-card glass-card">
              <div className="research-card-icon">{item.icon}</div>
              <h3 className="research-card-title" style={{ color: theme.text }}>
                {item.title}
              </h3>
              <p
                className="research-card-desc"
                style={{ color: theme.secondaryText }}
              >
                {item.description}
              </p>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}
