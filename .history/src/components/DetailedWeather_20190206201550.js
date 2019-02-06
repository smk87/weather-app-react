import React, { Component } from "react";
import Weather from "./Weather";

export default class DetailedWeather extends Component {
  render() {
    return (
      <div>
        <h1>{console.log(this.props.match.params.woeid)}</h1>
        <div className="container">
          <form className="form-inline">
            <Weather id="2344116" />
            <Weather id="638242" />
            <Weather id="44418" />
          </form>
          <form className="form-inline">
            <Weather id="565346" />
            <Weather id="560743" />
            <Weather id="9807" />
          </form>
        </div>
      </div>
    );
  }
}
