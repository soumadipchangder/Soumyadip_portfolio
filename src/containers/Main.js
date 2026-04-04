import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";
import ResumePage from "../pages/resume/Resume.js";

export default class Main extends Component {
  componentDidMount() {
    document.documentElement.style.setProperty(
      "--scrollbar-color",
      this.props.theme.imageHighlight
    );
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.theme &&
      this.props.theme &&
      prevProps.theme.imageHighlight !== this.props.theme.imageHighlight
    ) {
      document.documentElement.style.setProperty(
        "--scrollbar-color",
        this.props.theme.imageHighlight
      );
    }
  }
  render() {
    const { theme, onToggle } = this.props;
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash {...props} theme={theme} />
              ) : (
                <Home {...props} theme={theme} onToggle={onToggle} />
              )
            }
          />
          <Route
            path="/home"
            render={(props) => (
              <Home {...props} theme={theme} onToggle={onToggle} />
            )}
          />
          <Route
            path="/experience"
            exact
            render={(props) => (
              <Experience {...props} theme={theme} onToggle={onToggle} />
            )}
          />
          <Route
            path="/education"
            render={(props) => (
              <Education {...props} theme={theme} onToggle={onToggle} />
            )}
          />
          <Route
            path="/opensource"
            render={(props) => (
              <Opensource {...props} theme={theme} onToggle={onToggle} />
            )}
          />
          <Route
            path="/contact"
            render={(props) => (
              <Contact {...props} theme={theme} onToggle={onToggle} />
            )}
          />

          {settings.isSplash && (
            <Route
              path="/splash"
              render={(props) => <Splash {...props} theme={theme} />}
            />
          )}

          <Route
            path="/projects"
            render={(props) => (
              <Projects {...props} theme={theme} onToggle={onToggle} />
            )}
          />
          <Route
            path="/resume"
            render={(props) => (
              <ResumePage {...props} theme={theme} onToggle={onToggle} />
            )}
          />
          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={theme} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
