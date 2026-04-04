import React, { Component } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { darkAITheme, lightTheme } from "./theme";
import { GlobalStyles } from "./global";
import ScrollProgress from "./components/scrollProgress/ScrollProgress";
import NeuralNetworkBg from "./containers/greeting/NeuralNetworkBg";

class App extends Component {
  constructor(props) {
    super(props);
    const saved = localStorage.getItem("theme");
    this.state = {
      theme: saved === "light" ? lightTheme : darkAITheme,
    };
  }

  toggleTheme = () => {
    const newTheme =
      this.state.theme.name === "dark" ? lightTheme : darkAITheme;
    this.setState({ theme: newTheme });
    localStorage.setItem("theme", newTheme.name);
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <>
          <GlobalStyles />
          <NeuralNetworkBg theme={this.state.theme} />
          <ScrollProgress />
          <div>
            <Main theme={this.state.theme} onToggle={this.toggleTheme} />
          </div>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
