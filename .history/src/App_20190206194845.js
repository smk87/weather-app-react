import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

//Import All Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import DetailedWeather from "./components/DetailedWeather";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/search/:keyword" component={Home} />
          <Route
            exact
            path="/weather/:woeid"
            props={hhh:123}
            component={DetailedWeather}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
