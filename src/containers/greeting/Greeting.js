import React, { Component } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

const typingWords = [
  "Generative AI",
  "Multi-Agent Systems",
  "RAG Architect",
  "LLM Engineer",
];

class TypingAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordIndex: 0,
      charIndex: 0,
      isDeleting: false,
      currentText: "",
    };
    this.timer = null;
  }

  componentDidMount() {
    this.type();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  type = () => {
    const { wordIndex, charIndex, isDeleting } = this.state;
    const currentWord = typingWords[wordIndex];

    if (!isDeleting) {
      this.setState({
        currentText: currentWord.substring(0, charIndex + 1),
        charIndex: charIndex + 1,
      });

      if (charIndex + 1 === currentWord.length) {
        this.timer = setTimeout(() => {
          this.setState({ isDeleting: true });
          this.type();
        }, 2000);
        return;
      }
    } else {
      this.setState({
        currentText: currentWord.substring(0, charIndex - 1),
        charIndex: charIndex - 1,
      });

      if (charIndex - 1 === 0) {
        this.setState({
          isDeleting: false,
          wordIndex: (wordIndex + 1) % typingWords.length,
        });
      }
    }

    const speed = isDeleting ? 50 : 100;
    this.timer = setTimeout(this.type, speed);
  };

  render() {
    return (
      <span className="typing-wrapper">
        <span className="typing-text gradient-text">
          {this.state.currentText}
        </span>
        <span className="typing-cursor"></span>
      </span>
    );
  }
}

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text gradient-text-glow">
                {greeting.title}
              </h1>
              <div className="greeting-title-bar">
                <span
                  className="greeting-role"
                  style={{ color: theme.secondaryText }}
                >
                  AI/ML Engineer{" "}
                </span>
                <span
                  className="greeting-separator"
                  style={{ color: theme.imageHighlight }}
                >
                  |
                </span>
                <span className="greeting-typing-area">
                  {" "}
                  <TypingAnimation />
                </span>
              </div>
              <p
                className="greeting-tagline"
                style={{ color: theme.imageHighlight }}
              >
                "Building intelligent systems that think, reason, and act."
              </p>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="greeting-buttons">
                <Button
                  text="View My Projects"
                  newTab={false}
                  href="/projects"
                  theme={theme}
                  className="portfolio-repo-btn"
                />
                <Button
                  text="See My Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <div className="feeling-proud-container">
              <FeelingProud theme={theme} />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
