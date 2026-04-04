import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import WhatIBuild from "../../containers/whatIBuild/WhatIBuild";
import ResearchInnovation from "../../containers/researchInnovation/ResearchInnovation";
import GithubStats from "../../containers/githubStats/GithubStats";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} onToggle={this.props.onToggle} />
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <WhatIBuild theme={this.props.theme} />
        <ResearchInnovation theme={this.props.theme} />
        <GithubStats theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
