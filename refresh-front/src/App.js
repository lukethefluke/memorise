import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Header from "./components/Navbar";
import Home from "./pages/Home";
import Generate from "./pages/Generate";
import Faqs from "./pages/Faqs";
import Favourites from "./pages/Favourites";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.darkmodeChange = this.darkmodeChange.bind(this);
    this.state = {
      language: "eng",
      version: "NIV",
      darkmode: false,
    };
  }

  darkmodeChange = () => {
    this.setState({
      darkmode: !this.state.darkmode,
    });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Banner />
          <Header  />
          <Switch>
            <Route exact path="/">
              <Home
                darkmode={this.state.darkmode}
                language={this.state.language}
                darkmodeChange={this.darkmodeChange}
              />
            </Route>
            <Route path="/generate">
              <Generate
                darkmode={this.state.darkmode}
                language={this.state.language}
                darkmodeChange={this.darkmodeChange}
              />
            </Route>
            <Route path="/faqs">
              <Faqs
                darkmode={this.state.darkmode}
                language={this.state.language}
                darkmodeChange={this.darkmodeChange}
              />
            </Route>
            <Route path="/links">
              <Favourites
                darkmode={this.state.darkmode}
                language={this.state.language}
                darkmodeChange={this.darkmodeChange}
              />
            </Route>
            <Route
              path="/stpauls"
              component={() => {
                window.location.href = "https://www.stpaulscanterbury.com/";
                return null;
              }}
            />
            <Route
              path="/sim"
              component={() => {
                window.location.href = "https://sim.org";
                return null;
              }}
            />
            <Route
              path="/cms"
              component={() => {
                window.location.href = "https://cms.org.au";
                return null;
              }}
            />
            <Route
              path="/compassion"
              component={() => {
                window.location.href = "https://compassion.com.au";
                return null;
              }}
            />
            <Route
              path="/moore"
              component={() => {
                window.location.href = "https://moore.edu.au";
                return null;
              }}
            />
            <Route
              path="/smbc"
              component={() => {
                window.location.href = "https://smbc.edu.au";
                return null;
              }}
            />
            <Route
              path="/challies"
              component={() => {
                window.location.href = "https://challies.com";
                return null;
              }}
            />
            <Route
              path="/afes"
              component={() => {
                window.location.href = "https://afes.org.au";
                return null;
              }}
            />
            <Route
              path="/koorong"
              component={() => {
                window.location.href = "https://koorong.com";
                return null;
              }}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
