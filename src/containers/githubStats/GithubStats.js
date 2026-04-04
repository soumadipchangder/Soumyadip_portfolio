import React, { Component } from "react";
import "./GithubStats.css";
import { Fade } from "react-reveal";

class GithubStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: 0,
      followers: 0,
      following: 0,
      created: "",
      loaded: false,
      statsImgOk: true,
      langsImgOk: true,
      streakImgOk: true,
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/soumadipchangder")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          repos: data.public_repos || 44,
          followers: data.followers || 0,
          following: data.following || 4,
          created: data.created_at
            ? new Date(data.created_at).getFullYear()
            : "2023",
          loaded: true,
        });
      })
      .catch(() => {
        this.setState({
          repos: 44,
          followers: 0,
          following: 4,
          created: "2023",
          loaded: true,
        });
      });
  }

  render() {
    const theme = this.props.theme;
    const username = "soumadipchangder";
    const { repos, created, statsImgOk, langsImgOk, streakImgOk } = this.state;
    const isDark = theme.name === "dark";

    const statTheme = isDark
      ? `&theme=transparent&hide_border=true&title_color=00d4ff&icon_color=7c3aed&text_color=8892a8&bg_color=00000000`
      : `&theme=default&hide_border=true&title_color=0284c7&icon_color=7c3aed&text_color=64748b&bg_color=00000000`;

    const streakTheme = isDark
      ? `&theme=transparent&hide_border=true&ring=00d4ff&fire=7c3aed&currStreakLabel=00d4ff&sideLabels=8892a8&dates=8892a8&currStreakNum=e0e6f0&sideNums=e0e6f0&background=00000000`
      : `&theme=default&hide_border=true&ring=0284c7&fire=7c3aed&currStreakLabel=0284c7&sideLabels=64748b&dates=64748b&currStreakNum=0f172a&sideNums=0f172a&background=00000000`;

    return (
      <div className="github-stats-main" id="github-stats">
        <Fade bottom duration={1000} distance="20px">
          <h1 className="section-title-ai gradient-text">GitHub Activity</h1>
          <p
            className="section-subtitle-ai"
            style={{ color: theme.secondaryText }}
          >
            My open source contributions and coding activity
          </p>
        </Fade>

        {/* Live stats counters */}
        <Fade bottom duration={1200} distance="20px">
          <div className="github-live-stats">
            <div className="github-live-stat glass-card">
              <span
                className="stat-number"
                style={{ color: theme.imageHighlight }}
              >
                {repos}
              </span>
              <span
                className="stat-label"
                style={{ color: theme.secondaryText }}
              >
                Repositories
              </span>
            </div>

            <div className="github-live-stat glass-card">
              <span
                className="stat-number"
                style={{ color: theme.imageHighlight }}
              >
                {created}
              </span>
              <span
                className="stat-label"
                style={{ color: theme.secondaryText }}
              >
                Since
              </span>
            </div>
          </div>
        </Fade>

        {/* GitHub Readme Stats cards — with error handling */}
        <Fade bottom duration={1500} distance="30px">
          <div
            className="github-stats-cards"
            style={{ display: statsImgOk || langsImgOk ? "flex" : "none" }}
          >
            <div
              className="github-stat-card glass-card"
              style={{ display: statsImgOk ? "flex" : "none" }}
            >
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true${statTheme}`}
                alt="GitHub Stats"
                className="github-stat-img"
                loading="lazy"
                onError={() => this.setState({ statsImgOk: false })}
              />
            </div>
            <div
              className="github-stat-card glass-card"
              style={{ display: langsImgOk ? "flex" : "none" }}
            >
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact${statTheme}`}
                alt="Top Languages"
                className="github-stat-img"
                loading="lazy"
                onError={() => this.setState({ langsImgOk: false })}
              />
            </div>
          </div>
          <div
            className="github-streak-container"
            style={{ display: streakImgOk ? "flex" : "none" }}
          >
            <div className="github-stat-card glass-card">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}${streakTheme}`}
                alt="GitHub Streak"
                className="github-stat-img"
                loading="lazy"
                onError={() => this.setState({ streakImgOk: false })}
              />
            </div>
          </div>

          {/* Contribution graph */}
          <div className="github-streak-container" style={{ marginTop: 24 }}>
            <div className="github-stat-card glass-card">
              <img
                src={`https://ghchart.rshah.org/${
                  isDark ? "00d4ff" : "0284c7"
                }/${username}`}
                alt="GitHub Contributions"
                className="github-stat-img"
                loading="lazy"
              />
            </div>
          </div>

          {/* GitHub profile link */}
          <div className="github-profile-link">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="github-view-btn"
              style={{
                color: theme.imageHighlight,
                borderColor: theme.imageHighlight + "66",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ marginRight: 8 }}
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View GitHub Profile
            </a>
          </div>
        </Fade>
      </div>
    );
  }
}

export default GithubStats;
