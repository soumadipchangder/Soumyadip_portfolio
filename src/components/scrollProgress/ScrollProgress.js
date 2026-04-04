import React, { Component } from "react";

class ScrollProgress extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    this.setState({ width: scrollPercent });
  }

  render() {
    return (
      <div
        className="scroll-progress-bar"
        style={{ width: `${this.state.width}%` }}
      />
    );
  }
}

export default ScrollProgress;
