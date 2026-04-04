import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="repo-card-div glass-card">
      <Fade bottom duration={2000} distance="40px">
        <div key={repo.id} onClick={() => openRepoinNewTab(repo.url)}>
          <div className="repo-name-div">
            <svg
              aria-hidden="true"
              className="octicon repo-svg"
              height="20"
              role="img"
              viewBox="0 0 12 16"
              width="16"
              fill="#00d4ff"
            >
              <path
                fillRule="evenodd"
                d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
              ></path>
            </svg>
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p
            className="repo-description"
            style={{ color: theme.secondaryText }}
          >
            {repo.description}
          </p>
          {repo.techStack && (
            <div className="repo-tech-stack">
              {repo.techStack.map((tech, i) => (
                <span className="tech-badge" key={i}>
                  {tech}
                </span>
              ))}
            </div>
          )}
          <div className="repo-details">
            <p
              className="repo-creation-date subTitle"
              style={{ color: theme.secondaryText }}
            >
              Created on {repo.createdAt.split("T")[0]}
            </p>
            <ProjectLanguages
              className="repo-languages"
              logos={repo.languages}
            />
          </div>
          <div className="repo-actions">
            <button
              className="repo-btn repo-github-btn"
              onClick={(e) => {
                e.stopPropagation();
                openRepoinNewTab(repo.url);
              }}
            >
              Source Code
            </button>
            {repo.demoUrl && (
              <button
                className="repo-btn repo-demo-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  openRepoinNewTab(repo.demoUrl);
                }}
              >
                Live Demo
              </button>
            )}
          </div>
        </div>
      </Fade>
    </div>
  );
}
